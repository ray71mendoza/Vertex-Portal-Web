import { setRequestLocale } from 'next-intl/server';
import { TeamPageContent } from '@/components/pages/TeamPageContent';

export default async function EquipoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TeamPageContent locale={locale} />;
}
