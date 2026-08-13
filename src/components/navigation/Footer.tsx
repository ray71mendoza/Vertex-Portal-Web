import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Mail, MapPin } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { services } from '@/content/services';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations('common');
  const tServices = useTranslations('services.items');
  const prefix = `/${locale}`;

  const companyLinks = [
    { href: `${prefix}/${locale === 'es' ? 'quienes-somos' : 'about-us'}`, label: t('nav.whoWeAre') },
    { href: `${prefix}/${locale === 'es' ? 'nuestra-oferta' : 'our-services'}`, label: t('nav.ourOffer') },
    { href: `${prefix}/${locale === 'es' ? 'proyectos' : 'projects'}`, label: t('nav.projects') },
    { href: `${prefix}/${locale === 'es' ? 'contacto' : 'contact'}`, label: t('nav.contact') },
  ];

  const careerLinks = [
    { href: `${prefix}/${locale === 'es' ? 'trabaja-con-nosotros' : 'careers'}`, label: t('nav.careers') },
    { href: `${prefix}/${locale === 'es' ? 'empleos' : 'jobs'}`, label: t('nav.jobs') },
  ];

  return (
    <footer className="vx-bg-dark" role="contentinfo">
      <div className="vx-container">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href={prefix} aria-label="Vertex - Home">
              <Image
                src="/images/vertex-logo.png"
                alt="Vertex"
                width={130}
                height={40}
                className="h-[32px] w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-vertex-facetIce/80 max-w-[280px]">
              {t('footer.description')}
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold text-vertex-polarWhite uppercase tracking-wider mb-4">
              {t('footer.services')}
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`${prefix}/${locale === 'es' ? 'servicios' : 'services'}/${service.slug[locale]}`}
                    className="text-xs text-vertex-facetIce/70 hover:text-vertex-prismBlue transition-colors"
                  >
                    {tServices(`${service.id}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold text-vertex-polarWhite uppercase tracking-wider mb-4">
              {t('footer.company')}
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-vertex-facetIce/70 hover:text-vertex-prismBlue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Careers */}
          <div>
            <h3 className="text-sm font-semibold text-vertex-polarWhite uppercase tracking-wider mb-4">
              {t('footer.careers')}
            </h3>
            <ul className="space-y-2.5">
              {careerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-vertex-facetIce/70 hover:text-vertex-prismBlue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-vertex-polarWhite uppercase tracking-wider mb-4">
              {t('footer.contactInfo')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:gerenciavertexsas@gmail.com"
                  className="flex items-center gap-2 text-xs text-vertex-facetIce/70 hover:text-vertex-prismBlue transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  gerenciavertexsas@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-vertex-facetIce/70">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{t('footer.bogota')}</p>
                  <p>{t('footer.cartagena')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-vertex-facetIce/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-vertex-facetIce/50">
            © {new Date().getFullYear()} Vertex. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <Link
              href={`${prefix}/${locale === 'es' ? 'privacidad' : 'privacy'}`}
              className="text-xs text-vertex-facetIce/50 hover:text-vertex-prismBlue transition-colors"
            >
              {t('nav.privacy')}
            </Link>
            <Link
              href={`${prefix}/${locale === 'es' ? 'terminos' : 'terms'}`}
              className="text-xs text-vertex-facetIce/50 hover:text-vertex-prismBlue transition-colors"
            >
              {t('nav.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
