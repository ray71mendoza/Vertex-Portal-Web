import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { WhoWeArePageContent } from '@/components/pages/WhoWeArePageContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
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
  const title = isEs
    ? 'Quiénes Somos — Innovación, Talento y Tecnología'
    : 'Who We Are — Innovation, Talent & Technology';
  const description = isEs
    ? 'Conoce a Vertex: compañía especializada en transformación digital, desarrollo de software, diseño estratégico y comunicación en Colombia y Latinoamérica.'
    : 'Meet Vertex: specialized enterprise in digital transformation, custom software development, strategic design, and corporate communications in Colombia and Latin America.';

  return {
    title,
    description,
    alternates: {
      canonical: hrefFor(locale as Locale, 'whoWeAre'),
      languages: {
        es: '/es/quienes-somos',
        en: '/en/about-us',
        'x-default': '/es/quienes-somos',
      },
    },
    openGraph: {
      title: `${title} | Vertex`,
      description,
      url: hrefFor(locale as Locale, 'whoWeAre'),
      type: 'website',
      images: [
        {
          url: '/images/vertex-wallpaper-dark.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Vertex`,
      description,
      images: ['/images/vertex-wallpaper-dark.png'],
    },
  };
}

export default async function QuienesSomosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  if (currentLocale !== 'es') {
    redirect(hrefFor(currentLocale, 'whoWeAre'));
  }

  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: currentLocale === 'es' ? 'Inicio' : 'Home', url: `/${locale}` },
    {
      name: currentLocale === 'es' ? 'Quiénes Somos' : 'Who We Are',
      url: `/${locale}/quienes-somos`,
    },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbItems)} />
      <WhoWeArePageContent locale={locale} />
    </>
  );
}
