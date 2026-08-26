'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { ShowcaseCarousel } from '@/components/ui/ShowcaseCarousel';
import { showcaseItems } from '@/content/showcase';
import { hrefFor, type Locale } from '@/i18n/config';

export function InteractiveShowcase({ locale }: { locale: string }) {
  const loc = locale as Locale;

  return (
    <section className="vx-section bg-white">
      <div className="vx-container">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <AnimatedReveal className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-vertex-apexTeal/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-vertex-apexTeal">
              <Sparkles className="h-3.5 w-3.5" />
              {loc === 'es' ? 'Exploración interactiva' : 'Interactive exploration'}
            </span>
            <h2 className="mt-5 text-vertex-ink">
              {loc === 'es'
                ? 'Una muestra visual de cómo Vertex conecta estrategia, producto y comunicación'
                : 'A visual sample of how Vertex connects strategy, product and communication'}
            </h2>
            <p className="mt-5 text-lg font-medium text-vertex-facetTeal">
              {loc === 'es'
                ? 'Usamos imágenes de prueba para representar escenarios de trabajo reales: operaciones con IA, plataformas digitales, sistemas de marca y despliegue regional.'
                : 'We use demo images to represent real work scenarios: AI operations, digital platforms, brand systems and regional deployment.'}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                loc === 'es' ? 'Decisiones con datos' : 'Data-backed decisions',
                loc === 'es' ? 'Experiencias digitales' : 'Digital experiences',
                loc === 'es' ? 'Comunicación de alto impacto' : 'High-impact communication',
                loc === 'es' ? 'Ejecución regional' : 'Regional execution',
              ].map((item) => (
                <div key={item} className="rounded-xl border border-vertex-ink/8 bg-vertex-lightSubtle px-4 py-3 text-sm font-bold text-vertex-ink">
                  {item}
                </div>
              ))}
            </div>
            <Link href={hrefFor(loc, 'ourOffer')} className="vx-btn vx-btn-primary mt-9">
              {loc === 'es' ? 'Explorar la oferta' : 'Explore the offer'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedReveal>

          <AnimatedReveal delay={2} className="lg:col-span-7">
            <ShowcaseCarousel items={showcaseItems} locale={loc} />
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
