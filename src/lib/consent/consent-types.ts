/**
 * Central consent data model for the Vertex cookie/consent architecture.
 * Bump CONSENT_VERSION whenever the set of categories, vendors, or their
 * purposes changes meaningfully — this makes the site re-prompt everyone.
 */

export const CONSENT_VERSION = '1.0';

export const CONSENT_COOKIE_NAME = 'vertex_cookie_consent';
export const LOCALE_COOKIE_NAME = 'vertex_locale';
export const ATTRIBUTION_COOKIE_NAME = 'vertex_attribution';

/** Consent cookie lifetime: ~12 months. */
export const CONSENT_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;
/** Locale preference cookie lifetime: ~12 months. */
export const LOCALE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;
/** Attribution cookie lifetime: ~60 days. */
export const ATTRIBUTION_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 60;

export type ConsentCategory = 'necessary' | 'preferences' | 'analytics' | 'marketing';

export interface ConsentPreferences {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

export const DEFAULT_CONSENT: Omit<ConsentPreferences, 'timestamp'> = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
  version: CONSENT_VERSION,
};

/** Returns a fresh "everything denied except necessary" preferences object. */
export function createDefaultConsent(): ConsentPreferences {
  return { ...DEFAULT_CONSENT, timestamp: new Date().toISOString() };
}

/** Returns an "accept all" preferences object. */
export function createAcceptAllConsent(): ConsentPreferences {
  return {
    necessary: true,
    preferences: true,
    analytics: true,
    marketing: true,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
}

/**
 * Safe runtime parser for the consent cookie's JSON payload. Expects an
 * already-decoded string (both `getCookie` on the client and
 * `next/headers`'s `cookies()` on the server decode the raw cookie value
 * before handing it back). Never throws — malformed or missing content
 * simply falls back to "no optional consent".
 */
export function parseConsentPreferences(raw: string | undefined | null): ConsentPreferences | null {
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as unknown;

    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      'necessary' in parsed &&
      'preferences' in parsed &&
      'analytics' in parsed &&
      'marketing' in parsed &&
      'version' in parsed &&
      'timestamp' in parsed
    ) {
      const candidate = parsed as Record<string, unknown>;
      return {
        necessary: true,
        preferences: candidate.preferences === true,
        analytics: candidate.analytics === true,
        marketing: candidate.marketing === true,
        version: typeof candidate.version === 'string' ? candidate.version : CONSENT_VERSION,
        timestamp: typeof candidate.timestamp === 'string' ? candidate.timestamp : new Date().toISOString(),
      };
    }

    return null;
  } catch {
    return null;
  }
}

/** True when a stored consent record exists but was saved under an older CONSENT_VERSION. */
export function isConsentStale(consent: ConsentPreferences | null): boolean {
  if (!consent) return true;
  return consent.version !== CONSENT_VERSION;
}
