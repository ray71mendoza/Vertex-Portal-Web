'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Bot, Layers3, MapPinned } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { ShowcaseCarousel } from '@/components/ui/ShowcaseCarousel';
import { homeShowcaseItems } from '@/content/showcase';
import { hrefFor, type Locale } from '@/i18n/config';

interface HeroHomeProps {
  locale: string;
}

export function HeroHome({ locale }: HeroHomeProps) {
  const t = useTranslations('home.hero');
  const tCta = useTranslations('common.cta');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loc = locale as Locale;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const initNodes = () => {
      const count = Math.min(Math.floor(canvas.offsetWidth / 72), 24);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      nodes.forEach((node, index) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.offsetWidth) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.offsetHeight) node.vy *= -1;

        nodes.slice(index + 1).forEach((other) => {
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 190) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(114, 198, 232, ${0.14 * (1 - dist / 190)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      animationId = requestAnimationFrame(draw);
    };

    resize();
    initNodes();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="home-hero vx-bg-dark relative overflow-hidden" aria-label="Hero">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(114,198,232,0.3),transparent_28%),radial-gradient(circle_at_70%_80%,rgba(45,99,110,0.22),transparent_38%),linear-gradient(112deg,#06191e_0%,rgba(7,26,31,0.985)_50%,rgba(11,69,81,0.76)_100%)]"
        aria-hidden="true"
      />
      <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full opacity-55" aria-hidden="true" />

      <div className="absolute -right-24 top-28 h-80 w-80 rounded-full border border-white/8" aria-hidden="true" />
      <div className="absolute -right-6 top-48 h-52 w-52 rounded-full border border-vertex-prismBlue/12" aria-hidden="true" />

      <div
        className="home-hero-container relative z-10 vx-container w-full"
        style={{ paddingTop: 'calc(var(--vx-header-height) + 52px)' }}
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="max-w-3xl lg:col-span-7">
            <AnimatedReveal>
              <div className="home-hero-eyebrow inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-vertex-prismBlue shadow-[0_0_12px_rgba(114,198,232,0.9)]" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-vertex-prismBlue">
                  {t('tag')}
                </span>
              </div>

              <h1 className="vx-h1-home max-w-[18.5ch] text-left font-bold text-white sm:max-w-[19ch]">
                {t('title')}
              </h1>

              <p className="home-hero-subtitle max-w-[58ch] text-left text-base font-medium leading-[1.68] text-vertex-facetIce sm:text-lg">
                {t('subtitle')}
              </p>

              <div className="home-hero-actions flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
                <Link href={hrefFor(loc, 'services')} className="vx-btn vx-btn-light home-primary-cta !h-[52px] !px-6">
                  {tCta('discoverSolutions')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={hrefFor(loc, 'contact')} className="vx-btn vx-btn-ghost !h-[52px] !px-6">
                  {tCta('letsTalk')}
                </Link>
              </div>

              <div className="home-hero-metrics grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                {[
                  { icon: Bot, value: 'IA', label: loc === 'es' ? 'aplicada a procesos' : 'applied to processes' },
                  { icon: Layers3, value: '7', label: loc === 'es' ? 'familias de servicios' : 'service families' },
                  { icon: MapPinned, value: 'LATAM', label: loc === 'es' ? 'visión regional' : 'regional vision' },
                ].map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={metric.value}
                      className="home-metric-card flex items-center rounded-2xl border border-white/12 bg-white/[0.075] backdrop-blur-md"
                    >
                      <span className="home-metric-icon flex shrink-0 items-center justify-center rounded-xl bg-vertex-prismBlue/12 text-vertex-prismBlue">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xl font-bold leading-none text-white">{metric.value}</span>
                        <span className="mt-1.5 block text-[0.72rem] font-semibold uppercase leading-[1.4] tracking-[0.09em] text-vertex-facetIce/80">
                          {metric.label}
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </AnimatedReveal>
          </div>

          <div className="lg:col-span-5">
            <AnimatedReveal delay={2}>
              <div className="home-hero-carousel">
                <ShowcaseCarousel items={homeShowcaseItems} locale={loc} compact />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
