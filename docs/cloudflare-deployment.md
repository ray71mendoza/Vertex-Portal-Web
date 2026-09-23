# Deploying Vertex on Cloudflare Workers

This app runs on Cloudflare Workers via [OpenNext's Cloudflare adapter](https://opennext.js.org/cloudflare)
(`@opennextjs/cloudflare`), which converts the standard `next build` output
into a Worker. The development workflow (`next dev`, `next build`) is
unchanged — OpenNext only adds a build/deploy step on top.

## Why OpenNext instead of `vinext`

Cloudflare's own AI-built `vinext` adapter was evaluated and rejected for
production use here: it reimplements Next.js's engine on top of Vite (its own
dev server, build pipeline, image optimizer, cache adapter) and is explicitly
labelled experimental (~94% API coverage, built by one engineer in about a
week). OpenNext reached GA 1.0 in February 2026, is co-maintained by
Cloudflare, and works by transforming the *standard* `next build` output — so
it preserves real Next.js behavior (App Router, RSC, Route Handlers) with far
less reimplementation risk, and needs no bespoke toolchain to maintain. Given
this project has no middleware and is almost entirely static, OpenNext's
compatibility risk here is minimal.

## Architecture at a glance

- Static/SSG pages (the vast majority of the site) are served directly from
  the Worker's `ASSETS` binding — no compute per request.
- The one dynamic route, `POST /api/contact`, runs as a Worker function.
- Images go through Cloudflare's `IMAGES` binding — `next/image` works
  unmodified, no `next.config.ts` loader changes were needed.
- `next/font/google` (Montserrat) is resolved at build time as before —
  irrelevant to the runtime, no change needed.

## Prerequisites (one-time, in the Cloudflare dashboard)

1. **Resend account** (email delivery — SMTP does not work on Workers, see
   below): create an account at resend.com, verify the `mail.vertexcorp.com.co`
   sending domain (DNS records), generate an API key.
2. **Workers KV namespace** for rate limiting — **already created** for this
   account/project (binding `RATE_LIMIT_KV`, wired into `wrangler.jsonc`).
   To recreate it elsewhere (a different Cloudflare account, or if it's ever
   deleted):
   ```bash
   npx wrangler kv namespace create RATE_LIMIT_KV
   ```
   then update the `id` under `kv_namespaces` in `wrangler.jsonc` to match.
   Without a valid binding, `src/lib/rateLimit.ts` fails open (allows every
   request, logging a warning) — fine for local dev, **not** fine for
   production.
3. **Cloudflare Web Analytics**: Dashboard → Analytics & Logs → Web Analytics
   → add the site → copy the beacon token into
   `NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN`.
4. Optionally, a **Rate Limiting Rule** (Security → WAF → Rate limiting
   rules) on `/api/contact` as an edge-level defense independent of the KV
   limiter above — free on most plans, cheap extra protection.

## Environment variables & secrets

| Variable | Where | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | Cloudflare secret (never a plain var) | `npx wrangler secret put RESEND_API_KEY` |
| `CONTACT_FROM_EMAIL` | Cloudflare var | Must be on the verified Resend domain |
| `CONTACT_TO_EMAIL` | Cloudflare var | Defaults to `gerenciavertexsas@gmail.com` if unset |
| `NEXT_PUBLIC_SITE_URL` | Cloudflare var (build-time) | Exact production domain, no trailing slash |
| `NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` | Cloudflare var | Optional — omit to disable the beacon |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_CLARITY_PROJECT_ID`, `NEXT_PUBLIC_LINKEDIN_*`, `NEXT_PUBLIC_GOOGLE_ADS_*`, `NEXT_PUBLIC_META_PIXEL_ID` | Cloudflare vars | All optional, see `docs/analytics-and-cookies.md` |

Local development: copy `.dev.vars.example` to `.dev.vars` (gitignored, never
commit real secrets there either — it's for your own machine only) and fill
in real values.

## Contact form architecture (`src/app/api/contact/route.ts`)

- **Visitor IP** (`src/lib/getClientIp.ts`): prefers `CF-Connecting-IP`
  (set by Cloudflare's edge from the actual TCP connection — not spoofable
  by the client), falling back to the first `X-Forwarded-For` entry (for
  environments without Cloudflare in front, e.g. plain `next dev`), then
  `'unknown'`. Only ever used as a rate-limit bucket key, never for
  authorization.
- **Rate limiting**: 5 requests / 60s per IP, fixed window, Workers KV
  (`RATE_LIMIT_KV`). Returns `429` with a `Retry-After: 60` header.
- **Payload size guard**: requests with `Content-Length` over 20KB are
  rejected with `413` before the body is ever parsed as JSON.
- **Honeypot**: a hidden `honeypot` field, positioned off-screen (not
  `display:none` — some bots specifically check computed style to evade
  `display:none` honeypots) and `aria-hidden` for screen readers. A
  non-empty value returns `200 { success: true }` without sending any
  email — the rate limiter still counts the request.
- **Email delivery**: Resend's HTTP API (`src/lib/mailer.ts`), not SMTP —
  Cloudflare Workers cannot open raw TCP/SMTP sockets. The outbound request
  has a 10s timeout. Resend's own error details are logged server-side only
  (`console.error`) and never forwarded to the visitor — they always get a
  safe, generic message.
- **Sender domain**: `CONTACT_FROM_EMAIL` must be on a domain verified in
  Resend's dashboard — a plain Gmail address will **not** work as a sender
  (it can still be the destination via `CONTACT_TO_EMAIL`, which has no such
  requirement).
- **Frontend** (`src/components/forms/ContactForm.tsx`): distinguishes a
  `429` response (shows a "too many attempts, wait a minute" message) from
  every other failure (generic "couldn't send, try again or email us
  directly" message) and from success — it never shows the success state
  unless the API actually returned `2xx`.

## Local development

```bash
npm run dev          # standard Next.js dev server — day-to-day work
```

```bash
npm run preview      # builds with OpenNext and runs the actual Worker
                      # locally via wrangler/workerd — use this to verify
                      # Workers-specific behavior before deploying
