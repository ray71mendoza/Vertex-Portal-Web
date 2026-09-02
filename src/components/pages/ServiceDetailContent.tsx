'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  LayoutGrid,
  Lightbulb,
  Megaphone,
  Palette,
  ShieldAlert,
  Sparkles,
  Video,
} from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { getServiceBySlug, type ServiceData } from '@/content/services';
import { getProjectsByServiceCategory } from '@/content/projects';
import { hrefFor, type Locale } from '@/i18n/config';
import styles from './ServiceDetailContent.module.css';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Code2,
  Palette,
  Megaphone,
  Video,
  Building2,
  LayoutGrid,
};

export function ServiceDetailContent({ slug, locale }: { slug: string; locale: string }) {
  const loc = locale as Locale;
  const service: ServiceData | undefined = getServiceBySlug(slug, loc);

  if (!service) notFound();

  const t = useTranslations('services');
  const tServices = useTranslations('services.items');
  const tCommon = useTranslations('common');
  const IconComp = iconMap[service.icon] || Lightbulb;
  const capabilities = service.capabilities[loc] || [];
  const problems = service.problems[loc] || [];
  const benefits = service.benefits[loc] || [];
  const targetAudience = service.targetAudience[loc] || [];
  const contactHref = `${hrefFor(loc, 'contact')}?service=${service.id}`;
  const relatedProjects = getProjectsByServiceCategory(service.id, 2);

  return (
    <div className={`${styles.page} pt-[var(--vx-header-height)]`}>
      <section className={styles.hero} aria-labelledby="service-title">
        <div className={`${styles.heroContainer} vx-container`}>
          <AnimatedReveal>
            <nav className={styles.breadcrumb} aria-label={loc === 'es' ? 'Miga de pan' : 'Breadcrumb'}>
              <Link href={hrefFor(loc, 'home')}>{tCommon('breadcrumb.home')}</Link>
              <ChevronRight aria-hidden="true" />
              <Link href={hrefFor(loc, 'services')}>{tCommon('nav.services')}</Link>
              <ChevronRight aria-hidden="true" />
              <span aria-current="page">{tServices(`${service.id}.title`)}</span>
            </nav>

            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.serviceLead}>
                  <div className={styles.serviceIcon}>
                    <IconComp aria-hidden="true" />
                  </div>
                  <div>
                    <h1 id="service-title">{tServices(`${service.id}.title`)}</h1>
                    <p className={styles.tagline}>{tServices(`${service.id}.tagline`)}</p>
                    <p className={styles.description}>{tServices(`${service.id}.description`)}</p>
                  </div>
                </div>
              </div>

              <aside className={styles.heroCta} aria-label={loc === 'es' ? 'Contacto de servicio' : 'Service contact'}>
                <span>{loc === 'es' ? 'Soluciones a la medida' : 'Tailored solutions'}</span>
                <p className={styles.ctaHeading}>
                  {loc === 'es'
                    ? 'Convirtamos tu reto en una solución concreta.'
                    : 'Let’s turn your challenge into a concrete solution.'}
                </p>
                <Link href={contactHref} className="vx-btn vx-btn-primary">
                  {tCommon('cta.contactUs')}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </aside>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className={`${styles.section} ${styles.capabilitiesSection}`} aria-labelledby="capabilities-title">
        <div className="vx-container">
          <SectionIntro
            eyebrow={loc === 'es' ? 'Alcance técnico' : 'Technical scope'}
            title={t('detail.capabilities')}
            id="capabilities-title"
          />
          <div className={styles.capabilitiesGrid}>
            {capabilities.map((capability, index) => (
              <AnimatedReveal key={capability} delay={Math.min(index + 1, 4)} className={styles.revealCard}>
                <article className={styles.capabilityCard}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{capability}</span>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {problems.length > 0 && (
        <section className={`${styles.section} ${styles.challengesSection}`} aria-labelledby="challenges-title">
          <div className="vx-container">
            <SectionIntro
              eyebrow={loc === 'es' ? 'Desafíos clave' : 'Key challenges'}
              title={loc === 'es' ? 'Desafíos que abordamos' : 'Challenges we address'}
              id="challenges-title"
            />
            <div className={styles.challengesGrid}>
              {problems.map((problem, index) => (
                <AnimatedReveal key={problem} delay={Math.min(index + 1, 4)} className={styles.revealCard}>
                  <article className={styles.challengeCard}>
                    <ShieldAlert aria-hidden="true" />
                    <span>{problem}</span>
                  </article>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        className={`${styles.section} ${styles.outcomesSection}`}
        aria-label={loc === 'es' ? 'Resultados y público objetivo' : 'Outcomes and target audience'}
      >
        <div className="vx-container">
          <div className={styles.outcomesGrid}>
            <AnimatedReveal className={styles.revealCard}>
              <OutcomePanel
                eyebrow={loc === 'es' ? 'Resultados esperados' : 'Expected outcomes'}
                title={t('detail.benefits')}
                items={benefits}
                icon={Sparkles}
              />
            </AnimatedReveal>
            <AnimatedReveal delay={2} className={styles.revealCard}>
              <OutcomePanel
                eyebrow={loc === 'es' ? 'Público objetivo' : 'Target audience'}
                title={loc === 'es' ? 'Organizaciones a las que acompañamos' : 'Organizations we help'}
                items={targetAudience}
                icon={Building2}
              />
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className={styles.relatedSection} aria-labelledby="related-projects-title">
          <div className="vx-container">
            <SectionIntro
              eyebrow={loc === 'es' ? 'Casos y Experiencia' : 'Cases & Experience'}
              title={loc === 'es' ? 'Proyectos y Aplicaciones Relacionadas' : 'Related Projects & Case Studies'}
              id="related-projects-title"
            />
            <div className={styles.relatedGrid}>
              {relatedProjects.map((p) => {
                const pSlug = p.slug[loc];
                const pBasePath = loc === 'es' ? 'proyectos' : 'projects';
                const pHref = `/${loc}/${pBasePath}/${pSlug}`;
                return (
                  <Link key={p.id} href={pHref} className={styles.relatedCard}>
                    <div>
                      <h3 className={styles.relatedCardTitle}>{p.title[loc]}</h3>
                      <p className={styles.relatedCardDesc}>{p.description[loc]}</p>
                    </div>
                    <span className={styles.relatedCardLink}>
                      {loc === 'es' ? 'Ver caso de estudio' : 'View case study'}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className={styles.closingCta} aria-labelledby="service-cta-title">
        <div
          className={styles.closingWallpaper}
          style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
          aria-hidden="true"
        />
        <div className="vx-container relative z-10">
          <AnimatedReveal>
            <div className={styles.closingContent}>
              <span>{loc === 'es' ? 'Hablemos de tu reto' : 'Let’s discuss your challenge'}</span>
              <h2 id="service-cta-title">{t('detail.needThis')}</h2>
              <p>{t('detail.talkAbout')}</p>
              <Link href={contactHref} className="vx-btn vx-btn-light">
                {tCommon('cta.contactUs')}
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}

function SectionIntro({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <AnimatedReveal>
      <header className={styles.sectionIntro}>
        <span>{eyebrow}</span>
        <h2 id={id}>{title}</h2>
      </header>
    </AnimatedReveal>
  );
}

function OutcomePanel({
  eyebrow,
  title,
  items,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  icon: React.ElementType;
}) {
  return (
    <article className={styles.outcomePanel}>
      <header className={styles.outcomeHeader}>
        <span>{eyebrow}</span>
        <h3>{title}</h3>
      </header>
      <div className={styles.outcomeList}>
        {items.map((item) => (
          <div key={item} className={styles.outcomeItem}>
            <Icon aria-hidden="true" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
