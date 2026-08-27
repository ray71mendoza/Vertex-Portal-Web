'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { getOpenJobs } from '@/content/jobs';
import { hrefFor, type Locale } from '@/i18n/config';

export function CareersPreview({ locale }: { locale: string }) {
  const t = useTranslations('homeNew.careers');
  const tCommon = useTranslations('common');
  const loc = locale as Locale;
  const openJobsCount = getOpenJobs().length;

  return (
    <section className="home-careers vx-section vx-bg-wallpaper-2" aria-label="Careers Preview">
      <div className="vx-container">
        <AnimatedReveal>
          <div className="home-careers-card relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-vertex-darkBg via-vertex-ink to-vertex-apexTeal p-7 text-white shadow-2xl shadow-vertex-ink/15 md:p-12">
            <div className="absolute -right-16 -top-28 h-80 w-80 rounded-full border border-white/10" aria-hidden="true" />
            <div className="absolute -right-5 -top-5 h-44 w-44 rounded-full bg-vertex-prismBlue/10 blur-2xl" aria-hidden="true" />
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-7">
              <div className="lg:col-span-7">
                <div className="home-careers-eyebrow inline-flex items-center rounded-full border border-white/10 bg-white/8 text-xs font-semibold uppercase tracking-[0.12em] text-vertex-prismBlue">
                  <Briefcase className="h-3.5 w-3.5" />
                  {t('eyebrow')}
                </div>
                <h2 className="home-careers-title home-section-title max-w-[20ch] text-2xl font-bold md:text-4xl">{t('title')}</h2>
                <p className="max-w-2xl text-base leading-relaxed text-vertex-facetIce md:text-lg">
                  {t('description')}
                </p>
              </div>
              {openJobsCount > 0 && (
                <div className="lg:col-span-2">
                  <div className="home-careers-stat inline-flex rounded-2xl border border-white/12 bg-white/[0.07]">
                    <span className="home-careers-stat-number font-bold leading-none text-white">{openJobsCount}</span>
                    <span className="home-careers-stat-label font-semibold uppercase text-vertex-prismBlue">
                      {loc === 'es' ? 'posiciones abiertas' : 'open positions'}
                    </span>
                  </div>
                </div>
              )}
              <div className={`home-careers-actions ${openJobsCount > 0 ? 'lg:col-span-3' : 'lg:col-span-5'} flex flex-col items-start justify-center sm:flex-row lg:flex-col lg:items-stretch`}>
                <Link href={hrefFor(loc, 'careers')} className="home-careers-primary vx-btn vx-btn-light group w-full sm:w-auto lg:w-full">
                  {tCommon('cta.exploreCareers')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href={hrefFor(loc, 'jobs')} className="home-careers-secondary vx-btn vx-btn-ghost w-full border-white/20 text-white sm:w-auto lg:w-full">
                  {tCommon('cta.viewOpportunities')}
                </Link>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
