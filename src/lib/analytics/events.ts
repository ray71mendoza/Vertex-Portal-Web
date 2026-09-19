/**
 * Central event taxonomy and provider-routing matrix. Components never
 * talk to a vendor SDK directly — they call the functions in
 * `lib/analytics/index.ts`, which consult this matrix to decide which
 * providers (if any) should receive a given event under the current
 * consent state.
 */

export type AnalyticsEventName =
  | 'page_view'
  | 'contact_cta_click'
  | 'contact_form_start'
  | 'contact_form_submit'
  | 'email_click'
  | 'phone_click'
  | 'service_view'
  | 'project_view'
  | 'project_cta_click'
  | 'careers_view'
  | 'job_view'
  | 'job_application_start'
  | 'job_application_submit';

export type AnalyticsEventProperties = Record<string, string | number | boolean | undefined>;

export type AnalyticsVendor = 'ga4' | 'clarity' | 'linkedin' | 'googleAds' | 'meta';

type Gate = 'YES' | 'A' | 'M' | 'NO';

/**
 * EVENT / PROVIDER MATRIX
 * YES = always sent regardless of consent (reserved for a cookieless/anonymous
 *       vendor; none of the current vendors qualify — Cloudflare Web Analytics
 *       is cookieless too, but it has no custom-event API, only an automatic
 *       pageview beacon mounted unconditionally in the layout, so it never
 *       appears in this matrix at all)
 * A   = sent only when Analytics consent is granted
 * M   = sent only when Marketing consent is granted
 * NO  = never sent to this provider (career/application events are never
 *       shared with advertising vendors, and no event is treated as a
 *       Google Ads/LinkedIn conversion unless it represents a confirmed
 *       commercial lead)
 */
export const EVENT_PROVIDER_MATRIX: Record<AnalyticsEventName, Record<AnalyticsVendor, Gate>> = {
  page_view: { ga4: 'A', clarity: 'A', linkedin: 'M', googleAds: 'M', meta: 'M' },
  service_view: { ga4: 'A', clarity: 'A', linkedin: 'M', googleAds: 'NO', meta: 'M' },
  project_view: { ga4: 'A', clarity: 'A', linkedin: 'M', googleAds: 'NO', meta: 'M' },
  contact_cta_click: { ga4: 'A', clarity: 'A', linkedin: 'M', googleAds: 'NO', meta: 'M' },
  project_cta_click: { ga4: 'A', clarity: 'A', linkedin: 'M', googleAds: 'NO', meta: 'M' },
  email_click: { ga4: 'A', clarity: 'A', linkedin: 'NO', googleAds: 'NO', meta: 'NO' },
  phone_click: { ga4: 'A', clarity: 'A', linkedin: 'NO', googleAds: 'NO', meta: 'NO' },
  contact_form_start: { ga4: 'A', clarity: 'A', linkedin: 'NO', googleAds: 'NO', meta: 'NO' },
  contact_form_submit: { ga4: 'A', clarity: 'A', linkedin: 'M', googleAds: 'M', meta: 'M' },
  careers_view: { ga4: 'A', clarity: 'A', linkedin: 'NO', googleAds: 'NO', meta: 'NO' },
  job_view: { ga4: 'A', clarity: 'A', linkedin: 'NO', googleAds: 'NO', meta: 'NO' },
  job_application_start: { ga4: 'A', clarity: 'A', linkedin: 'NO', googleAds: 'NO', meta: 'NO' },
  job_application_submit: { ga4: 'A', clarity: 'A', linkedin: 'NO', googleAds: 'NO', meta: 'NO' },
};

/**
 * Job/career detail pages carry a candidate application form. Per the
 * careers privacy rule, marketing pixels (LinkedIn/Meta) are never loaded
 * on these specific pages, regardless of the matrix above or consent
 * state — this is a hard page-level guard, not just an event filter.
 */
export function isSensitiveApplicationPath(pathname: string): boolean {
  return /^\/(es|en)\/(empleos|jobs)\/[^/]+\/?$/.test(pathname);
}
