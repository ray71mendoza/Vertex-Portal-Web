'use client';

import { ReactNode } from 'react';
import { AnimatedReveal } from './AnimatedReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <AnimatedReveal>
      <div
        className={`vx-gap-section-content ${
          isCenter ? 'text-center mx-auto' : 'text-left'
        } max-w-3xl ${className}`}
      >
        {/* Eyebrow Label */}
        {eyebrow && (
          <div className="section-eyebrow-wrap inline-flex items-center gap-2 vx-gap-eyebrow-heading">
            <span
              className={`section-eyebrow text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full ${
                isDark
                  ? 'bg-white/10 text-vertex-prismBlue border border-white/15'
                  : 'bg-vertex-apexTeal/10 text-vertex-apexTeal'
              }`}
            >
              {eyebrow}
            </span>
          </div>
        )}

        {/* Heading H2 */}
        <h2
          className={`section-title vx-h2 ${
            isDark ? 'text-white' : 'text-vertex-ink'
          } leading-tight`}
        >
          {title}
        </h2>

        {/* Subheading / Subtitle */}
        {subtitle && (
          <p
            className={`section-subtitle vx-gap-heading-subheading text-lg md:text-xl font-medium leading-relaxed ${
              isCenter ? 'mx-auto' : ''
            } max-w-2xl ${
              isDark ? 'text-vertex-facetIce/90' : 'text-vertex-facetTeal'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </AnimatedReveal>
  );
}
