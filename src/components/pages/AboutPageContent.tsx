'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Lightbulb, Award, Target, Users, Shield, Leaf } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { teamMembers } from '@/content/team';

const principleIcons: Record<string, React.ElementType> = {
  innovation: Lightbulb,
  excellence: Award,
  commitment: Target,
  collaboration: Users,
  transparency: Shield,
  sustainability: Leaf,
};

export function AboutPageContent({ locale }: { locale: string }) {
  const t = useTranslations('about');
  const tCommon = useTranslations('common');
  const prefix = `/${locale}`;
  const visibleTeam = teamMembers.filter((m) => m.visible);

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="vx-section vx-bg-subtle relative overflow-hidden">
        <div className="vx-container">
          <AnimatedReveal>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold text-vertex-apexTeal uppercase tracking-wider mb-2">
                {tCommon('nav.about')}
              </div>
              <h1 className="text-vertex-ink text-4xl md:text-5xl font-bold mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-vertex-facetTeal text-lg md:text-xl leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="vx-section">
        <div className="vx-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedReveal>
              <div>
                <hr className="vx-divider mb-6" />
                <h2 className="mb-6">{t('intro.title')}</h2>
                <p className="text-lg text-vertex-facetTeal mb-4 leading-relaxed">
                  {t('intro.description')}
                </p>
                <p className="text-vertex-facetTeal leading-relaxed">
                  {t('intro.description2')}
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={2}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-vertex-darkBg flex items-center justify-center p-8">
                <Image
                  src="/images/vertex-logo.png"
                  alt="Vertex Logo"
                  width={240}
                  height={72}
                  className="h-auto w-auto brightness-0 invert"
                />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="vx-section vx-bg-dark text-white relative">
        <div className="vx-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedReveal delay={1}>
              <div className="vx-card vx-card-dark h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-vertex-prismBlue/15 text-vertex-prismBlue mb-6 font-bold text-xl">
                  M
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{t('mission.title')}</h3>
                <p className="text-vertex-facetIce leading-relaxed">{t('mission.text')}</p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={2}>
              <div className="vx-card vx-card-dark h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-vertex-prismBlue/15 text-vertex-prismBlue mb-6 font-bold text-xl">
                  V
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{t('vision.title')}</h3>
                <p className="text-vertex-facetIce leading-relaxed">{t('vision.text')}</p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="vx-section">
        <div className="vx-container">
          <AnimatedReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <hr className="vx-divider mx-auto mb-6" />
              <h2>{t('principles.title')}</h2>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['innovation', 'excellence', 'commitment', 'collaboration', 'transparency', 'sustainability'].map((pKey, idx) => {
              const IconComp = principleIcons[pKey] || CheckCircle2;
              return (
                <AnimatedReveal key={pKey} delay={Math.min(idx + 1, 4)}>
                  <div className="vx-card h-full">
                    <div className="vx-icon-wrap mb-4">
                      <IconComp className="w-5 h-5 text-vertex-apexTeal" />
                    </div>
                    <h3 className="text-lg font-semibold text-vertex-ink mb-2">
                      {t(`principles.items.${pKey}.title`)}
                    </h3>
                    <p className="text-sm text-vertex-facetBlue leading-relaxed">
                      {t(`principles.items.${pKey}.description`)}
                    </p>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Vertex */}
      <section className="vx-section vx-bg-subtle">
        <div className="vx-container">
          <AnimatedReveal>
            <div className="max-w-3xl mx-auto">
              <hr className="vx-divider mx-auto mb-6" />
              <h2 className="text-center mb-10">{t('whyVertex.title')}</h2>
              <div className="space-y-4">
                {t.raw('whyVertex.items').map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-vertex-apexTeal flex-shrink-0 mt-0.5" />
                    <span className="text-vertex-ink font-medium text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Geolocation Presence */}
      <section className="vx-section text-center">
        <div className="vx-container">
          <AnimatedReveal>
            <hr className="vx-divider mx-auto mb-6" />
            <h2 className="mb-4">{t('presence.title')}</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="px-8 py-6 rounded-2xl bg-white border border-gray-100 shadow-md">
                <span className="text-2xl font-bold text-vertex-apexTeal block">{t('presence.bogota')}</span>
                <span className="text-sm text-vertex-facetBlue">{t('presence.country')}</span>
              </div>
              <div className="px-8 py-6 rounded-2xl bg-white border border-gray-100 shadow-md">
                <span className="text-2xl font-bold text-vertex-apexTeal block">{t('presence.cartagena')}</span>
                <span className="text-sm text-vertex-facetBlue">{t('presence.country')}</span>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* CTA to Team */}
      <section className="vx-section vx-bg-teal text-white text-center">
        <div className="vx-container">
          <AnimatedReveal>
            <h2 className="text-white text-3xl font-bold mb-4">{t('teamPreview.title')}</h2>
            <p className="text-vertex-facetIce text-lg max-w-xl mx-auto mb-8">{t('teamPreview.description')}</p>
            <Link href={`${prefix}/${locale === 'es' ? 'equipo' : 'team'}`} className="vx-btn vx-btn-light">
              {tCommon('cta.meetTeam')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
