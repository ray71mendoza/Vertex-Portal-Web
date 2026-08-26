import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Vertex - Tecnología estratégica para transformar ideas en resultados'
    : 'Vertex - Strategic technology to transform ideas into results';
  const description = isEs
    ? 'Innovación, transformación digital, desarrollo de software, diseño estratégico y comunicación. Soluciones tecnológicas integrales para organizaciones públicas y privadas.'
    : 'Innovation, digital transformation, software development, strategic design and communication. Comprehensive technology solutions for public and private organizations.';

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vertex.com.co'),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: '/es',
        en: '/en',
      },
    },
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
      images: ['/images/vertex-wallpaper-dark.png'],
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

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/vertex-symbol.png" type="image/png" />
        <link rel="alternate" hrefLang="es" href="/es" />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="x-default" href="/es" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="skip-to-content">
            {locale === 'es' ? 'Ir al contenido principal' : 'Skip to main content'}
          </a>
          <Header locale={locale as Locale} />
          <main id="main-content">{children}</main>
          <Footer locale={locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
