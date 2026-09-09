'use client';

/**
 * A tiny external-store wrapper around the consent cookie, meant to be
 * consumed via `useSyncExternalStore`. This is the React-sanctioned way to
 * read a browser-only mutable source (a cookie, here) without triggering
 * the "setState inside a mount effect" anti-pattern, and — critically —
 * without needing any server-side Dynamic API (like `cookies()` from
 * `next/headers`) that would force the whole site out of static rendering.
 *
 * Nothing outside this module ever mutates the cookie directly except
 * through `commitConsent`, so a plain listener set is enough; there is no
 * need to poll or listen for native `storage`/cookie-change events.
 */

import { getCookie } from '@/lib/cookies';
import { saveConsent } from './consent-storage';
import { CONSENT_COOKIE_NAME, type ConsentPreferences, isConsentStale, parseConsentPreferences } from './consent-types';

type Listener = () => void;
const listeners = new Set<Listener>();

let cachedRawValue: string | undefined;
let cachedSnapshot: ConsentPreferences | null = null;

function readSnapshot(): ConsentPreferences | null {
  const raw = getCookie(CONSENT_COOKIE_NAME);

  if (raw === cachedRawValue) {
    return cachedSnapshot;
  }

  cachedRawValue = raw;
  const parsed = parseConsentPreferences(raw);
  cachedSnapshot = parsed && !isConsentStale(parsed) ? parsed : null;
  return cachedSnapshot;
}

export function subscribeToConsent(callback: Listener): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

/** Client snapshot: the real, current, cookie-backed consent (or null if none/stale). */
export function getConsentSnapshot(): ConsentPreferences | null {
  return readSnapshot();
}

/** Server snapshot: always null — matches what a static shell can safely assume. */
export function getConsentServerSnapshot(): ConsentPreferences | null {
  return null;
}

/** Writes the consent cookie and notifies every subscriber (i.e. every ConsentProvider instance) to re-read it. */
export function commitConsent(next: ConsentPreferences): void {
  saveConsent(next);
  cachedRawValue = undefined; // force the next readSnapshot() to recompute
  listeners.forEach((listener) => listener());
}
