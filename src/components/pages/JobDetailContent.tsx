'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  MapPin, Briefcase, Clock, Calendar, CheckCircle2, Loader2, Send,
  Share2, ArrowLeft, Info
} from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import {
  JobOpening, modalityLabels, contractTypeLabels
} from '@/content/jobs';

const createApplicationSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(1, t('application.validation.nameRequired')),
    email: z.string().min(1, t('application.validation.emailRequired')).email(t('application.validation.emailInvalid')),
    phone: z.string().min(1, t('application.validation.phoneRequired')),
    country: z.string().min(1, t('application.validation.countryRequired')),
    city: z.string().min(1, t('application.validation.cityRequired')),
    linkedin: z.string().optional(),
    portfolio: z.string().optional(),
    message: z.string().optional(),
    privacy: z.boolean().refine((val) => val === true, t('application.validation.privacyRequired')),
    honeypot: z.string().max(0),
  });


type ApplicationFormData = z.infer<ReturnType<typeof createApplicationSchema>>;

export function JobDetailContent({ job, locale }: { job: JobOpening; locale: string }) {
  const t = useTranslations('jobs');
  const prefix = `/${locale}`;
  const loc = locale as 'es' | 'en';
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const schema = createApplicationSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      privacy: false,
      honeypot: '',
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setStatus('submitting');
    const subject = encodeURIComponent(`${loc === 'es' ? 'Postulación' : 'Application'} - ${job.title[loc]}`);
    const body = encodeURIComponent(
      [
        `${loc === 'es' ? 'Vacante' : 'Position'}: ${job.title[loc]}`,
        `${loc === 'es' ? 'Nombre' : 'Name'}: ${data.name}`,
        `${loc === 'es' ? 'Correo' : 'Email'}: ${data.email}`,
        `${loc === 'es' ? 'Teléfono' : 'Phone'}: ${data.phone}`,
        `${loc === 'es' ? 'País' : 'Country'}: ${data.country}`,
        `${loc === 'es' ? 'Ciudad' : 'City'}: ${data.city}`,
        `LinkedIn: ${data.linkedin || '-'}`,
        `${loc === 'es' ? 'Portafolio' : 'Portfolio'}: ${data.portfolio || '-'}`,
        '',
        data.message || '',
      ].join('\n')
    );

    window.open(`mailto:gerenciavertexsas@gmail.com?subject=${subject}&body=${body}`, '_self');
    setStatus('success');
    reset();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job.title[loc],
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="pt-[var(--vx-header-height)]">
      {/* Back button & Breadcrumb */}
      <section className="py-6 border-b border-gray-100 bg-white">
        <div className="vx-container flex items-center justify-between">
          <Link
            href={`${prefix}/${loc === 'es' ? 'empleos' : 'jobs'}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-vertex-apexTeal hover:text-vertex-ink transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('detail.backToJobs')}
          </Link>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-vertex-facetBlue hover:text-vertex-ink border border-gray-200 rounded-lg px-3 py-1.5 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            {copied ? (loc === 'es' ? '¡Enlace copiado!' : 'Link copied!') : t('detail.share')}
          </button>
        </div>
      </section>

      {/* Header */}
      <section className="vx-section vx-bg-wallpaper-1 relative">
        <div className="vx-container">
          <AnimatedReveal>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-vertex-apexTeal/10 text-vertex-apexTeal font-semibold">
                  {job.areaLabel[loc]}
                </span>
                {job.isDemo && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-mono">
                    Demo
                  </span>
                )}
              </div>
              <h1 className="text-vertex-ink text-3xl md:text-5xl font-bold mb-6">{job.title[loc]}</h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-vertex-facetTeal font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-vertex-apexTeal" />
                  {job.city}, {job.country[loc]}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-vertex-apexTeal" />
                  {modalityLabels[job.modality][loc]}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-vertex-apexTeal" />
                  {contractTypeLabels[job.contractType][loc]}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-vertex-apexTeal" />
                  {t('detail.published')}: {job.publishedAt}
                </span>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Main Content & Application Form */}
      <section className="vx-section">
        <div className="vx-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column — Job Details */}
            <div className="lg:col-span-7 space-y-10">
              <AnimatedReveal>
                <div>
                  <h2 className="text-xl font-bold text-vertex-ink mb-4">{t('detail.description')}</h2>
                  <p className="text-vertex-facetBlue text-base leading-relaxed">{job.description[loc]}</p>
                </div>
              </AnimatedReveal>

              <AnimatedReveal>
                <div>
                  <h2 className="text-xl font-bold text-vertex-ink mb-4">{t('detail.responsibilities')}</h2>
                  <ul className="space-y-3">
                    {job.responsibilities[loc].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-vertex-facetTeal leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-vertex-apexTeal flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedReveal>

              <AnimatedReveal>
                <div>
                  <h2 className="text-xl font-bold text-vertex-ink mb-4">{t('detail.requirements')}</h2>
                  <ul className="space-y-3">
                    {job.requirements[loc].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-vertex-facetTeal leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-vertex-apexTeal flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedReveal>

              {job.niceToHave[loc].length > 0 && (
                <AnimatedReveal>
                  <div>
                    <h2 className="text-xl font-bold text-vertex-ink mb-4">{t('detail.niceToHave')}</h2>
                    <ul className="space-y-3">
                      {job.niceToHave[loc].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-vertex-facetTeal leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-vertex-prismBlue flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedReveal>
              )}

              <AnimatedReveal>
                <div className="p-6 rounded-2xl bg-vertex-lightSubtle border border-gray-200/80">
                  <h3 className="text-base font-bold text-vertex-ink mb-2">{t('detail.team')}</h3>
                  <p className="text-sm text-vertex-facetBlue leading-relaxed">{job.teamInfo[loc]}</p>
                </div>
              </AnimatedReveal>
            </div>

            {/* Right Column — Form */}
            <div className="lg:col-span-5">
              <AnimatedReveal>
                <div className="sticky top-28 vx-card p-8 border border-gray-200/80 bg-white shadow-lg">
                  <h2 className="text-xl font-bold text-vertex-ink mb-2">{t('application.title')}</h2>
                  <p className="text-xs text-vertex-facetBlue mb-6">{job.title[loc]}</p>

                  {/* Integration Notice */}
                  <div className="p-3.5 mb-6 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{t('application.integrationNotice')}</span>
                  </div>

                  {status === 'success' ? (
                    <div className="text-center py-8">
                      <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-vertex-ink mb-2">{t('application.success')}</h3>
                      <p className="text-xs text-vertex-facetBlue mb-6">{t('application.successDescription')}</p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="vx-btn vx-btn-secondary !text-xs"
                      >
                        {loc === 'es' ? 'Enviar otra postulación' : 'Submit another application'}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                      <div className="hidden" aria-hidden="true">
                        <input type="text" {...register('honeypot')} tabIndex={-1} autoComplete="off" />
                      </div>

                      <div>
                        <label htmlFor="name" className="vx-label text-xs">
                          {t('application.name')} <span className="text-rose-500">*</span>
                        </label>
                        <input id="name" type="text" className="vx-input !h-10 !text-sm" {...register('name')} />
                        {errors.name && <p className="vx-error text-xs mt-1">{errors.name.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="vx-label text-xs">
                          {t('application.email')} <span className="text-rose-500">*</span>
                        </label>
                        <input id="email" type="email" className="vx-input !h-10 !text-sm" {...register('email')} />
                        {errors.email && <p className="vx-error text-xs mt-1">{errors.email.message}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="phone" className="vx-label text-xs">
                            {t('application.phone')} <span className="text-rose-500">*</span>
                          </label>
                          <input id="phone" type="tel" className="vx-input !h-10 !text-sm" {...register('phone')} />
                          {errors.phone && <p className="vx-error text-xs mt-1">{errors.phone.message}</p>}
                        </div>

                        <div>
                          <label htmlFor="country" className="vx-label text-xs">
                            {t('application.country')} <span className="text-rose-500">*</span>
                          </label>
                          <input id="country" type="text" className="vx-input !h-10 !text-sm" {...register('country')} />
                          {errors.country && <p className="vx-error text-xs mt-1">{errors.country.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="city" className="vx-label text-xs">
                          {t('application.city')} <span className="text-rose-500">*</span>
                        </label>
                        <input id="city" type="text" className="vx-input !h-10 !text-sm" {...register('city')} />
                        {errors.city && <p className="vx-error text-xs mt-1">{errors.city.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="linkedin" className="vx-label text-xs">
                          {t('application.linkedin')}
                        </label>
                        <input id="linkedin" type="url" placeholder="https://linkedin.com/in/..." className="vx-input !h-10 !text-sm" {...register('linkedin')} />
                      </div>

                      <div>
                        <label htmlFor="message" className="vx-label text-xs">
                          {t('application.message')}
                        </label>
                        <textarea id="message" rows={3} className="vx-textarea !text-sm" {...register('message')} />
                      </div>

                      <div className="flex items-start gap-2 pt-2">
                        <input
                          id="privacy"
                          type="checkbox"
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-vertex-apexTeal focus:ring-vertex-apexTeal cursor-pointer"
                          {...register('privacy')}
                        />
                        <label htmlFor="privacy" className="text-xs text-vertex-facetTeal leading-snug cursor-pointer">
                          {t('application.privacy')}{' '}
                          <a href={`/${locale}/${loc === 'es' ? 'privacidad' : 'privacy'}`} target="_blank" rel="noreferrer" className="underline text-vertex-apexTeal font-semibold">
                            {t('application.privacyLink')}
                          </a>
                        </label>
                      </div>
                      {errors.privacy && <p className="vx-error text-xs">{errors.privacy.message}</p>}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="vx-btn vx-btn-primary w-full !h-11 !text-sm mt-4"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            {t('application.submitting')}
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            {t('application.submit')}
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
