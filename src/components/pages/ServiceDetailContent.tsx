'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Building2, Lightbulb, Code2, Palette, Megaphone, Video, LayoutGrid } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getServiceBySlug, ServiceData } from '@/content/services';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Code2, Palette, Megaphone, Video, Building2, LayoutGrid,
};

export function ServiceDetailContent({ slug, locale }: { slug: string; locale: string }) {
  const service: ServiceData | undefined = getServiceBySlug(slug, locale as 'es' | 'en');

  if (!service) {
    notFound();
  }

  const t = useTranslations('services');
  const tServices = useTranslations('services.items');
  const tCommon = useTranslations('common');
  const prefix = `/${locale}`;

  const IconComp = iconMap[service.icon] || Lightbulb;
  const capabilities = service.capabilities[locale as 'es' | 'en'] || [];
  const problems = service.problems[locale as 'es' | 'en'] || [];
  const benefits = service.benefits[locale as 'es' | 'en'] || [];
  const targetAudience = service.targetAudience[locale as 'es' | 'en'] || [];

  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumb & Service Hero */}
      <section className="vx-section vx-bg-subtle relative overflow-hidden">
        <div className="vx-container">
          <AnimatedReveal>
            <div className="flex items-center gap-2 text-sm font-medium text-vertex-facetBlue mb-8">
              <Link href={prefix} className="hover:text-vertex-apexTeal">{tCommon('breadcrumb.home')}</Link>
              <span>/</span>
              <Link href={`${prefix}/${locale === 'es' ? 'servicios' : 'services'}`} className="hover:text-vertex-apexTeal">
                {tCommon('nav.services')}
              </Link>
              <span>/</span>
              <span className="text-vertex-ink font-semibold">{tServices(`${service.id}.title`)}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="vx-icon-wrap w-16 h-16 !mb-6 bg-vertex-apexTeal text-white shadow-md">
                  <IconComp className="w-8 h-8" />
                </div>
                <h1 className="vx-h1-internal text-vertex-ink mb-4 font-bold">
                  {tServices(`${service.id}.title`)}
                </h1>
                <p className="text-vertex-apexTeal text-xl md:text-2xl font-semibold mb-6">
                  {tServices(`${service.id}.tagline`)}
                </p>
                <p className="text-vertex-facetTeal text-lg leading-relaxed max-w-3xl">
                  {tServices(`${service.id}.description`)}
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href={`${prefix}/${locale === 'es' ? 'contacto' : 'contact'}?service=${service.id}`}
                  className="vx-btn vx-btn-primary !px-8 !py-4"
                >
                  {tCommon('cta.contactUs')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="vx-section bg-white">
        <div className="vx-container">
          <SectionHeading
            eyebrow={locale === 'es' ? 'Alcance Técnico' : 'Technical Scope'}
            title={t('detail.capabilities')}
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((cap, idx) => (
              <AnimatedReveal key={idx} delay={Math.min(idx + 1, 4)}>
                <div className="vx-card p-6 flex items-start gap-4 h-full border border-gray-200/80 bg-vertex-lightBg">
                  <div className="vx-icon-wrap !w-10 !h-10 !mb-0 bg-vertex-apexTeal/10 text-vertex-apexTeal flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-vertex-ink font-semibold text-base leading-relaxed">
                    {cap}
                  </span>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges We Address (Formerly "Problems it solves") */}
      {problems.length > 0 && (
        <section className="vx-section vx-bg-subtle">
          <div className="vx-container">
            <SectionHeading
              eyebrow={locale === 'es' ? 'Desafíos Clave' : 'Key Challenges'}
              title={locale === 'es' ? 'Desafíos que abordamos' : 'Challenges we address'}
              align="left"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {problems.map((prob, idx) => (
                <AnimatedReveal key={idx} delay={Math.min(idx + 1, 4)}>
                  <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-start gap-4">
                    <ShieldAlert className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-vertex-facetTeal text-base font-medium leading-relaxed">
                      {prob}
                    </span>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits & Organizations We Help */}
      <section className="vx-section bg-white">
        <div className="vx-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Benefits */}
            <AnimatedReveal>
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vertex-apexTeal/10 text-vertex-apexTeal text-xs font-bold uppercase tracking-wider mb-4">
                  {locale === 'es' ? 'Resultados Esperados' : 'Expected Outcomes'}
                </div>
                <h2 className="text-vertex-ink mb-8">{t('detail.benefits')}</h2>
                <div className="space-y-4">
                  {benefits.map((ben, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-5 rounded-2xl bg-vertex-lightSubtle border border-gray-100">
                      <Sparkles className="w-5 h-5 text-vertex-apexTeal flex-shrink-0 mt-0.5" />
                      <span className="text-vertex-ink font-semibold text-base">{ben}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>

            {/* Organizations We Help */}
            <AnimatedReveal delay={2}>
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vertex-apexTeal/10 text-vertex-apexTeal text-xs font-bold uppercase tracking-wider mb-4">
                  {locale === 'es' ? 'Público Objetivo' : 'Target Audience'}
                </div>
                <h2 className="text-vertex-ink mb-8">
                  {locale === 'es' ? 'Organizaciones a las que acompañamos' : 'Organizations we help'}
                </h2>
                <div className="space-y-4">
                  {targetAudience.map((target, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                      <Building2 className="w-5 h-5 text-vertex-apexTeal flex-shrink-0 mt-0.5" />
                      <span className="text-vertex-ink font-semibold text-base">{target}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Service Specific Closing CTA */}
      <section className="vx-section vx-bg-teal text-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 vx-container max-w-3xl">
          <AnimatedReveal>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">{t('detail.needThis')}</h2>
            <p className="text-vertex-facetIce text-lg mb-8">{t('detail.talkAbout')}</p>
            <Link
              href={`${prefix}/${locale === 'es' ? 'contacto' : 'contact'}?service=${service.id}`}
              className="vx-btn vx-btn-light !px-8 !py-4"
            >
              {tCommon('cta.contactUs')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
