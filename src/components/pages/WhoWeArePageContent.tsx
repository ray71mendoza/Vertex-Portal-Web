'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Eye,
  Globe2,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  MapPinned,
  Phone,
  Quote,
  Settings,
  Sparkles,
  Users,
} from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { companyStatistics, testimonials, whyVertexPillars } from '@/content/company';
import { getOfficesByType } from '@/content/locations';
import { getVisibleMembers } from '@/content/team';
import { hrefFor, type Locale } from '@/i18n/config';
import { useMobileAutoCarousel } from '@/hooks/useMobileAutoCarousel';
import styles from './WhoWeArePageContent.module.css';

const pillarIconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Settings,
  Eye,
  Users,
  Handshake,
  MapPin,
};

export function WhoWeArePageContent({ locale }: { locale: string }) {
  const t = useTranslations('whoWeAre');
  const tCommon = useTranslations('common');
  const loc = locale as Locale;
  const members = getVisibleMembers().slice(0, 4);
  const talentValues = ['diversity', 'collaboration', 'learning', 'innovation', 'growth', 'results'] as const;
  const officeLocations = getOfficesByType('office');
  const pillarsCarouselRef = useMobileAutoCarousel<HTMLDivElement>(whyVertexPillars.length);
  const testimonialsCarouselRef = useMobileAutoCarousel<HTMLDivElement>(testimonials.length);

  const coverageAreas = [
    {
      id: 'colombia',
      icon: MapPinned,
      title: loc === 'es' ? 'Toda Colombia' : 'All of Colombia',
      description: loc === 'es' ? 'Cobertura nacional para acompañar organizaciones en todo el territorio.' : 'Nationwide coverage to support organizations across the country.',
    },
    {
      id: 'latam',
      icon: Globe2,
      title: loc === 'es' ? 'Toda Latinoamérica' : 'All of Latin America',
      description: loc === 'es' ? 'Capacidad regional con soluciones adaptadas a cada contexto.' : 'Regional capabilities with solutions adapted to every context.',
    },
  ];

  return (
    <div className={`${styles.page} pt-[var(--vx-header-height)]`}>
      <section className={`${styles.hero} vx-section vx-bg-dark`} aria-labelledby="who-hero-title">
        <div
          className={styles.heroWallpaper}
          style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
          aria-hidden="true"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className="vx-container relative z-10">
          <div className={styles.heroGrid}>
            <AnimatedReveal className={styles.heroContent}>
              <div className={styles.heroEyebrow}>
                <Sparkles aria-hidden="true" />
                <span>{tCommon('nav.whoWeAre')}</span>
              </div>
              <h1 id="who-hero-title" className={styles.heroTitle}>
                {t('hero.title')}
              </h1>
              <p className={styles.heroSubtitle}>{t('hero.subtitle')}</p>
              <div className={styles.heroActions}>
                <Link href={hrefFor(loc, 'ourOffer')} className="vx-btn vx-btn-light">
                  {tCommon('cta.exploreOffer')}
                  <ArrowRight aria-hidden="true" />
                </Link>
                <Link href={hrefFor(loc, 'contact')} className="vx-btn vx-btn-ghost">
                  {tCommon('cta.letsTalk')}
                </Link>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={2} className={styles.heroVisualReveal}>
              <div className={styles.heroVisual}>
                <span className={styles.heroVisualLabel}>{loc === 'es' ? 'Visión integral' : 'Integrated vision'}</span>
                <div className={styles.heroSymbolWrap}>
                  <Image src="/images/vertex-symbol.png" alt="" width={180} height={180} priority />
                </div>
                <p>{loc === 'es' ? 'Estrategia que conecta personas, tecnología y resultados.' : 'Strategy connecting people, technology and results.'}</p>
                <div className={styles.heroChips}>
                  <span>{loc === 'es' ? 'Estrategia' : 'Strategy'}</span>
                  <span>{loc === 'es' ? 'Tecnología' : 'Technology'}</span>
                  <span>{loc === 'es' ? 'Talento' : 'Talent'}</span>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section id="sobre-vertex" className={`${styles.aboutSection} vx-section scroll-mt-24`} aria-label="About Vertex">
        <div className="vx-container">
          <div className={styles.aboutGrid}>
            <AnimatedReveal>
              <div>
                <SectionHeading
                  eyebrow={t('about.eyebrow')}
                  title={t('about.title')}
                  align="left"
                  className={styles.aboutHeading}
                />
                <div className={styles.aboutCopy}>
                  <p>{t('about.p1')}</p>
                  <p>{t('about.p2')}</p>
                  <p>{t('about.p3')}</p>
                </div>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={2}>
              <div className={styles.aboutVisual}>
                <div className={styles.aboutVisualGlow} aria-hidden="true" />
                <Image
                  src="/images/vertex-logo.png"
                  alt="Vertex"
                  width={270}
                  height={82}
                  className="brightness-0 invert"
                />
                <span>{loc === 'es' ? 'Consultoría e innovación' : 'Consulting and innovation'}</span>
              </div>
            </AnimatedReveal>
          </div>

          <AnimatedReveal>
            <div className={styles.statsGrid}>
              {companyStatistics.map((stat) => (
                <div key={stat.id} className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label[loc]}</span>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section id="por-que-vertex" className={`${styles.whySection} vx-section scroll-mt-24`} aria-label="Why Vertex">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('whyVertex.eyebrow')}
            title={t('whyVertex.title')}
            align="center"
            className={styles.centeredHeading}
          />
          <div ref={pillarsCarouselRef} className={styles.pillarsGrid}>
            {whyVertexPillars.map((pillar, idx) => {
              const IconComp = pillarIconMap[pillar.icon] || CheckCircle2;
              return (
                <AnimatedReveal key={pillar.id} delay={Math.min(idx + 1, 3)} className={styles.cardReveal}>
                  <article className={styles.pillarCard}>
                    <div className={styles.pillarIcon}>
                      <IconComp aria-hidden="true" />
                    </div>
                    <h3>{pillar.title[loc]}</h3>
                    <p>{pillar.description[loc]}</p>
                  </article>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.testimonialsSection} vx-section`} aria-label="Testimonials">
        <div className="vx-container">
          <SectionHeading
            eyebrow={loc === 'es' ? 'Experiencias compartidas' : 'Shared experiences'}
            title={loc === 'es' ? 'Personas que eligen Vertex' : 'People who choose Vertex'}
            subtitle={loc === 'es' ? 'Relaciones construidas con cercanía, claridad y compromiso con cada resultado.' : 'Relationships built on proximity, clarity and commitment to every result.'}
            align="center"
            className={styles.centeredHeading}
          />
          <div ref={testimonialsCarouselRef} className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, idx) => (
              <AnimatedReveal key={testimonial.id} delay={Math.min(idx + 1, 2)} className={styles.cardReveal}>
                <article className={styles.testimonialCard}>
                  <Quote className={styles.quoteIcon} aria-hidden="true" />
                  <blockquote>{testimonial.quote[loc]}</blockquote>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar} aria-hidden="true">
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role[loc]}</span>
                      <small>{testimonial.company}</small>
                    </div>
                  </div>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="alcance-regional" className={`${styles.reachSection} vx-section vx-bg-dark scroll-mt-24`} aria-label="Regional Reach">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('reach.eyebrow')}
            title={t('reach.title')}
            subtitle={t('reach.description')}
            align="center"
            theme="dark"
            className={`${styles.centeredHeading} ${styles.reachHeading}`}
          />
          <div className={styles.reachGrid}>
            <AnimatedReveal>
              <div className={styles.reachMapCard}>
                <div className={styles.reachMapMedia}>
                  <Image
                    src="/images/vertex-regional-map-coverage.png"
                    alt={loc === 'es' ? 'Cobertura de Vertex en Colombia y Latinoamérica' : 'Vertex coverage across Colombia and Latin America'}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                    quality={92}
                  />
                </div>
                <div className={styles.reachMapCaption}>
                  <span>{loc === 'es' ? 'Cobertura activa' : 'Active coverage'}</span>
                  <strong>Colombia + LATAM</strong>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={2}>
              <div className={styles.reachCoveragePanel}>
                {coverageAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <article key={area.id} className={styles.coverageCard}>
                      <div className={styles.coverageIcon}>
                        <Icon aria-hidden="true" />
                      </div>
                      <div>
                        <h3>{area.title}</h3>
                        <p>{area.description}</p>
                      </div>
                    </article>
                  );
                })}
                <Link href={hrefFor(loc, 'contact')} className={`${styles.reachButton} vx-btn vx-btn-light`}>
                  {t('reach.contactTeam')}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section id="ubicaciones" className={`${styles.locationsSection} vx-section scroll-mt-24`} aria-label="Locations">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('locations.eyebrow')}
            title={t('locations.title')}
            align="center"
            className={styles.centeredHeading}
          />
          <div className={styles.locationsGrid}>
            {officeLocations.map((office, idx) => (
              <AnimatedReveal key={office.id} delay={Math.min(idx + 1, 3)} className={styles.cardReveal}>
                <article className={styles.officeCard}>
                  <div className={styles.officeHeader}>
                    <div className={styles.officeIcon}>
                      <MapPin aria-hidden="true" />
                    </div>
                    <div>
                      <h3>{office.city}</h3>
                      <span>{office.country[loc]}</span>
                    </div>
                  </div>
                  {office.isDemo && <span className={styles.demoBadge}>{t('locations.demoNotice')}</span>}
                  <ul className={styles.officeInfo}>
                    <li>
                      <MapPin aria-hidden="true" />
                      <span>{office.address[loc]}</span>
                    </li>
                    <li>
                      <Mail aria-hidden="true" />
                      <a href={`mailto:${office.email}`}>{office.email}</a>
                    </li>
                    <li>
                      <Phone aria-hidden="true" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`}>{office.phone}</a>
                    </li>
                    <li>
                      <Clock aria-hidden="true" />
                      <span>{office.schedule[loc]}</span>
                    </li>
                  </ul>
                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.officeMapButton}
                  >
                    {t('locations.viewMap')}
                    <ExternalLink aria-hidden="true" />
                  </a>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="nuestro-talento" className={`${styles.talentSection} vx-section scroll-mt-24`} aria-label="Talent">
        <div className="vx-container">
          <div className={styles.talentGrid}>
            <AnimatedReveal>
              <div>
                <SectionHeading
                  eyebrow={t('talent.eyebrow')}
                  title={t('talent.title')}
                  align="left"
                  className={styles.talentHeading}
                />
                <p className={styles.talentDescription}>{t('talent.description')}</p>
                <div className={styles.talentValues}>
                  {talentValues.map((key) => (
                    <div key={key} className={styles.talentValue}>
                      <CheckCircle2 aria-hidden="true" />
                      <span>{t(`talent.values.${key}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={2}>
              <div className={styles.talentVisual}>
                <div className={styles.talentVisualGlow} aria-hidden="true" />
                <Image src="/images/vertex-symbol.png" alt="" width={190} height={190} />
                <div className={styles.talentVisualCaption}>
                  <span>{loc === 'es' ? 'Cultura Vertex' : 'Vertex culture'}</span>
                  <strong>{loc === 'es' ? 'Talento multidisciplinario con propósito' : 'Purposeful multidisciplinary talent'}</strong>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section id="equipo" className={`${styles.teamSection} vx-section scroll-mt-24`} aria-label="Team">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('team.eyebrow')}
            title={t('team.title')}
            subtitle={loc === 'es' ? 'Una muestra de las disciplinas que se conectan para abordar retos complejos.' : 'A sample of the disciplines that come together to address complex challenges.'}
            align="center"
            className={styles.centeredHeading}
          />
          <div className={styles.teamGrid}>
            {members.map((member, index) => (
              <AnimatedReveal key={member.id} delay={Math.min(index + 1, 4)} className={styles.cardReveal}>
                <article className={styles.memberCard}>
                  <div className={styles.memberHeader}>
                    <div className={styles.memberAvatar} aria-hidden="true">{getInitials(member.name)}</div>
                    <div className={styles.memberIdentity}>
                      <span className={styles.memberArea}>{member.area[loc]}</span>
                      <h3>{member.name}</h3>
                      <p>{member.role[loc]}</p>
                      <small>{member.country[loc]}</small>
                    </div>
                  </div>
                  <p className={styles.memberBio}>{member.bio[loc]}</p>
                  <div className={styles.memberExpertise}>
                    {member.expertise[loc].slice(0, 3).map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                  {member.linkedin && !member.isDemo && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.memberLink}>
                      {t('team.viewLinkedIn')}
                      <ExternalLink aria-hidden="true" />
                    </a>
                  )}
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.finalCta} vx-section vx-bg-teal`} aria-label="CTA">
        <div
          className={styles.finalCtaWallpaper}
          style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 vx-container">
          <AnimatedReveal>
            <div className={styles.finalCtaContent}>
              <div>
                <span>{loc === 'es' ? 'Conversemos' : 'Let’s connect'}</span>
                <h2>{loc === 'es' ? '¿Listo para transformar tu organización?' : 'Ready to transform your organization?'}</h2>
                <p>{loc === 'es' ? 'Cuéntanos sobre tu proyecto y diseñemos juntos la solución.' : 'Tell us about your project and let\'s design the solution together.'}</p>
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

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}
