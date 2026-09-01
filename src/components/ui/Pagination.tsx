'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  locale: 'es' | 'en';
}

export function Pagination({ currentPage, totalPages, onPageChange, locale }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageList(currentPage, totalPages);

  const goTo = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  return (
    <nav className={styles.pagination} aria-label={locale === 'es' ? 'Paginación de vacantes' : 'Job listings pagination'}>
      <button
        type="button"
        className={styles.navButton}
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label={locale === 'es' ? 'Página anterior' : 'Previous page'}
      >
        <ChevronLeft aria-hidden="true" />
      </button>

      <div className={styles.pageList}>
        {pages.map((page, index) =>
          page === 'ellipsis' ? (
            <span key={`ellipsis-${index}`} className={styles.ellipsis} aria-hidden="true">
              …
            </span>
          ) : (
            <button
              key={page}
              type="button"
              className={styles.pageButton}
              data-active={page === currentPage}
              onClick={() => goTo(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              aria-label={locale === 'es' ? `Ir a la página ${page}` : `Go to page ${page}`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        className={styles.navButton}
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label={locale === 'es' ? 'Página siguiente' : 'Next page'}
      >
        <ChevronRight aria-hidden="true" />
      </button>
    </nav>
  );
}

function getPageList(current: number, total: number): Array<number | 'ellipsis'> {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set<number>([1, total, current, current - 1, current + 1]);
  const sorted = Array.from(pages)
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  const result: Array<number | 'ellipsis'> = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) {
      result.push('ellipsis');
    }
    result.push(sorted[i]);
  }
  return result;
}
