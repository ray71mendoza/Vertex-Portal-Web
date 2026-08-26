import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Mail, MapPin } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { hrefFor } from '@/i18n/config';
import { services } from '@/content/services';

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
            <ul className="site-footer-contact space-y-3">
              <li>
                <a
                  href="mailto:gerenciavertexsas@gmail.com"
                  className="flex items-center gap-2 text-xs text-vertex-facetIce/70 transition-colors hover:text-vertex-prismBlue"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  gerenciavertexsas@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-vertex-facetIce/70">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <div>
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
