'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import { useConsent } from '@/providers/ConsentProvider';
import type { ConsentCategory, ConsentPreferences } from '@/lib/consent/consent-types';
import styles from './CookiePreferencesModal.module.css';

const TOGGLEABLE_CATEGORIES: Extract<ConsentCategory, 'preferences' | 'analytics' | 'marketing'>[] = [
  'preferences',
  'analytics',
  'marketing',
];

export function CookiePreferencesModal() {
  const { isPreferencesOpen, consent, closePreferences, acceptAll, rejectNonEssential, updatePreferences } = useConsent();

  // Mounted fresh only while open, so its draft state below always starts
  // from the current consent — no effect needed to "resync" it.
  if (!isPreferencesOpen) return null;

  return (
    <CookiePreferencesDialog
      consent={consent}
      onClose={closePreferences}
      onAcceptAll={acceptAll}
      onRejectAll={rejectNonEssential}
      onSave={updatePreferences}
    />
  );
}

function CookiePreferencesDialog({
  consent,
  onClose,
  onAcceptAll,
  onRejectAll,
  onSave,
}: {
  consent: ConsentPreferences;
  onClose: () => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onSave: (partial: Pick<ConsentPreferences, 'preferences' | 'analytics' | 'marketing'>) => void;
}) {
  const t = useTranslations('consent.modal');
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const [draft, setDraft] = useState({
    preferences: consent.preferences,
    analytics: consent.analytics,
    marketing: consent.marketing,
  });

  // Focus management: move focus into the dialog on open, trap Tab/Shift+Tab
  // within it, restore focus to whatever triggered it on close, and close on Escape.
  useEffect(() => {
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocusedRef.current?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- runs once for the lifetime of this mount (the component only exists while the dialog is open).
  }, []);

  return (
    <div className={styles.overlay}>
      <button type="button" className={styles.backdrop} aria-label={t('close')} onClick={onClose} tabIndex={-1} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        aria-describedby="cookie-preferences-description"
        className={styles.dialog}
      >
        <div className={styles.header}>
          <h2 id="cookie-preferences-title">{t('title')}</h2>
          <button type="button" onClick={onClose} className={styles.closeButton} aria-label={t('close')}>
            <X aria-hidden="true" />
          </button>
        </div>

        <p id="cookie-preferences-description" className={styles.description}>
          {t('description')}
        </p>

        <div className={styles.categories}>
          <CategoryRow
            title={t('categories.necessary.title')}
            description={t('categories.necessary.description')}
            alwaysActiveLabel={t('alwaysActive')}
            locked
          />

          {TOGGLEABLE_CATEGORIES.map((category) => (
            <CategoryRow
              key={category}
              title={t(`categories.${category}.title`)}
              description={t(`categories.${category}.description`)}
              checked={draft[category]}
              onChange={(value) => setDraft((prev) => ({ ...prev, [category]: value }))}
            />
          ))}
        </div>

        <div className={styles.footer}>
          <button type="button" onClick={onRejectAll} className="vx-btn vx-btn-secondary">
            {t('rejectAll')}
          </button>
          <button type="button" onClick={onAcceptAll} className="vx-btn vx-btn-secondary">
            {t('acceptAll')}
          </button>
          <button type="button" onClick={() => onSave(draft)} className="vx-btn vx-btn-primary">
            {t('save')}
          </button>
        </div>
      </div>
    </div>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  onChange,
  locked,
  alwaysActiveLabel,
}: {
  title: string;
  description: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  locked?: boolean;
  alwaysActiveLabel?: string;
}) {
  return (
    <div className={styles.category}>
      <div className={styles.categoryText}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {locked ? (
        <span className={styles.lockedPill}>{alwaysActiveLabel}</span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={title}
          onClick={() => onChange?.(!checked)}
          className={`${styles.switch} ${checked ? styles.switchOn : ''}`}
        >
          <span className={styles.switchThumb} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
