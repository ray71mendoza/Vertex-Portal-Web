'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  ArrowRight, Lightbulb, Code2, Palette, Megaphone, Video, Building2, LayoutGrid,
  Search, Compass, Cpu, TrendingUp, FileSearch,
} from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ShowcaseCarousel } from '@/components/ui/ShowcaseCarousel';
import { services } from '@/content/services';
import { showcaseItems } from '@/content/showcase';
import { hrefFor, type Locale } from '@/i18n/config';
import styles from './OurOfferPageContent.module.css';

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
  const loc = locale as Locale;

  return (
    <div className={`${styles.page} pt-[var(--vx-header-height)]`}>
      {/* ═════ HERO ═════ */}
      <section className={styles.hero} aria-label="Hero">
        <div className={`${styles.heroContainer} vx-container`}>
          <div className={styles.heroGrid}>
            <AnimatedReveal className={styles.heroCopy}>
              <div className={styles.heroEyebrow}>
                {tCommon('nav.ourOffer')}
              </div>
              <h1 className={styles.heroTitle}>
                {t('hero.title')}
              </h1>
              <p className={styles.heroSubtitle}>
                {t('hero.subtitle')}
              </p>
              <div className={styles.heroActions}>
                <Link href={hrefFor(loc, 'contact')} className="vx-btn vx-btn-primary">
                  {tCommon('cta.letsTalk')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={hrefFor(loc, 'whoWeAre')} className="vx-btn vx-btn-secondary">
                  {tCommon('cta.knowVertex')}
                </Link>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={2} className={styles.heroVisual}>
              <ShowcaseCarousel items={showcaseItems} locale={loc} compact />
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* ═════ SERVICIOS ═════ */}
      <section className={`${styles.section} ${styles.servicesSection}`} aria-label="Services">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('services.eyebrow')}
            title={t('services.title')}
            align="center"
            className={styles.servicesHeading}
          />
          <div className={styles.servicesGrid}>
            {services.map((service, index) => {
              const IconComp = iconMap[service.icon] || Lightbulb;
              return (
                <AnimatedReveal key={service.id} delay={Math.min(index + 1, 3)} className={styles.cardReveal}>
                  <Link
                    href={hrefFor(loc, 'services', `/${service.slug[loc]}`)}
                    className={styles.serviceCard}
                  >
                    <div className={styles.serviceHeader}>
                      <div className={styles.serviceIcon}>
                        <IconComp aria-hidden="true" />
                      </div>
                      <h3 className={styles.serviceTitle}>
                        {tServices(`${service.id}.title`)}
                      </h3>
                    </div>
                    <p className={styles.serviceDescription}>
                      {tServices(`${service.id}.shortDescription`)}
                    </p>
                    <div className={styles.serviceLink}>
                      {tCommon('cta.learnMore')}
                      <ArrowRight aria-hidden="true" />
                    </div>
                  </Link>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════ METODOLOGÍA ═════ */}
      <section className={`${styles.section} ${styles.methodologySection}`} aria-label="Methodology">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('methodology.eyebrow')}
            title={t('methodology.title')}
            align="left"
            className={styles.methodologyHeading}
          />
          <div className={styles.methodologyGrid}>
            {methodologySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <AnimatedReveal key={step.key} delay={Math.min(index + 1, 4)} className={styles.cardReveal}>
                  <article className={styles.methodologyCard}>
                    <div className={styles.stepTopline}>
                      <div className={styles.stepIcon}>
                        <IconComponent aria-hidden="true" />
                      </div>
                      <span className={styles.stepNumber}>{step.number}</span>
                    </div>
                    <h3 className={styles.stepTitle}>{t(`methodology.steps.${step.key}.title`)}</h3>
                    <p className={styles.stepDescription}>{t(`methodology.steps.${step.key}.description`)}</p>
                  </article>
                </AnimatedReveal>
              );
            })}
          </div>
          <AnimatedReveal>
            <p className={styles.methodologyDisclaimer}>{t('methodology.disclaimer')}</p>
          </AnimatedReveal>
        </div>
      </section>

      {/* ═════ CTA FINAL ═════ */}
      <section className={styles.finalCta} aria-label="CTA">
        <div
          className={styles.finalCtaWallpaper}
          style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="vx-container relative z-10">
          <AnimatedReveal>
            <div className={styles.finalCtaContent}>
              <div>
                <span>{loc === 'es' ? 'Conversemos' : 'Let’s talk'}</span>
                <h2>{t('cta.title')}</h2>
                <p>{t('cta.subtitle')}</p>
              </div>
              <Link href={hrefFor(loc, 'contact')} className="vx-btn vx-btn-light">
                {tCommon('cta.letsTalk')}
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
