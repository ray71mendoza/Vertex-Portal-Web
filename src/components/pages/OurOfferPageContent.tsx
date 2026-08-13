'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  ArrowRight, Lightbulb, Code2, Palette, Megaphone, Video, Building2, LayoutGrid,
  Search, Compass, Cpu, TrendingUp, BarChart3, CheckCircle2, FileSearch,
} from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/content/services';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Code2, Palette, Megaphone, Video, Building2, LayoutGrid,
};

const methodologySteps = [
  { key: 'understand', icon: Search, number: '01' },
  { key: 'diagnose', icon: FileSearch, number: '02' },
  { key: 'design', icon: Compass, number: '03' },
  { key: 'implement', icon: Cpu, number: '04' },
  { key: 'measure', icon: TrendingUp, number: '05' },
];

export function OurOfferPageContent({ locale }: { locale: string }) {
  const t = useTranslations('ourOffer');
  const tServices = useTranslations('services.items');
  const tCommon = useTranslations('common');
  const prefix = `/${locale}`;
  const loc = locale as 'es' | 'en';

  return (
    <div className="pt-24 pb-16">
      {/* ═════ HERO ═════ */}
      <section className="vx-section vx-bg-subtle relative overflow-hidden" aria-label="Hero">
        <div className="vx-container">
          <AnimatedReveal>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold text-vertex-apexTeal uppercase tracking-wider mb-2">
                {tCommon('nav.ourOffer')}
              </div>
              <h1 className="text-vertex-ink text-4xl md:text-5xl font-bold mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-vertex-facetTeal text-lg md:text-xl leading-relaxed mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href={`${prefix}/${loc === 'es' ? 'contacto' : 'contact'}`} className="vx-btn vx-btn-primary">
                  {tCommon('cta.letsTalk')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={`${prefix}/${loc === 'es' ? 'quienes-somos' : 'about-us'}`} className="vx-btn vx-btn-secondary">
                  {tCommon('cta.knowVertex')}
                </Link>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ═════ SERVICIOS ═════ */}
      <section className="vx-section" aria-label="Services">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('services.eyebrow')}
            title={t('services.title')}
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComp = iconMap[service.icon] || Lightbulb;
              return (
                <AnimatedReveal key={service.id} delay={Math.min(index + 1, 3)}>
                  <Link
                    href={`${prefix}/${loc === 'es' ? 'servicios' : 'services'}/${service.slug[loc]}`}
                    className="vx-card h-full flex flex-col group hover:border-vertex-apexTeal/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="vx-icon-wrap !mb-0">
                        <IconComp className="w-5 h-5 text-vertex-apexTeal" />
                      </div>
                      <h3 className="text-lg font-bold text-vertex-ink group-hover:text-vertex-apexTeal transition-colors">
                        {tServices(`${service.id}.title`)}
                      </h3>
                    </div>
                    <p className="text-sm text-vertex-facetBlue leading-relaxed mb-4 flex-grow">
                      {tServices(`${service.id}.shortDescription`)}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-semibold text-vertex-apexTeal group-hover:gap-2 transition-all">
                      {tCommon('cta.learnMore')}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════ METODOLOGÍA ═════ */}
      <section className="vx-section vx-bg-subtle relative overflow-hidden" aria-label="Methodology">
        <div className="vx-container relative z-10">
          <SectionHeading
            eyebrow={t('methodology.eyebrow')}
            title={t('methodology.title')}
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {/* Connector Line (Desktop) */}
            <div
              className="hidden lg:block absolute top-[90px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-vertex-apexTeal/20 via-vertex-apexTeal to-vertex-apexTeal/20 z-0 pointer-events-none"
              aria-hidden="true"
            />
            {methodologySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <AnimatedReveal key={step.key} delay={Math.min(index + 1, 4)}>
                  <div className="vx-card bg-white h-full relative z-10 flex flex-col justify-between overflow-hidden border border-gray-200/80 hover:border-vertex-apexTeal/40 transition-all duration-300 !p-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="vx-icon-wrap !mb-0 bg-vertex-apexTeal text-white shadow-sm">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-3xl font-bold text-vertex-apexTeal/15 select-none font-mono">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-vertex-ink mb-2">
                        {t(`methodology.steps.${step.key}.title`)}
                      </h3>
                      <p className="text-xs text-vertex-facetBlue leading-relaxed">
                        {t(`methodology.steps.${step.key}.description`)}
                      </p>
                    </div>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
          <AnimatedReveal>
            <p className="text-center text-sm text-vertex-facetBlue mt-8 italic">{t('methodology.disclaimer')}</p>
          </AnimatedReveal>
        </div>
      </section>

      {/* ═════ CTA FINAL ═════ */}
      <section className="vx-section vx-bg-teal text-white text-center relative overflow-hidden" aria-label="CTA">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="relative z-10 vx-container max-w-3xl mx-auto">
          <AnimatedReveal>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-vertex-facetIce text-lg md:text-xl mb-8 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
            <Link href={`${prefix}/${loc === 'es' ? 'contacto' : 'contact'}`} className="vx-btn vx-btn-light !px-8 !py-4 !text-base">
              {tCommon('cta.letsTalk')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
