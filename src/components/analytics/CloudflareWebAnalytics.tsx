import Script from 'next/script';

const BEACON_TOKEN = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;

/**
 * Cloudflare Web Analytics — cookieless and anonymized (no client-side
 * storage, no fingerprinting), so per the site's consent policy it is
 * "necessary" infrastructure and mounted unconditionally, same as Vercel
 * Web Analytics was before it.
 *
 * Unlike Vercel Analytics, the free Cloudflare beacon has no custom-event
 * API — it only auto-reports pageviews/performance from the script tag
 * itself, so there is no `track()` call to wire into the event matrix in
 * ./events.ts. Custom event telemetry now only reaches GA4/Clarity, gated
 * by Analytics consent as before.
 *
 * Renders nothing when no token is configured (see .env.example).
 */
export function CloudflareWebAnalytics() {
  if (!BEACON_TOKEN) return null;

  return (
    <Script
      id="cloudflare-web-analytics"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token: BEACON_TOKEN })}
      strategy="afterInteractive"
    />
  );
}
