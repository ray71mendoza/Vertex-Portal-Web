import { setRequestLocale } from 'next-intl/server';
import { ProjectsIndexContent } from '@/components/pages/ProjectsIndexContent';

export default async function ProyectosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectsIndexContent locale={locale} />;
}
