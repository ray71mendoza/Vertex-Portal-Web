import { setRequestLocale } from 'next-intl/server';
import { CareersPageContent } from '@/components/pages/CareersPageContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'es' ? 'Trabaja con Nosotros — Vertex' : 'Careers — Vertex',
    description: locale === 'es'
      ? 'Descubre oportunidades de crecimiento profesional en Vertex. Construye el futuro con nosotros.'
      : 'Discover professional growth opportunities at Vertex. Build the future with us.',
  };
}

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CareersPageContent locale={locale} />;
}
