'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  ArrowRight, Code2, BarChart3, Lightbulb, Palette, FolderKanban,
  TrendingUp, Megaphone, Heart, Send, FileSearch, MessageCircle,
  ClipboardCheck, CheckCircle2, Rocket, Zap, BookOpen, Users, Globe, Clock, GraduationCap
} from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { talentAreas, recruitmentSteps, workAttributes, workEnvironmentValues, employeeBenefits } from '@/content/careers';
import { jobOpenings, getJobCountByArea } from '@/content/jobs';

const areaIconMap: Record<string, React.ElementType> = {
  Code2, BarChart3, Lightbulb, Palette, FolderKanban, TrendingUp, Megaphone, Heart
};

const stepIconMap: Record<string, React.ElementType> = {
  Send, FileSearch, MessageCircle, ClipboardCheck, CheckCircle2, Rocket
};

const attrIconMap: Record<string, React.ElementType> = {
  Zap, BookOpen, Users, TrendingUp, Lightbulb, Globe
};

const benefitIconMap: Record<string, React.ElementType> = {
  Clock, GraduationCap, Rocket, Heart
};

export function CareersPageContent({ locale }: { locale: string }) {
  const t = useTranslations('careers');
  const tCommon = useTranslations('common');
  const prefix = `/${locale}`;
  const loc = locale as 'es' | 'en';

  return (
    <div className="pt-24 pb-16">
      {/* ═════ HERO ═════ */}
      <section className="vx-section vx-bg-dark text-white relative overflow-hidden" aria-label="Hero">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 vx-container">
          <AnimatedReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-8 backdrop-blur-md">
                <span className="text-vertex-prismBlue text-xs font-bold uppercase tracking-wider">
                  {tCommon('nav.careers')}
                </span>
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-vertex-facetIce text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href={`${prefix}/${loc === 'es' ? 'empleos' : 'jobs'}`} className="vx-btn vx-btn-light">
                  {tCommon('cta.viewOpportunities')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ═════ POR QUÉ TRABAJAR EN VERTEX ═════ */}
      <section className="vx-section" aria-label="Why work at Vertex">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('whyWork.eyebrow')}
            title={t('whyWork.title')}
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workAttributes.map((attr, idx) => {
              const IconComp = attrIconMap[attr.icon] || Lightbulb;
              return (
                <AnimatedReveal key={attr.id} delay={Math.min(idx + 1, 3)}>
                  <div className="vx-card h-full">
                    <div className="vx-icon-wrap mb-4">
                      <IconComp className="w-5 h-5 text-vertex-apexTeal" />
                    </div>
                    <h3 className="text-lg font-bold text-vertex-ink mb-2">{attr.title[loc]}</h3>
                    <p className="text-sm text-vertex-facetBlue leading-relaxed">{attr.description[loc]}</p>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════ AMBIENTE DE TRABAJO ═════ */}
      <section className="vx-section vx-bg-subtle" aria-label="Work Environment">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('environment.eyebrow')}
            title={t('environment.title')}
            subtitle={t('environment.description')}
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workEnvironmentValues.map((val, idx) => (
              <AnimatedReveal key={val.id} delay={Math.min(idx + 1, 3)}>
                <div className="vx-card bg-white h-full p-6">
                  <h3 className="text-base font-bold text-vertex-ink mb-2">{val.title[loc]}</h3>
                  <p className="text-sm text-vertex-facetBlue leading-relaxed">{val.description[loc]}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════ ÁREAS DE INTERÉS ═════ */}
      <section className="vx-section" aria-label="Talent Areas">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('areas.eyebrow')}
            title={t('areas.title')}
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {talentAreas.map((area, idx) => {
              const IconComp = areaIconMap[area.icon] || Lightbulb;
              const count = getJobCountByArea(area.id);
              return (
                <AnimatedReveal key={area.id} delay={Math.min(idx + 1, 4)}>
                  <div className="vx-card h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="vx-icon-wrap !mb-0">
                          <IconComp className="w-5 h-5 text-vertex-apexTeal" />
                        </div>
                        {count > 0 && (
                          <span className="text-xs px-2.5 py-1 bg-vertex-apexTeal/10 text-vertex-apexTeal rounded-full font-semibold">
                            {count} {t('areas.vacancies')}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-vertex-ink mb-2">{area.title[loc]}</h3>
                      <p className="text-xs text-vertex-facetBlue leading-relaxed mb-4">{area.description[loc]}</p>
                    </div>
                    <Link
                      href={`${prefix}/${loc === 'es' ? 'empleos' : 'jobs'}?area=${area.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-vertex-apexTeal hover:text-vertex-ink transition-colors mt-auto pt-2"
                    >
                      {t('areas.viewJobs')}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════ PROCESO DE RECLUTAMIENTO ═════ */}
      <section className="vx-section vx-bg-subtle" aria-label="Recruitment Process">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('recruitment.eyebrow')}
            title={t('recruitment.title')}
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recruitmentSteps.map((step, idx) => {
              const IconComp = stepIconMap[step.icon] || CheckCircle2;
              return (
                <AnimatedReveal key={step.id} delay={Math.min(idx + 1, 3)}>
                  <div className="vx-card bg-white h-full p-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="vx-icon-wrap !mb-0 bg-vertex-apexTeal text-white">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-3xl font-bold text-vertex-apexTeal/20 font-mono">{step.number}</span>
                    </div>
                    <h3 className="text-base font-bold text-vertex-ink mb-2">{step.title[loc]}</h3>
                    <p className="text-xs text-vertex-facetBlue leading-relaxed">{step.description[loc]}</p>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
          <p className="text-center text-xs text-vertex-facetBlue mt-6 italic">{t('recruitment.disclaimer')}</p>
        </div>
      </section>

      {/* ═════ BANCO DE TALENTOS / CTA ═════ */}
      <section className="vx-section vx-bg-teal text-white text-center relative overflow-hidden" aria-label="Talent Pool">
        <div className="relative z-10 vx-container max-w-3xl mx-auto">
          <AnimatedReveal>
            <h2 className="text-white text-3xl font-bold mb-4">{t('talentPool.title')}</h2>
            <p className="text-vertex-facetIce text-lg mb-8">{t('talentPool.description')}</p>
            <Link href={`${prefix}/${loc === 'es' ? 'empleos' : 'jobs'}`} className="vx-btn vx-btn-light">
              {tCommon('cta.viewOpportunities')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
