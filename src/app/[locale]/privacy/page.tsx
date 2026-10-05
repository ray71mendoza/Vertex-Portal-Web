import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { LegalPageContent } from '@/components/pages/LegalPageContent';
import { hrefFor, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

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
  const canonicalPath = hrefFor(locale as Locale, 'privacy');

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        es: '/es/privacidad',
        en: '/en/privacy',
        'x-default': '/es/privacidad',
      },
    },
    openGraph: {
      title: `${title} | Vertex`,
      description,
      url: canonicalPath,
      type: 'website',
      images: ['/images/vertex-wallpaper-dark.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Vertex`,
      description,
      images: ['/images/vertex-wallpaper-dark.png'],
    },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  if (currentLocale !== 'en') {
    redirect(hrefFor(currentLocale, 'privacy'));
  }

  setRequestLocale(locale);
  return <LegalPageContent type="privacy" locale={locale} />;
}
