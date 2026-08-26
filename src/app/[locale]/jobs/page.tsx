import { setRequestLocale } from 'next-intl/server';
import { JobsSearchContent } from '@/components/pages/JobsSearchContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'es' ? 'Empleos — Vertex' : 'Jobs — Vertex',
    description: locale === 'es'
      ? 'Explora las oportunidades laborales disponibles en Vertex. Encuentra tu próxima posición.'
      : 'Explore job opportunities available at Vertex. Find your next position.',
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
  setRequestLocale(locale);
  return <JobsSearchContent locale={locale} initialArea={area} />;
}
