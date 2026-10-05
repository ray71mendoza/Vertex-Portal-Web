import { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { getVisibleProjects } from '@/content/projects';
import { getOpenJobs } from '@/content/jobs';
import { localizedRoutes, type RouteKey } from '@/i18n/config';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const mainRouteKeys: { key: RouteKey; priority: number; changeFrequency: 'weekly' | 'monthly' | 'daily' }[] = [
    { key: 'home', priority: 1.0, changeFrequency: 'weekly' },
    { key: 'whoWeAre', priority: 0.9, changeFrequency: 'monthly' },
    { key: 'ourOffer', priority: 0.9, changeFrequency: 'monthly' },
    { key: 'services', priority: 0.9, changeFrequency: 'weekly' },
    { key: 'projects', priority: 0.9, changeFrequency: 'weekly' },
    { key: 'contact', priority: 0.9, changeFrequency: 'monthly' },
    { key: 'careers', priority: 0.8, changeFrequency: 'weekly' },
    { key: 'jobs', priority: 0.8, changeFrequency: 'weekly' },
    { key: 'team', priority: 0.7, changeFrequency: 'monthly' },
    { key: 'privacy', priority: 0.3, changeFrequency: 'monthly' },
    { key: 'terms', priority: 0.3, changeFrequency: 'monthly' },
    { key: 'cookies', priority: 0.3, changeFrequency: 'monthly' },
  ];

  const mainEntries: MetadataRoute.Sitemap = [];

  mainRouteKeys.forEach(({ key, priority, changeFrequency }) => {
    const esSegment = localizedRoutes[key].es;
    const enSegment = localizedRoutes[key].en;

    const esUrl = esSegment ? `${SITE_URL}/es/${esSegment}` : `${SITE_URL}/es`;
    const enUrl = enSegment ? `${SITE_URL}/en/${enSegment}` : `${SITE_URL}/en`;

    mainEntries.push({
      url: esUrl,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
        },
      },
    });

    mainEntries.push({
      url: enUrl,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
        },
      },
    });
  });

  // Services
  const serviceEntries: MetadataRoute.Sitemap = [];
  services.forEach((service) => {
    const esUrl = `${SITE_URL}/es/servicios/${service.slug.es}`;
    const enUrl = `${SITE_URL}/en/services/${service.slug.en}`;

    serviceEntries.push({
      url: esUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
        },
      },
    });

    serviceEntries.push({
      url: enUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
        },
      },
    });
  });

  // Projects
  const projectEntries: MetadataRoute.Sitemap = [];
  const visibleProjects = getVisibleProjects();
  visibleProjects.forEach((project) => {
    const esUrl = `${SITE_URL}/es/proyectos/${project.slug.es}`;
    const enUrl = `${SITE_URL}/en/projects/${project.slug.en}`;

    projectEntries.push({
      url: esUrl,
      lastModified: new Date(project.publishedAt || now),
      changeFrequency: 'monthly',
      priority: 0.75,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
        },
      },
    });

    projectEntries.push({
      url: enUrl,
      lastModified: new Date(project.publishedAt || now),
      changeFrequency: 'monthly',
      priority: 0.75,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
        },
      },
    });
  });

  // Open Jobs
  const jobEntries: MetadataRoute.Sitemap = [];
  const openJobs = getOpenJobs();
  openJobs.forEach((job) => {
    const esUrl = `${SITE_URL}/es/empleos/${job.slug}`;
    const enUrl = `${SITE_URL}/en/jobs/${job.slug}`;

    jobEntries.push({
      url: esUrl,
      lastModified: new Date(job.publishedAt || now),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
        },
      },
    });

    jobEntries.push({
      url: enUrl,
      lastModified: new Date(job.publishedAt || now),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
        },
      },
    });
  });

  return [...mainEntries, ...serviceEntries, ...projectEntries, ...jobEntries];
}
