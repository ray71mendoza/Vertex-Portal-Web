'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Code2, Palette, Megaphone, Video, Building2, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { services } from '@/content/services';
import { hrefFor, type Locale } from '@/i18n/config';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Code2, Palette, Megaphone, Video, Building2, LayoutGrid,
};

export function ServicesIndexContent({ locale }: { locale: string }) {
  const t = useTranslations('services');
  const tServices = useTranslations('services.items');
  const tCommon = useTranslations('common');
  const loc = locale as Locale;

  return (
    <div className="pt-[var(--vx-header-height)]">
      {/* Hero */}
      <section className="vx-section vx-bg-subtle relative overflow-hidden">
        <div className="vx-container">
          <AnimatedReveal>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold text-vertex-apexTeal uppercase tracking-wider mb-2">
                {tCommon('nav.services')}
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

      {/* Services List */}
      <section className="vx-section">
        <div className="vx-container space-y-12">
          {services.map((service) => {
            const IconComp = iconMap[service.icon] || Lightbulb;
            const capabilities = service.capabilities[loc] || [];
            return (
              <AnimatedReveal key={service.id} delay={1}>
                <div className="vx-card p-8 md:p-10 border border-gray-100 hover:border-vertex-apexTeal/30 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="vx-icon-wrap">
                          <IconComp className="w-6 h-6 text-vertex-apexTeal" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-vertex-ink">
                          {tServices(`${service.id}.title`)}
                        </h2>
                      </div>
                      <p className="text-vertex-facetTeal font-medium text-lg mb-4">
                        {tServices(`${service.id}.tagline`)}
                      </p>
                      <p className="text-vertex-facetBlue text-base leading-relaxed mb-6">
                        {tServices(`${service.id}.description`)}
                      </p>
                      {/* Capabilities Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {capabilities.slice(0, 4).map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-2 text-sm text-vertex-ink font-medium">
                            <CheckCircle2 className="w-4 h-4 text-vertex-apexTeal flex-shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                      <Link
                        href={hrefFor(loc, 'services', `/${service.slug[loc]}`)}
                        className="vx-btn vx-btn-primary w-full sm:w-auto"
                      >
                        {tCommon('cta.viewService')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </section>

      {/* Advisory CTA */}
      <section className="vx-section vx-bg-teal text-white text-center">
        <div className="vx-container max-w-3xl">
          <AnimatedReveal>
            <h2 className="text-white text-3xl font-bold mb-4">{t('cta.notSure')}</h2>
            <p className="text-vertex-facetIce text-lg mb-8">{t('cta.helpYou')}</p>
            <Link href={hrefFor(loc, 'contact')} className="vx-btn vx-btn-light">
              {tCommon('cta.contactUs')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
