'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, Code2, LayoutGrid, Lightbulb, Megaphone, Palette, Video } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/content/services';
import { hrefFor, type Locale } from '@/i18n/config';
import { useMobileAutoCarousel } from '@/hooks/useMobileAutoCarousel';
import styles from './CapabilitiesSection.module.css';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Code2,
  Palette,
  Megaphone,
  Video,
  Building2,
  LayoutGrid,
};

interface CapabilitiesSectionProps {
  locale: string;
}

export function CapabilitiesSection({ locale }: CapabilitiesSectionProps) {
  const t = useTranslations('home.capabilities');
  const tServices = useTranslations('services.items');
  const loc = locale as Locale;
  const carouselRef = useMobileAutoCarousel<HTMLDivElement>(services.length);

  return (
    <section className={`${styles.section} home-capabilities vx-section relative overflow-hidden`} aria-label="Capabilities">
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full border border-vertex-apexTeal/8" aria-hidden="true" />
      <div className="vx-container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow={loc === 'es' ? 'Capacidades integrales' : 'Comprehensive capabilities'}
              title={t('title')}
              subtitle={t('subtitle')}
              align="left"
              className="home-capabilities-heading !mb-0"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <AnimatedReveal className="lg:col-span-5">
            <figure className={`${styles.staticVisual} home-capabilities-visual`}>
              <Image
                src="/images/demo-software-platform.svg"
                alt={loc === 'es' ? 'Plataforma digital integrada de Vertex' : 'Integrated Vertex digital platform'}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className={styles.staticImage}
              />
              <div className={styles.staticOverlay}>
                <span>
                  {loc === 'es' ? 'Un ecosistema conectado' : 'A connected ecosystem'}
                </span>
                <p>
                  {loc === 'es'
                    ? 'Estrategia, tecnología y comunicación trabajando como un solo sistema.'
                    : 'Strategy, technology and communication working as one system.'}
                </p>
              </div>
            </figure>
          </AnimatedReveal>

          <div ref={carouselRef} className={`${styles.capabilitiesGrid} lg:col-span-7`}>
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Lightbulb;

              return (
                <AnimatedReveal
                  key={service.id}
                  delay={Math.min(index + 1, 4)}
                  className={`${styles.cardReveal} ${index === services.length - 1 ? styles.wideCardReveal : ''}`}
                >
                  <Link
                    href={hrefFor(loc, 'services', `/${service.slug[loc]}`)}
                    className={`${styles.capabilityCard} home-capability-card`}
                  >
                    <span className={styles.cardTopline}>
                      <span className={styles.capabilityIcon}>
                        <IconComponent aria-hidden="true" />
                      </span>
                      <span className={styles.capabilityNumber}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </span>
                    <span className={styles.capabilityTitle}>{tServices(`${service.id}.title`)}</span>
                    <span className={styles.capabilityLink}>
                      {loc === 'es' ? 'Ver capacidad' : 'View capability'}
                      <ArrowRight aria-hidden="true" />
                    </span>
                  </Link>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
