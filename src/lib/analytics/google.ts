'use client';

/**
 * Google tag (gtag.js) integration: GA4, Google Ads conversion
 * infrastructure, and Google Consent Mode v2.
 *
 * Consent Mode v2 is the official Google-recommended pattern for this
 * exact scenario: the tag loads immediately with every optional storage
 * type defaulted to "denied" (see `setDefaultConsent`), which lets Google
 * operate in a cookieless/modeled mode until the user actually grants
 * consent — at which point `updateConsent` flips the relevant storage
 * types to "granted". No optional cookie is written while defaults are
 * denied.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
export const GOOGLE_ADS_CONTACT_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION_LABEL;
export const GOOGLE_ADS_JOB_APPLICATION_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_JOB_APPLICATION_CONVERSION_LABEL;

export const isGA4Configured = Boolean(GA_MEASUREMENT_ID);
export const isGoogleAdsConfigured = Boolean(GOOGLE_ADS_ID);
export const isGoogleTagConfigured = isGA4Configured || isGoogleAdsConfigured;

let configured = false;

/**
 * `window.dataLayer`/`window.gtag` and the Consent Mode v2 default state
 * are bootstrapped by the inline <Script id="vertex-consent-default">
 * rendered in AnalyticsScripts — that must run before this module ever
 * pushes anything, and before the gtag.js loader script. This helper just
 * pushes onto the already-initialized dataLayer.
 */
function gtag(...args: unknown[]): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/** Registers the GA4 stream and/or Google Ads account with gtag. Call once, after the gtag.js script has loaded. */
export function configureGoogleTag(): void {
  if (typeof window === 'undefined' || configured || !isGoogleTagConfigured) return;
  configured = true;

  gtag('js', new Date());
  if (GA_MEASUREMENT_ID) gtag('config', GA_MEASUREMENT_ID);
  if (GOOGLE_ADS_ID) gtag('config', GOOGLE_ADS_ID);
}

export interface GoogleConsentState {
  analytics: boolean;
  marketing: boolean;
}

/** Pushes a Consent Mode v2 update reflecting the user's current choice. */
export function updateGoogleConsent({ analytics, marketing }: GoogleConsentState): void {
  if (typeof window === 'undefined') return;

  gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    functionality_storage: analytics ? 'granted' : 'denied',
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: marketing ? 'granted' : 'denied',
    ad_personalization: marketing ? 'granted' : 'denied',
  });
}

export function trackGA4PageView(pathname: string): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  gtag('event', 'page_view', { page_path: pathname });
}

export function trackGA4Event(name: string, params: Record<string, unknown>): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  gtag('event', name, params);
}

/** Fires a Google Ads conversion. Only call this after marketing consent is granted and the action has actually succeeded. */
export function trackGoogleAdsConversion(conversionLabel: string | undefined, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined' || !GOOGLE_ADS_ID || !conversionLabel) return;
  gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
    ...params,
  });
}
