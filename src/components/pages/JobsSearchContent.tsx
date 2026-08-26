'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Search, MapPin, Briefcase, Clock, X, ArrowRight } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import {
  jobOpenings, jobAreaLabels, modalityLabels, contractTypeLabels,
  getUniqueCountries
} from '@/content/jobs';
import { hrefFor, type Locale } from '@/i18n/config';
import styles from './JobsSearchContent.module.css';

export function JobsSearchContent({ locale, initialArea = '' }: { locale: string; initialArea?: string }) {
  const t = useTranslations('jobs');
  const tCommon = useTranslations('common');
  const loc = locale as Locale;

  const [keyword, setKeyword] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>(initialArea);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedModality, setSelectedModality] = useState<string>('');
  const [selectedContract, setSelectedContract] = useState<string>('');

  const countries = useMemo(() => getUniqueCountries(loc), [loc]);

  const filteredJobs = useMemo(() => {
    return jobOpenings.filter((job) => {
      if (!job.isOpen) return false;
      if (keyword) {
        const kw = keyword.toLowerCase();
        const titleMatch = job.title[loc].toLowerCase().includes(kw);
        const summaryMatch = job.summary[loc].toLowerCase().includes(kw);
        const areaMatch = job.areaLabel[loc].toLowerCase().includes(kw);
        if (!titleMatch && !summaryMatch && !areaMatch) return false;
      }
      if (selectedArea && job.area !== selectedArea) return false;
      if (selectedCountry && job.country[loc] !== selectedCountry) return false;
      if (selectedModality && job.modality !== selectedModality) return false;
      if (selectedContract && job.contractType !== selectedContract) return false;
      return true;
    });
  }, [keyword, selectedArea, selectedCountry, selectedModality, selectedContract, loc]);

  const hasFilters = Boolean(keyword || selectedArea || selectedCountry || selectedModality || selectedContract);

  const clearFilters = () => {
    setKeyword('');
    setSelectedArea('');
    setSelectedCountry('');
    setSelectedModality('');
    setSelectedContract('');
  };

  return (
    <div className={`${styles.page} pt-[var(--vx-header-height)]`}>
      {/* Hero */}
      <section className={styles.hero} aria-label="Jobs Hero">
        <div className={`${styles.heroContainer} vx-container`}>
          <AnimatedReveal>
            <div className={styles.heroCopy}>
              <div className={styles.heroEyebrow}>
                {tCommon('nav.jobs')}
              </div>
              <h1 className={styles.heroTitle}>
                {t('hero.title')}
              </h1>
              <p className={styles.heroSubtitle}>
                {t('hero.subtitle')}
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Search & Filters */}
      <section className={styles.listingSection}>
        <div className="vx-container">
          <AnimatedReveal>
            <div className={styles.filterPanel}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Keyword search input */}
                <div className="md:col-span-4 relative">
                  <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-vertex-quartzGrey" />
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder={t('search.placeholder')}
                    className="vx-input !pl-10 !h-11"
                  />
                </div>

                {/* Area filter */}
                <div className="md:col-span-2">
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="vx-select !h-11 text-sm"
                  >
                    <option value="">{t('search.allAreas')}</option>
                    {Object.entries(jobAreaLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label[loc]}</option>
                    ))}
                  </select>
                </div>

                {/* Country filter */}
                <div className="md:col-span-2">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="vx-select !h-11 text-sm"
                  >
                    <option value="">{t('search.allCountries')}</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Modality filter */}
                <div className="md:col-span-2">
                  <select
                    value={selectedModality}
                    onChange={(e) => setSelectedModality(e.target.value)}
                    className="vx-select !h-11 text-sm"
                  >
                    <option value="">{t('search.allModalities')}</option>
                    {Object.entries(modalityLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label[loc]}</option>
                    ))}
                  </select>
                </div>

                {/* Contract filter */}
                <div className="md:col-span-2">
                  <select
                    value={selectedContract}
                    onChange={(e) => setSelectedContract(e.target.value)}
                    className="vx-select !h-11 text-sm"
                  >
                    <option value="">{t('search.allContracts')}</option>
                    {Object.entries(contractTypeLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label[loc]}</option>
                    ))}
                  </select>
                </div>
              </div>

              {hasFilters && (
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 text-xs">
                  <span className="text-vertex-facetBlue font-medium">
                    {filteredJobs.length} {filteredJobs.length === 1 ? t('search.result') : t('search.results')}
                  </span>
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center gap-1 text-vertex-apexTeal hover:text-vertex-ink font-semibold"
                  >
                    <X className="w-3.5 h-3.5" />
                    {tCommon('cta.clearFilters')}
                  </button>
                </div>
              )}
            </div>
          </AnimatedReveal>

          {/* Job List */}
          {filteredJobs.length === 0 ? (
            <AnimatedReveal>
              <div className="text-center py-16 px-4 border-2 border-dashed border-gray-200 rounded-3xl max-w-xl mx-auto">
                <Briefcase className="w-12 h-12 text-vertex-quartzGrey mx-auto mb-3" />
                <h3 className="text-lg font-bold text-vertex-ink mb-1">{t('search.noResults')}</h3>
                <p className="text-xs text-vertex-facetBlue mb-4">{t('search.noResultsDescription')}</p>
                {hasFilters && (
                  <button onClick={clearFilters} className="vx-btn vx-btn-secondary !text-xs">
                    {tCommon('cta.clearFilters')}
                  </button>
                )}
              </div>
            </AnimatedReveal>
          ) : (
            <div className={styles.jobList}>
              {filteredJobs.map((job, idx) => (
                <AnimatedReveal key={job.id} delay={Math.min(idx + 1, 3)} className={styles.cardReveal}>
                  <article className={styles.jobCard}>
                    <div className={styles.jobLayout}>
                      <div className={styles.jobContent}>
                        <div className={styles.jobTags}>
                          <span className={styles.areaTag}>
                            {job.areaLabel[loc]}
                          </span>
                          {job.isDemo && (
                            <span className={styles.demoTag}>
                              {t('search.demo')}
                            </span>
                          )}
                        </div>
                        <h2 className={styles.jobTitle}>
                          <Link href={hrefFor(loc, 'jobs', `/${job.slug}`)}>
                            {job.title[loc]}
                          </Link>
                        </h2>
                        <p className={styles.jobSummary}>{job.summary[loc]}</p>
                        <div className={styles.jobMeta}>
                          <span className={styles.metaItem}>
                            <MapPin aria-hidden="true" />
                            {job.city}, {job.country[loc]}
                          </span>
                          <span className={styles.metaItem}>
                            <Briefcase aria-hidden="true" />
                            {modalityLabels[job.modality][loc]}
                          </span>
                          <span className={styles.metaItem}>
                            <Clock aria-hidden="true" />
                            {contractTypeLabels[job.contractType][loc]}
                          </span>
                        </div>
                      </div>
                      <div className={styles.jobAction}>
                        <Link
                          href={hrefFor(loc, 'jobs', `/${job.slug}`)}
                          className="vx-btn vx-btn-primary"
                        >
                          {tCommon('cta.viewOpportunity')}
                          <ArrowRight aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </AnimatedReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
