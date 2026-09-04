import { redirect } from 'next/navigation';
import { hrefFor, type Locale } from '@/i18n/config';

// Legacy/orphaned URL — no longer linked from navigation. Redirects to the
// canonical "who we are" page instead of serving duplicate content.
export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(hrefFor(locale as Locale, 'whoWeAre'));
}
