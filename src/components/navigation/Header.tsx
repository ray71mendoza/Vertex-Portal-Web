'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Lightbulb, Code2, Palette, Megaphone, Video, Building2, LayoutGrid, Users, MapPin, Briefcase, Award } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { LanguageSwitcher } from './LanguageSwitcher';
import { services } from '@/content/services';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Code2, Palette, Megaphone, Video, Building2, LayoutGrid,
};

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const t = useTranslations('common.nav');
  const tServices = useTranslations('services.items');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuKey: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const prefix = `/${locale}`;
  const loc = locale as 'es' | 'en';

  const quienesSomosSubitems = [
    { href: `${prefix}/${loc === 'es' ? 'quienes-somos' : 'about-us'}#sobre-vertex`, label: t('aboutVertex') },
    { href: `${prefix}/${loc === 'es' ? 'quienes-somos' : 'about-us'}#por-que-vertex`, label: t('whyVertex') },
    { href: `${prefix}/${loc === 'es' ? 'quienes-somos' : 'about-us'}#alcance-regional`, label: t('ourReach') },
    { href: `${prefix}/${loc === 'es' ? 'quienes-somos' : 'about-us'}#ubicaciones`, label: t('locations') },
    { href: `${prefix}/${loc === 'es' ? 'quienes-somos' : 'about-us'}#nuestro-talento`, label: t('ourTalent') },
    { href: `${prefix}/${loc === 'es' ? 'quienes-somos' : 'about-us'}#equipo`, label: t('teamMembers') },
  ];

  const nuestraOfertaSubitems = [
    { href: `${prefix}/${loc === 'es' ? 'nuestra-oferta' : 'our-services'}`, label: t('ourOffer') },
    { href: `${prefix}/${loc === 'es' ? 'servicios' : 'services'}`, label: t('services') },
    { href: `${prefix}/${loc === 'es' ? 'proyectos' : 'projects'}`, label: t('projects') },
  ];

  const trabajaSubitems = [
    { href: `${prefix}/${loc === 'es' ? 'trabaja-con-nosotros' : 'careers'}`, label: t('careers') },
    { href: `${prefix}/${loc === 'es' ? 'empleos' : 'jobs'}`, label: t('jobs') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm'
          : 'bg-vertex-darkBg/60 backdrop-blur-sm border-b border-white/10'
      }`}
      style={{ height: 'var(--vx-header-height)' }}
    >
      <div className="vx-container h-full flex items-center justify-between">
        {/* Logo */}
        <Link href={prefix} className="relative z-10 flex-shrink-0" aria-label="Vertex - Home">
          <Image
            src="/images/vertex-logo.png"
            alt="Vertex Logo"
            width={140}
            height={42}
            priority
            className={`h-[34px] w-auto transition-all ${isScrolled ? '' : 'brightness-0 invert'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main navigation">
          {/* Inicio */}
          <Link
            href={prefix}
            className={`px-3 py-2 text-[0.9375rem] font-medium rounded-lg transition-all duration-200 ${
              isScrolled
                ? 'text-vertex-ink hover:text-vertex-apexTeal hover:bg-vertex-lightSubtle'
                : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            {t('home')}
          </Link>

          {/* Quiénes somos dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('quienes')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={`${prefix}/${loc === 'es' ? 'quienes-somos' : 'about-us'}`}
              className={`flex items-center gap-1 px-3 py-2 text-[0.9375rem] font-medium rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-vertex-ink hover:text-vertex-apexTeal hover:bg-vertex-lightSubtle'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {t('whoWeAre')}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'quienes' ? 'rotate-180' : ''}`} />
            </Link>
            {activeMenu === 'quienes' && (
              <div className="absolute top-full left-0 pt-2 w-56">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 space-y-1">
                  {quienesSomosSubitems.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-3 py-2 text-xs font-semibold text-vertex-ink hover:text-vertex-apexTeal hover:bg-vertex-lightSubtle rounded-lg transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Nuestra Oferta dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('oferta')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={`${prefix}/${loc === 'es' ? 'nuestra-oferta' : 'our-services'}`}
              className={`flex items-center gap-1 px-3 py-2 text-[0.9375rem] font-medium rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-vertex-ink hover:text-vertex-apexTeal hover:bg-vertex-lightSubtle'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {t('ourOffer')}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'oferta' ? 'rotate-180' : ''}`} />
            </Link>
            {activeMenu === 'oferta' && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                style={{ width: '560px' }}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-2">
                  {services.map((service) => {
                    const IconComp = iconMap[service.icon] || Lightbulb;
                    return (
                      <Link
                        key={service.id}
                        href={`${prefix}/${loc === 'es' ? 'servicios' : 'services'}/${service.slug[loc]}`}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-vertex-lightSubtle transition-all group"
                      >
                        <div className="vx-icon-wrap !w-8 !h-8 !mb-0 group-hover:bg-vertex-apexTeal group-hover:text-white transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-vertex-ink group-hover:text-vertex-apexTeal transition-colors block">
                            {tServices(`${service.id}.title`)}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Trabaja con nosotros dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('trabaja')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={`${prefix}/${loc === 'es' ? 'trabaja-con-nosotros' : 'careers'}`}
              className={`flex items-center gap-1 px-3 py-2 text-[0.9375rem] font-medium rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-vertex-ink hover:text-vertex-apexTeal hover:bg-vertex-lightSubtle'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {t('careers')}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'trabaja' ? 'rotate-180' : ''}`} />
            </Link>
            {activeMenu === 'trabaja' && (
              <div className="absolute top-full left-0 pt-2 w-52">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 space-y-1">
                  {trabajaSubitems.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-3 py-2 text-xs font-semibold text-vertex-ink hover:text-vertex-apexTeal hover:bg-vertex-lightSubtle rounded-lg transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contacto */}
          <Link
            href={`${prefix}/${loc === 'es' ? 'contacto' : 'contact'}`}
            className={`px-3 py-2 text-[0.9375rem] font-medium rounded-lg transition-all duration-200 ${
              isScrolled
                ? 'text-vertex-ink hover:text-vertex-apexTeal hover:bg-vertex-lightSubtle'
                : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            {t('contact')}
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher locale={locale} isScrolled={isScrolled} />
          <Link
            href={`${prefix}/${loc === 'es' ? 'contacto' : 'contact'}`}
            className="vx-btn vx-btn-primary !h-11 !px-6 !text-sm"
          >
            {t('letsTalk')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-10 min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2 rounded-lg"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-vertex-ink' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-vertex-ink' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
          <nav className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <Image src="/images/vertex-logo.png" alt="Vertex" width={120} height={36} className="h-[30px] w-auto" />
              <button onClick={() => setIsMobileOpen(false)} className="min-w-[44px] min-h-[44px] flex items-center justify-center text-vertex-ink">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4 text-sm">
              <Link href={prefix} onClick={() => setIsMobileOpen(false)} className="block font-bold text-vertex-ink py-2">
                {t('home')}
              </Link>
              <div>
                <Link href={`${prefix}/${loc === 'es' ? 'quienes-somos' : 'about-us'}`} onClick={() => setIsMobileOpen(false)} className="block font-bold text-vertex-apexTeal py-1">
                  {t('whoWeAre')}
                </Link>
                <div className="pl-3 space-y-1 mt-1 border-l-2 border-vertex-apexTeal/20">
                  {quienesSomosSubitems.map((sub) => (
                    <Link key={sub.href} href={sub.href} onClick={() => setIsMobileOpen(false)} className="block text-xs text-vertex-facetTeal py-1">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <Link href={`${prefix}/${loc === 'es' ? 'nuestra-oferta' : 'our-services'}`} onClick={() => setIsMobileOpen(false)} className="block font-bold text-vertex-apexTeal py-1">
                  {t('ourOffer')}
                </Link>
                <div className="pl-3 space-y-1 mt-1 border-l-2 border-vertex-apexTeal/20">
                  {nuestraOfertaSubitems.map((sub) => (
                    <Link key={sub.href} href={sub.href} onClick={() => setIsMobileOpen(false)} className="block text-xs text-vertex-facetTeal py-1">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <Link href={`${prefix}/${loc === 'es' ? 'trabaja-con-nosotros' : 'careers'}`} onClick={() => setIsMobileOpen(false)} className="block font-bold text-vertex-apexTeal py-1">
                  {t('careers')}
                </Link>
                <div className="pl-3 space-y-1 mt-1 border-l-2 border-vertex-apexTeal/20">
                  {trabajaSubitems.map((sub) => (
                    <Link key={sub.href} href={sub.href} onClick={() => setIsMobileOpen(false)} className="block text-xs text-vertex-facetTeal py-1">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href={`${prefix}/${loc === 'es' ? 'contacto' : 'contact'}`} onClick={() => setIsMobileOpen(false)} className="block font-bold text-vertex-ink py-2">
                {t('contact')}
              </Link>
            </div>

            <div className="p-5 border-t border-gray-100 space-y-3">
              <LanguageSwitcher locale={locale} isScrolled={true} isMobile />
              <Link href={`${prefix}/${loc === 'es' ? 'contacto' : 'contact'}`} onClick={() => setIsMobileOpen(false)} className="vx-btn vx-btn-primary w-full">
                {t('letsTalk')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
