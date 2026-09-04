import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { ProjectsIndexContent } from '@/components/pages/ProjectsIndexContent';
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
    ? 'Proyectos y Casos de Éxito Tecnológico'
    : 'Projects & Technology Success Cases';
  const description = isEs
    ? 'Explora los proyectos desarrollados por Vertex en Colombia y la región: plataformas gubernamentales, sistemas empresariales y ecosistemas digitales.'
    : 'Explore projects delivered by Vertex in Colombia and Latin America: government platforms, enterprise systems, and digital ecosystems.';

  return {
    title,
    description,
    alternates: {
      canonical: hrefFor(locale as Locale, 'projects'),
      languages: {
        es: '/es/proyectos',
        en: '/en/projects',
        'x-default': '/es/proyectos',
      },
    },
    openGraph: {
      title: `${title} | Vertex`,
      description,
      url: hrefFor(locale as Locale, 'projects'),
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

export default async function ProyectosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  if (currentLocale !== 'es') {
    redirect(hrefFor(currentLocale, 'projects'));
  }

  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: currentLocale === 'es' ? 'Inicio' : 'Home', url: `/${locale}` },
    {
      name: currentLocale === 'es' ? 'Proyectos' : 'Projects',
      url: `/${locale}/proyectos`,
    },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbItems)} />
      <ProjectsIndexContent locale={locale} />
    </>
  );
}
