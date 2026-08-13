'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getOpenJobs } from '@/content/jobs';

export function CareersPreview({ locale }: { locale: string }) {
  const t = useTranslations('homeNew.careers');
  const tCommon = useTranslations('common');
  const prefix = `/${locale}`;
  const loc = locale as 'es' | 'en';
  const openJobsCount = getOpenJobs().length;

  return (
    <section className="vx-section" aria-label="Careers Preview">
      <div className="vx-container">
        <AnimatedReveal>
          <div className="vx-card p-8 md:p-12 bg-gradient-to-r from-vertex-darkBg to-vertex-ink text-white border border-white/10 rounded-3xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-vertex-prismBlue text-xs font-semibold uppercase tracking-wider mb-4">
                  <Briefcase className="w-3.5 h-3.5" />
                  {t('eyebrow')}
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('title')}</h2>
                <p className="text-vertex-facetIce text-base md:text-lg max-w-2xl leading-relaxed">
                  {t('description')}
                </p>
                {openJobsCount > 0 && (
                  <p className="text-xs text-vertex-prismBlue font-mono mt-3">
                    {openJobsCount} {loc === 'es' ? 'posiciones abiertas actualmente' : 'positions currently open'}
                  </p>
                )}
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
                <Link href={`${prefix}/${loc === 'es' ? 'trabaja-con-nosotros' : 'careers'}`} className="vx-btn vx-btn-light w-full sm:w-auto">
                  {tCommon('cta.exploreCareers')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={`${prefix}/${loc === 'es' ? 'empleos' : 'jobs'}`} className="vx-btn vx-btn-ghost text-white border-white/20 w-full sm:w-auto">
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
