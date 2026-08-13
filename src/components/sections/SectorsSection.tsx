'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Building, ShieldCheck, HardHat, MapPin, RefreshCw, ArrowRight } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const sectors = [
  { key: 'private', icon: Building, bg: 'from-slate-900 to-vertex-apexTeal' },
  { key: 'public', icon: ShieldCheck, bg: 'from-vertex-darkBg to-vertex-facetDeep' },
  { key: 'infrastructure', icon: HardHat, bg: 'from-vertex-apexTeal to-slate-800' },
  { key: 'territorial', icon: MapPin, bg: 'from-slate-800 to-vertex-darkSurface' },
  { key: 'modernization', icon: RefreshCw, bg: 'from-vertex-facetDeep to-vertex-darkBg' },
];

interface SectorsSectionProps {
  locale: string;
}

export function SectorsSection({ locale }: SectorsSectionProps) {
  const t = useTranslations('home.sectors');
  const prefix = `/${locale}`;

  return (
    <section className="vx-section bg-white" aria-label="Sectors">
      <div className="vx-container">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={locale === 'es' ? 'Sectores Estratégicos' : 'Strategic Sectors'}
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <AnimatedReveal key={sector.key} delay={Math.min(index + 1, 4)}>
                <div className="group vx-card !p-0 overflow-hidden relative border border-gray-200/80 hover:shadow-xl transition-all duration-300">
                  {/* Card Header Surface */}
                  <div className={`p-8 bg-gradient-to-br ${sector.bg} text-white relative overflow-hidden min-h-[160px] flex flex-col justify-between`}>
                    <div
                      className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none"
                      style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
                      aria-hidden="true"
                    />
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-vertex-prismBlue border border-white/15">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="relative z-10 text-xl font-bold text-white mt-4">
                      {t(`items.${sector.key}.title`)}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 bg-white flex flex-col justify-between">
                    <p className="text-sm text-vertex-facetTeal leading-relaxed mb-6">
                      {t(`items.${sector.key}.description`)}
                    </p>

                    <Link
                      href={`${prefix}/${locale === 'es' ? 'contacto' : 'contact'}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-vertex-apexTeal group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <span>{locale === 'es' ? 'Consultar soluciones' : 'Explore solutions'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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
