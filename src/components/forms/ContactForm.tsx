'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlertCircle, ArrowRight, CheckCircle2, Info, Loader2 } from 'lucide-react';
import { services } from '@/content/services';
import { hrefFor, type Locale } from '@/i18n/config';
import styles from './ContactForm.module.css';

const createContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(1, t('validation.nameRequired')),
    organization: z.string().optional(),
    email: z.string().min(1, t('validation.emailRequired')).email(t('validation.emailInvalid')),
    phone: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, t('validation.messageMin')),
    preferredLanguage: z.enum(['es', 'en']),
    privacy: z.boolean().refine((value) => value === true, t('validation.privacyRequired')),
    honeypot: z.string().max(0),
  });

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

export function ContactForm({ locale, initialService }: { locale: string; initialService?: string }) {
  const t = useTranslations('contact');
  const tServices = useTranslations('services.items');
  const loc = locale as Locale;
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const schema = createContactSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      preferredLanguage: loc,
      service: initialService || '',
      privacy: false,
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (status === 'submitting') return;
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Contact request failed');
      }

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={styles.formCard}>
      {status === 'success' ? (
        <div className={styles.successState}>
          <div><CheckCircle2 aria-hidden="true" /></div>
          <h2>{t('success.title')}</h2>
          <p>{t('success.description')}</p>
          <button type="button" onClick={() => setStatus('idle')} className="vx-btn vx-btn-secondary">
            {t('form.sendAnother')}
          </button>
        </div>
      ) : (
        <>
          <header className={styles.formHeader}>
            <span>{loc === 'es' ? 'Tu proyecto empieza aquí' : 'Your project starts here'}</span>
            <h2>{loc === 'es' ? 'Cuéntanos sobre tu proyecto' : 'Tell us about your project'}</h2>
            <p>{loc === 'es' ? 'Completa el formulario y nos pondremos en contacto contigo.' : 'Complete the form and we will get in touch with you.'}</p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
            <div className={styles.notice}>
              <Info aria-hidden="true" />
              <span>{t('form.integrationNotice')}</span>
            </div>

            <div className={styles.hiddenFields} aria-hidden="true">
              <input type="text" {...register('honeypot')} tabIndex={-1} autoComplete="off" />
              <input type="hidden" {...register('preferredLanguage')} />
            </div>

            <div className={styles.twoColumns}>
              <Field label={t('form.name')} required error={errors.name?.message}>
                <input
                  id="name"
                  type="text"
                  placeholder={t('form.namePlaceholder')}
                  aria-invalid={Boolean(errors.name)}
                  {...register('name')}
                />
              </Field>
              <Field label={t('form.email')} required error={errors.email?.message}>
                <input
                  id="email"
                  type="email"
                  placeholder={t('form.emailPlaceholder')}
                  aria-invalid={Boolean(errors.email)}
                  {...register('email')}
                />
              </Field>
            </div>

            <div className={styles.twoColumns}>
              <Field label={t('form.organization')}>
                <input
                  id="organization"
                  type="text"
                  placeholder={t('form.organizationPlaceholder')}
                  {...register('organization')}
                />
              </Field>
              <Field label={t('form.phone')}>
                <input
                  id="phone"
                  type="tel"
                  placeholder={t('form.phonePlaceholder')}
                  {...register('phone')}
                />
              </Field>
            </div>

            <Field label={loc === 'es' ? '¿En qué podemos ayudarte?' : 'How can we help you?'}>
              <select id="service" {...register('service')}>
                <option value="">{t('form.servicePlaceholder')}</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>{tServices(`${service.id}.title`)}</option>
                ))}
                <option value="other">{t('form.serviceOther')}</option>
              </select>
            </Field>

            <Field
              label={loc === 'es' ? 'Cuéntanos brevemente sobre tu reto' : 'Tell us briefly about your challenge'}
              required
              error={errors.message?.message}
            >
              <textarea
                id="message"
                placeholder={t('form.messagePlaceholder')}
                aria-invalid={Boolean(errors.message)}
                {...register('message')}
              />
            </Field>

            <div className={styles.privacyRow}>
              <input id="privacy" type="checkbox" {...register('privacy')} />
              <label htmlFor="privacy">
                {t('form.privacy')}{' '}
                <a href={hrefFor(loc, 'privacy')} target="_blank" rel="noreferrer">{t('form.privacyLink')}</a>
              </label>
            </div>
            {errors.privacy && <p className={styles.fieldError}>{errors.privacy.message}</p>}

            {status === 'error' && (
              <div className={styles.errorNotice}>
                <AlertCircle aria-hidden="true" />
                <div><strong>{t('error.title')}</strong><span>{t('error.description')}</span></div>
              </div>
            )}

            <button type="submit" disabled={status === 'submitting'} className={styles.submitButton}>
              <span>{status === 'submitting' ? t('form.submitting') : t('form.submit')}</span>
              {status === 'submitting' ? <Loader2 className={styles.spinner} aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.field}>
      <label>
        {label}{required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <p className={styles.fieldError}>{error}</p>}
    </div>
  );
}
