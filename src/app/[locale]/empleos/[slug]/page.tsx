import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getJobBySlug, getOpenJobs } from '@/content/jobs';
import { JobDetailContent } from '@/components/pages/JobDetailContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import type { Locale } from '@/i18n/config';

export function generateStaticParams() {
  const openJobs = getOpenJobs();
  return openJobs.map((j) => ({
    slug: j.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const job = getJobBySlug(slug);
  if (!job) return { title: 'Vacante no encontrada | Vertex' };

  const title = `${job.title[currentLocale]} | Empleos Vertex`;
  const description = job.summary[currentLocale];
  const currentPath = `/${locale}/empleos/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: currentPath,
      languages: {
        es: `/es/empleos/${slug}`,
        en: `/en/jobs/${slug}`,
        'x-default': `/es/empleos/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: currentPath,
      type: 'article',
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
      title,
      description,
      images: ['/images/vertex-wallpaper-dark.png'],
    },
  };
}

export default async function EmpleosDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  setRequestLocale(locale);

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vertex.com.co';
  const jobUrl = `${SITE_URL}/${locale}/empleos/${slug}`;

  const breadcrumbItems = [
    { name: currentLocale === 'es' ? 'Inicio' : 'Home', url: `/${locale}` },
    {
      name: currentLocale === 'es' ? 'Empleos' : 'Jobs',
      url: `/${locale}/empleos`,
    },
    {
      name: job.title[currentLocale],
      url: `/${locale}/empleos/${slug}`,
    },
  ];

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title[currentLocale],
    description: `${job.summary[currentLocale]} ${job.description[currentLocale]}`,
    datePosted: job.publishedAt,
    validThrough: '2026-12-31T23:59:59Z',
    employmentType: job.contractType === 'full-time' ? 'FULL_TIME' : 'OTHER',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'VERTEX S.A.S.',
      sameAs: SITE_URL,
      logo: `${SITE_URL}/images/vertex-logo.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.city || 'Bogotá',
        addressRegion: 'Cundinamarca',
        addressCountry: 'CO',
      },
    },
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'Colombia',
    },
    jobLocationType: job.modality === 'remote' ? 'TELECOMMUTE' : undefined,
    url: jobUrl,
  };

  return (
    <>
      <JsonLd
        data={[getBreadcrumbSchema(breadcrumbItems), jobPostingSchema]}
      />
      <JobDetailContent job={job} locale={locale} />
    </>
  );
}
