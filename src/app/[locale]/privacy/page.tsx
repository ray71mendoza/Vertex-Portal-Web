import { setRequestLocale } from 'next-intl/server';
import { LegalPageContent } from '@/components/pages/LegalPageContent';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPageContent type="privacy" locale={locale} />;
}
