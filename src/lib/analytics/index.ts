'use client';

/**
 * Public tracking API. Every component in the app calls into these
 * functions — never a vendor SDK directly. `setAnalyticsContext` is called
 * by ConsentProvider whenever consent or the current pathname changes, and
 * every `track*` call below consults that state plus the EVENT_PROVIDER_MATRIX
 * (see ./events.ts) to decide which vendors actually receive the event.
 */

import type { ConsentPreferences } from '@/lib/consent/consent-types';
import {
  type AnalyticsEventName,
  type AnalyticsEventProperties,
  type AnalyticsVendor,
  EVENT_PROVIDER_MATRIX,
  isSensitiveApplicationPath,
} from './events';
import {
  GOOGLE_ADS_CONTACT_CONVERSION_LABEL,
  trackGA4Event,
  trackGA4PageView,
  trackGoogleAdsConversion,
} from './google';
import { trackClarityEvent } from './clarity';
import { LINKEDIN_CONTACT_CONVERSION_ID, trackLinkedInConversion } from './linkedin';
import { trackMetaEvent, trackMetaPageView } from './meta';
import { getAttributionSnapshot } from './attribution';

const DEBUG = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === 'true';

function debugLog(...args: unknown[]): void {
  if (DEBUG) console.log('[Vertex Analytics]', ...args);
}

let currentConsent: ConsentPreferences | null = null;
let currentPathname = '';

/** Called by ConsentProvider whenever consent or the current route changes. */
export function setAnalyticsContext(consent: ConsentPreferences | null, pathname: string): void {
  currentConsent = consent;
  currentPathname = pathname;
}

function isGranted(category: 'analytics' | 'marketing'): boolean {
  return Boolean(currentConsent?.[category]);
}

function isOnSensitivePage(): boolean {
  return isSensitiveApplicationPath(currentPathname);
}

function vendorAllowed(vendor: AnalyticsVendor, gate: 'YES' | 'A' | 'M' | 'NO'): boolean {
  if (gate === 'NO') return false;
  if (gate === 'YES') return true;
  if (gate === 'A') return isGranted('analytics');
  // gate === 'M'
  if ((vendor === 'linkedin' || vendor === 'meta' || vendor === 'googleAds') && isOnSensitivePage()) return false;
  return isGranted('marketing');
}

/**
 * Routes a generic event to GA4 / Clarity per the matrix. Meta, LinkedIn,
 * and Google Ads only ever receive purpose-built conversion calls (see
 * trackCommercialLead below) — not every generic event — to avoid
 * inventing ad-vendor "custom events" outside their approved sets.
 */
export function trackEvent(name: AnalyticsEventName, properties: AnalyticsEventProperties = {}): void {
  const routing = EVENT_PROVIDER_MATRIX[name];
  debugLog('event:', name, properties);

  if (vendorAllowed('ga4', routing.ga4)) {
    trackGA4Event(name, properties);
  }
  if (vendorAllowed('clarity', routing.clarity)) {
    trackClarityEvent(name);
  }
  if (name === 'page_view' && vendorAllowed('meta', routing.meta)) {
    trackMetaPageView();
  }
  if (name === 'contact_cta_click' && vendorAllowed('meta', routing.meta)) {
    trackMetaEvent('ViewContent');
  }
}

/** Call once per real page load/route change. */
export function trackPageView(pathname: string): void {
  const routing = EVENT_PROVIDER_MATRIX.page_view;
  debugLog('page_view:', pathname);

  if (vendorAllowed('ga4', routing.ga4)) {
    trackGA4PageView(pathname);
  }
  if (vendorAllowed('meta', routing.meta)) {
    trackMetaPageView();
  }
}

export function trackServiceView(properties: { service_slug: string; service_name: string; locale: string }): void {
  trackEvent('service_view', properties);
}

export function trackProjectView(properties: { project_slug: string; project_name: string; locale: string }): void {
  trackEvent('project_view', properties);
}

export function trackContactCtaClick(properties: AnalyticsEventProperties = {}): void {
  trackEvent('contact_cta_click', properties);
}

export function trackEmailClick(properties: AnalyticsEventProperties = {}): void {
  trackEvent('email_click', properties);
}

export function trackPhoneClick(properties: AnalyticsEventProperties = {}): void {
  trackEvent('phone_click', properties);
}

export function trackContactFormStart(properties: AnalyticsEventProperties = {}): void {
  trackEvent('contact_form_start', properties);
}

export function trackCareersView(properties: AnalyticsEventProperties = {}): void {
  trackEvent('careers_view', properties);
}

export function trackJobView(properties: { job_slug: string; job_title: string; locale: string }): void {
  trackEvent('job_view', properties);
}

export function trackJobApplicationStart(properties: { job_slug: string; job_title: string; locale: string }): void {
  trackEvent('job_application_start', properties);
}

/**
 * Fire only after a commercial contact form submission has ACTUALLY
 * succeeded (never on click, never on a failed/validation-rejected
 * submit). Attaches a privacy-safe first/last-touch attribution snapshot
 * as event metadata — never sent as raw form contents, and never
 * containing name/email/phone/message.
 */
export function trackCommercialLead(properties: { service?: string; locale: string }): void {
  const attribution = getAttributionSnapshot();

  trackEvent('contact_form_submit', {
    ...properties,
    first_touch_source: attribution?.first_touch.utm_source,
    first_touch_medium: attribution?.first_touch.utm_medium,
    first_touch_campaign: attribution?.first_touch.utm_campaign,
    last_touch_source: attribution?.last_touch.utm_source,
    last_touch_medium: attribution?.last_touch.utm_medium,
    last_touch_campaign: attribution?.last_touch.utm_campaign,
    landing_page: attribution?.first_touch.landing_path,
  });

  if (!isOnSensitivePage() && isGranted('marketing')) {
    trackMetaEvent('Lead');
    trackGoogleAdsConversion(GOOGLE_ADS_CONTACT_CONVERSION_LABEL);
    trackLinkedInConversion(LINKEDIN_CONTACT_CONVERSION_ID);
  }
}

/**
 * Fire only after a job application has actually been submitted
 * successfully. Deliberately never reaches LinkedIn/Meta/Google Ads —
 * candidate activity is never used to build advertising audiences.
 */
export function trackJobApplicationSubmit(properties: { job_slug: string; job_title: string; locale: string }): void {
  trackEvent('job_application_submit', properties);
}
