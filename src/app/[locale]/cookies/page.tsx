import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { LegalPageContent } from '@/components/pages/LegalPageContent';
import { locales, hrefFor, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs ? 'Política de Cookies' : 'Cookie Policy';
  const description = isEs
    ? 'Cómo Vertex usa cookies, analítica y tecnologías de marketing, y cómo puedes cambiar tus preferencias.'
    : 'How Vertex uses cookies, analytics, and marketing technologies, and how you can change your preferences.';

  return {
    title,
    description,
    alternates: {
      canonical: hrefFor(locale as Locale, 'cookies'),
      languages: {
        es: '/es/cookies',
        en: '/en/cookies',
        'x-default': '/es/cookies',
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPageContent type="cookies" locale={locale} />;
}