```

`npm run preview` serves on `http://localhost:8787`.

## Production build & deploy

```bash
npm run build         # sanity-check the plain Next.js build first
npm run deploy         # opennextjs-cloudflare build && opennextjs-cloudflare deploy
```

The first deploy publishes to `<name>.<subdomain>.workers.dev` (from
`wrangler.jsonc`'s `name`). **Verify the full test checklist there before
touching DNS or a custom domain.**

## GitHub → Cloudflare automatic deploys

Connect the repository in the Cloudflare dashboard (Workers & Pages → your
Worker → Settings → Builds) pointing at this repo:

- Build command: `npm run deploy` (or `npx opennextjs-cloudflare build && npx opennextjs-cloudflare deploy` if the dashboard needs the deploy step split out)
- Production branch: `main` (or `cloudflare-production` until it's merged)
- Preview deployments: enabled for pull requests, if you want a preview URL per PR

Once connected, `git push` triggers a build automatically — no manual deploy
sequence needed day to day.

## Custom domain

Only after the `*.workers.dev` checklist below passes: Workers & Pages → your
Worker → Settings → Domains & Routes → add `vertexcorp.com.co`. Keep the existing
Vercel deployment live in parallel until DNS is actually switched — this is a
manual decision, not something to automate.

## Rollback

- **Code rollback**: Workers & Pages → your Worker → Deployments → pick a
  previous deployment → "Rollback to this deployment". Instant, no rebuild.
- **DNS rollback**: since Vercel stays live throughout staging, reverting is
  just pointing DNS back — no data migration involved (the site has no
  database).

## Test checklist before touching DNS

- [ ] `/es`, `/en`, and all their child routes load
- [ ] Language switcher works both directions, no redirect loop
- [ ] Contact form: submits successfully with real `RESEND_API_KEY` set;
      rejects spam via honeypot; rate-limits after 5 requests/minute per IP
- [ ] Job application `mailto:` link still opens correctly (unchanged, out of
      scope for this migration)
- [ ] Images render at full quality, no layout shift
- [ ] Fonts render without a flash of unstyled text
- [ ] Cookie banner/preferences/consent revocation all behave as documented
      in `docs/analytics-and-cookies.md`
- [ ] 404 page renders for an unknown route
- [ ] Direct URL navigation and hard refresh work on deep dynamic routes
      (e.g. `/es/servicios/desarrollo-de-software`)
- [ ] `sitemap.xml` and `robots.txt` return correct, complete content
- [ ] No console errors, no CSP violations
- [ ] Lighthouse/PageSpeed run on the `*.workers.dev` URL, compared against
      the current Vercel production numbers (don't assume Cloudflare is
      faster — measure it)

## Known Windows-specific note

OpenNext's Cloudflare build prints a warning that it is "not fully compatible
with Windows" and recommends WSL. It ran successfully end-to-end when this
migration was built and tested (build, local Workers preview, all routes,
forms, images), but if you hit an unexplained build failure on a Windows
machine, retry inside WSL before assuming it's a real bug.
