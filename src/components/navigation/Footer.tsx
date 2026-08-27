import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Mail, MapPin, Phone } from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from '@/components/ui/SocialIcons';
import type { Locale } from '@/i18n/config';
import { hrefFor } from '@/i18n/config';
import { services } from '@/content/services';
import { OFFICIAL_PHONE_NUMBERS, OFFICIAL_SOCIAL_LINKS } from '@/content/locations';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations('common');
  const tServices = useTranslations('services.items');

  const companyLinks = [
    { href: hrefFor(locale, 'whoWeAre'), label: t('nav.whoWeAre') },
    { href: hrefFor(locale, 'ourOffer'), label: t('nav.ourOffer') },
    { href: hrefFor(locale, 'projects'), label: t('nav.projects') },
    { href: hrefFor(locale, 'contact'), label: t('nav.contact') },
  ];

  const careerLinks = [
    { href: hrefFor(locale, 'careers'), label: t('nav.careers') },
    { href: hrefFor(locale, 'jobs'), label: t('nav.jobs') },
  ];

  return (
    <footer className="site-footer vx-bg-dark" role="contentinfo">
      <div className="vx-container">
        <div className="site-footer-grid grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1.25fr_1fr_0.8fr_0.8fr_1.35fr] xl:gap-8">
          <div className="site-footer-group lg:col-span-2 xl:col-span-1">
            <Link href={hrefFor(locale, 'home')} aria-label="Vertex">
              <Image
                src="/images/vertex-logo.png"
                alt="Vertex"
                width={130}
                height={40}
                className="h-[32px] w-auto brightness-0 invert"
              />
            </Link>
            <p className="site-footer-description max-w-[280px] text-sm leading-relaxed text-vertex-facetIce/80">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={OFFICIAL_SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vertex on Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-vertex-facetIce/20 bg-white/5 text-vertex-facetIce/80 transition-all hover:border-vertex-prismBlue/60 hover:bg-vertex-prismBlue/15 hover:text-vertex-prismBlue focus-visible:outline-2 focus-visible:outline-vertex-prismBlue"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={OFFICIAL_SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vertex on LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-vertex-facetIce/20 bg-white/5 text-vertex-facetIce/80 transition-all hover:border-vertex-prismBlue/60 hover:bg-vertex-prismBlue/15 hover:text-vertex-prismBlue focus-visible:outline-2 focus-visible:outline-vertex-prismBlue"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterList title={t('footer.services')}>
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link
                  href={hrefFor(locale, 'services', `/${service.slug[locale]}`)}
                  className="footer-link"
                >
                  {tServices(`${service.id}.title`)}
                </Link>
              </li>
            ))}
          </FooterList>

          <FooterList title={t('footer.company')}>
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterList>

          <FooterList title={t('footer.careers')}>
            {careerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterList>

          <div className="site-footer-group lg:col-span-2 xl:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-vertex-polarWhite">
              {t('footer.contactInfo')}
            </h3>
            <ul className="site-footer-contact space-y-3.5">
              <li>
                <a
                  href="mailto:gerenciavertexsas@gmail.com"
                  className="flex items-center gap-2 text-xs text-vertex-facetIce/80 transition-colors hover:text-vertex-prismBlue"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-vertex-prismBlue" />
                  gerenciavertexsas@gmail.com
                </a>
              </li>
              <li className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-vertex-facetIce/80">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-vertex-prismBlue" />
                  <span className="font-semibold text-vertex-polarWhite">{t('footer.phones')}</span>
                </div>
                <div className="pl-5.5 space-y-1">
                  {OFFICIAL_PHONE_NUMBERS.map((phone) => (
                    <a
                      key={phone.link}
                      href={phone.link}
                      className="block text-xs text-vertex-facetIce/75 transition-colors hover:text-vertex-prismBlue"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-2 text-xs text-vertex-facetIce/80">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-vertex-prismBlue" />
                <div className="space-y-0.5">
                  <p>{t('footer.bogota')}</p>
                  <p>{t('footer.cartagena')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer-bottom flex flex-col items-start justify-between gap-4 border-t border-vertex-facetIce/10 py-6 text-left sm:flex-row">
          <p className="text-xs text-vertex-facetIce/50">
            © {new Date().getFullYear()} Vertex. {t('footer.rights')}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href={hrefFor(locale, 'privacy')} className="footer-link !text-vertex-facetIce/50">
              {t('nav.privacy')}
            </Link>
            <Link href={hrefFor(locale, 'terms')} className="footer-link !text-vertex-facetIce/50">
              {t('nav.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="site-footer-group">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-vertex-polarWhite">
        {title}
      </h3>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}
