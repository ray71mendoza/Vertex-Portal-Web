import { setRequestLocale } from 'next-intl/server';
import { WhoWeArePageContent } from '@/components/pages/WhoWeArePageContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'es' ? 'Quiénes Somos — Vertex' : 'Who We Are — Vertex',
    description: locale === 'es'
      ? 'Conoce a Vertex: tecnología, talento y visión para transformar organizaciones en Latinoamérica.'
      : 'Meet Vertex: technology, talent and vision to transform organizations across Latin America.',
  };
}

export default async function QuienesSomosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WhoWeArePageContent locale={locale} />;
}
