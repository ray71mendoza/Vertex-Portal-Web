'use client';

import { useTranslations } from 'next-intl';
import { Target, Puzzle, Users, TrendingUp, Scaling, Leaf, Globe } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useMobileAutoCarousel } from '@/hooks/useMobileAutoCarousel';
import styles from './ValueProposition.module.css';

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
  const carouselRef = useMobileAutoCarousel<HTMLDivElement>(valueItems.length);

  return (
    <section className="home-value vx-section vx-bg-dark relative overflow-hidden" aria-label="Value Proposition">
      {/* Background Wallpaper */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 vx-container">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={locale === 'es' ? 'Diferenciadores' : 'Differentiators'}
          title={t('title')}
          subtitle={`"${t('statement')}"`}
          align="left"
          theme="dark"
          className="home-value-heading max-w-4xl"
        />

        {/* Value Proposition Minimal Cards */}
        <div ref={carouselRef} className={styles.grid}>
          {valueItems.map((item, index) => {
            const IconComponent = item.icon;
            const spanClass = index === 0 ? 'lg:col-span-6' : 'lg:col-span-3';
            return (
              <AnimatedReveal key={item.key} delay={Math.min(index + 1, 5)} className={`${styles.item} ${spanClass} h-full`}>
                <div className={`home-value-card vx-card vx-card-dark relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden !p-5 transition-all duration-300 border border-white/10 hover:border-vertex-prismBlue/40 sm:!p-7 ${index === 0 ? 'home-value-card-featured' : ''}`}>
                  <span className="absolute right-5 top-4 font-mono text-xs font-bold tracking-[0.15em] text-white/25">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="vx-icon-wrap !mb-4 !h-11 !w-11 bg-vertex-prismBlue/15 text-vertex-prismBlue sm:!mb-5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="mb-3 text-base font-semibold leading-snug text-white">
                      {t(`items.${item.key}.title`)}
                    </h3>
                    <p className="max-w-[46ch] text-[0.8125rem] leading-relaxed text-vertex-facetIce/80 sm:text-sm">
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
