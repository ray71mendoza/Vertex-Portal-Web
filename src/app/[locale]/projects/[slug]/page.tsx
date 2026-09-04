import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { ProjectDetailContent } from '@/components/pages/ProjectDetailContent';
import { getProjectBySlug, getVisibleProjects } from '@/content/projects';
import { JsonLd } from '@/components/seo/JsonLd';
import { getProjectSchema, getBreadcrumbSchema } from '@/lib/schema';
import { hrefFor, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  const visible = getVisibleProjects();
  return visible.map((p) => ({
    locale: 'en',
    slug: p.slug.en,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const project = getProjectBySlug(slug, currentLocale);
  if (!project) return {};

  const esSlug = project.slug.es;
  const enSlug = project.slug.en;
  const title = project.title[currentLocale];
  const description = project.description[currentLocale];
  const coverImage = project.coverImage || '/images/vertex-wallpaper-dark.png';
  const currentPath = hrefFor(currentLocale, 'projects', `/${currentLocale === 'es' ? esSlug : enSlug}`);

  return {
    title,
    description,
    alternates: {
      canonical: currentPath,
      languages: {
        es: `/es/proyectos/${esSlug}`,
        en: `/en/projects/${enSlug}`,
        'x-default': `/es/proyectos/${esSlug}`,
      },
    },
    openGraph: {
      title: `${title} | Vertex`,
      description,
      url: currentPath,
      type: 'article',
      images: [
        {
          url: coverImage,
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
      images: [coverImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const project = getProjectBySlug(slug, currentLocale);

  if (!project) {
    notFound();
  }

  if (currentLocale !== 'en') {
    redirect(hrefFor(currentLocale, 'projects', `/${slug}`));
  }

  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: 'Home', url: `/${locale}` },
    {
      name: 'Projects',
      url: `/${locale}/projects`,
    },
    {
      name: project.title[currentLocale],
      url: `/${locale}/projects/${slug}`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema(breadcrumbItems),
          getProjectSchema(project, currentLocale),
        ]}
      />
      <ProjectDetailContent slug={slug} locale={locale} />
    </>
  );
}
