'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { hrefFor, type Locale } from '@/i18n/config';

interface CTAFinalProps {
  locale: string;
}

export function CTAFinal({ locale }: CTAFinalProps) {
  const t = useTranslations('home.ctaFinal');
  const tCta = useTranslations('common.cta');
  const loc = locale as Locale;

  return (
    <section
      className="home-final-cta bg-white pb-[clamp(64px,6vw,88px)]"
      aria-label={loc === 'es' ? 'Contacto' : 'Contact'}
    >
      <div className="vx-container">
        <AnimatedReveal>
          <div className="relative overflow-hidden rounded-[32px] bg-vertex-apexTeal px-6 py-10 shadow-2xl shadow-vertex-apexTeal/15 sm:px-10 lg:px-14 lg:py-12">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
              aria-hidden="true"
            />
            <div className="absolute -right-16 -top-28 h-72 w-72 rounded-full border border-white/12" aria-hidden="true" />
            <div className="home-final-cta-grid relative z-10 grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="home-final-cta-eyebrow block text-xs font-bold uppercase tracking-[0.14em] text-vertex-prismBlue">
                  {loc === 'es' ? 'Conversemos' : 'Let’s connect'}
                </span>
                <h2 className="home-section-title max-w-[22ch] text-3xl font-bold text-white md:text-4xl">
                  {t('title')}
                </h2>
                <p className="home-final-cta-subtitle max-w-2xl text-base leading-relaxed text-vertex-facetIce md:text-lg">
                  {t('subtitle')}
                </p>
              </div>
              <div className="home-final-cta-action lg:col-span-4 lg:text-right">
                <Link
                  href={hrefFor(loc, 'contact')}
                  className="vx-btn vx-btn-light group w-full !px-8 !text-base sm:w-auto"
                >
                  {tCta('letsTalk')}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
