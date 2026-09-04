'use client';

import { Pause, Play } from 'lucide-react';

interface CarouselPauseButtonProps {
  isPaused: boolean;
  onToggle: () => void;
  locale: string;
}

/**
 * Visible only on the mobile breakpoint where useMobileAutoCarousel is active.
 * Satisfies WCAG 2.2.2 (Pause, Stop, Hide) for content that auto-advances.
 */
export function CarouselPauseButton({ isPaused, onToggle, locale }: CarouselPauseButtonProps) {
  const isEs = locale === 'es';
  const label = isPaused
    ? (isEs ? 'Reanudar carrusel' : 'Resume carousel')
    : (isEs ? 'Pausar carrusel' : 'Pause carousel');

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      aria-pressed={isPaused}
      className="sm:hidden mb-2 flex h-8 w-8 items-center justify-center rounded-full border border-vertex-ink/12 bg-white text-vertex-apexTeal shadow-sm ml-auto"
    >
      {isPaused ? <Play className="h-3.5 w-3.5" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5" aria-hidden="true" />}
    </button>
  );
}
