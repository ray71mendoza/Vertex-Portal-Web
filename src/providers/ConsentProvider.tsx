'use client';

import { createContext, useCallback, useContext, useEffect, useState, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import {
  CONSENT_VERSION,
  type ConsentPreferences,
  LOCALE_COOKIE_MAX_AGE_SECONDS,
  LOCALE_COOKIE_NAME,
  createAcceptAllConsent,
  createDefaultConsent,
} from '@/lib/consent/consent-types';
import { commitConsent, getConsentServerSnapshot, getConsentSnapshot, subscribeToConsent } from '@/lib/consent/consent-store';
import { cleanupRevokedCategoryCookies } from '@/lib/consent/consent-manager';
import { setCookie } from '@/lib/cookies';
import { locales } from '@/i18n/config';
import { setAnalyticsContext, trackPageView } from '@/lib/analytics';
import { captureAttribution, migrateEphemeralAttributionToCookie } from '@/lib/analytics/attribution';
import { configureGoogleTag, isGoogleTagConfigured, updateGoogleConsent } from '@/lib/analytics/google';
import { isClarityConfigured, loadClarity, updateClarityConsent } from '@/lib/analytics/clarity';
import { isLinkedInConfigured, loadLinkedInInsightTag } from '@/lib/analytics/linkedin';
import { isMetaPixelConfigured, loadMetaPixel } from '@/lib/analytics/meta';
import { isSensitiveApplicationPath } from '@/lib/analytics/events';

export type UpdatablePreferences = Pick<ConsentPreferences, 'preferences' | 'analytics' | 'marketing'>;

interface ConsentContextValue {
  consent: ConsentPreferences;
  hasResponded: boolean;
  isPreferencesOpen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  updatePreferences: (partial: UpdatablePreferences) => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

const DEBUG = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === 'true';
function debugLog(...args: unknown[]): void {
  if (DEBUG) console.log('[Vertex Consent]', ...args);
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return ctx;
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  // Reads the consent cookie via useSyncExternalStore: the server snapshot
  // is always `null` (matching the static HTML shell), and the client
  // snapshot reflects the real cookie once hydrated. This is the
  // React-sanctioned way to read a browser-only external source without
  // a mount-effect + setState round trip, and — importantly — without any
  // server-side Dynamic API that would force the site out of static
  // rendering (a plain `cookies()` read in this layout would do exactly
  // that, since it is shared by every route).
  const storedConsent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getConsentServerSnapshot);
  const consent = storedConsent ?? createDefaultConsent();
  const hasResponded = storedConsent !== null;

  useEffect(() => {
    setAnalyticsContext(consent, pathname);
    captureAttribution(consent.analytics);

    if (consent.preferences) {
      const segment = pathname.split('/')[1];
      if ((locales as readonly string[]).includes(segment)) {
        setCookie(LOCALE_COOKIE_NAME, segment, { maxAgeSeconds: LOCALE_COOKIE_MAX_AGE_SECONDS });
      }
    }

    const onSensitivePage = isSensitiveApplicationPath(pathname);

    if (isGoogleTagConfigured) {
      configureGoogleTag();
      updateGoogleConsent({ analytics: consent.analytics, marketing: consent.marketing });
    }

    if (consent.analytics && isClarityConfigured) {
      loadClarity();
      updateClarityConsent({ analytics: consent.analytics, marketing: consent.marketing });
    }

    if (consent.marketing && !onSensitivePage) {
      if (isLinkedInConfigured) loadLinkedInInsightTag();
      if (isMetaPixelConfigured) loadMetaPixel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `consent` is a fresh object each render; comparing its primitive fields would just re-run the same checks, so we intentionally key off its identity via `storedConsent` instead.
  }, [storedConsent, pathname]);

  // Fire exactly one page view per real route change (and once on mount).
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  const persist = useCallback(
    (next: ConsentPreferences) => {
      const previous = storedConsent ?? createDefaultConsent();
      commitConsent(next);
      cleanupRevokedCategoryCookies(previous, next);
      if (!previous.analytics && next.analytics) {
        migrateEphemeralAttributionToCookie();
      }
      debugLog('consent updated', next);
    },
    [storedConsent]
  );

  const acceptAll = useCallback(() => {
    persist(createAcceptAllConsent());
    setIsPreferencesOpen(false);
  }, [persist]);

  const rejectNonEssential = useCallback(() => {
    persist(createDefaultConsent());
    setIsPreferencesOpen(false);
  }, [persist]);

  const updatePreferences = useCallback(
    (partial: UpdatablePreferences) => {
      persist({
        necessary: true,
        preferences: partial.preferences,
        analytics: partial.analytics,
        marketing: partial.marketing,
        timestamp: new Date().toISOString(),
        version: CONSENT_VERSION,
      });
      setIsPreferencesOpen(false);
    },
    [persist]
  );

  const openPreferences = useCallback(() => setIsPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setIsPreferencesOpen(false), []);

  return (
    <ConsentContext.Provider
      value={{
        consent,
        hasResponded,
        isPreferencesOpen,
        acceptAll,
        rejectNonEssential,
        updatePreferences,
        openPreferences,
        closePreferences,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}
