'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FolderOpen, MapPin } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { getVisibleProjects } from '@/content/projects';
import { hrefFor, type Locale } from '@/i18n/config';
import styles from './ProjectsIndexContent.module.css';

export function ProjectsIndexContent({ locale }: { locale: string }) {
  const t = useTranslations('projects');
  const tCommon = useTranslations('common');
  const tStates = useTranslations('common.states');
  const tServices = useTranslations('services.items');
  const loc = locale as Locale;

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const visibleProjects = getVisibleProjects();

  const filteredProjects = visibleProjects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'active' || activeFilter === 'completed') {
      return project.status === activeFilter;
    }
    return project.category === activeFilter || project.sector === activeFilter;
  });

  const filters = [
    { key: 'all', label: t('filters.all') },
    { key: 'active', label: tStates('active') },
    { key: 'completed', label: tStates('completed') },
  ];

  return (
    <div className="pt-[var(--vx-header-height)]">
      {/* Hero */}
      <section className={`vx-section vx-bg-wallpaper-2 relative overflow-hidden ${styles.hero}`}>
        <div className="vx-container">
          <AnimatedReveal>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold text-vertex-apexTeal uppercase tracking-wider mb-2">
                {tCommon('nav.projects')}
              </div>
              <h1 className="text-vertex-ink text-4xl md:text-5xl font-bold mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-vertex-facetTeal text-lg md:text-xl leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="vx-section vx-bg-wallpaper-1">
        <div className="vx-container">
          {/* Filters */}
          {visibleProjects.length > 0 && (
            <AnimatedReveal>
              <div className={styles.filterRow}>
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`${styles.filterButton} ${activeFilter === filter.key ? styles.filterButtonActive : ''}`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </AnimatedReveal>
          )}

          {/* Grid or Empty State */}
          {filteredProjects.length === 0 ? (
            <AnimatedReveal>
              <div className="text-center py-20 px-4 border-2 border-dashed border-gray-200 rounded-3xl max-w-2xl mx-auto">
                <FolderOpen className="w-16 h-16 text-vertex-quartzGrey mx-auto mb-4" />
                <h3 className="text-xl font-bold text-vertex-ink mb-2">{t('empty.title')}</h3>
                <p className="text-vertex-facetBlue max-w-md mx-auto">{t('empty.description')}</p>
              </div>
            </AnimatedReveal>
          ) : (
            <div className={styles.grid}>
              {filteredProjects.map((project, index) => (
                <AnimatedReveal key={project.id} delay={Math.min(index + 1, 3)}>
                  <Link
                    href={hrefFor(loc, 'projects', `/${project.slug[loc]}`)}
                    className={styles.card}
                  >
                    <div className={styles.cardMedia}>
                      {project.coverImage && (
                        <Image
                          src={project.coverImage}
                          alt={project.title[loc]}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className={styles.cardImage}
                        />
                      )}
                      <div className={styles.cardScrim} aria-hidden="true" />
                      <span
                        className={`${styles.cardBadge} ${project.status === 'active' ? styles.cardBadgeActive : styles.cardBadgeCompleted}`}
                      >
                        {tStates(project.status)}
                      </span>
                      <span className={styles.cardCategory}>
                        {tServices(`${project.category}.title`)}
                      </span>
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{project.title[loc]}</h3>
                      {project.location && (
                        <div className={styles.cardLocation}>
                          <MapPin aria-hidden="true" />
                          {project.location[loc]}
                        </div>
                      )}
                      <p className={styles.cardDescription}>{project.description[loc]}</p>
                      <div className={styles.cardFooter}>
                        {loc === 'es' ? 'Ver caso de estudio' : 'View case study'}
                        <ArrowRight aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                </AnimatedReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="vx-section vx-bg-teal text-white text-center">
        <div className="vx-container max-w-3xl">
          <AnimatedReveal>
            <h2 className="text-white text-3xl font-bold mb-4">{t('detail.similarProject')}</h2>
            <p className="text-vertex-facetIce text-lg mb-8">{t('detail.similarProjectText')}</p>
            <Link href={hrefFor(loc, 'contact')} className="vx-btn vx-btn-light">
              {tCommon('cta.contactUs')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
