import { setRequestLocale } from 'next-intl/server';
import { OurOfferPageContent } from '@/components/pages/OurOfferPageContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'es' ? 'Nuestra Oferta — Vertex' : 'Our Offer — Vertex',
    description: locale === 'es'
      ? 'Soluciones integrales en innovación digital, desarrollo de software, diseño estratégico, marketing y consultoría.'
      : 'Comprehensive solutions in digital innovation, software development, strategic design, marketing, and consulting.',
  };
}

export default async function NuestraOfertaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <OurOfferPageContent locale={locale} />;
}
