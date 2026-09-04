import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { ServicesIndexContent } from '@/components/pages/ServicesIndexContent';
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
    ? 'Servicios Especializados en Tecnología, Software y Estrategia'
    : 'Specialized Services in Technology, Software & Strategy';
  const description = isEs
    ? 'Descubre nuestros servicios: desarrollo de software a la medida, transformación digital, inteligencia artificial, branding, comunicación y experiencias feriales.'
    : 'Explore our services: custom software development, digital transformation, AI solutions, strategic branding, communications, and trade show experiences.';

  return {
    title,
    description,
    alternates: {
      canonical: hrefFor(locale as Locale, 'services'),
      languages: {
        es: '/es/servicios',
        en: '/en/services',
        'x-default': '/es/servicios',
      },
    },
    openGraph: {
      title: `${title} | Vertex`,
      description,
      url: hrefFor(locale as Locale, 'services'),
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

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  if (currentLocale !== 'en') {
    redirect(hrefFor(currentLocale, 'services'));
  }

  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: 'Home', url: `/${locale}` },
    {
      name: 'Services',
      url: `/${locale}/services`,
    },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbItems)} />
      <ServicesIndexContent locale={locale} />
    </>
  );
}
