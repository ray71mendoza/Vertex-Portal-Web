'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useConsent } from '@/providers/ConsentProvider';
import { hrefFor, type Locale } from '@/i18n/config';
import styles from './CookieBanner.module.css';

export function CookieBanner() {
  const { hasResponded, acceptAll, rejectNonEssential, openPreferences } = useConsent();
  const t = useTranslations('consent.banner');
  const locale = useLocale() as Locale;

  if (hasResponded) return null;

  return (
    <div className={styles.wrapper} role="region" aria-label={t('title')}>
      <div className={styles.card}>
        <p className={styles.description}>
          {t('description')}{' '}
          <a href={hrefFor(locale, 'cookies')} className={styles.link}>
            {t('policyLinkLabel')}
          </a>
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={rejectNonEssential} className="vx-btn vx-btn-secondary">
            {t('rejectNonEssential')}
          </button>
          <button type="button" onClick={openPreferences} className="vx-btn vx-btn-secondary">
            {t('customize')}
          </button>
          <button type="button" onClick={acceptAll} className="vx-btn vx-btn-primary">
            {t('acceptAll')}
          </button>
        </div>
      </div>
    </div>
  );
}
