'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Globe, ArrowRight } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { coverageCountries, presenceTypeLabels } from '@/content/locations';

export function RegionalReachPreview({ locale }: { locale: string }) {
  const t = useTranslations('homeNew.reach');
  const tCommon = useTranslations('common');
  const prefix = `/${locale}`;
  const loc = locale as 'es' | 'en';

  return (
    <section className="vx-section vx-bg-dark text-white relative overflow-hidden" aria-label="Regional Reach Preview">
      <div className="vx-container relative z-10">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('description')}
          align="center"
          theme="dark"
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {coverageCountries.slice(0, 4).map((country, idx) => (
            <AnimatedReveal key={country.id} delay={Math.min(idx + 1, 4)}>
              <div className="vx-card vx-card-dark text-center p-5">
                <div className="w-10 h-10 rounded-full bg-vertex-prismBlue/15 flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-5 h-5 text-vertex-prismBlue" />
                </div>
                <span className="text-white font-semibold text-sm block mb-1">{country.name[loc]}</span>
                <span className="text-vertex-facetIce/70 text-xs">{presenceTypeLabels[country.type][loc]}</span>
              </div>
            </AnimatedReveal>
          ))}
        </div>
        <AnimatedReveal>
          <div className="text-center">
            <Link href={`${prefix}/${loc === 'es' ? 'quienes-somos' : 'about-us'}`} className="vx-btn vx-btn-light">
              {tCommon('cta.learnMore')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
