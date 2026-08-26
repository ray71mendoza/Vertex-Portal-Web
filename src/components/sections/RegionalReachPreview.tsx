'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe2, MapPinned } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { hrefFor, type Locale } from '@/i18n/config';

export function RegionalReachPreview({ locale }: { locale: string }) {
  const t = useTranslations('homeNew.reach');
  const tCommon = useTranslations('common');
  const loc = locale as Locale;
  const coverageAreas = [
    {
      id: 'colombia',
      icon: MapPinned,
      title: loc === 'es' ? 'Toda Colombia' : 'All of Colombia',
      description: loc === 'es' ? 'Cobertura nacional' : 'Nationwide coverage',
    },
    {
      id: 'latam',
      icon: Globe2,
      title: loc === 'es' ? 'Toda Latinoamérica' : 'All of Latin America',
      description: loc === 'es' ? 'Alcance regional' : 'Regional reach',
    },
  ];

  return (
    <section className="home-reach vx-section vx-bg-dark relative overflow-hidden text-white" aria-label="Regional Reach Preview">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(114,198,232,0.12),transparent_30%)]" aria-hidden="true" />
      <div className="vx-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <AnimatedReveal className="lg:col-span-6">
            <div className="home-reach-visual relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/25">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[22px]">
                <Image
                  src="/images/vertex-regional-map-coverage.png"
                  alt={loc === 'es' ? 'Mapa de cobertura de Vertex en Colombia y Latinoamérica' : 'Map of Vertex coverage across Colombia and Latin America'}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                  quality={92}
                />
              </div>
              <div className="home-reach-map-caption absolute bottom-6 left-6 right-6 rounded-2xl border border-white/12 bg-vertex-darkBg/80 backdrop-blur-xl">
                <div>
                  <span className="home-reach-map-kicker">{loc === 'es' ? 'Cobertura regional' : 'Regional coverage'}</span>
                  <strong className="home-reach-map-title">Colombia + LATAM</strong>
                </div>
                <span className="home-reach-map-status">
                  <span aria-hidden="true" />
                  {loc === 'es' ? 'Presencia activa' : 'Active presence'}
                </span>
              </div>
            </div>
          </AnimatedReveal>

          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow={t('eyebrow')}
              title={t('title')}
              subtitle={t('description')}
              align="left"
              theme="dark"
              className="!mb-8"
            />
            <div className="home-coverage-grid grid grid-cols-1 sm:grid-cols-2">
              {coverageAreas.map((area, idx) => {
                const Icon = area.icon;

                return (
                  <AnimatedReveal key={area.id} delay={Math.min(idx + 1, 2)}>
                    <div className="home-country-card home-coverage-card flex rounded-2xl border border-white/10 bg-white/[0.055] backdrop-blur-sm">
                      <div className="home-coverage-icon flex shrink-0 items-center justify-center rounded-xl bg-vertex-prismBlue/12">
                        <Icon className="h-5 w-5 text-vertex-prismBlue" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <span className="home-coverage-title block font-bold text-white">{area.title}</span>
                        <span className="home-coverage-description block font-medium text-vertex-facetIce/80">{area.description}</span>
                      </div>
                    </div>
                  </AnimatedReveal>
                );
              })}
            </div>
            <AnimatedReveal className="home-reach-cta">
              <Link href={hrefFor(loc, 'whoWeAre')} className="vx-btn vx-btn-light group">
                {tCommon('cta.learnMore')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
