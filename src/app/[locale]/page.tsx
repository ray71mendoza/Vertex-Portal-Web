import { setRequestLocale } from 'next-intl/server';
import { HeroHome } from '@/components/sections/HeroHome';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { ProjectsPreview } from '@/components/sections/ProjectsPreview';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { SectorsSection } from '@/components/sections/SectorsSection';
import { RegionalReachPreview } from '@/components/sections/RegionalReachPreview';
import { TalentPreview } from '@/components/sections/TalentPreview';
import { CareersPreview } from '@/components/sections/CareersPreview';
import { CTAFinal } from '@/components/sections/CTAFinal';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="page-enter">
      <HeroHome locale={locale} />
      <AboutPreview locale={locale} />
      <CapabilitiesSection locale={locale} />
      <ValueProposition locale={locale} />
      <ProjectsPreview locale={locale} />
      <MethodologySection locale={locale} />
      <SectorsSection locale={locale} />
      <RegionalReachPreview locale={locale} />
      <TalentPreview locale={locale} />
      <CareersPreview locale={locale} />
      <CTAFinal locale={locale} />
    </div>
  );
}
