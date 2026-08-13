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
  '/quienes-somos': {
    es: '/quienes-somos',
    en: '/about-us',
  },
  '/servicios': {
    es: '/servicios',
    en: '/services',
  },
  '/nuestra-oferta': {
    es: '/nuestra-oferta',
    en: '/our-services',
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
  '/trabaja-con-nosotros': {
    es: '/trabaja-con-nosotros',
    en: '/careers',
  },
  '/empleos': {
    es: '/empleos',
    en: '/jobs',
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
