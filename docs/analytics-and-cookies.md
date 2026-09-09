# Analytics, Attribution & Cookie Consent Architecture

This document describes the first-party cookie consent system and the analytics/
attribution/marketing tracking stack built on top of it. It is intended for
engineers who need to add a new tracked event, wire up a new vendor, or debug
consent behavior.

## 1. Overview

Vertex uses a custom, consent-gated tracking architecture — no third-party CMP
library. Every vendor script is only ever injected client-side, and only once
the relevant consent category has been granted (Google's tag is the one
documented exception: it loads immediately in a cookieless "denied" mode per
Google Consent Mode v2, see §4).

Components never call a vendor SDK directly. They call the functions exported
from [`src/lib/analytics/index.ts`](../src/lib/analytics/index.ts), which
consult the current consent state and the event/provider matrix in
[`src/lib/analytics/events.ts`](../src/lib/analytics/events.ts) to decide which
vendors (if any) actually receive the event.

## 2. Consent categories & cookies

| Category | Cookie | Purpose |
| --- | --- | --- |
| Necessary | `vertex_cookie_consent` | Stores the consent decision itself. Never deleted on rejection. |
| Preferences | `vertex_locale` | Remembers the user's chosen language, alongside the existing path-based locale routing. |
| Analytics | `_ga*`, `_clck`, `_clsk`, `vertex_attribution` | Vercel Web Analytics (always on, cookieless), GA4, Microsoft Clarity, first/last-touch attribution. |
| Marketing | `_fbp`, `_fbc`, `fr`, `li_fat_id`, `_gcl_*`, etc. | LinkedIn Insight Tag, Meta Pixel, Google Ads. |

Consent is stored as JSON in `vertex_cookie_consent`
(`src/lib/consent/consent-types.ts`), versioned via `CONSENT_VERSION`. Bump
that constant whenever the category/vendor set changes meaningfully — every
visitor will be re-prompted.

Reading the cookie is done through
[`src/lib/consent/consent-store.ts`](../src/lib/consent/consent-store.ts), a
manual external store consumed via React's `useSyncExternalStore` in
[`src/providers/ConsentProvider.tsx`](../src/providers/ConsentProvider.tsx).
This is deliberate: reading the cookie via `next/headers`'s `cookies()` inside
a shared layout is a Next.js "Dynamic API" and forces the entire site out of
static rendering. `useSyncExternalStore` reads the cookie client-only, so
every static/SSG route stays static.

## 3. UI

- `src/components/consent/CookieBanner.tsx` — bottom banner shown until the
  user responds (Accept all / Reject non-essential / Customize).
- `src/components/consent/CookiePreferencesModal.tsx` — focus-trapped,
  keyboard-accessible modal with per-category toggles. Reopenable at any time
  via the "Cookie preferences" link in the footer
  (`src/components/consent/CookiePreferencesButton.tsx`).
- `/es/cookies` and `/en/cookies` — full Cookie Policy page
  (`src/content/cookiePolicy.ts` + `src/components/pages/LegalPageContent.tsx`).

Revoking a category (`src/lib/consent/consent-manager.ts`) deletes that
category's known first-party cookies and prevents vendors from re-initializing
on subsequent navigation — it never deletes `vertex_cookie_consent` itself.

## 4. Vendors

| Vendor | File | Consent gate | Notes |
| --- | --- | --- | --- |
| Vercel Web Analytics | `src/lib/analytics/vercel.ts` | None (cookieless) | Always on; not classified as advertising. |
| Google Analytics 4 + Consent Mode v2 | `src/lib/analytics/google.ts` | Analytics | `gtag.js` loads immediately in "all denied" mode; `gtag('consent','update',...)` fires on every consent change. |
| Google Ads conversions | `src/lib/analytics/google.ts` | Marketing | Conversion labels are per-action env vars; only fired for confirmed actions, never page views. |
| Microsoft Clarity | `src/lib/analytics/clarity.ts` | Analytics | Uses Consent API **v2** (`clarity('consentv2', ...)`), not the deprecated boolean API. Script itself is only injected once Analytics consent is granted. |
| LinkedIn Insight Tag | `src/lib/analytics/linkedin.ts` | Marketing | Never loaded on `/(es\|en)/(empleos\|jobs)/[slug]` (see `isSensitiveApplicationPath`). |
| Meta Pixel | `src/lib/analytics/meta.ts` | Marketing | Approved event set only (`PageView`, `ViewContent`, `Contact`, `Lead`); no Advanced Matching, no form field values. |

Vendor scripts are bootstrapped from
`src/components/consent/AnalyticsScripts.tsx` (Google) and lazily from
`src/providers/ConsentProvider.tsx` (Clarity/LinkedIn/Meta), which reacts to
consent changes and the current pathname.

## 5. Event taxonomy

All events are declared in `src/lib/analytics/events.ts`
(`AnalyticsEventName`) with a routing matrix (`EVENT_PROVIDER_MATRIX`) mapping
each event to `YES` (always), `A` (Analytics consent), `M` (Marketing
consent), or `NO` (never) per vendor. Career/application events are hard-coded
`NO` for every advertising vendor — candidate activity never builds ad
audiences.

To add a new event:
1. Add its name to `AnalyticsEventName`.
2. Add a row to `EVENT_PROVIDER_MATRIX`.
3. Add a `track*` wrapper in `src/lib/analytics/index.ts` if useful, or call
   `trackEvent(name, properties)` directly from the component.

## 6. Attribution

`src/lib/analytics/attribution.ts` captures first-touch and last-touch UTM/
click-id parameters plus the landing path and referrer domain
(`buildTouchFromCurrentPage`). Before Analytics consent is granted, this is
kept in `sessionStorage` only; once granted, it is persisted to the
`vertex_attribution` cookie (~60 days) and the ephemeral copy is cleared. It
never contains name/email/phone/message/CV content — only truncated UTM/click-
id values.

## 7. Environment variables

See `.env.example`. Every vendor ID is optional — an unset ID makes that
vendor's `isXConfigured` flag `false` and the vendor is skipped entirely, never
faked.

## 8. Testing consent locally

1. Run `npm run dev`, open the site — the banner should appear on first visit.
2. **Accept all**: DevTools → Application → Cookies should show
   `vertex_cookie_consent` with all categories `true`, plus `vertex_attribution`
   and any vendor cookies once their scripts load.
3. **Reject non-essential**: only `vertex_cookie_consent` (necessary-only)
   should be present; no GA/Clarity/LinkedIn/Meta network requests should fire
   (check the Network tab).
4. **Customize**: toggle individual categories in the modal and confirm only
   the corresponding vendors activate.
5. **Revoke**: turn a previously-granted category off and confirm its cookies
   are deleted and no further events reach that vendor on subsequent
   navigation.
6. To re-trigger the banner during development, delete the
   `vertex_cookie_consent` cookie (DevTools → Application → Cookies) or bump
   `CONSENT_VERSION` in `src/lib/consent/consent-types.ts`.

## 9. Bumping `CONSENT_VERSION`

Increment the string in `src/lib/consent/consent-types.ts` whenever the set of
categories, vendors, or their purposes changes. `isConsentStale()` treats any
stored consent with a different version as absent, so every visitor sees the
banner again on their next visit.
