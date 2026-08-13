import { setRequestLocale } from 'next-intl/server';
import { AboutPageContent } from '@/components/pages/AboutPageContent';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPageContent locale={locale} />;
}
