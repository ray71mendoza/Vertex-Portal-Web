export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

export const pathnames = {
  '/': '/',
  '/nosotros': {
    es: '/nosotros',
    en: '/about',
  },
  '/servicios': {
    es: '/servicios',
    en: '/services',
  },
  '/proyectos': {
    es: '/proyectos',
    en: '/projects',
  },
  '/equipo': {
    es: '/equipo',
    en: '/team',
  },
  '/contacto': {
    es: '/contacto',
    en: '/contact',
  },
  '/privacidad': {
    es: '/privacidad',
    en: '/privacy',
  },
  '/terminos': {
    es: '/terminos',
    en: '/terms',
  },
} as const;
