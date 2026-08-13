'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, FolderOpen } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { getFeaturedProjects } from '@/content/projects';

interface ProjectsPreviewProps {
  locale: string;
}

export function ProjectsPreview({ locale }: ProjectsPreviewProps) {
  const t = useTranslations('home.projects');
  const tStates = useTranslations('common.states');
  const prefix = `/${locale}`;
  const featured = getFeaturedProjects();

  // If no projects exist, show an elegant empty state
  if (featured.length === 0) {
    return (
      <section className="vx-section">
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
    <section className="vx-section">
      <div className="vx-container">
        <AnimatedReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <hr className="vx-divider mb-6" />
              <h2>{t('title')}</h2>
              <p className="mt-3 text-lg max-w-xl">{t('subtitle')}</p>
            </div>
            <Link
              href={`${prefix}/${locale === 'es' ? 'proyectos' : 'projects'}`}
              className="vx-btn vx-btn-secondary !py-2.5 !px-5 !text-sm !min-h-0 flex-shrink-0"
            >
              {t('viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <AnimatedReveal key={project.id} delay={Math.min(index + 1, 3)}>
              <Link
                href={`${prefix}/${locale === 'es' ? 'proyectos' : 'projects'}/${project.slug[locale as 'es' | 'en']}`}
                className="vx-card group overflow-hidden !p-0"
              >
                <div className="aspect-[16/10] bg-vertex-lightSubtle relative overflow-hidden">
                  {project.coverImage && (
                    <img
                      src={project.coverImage}
                      alt={project.title[locale as 'es' | 'en']}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <span className={`absolute top-3 right-3 vx-badge ${project.status === 'active' ? 'vx-badge-active' : 'vx-badge-completed'}`}>
                    {tStates(project.status)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-vertex-ink group-hover:text-vertex-apexTeal transition-colors">
                    {project.title[locale as 'es' | 'en']}
                  </h3>
                  <p className="mt-2 text-sm text-vertex-facetBlue line-clamp-2">
                    {project.description[locale as 'es' | 'en']}
                  </p>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
