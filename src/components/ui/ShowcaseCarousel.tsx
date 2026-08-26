'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import type { ShowcaseItem } from '@/content/showcase';
import styles from './ShowcaseCarousel.module.css';

interface ShowcaseCarouselProps {
  items: ShowcaseItem[];
  locale: 'es' | 'en';
  compact?: boolean;
}

export function ShowcaseCarousel({ items, locale, compact = false }: ShowcaseCarouselProps) {
  const [active, setActive] = useState(0);
  const activeItem = items[active];

  const labels = useMemo(
    () => ({
      region: locale === 'es' ? 'Soluciones en acción' : 'Solutions in action',
      active: locale === 'es' ? 'Diapositiva actual' : 'Current slide',
      show: locale === 'es' ? 'Mostrar solución' : 'Show solution',
    }),
    [locale]
  );

  useEffect(() => {
    if (items.length < 2) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [items.length]);

  return (
    <div
      className={`${styles.carousel} ${compact ? styles.compact : styles.expanded}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.region}
    >
      <div className={styles.media} aria-hidden="true">
        {items.map((item, index) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.title[locale]}
            fill
            priority={index === 0}
            sizes={compact ? '(min-width: 1024px) 44vw, 100vw' : '(min-width: 1024px) 52vw, 100vw'}
            className={`${styles.image} ${index === active ? styles.imageActive : ''}`}
          />
        ))}
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.solutionLabel}>
        <span aria-hidden="true" />
        {locale === 'es' ? 'Solución en acción' : 'Solution in action'}
      </div>

      <div className={styles.content} key={activeItem.id}>
        <span className={styles.eyebrow}>
          {activeItem.eyebrow[locale]}
        </span>
        <h3 className={styles.title}>
          {activeItem.title[locale]}
        </h3>
        <p className={styles.description}>
          {activeItem.description[locale]}
        </p>
        <div className={styles.tags}>
          {activeItem.tags[locale].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className={styles.pagination} aria-label={labels.region}>
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(index)}
            className={`${styles.dot} ${index === active ? styles.dotActive : ''}`}
            aria-label={`${labels.show} ${index + 1}: ${item.title[locale]}`}
            aria-current={index === active ? 'true' : undefined}
          >
            <span className={styles.srOnly}>{index === active ? labels.active : item.title[locale]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
