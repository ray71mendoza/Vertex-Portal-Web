import { setRequestLocale } from 'next-intl/server';
import { ServiceDetailContent } from '@/components/pages/ServiceDetailContent';

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <ServiceDetailContent slug={slug} locale={locale} />;
}
