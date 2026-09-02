import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/schema';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const defaultTitle = isEs
    ? 'Vertex — Tecnología estratégica para transformar ideas en resultados'
    : 'Vertex — Strategic technology to transform ideas into results';
  const description = isEs
    ? 'Innovación, transformación digital, desarrollo de software a la medida, diseño estratégico y comunicación en Colombia y Latinoamérica.'
    : 'Innovation, digital transformation, custom software development, strategic design and communication in Colombia and Latin America.';

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vertex.com.co'),
    title: {
      default: defaultTitle,
      template: '%s | Vertex',
    },
    description,
    keywords: isEs
      ? [
          'desarrollo de software Colombia',
          'transformación digital Colombia',
          'software a la medida Bogotá',
          'inteligencia artificial empresas',
          'diseño UX UI Colombia',
          'software factory Colombia',
          'consultoría tecnológica',
          'Vertex Colombia',
        ]
      : [
          'custom software development Colombia',
          'digital transformation Latin America',
          'enterprise software solutions',
          'AI business solutions',
          'UX UI design Colombia',
          'Vertex technology',
        ],
    authors: [{ name: 'VERTEX S.A.S.' }],
    creator: 'VERTEX S.A.S.',
    publisher: 'VERTEX S.A.S.',
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: '/es',
        en: '/en',
        'x-default': '/es',
      },
    },
    openGraph: {
      title: defaultTitle,
      description,
      url: `/${locale}`,
      siteName: 'VERTEX',
      locale: isEs ? 'es_CO' : 'en_US',
      alternateLocale: isEs ? 'en_US' : 'es_CO',
      type: 'website',
      images: [
        {
          url: '/images/vertex-wallpaper-dark.png',
          width: 1200,
          height: 630,
          alt: 'Vertex — Tecnología Estratégica',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description,
      images: ['/images/vertex-wallpaper-dark.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const currentLocale = locale as Locale;

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/vertex-symbol.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/images/vertex-symbol.png" />
      </head>
      <body>
        <JsonLd
          data={[
            getOrganizationSchema(currentLocale),
            getWebSiteSchema(currentLocale),
          ]}
        />
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="skip-to-content">
            {locale === 'es' ? 'Ir al contenido principal' : 'Skip to main content'}
          </a>
          <Header locale={currentLocale} />
          <main id="main-content">{children}</main>
          <Footer locale={currentLocale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

