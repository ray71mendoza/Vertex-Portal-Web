'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';

interface HeroHomeProps {
  locale: string;
}

export function HeroHome({ locale }: HeroHomeProps) {
  const t = useTranslations('home.hero');
  const tCta = useTranslations('common.cta');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefix = `/${locale}`;

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
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initNodes = () => {
      const count = Math.min(Math.floor(canvas.offsetWidth / 90), 16);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      for (let i = 0; i < nodes.length; i++) {
        nodes[i].x += nodes[i].vx;
        nodes[i].y += nodes[i].vy;
        if (nodes[i].x < 0 || nodes[i].x > canvas.offsetWidth) nodes[i].vx *= -1;
        if (nodes[i].y < 0 || nodes[i].y > canvas.offsetHeight) nodes[i].vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(114, 198, 232, ${0.1 * (1 - dist / 180)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    initNodes();
    draw();

    window.addEventListener('resize', resize);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-vertex-darkBg"
      aria-label="Hero"
    >
      {/* Background Gradient & Dark Wallpaper */}
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url(/images/vertex-wallpaper-dark.png)' }}
        aria-hidden="true"
      />

      {/* Directional Overlay Gradient to ensure contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-vertex-darkBg via-vertex-darkBg/95 to-transparent z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Animated Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
        aria-hidden="true"
      />

      {/* Hero Layout Container */}
      <div
        className="relative z-10 vx-container w-full py-20 lg:py-32"
        style={{ paddingTop: 'calc(var(--vx-header-height) + 40px)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-8 max-w-3xl">
            <AnimatedReveal>
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-8 backdrop-blur-md">
                <span className="text-vertex-prismBlue text-xs font-bold uppercase tracking-wider">
                  {t('tag')}
                </span>
              </div>

              {/* H1 Title */}
              <h1 className="vx-h1-home text-white mb-6 leading-tight font-bold">
                {t('title')}
              </h1>

              {/* Subtitle Paragraph */}
              <p className="text-vertex-facetIce text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl">
                {t('subtitle')}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href={`${prefix}/${locale === 'es' ? 'servicios' : 'services'}`}
                  className="vx-btn vx-btn-light"
                >
                  {tCta('discoverSolutions')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`${prefix}/${locale === 'es' ? 'contacto' : 'contact'}`}
                  className="vx-btn vx-btn-ghost"
                >
                  {tCta('letsTalk')}
                </Link>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Visual Column — Faceted Symbol Composition */}
          <div className="hidden lg:flex lg:col-span-4 justify-center items-center relative">
            <AnimatedReveal delay={2}>
              <div className="relative w-[320px] h-[320px] flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full bg-vertex-apexTeal/30 blur-3xl"
                  aria-hidden="true"
                />
                <Image
                  src="/images/vertex-symbol.png"
                  alt="Vertex Symbol"
                  width={300}
                  height={300}
                  priority
                  className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(114,198,232,0.3)] animate-pulse"
                  style={{ animationDuration: '6s' }}
                />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
