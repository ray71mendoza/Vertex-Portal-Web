'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Globe, MapPin, Mail, Phone, Clock, ExternalLink,
  GraduationCap, Settings, Eye, Users, Handshake, CheckCircle2,
} from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { companyStatistics, whyVertexPillars, testimonials } from '@/content/company';
import { offices, coverageCountries, presenceTypeLabels } from '@/content/locations';
import { getVisibleMembers, getUniqueAreas } from '@/content/team';

const pillarIconMap: Record<string, React.ElementType> = {
  GraduationCap, Settings, Eye, Users, Handshake, MapPin,
};

const statIconMap: Record<string, React.ElementType> = {
  Globe, Users, MapPin,
};

export function WhoWeArePageContent({ locale }: { locale: string }) {
  const t = useTranslations('whoWeAre');
  const tCommon = useTranslations('common');
  const prefix = `/${locale}`;
  const loc = locale as 'es' | 'en';
  const members = getVisibleMembers();
  const areas = getUniqueAreas(loc);

  return (
    <div className="pt-24 pb-16">
      {/* ═════ HERO ═════ */}
      <section className="vx-section vx-bg-dark relative overflow-hidden" aria-label="Hero">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vertex-darkBg via-vertex-darkBg/95 to-vertex-darkBg/80 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 vx-container">
          <AnimatedReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-8 backdrop-blur-md">
                <span className="text-vertex-prismBlue text-xs font-bold uppercase tracking-wider">
                  {tCommon('nav.whoWeAre')}
                </span>
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-vertex-facetIce text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href={`${prefix}/${loc === 'es' ? 'nuestra-oferta' : 'our-services'}`} className="vx-btn vx-btn-light">
                  {tCommon('cta.exploreOffer')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={`${prefix}/${loc === 'es' ? 'contacto' : 'contact'}`} className="vx-btn vx-btn-ghost">
                  {tCommon('cta.letsTalk')}
                </Link>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ═════ SOBRE VERTEX ═════ */}
      <section className="vx-section" aria-label="About Vertex">
        <div className="vx-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedReveal>
              <div>
                <SectionHeading
                  eyebrow={t('about.eyebrow')}
                  title={t('about.title')}
                  align="left"
                />
                <p className="text-lg text-vertex-facetTeal mb-4 leading-relaxed">{t('about.p1')}</p>
                <p className="text-vertex-facetTeal leading-relaxed mb-4">{t('about.p2')}</p>
                <p className="text-vertex-facetBlue leading-relaxed">{t('about.p3')}</p>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={2}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-vertex-darkBg flex items-center justify-center p-8">
                <Image
                  src="/images/vertex-logo.png"
                  alt="Vertex Logo"
                  width={240}
                  height={72}
                  className="h-auto w-auto brightness-0 invert"
                />
              </div>
            </AnimatedReveal>
          </div>

          {/* Statistics Strip */}
          <AnimatedReveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16 pt-12 border-t border-gray-100">
              {companyStatistics.map((stat) => (
                <div key={stat.id} className="text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-vertex-apexTeal mb-1">{stat.value}</span>
                  <span className="text-sm text-vertex-facetBlue font-medium">{stat.label[loc]}</span>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ═════ POR QUÉ VERTEX ═════ */}
      <section className="vx-section vx-bg-subtle" aria-label="Why Vertex">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('whyVertex.eyebrow')}
            title={t('whyVertex.title')}
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyVertexPillars.map((pillar, idx) => {
              const IconComp = pillarIconMap[pillar.icon] || CheckCircle2;
              return (
                <AnimatedReveal key={pillar.id} delay={Math.min(idx + 1, 3)}>
                  <div className="vx-card h-full">
                    <div className="vx-icon-wrap mb-4">
                      <IconComp className="w-5 h-5 text-vertex-apexTeal" />
                    </div>
                    <h3 className="text-lg font-semibold text-vertex-ink mb-2">{pillar.title[loc]}</h3>
                    <p className="text-sm text-vertex-facetBlue leading-relaxed">{pillar.description[loc]}</p>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════ TESTIMONIOS ═════ */}
      <section className="vx-section" aria-label="Testimonials">
        <div className="vx-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t_item, idx) => (
              <AnimatedReveal key={t_item.id} delay={Math.min(idx + 1, 2)}>
                <div className="vx-card h-full flex flex-col justify-between">
                  <blockquote className="text-vertex-ink text-base italic leading-relaxed mb-6 relative">
                    <span className="absolute -top-3 -left-1 text-4xl text-vertex-apexTeal/20 font-serif select-none" aria-hidden="true">&ldquo;</span>
                    <p className="pl-4">{t_item.quote[loc]}</p>
                  </blockquote>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-vertex-apexTeal/10 flex items-center justify-center text-vertex-apexTeal font-bold text-sm">
                      {t_item.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-vertex-ink block">{t_item.name}</span>
                      <span className="text-xs text-vertex-facetBlue">{t_item.role[loc]} · {t_item.company}</span>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════ ALCANCE REGIONAL ═════ */}
      <section className="vx-section vx-bg-dark text-white" aria-label="Regional Reach">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('reach.eyebrow')}
            title={t('reach.title')}
            subtitle={t('reach.description')}
            align="center"
            theme="dark"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {coverageCountries.map((country, idx) => (
              <AnimatedReveal key={country.id} delay={Math.min(idx + 1, 4)}>
                <div className="vx-card vx-card-dark text-center p-5">
                  <div className="w-10 h-10 rounded-full bg-vertex-prismBlue/15 flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-5 h-5 text-vertex-prismBlue" />
                  </div>
                  <span className="text-white font-semibold text-sm block mb-1">{country.name[loc]}</span>
                  <span className="text-vertex-facetIce/70 text-xs">{presenceTypeLabels[country.type][loc]}</span>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal>
            <div className="text-center mt-12">
              <Link href={`${prefix}/${loc === 'es' ? 'contacto' : 'contact'}`} className="vx-btn vx-btn-light">
                {t('reach.contactTeam')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ═════ UBICACIONES ═════ */}
      <section className="vx-section" aria-label="Locations">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('locations.eyebrow')}
            title={t('locations.title')}
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {offices.map((office, idx) => (
              <AnimatedReveal key={office.id} delay={Math.min(idx + 1, 3)}>
                <div className="vx-card h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="vx-icon-wrap !mb-0 bg-vertex-apexTeal text-white">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-vertex-ink">{office.city}</h3>
                      <span className="text-xs text-vertex-facetBlue">{office.country[loc]}</span>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2 text-vertex-facetTeal">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-vertex-quartzGrey" />
                      <span>{office.address[loc]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-vertex-facetTeal">
                      <Mail className="w-4 h-4 flex-shrink-0 text-vertex-quartzGrey" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-vertex-facetTeal">
                      <Phone className="w-4 h-4 flex-shrink-0 text-vertex-quartzGrey" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-vertex-facetTeal">
                      <Clock className="w-4 h-4 flex-shrink-0 text-vertex-quartzGrey" />
                      <span>{office.schedule[loc]}</span>
                    </div>
                  </div>
                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-vertex-apexTeal hover:text-vertex-ink transition-colors mt-4"
                  >
                    {t('locations.viewMap')}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════ NUESTRO TALENTO ═════ */}
      <section className="vx-section vx-bg-subtle" aria-label="Talent">
        <div className="vx-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedReveal>
              <div>
                <SectionHeading
                  eyebrow={t('talent.eyebrow')}
                  title={t('talent.title')}
                  align="left"
                />
                <p className="text-lg text-vertex-facetTeal leading-relaxed mb-8">{t('talent.description')}</p>
                <div className="grid grid-cols-2 gap-3">
                  {(['diversity', 'collaboration', 'learning', 'innovation', 'growth', 'results'] as const).map((key) => (
                    <div key={key} className="flex items-center gap-2 text-sm text-vertex-ink font-medium">
                      <CheckCircle2 className="w-4 h-4 text-vertex-apexTeal flex-shrink-0" />
                      <span>{t(`talent.values.${key}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-vertex-darkBg flex items-center justify-center border border-gray-100 shadow-lg">
                <Image
                  src="/images/vertex-symbol.png"
                  alt="Vertex Team"
                  width={200}
                  height={200}
                  className="opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-vertex-apexTeal/10 to-vertex-prismBlue/10" />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* ═════ EQUIPO ═════ */}
      <section className="vx-section" aria-label="Team">
        <div className="vx-container">
          <SectionHeading
            eyebrow={t('team.eyebrow')}
            title={t('team.title')}
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <AnimatedReveal key={member.id} delay={Math.min(index + 1, 4)}>
                <div className="vx-card h-full flex flex-col items-center text-center p-6 group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-vertex-apexTeal/20 to-vertex-prismBlue/20 flex items-center justify-center mb-4 border-2 border-vertex-apexTeal/20 group-hover:border-vertex-apexTeal/50 transition-colors">
                    <span className="text-2xl font-bold text-vertex-apexTeal">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-vertex-ink mb-1">{member.name}</h3>
                  <span className="text-xs font-medium text-vertex-apexTeal mb-1">{member.role[loc]}</span>
                  <span className="text-xs text-vertex-facetBlue mb-3">{member.country[loc]}</span>
                  <p className="text-xs text-vertex-facetBlue leading-relaxed mb-3 line-clamp-3">{member.bio[loc]}</p>
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {member.expertise[loc].map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] px-2 py-0.5 bg-vertex-apexTeal/10 text-vertex-apexTeal rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-vertex-facetBlue hover:text-vertex-apexTeal transition-colors mt-auto"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {t('team.viewLinkedIn')}
                    </a>
                  )}
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════ CTA FINAL ═════ */}
      <section className="vx-section vx-bg-teal text-white text-center relative overflow-hidden" aria-label="CTA">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="relative z-10 vx-container max-w-3xl mx-auto">
          <AnimatedReveal>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              {loc === 'es' ? '¿Listo para transformar tu organización?' : 'Ready to transform your organization?'}
            </h2>
            <p className="text-vertex-facetIce text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              {loc === 'es' ? 'Cuéntanos sobre tu proyecto y diseñemos juntos la solución.' : 'Tell us about your project and let\'s design the solution together.'}
            </p>
            <Link href={`${prefix}/${loc === 'es' ? 'contacto' : 'contact'}`} className="vx-btn vx-btn-light !px-8 !py-4 !text-base">
              {tCommon('cta.letsTalk')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
