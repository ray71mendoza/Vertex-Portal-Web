import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { LegalPageContent } from '@/components/pages/LegalPageContent';
import { hrefFor, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return [{ locale: 'es' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs ? 'Términos y Condiciones' : 'Terms & Conditions';
  const description = isEs
    ? 'Términos y condiciones de uso del portal web de Vertex.'
    : 'Terms and conditions for using the Vertex web portal.';

  return {
    title,
    description,
    alternates: {
      canonical: hrefFor(locale as Locale, 'terms'),
      languages: {
        es: '/es/terminos',
        en: '/en/terms',
        'x-default': '/es/terminos',
      },
    },
  };
}

export default async function TerminosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  if (currentLocale !== 'es') {
    redirect(hrefFor(currentLocale, 'terms'));
  }

  setRequestLocale(locale);
  return <LegalPageContent type="terms" locale={locale} />;
}
