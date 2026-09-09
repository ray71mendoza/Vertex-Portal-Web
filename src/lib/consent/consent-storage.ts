'use client';

import { getCookie, setCookie } from '@/lib/cookies';
import {
  CONSENT_COOKIE_MAX_AGE_SECONDS,
  CONSENT_COOKIE_NAME,
  type ConsentPreferences,
  parseConsentPreferences,
} from './consent-types';

/**
 * Reads and safely parses the `vertex_cookie_consent` cookie. Returns null
 * when no cookie exists or its content is malformed — callers must treat
 * null as "no optional consent has been granted".
 */
export function getStoredConsent(): ConsentPreferences | null {
  return parseConsentPreferences(getCookie(CONSENT_COOKIE_NAME));
}

/** Persists the given consent preferences as the first-party consent cookie. */
export function saveConsent(preferences: ConsentPreferences): void {
  setCookie(CONSENT_COOKIE_NAME, JSON.stringify(preferences), {
    maxAgeSeconds: CONSENT_COOKIE_MAX_AGE_SECONDS,
  });
}
