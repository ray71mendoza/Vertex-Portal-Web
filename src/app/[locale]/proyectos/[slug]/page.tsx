import { setRequestLocale } from 'next-intl/server';
import { ProjectDetailContent } from '@/components/pages/ProjectDetailContent';

export default async function ProyectoDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <ProjectDetailContent slug={slug} locale={locale} />;
}
