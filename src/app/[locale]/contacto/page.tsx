import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { ContactPageContent } from '@/components/pages/ContactPageContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { hrefFor, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return [{ locale: 'es' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Contacto — Inicia tu Proyecto de Tecnología'
    : 'Contact Us — Start Your Technology Project';
  const description = isEs
    ? 'Ponte en contacto con el equipo de Vertex. Desarrollamos soluciones tecnológicas y de comunicación para empresas y entidades públicas en Colombia.'
    : 'Get in touch with the Vertex team. We build enterprise technology and communication solutions for organizations in Colombia and Latin America.';

  return {
    title,
    description,
    alternates: {
      canonical: hrefFor(locale as Locale, 'contact'),
      languages: {
        es: '/es/contacto',
        en: '/en/contact',
        'x-default': '/es/contacto',
      },
    },
    openGraph: {
      title: `${title} | Vertex`,
      description,
      url: hrefFor(locale as Locale, 'contact'),
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

export default async function ContactoPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string }>;
}) {
  const { locale } = await params;
  const { service } = await searchParams;
  const currentLocale = locale as Locale;

  if (currentLocale !== 'es') {
    const suffix = service ? `?service=${encodeURIComponent(service)}` : '';
    redirect(`${hrefFor(currentLocale, 'contact')}${suffix}`);
  }

  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: currentLocale === 'es' ? 'Inicio' : 'Home', url: `/${locale}` },
    {
      name: currentLocale === 'es' ? 'Contacto' : 'Contact',
      url: `/${locale}/contacto`,
    },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbItems)} />
      <ContactPageContent locale={locale} initialService={service} />
    </>
  );
}
