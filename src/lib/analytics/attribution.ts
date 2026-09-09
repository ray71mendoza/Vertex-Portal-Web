'use client';

import { getCookie, setCookie, deleteCookie } from '@/lib/cookies';
import { ATTRIBUTION_COOKIE_MAX_AGE_SECONDS, ATTRIBUTION_COOKIE_NAME } from '@/lib/consent/consent-types';

const EPHEMERAL_STORAGE_KEY = 'vertex_attribution_ephemeral';
const MAX_FIELD_LENGTH = 150;

export interface AttributionTouch {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  li_fat_id?: string;
  landing_path?: string;
  referrer_domain?: string;
  timestamp: string;
}

export interface AttributionData {
  first_touch: AttributionTouch;
  last_touch: AttributionTouch;
}

const TRACKED_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
  'li_fat_id',
] as const;

function truncate(value: string): string {
  return value.slice(0, MAX_FIELD_LENGTH);
}

/** Builds a touch object from the current URL/referrer, plus whether it carries any real acquisition signal. */
function buildTouchFromCurrentPage(): { touch: AttributionTouch; hasSignal: boolean } {
  const touch: AttributionTouch = { timestamp: new Date().toISOString() };
  let hasSignal = false;

  if (typeof window === 'undefined') {
    return { touch, hasSignal };
  }

  const params = new URLSearchParams(window.location.search);
  for (const key of TRACKED_PARAMS) {
    const value = params.get(key);
    if (value) {
      touch[key] = truncate(value);
      hasSignal = true;
    }
  }

  touch.landing_path = truncate(window.location.pathname);

  try {
    if (document.referrer) {
      const referrerUrl = new URL(document.referrer);
      if (referrerUrl.host !== window.location.host) {
        touch.referrer_domain = truncate(referrerUrl.host);
        hasSignal = true;
      }
    }
  } catch {
    // Malformed/unavailable referrer — ignore.
  }

  return { touch, hasSignal };
}

function safeParse(raw: string | null | undefined): AttributionData | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      'first_touch' in parsed &&
      'last_touch' in parsed
    ) {
      return parsed as AttributionData;
    }
    return null;
  } catch {
    return null;
  }
}

function getPersistedAttribution(): AttributionData | null {
  return safeParse(getCookie(ATTRIBUTION_COOKIE_NAME));
}

function persistAttribution(data: AttributionData): void {
  setCookie(ATTRIBUTION_COOKIE_NAME, JSON.stringify(data), {
    maxAgeSeconds: ATTRIBUTION_COOKIE_MAX_AGE_SECONDS,
  });
}

function getEphemeralAttribution(): AttributionData | null {
  if (typeof window === 'undefined') return null;
  try {
    return safeParse(window.sessionStorage.getItem(EPHEMERAL_STORAGE_KEY));
  } catch {
    return null;
  }
}

function setEphemeralAttribution(data: AttributionData): void {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(EPHEMERAL_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage unavailable (private mode, quota) — attribution is best-effort only.
  }
}

function clearEphemeralAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.removeItem(EPHEMERAL_STORAGE_KEY);
  } catch {
    // ignore
  }
}

/**
 * Captures first/last-touch attribution for the current page load. Safe to
 * call on every full page load (it is a no-op for a plain internal SPA
 * transition since this is only wired into a layout-level effect that runs
 * once per hard navigation). When analytics consent has not been granted,
 * data is kept in sessionStorage only and never touches a cookie.
 */
export function captureAttribution(analyticsConsent: boolean): void {
  if (typeof window === 'undefined') return;

  const { touch, hasSignal } = buildTouchFromCurrentPage();
  const base = getPersistedAttribution() || getEphemeralAttribution();

  let next: AttributionData;
  if (!base) {
    next = { first_touch: touch, last_touch: touch };
  } else if (hasSignal) {
    next = { first_touch: base.first_touch, last_touch: touch };
  } else {
    next = base;
  }

  if (analyticsConsent) {
    persistAttribution(next);
    clearEphemeralAttribution();
  } else {
    setEphemeralAttribution(next);
  }
}

/** Call when the user grants analytics consent to migrate any in-memory attribution into the persisted cookie. */
export function migrateEphemeralAttributionToCookie(): void {
  const ephemeral = getEphemeralAttribution();
  if (ephemeral) {
    persistAttribution(ephemeral);
    clearEphemeralAttribution();
  }
}

/** Call when analytics consent is revoked to remove persisted attribution data (the cookie itself is deleted by consent-manager). */
export function clearAttribution(): void {
  clearEphemeralAttribution();
  deleteCookie(ATTRIBUTION_COOKIE_NAME);
}

/** Privacy-safe attribution snapshot suitable for attaching to internal lead events. Never contains PII. */
export function getAttributionSnapshot(): AttributionData | null {
  return getPersistedAttribution() || getEphemeralAttribution();
}
