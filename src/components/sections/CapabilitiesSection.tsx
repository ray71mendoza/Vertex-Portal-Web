'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Code2, Palette, Megaphone, Video, Building2, LayoutGrid } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/content/services';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Code2, Palette, Megaphone, Video, Building2, LayoutGrid,
};

interface CapabilitiesSectionProps {
  locale: string;
}

export function CapabilitiesSection({ locale }: CapabilitiesSectionProps) {
  const t = useTranslations('home.capabilities');
  const tServices = useTranslations('services.items');
  const prefix = `/${locale}`;

  return (
    <section className="vx-section vx-bg-subtle" aria-label="Capabilities">
      <div className="vx-container">
        {/* Reusable Section Heading */}
        <SectionHeading
          eyebrow={locale === 'es' ? 'Capacidades Integrales' : 'Comprehensive Capabilities'}
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        {/* Restrained Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Lightbulb;
            const isFeatured = index === 0 || index === 1; // First two get wider spans on desktop bento

            return (
              <AnimatedReveal
                key={service.id}
                delay={Math.min(index + 1, 5)}
                className={isFeatured ? 'lg:col-span-6' : 'lg:col-span-4'}
              >
                <Link
                  href={`${prefix}/${locale === 'es' ? 'servicios' : 'services'}/${service.slug[locale as 'es' | 'en']}`}
                  className={`vx-card group flex flex-col justify-between h-full bg-white border border-gray-200/80 hover:border-vertex-apexTeal/40 transition-all duration-300 ${
                    isFeatured ? '!p-8 md:!p-10' : '!p-7'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="vx-icon-wrap !mb-0 group-hover:bg-vertex-apexTeal group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-vertex-facetBlue/60 group-hover:text-vertex-apexTeal transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-vertex-ink mb-3 group-hover:text-vertex-apexTeal transition-colors">
                      {tServices(`${service.id}.title`)}
                    </h3>

                    <p className="text-sm text-vertex-facetTeal leading-relaxed mb-6">
                      {tServices(`${service.id}.shortDescription`)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-vertex-apexTeal group-hover:translate-x-1 transition-transform duration-200">
                    <span>{locale === 'es' ? 'Ver detalles' : 'View details'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
