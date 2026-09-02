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
  const title = isEs ? 'Política de Privacidad' : 'Privacy Policy';
  const description = isEs
    ? 'Política de privacidad y tratamiento de datos personales de Vertex.'
    : 'Privacy policy and personal data protection terms of Vertex.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        es: '/es/privacidad',
        en: '/en/privacy',
        'x-default': '/es/privacidad',
      },
    },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPageContent type="privacy" locale={locale} />;
}
