import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ProjectDetailContent } from '@/components/pages/ProjectDetailContent';
import { getProjectBySlug, getVisibleProjects } from '@/content/projects';

export function generateStaticParams() {
  const visible = getVisibleProjects();
  return visible.map((p) => ({
    slug: p.slug.en,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug, locale as 'es' | 'en');
  if (!project) return {};

  const title = `${project.title[locale as 'es' | 'en']} | Vertex`;
  const description = project.description[locale as 'es' | 'en'];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [project.coverImage || '/images/vertex-wallpaper-dark.png'],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <ProjectDetailContent slug={slug} locale={locale} />;
}
