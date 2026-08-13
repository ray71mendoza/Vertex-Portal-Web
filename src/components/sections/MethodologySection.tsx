'use client';

import { useTranslations } from 'next-intl';
import { Search, Compass, Cpu, TrendingUp } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  { key: 'understand', icon: Search, number: '01' },
  { key: 'design', icon: Compass, number: '02' },
  { key: 'implement', icon: Cpu, number: '03' },
  { key: 'evolve', icon: TrendingUp, number: '04' },
];

interface MethodologySectionProps {
  locale: string;
}

export function MethodologySection({ locale }: MethodologySectionProps) {
  const t = useTranslations('home.methodology');

  return (
    <section className="vx-section vx-bg-subtle relative overflow-hidden" aria-label="Methodology">
      <div className="vx-container relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={locale === 'es' ? 'Metodología Adaptable' : 'Adaptable Methodology'}
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        {/* Connected Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-[90px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-vertex-apexTeal/20 via-vertex-apexTeal to-vertex-apexTeal/20 z-0 pointer-events-none"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <AnimatedReveal key={step.key} delay={index + 1}>
                <div className="vx-card bg-white h-full relative z-10 flex flex-col justify-between overflow-hidden border border-gray-200/80 hover:border-vertex-apexTeal/40 transition-all duration-300 !p-8">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="vx-icon-wrap !mb-0 bg-vertex-apexTeal text-white shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-4xl font-bold text-vertex-apexTeal/15 select-none font-mono">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-vertex-ink mb-3">
                      {t(`steps.${step.key}.title`)}
                    </h3>

                    <p className="text-sm text-vertex-facetBlue leading-relaxed">
                      {t(`steps.${step.key}.description`)}
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
