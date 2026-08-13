'use client';

import { useTranslations } from 'next-intl';
import { Mail, MapPin, PhoneCall } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { ContactForm } from '@/components/forms/ContactForm';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ContactPageContent({
  locale,
  initialService,
}: {
  locale: string;
  initialService?: string;
}) {
  const t = useTranslations('contact');
  const tCommon = useTranslations('common');

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="vx-section vx-bg-subtle relative overflow-hidden">
        <div className="vx-container">
          <SectionHeading
            eyebrow={tCommon('nav.contact')}
            title={t('hero.title')}
            subtitle={t('hero.subtitle')}
            align="left"
          />
        </div>
      </section>

      {/* 2-Column Desktop Layout: Left Info, Right Form */}
      <section className="vx-section bg-white">
        <div className="vx-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Official Contact Info & Locations */}
            <div className="lg:col-span-5 space-y-8">
              <AnimatedReveal>
                <div className="p-8 md:p-10 rounded-2xl bg-vertex-darkBg text-white relative overflow-hidden shadow-xl border border-white/10">
                  <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
                    style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 space-y-8">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-vertex-prismBlue block mb-2">
                        {t('info.title')}
                      </span>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {locale === 'es' ? 'Hablemos de tu próximo proyecto' : 'Let\'s talk about your next project'}
                      </h3>
                    </div>

                    <div className="space-y-6 pt-2">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-vertex-prismBlue flex-shrink-0 border border-white/15">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-vertex-facetIce/70 uppercase tracking-wider block mb-1">
                            {t('info.email')}
                          </span>
                          <a
                            href="mailto:gerenciavertexsas@gmail.com"
                            className="text-white font-semibold text-base hover:text-vertex-prismBlue transition-colors block"
                          >
                            gerenciavertexsas@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-vertex-prismBlue flex-shrink-0 border border-white/15">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-vertex-facetIce/70 uppercase tracking-wider block mb-1">
                            {t('info.offices')}
                          </span>
                          <p className="text-white font-semibold text-base">{tCommon('footer.bogota')}</p>
                          <p className="text-white font-semibold text-base">{tCommon('footer.cartagena')}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-vertex-prismBlue flex-shrink-0 border border-white/15">
                          <PhoneCall className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-vertex-facetIce/70 uppercase tracking-wider block mb-1">
                            {locale === 'es' ? 'Atención Telefónica' : 'Phone Support'}
                          </span>
                          <p className="text-white font-semibold text-base">+57 (601) 000-0000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <AnimatedReveal delay={2}>
                <ContactForm locale={locale} initialService={initialService} />
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
