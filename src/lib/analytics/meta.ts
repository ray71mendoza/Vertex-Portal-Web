'use client';

/**
 * Meta Pixel. Marketing-only: never injected before marketing consent.
 * No Advanced Matching (email/name/phone) is implemented, and only the
 * approved event set (PageView, ViewContent, Contact, Lead) is used — no
 * form field values are ever sent.
 */

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
export const isMetaPixelConfigured = Boolean(META_PIXEL_ID);

let loaded = false;

export function isMetaPixelLoaded(): boolean {
  return loaded;
}

export function loadMetaPixel(): void {
  if (typeof window === 'undefined' || loaded || !META_PIXEL_ID) return;
  loaded = true;

  type FbqQueue = ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void;
    queue: unknown[];
    push: FbqQueue;
    loaded: boolean;
    version: string;
  };

  const win = window as unknown as { fbq?: FbqQueue; _fbq?: FbqQueue };

  if (!win.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq.queue.push(args);
      }
    } as FbqQueue;

    win.fbq = fbq;
    if (!win._fbq) win._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);
  }

  window.fbq?.('init', META_PIXEL_ID);
  window.fbq?.('track', 'PageView');
}

export function trackMetaPageView(): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'PageView');
}

export function trackMetaEvent(name: 'ViewContent' | 'Contact' | 'Lead'): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', name);
}
