'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { hrefFor, type Locale } from '@/i18n/config';

interface AboutPreviewProps {
  locale: string;
}

export function AboutPreview({ locale }: AboutPreviewProps) {
  const t = useTranslations('home.about');
  const tCta = useTranslations('common.cta');
  const loc = locale as Locale;
  const secondaryDescription = locale === 'es'
    ? 'Conectamos consultoría, software e inteligencia artificial para mejorar la operación y acelerar decisiones.'
    : 'We connect consulting, software, and artificial intelligence to improve operations and accelerate decisions.';

  const keyPoints = locale === 'es' ? [
    'Integración real de estrategia, software e IA.',
    'Soluciones a la medida sin plantillas genéricas.',
    'Orientación a resultados sostenibles y medibles.'
  ] : [
    'True integration of strategy, software, and AI.',
    'Tailored solutions with zero generic templates.',
    'Focus on sustainable, measurable results.'
  ];

  return (
    <section className="home-about vx-section relative overflow-hidden bg-white" aria-label="About Preview">
      <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-vertex-prismBlue/8 blur-3xl" aria-hidden="true" />
      <div className="vx-container">
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Content Column (First on Mobile) */}
          <div className="lg:col-span-7">
            <AnimatedReveal>
              <div className="home-eyebrow home-about-eyebrow inline-flex items-center gap-2 rounded-full bg-vertex-apexTeal/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-vertex-apexTeal">
                <span className="font-mono text-[0.68rem] text-vertex-facetBlue">01</span>
                <span className="h-3 w-px bg-vertex-apexTeal/25" aria-hidden="true" />
                {locale === 'es' ? 'Transformación Estratégica' : 'Strategic Transformation'}
              </div>

              <h2 className="home-section-title home-about-title max-w-[18ch] text-vertex-ink">
                {t('title')}
              </h2>

              <p className="home-about-lead max-w-[62ch]">
                {t('description')}
              </p>

              <p className="home-about-support max-w-[60ch]">
                {secondaryDescription}
              </p>

              {/* Key points checklist */}
              <div className="home-about-checklist grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {keyPoints.map((point, idx) => (
                  <div key={idx} className="home-check-card flex rounded-2xl border border-vertex-ink/8 bg-vertex-lightBg">
                    <CheckCircle2 className="home-check-icon flex-shrink-0 text-vertex-apexTeal" />
                    <span className="home-check-text text-vertex-ink">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="home-about-cta">
                <Link
                  href={hrefFor(loc, 'whoWeAre')}
                  className="vx-btn vx-btn-secondary group"
                >
                  {tCta('ourHistory')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedReveal>
          </div>

          {/* Visual Column (Second on Mobile) */}
          <div className="lg:col-span-5">
            <AnimatedReveal delay={2}>
              <div className="home-about-visual relative aspect-[5/4] overflow-hidden rounded-[30px] border border-vertex-ink/8 bg-vertex-darkBg p-8 shadow-2xl shadow-vertex-ink/15">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-70"
                  style={{ backgroundImage: 'url(/images/about-vision.jpg)' }}
                  aria-hidden="true"
                />
                <div className="absolute inset-5 rounded-[22px] border border-white/10" aria-hidden="true" />
                <span className="absolute left-8 top-8 z-10 text-xs font-bold uppercase tracking-[0.16em] text-vertex-prismBlue">
                  {locale === 'es' ? 'Visión integral' : 'Integrated vision'}
                </span>
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                  <Image
                    src="/images/vertex-symbol.png"
                    alt="Vertex Symbol"
                    width={180}
                    height={180}
                    className="mx-auto mb-5 h-auto w-28 drop-shadow-[0_14px_28px_rgba(0,0,0,0.35)] sm:w-32"
                  />
                  <span className="block text-2xl font-bold tracking-[-0.02em] text-white">VERTEX</span>
                  <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.16em] text-vertex-prismBlue">
                    {locale === 'es' ? 'Consultoría e Innovación' : 'Innovation & Consulting'}
                  </span>
                </div>
                <div className="absolute inset-x-8 bottom-8 z-10 flex items-center justify-between border-t border-white/10 pt-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/60">
                  <span>{locale === 'es' ? 'Estrategia' : 'Strategy'}</span>
                  <span className="text-vertex-prismBlue">×</span>
                  <span>{locale === 'es' ? 'Tecnología' : 'Technology'}</span>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
