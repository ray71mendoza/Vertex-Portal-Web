import { setRequestLocale } from 'next-intl/server';
import { ServicesIndexContent } from '@/components/pages/ServicesIndexContent';

export default async function ServiciosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesIndexContent locale={locale} />;
}
