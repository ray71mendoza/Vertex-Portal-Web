'use client';

import { useTranslations } from 'next-intl';
import { Target, Puzzle, Users, TrendingUp, Scaling, Leaf, Globe } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const valueItems = [
  { key: 'strategy', icon: Target },
  { key: 'custom', icon: Puzzle },
  { key: 'multidisciplinary', icon: Users },
  { key: 'results', icon: TrendingUp },
  { key: 'scalability', icon: Scaling },
  { key: 'sustainability', icon: Leaf },
  { key: 'experience', icon: Globe },
];

interface ValuePropositionProps {
  locale: string;
}

export function ValueProposition({ locale }: ValuePropositionProps) {
  const t = useTranslations('home.value');

  return (
    <section className="vx-section vx-bg-dark relative overflow-hidden" aria-label="Value Proposition">
      {/* Background Wallpaper */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 vx-container">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={locale === 'es' ? 'Diferenciadores' : 'Differentiators'}
          title={t('title')}
          subtitle={`"${t('statement')}"`}
          align="center"
          theme="dark"
        />

        {/* Value Proposition Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {valueItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <AnimatedReveal key={item.key} delay={Math.min(index + 1, 5)}>
                <div className="vx-card vx-card-dark h-full flex flex-col justify-between !p-7 border border-white/10 hover:border-vertex-prismBlue/40 transition-all duration-300">
                  <div>
                    <div className="vx-icon-wrap !w-11 !h-11 !mb-5 bg-vertex-prismBlue/15 text-vertex-prismBlue">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                      {t(`items.${item.key}.title`)}
                    </h3>
                    <p className="text-sm text-vertex-facetIce/80 leading-relaxed">
                      {t(`items.${item.key}.description`)}
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
