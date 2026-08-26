import { setRequestLocale } from 'next-intl/server';
import { Montserrat } from 'next/font/google';
import { HeroHome } from '@/components/sections/HeroHome';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { ProjectsPreview } from '@/components/sections/ProjectsPreview';
import { RegionalReachPreview } from '@/components/sections/RegionalReachPreview';
import { CareersPreview } from '@/components/sections/CareersPreview';
import { CTAFinal } from '@/components/sections/CTAFinal';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className={`page-enter vx-homepage ${montserrat.variable} ${montserrat.className}`}>
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
