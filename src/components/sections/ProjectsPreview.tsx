'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FolderOpen } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getFeaturedProjects } from '@/content/projects';
import { hrefFor, type Locale } from '@/i18n/config';

interface ProjectsPreviewProps {
  locale: string;
}

export function ProjectsPreview({ locale }: ProjectsPreviewProps) {
  const t = useTranslations('home.projects');
  const tStates = useTranslations('common.states');
  const loc = locale as Locale;
  const featured = getFeaturedProjects().slice(0, 2);

  // If no projects exist, show an elegant empty state
  if (featured.length === 0) {
    return (
      <section className="home-projects vx-section bg-white">
        <div className="vx-container">
          <AnimatedReveal>
            <div className="text-center max-w-2xl mx-auto">
              <hr className="vx-divider mx-auto mb-6" />
              <h2>{t('title')}</h2>
              <p className="mt-4 text-lg">{t('subtitle')}</p>
              <div className="mt-12 p-12 border-2 border-dashed border-vertex-quartzGrey/40 rounded-2xl">
                <FolderOpen className="w-12 h-12 text-vertex-quartzGrey mx-auto mb-4" />
                <p className="text-vertex-facetBlue">{t('empty')}</p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    );
  }

  return (
    <section className="home-projects vx-section bg-white" aria-label="Featured Projects">
      <div className="vx-container">
        <div className="home-projects-header flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow={loc === 'es' ? 'Proyectos seleccionados' : 'Selected projects'}
              title={t('title')}
              subtitle={t('subtitle')}
              align="left"
              className="!mb-0"
            />
          </div>
          <AnimatedReveal>
            <Link
              href={hrefFor(loc, 'projects')}
              className="vx-btn vx-btn-secondary group flex-shrink-0 !px-5 !text-sm"
            >
              {t('viewAll')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedReveal>
        </div>

        <div className="home-projects-grid grid auto-rows-fr grid-cols-1 md:grid-cols-2">
          {featured.map((project, index) => (
            <AnimatedReveal key={project.id} delay={Math.min(index + 1, 3)} className="h-full">
              <Link
                href={hrefFor(loc, 'projects', `/${project.slug[loc]}`)}
                className="home-project-card group flex h-full flex-col overflow-hidden rounded-[24px] border border-vertex-ink/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-vertex-apexTeal/25 hover:shadow-xl hover:shadow-vertex-ink/10"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-vertex-lightSubtle sm:aspect-[2/1]">
                  {project.coverImage && (
                    <Image
                      src={project.coverImage}
                      alt={project.title[loc]}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-vertex-darkBg/35 via-transparent to-transparent" aria-hidden="true" />
                  <span className={`absolute right-4 top-4 vx-badge backdrop-blur-md ${project.status === 'active' ? 'vx-badge-active' : 'vx-badge-completed'}`}>
                    {tStates(project.status)}
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-vertex-darkBg/65 px-3 py-1 text-[0.68rem] font-bold tracking-[0.13em] text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="home-project-content flex min-h-[210px] flex-1 flex-col">
                  <h3 className="home-project-title md:min-h-[3.6rem] text-xl font-bold leading-snug text-vertex-ink transition-colors group-hover:text-vertex-apexTeal">
                    {project.title[loc]}
                  </h3>
                  <p className="home-project-description text-sm leading-relaxed text-vertex-facetBlue md:min-h-[4.8rem]">
                    {project.description[loc]}
                  </p>
                  <span className="home-project-action flex items-center text-xs font-bold text-vertex-apexTeal">
                    {loc === 'es' ? 'Explorar proyecto' : 'Explore project'}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
