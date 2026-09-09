'use client';

import Script from 'next/script';
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID, isGoogleTagConfigured } from '@/lib/analytics/google';

/**
 * Loads Google's gtag.js unconditionally (per Google's official Consent
 * Mode v2 pattern: the tag can and should load immediately, operating in
 * a cookieless/modeled mode until consent is granted). Both scripts use
 * `afterInteractive` and Next.js executes same-strategy scripts in JSX
 * order, so the consent-default bootstrap always runs before the loader.
 *
 * Renders nothing when neither GA4 nor Google Ads is configured.
 */
export function AnalyticsScripts() {
  if (!isGoogleTagConfigured) return null;

  const tagId = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;

  return (
    <>
      <Script id="vertex-consent-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ window.dataLayer.push(arguments); }
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>
      <Script id="vertex-gtag-loader" src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`} strategy="afterInteractive" />
    </>
  );
}
