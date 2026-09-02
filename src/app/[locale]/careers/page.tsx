import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { CareersPageContent } from '@/components/pages/CareersPageContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Trabaja con Nosotros — Talento, Cultura y Oportunidades'
    : 'Careers at Vertex — Talent, Culture & Opportunities';
  const description = isEs
    ? 'Forma parte del equipo de Vertex. Conoce nuestra cultura de trabajo, beneficios y oportunidades en desarrollo de software, diseño y tecnología.'
    : 'Join the Vertex team. Discover our culture, benefits, and open positions in software development, design, and enterprise technology.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/careers`,
      languages: {
        es: '/es/trabaja-con-nosotros',
        en: '/en/careers',
        'x-default': '/es/trabaja-con-nosotros',
      },
    },
    openGraph: {
      title: `${title} | Vertex`,
      description,
      url: `/${locale}/careers`,
      type: 'website',
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
      title: `${title} | Vertex`,
      description,
      images: ['/images/vertex-wallpaper-dark.png'],
    },
  };
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: currentLocale === 'es' ? 'Inicio' : 'Home', url: `/${locale}` },
    {
      name: currentLocale === 'es' ? 'Trabaja con nosotros' : 'Careers',
      url: `/${locale}/careers`,
    },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbItems)} />
      <CareersPageContent locale={locale} />
    </>
  );
}
