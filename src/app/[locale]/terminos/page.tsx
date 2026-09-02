import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { LegalPageContent } from '@/components/pages/LegalPageContent';

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
      canonical: `/${locale}/terminos`,
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
  setRequestLocale(locale);
  return <LegalPageContent type="terms" locale={locale} />;
}
