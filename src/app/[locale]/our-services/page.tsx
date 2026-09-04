import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { OurOfferPageContent } from '@/components/pages/OurOfferPageContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
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
  const title = isEs
    ? 'Nuestra Oferta de Valor — Capacidades y Metodología'
    : 'Our Offer — Strategic Capabilities & Methodology';
  const description = isEs
    ? 'Conoce el modelo de trabajo de Vertex: capacidades en software, transformación digital, diseño y comunicación con metodología ágil orientada a resultados.'
    : 'Discover Vertex value proposition: software capabilities, digital transformation, design, and communications backed by result-oriented methodology.';

  return {
    title,
    description,
    alternates: {
      canonical: hrefFor(locale as Locale, 'ourOffer'),
      languages: {
        es: '/es/nuestra-oferta',
        en: '/en/our-services',
        'x-default': '/es/nuestra-oferta',
      },
    },
    openGraph: {
      title: `${title} | Vertex`,
      description,
      url: hrefFor(locale as Locale, 'ourOffer'),
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

export default async function OurServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  if (currentLocale !== 'en') {
    redirect(hrefFor(currentLocale, 'ourOffer'));
  }

  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: 'Home', url: `/${locale}` },
    {
      name: 'Our Offer',
      url: `/${locale}/our-services`,
    },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbItems)} />
      <OurOfferPageContent locale={locale} />
    </>
  );
}
