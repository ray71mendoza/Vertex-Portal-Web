'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  ArrowRight, Lightbulb, TrendingUp, Send, FileSearch, MessageCircle,
  ClipboardCheck, CheckCircle2, Rocket, Zap, BookOpen, Users, Globe
} from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ShowcaseCarousel } from '@/components/ui/ShowcaseCarousel';
import { recruitmentSteps, workAttributes, workEnvironmentValues } from '@/content/careers';
import { careersShowcaseItems } from '@/content/showcase';
import { hrefFor, type Locale } from '@/i18n/config';
import { useMobileAutoCarousel } from '@/hooks/useMobileAutoCarousel';
import styles from './CareersPageContent.module.css';

const stepIconMap: Record<string, React.ElementType> = {
  Send, FileSearch, MessageCircle, ClipboardCheck, CheckCircle2, Rocket
};

const attrIconMap: Record<string, React.ElementType> = {
  Zap, BookOpen, Users, TrendingUp, Lightbulb, Globe
};

export function CareersPageContent({ locale }: { locale: string }) {
  const t = useTranslations('careers');
  const tCommon = useTranslations('common');
  const loc = locale as Locale;
  const whyCarouselRef = useMobileAutoCarousel<HTMLDivElement>(workAttributes.length, { breakpoint: 640 });
  const environmentCarouselRef = useMobileAutoCarousel<HTMLDivElement>(workEnvironmentValues.length, { breakpoint: 640 });

  return (
    <div className={`${styles.page} pt-[var(--vx-header-height)]`}>
      {/* ═════ HERO ═════ */}
      <section className="vx-section vx-bg-dark text-white relative overflow-hidden" aria-label="Hero">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 vx-container">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <AnimatedReveal className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-8 backdrop-blur-md">
                <span className="text-vertex-prismBlue text-xs font-bold uppercase tracking-wider">
                  {tCommon('nav.careers')}
                </span>
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-vertex-facetIce text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href={hrefFor(loc, 'jobs')} className="vx-btn vx-btn-light">
                  {tCommon('cta.viewOpportunities')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={2} className="lg:col-span-7">
              <ShowcaseCarousel items={careersShowcaseItems} locale={loc} compact />
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* ═════ POR QUÉ TRABAJAR EN VERTEX ═════ */}
      <section className={styles.whySection} aria-label="Why work at Vertex">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('whyWork.eyebrow')}
            title={t('whyWork.title')}
            align="left"
            className={styles.whyHeading}
          />
          <div ref={whyCarouselRef} className={styles.featureGrid}>
            {workAttributes.map((attr, idx) => {
              const IconComp = attrIconMap[attr.icon] || Lightbulb;
              return (
                <AnimatedReveal key={attr.id} delay={Math.min(idx + 1, 3)} className={styles.cardReveal}>
                  <article className={styles.featureCard}>
                    <div className={styles.featureTopline}>
                      <div className={styles.featureIcon}>
                        <IconComp aria-hidden="true" />
                      </div>
                      <span className={styles.featureNumber}>{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className={styles.featureTitle}>{attr.title[loc]}</h3>
                    <p className={styles.featureDescription}>{attr.description[loc]}</p>
                  </article>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════ AMBIENTE DE TRABAJO ═════ */}
      <section id="ambiente-trabajo" className={styles.environmentSection} aria-label="Work Environment">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('environment.eyebrow')}
            title={t('environment.title')}
            subtitle={t('environment.description')}
            align="left"
            className={styles.environmentHeading}
          />
          <div ref={environmentCarouselRef} className={styles.featureGrid}>
            {workEnvironmentValues.map((val, idx) => (
              <AnimatedReveal key={val.id} delay={Math.min(idx + 1, 3)} className={styles.cardReveal}>
                <article className={`${styles.featureCard} ${styles.environmentCard}`}>
                  <div className={styles.featureTopline}>
                    <div className={`${styles.featureIcon} ${styles.environmentIcon}`}>
                      <CheckCircle2 aria-hidden="true" />
                    </div>
                    <span className={styles.featureNumber}>{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{val.title[loc]}</h3>
                  <p className={styles.featureDescription}>{val.description[loc]}</p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════ PROCESO DE RECLUTAMIENTO ═════ */}
      <section id="proceso-reclutamiento" className={styles.recruitmentSection} aria-label="Recruitment Process">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('recruitment.eyebrow')}
            title={t('recruitment.title')}
            align="left"
            className={styles.recruitmentHeading}
          />
          <div className={styles.recruitmentGrid}>
            {recruitmentSteps.map((step, idx) => {
              const IconComp = stepIconMap[step.icon] || CheckCircle2;
              return (
                <AnimatedReveal key={step.id} delay={Math.min(idx + 1, 3)} className={styles.cardReveal}>
                  <article className={styles.recruitmentCard}>
                    <div className={styles.stepTopline}>
                      <div className={styles.stepIcon}>
                        <IconComp aria-hidden="true" />
                      </div>
                      <span className={styles.stepNumber}>{step.number}</span>
                    </div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>{step.title[loc]}</h3>
                      <p className={styles.stepDescription}>{step.description[loc]}</p>
                    </div>
                  </article>
                </AnimatedReveal>
              );
            })}
          </div>
          <p className={styles.recruitmentDisclaimer}>{t('recruitment.disclaimer')}</p>
        </div>
      </section>

      {/* ═════ BANCO DE TALENTOS / CTA ═════ */}
      <section className={styles.talentCta} aria-label="Talent Pool">
        <div className={styles.talentCtaWallpaper} aria-hidden="true" />
        <div className="relative z-10 vx-container">
          <AnimatedReveal>
            <div className={styles.talentCtaContent}>
              <div>
                <span>{loc === 'es' ? 'Mantengamos el contacto' : 'Let’s stay connected'}</span>
                <h2>{t('talentPool.title')}</h2>
                <p>{t('talentPool.description')}</p>
              </div>
              <Link href={hrefFor(loc, 'jobs')} className="vx-btn vx-btn-light">
                {tCommon('cta.viewOpportunities')}
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
