import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { AboutPageContent } from '@/components/pages/AboutPageContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs ? 'Sobre Vertex — Innovación y Tecnología' : 'About Vertex — Innovation & Technology';
  const description = isEs
    ? 'Conoce la visión, pilares y alcance regional de Vertex en Colombia y Latinoamérica.'
    : 'Discover the vision, pillars, and regional reach of Vertex across Colombia and Latin America.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/about-us`,
      languages: {
        es: '/es/quienes-somos',
        en: '/en/about-us',
        'x-default': '/es/quienes-somos',
      },
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPageContent locale={locale} />;
}
