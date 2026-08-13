'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Lightbulb, Code2, Palette, Megaphone, Video, Building2, LayoutGrid } from 'lucide-react';
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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const prefix = `/${locale}`;

  const navLinks = [
    { href: prefix, label: t('home') },
    { href: `${prefix}/${locale === 'es' ? 'nosotros' : 'about'}`, label: t('about') },
    { href: `${prefix}/${locale === 'es' ? 'servicios' : 'services'}`, label: t('services'), hasSubmenu: true },
    { href: `${prefix}/${locale === 'es' ? 'proyectos' : 'projects'}`, label: t('projects') },
    { href: `${prefix}/${locale === 'es' ? 'equipo' : 'team'}`, label: t('team') },
    { href: `${prefix}/${locale === 'es' ? 'contacto' : 'contact'}`, label: t('contact') },
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

        {/* Desktop Navigation Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main navigation">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.hasSubmenu && handleMouseEnter()}
              onMouseLeave={() => link.hasSubmenu && handleMouseLeave()}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-4 py-2 text-[0.9375rem] font-medium rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? 'text-vertex-ink hover:text-vertex-apexTeal hover:bg-vertex-lightSubtle'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={link.hasSubmenu ? isServicesOpen : undefined}
                aria-haspopup={link.hasSubmenu ? 'true' : undefined}
              >
                {link.label}
                {link.hasSubmenu && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Link>

              {/* Mega Menu for Services */}
              {link.hasSubmenu && isServicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                  style={{ width: '640px' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  role="menu"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 grid grid-cols-2 gap-3">
                    {services.map((service) => {
                      const IconComp = iconMap[service.icon] || Lightbulb;
                      return (
                        <Link
                          key={service.id}
                          href={`${prefix}/${locale === 'es' ? 'servicios' : 'services'}/${service.slug[locale as 'es' | 'en']}`}
                          className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-vertex-lightSubtle transition-all duration-200 group"
                          role="menuitem"
                        >
                          <div className="vx-icon-wrap !w-10 !h-10 !mb-0 group-hover:bg-vertex-apexTeal group-hover:text-white transition-colors duration-200">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-vertex-ink group-hover:text-vertex-apexTeal transition-colors block">
                              {tServices(`${service.id}.title`)}
                            </span>
                            <span className="text-xs text-vertex-facetBlue line-clamp-1 mt-0.5">
                              {tServices(`${service.id}.shortDescription`)}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher locale={locale} isScrolled={isScrolled} />
          <Link
            href={`${prefix}/${locale === 'es' ? 'contacto' : 'contact'}`}
            className="vx-btn vx-btn-primary !h-11 !px-6 !text-sm"
          >
            {t('letsTalk')}
          </Link>
        </div>

        {/* Mobile Toggle (Min 44x44px target) */}
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
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          <nav
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <Image
                src="/images/vertex-logo.png"
                alt="Vertex"
                width={120}
                height={36}
                className="h-[30px] w-auto"
              />
              <button
                onClick={() => setIsMobileOpen(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-vertex-ink"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block py-3 px-3 text-base font-semibold text-vertex-ink hover:text-vertex-apexTeal hover:bg-vertex-lightSubtle rounded-lg transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="px-3 text-xs font-bold text-vertex-apexTeal uppercase tracking-wider mb-2">
                  {locale === 'es' ? 'Servicios' : 'Services'}
                </p>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`${prefix}/${locale === 'es' ? 'servicios' : 'services'}/${service.slug[locale as 'es' | 'en']}`}
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-2.5 px-3 text-sm text-vertex-facetTeal hover:text-vertex-apexTeal hover:bg-vertex-lightSubtle rounded-lg transition-colors min-h-[44px] flex items-center"
                  >
                    {tServices(`${service.id}.title`)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-5 border-t border-gray-100 space-y-3">
              <LanguageSwitcher locale={locale} isScrolled={true} isMobile />
              <Link
                href={`${prefix}/${locale === 'es' ? 'contacto' : 'contact'}`}
                onClick={() => setIsMobileOpen(false)}
                className="vx-btn vx-btn-primary w-full"
              >
                {t('letsTalk')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
