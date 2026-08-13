'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { services } from '@/content/services';

const createContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(1, t('validation.nameRequired')),
    organization: z.string().optional(),
    email: z.string().min(1, t('validation.emailRequired')).email(t('validation.emailInvalid')),
    phone: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, t('validation.messageMin')),
    preferredLanguage: z.enum(['es', 'en']),
    privacy: z.boolean().refine((val) => val === true, t('validation.privacyRequired')),
    honeypot: z.string().max(0),
  });

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

export function ContactForm({ locale, initialService }: { locale: string; initialService?: string }) {
  const t = useTranslations('contact');
  const tServices = useTranslations('services.items');
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
      preferredLanguage: locale as 'es' | 'en',
      service: initialService || '',
      privacy: false,
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="vx-card p-8 md:p-10 border border-gray-200/80 bg-white shadow-md">
      {status === 'success' ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-vertex-ink mb-2">{t('success.title')}</h3>
          <p className="text-vertex-facetBlue max-w-md mx-auto mb-6">{t('success.description')}</p>
          <button
            onClick={() => setStatus('idle')}
            className="vx-btn vx-btn-secondary"
          >
            {locale === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* Honeypot field for anti-spam */}
          <div className="hidden" aria-hidden="true">
            <input type="text" {...register('honeypot')} tabIndex={-1} autoComplete="off" />
          </div>

          {/* Name & Organization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="vx-form-group mb-0">
              <label htmlFor="name" className="vx-label">
                {t('form.name')} <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder={t('form.namePlaceholder')}
                className="vx-input"
                {...register('name')}
              />
              {errors.name && <p className="vx-error">{errors.name.message}</p>}
            </div>

            <div className="vx-form-group mb-0">
              <label htmlFor="organization" className="vx-label">
                {t('form.organization')}
              </label>
              <input
                id="organization"
                type="text"
                placeholder={t('form.organizationPlaceholder')}
                className="vx-input"
                {...register('organization')}
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="vx-form-group mb-0">
              <label htmlFor="email" className="vx-label">
                {t('form.email')} <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder={t('form.emailPlaceholder')}
                className="vx-input"
                {...register('email')}
              />
              {errors.email && <p className="vx-error">{errors.email.message}</p>}
            </div>

            <div className="vx-form-group mb-0">
              <label htmlFor="phone" className="vx-label">
                {t('form.phone')}
              </label>
              <input
                id="phone"
                type="tel"
                placeholder={t('form.phonePlaceholder')}
                className="vx-input"
                {...register('phone')}
              />
            </div>
          </div>

          {/* Service dropdown */}
          <div className="vx-form-group mb-0">
            <label htmlFor="service" className="vx-label">
              {t('form.service')}
            </label>
            <select id="service" className="vx-select" {...register('service')}>
              <option value="">{t('form.servicePlaceholder')}</option>
              {services.map((svc) => (
                <option key={svc.id} value={svc.id}>
                  {tServices(`${svc.id}.title`)}
                </option>
              ))}
              <option value="other">{t('form.serviceOther')}</option>
            </select>
          </div>

          {/* Message */}
          <div className="vx-form-group mb-0">
            <label htmlFor="message" className="vx-label">
              {t('form.message')} <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              placeholder={t('form.messagePlaceholder')}
              className="vx-textarea"
              {...register('message')}
            />
            {errors.message && <p className="vx-error">{errors.message.message}</p>}
          </div>

          {/* Privacy Consent */}
          <div className="flex items-start gap-3 pt-2">
            <input
              id="privacy"
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-vertex-apexTeal focus:ring-vertex-apexTeal cursor-pointer"
              {...register('privacy')}
            />
            <label htmlFor="privacy" className="text-sm text-vertex-facetTeal leading-snug cursor-pointer">
              {t('form.privacy')}{' '}
              <a
                href={`/${locale}/${locale === 'es' ? 'privacidad' : 'privacy'}`}
                target="_blank"
                rel="noreferrer"
                className="underline text-vertex-apexTeal font-semibold hover:text-vertex-ink"
              >
                {t('form.privacyLink')}
              </a>
            </label>
          </div>
          {errors.privacy && <p className="vx-error">{errors.privacy.message}</p>}

          {/* Error Notice */}
          {status === 'error' && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center gap-3 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <div>
                <strong className="block font-semibold">{t('error.title')}</strong>
                <span>{t('error.description')}</span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="vx-btn vx-btn-primary w-full !h-12 text-base"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t('form.submitting')}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t('form.submit')}
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
