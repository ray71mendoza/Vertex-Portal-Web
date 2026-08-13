'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getVisibleMembers } from '@/content/team';

export function TalentPreview({ locale }: { locale: string }) {
  const t = useTranslations('homeNew.talent');
  const tCommon = useTranslations('common');
  const prefix = `/${locale}`;
  const loc = locale as 'es' | 'en';
  const members = getVisibleMembers().slice(0, 4);

  return (
    <section className="vx-section vx-bg-subtle" aria-label="Talent Preview">
      <div className="vx-container">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('description')}
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {members.map((member, idx) => (
            <AnimatedReveal key={member.id} delay={Math.min(idx + 1, 4)}>
              <div className="vx-card h-full flex flex-col items-center text-center p-6 bg-white">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-vertex-apexTeal/20 to-vertex-prismBlue/20 flex items-center justify-center mb-4 border-2 border-vertex-apexTeal/20">
                  <span className="text-xl font-bold text-vertex-apexTeal">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-base font-bold text-vertex-ink mb-1">{member.name}</h3>
                <span className="text-xs text-vertex-apexTeal font-medium mb-1">{member.role[loc]}</span>
                <span className="text-xs text-vertex-facetBlue">{member.country[loc]}</span>
              </div>
            </AnimatedReveal>
          ))}
        </div>
        <AnimatedReveal>
          <div className="text-center">
            <Link href={`${prefix}/${loc === 'es' ? 'quienes-somos' : 'about-us'}`} className="vx-btn vx-btn-secondary">
              {tCommon('cta.meetTeam')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
