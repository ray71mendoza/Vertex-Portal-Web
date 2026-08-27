'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Layers,
  LayoutGrid,
  Lightbulb,
  MapPin,
  Megaphone,
  Palette,
  ShieldAlert,
  Sparkles,
  Target,
  Video,
} from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import {
  getProjectBySlug,
  getRelatedProjects,
  getNextPrevProjects,
  type Project,
} from '@/content/projects';
import { services, type ServiceCategory } from '@/content/services';
import { hrefFor, type Locale } from '@/i18n/config';
import styles from './ProjectDetailContent.module.css';

const serviceIconMap: Record<ServiceCategory, React.ElementType> = {
  'innovation-digital-transformation': Lightbulb,
  'software-development': Code2,
  'strategic-design-branding': Palette,
  'digital-marketing-communications': Megaphone,
  'audiovisual-production': Video,
  'public-sector-large-projects': Building2,
  'trade-show-experiences': LayoutGrid,
};

export function ProjectDetailContent({ slug, locale }: { slug: string; locale: string }) {
  const loc = locale as Locale;
  const project: Project | undefined = getProjectBySlug(slug, loc);

  if (!project) {
    notFound();
  }

  const t = useTranslations('projects');
  const tCommon = useTranslations('common');
  const tStates = useTranslations('common.states');
  const tSectors = useTranslations('common.sectors');
  const tServices = useTranslations('services.items');

  const relatedProjects = getRelatedProjects(project.id, 2);
  const { prev, next } = getNextPrevProjects(project.id);
  const contactHref = `${hrefFor(loc, 'contact')}?service=${project.category}`;

  return (
    <div className={`${styles.page} pt-[var(--vx-header-height)]`}>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className={styles.hero} aria-labelledby="project-detail-title">
        <div className={`vx-container ${styles.heroContainer}`}>
          <AnimatedReveal>
            <nav className={styles.breadcrumb} aria-label={loc === 'es' ? 'Miga de pan' : 'Breadcrumb'}>
              <Link href={hrefFor(loc, 'home')}>{tCommon('breadcrumb.home')}</Link>
              <ChevronRight aria-hidden="true" />
              <Link href={hrefFor(loc, 'projects')}>{tCommon('nav.projects')}</Link>
              <ChevronRight aria-hidden="true" />
              <span aria-current="page">{project.title[loc]}</span>
            </nav>

            <header className={styles.heroHeader}>
              <div className={styles.metaPills}>
                <span
                  className={
                    project.status === 'active'
                      ? styles.badgeActive
                      : project.status === 'completed'
                      ? styles.badgeCompleted
                      : styles.badgePaused
                  }
                >
                  {tStates(project.status)}
                </span>
                <span className={styles.sectorTag}>{tSectors(project.sector)}</span>
                {project.location && (
                  <span className={styles.locationTag}>
                    <MapPin aria-hidden="true" />
                    <span>{project.location[loc]}</span>
                  </span>
                )}
              </div>

              <h1 id="project-detail-title" className={styles.title}>
                {project.title[loc]}
              </h1>

              <p className={styles.leadDescription}>{project.description[loc]}</p>
            </header>
          </AnimatedReveal>
        </div>
      </section>

      {/* ============================================
          MAIN MEDIA & QUICK FACTS
          ============================================ */}
      <section className={styles.showcaseSection} aria-label={loc === 'es' ? 'Presentación visual' : 'Visual showcase'}>
        <div className="vx-container">
          <div className={styles.showcaseGrid}>
            <AnimatedReveal className={styles.mediaFrame}>
              {project.coverImage ? (
                <Image
                  src={project.coverImage}
                  alt={project.title[loc]}
                  fill
                  priority
                  sizes="(min-width: 1024px) 68vw, 100vw"
                  className={styles.mediaImage}
                />
              ) : (
                <div className="w-full h-full bg-vertex-darkSurface" />
              )}
            </AnimatedReveal>

            <AnimatedReveal delay={2}>
              <aside className={styles.quickFactsCard} aria-label={t('detail.quickFacts')}>
                <h2 className={styles.quickFactsTitle}>{t('detail.quickFacts')}</h2>
                <div className={styles.factsList}>
                  <div className={styles.factItem}>
                    <div className={styles.factIcon}>
                      <Briefcase aria-hidden="true" />
                    </div>
                    <div className={styles.factContent}>
                      <span className={styles.factLabel}>{t('detail.sector')}</span>
                      <span className={styles.factValue}>{tSectors(project.sector)}</span>
                    </div>
                  </div>

                  <div className={styles.factItem}>
                    <div className={styles.factIcon}>
                      <CheckCircle2 aria-hidden="true" />
                    </div>
                    <div className={styles.factContent}>
                      <span className={styles.factLabel}>{t('detail.status')}</span>
                      <span className={styles.factValue}>{tStates(project.status)}</span>
                    </div>
                  </div>

                  {project.location && (
                    <div className={styles.factItem}>
                      <div className={styles.factIcon}>
                        <MapPin aria-hidden="true" />
                      </div>
                      <div className={styles.factContent}>
                        <span className={styles.factLabel}>{t('detail.location')}</span>
                        <span className={styles.factValue}>{project.location[loc]}</span>
                      </div>
                    </div>
                  )}

                  <div className={styles.factItem}>
                    <div className={styles.factIcon}>
                      <Calendar aria-hidden="true" />
                    </div>
                    <div className={styles.factContent}>
                      <span className={styles.factLabel}>{t('detail.published')}</span>
                      <span className={styles.factValue}>
                        {new Date(project.publishedAt).toLocaleDateString(loc === 'es' ? 'es-CO' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </span>
                    </div>
                  </div>

                  <div className={styles.factItem}>
                    <div className={styles.factIcon}>
                      <Layers aria-hidden="true" />
                    </div>
                    <div className={styles.factContent}>
                      <span className={styles.factLabel}>{t('detail.services')}</span>
                      <span className={styles.factValue}>
                        {project.services.length} {loc === 'es' ? 'especialidades' : 'disciplines'}
                      </span>
                    </div>
                  </div>
                </div>
              </aside>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          THE NARRATIVE (Challenge & Solution)
          ============================================ */}
      {(project.challenge || project.solution) && (
        <section className={styles.narrativeSection} aria-label={loc === 'es' ? 'Reto y Solución' : 'Challenge and Solution'}>
          <div className="vx-container">
            <div className={styles.narrativeGrid}>
              {project.challenge && (
                <AnimatedReveal>
                  <article className={`${styles.narrativeCard} ${styles.challengeCard}`}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIconWrap}>
                        <ShieldAlert aria-hidden="true" />
                      </div>
                      <h2 className={styles.cardTitle}>{t('detail.challenge')}</h2>
                    </div>
                    <p className={styles.cardBody}>{project.challenge[loc]}</p>
                  </article>
                </AnimatedReveal>
              )}

              {project.solution && (
                <AnimatedReveal delay={2}>
                  <article className={`${styles.narrativeCard} ${styles.solutionCard}`}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIconWrap}>
                        <Sparkles aria-hidden="true" />
                      </div>
                      <h2 className={styles.cardTitle}>{t('detail.solution')}</h2>
                    </div>
                    <p className={styles.cardBody}>{project.solution[loc]}</p>
                  </article>
                </AnimatedReveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          RESULTS & OUTCOMES
          ============================================ */}
      {project.results && (
        <section className={styles.resultsSection} aria-label={t('detail.results')}>
          <div className="vx-container">
            <AnimatedReveal>
              <div className={styles.resultsCard}>
                <div className={styles.resultsHeader}>
                  <div className={styles.resultsIcon}>
                    <Target aria-hidden="true" />
                  </div>
                  <h2>{t('detail.results')}</h2>
                </div>
                <p className={styles.resultsText}>{project.results[loc]}</p>
              </div>
            </AnimatedReveal>
          </div>
        </section>
      )}

      {/* ============================================
          SERVICES INVOLVED
          ============================================ */}
      {project.services.length > 0 && (
        <section className={styles.servicesSection} aria-label={t('detail.services')}>
          <div className="vx-container">
            <AnimatedReveal>
              <header className={styles.servicesSectionHeader}>
                <span>{loc === 'es' ? 'Disciplinas aplicadas' : 'Applied disciplines'}</span>
                <h2>{t('detail.services')}</h2>
              </header>

              <div className={styles.servicesPillsGrid}>
                {project.services.map((serviceId) => {
                  const serviceData = services.find((s) => s.id === serviceId);
                  const Icon = serviceIconMap[serviceId] || Lightbulb;
                  const serviceHref = serviceData
                    ? hrefFor(loc, 'services', `/${serviceData.slug[loc]}`)
                    : hrefFor(loc, 'services');

                  return (
                    <Link key={serviceId} href={serviceHref} className={styles.serviceLinkPill}>
                      <Icon aria-hidden="true" />
                      <span>{tServices(`${serviceId}.title`)}</span>
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>
            </AnimatedReveal>
          </div>
        </section>
      )}

      {/* ============================================
          PREV / NEXT PROJECT NAVIGATION BAR
          ============================================ */}
      {(prev || next) && (
        <nav className={styles.navBarSection} aria-label={loc === 'es' ? 'Navegación entre proyectos' : 'Project navigation'}>
          <div className="vx-container">
            <div className={styles.navBarGrid}>
              {prev ? (
                <Link
                  href={hrefFor(loc, 'projects', `/${prev.slug[loc]}`)}
                  className={styles.navCard}
                >
                  <div className={styles.navIconCircle}>
                    <ChevronLeft aria-hidden="true" />
                  </div>
                  <div className={styles.navMeta}>
                    <span className={styles.navDirection}>{t('detail.prevProject')}</span>
                    <span className={styles.navProjectTitle}>{prev.title[loc]}</span>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {next && (
                <Link
                  href={hrefFor(loc, 'projects', `/${next.slug[loc]}`)}
                  className={`${styles.navCard} ${styles.navCardNext}`}
                >
                  <div className={styles.navIconCircle}>
                    <ChevronRight aria-hidden="true" />
                  </div>
                  <div className={styles.navMeta}>
                    <span className={styles.navDirection}>{t('detail.nextProject')}</span>
                    <span className={styles.navProjectTitle}>{next.title[loc]}</span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </nav>
      )}

      {/* ============================================
          RELATED PROJECTS
          ============================================ */}
      {relatedProjects.length > 0 && (
        <section className={styles.relatedSection} aria-label={t('detail.related')}>
          <div className="vx-container">
            <header className={styles.relatedHeader}>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-vertex-apexTeal block mb-2">
                  {loc === 'es' ? 'Casos de éxito' : 'Case studies'}
                </span>
                <h2>{t('detail.related')}</h2>
              </div>
              <Link
                href={hrefFor(loc, 'projects')}
                className="vx-btn vx-btn-secondary !h-10 !px-5 !text-sm hidden sm:inline-flex"
              >
                {t('detail.backToProjects')}
                <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </Link>
            </header>

            <div className={styles.relatedGrid}>
              {relatedProjects.map((relProj, idx) => (
                <AnimatedReveal key={relProj.id} delay={idx + 1}>
                  <Link
                    href={hrefFor(loc, 'projects', `/${relProj.slug[loc]}`)}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedMedia}>
                      {relProj.coverImage && (
                        <Image
                          src={relProj.coverImage}
                          alt={relProj.title[loc]}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                      )}
                    </div>
                    <div className={styles.relatedContent}>
                      <span className="text-xs font-bold uppercase tracking-wider text-vertex-apexTeal mb-2">
                        {tSectors(relProj.sector)}
                      </span>
                      <h3 className={styles.relatedCardTitle}>{relProj.title[loc]}</h3>
                      <p className={styles.relatedCardDescription}>{relProj.description[loc]}</p>
                      <span className={styles.relatedCardAction}>
                        <span>{t('detail.exploreProject')}</span>
                        <ArrowRight aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          CONVERSION CALL-TO-ACTION
          ============================================ */}
      <section className={styles.closingCta} aria-labelledby="project-cta-title">
        <div
          className={styles.closingWallpaper}
          style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
          aria-hidden="true"
        />
        <div className="vx-container">
          <AnimatedReveal>
            <div className={styles.closingContent}>
              <span className={styles.closingEyebrow}>
                {loc === 'es' ? 'Innovación & Resultados' : 'Innovation & Results'}
              </span>
              <h2 id="project-cta-title" className={styles.closingTitle}>
                {t('detail.similarProject')}
              </h2>
              <p className={styles.closingText}>{t('detail.similarProjectText')}</p>
              <div className={styles.closingActions}>
                <Link href={contactHref} className="vx-btn vx-btn-light">
                  {tCommon('cta.contactUs')}
                  <ArrowRight aria-hidden="true" />
                </Link>
                <Link href={hrefFor(loc, 'projects')} className="vx-btn vx-btn-ghost">
                  {t('detail.backToProjects')}
                </Link>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
