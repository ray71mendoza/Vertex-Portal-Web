import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { JobsSearchContent } from '@/components/pages/JobsSearchContent';
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
    ? 'Vacantes y Oportunidades Laborales en Tecnología'
    : 'Job Openings & Tech Careers';
  const description = isEs
    ? 'Explora las vacantes disponibles en Vertex: posiciones en desarrollo frontend, backend, diseño UX/UI, consultoría y gestión de proyectos en Colombia.'
    : 'Explore open job positions at Vertex: opportunities in frontend, backend, UX/UI design, tech consulting, and project management in Colombia.';

  return {
    title,
    description,
    alternates: {
      canonical: hrefFor(locale as Locale, 'jobs'),
      languages: {
        es: '/es/empleos',
        en: '/en/jobs',
        'x-default': '/es/empleos',
      },
    },
    openGraph: {
      title: `${title} | Vertex`,
      description,
      url: hrefFor(locale as Locale, 'jobs'),
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

export default async function JobsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ area?: string }>;
}) {
  const { locale } = await params;
  const { area = '' } = await searchParams;
  const currentLocale = locale as Locale;

  if (currentLocale !== 'en') {
    const suffix = area ? `?area=${encodeURIComponent(area)}` : '';
    redirect(`${hrefFor(currentLocale, 'jobs')}${suffix}`);
  }

  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: 'Home', url: `/${locale}` },
    {
      name: 'Jobs',
      url: `/${locale}/jobs`,
    },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbItems)} />
      <JobsSearchContent locale={locale} initialArea={area} />
    </>
  );
}
