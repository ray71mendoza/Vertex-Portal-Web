'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MapPin } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { getProjectBySlug, Project } from '@/content/projects';

export function ProjectDetailContent({ slug, locale }: { slug: string; locale: string }) {
  const project: Project | undefined = getProjectBySlug(slug, locale as 'es' | 'en');

  if (!project) {
    notFound();
  }

  const t = useTranslations('projects');
  const tCommon = useTranslations('common');
  const tStates = useTranslations('common.states');
  const prefix = `/${locale}`;

  return (
    <div className="pt-[var(--vx-header-height)]">
      {/* Hero */}
      <section className="vx-section vx-bg-subtle relative">
        <div className="vx-container">
          <AnimatedReveal>
            <div className="flex items-center gap-2 text-sm text-vertex-facetBlue mb-6">
              <Link href={prefix} className="hover:text-vertex-apexTeal">{tCommon('breadcrumb.home')}</Link>
              <span>/</span>
              <Link href={`${prefix}/${locale === 'es' ? 'proyectos' : 'projects'}`} className="hover:text-vertex-apexTeal">
                {tCommon('nav.projects')}
              </Link>
              <span>/</span>
              <span className="text-vertex-ink font-semibold">{project.title[locale as 'es' | 'en']}</span>
            </div>

            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`vx-badge ${project.status === 'active' ? 'vx-badge-active' : 'vx-badge-completed'}`}>
                  {tStates(project.status)}
                </span>
                {project.location && (
                  <span className="flex items-center gap-1 text-xs text-vertex-facetBlue font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location[locale as 'es' | 'en']}
                  </span>
                )}
              </div>

              <h1 className="text-vertex-ink text-4xl md:text-5xl font-bold mb-6">
                {project.title[locale as 'es' | 'en']}
              </h1>
              <p className="text-vertex-facetTeal text-lg md:text-xl leading-relaxed">
                {project.description[locale as 'es' | 'en']}
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Details */}
      <section className="vx-section">
        <div className="vx-container max-w-4xl space-y-12">
          {project.challenge && (
            <AnimatedReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('detail.challenge')}</h2>
                <p className="text-vertex-facetBlue text-base leading-relaxed">{project.challenge[locale as 'es' | 'en']}</p>
              </div>
            </AnimatedReveal>
          )}

          {project.solution && (
            <AnimatedReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('detail.solution')}</h2>
                <p className="text-vertex-facetBlue text-base leading-relaxed">{project.solution[locale as 'es' | 'en']}</p>
              </div>
            </AnimatedReveal>
          )}

          {project.results && (
            <AnimatedReveal>
              <div className="p-8 rounded-2xl bg-vertex-lightSubtle border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">{t('detail.results')}</h2>
                <p className="text-vertex-ink text-base leading-relaxed">{project.results[locale as 'es' | 'en']}</p>
              </div>
            </AnimatedReveal>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="vx-section vx-bg-teal text-white text-center">
        <div className="vx-container max-w-3xl">
          <AnimatedReveal>
            <h2 className="text-white text-3xl font-bold mb-4">{t('detail.similarProject')}</h2>
            <Link href={`${prefix}/${locale === 'es' ? 'contacto' : 'contact'}`} className="vx-btn vx-btn-light mt-4">
              {tCommon('cta.contactUs')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
