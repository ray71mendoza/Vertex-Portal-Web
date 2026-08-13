'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';

interface AboutPreviewProps {
  locale: string;
}

export function AboutPreview({ locale }: AboutPreviewProps) {
  const t = useTranslations('home.about');
  const tCta = useTranslations('common.cta');
  const prefix = `/${locale}`;

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
    <section className="vx-section bg-white" aria-label="About Preview">
      <div className="vx-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column (First on Mobile) */}
          <div className="lg:col-span-7">
            <AnimatedReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vertex-apexTeal/10 text-vertex-apexTeal text-xs font-bold uppercase tracking-wider mb-4">
                {locale === 'es' ? 'Transformación Estratégica' : 'Strategic Transformation'}
              </div>

              <h2 className="text-vertex-ink mb-6">
                {t('title')}
              </h2>

              <p className="text-vertex-facetTeal text-lg font-medium leading-relaxed mb-4">
                {t('description')}
              </p>

              <p className="text-vertex-facetBlue text-base leading-relaxed mb-8">
                {t('description2')}
              </p>

              {/* Key points checklist */}
              <div className="space-y-3 mb-10">
                {keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-vertex-apexTeal flex-shrink-0" />
                    <span className="text-vertex-ink font-semibold text-sm md:text-base">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href={`${prefix}/${locale === 'es' ? 'nosotros' : 'about'}`}
                  className="vx-btn vx-btn-secondary"
                >
                  {tCta('ourHistory')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedReveal>
          </div>

          {/* Visual Column (Second on Mobile) */}
          <div className="lg:col-span-5">
            <AnimatedReveal delay={2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 bg-vertex-darkBg shadow-xl flex items-center justify-center p-8">
                <div
                  className="absolute inset-0 opacity-20 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
                  aria-hidden="true"
                />
                <div className="relative z-10 text-center">
                  <Image
                    src="/images/vertex-symbol.png"
                    alt="Vertex Symbol"
                    width={180}
                    height={180}
                    className="w-32 h-auto mx-auto mb-4 drop-shadow-lg"
                  />
                  <span className="text-white font-bold text-xl tracking-tight block">VERTEX</span>
                  <span className="text-vertex-prismBlue text-xs uppercase tracking-widest block mt-1">
                    {locale === 'es' ? 'Consultoría e Innovación' : 'Innovation & Consulting'}
                  </span>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
