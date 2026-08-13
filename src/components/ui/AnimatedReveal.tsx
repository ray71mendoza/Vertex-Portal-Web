'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface AnimatedRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedReveal({ children, className = '', delay = 0 }: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      ref.current?.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`vx-reveal ${delay > 0 ? `vx-reveal-delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}
