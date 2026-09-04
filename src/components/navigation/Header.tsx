'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import {
  Award,
  ArrowUpRight,
  Briefcase,
  Building2,
  ChevronDown,
  Code2,
  LayoutGrid,
  Lightbulb,
  MapPin,
  Megaphone,
  Menu,
  Palette,
  Search,
  Users,
  Video,
  X,
} from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { hrefFor } from '@/i18n/config';
import { LanguageSwitcher } from './LanguageSwitcher';
import { services } from '@/content/services';
import styles from './Header.module.css';

const serviceIconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Code2,
  Palette,
  Megaphone,
  Video,
  Building2,
  LayoutGrid,
};

type MenuKey = 'about' | 'offer' | 'careers';

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const t = useTranslations('common.nav');
  const tServices = useTranslations('services.items');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loc = locale;

  const aboutItems = useMemo(
    () => [
      { href: hrefFor(loc, 'whoWeAre', '#sobre-vertex'), label: t('aboutVertex'), description: loc === 'es' ? 'Nuestra visión y forma de transformar' : 'Our vision and approach to transformation', icon: Award },
      { href: hrefFor(loc, 'whoWeAre', '#por-que-vertex'), label: t('whyVertex'), description: loc === 'es' ? 'Lo que diferencia nuestro trabajo' : 'What makes our work different', icon: Lightbulb },
      { href: hrefFor(loc, 'whoWeAre', '#nuestro-talento'), label: t('ourTalent'), description: loc === 'es' ? 'Personas, cultura y capacidades' : 'People, culture and capabilities', icon: Users },
      { href: hrefFor(loc, 'whoWeAre', '#alcance-regional'), label: t('ourReach'), description: loc === 'es' ? 'Cobertura en Colombia y Latinoamérica' : 'Coverage across Colombia and Latin America', icon: MapPin },
      { href: hrefFor(loc, 'whoWeAre', '#ubicaciones'), label: t('locations'), description: loc === 'es' ? 'Conoce nuestros puntos de presencia' : 'Explore our points of presence', icon: Building2 },
    ],
    [loc, t]
  );

  const careerItems = useMemo(
    () => [
      { href: hrefFor(loc, 'jobs'), label: t('searchJobs'), description: loc === 'es' ? 'Vacantes disponibles en Vertex' : 'Open roles at Vertex', icon: Search },
      { href: hrefFor(loc, 'careers', '#ambiente-trabajo'), label: t('workEnvironment'), description: loc === 'es' ? 'Así vivimos nuestra cultura' : 'How we experience our culture', icon: Users },
      { href: hrefFor(loc, 'careers', '#proceso-reclutamiento'), label: t('recruitmentProcess'), description: loc === 'es' ? 'Conoce cada etapa del proceso' : 'Learn about every stage', icon: Briefcase },
    ],
    [loc, t]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMenu(null);
        setIsMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const isActive = (href: string) => {
    const cleanHref = href.split('#')[0];
    return pathname === cleanHref || (cleanHref !== `/${locale}` && pathname.startsWith(cleanHref));
  };

  const openMenu = (menu: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 160);
  };

  const navTone = isScrolled || isMobileOpen ? 'light' : 'dark';
  const linkClass = (href: string) =>
    `site-nav-link relative flex min-h-11 items-center rounded-xl text-[0.82rem] font-semibold transition-colors xl:text-[0.88rem] ${
      navTone === 'light'
        ? 'text-vertex-ink hover:bg-vertex-lightSubtle hover:text-vertex-apexTeal'
        : 'text-white/90 hover:bg-white/10 hover:text-white'
    } ${isActive(href) ? (navTone === 'light' ? 'bg-vertex-lightSubtle text-vertex-apexTeal' : 'bg-white/12 text-white') : ''}`;

  return (
    <header
      data-scrolled={isScrolled || isMobileOpen}
      className={`site-header fixed left-0 right-0 top-0 z-50 h-[var(--vx-header-height)] transition-all duration-300 ${
        isScrolled || isMobileOpen
          ? 'border-b border-vertex-ink/10 bg-white/95 shadow-sm backdrop-blur-xl'
          : 'border-b border-white/10 bg-vertex-darkBg/55 backdrop-blur-md'
      }`}
    >
      <div className="vx-container flex h-full items-center justify-between gap-5">
        <Link
          href={hrefFor(locale, 'home')}
          className="relative z-50 flex shrink-0 rounded-md"
          aria-label={locale === 'es' ? 'Vertex, inicio' : 'Vertex, home'}
        >
          <Image
            src="/images/vertex-logo.png"
            alt="Vertex"
            width={146}
            height={44}
            priority
            className={`h-[34px] w-auto transition ${navTone === 'dark' ? 'brightness-0 invert' : ''}`}
          />
        </Link>

        <nav
          className="site-main-nav hidden items-center xl:flex"
          aria-label={locale === 'es' ? 'Navegación principal' : 'Primary navigation'}
        >
          <Link
            href={hrefFor(locale, 'home')}
            className={linkClass(hrefFor(locale, 'home'))}
            aria-current={isActive(hrefFor(locale, 'home')) ? 'page' : undefined}
          >
            {t('home')}
          </Link>

          <DesktopMenu
            id="about"
            label={t('whoWeAre')}
            href={hrefFor(locale, 'whoWeAre')}
            isOpen={activeMenu === 'about'}
            isActive={isActive(hrefFor(locale, 'whoWeAre'))}
            className={linkClass(hrefFor(locale, 'whoWeAre'))}
            description={loc === 'es' ? 'Conoce nuestra visión, alcance regional y el talento que impulsa cada solución.' : 'Discover our vision, regional reach and the talent behind every solution.'}
            viewLabel={loc === 'es' ? 'Ver Quiénes somos' : 'View About us'}
            onOpen={() => openMenu('about')}
            onClose={scheduleClose}
            onNavigate={() => setActiveMenu(null)}
          >
            <div className={`${styles.menuGrid} ${styles.menuGridSingle}`}>
              {aboutItems.map((item) => (
                <MegaMenuItem key={item.href} {...item} onClick={() => setActiveMenu(null)} />
              ))}
            </div>
          </DesktopMenu>

          <DesktopMenu
            id="offer"
            label={t('ourOffer')}
            href={hrefFor(locale, 'ourOffer')}
            isOpen={activeMenu === 'offer'}
            isActive={isActive(hrefFor(locale, 'ourOffer'))}
            className={linkClass(hrefFor(locale, 'ourOffer'))}
            description={loc === 'es' ? 'Capacidades especializadas que conectan estrategia, tecnología, diseño y comunicación.' : 'Specialized capabilities connecting strategy, technology, design and communication.'}
            viewLabel={loc === 'es' ? 'Explorar toda la oferta' : 'Explore the full offer'}
            onOpen={() => openMenu('offer')}
            onClose={scheduleClose}
            onNavigate={() => setActiveMenu(null)}
          >
            <div className={`${styles.menuGrid} ${styles.menuGridOffer}`}>
              <MegaMenuItem href={hrefFor(locale, 'ourOffer')} label={t('ourOffer')} description={loc === 'es' ? 'Panorama completo de soluciones y capacidades' : 'A complete overview of solutions and capabilities'} icon={LayoutGrid} onClick={() => setActiveMenu(null)} />
              {services.map((service) => {
                const Icon = serviceIconMap[service.icon] || Lightbulb;
                return (
                  <MegaMenuItem
                    key={service.id}
                    href={hrefFor(locale, 'services', `/${service.slug[locale]}`)}
                    label={tServices(`${service.id}.title`)}
                    description={service.capabilities[loc][0]}
                    icon={Icon}
                    onClick={() => setActiveMenu(null)}
                  />
                );
              })}
            </div>
          </DesktopMenu>

          <Link
            href={hrefFor(locale, 'projects')}
            className={linkClass(hrefFor(locale, 'projects'))}
            aria-current={isActive(hrefFor(locale, 'projects')) ? 'page' : undefined}
          >
            {t('projects')}
          </Link>

          <DesktopMenu
            id="careers"
            label={t('careers')}
            href={hrefFor(locale, 'careers')}
            isOpen={activeMenu === 'careers'}
            isActive={isActive(hrefFor(locale, 'careers'))}
            className={linkClass(hrefFor(locale, 'careers'))}
            description={loc === 'es' ? 'Oportunidades para crecer, colaborar y construir soluciones con propósito.' : 'Opportunities to grow, collaborate and build purposeful solutions.'}
            viewLabel={loc === 'es' ? 'Conocer la experiencia Vertex' : 'Discover the Vertex experience'}
            onOpen={() => openMenu('careers')}
            onClose={scheduleClose}
            onNavigate={() => setActiveMenu(null)}
          >
            <div className={`${styles.menuGrid} ${styles.menuGridSingle}`}>
              {careerItems.map((item) => (
                <MegaMenuItem key={item.href} {...item} onClick={() => setActiveMenu(null)} />
              ))}
            </div>
          </DesktopMenu>

          <Link
            href={hrefFor(locale, 'contact')}
            className={linkClass(hrefFor(locale, 'contact'))}
            aria-current={isActive(hrefFor(locale, 'contact')) ? 'page' : undefined}
          >
            {t('contact')}
          </Link>
        </nav>

        <div className="hidden items-center gap-3.5 xl:flex">
          <LanguageSwitcher locale={locale} isScrolled={navTone === 'light'} />
          <Link href={hrefFor(locale, 'contact')} className="vx-btn vx-btn-primary !h-11 !min-h-11 !px-5 !text-sm">
            {t('letsTalk')}
          </Link>
        </div>

        <button
          type="button"
          className={`relative z-50 flex min-h-11 min-w-11 items-center justify-center rounded-lg ${
            navTone === 'light' ? 'text-vertex-ink hover:bg-vertex-lightSubtle' : 'text-white hover:bg-white/10'
          } xl:hidden`}
          onClick={() => setIsMobileOpen((value) => !value)}
          aria-label={
            isMobileOpen
              ? locale === 'es' ? 'Cerrar menú' : 'Close menu'
              : locale === 'es' ? 'Abrir menú' : 'Open menu'
          }
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 top-[var(--vx-header-height)] z-40 xl:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-vertex-ink/45 backdrop-blur-sm"
            aria-label={locale === 'es' ? 'Cerrar menú' : 'Close menu'}
            onClick={() => setIsMobileOpen(false)}
          />
          <nav
            id="mobile-navigation"
            className="absolute right-0 top-0 flex h-[calc(100dvh-var(--vx-header-height))] w-full max-w-md flex-col overflow-y-auto bg-white px-5 py-5 shadow-2xl"
            aria-label={locale === 'es' ? 'Navegación móvil' : 'Mobile navigation'}
          >
            <Link href={hrefFor(locale, 'home')} onClick={() => setIsMobileOpen(false)} className="mobile-nav-link">
              {t('home')}
            </Link>
            <MobileGroup locale={locale} title={t('whoWeAre')} href={hrefFor(locale, 'whoWeAre')} items={aboutItems} onNavigate={() => setIsMobileOpen(false)} />
            <MobileGroup
              locale={locale}
              title={t('ourOffer')}
              href={hrefFor(locale, 'ourOffer')}
              items={[
                { href: hrefFor(locale, 'ourOffer'), label: t('ourOffer'), icon: LayoutGrid },
                ...services.map((service) => ({
                  href: hrefFor(locale, 'services', `/${service.slug[locale]}`),
                  label: tServices(`${service.id}.title`),
                  description: service.capabilities[loc][0],
                  icon: serviceIconMap[service.icon] || Lightbulb,
                })),
              ]}
              onNavigate={() => setIsMobileOpen(false)}
            />
            <Link href={hrefFor(locale, 'projects')} onClick={() => setIsMobileOpen(false)} className="mobile-nav-link">
              {t('projects')}
            </Link>
            <MobileGroup locale={locale} title={t('careers')} href={hrefFor(locale, 'careers')} items={careerItems} onNavigate={() => setIsMobileOpen(false)} />
            <Link href={hrefFor(locale, 'contact')} onClick={() => setIsMobileOpen(false)} className="mobile-nav-link">
              {t('contact')}
            </Link>
            <div className="mt-auto border-t border-vertex-ink/10 pt-5">
              <LanguageSwitcher locale={locale} isScrolled isMobile />
              <Link href={hrefFor(locale, 'contact')} onClick={() => setIsMobileOpen(false)} className="vx-btn vx-btn-primary mt-4 w-full">
                {t('letsTalk')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function DesktopMenu({
  id,
  label,
  href,
  isOpen,
  isActive,
  className,
  description,
  viewLabel,
  onOpen,
  onClose,
  onNavigate,
  children,
}: {
  id: string;
  label: string;
  href: string;
  isOpen: boolean;
  isActive: boolean;
  className: string;
  description: string;
  viewLabel: string;
  onOpen: () => void;
  onClose: () => void;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.menuRoot} onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link
        href={href}
        className={className}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={`${id}-menu`}
        aria-current={isActive ? 'page' : undefined}
        onFocus={onOpen}
      >
        {label}
        <ChevronDown
          className={`ml-1.5 h-3.5 w-3.5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </Link>
      {isOpen && (
        <div id={`${id}-menu`} className={styles.menuPopover} onFocus={onOpen}>
          <div className={`${styles.menuPanel} ${id === 'offer' ? styles.menuPanelWide : styles.menuPanelStandard}`}>
            <Link href={href} onClick={onNavigate} className={styles.menuHeader}>
              <div>
                <span className={styles.menuEyebrow}>{label}</span>
                <p className={styles.menuDescription}>{description}</p>
              </div>
              <span className={styles.menuHeaderIcon} aria-hidden="true">
                <ArrowUpRight />
              </span>
            </Link>
            {children}
            <Link href={href} onClick={onNavigate} className={styles.menuFooter}>
              <span>{viewLabel}</span>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function MegaMenuItem({
  href,
  label,
  description,
  icon: Icon,
  onClick,
}: {
  href: string;
  label: string;
  description?: string;
  icon: React.ElementType;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={styles.menuItem}
    >
      <span className={styles.menuItemIcon}>
        <Icon />
      </span>
      <span className={styles.menuItemCopy}>
        <strong>{label}</strong>
        {description && <small>{description}</small>}
      </span>
      <ArrowUpRight className={styles.menuItemArrow} aria-hidden="true" />
    </Link>
  );
}

function MobileGroup({
  locale,
  title,
  href,
  items,
  onNavigate,
}: {
  locale: Locale;
  title: string;
  href: string;
  items: Array<{ href: string; label: string; description?: string; icon: React.ElementType }>;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-vertex-ink/8 py-2">
      <div className="flex items-center gap-2">
        <Link href={href} onClick={onNavigate} className="mobile-nav-link flex-1 !border-0 !py-3">
          {title}
        </Link>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-vertex-apexTeal hover:bg-vertex-lightSubtle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={`${open ? (locale === 'es' ? 'Cerrar' : 'Close') : (locale === 'es' ? 'Abrir' : 'Open')} ${title}`}
        >
          <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="grid gap-1 pb-3 pl-2">
          {items.map((item) => (
            <MegaMenuItem key={item.href} {...item} onClick={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
}
