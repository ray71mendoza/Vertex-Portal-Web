'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/i18n/config';

interface LanguageSwitcherProps {
  locale: Locale;
  isScrolled: boolean;
  isMobile?: boolean;
}

export function LanguageSwitcher({ locale, isScrolled, isMobile }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const getAlternatePath = () => {
    const targetLocale = locale === 'es' ? 'en' : 'es';
    // Replace the locale prefix in the current path
    const pathWithoutLocale = pathname.replace(/^\/(es|en)/, '');

    // Handle known route translations
    const routeMap: Record<string, string> = {
      '/nosotros': '/about',
      '/about': '/nosotros',
      '/servicios': '/services',
      '/services': '/servicios',
      '/proyectos': '/projects',
      '/projects': '/proyectos',
      '/equipo': '/team',
      '/team': '/equipo',
      '/contacto': '/contact',
      '/contact': '/contacto',
      '/privacidad': '/privacy',
      '/privacy': '/privacidad',
      '/terminos': '/terms',
      '/terms': '/terminos',
    };

    // Handle service slugs
    const serviceSlugMap: Record<string, string> = {
      'innovacion-transformacion-digital': 'innovation-digital-transformation',
      'innovation-digital-transformation': 'innovacion-transformacion-digital',
      'desarrollo-de-software': 'software-development',
      'software-development': 'desarrollo-de-software',
      'diseno-estrategico-branding': 'strategic-design-branding',
      'strategic-design-branding': 'diseno-estrategico-branding',
      'marketing-comunicacion-digital': 'digital-marketing-communications',
      'digital-marketing-communications': 'marketing-comunicacion-digital',
      'produccion-audiovisual': 'audiovisual-production',
      'audiovisual-production': 'produccion-audiovisual',
      'sector-publico-grandes-proyectos': 'public-sector-large-projects',
      'public-sector-large-projects': 'sector-publico-grandes-proyectos',
      'stands-experiencias-feriales': 'trade-show-experiences',
      'trade-show-experiences': 'stands-experiencias-feriales',
    };

    let translatedPath = pathWithoutLocale;

    // Check direct route mappings
    for (const [from, to] of Object.entries(routeMap)) {
      if (pathWithoutLocale.startsWith(from)) {
        translatedPath = pathWithoutLocale.replace(from, to);
        break;
      }
    }

    // Check service slugs within the path
    for (const [from, to] of Object.entries(serviceSlugMap)) {
      if (translatedPath.includes(from)) {
        translatedPath = translatedPath.replace(from, to);
        break;
      }
    }

    return `/${targetLocale}${translatedPath}`;
  };

  if (isMobile) {
    return (
      <Link
        href={getAlternatePath()}
        className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-vertex-facetTeal border border-gray-200 rounded-lg hover:bg-vertex-lightSubtle transition-colors w-full"
      >
        <span className="text-base">🌐</span>
        {locale === 'es' ? 'English' : 'Español'}
      </Link>
    );
  }

  return (
    <Link
      href={getAlternatePath()}
      className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
        isScrolled
          ? 'text-vertex-facetTeal hover:text-vertex-apexTeal hover:bg-vertex-lightSubtle'
          : 'text-white/80 hover:text-white hover:bg-white/10'
      }`}
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className={`font-semibold ${locale === 'es' ? (isScrolled ? 'text-vertex-ink' : 'text-white') : ''}`}>
        ES
      </span>
      <span className={isScrolled ? 'text-gray-300' : 'text-white/40'}>|</span>
      <span className={`font-semibold ${locale === 'en' ? (isScrolled ? 'text-vertex-ink' : 'text-white') : ''}`}>
        EN
      </span>
    </Link>
  );
}
