'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { FolderOpen } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { getVisibleProjects } from '@/content/projects';
import { hrefFor, type Locale } from '@/i18n/config';

export function ProjectsIndexContent({ locale }: { locale: string }) {
  const t = useTranslations('projects');
  const tCommon = useTranslations('common');
  const tStates = useTranslations('common.states');
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

  return (
    <div className="pt-[var(--vx-header-height)]">
      {/* Hero */}
      <section className="vx-section vx-bg-subtle relative overflow-hidden">
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
      <section className="vx-section">
        <div className="vx-container">
          {/* Filters */}
          {visibleProjects.length > 0 && (
            <AnimatedReveal>
              <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-gray-100">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeFilter === 'all'
                      ? 'bg-vertex-apexTeal text-white'
                      : 'bg-vertex-lightSubtle text-vertex-facetTeal hover:bg-gray-200'
                  }`}
                >
                  {t('filters.all')}
                </button>
                <button
                  onClick={() => setActiveFilter('active')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeFilter === 'active'
                      ? 'bg-vertex-apexTeal text-white'
                      : 'bg-vertex-lightSubtle text-vertex-facetTeal hover:bg-gray-200'
                  }`}
                >
                  {tStates('active')}
                </button>
                <button
                  onClick={() => setActiveFilter('completed')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeFilter === 'completed'
                      ? 'bg-vertex-apexTeal text-white'
                      : 'bg-vertex-lightSubtle text-vertex-facetTeal hover:bg-gray-200'
                  }`}
                >
                  {tStates('completed')}
                </button>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimatedReveal key={project.id} delay={Math.min(index + 1, 3)}>
                  <Link
                    href={hrefFor(loc, 'projects', `/${project.slug[loc]}`)}
                    className="vx-card group overflow-hidden !p-0 block"
                  >
                    <div className="aspect-[16/10] bg-vertex-lightSubtle relative overflow-hidden">
                      {project.coverImage && (
                        <Image
                          src={project.coverImage}
                          alt={project.title[loc]}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <span className={`absolute top-3 right-3 vx-badge ${project.status === 'active' ? 'vx-badge-active' : 'vx-badge-completed'}`}>
                        {tStates(project.status)}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-vertex-ink group-hover:text-vertex-apexTeal transition-colors mb-2">
                        {project.title[loc]}
                      </h3>
                      <p className="text-sm text-vertex-facetBlue line-clamp-2">
                        {project.description[loc]}
                      </p>
                    </div>
                  </Link>
                </AnimatedReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
