import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { HeroHome } from '@/components/sections/HeroHome';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { ProjectsPreview } from '@/components/sections/ProjectsPreview';
import { RegionalReachPreview } from '@/components/sections/RegionalReachPreview';
import { CareersPreview } from '@/components/sections/CareersPreview';
import { CTAFinal } from '@/components/sections/CTAFinal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Vertex — Tecnología, Software e Inteligencia Artificial en Colombia'
    : 'Vertex — Enterprise Software, AI & Digital Transformation';

  const description = isEs
    ? 'Empresa de tecnología en Colombia especializada en desarrollo de software a la medida, transformación digital, inteligencia artificial y comunicación estratégica para organizaciones públicas y privadas.'
    : 'Enterprise technology company specializing in custom software development, digital transformation, artificial intelligence, and strategic communications in Colombia and Latin America.';

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: '/es',
        en: '/en',
        'x-default': '/es',
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      type: 'website',
      images: [
        {
          url: '/images/vertex-wallpaper-dark.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/vertex-wallpaper-dark.png'],
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="page-enter vx-homepage">
      <HeroHome locale={locale} />
      <AboutPreview locale={locale} />
      <CapabilitiesSection locale={locale} />
      <ValueProposition locale={locale} />
      <ProjectsPreview locale={locale} />
      <RegionalReachPreview locale={locale} />
      <CareersPreview locale={locale} />
      <CTAFinal locale={locale} />
    </div>
  );
}
