export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

export type RouteKey =
  | 'home'
  | 'whoWeAre'
  | 'ourOffer'
  | 'services'
  | 'projects'
  | 'team'
  | 'careers'
  | 'jobs'
  | 'contact'
  | 'privacy'
  | 'terms';

export const localizedRoutes: Record<RouteKey, Record<Locale, string>> = {
  home: { es: '', en: '' },
  whoWeAre: { es: 'quienes-somos', en: 'about-us' },
  ourOffer: { es: 'nuestra-oferta', en: 'our-services' },
  services: { es: 'servicios', en: 'services' },
  projects: { es: 'proyectos', en: 'projects' },
  team: { es: 'equipo', en: 'team' },
  careers: { es: 'trabaja-con-nosotros', en: 'careers' },
  jobs: { es: 'empleos', en: 'jobs' },
  contact: { es: 'contacto', en: 'contact' },
  privacy: { es: 'privacidad', en: 'privacy' },
  terms: { es: 'terminos', en: 'terms' },
};

export function hrefFor(locale: Locale, route: RouteKey, suffix = '') {
  const segment = localizedRoutes[route][locale];
  const base = segment ? `/${locale}/${segment}` : `/${locale}`;
  return `${base}${suffix}`;
}

export const reverseRouteLookup = Object.entries(localizedRoutes).reduce(
  (acc, [key, routes]) => {
    acc[`/${routes.es}`] = key as RouteKey;
    acc[`/${routes.en}`] = key as RouteKey;
    return acc;
  },
  {} as Record<string, RouteKey>
);

export const pathnames = localizedRoutes;
