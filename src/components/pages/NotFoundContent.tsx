'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, Home, Mail, Phone, Search } from 'lucide-react';
import { hrefFor, type Locale } from '@/i18n/config';
import { OFFICIAL_PHONE_NUMBERS } from '@/content/locations';

interface NotFoundContentProps {
  locale?: string;
}

export function NotFoundContent({ locale = 'es' }: NotFoundContentProps) {
  const isEs = locale !== 'en';
  const loc = (locale === 'en' ? 'en' : 'es') as Locale;

  return (
    <div className="relative min-h-[calc(100vh-var(--vx-header-height)-12rem)] flex items-center justify-center py-16 px-4 overflow-hidden vx-bg-dark">
      {/* Background Wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
        style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
        aria-hidden="true"
      />

      {/* Decorative Radial Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vertex-prismBlue/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-vertex-apexTeal/20 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        {/* Vertex Symbol Branding */}
        <div className="mb-6 flex justify-center">
          <div className="relative p-3 rounded-2xl border border-vertex-prismBlue/30 bg-vertex-darkElevated/60 backdrop-blur-md shadow-lg shadow-black/20">
            <Image
              src="/images/vertex-symbol.png"
              alt="Vertex"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              priority
            />
          </div>
        </div>

        {/* 404 Number Display */}
        <div className="relative inline-block mb-3">
          <span className="text-8xl sm:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-vertex-polarWhite via-vertex-prismBlue to-vertex-facetBlue select-none">
            404
          </span>
          <span className="absolute -top-1 -right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-vertex-apexTeal/80 border border-vertex-prismBlue/40 text-vertex-prismBlue backdrop-blur-sm">
            {isEs ? 'Error de ruta' : 'Route error'}
          </span>
        </div>

        {/* Heading & Explanation */}
        <h1 className="text-3xl sm:text-4xl font-bold text-vertex-polarWhite mb-4 tracking-tight">
          {isEs ? 'Página no encontrada' : 'Page not found'}
        </h1>
        <p className="text-base sm:text-lg text-vertex-facetIce/85 max-w-lg mx-auto mb-8 leading-relaxed">
          {isEs
            ? 'La página que buscas pudo haber sido movida, eliminada o no existe.'
            : 'The page you are looking for may have been moved, removed, or does not exist.'}
        </p>

        {/* Primary Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link href={hrefFor(loc, 'home')} className="vx-btn vx-btn-light !px-8">
            <Home className="w-4 h-4 mr-1" aria-hidden="true" />
            {isEs ? 'Volver al inicio' : 'Return to homepage'}
          </Link>
          <Link href={hrefFor(loc, 'contact')} className="vx-btn vx-btn-ghost !px-6">
            <Mail className="w-4 h-4 mr-1" aria-hidden="true" />
            {isEs ? 'Contactar a Vertex' : 'Contact Vertex'}
          </Link>
        </div>

        {/* Secondary Exploration Suggestions */}
        <div className="pt-8 border-t border-vertex-facetIce/15">
          <p className="text-xs font-semibold uppercase tracking-wider text-vertex-prismBlue/90 mb-4">
            {isEs ? '¿Buscabas alguna de estas secciones?' : 'Were you looking for one of these sections?'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Link
              href={hrefFor(loc, 'services')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border border-vertex-facetIce/20 bg-white/5 text-vertex-facetIce hover:text-vertex-polarWhite hover:border-vertex-prismBlue hover:bg-vertex-prismBlue/15 transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-vertex-prismBlue" aria-hidden="true" />
              {isEs ? 'Nuestra oferta de servicios' : 'Our services'}
            </Link>
            <Link
              href={hrefFor(loc, 'projects')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border border-vertex-facetIce/20 bg-white/5 text-vertex-facetIce hover:text-vertex-polarWhite hover:border-vertex-prismBlue hover:bg-vertex-prismBlue/15 transition-all"
            >
              <Search className="w-3.5 h-3.5 text-vertex-prismBlue" aria-hidden="true" />
              {isEs ? 'Proyectos y casos de éxito' : 'Projects and case studies'}
            </Link>
            <Link
              href={hrefFor(loc, 'whoWeAre')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border border-vertex-facetIce/20 bg-white/5 text-vertex-facetIce hover:text-vertex-polarWhite hover:border-vertex-prismBlue hover:bg-vertex-prismBlue/15 transition-all"
            >
              <ArrowRight className="w-3.5 h-3.5 text-vertex-prismBlue" aria-hidden="true" />
              {isEs ? 'Quiénes somos' : 'About us'}
            </Link>
          </div>

          {/* Quick Telephone Help */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-vertex-facetIce/70">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-vertex-prismBlue" aria-hidden="true" />
              {isEs ? 'Atención telefónica:' : 'Phone support:'}
            </span>
            {OFFICIAL_PHONE_NUMBERS.map((phone) => (
              <a
                key={phone.link}
                href={phone.link}
                className="font-medium text-vertex-polarWhite hover:text-vertex-prismBlue transition-colors underline underline-offset-4 decoration-vertex-prismBlue/40"
              >
                {phone.display}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
