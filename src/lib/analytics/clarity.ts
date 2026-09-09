'use client';

/**
 * Microsoft Clarity integration, using the current Consent API V2
 * (`consentv2`) rather than the deprecated boolean `consent` call.
 *
 * Privacy posture: unlike Google's Consent Mode, Clarity has no
 * denied-by-default network-safe init, so — per the site's privacy-first
 * rule — the script itself is only injected once Analytics consent has
 * been granted (see `loadClarity`). `updateClarityConsent` still keeps its
 * internal consent signal in sync afterwards if the user changes marketing
 * consent independently.
 */

export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
export const isClarityConfigured = Boolean(CLARITY_PROJECT_ID);

let loaded = false;

export function isClarityLoaded(): boolean {
  return loaded;
}

export function loadClarity(): void {
  if (typeof window === 'undefined' || loaded || !CLARITY_PROJECT_ID) return;
  loaded = true;

  type ClarityQueue = ((...args: unknown[]) => void) & { q?: unknown[][] };

  (function (win: Window, doc: Document, tagName: string, attr: string, projectId: string) {
    const target = win as unknown as Record<string, ClarityQueue>;
    target[attr] =
      target[attr] ||
      ((...args: unknown[]) => {
        const fn = target[attr];
        fn.q = fn.q || [];
        fn.q.push(args);
      });
    const script = doc.createElement(tagName) as HTMLScriptElement;
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${projectId}`;
    const firstScript = doc.getElementsByTagName(tagName)[0];
    firstScript.parentNode?.insertBefore(script, firstScript);
  })(window, document, 'script', 'clarity', CLARITY_PROJECT_ID);
}

export interface ClarityConsentState {
  analytics: boolean;
  marketing: boolean;
}

export function updateClarityConsent({ analytics, marketing }: ClarityConsentState): void {
  if (typeof window === 'undefined' || !window.clarity) return;
  window.clarity('consentv2', {
    analytics_Storage: analytics ? 'granted' : 'denied',
    ad_Storage: marketing ? 'granted' : 'denied',
  });
}

export function trackClarityEvent(name: string): void {
  if (typeof window === 'undefined' || !window.clarity) return;
  window.clarity('event', name);
}
