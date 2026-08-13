import { setRequestLocale } from 'next-intl/server';
import { ContactPageContent } from '@/components/pages/ContactPageContent';

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string }>;
}) {
  const { locale } = await params;
  const { service } = await searchParams;
  setRequestLocale(locale);
  return <ContactPageContent locale={locale} initialService={service} />;
}
