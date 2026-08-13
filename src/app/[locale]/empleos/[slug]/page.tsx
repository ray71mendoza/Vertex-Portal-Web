import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getJobBySlug } from '@/content/jobs';
import { JobDetailContent } from '@/components/pages/JobDetailContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: 'Vacante no encontrada — Vertex' };
  const loc = locale as 'es' | 'en';
  return {
    title: `${job.title[loc]} — Vertex`,
    description: job.summary[loc],
  };
}

export default async function EmpleosDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const job = getJobBySlug(slug);
  if (!job) notFound();
  return <JobDetailContent job={job} locale={locale} />;
}
