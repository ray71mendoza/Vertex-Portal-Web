import { MetadataRoute } from 'next';
import { services } from '@/content/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vertex.com.co'; // Replace with actual production domain when deployed

  const routes = [
    '',
    '/nosotros',
    '/about',
    '/servicios',
    '/services',
    '/proyectos',
    '/projects',
    '/equipo',
    '/team',
    '/contacto',
    '/contact',
    '/privacidad',
    '/privacy',
    '/terminos',
    '/terms',
  ];

  const staticEntries: MetadataRoute.Sitemap = [];

  ['es', 'en'].forEach((locale) => {
    routes.forEach((route) => {
      staticEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  const serviceEntries: MetadataRoute.Sitemap = [];
  services.forEach((service) => {
    ['es', 'en'].forEach((locale) => {
      const slug = service.slug[locale as 'es' | 'en'];
      const basePath = locale === 'es' ? 'servicios' : 'services';
      serviceEntries.push({
        url: `${baseUrl}/${locale}/${basePath}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return [...staticEntries, ...serviceEntries];
}
