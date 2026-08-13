'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';

interface CTAFinalProps {
  locale: string;
}

export function CTAFinal({ locale }: CTAFinalProps) {
  const t = useTranslations('home.ctaFinal');
  const tCta = useTranslations('common.cta');
  const prefix = `/${locale}`;

  return (
    <section className="vx-section vx-bg-teal relative overflow-hidden text-center">
      {/* Geometric Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/vertex-wallpaper-dark.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 vx-container max-w-3xl mx-auto py-8">
        <AnimatedReveal>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-vertex-facetIce text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <Link
            href={`${prefix}/${locale === 'es' ? 'contacto' : 'contact'}`}
            className="vx-btn vx-btn-light !px-8 !py-4 !text-base"
          >
            {tCta('letsTalk')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedReveal>
      </div>
    </section>
  );
}
