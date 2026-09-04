'use client';

import Image from 'next/image';
import styles from './ServiceHeroVisual.module.css';

interface ServiceHeroVisualProps {
  image: string;
  alt: string;
  label: string;
  caption: string;
}

export function ServiceHeroVisual({ image, alt, label, caption }: ServiceHeroVisualProps) {
  return (
    <figure className={styles.visual}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 45vw, (min-width: 900px) 50vw, 100vw"
        className={styles.image}
      />
      <div className={styles.scrim} aria-hidden="true" />
      <figcaption className={styles.caption}>
        <span>{label}</span>
        <p>{caption}</p>
      </figcaption>
    </figure>
  );
}
