'use client';

import { track } from '@vercel/analytics';

/**
 * Vercel Web Analytics is cookieless and anonymized, so per the site's
 * consent policy it is treated as always-on infrastructure — it never
 * requires analytics/marketing consent and is mounted unconditionally via
 * the <Analytics /> component from '@vercel/analytics/next' in the root
 * locale layout. This module only wraps its custom-event API so the rest
 * of the tracking layer has one consistent surface to call into.
 */
export function trackVercelEvent(name: string, properties?: Record<string, string | number | boolean | null>): void {
  if (typeof window === 'undefined') return;
  try {
    track(name, properties);
  } catch {
    // Vercel Analytics not available in this environment (e.g. local dev without the integration) — ignore.
  }
}
