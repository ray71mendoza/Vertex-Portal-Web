'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale, RouteKey } from '@/i18n/config';
import { hrefFor, localizedRoutes, reverseRouteLookup } from '@/i18n/config';
import { services } from '@/content/services';

interface LanguageSwitcherProps {
  locale: Locale;
  isScrolled: boolean;
  isMobile?: boolean;
}

const legacyRouteAliases: Record<string, RouteKey> = {
  '/nosotros': 'whoWeAre',
  '/about': 'whoWeAre',
};

function translateServicePath(path: string, targetLocale: Locale) {
  const serviceBase = Object.values(localizedRoutes.services);
  const match = serviceBase.find((base) => path.startsWith(`/${base}/`));

  if (!match) return null;

  const slug = path.replace(`/${match}/`, '').split('/')[0];
  const service = services.find((item) => item.slug.es === slug || item.slug.en === slug);
  return service ? hrefFor(targetLocale, 'services', `/${service.slug[targetLocale]}`) : hrefFor(targetLocale, 'services');
}

export function LanguageSwitcher({ locale, isScrolled, isMobile }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLocale: Locale = locale === 'es' ? 'en' : 'es';

  const getAlternatePath = () => {
    const pathWithoutLocale = pathname.replace(/^\/(es|en)/, '') || '/';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';

    if (pathWithoutLocale === '/') return hrefFor(targetLocale, 'home') + hash;

    const servicePath = translateServicePath(pathWithoutLocale, targetLocale);
    if (servicePath) return servicePath + hash;

    const routeKey = reverseRouteLookup[pathWithoutLocale] || legacyRouteAliases[pathWithoutLocale];
    return routeKey ? hrefFor(targetLocale, routeKey) + hash : hrefFor(targetLocale, 'home');
  };

  const handleClick = () => {
    document.documentElement.lang = targetLocale;
    window.localStorage.setItem('vertex-locale', targetLocale);
  };

  if (isMobile) {
    return (
      <Link
        href={getAlternatePath()}
        onClick={handleClick}
        className="grid min-h-11 grid-cols-2 overflow-hidden rounded-lg border border-vertex-ink/10 text-sm font-bold"
        aria-label={locale === 'es' ? 'Cambiar a English' : 'Switch to Español'}
      >
        <span className={`flex items-center justify-center ${locale === 'es' ? 'bg-vertex-apexTeal text-white' : 'bg-white text-vertex-facetTeal'}`}>
          ES
        </span>
        <span className={`flex items-center justify-center ${locale === 'en' ? 'bg-vertex-apexTeal text-white' : 'bg-white text-vertex-facetTeal'}`}>
          EN
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={getAlternatePath()}
      onClick={handleClick}
      className={`grid h-11 min-w-[88px] grid-cols-2 overflow-hidden rounded-xl border text-sm font-bold transition-colors ${
        isScrolled
          ? 'border-vertex-ink/10 bg-white text-vertex-facetTeal hover:border-vertex-apexTeal/30'
          : 'border-white/20 bg-white/8 text-white/75 hover:bg-white/12'
      }`}
      aria-label={locale === 'es' ? 'Cambiar a English' : 'Switch to Español'}
    >
      <span className={`flex items-center justify-center ${locale === 'es' ? 'bg-vertex-apexTeal text-white' : ''}`}>
        ES
      </span>
      <span className={`flex items-center justify-center ${locale === 'en' ? 'bg-vertex-apexTeal text-white' : ''}`}>
        EN
      </span>
    </Link>
  );
}
