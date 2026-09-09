'use client';

/**
 * LinkedIn Insight Tag. Marketing-only: the script is never injected until
 * marketing consent has been granted, and it is explicitly skipped on
 * pages that carry a candidate application form (see the pathname guard
 * passed in by the caller) so applicant data is never exposed to it.
 */

export const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
export const LINKEDIN_CONTACT_CONVERSION_ID = process.env.NEXT_PUBLIC_LINKEDIN_CONTACT_CONVERSION_ID;
export const isLinkedInConfigured = Boolean(LINKEDIN_PARTNER_ID);

let loaded = false;

export function isLinkedInLoaded(): boolean {
  return loaded;
}

export function loadLinkedInInsightTag(): void {
  if (typeof window === 'undefined' || loaded || !LINKEDIN_PARTNER_ID) return;
  loaded = true;

  window._linkedin_partner_id = LINKEDIN_PARTNER_ID;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(LINKEDIN_PARTNER_ID);

  if (!window.lintrk) {
    type Lintrk = ((...args: unknown[]) => void) & { q: unknown[][] };
    const lintrk = ((...args: unknown[]) => {
      lintrk.q.push(args);
    }) as Lintrk;
    lintrk.q = [];
    window.lintrk = lintrk;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode?.insertBefore(script, firstScript);
}

/** Fires a LinkedIn conversion. Only call after marketing consent is granted and the action has actually succeeded. */
export function trackLinkedInConversion(conversionId?: string): void {
  if (typeof window === 'undefined' || !window.lintrk || !conversionId) return;
  window.lintrk('track', { conversion_id: conversionId });
}
