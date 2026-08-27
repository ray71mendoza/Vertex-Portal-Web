'use client';

import { useTranslations } from 'next-intl';
import {
  BadgeCheck,
  Clock3,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from '@/components/ui/SocialIcons';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { ContactForm } from '@/components/forms/ContactForm';
import { offices, OFFICIAL_PHONE_NUMBERS, OFFICIAL_SOCIAL_LINKS } from '@/content/locations';
import styles from './ContactPageContent.module.css';

export function ContactPageContent({
  locale,
  initialService,
}: {
  locale: string;
  initialService?: string;
}) {
  const t = useTranslations('contact');
  const loc = locale as 'es' | 'en';
  const primaryOffices = offices.filter((office) => office.id === 'bogota' || office.id === 'cartagena');

  const assurances = [
    {
      icon: ShieldCheck,
      title: loc === 'es' ? 'Confidencialidad garantizada' : 'Guaranteed confidentiality',
      description: loc === 'es' ? 'Tratamos tu información con seguridad.' : 'We handle your information securely.',
    },
    {
      icon: Clock3,
      title: loc === 'es' ? 'Respuesta ágil' : 'Prompt response',
      description: loc === 'es' ? 'Te contactaremos lo antes posible.' : 'We will contact you as soon as possible.',
    },
    {
      icon: BadgeCheck,
      title: loc === 'es' ? 'Expertos a tu servicio' : 'Experts at your service',
      description: loc === 'es' ? 'Soluciones adaptadas a tu organización.' : 'Solutions adapted to your organization.',
    },
  ];

  return (
    <div className={`${styles.page} pt-[var(--vx-header-height)]`}>
      <section className={styles.contactStage} aria-labelledby="contact-title">
        <div
          className={styles.stageWallpaper}
          style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
          aria-hidden="true"
        />
        <div className="vx-container relative z-10">
          <div className={styles.contactGrid}>
            <AnimatedReveal className={styles.contactIntroReveal}>
              <div className={styles.contactIntro}>
                <span className={styles.eyebrow}>{loc === 'es' ? 'Conversemos' : 'Let’s connect'}</span>
                <h1 id="contact-title">
                  {loc === 'es' ? 'Hablemos de tu próximo proyecto' : 'Let’s talk about your next project'}
                </h1>
                <p>
                  {loc === 'es'
                    ? 'Cuéntanos el reto de tu organización. Nuestro equipo te ayudará a convertirlo en una solución estratégica, innovadora y sostenible.'
                    : 'Tell us about your organization’s challenge. Our team will help turn it into a strategic, innovative and sustainable solution.'}
                </p>

                <div className={styles.directContact}>
                  <span>{loc === 'es' ? 'Contacto directo' : 'Direct contact'}</span>
                  <div className={styles.contactItems}>
                    <ContactItem icon={Mail} label={t('info.email')}>
                      <a href="mailto:gerenciavertexsas@gmail.com">gerenciavertexsas@gmail.com</a>
                    </ContactItem>
                    <ContactItem icon={PhoneCall} label={loc === 'es' ? 'Líneas de atención' : 'Phone lines'}>
                      {OFFICIAL_PHONE_NUMBERS.map((phone) => (
                        <a key={phone.link} href={phone.link}>{phone.display}</a>
                      ))}
                    </ContactItem>
                    <ContactItem icon={MapPin} label={t('info.offices')}>
                      {primaryOffices.map((office) => (
                        <span key={office.id}>{office.city}, {office.country[loc]}</span>
                      ))}
                    </ContactItem>
                  </div>

                  <div className="mt-8 border-t border-vertex-prismBlue/20 pt-6">
                    <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-vertex-prismBlue">
                      {loc === 'es' ? 'Canales oficiales' : 'Official channels'}
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={OFFICIAL_SOCIAL_LINKS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Vertex on Instagram"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-vertex-prismBlue/30 bg-white/5 text-vertex-facetIce transition-all hover:border-vertex-prismBlue hover:bg-vertex-prismBlue/20 hover:text-vertex-prismBlue focus-visible:outline-2 focus-visible:outline-vertex-prismBlue"
                      >
                        <InstagramIcon className="h-4 w-4" />
                      </a>
                      <a
                        href={OFFICIAL_SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Vertex on LinkedIn"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-vertex-prismBlue/30 bg-white/5 text-vertex-facetIce transition-all hover:border-vertex-prismBlue hover:bg-vertex-prismBlue/20 hover:text-vertex-prismBlue focus-visible:outline-2 focus-visible:outline-vertex-prismBlue"
                      >
                        <LinkedInIcon className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={2} className={styles.formReveal}>
              <ContactForm locale={locale} initialService={initialService} />
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className={styles.assuranceStrip} aria-label={loc === 'es' ? 'Compromisos de atención' : 'Service commitments'}>
        <div className="vx-container">
          <div className={styles.assuranceGrid}>
            {assurances.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={styles.assuranceItem}>
                  <div><Icon aria-hidden="true" /></div>
                  <p><strong>{item.title}</strong><span>{item.description}</span></p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contactItemIcon}><Icon aria-hidden="true" /></div>
      <div>
        <span>{label}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}
