'use client';

import { deleteCookie, deleteCookiesByPrefix } from '@/lib/cookies';
import { ATTRIBUTION_COOKIE_NAME, LOCALE_COOKIE_NAME, type ConsentCategory, type ConsentPreferences } from './consent-types';

/**
 * Known first-party cookie name prefixes created by each optional vendor,
 * used only for best-effort cleanup on revocation. Vendor cookie naming can
 * change over time — this list should be reviewed against current provider
 * documentation periodically (see docs/analytics-and-cookies.md).
 */
const COOKIE_PREFIXES_BY_CATEGORY: Record<'analytics' | 'marketing', string[]> = {
  analytics: ['_ga', '_gid', '_gat', '_clck', '_clsk', ATTRIBUTION_COOKIE_NAME],
  marketing: [
    '_fbp',
    '_fbc',
    'fr',
    'li_fat_id',
    'li_gc',
    'li_sugr',
    'lidc',
    'bcookie',
    'bscookie',
    'UserMatchHistory',
    'AnalyticsSyncHistory',
    '_gcl',
    'test_cookie',
  ],
};

/**
 * Deletes the known first-party cookies for any category that just went
 * from granted -> denied. Never touches `vertex_cookie_consent` itself —
 * that cookie must survive a rejection since it *is* the rejection record.
 */
export function cleanupRevokedCategoryCookies(
  previous: ConsentPreferences | null,
  next: ConsentPreferences
): void {
  const categories: Array<'analytics' | 'marketing'> = ['analytics', 'marketing'];

  for (const category of categories) {
    const wasGranted = previous ? previous[category] : false;
    const isGranted = next[category];

    if (wasGranted && !isGranted) {
      deleteCookiesByPrefix(COOKIE_PREFIXES_BY_CATEGORY[category]);
    }
  }

  // The attribution cookie specifically depends on analytics consent
  // regardless of whether it was ever actually written.
  if (!next.analytics) {
    deleteCookie(ATTRIBUTION_COOKIE_NAME);
  }

  const wasPreferencesGranted = previous ? previous.preferences : false;
  if (wasPreferencesGranted && !next.preferences) {
    deleteCookie(LOCALE_COOKIE_NAME);
  }
}

export function isCategoryLocked(category: ConsentCategory): boolean {
  return category === 'necessary';
}
