'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { LinkedInIcon } from '@/components/ui/SocialIcons';
import { getVisibleMembers } from '@/content/team';
import { hrefFor, type Locale } from '@/i18n/config';

export function TeamPageContent({ locale }: { locale: string }) {
  const t = useTranslations('team');
  const tCommon = useTranslations('common');
  const members = getVisibleMembers();
  const loc = locale as Locale;

  return (
    <div className="pt-[var(--vx-header-height)]">
      {/* Hero */}
      <section className="vx-section relative overflow-hidden">
        <div className="vx-container">
          <AnimatedReveal>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold text-vertex-apexTeal uppercase tracking-wider mb-2">
                {tCommon('nav.team')}
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

      {/* Team Grid or Empty State */}
      <section className="vx-section vx-bg-wallpaper-2">
        <div className="vx-container">
          {members.length === 0 ? (
            <AnimatedReveal>
              <div className="text-center py-20 px-4 border-2 border-dashed border-gray-200 rounded-3xl max-w-2xl mx-auto">
                <Users className="w-16 h-16 text-vertex-quartzGrey mx-auto mb-4" />
                <h3 className="text-xl font-bold text-vertex-ink mb-2">{t('empty.title')}</h3>
                <p className="text-vertex-facetBlue max-w-md mx-auto">{t('empty.description')}</p>
              </div>
            </AnimatedReveal>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <AnimatedReveal key={member.id} delay={Math.min(index + 1, 3)}>
                  <div className="vx-card h-full flex flex-col items-center text-center p-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-vertex-lightSubtle relative border-2 border-vertex-apexTeal/20">
                      {member.photo && (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-vertex-ink mb-1">{member.name}</h3>
                    <span className="text-sm font-medium text-vertex-apexTeal mb-3">
                      {member.role[locale as 'es' | 'en']}
                    </span>
                    <p className="text-sm text-vertex-facetBlue leading-relaxed mb-4">
                      {member.bio[locale as 'es' | 'en']}
                    </p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-vertex-apexTeal hover:text-vertex-ink transition-colors"
                        aria-label={`LinkedIn — ${member.name}`}
                      >
                        <LinkedInIcon className="w-4 h-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
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
            <h2 className="text-white text-3xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-vertex-facetIce text-lg mb-8">{t('cta.subtitle')}</p>
            <Link href={hrefFor(loc, 'jobs')} className="vx-btn vx-btn-light">
              {tCommon('cta.viewOpportunities')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
