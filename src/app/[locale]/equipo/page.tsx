import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { TeamPageContent } from '@/components/pages/TeamPageContent';
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
    ? 'Equipo de Trabajo — Liderazgo y Especialistas'
    : 'Our Team — Leadership & Specialists';
  const description = isEs
    ? 'Conoce a los líderes y especialistas de Vertex: profesionales en tecnología, diseño, estrategia y gestión de proyectos.'
    : 'Meet the leaders and specialists at Vertex: professionals in technology, design, strategy, and project execution.';

  return {
    title,
    description,
    alternates: {
      canonical: hrefFor(locale as Locale, 'team'),
      languages: {
        es: '/es/equipo',
        en: '/en/team',
        'x-default': '/es/equipo',
      },
    },
    openGraph: {
      title: `${title} | Vertex`,
      description,
      url: hrefFor(locale as Locale, 'team'),
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

export default async function EquipoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  if (currentLocale !== 'es') {
    redirect(hrefFor(currentLocale, 'team'));
  }

  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: currentLocale === 'es' ? 'Inicio' : 'Home', url: `/${locale}` },
    {
      name: currentLocale === 'es' ? 'Equipo' : 'Team',
      url: `/${locale}/equipo`,
    },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbItems)} />
      <TeamPageContent locale={locale} />
    </>
  );
}
