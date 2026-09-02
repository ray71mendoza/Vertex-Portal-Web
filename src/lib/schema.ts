import type { Locale } from '@/i18n/config';
import { OFFICIAL_PHONE_NUMBERS, OFFICIAL_SOCIAL_LINKS } from '@/content/locations';

import type { ServiceData } from '@/content/services';
import type { Project } from '@/content/projects';
import type { JobOpening } from '@/content/jobs';


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vertex.com.co';

export function getOrganizationSchema(locale: Locale) {
  const isEs = locale === 'es';

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'VERTEX S.A.S.',
    alternateName: 'Vertex',
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/images/vertex-logo.png`,
    image: `${SITE_URL}/images/vertex-wallpaper-dark.png`,
    description: isEs
      ? 'Empresa de tecnología estratégica, desarrollo de software a la medida, transformación digital, inteligencia artificial y comunicación en Colombia y Latinoamérica.'
      : 'Strategic technology, custom software development, digital transformation, artificial intelligence, and corporate communications in Colombia and Latin America.',
    email: 'gerenciavertexsas@gmail.com',
    telephone: OFFICIAL_PHONE_NUMBERS.map((p) => p.display).join(', '),
    sameAs: [
      OFFICIAL_SOCIAL_LINKS.linkedin,
      OFFICIAL_SOCIAL_LINKS.instagram,
    ].filter(Boolean),
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Calle 93 #11A-28, Oficina 401',
        addressLocality: 'Bogotá',
        addressRegion: 'Cundinamarca',
        addressCountry: 'CO',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Centro Histórico',
        addressLocality: 'Cartagena de Indias',
        addressRegion: 'Bolívar',
        addressCountry: 'CO',
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Country', name: 'Mexico' },
      { '@type': 'GeoShape', name: 'Latin America' },
    ],
  };
}

export function getWebSiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/${locale}`,
    name: 'VERTEX',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: locale === 'es' ? 'es-CO' : 'en-US',
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function getServiceSchema(
  service: ServiceData,
  locale: Locale,
  serviceTitle: string,
  serviceDescription: string
) {
  const currentSlug = service.slug[locale];
  const basePath = locale === 'es' ? 'servicios' : 'services';
  const serviceUrl = `${SITE_URL}/${locale}/${basePath}/${currentSlug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: serviceTitle,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: [
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'GeoShape', name: 'Latin America' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: serviceTitle,
      itemListElement: (service.capabilities[locale] || []).map((cap, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: cap,
        },
        position: idx + 1,
      })),
    },
  };
}

export function getProjectSchema(project: Project, locale: Locale) {
  const currentSlug = project.slug[locale];
  const basePath = locale === 'es' ? 'proyectos' : 'projects';
  const projectUrl = `${SITE_URL}/${locale}/${basePath}/${currentSlug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${projectUrl}#work`,
    name: project.title[locale],
    description: project.description[locale],
    url: projectUrl,
    image: project.coverImage.startsWith('http')
      ? project.coverImage
      : `${SITE_URL}${project.coverImage}`,
    author: {
      '@id': `${SITE_URL}/#organization`,
    },
    datePublished: project.publishedAt,
    inLanguage: locale === 'es' ? 'es-CO' : 'en-US',
  };
}

export function getJobPostingSchema(job: JobOpening, locale: Locale) {
  const currentSlug = job.slug;
  const basePath = locale === 'es' ? 'empleos' : 'jobs';
  const jobUrl = `${SITE_URL}/${locale}/${basePath}/${currentSlug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title[locale],
    description: `${job.summary[locale]} ${job.description[locale]}`,
    datePosted: job.publishedAt,
    validThrough: '2026-12-31T23:59:59Z',
    employmentType: job.contractType === 'full-time' ? 'FULL_TIME' : 'OTHER',
    hiringOrganization: {
      '@id': `${SITE_URL}/#organization`,
      name: 'VERTEX S.A.S.',
      sameAs: SITE_URL,
      logo: `${SITE_URL}/images/vertex-logo.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.city || 'Bogotá',
        addressRegion: 'Cundinamarca',
        addressCountry: 'CO',
      },
    },
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'Colombia',
    },
    jobLocationType: job.modality === 'remote' ? 'TELECOMMUTE' : undefined,
    url: jobUrl,
  };
}

