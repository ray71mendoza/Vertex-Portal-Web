'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseMobileAutoCarouselOptions {
  /** Milliseconds between automatic advances. */
  intervalMs?: number;
  /** Max viewport width (px) at which the carousel behavior is active. */
  breakpoint?: number;
  /** How long to pause auto-advance after the user interacts, in ms. */
  pauseAfterInteractionMs?: number;
}

/**
 * Attaches to a horizontally scrollable container and auto-advances it one
 * child at a time, only below `breakpoint`. Any pointer/touch/wheel
 * interaction on the container pauses auto-advance for a while so it never
 * fights a manual swipe, and the next tick always resumes from wherever the
 * user actually scrolled to (no separate index state to desync).
 *
 * Also exposes `isPaused`/`togglePause` so consumers can render an explicit
 * pause/play control (WCAG 2.2.2 requires a way to stop content that moves
 * automatically for more than 5 seconds).
 */
export function useMobileAutoCarousel<T extends HTMLElement>(
  itemCount: number,
  options: UseMobileAutoCarouselOptions = {}
) {
  const ref = useRef<T>(null);
  const { intervalMs = 4200, breakpoint = 640, pauseAfterInteractionMs = 5000 } = options;

  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const togglePause = useCallback(() => setIsPaused((value) => !value), []);

  useEffect(() => {
    const container = ref.current;
    if (!container || itemCount < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    let lastInteraction = 0;

    const markInteraction = () => {
      lastInteraction = Date.now();
    };

    const tick = () => {
      if (!mql.matches) return;
      if (isPausedRef.current) return;
      if (Date.now() - lastInteraction < pauseAfterInteractionMs) return;

      const children = Array.from(container.children) as HTMLElement[];
      if (children.length === 0) return;

      const scrollLeft = container.scrollLeft;
      const currentIndex = children.findIndex((child) => child.offsetLeft >= scrollLeft - 4);
      const atEnd = currentIndex === -1 || currentIndex >= children.length - 1;
      const nextIndex = atEnd ? 0 : currentIndex + 1;

      container.scrollTo({ left: children[nextIndex].offsetLeft, behavior: 'smooth' });
    };

    container.addEventListener('pointerdown', markInteraction, { passive: true });
    container.addEventListener('touchstart', markInteraction, { passive: true });
    container.addEventListener('wheel', markInteraction, { passive: true });

    const timer = window.setInterval(tick, intervalMs);

    return () => {
      window.clearInterval(timer);
      container.removeEventListener('pointerdown', markInteraction);
      container.removeEventListener('touchstart', markInteraction);
      container.removeEventListener('wheel', markInteraction);
    };
  }, [itemCount, intervalMs, breakpoint, pauseAfterInteractionMs]);

  return { ref, isPaused, togglePause };
}
