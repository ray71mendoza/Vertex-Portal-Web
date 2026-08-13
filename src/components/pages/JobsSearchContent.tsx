'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Search, MapPin, Briefcase, Clock, Filter, X, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import {
  jobOpenings, jobAreaLabels, modalityLabels, contractTypeLabels,
  getUniqueCountries, JobArea, JobModality, JobContractType
} from '@/content/jobs';

export function JobsSearchContent({ locale }: { locale: string }) {
  const t = useTranslations('jobs');
  const tCommon = useTranslations('common');
  const prefix = `/${locale}`;
  const loc = locale as 'es' | 'en';

  const [keyword, setKeyword] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('');
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
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="vx-section vx-bg-subtle relative overflow-hidden" aria-label="Jobs Hero">
        <div className="vx-container">
          <AnimatedReveal>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold text-vertex-apexTeal uppercase tracking-wider mb-2">
                {tCommon('nav.jobs')}
              </div>
              <h1 className="text-vertex-ink text-4xl md:text-5xl font-bold mb-4">
                {t('hero.title')}
              </h1>
              <p className="text-vertex-facetTeal text-lg md:text-xl leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="vx-section">
        <div className="vx-container">
          <AnimatedReveal>
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-md mb-8">
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
            <div className="space-y-4">
              {filteredJobs.map((job, idx) => (
                <AnimatedReveal key={job.id} delay={Math.min(idx + 1, 3)}>
                  <div className="vx-card p-6 border border-gray-200/80 hover:border-vertex-apexTeal/40 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2 max-w-3xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-vertex-apexTeal/10 text-vertex-apexTeal font-semibold">
                            {job.areaLabel[loc]}
                          </span>
                          {job.isDemo && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-mono">
                              {t('search.demo')}
                            </span>
                          )}
                        </div>
                        <h2 className="text-xl font-bold text-vertex-ink">
                          <Link href={`${prefix}/${loc === 'es' ? 'empleos' : 'jobs'}/${job.slug}`} className="hover:text-vertex-apexTeal transition-colors">
                            {job.title[loc]}
                          </Link>
                        </h2>
                        <p className="text-sm text-vertex-facetBlue leading-relaxed">{job.summary[loc]}</p>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-vertex-facetTeal pt-1">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-vertex-quartzGrey" />
                            {job.city}, {job.country[loc]}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 text-vertex-quartzGrey" />
                            {modalityLabels[job.modality][loc]}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-vertex-quartzGrey" />
                            {contractTypeLabels[job.contractType][loc]}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 flex items-center">
                        <Link
                          href={`${prefix}/${loc === 'es' ? 'empleos' : 'jobs'}/${job.slug}`}
                          className="vx-btn vx-btn-primary w-full md:w-auto !py-2.5 !px-5 !text-sm"
                        >
                          {tCommon('cta.viewOpportunity')}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
