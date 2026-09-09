'use client';

import { useTranslations } from 'next-intl';
import { useConsent } from '@/providers/ConsentProvider';

/**
 * Small client-only island so the rest of Footer can stay a plain server
 * component — this is the only piece that needs the consent context.
 */
export function CookiePreferencesButton({ className }: { className?: string }) {
  const t = useTranslations('common.footer');
  const { openPreferences } = useConsent();

  return (
    <button type="button" onClick={openPreferences} className={className}>
      {t('cookiePreferences')}
    </button>
  );
}
