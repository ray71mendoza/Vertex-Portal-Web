import { notFound, redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { services, getServiceBySlug } from '@/content/services';
import { ServiceDetailContent } from '@/components/pages/ServiceDetailContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { hrefFor, type Locale } from '@/i18n/config';

export function generateStaticParams() {
  return services.map((service) => ({ locale: 'en', slug: service.slug.en }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const service = getServiceBySlug(slug, currentLocale);

  if (!service) {
    return {};
  }

  const esSlug = service.slug.es;
  const enSlug = service.slug.en;

  const titles: Record<string, { es: string; en: string }> = {
    'innovation-digital-transformation': {
      es: 'Transformación Digital e Inteligencia Artificial Empresarial',
      en: 'Enterprise Digital Transformation & AI Solutions',
    },
    'software-development': {
      es: 'Desarrollo de Software a la Medida y Aplicaciones Web',
      en: 'Custom Software Development & Enterprise Platforms',
    },
    'strategic-design-branding': {
      es: 'Diseño Estratégico, Branding y Diseño UX/UI',
      en: 'Strategic Design, Corporate Branding & UX/UI',
    },
    'digital-marketing-communications': {
      es: 'Marketing Estratégico y Comunicación Digital Corporativa',
      en: 'Digital Marketing, Strategy & Corporate Communications',
    },
    'audiovisual-production': {
      es: 'Producción Audiovisual Corporativa y Motion Graphics',
      en: 'Corporate Audiovisual Production & Motion Graphics',
    },
    'public-sector-large-projects': {
      es: 'Tecnología para Sector Público y Grandes Proyectos',
      en: 'Public Sector Technology & Large-Scale Projects',
    },
    'trade-show-experiences': {
      es: 'Diseño de Stands y Experiencias Feriales Corporativas',
      en: 'Trade Show Booth Design & Exhibition Experiences',
    },
  };

  const descriptions: Record<string, { es: string; en: string }> = {
    'innovation-digital-transformation': {
      es: 'Consultoría en transformación digital, automatización de procesos e inteligencia artificial para empresas en Colombia y Latinoamérica.',
      en: 'Digital transformation consulting, business process automation, and artificial intelligence for enterprises in Colombia and Latin America.',
    },
    'software-development': {
      es: 'Desarrollo de software a la medida, plataformas cloud, aplicaciones web y móviles escalables diseñadas para operaciones de alta exigencia.',
      en: 'Custom software development, cloud platforms, and scalable web and mobile applications tailored for high-demand operations.',
    },
    'strategic-design-branding': {
      es: 'Construcción de marca, identidad corporativa, sistemas de diseño y experiencias UX/UI memorables que potencian el valor de tu negocio.',
      en: 'Brand strategy, corporate visual identity, design systems, and memorable UX/UI experiences that elevate your business value.',
    },
    'digital-marketing-communications': {
      es: 'Estrategias de comunicación digital, posicionamiento de marca, marketing de contenidos y gestión de canales para maximizar tu impacto.',
      en: 'Digital communications, brand positioning, content marketing, and channel management to maximize your business impact.',
    },
    'audiovisual-production': {
      es: 'Producción de videos corporativos, comerciales, animación 2D y fotografía profesional para comunicar con excelencia y propósito.',
      en: 'Corporate video production, commercials, 2D animation, and professional photography to communicate with excellence and purpose.',
    },
    'public-sector-large-projects': {
      es: 'Implementación de plataformas digitales, apropiación social de tecnología y comunicación estratégica para entidades territoriales y públicas.',
      en: 'Digital platform implementation, technology adoption programs, and strategic communication for public entities and territorial projects.',
    },
    'trade-show-experiences': {
      es: 'Diseño 3D, arquitectura efímera y coordinación integral de stands y experiencias interactivas para ferias nacionales e internacionales.',
      en: '3D design, booth architecture, and end-to-end logistics coordination for national and international trade shows and expos.',
    },
  };

  const metaTitle = titles[service.id]?.[currentLocale] || 'Specialized Service';
  const metaDescription =
    descriptions[service.id]?.[currentLocale] ||
    'Comprehensive technology and strategic solutions by Vertex.';

  const currentPath = hrefFor(currentLocale, 'services', `/${currentLocale === 'es' ? esSlug : enSlug}`);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: currentPath,
      languages: {
        es: `/es/servicios/${esSlug}`,
        en: `/en/services/${enSlug}`,
        'x-default': `/es/servicios/${esSlug}`,
      },
    },
    openGraph: {
      title: `${metaTitle} | Vertex`,
      description: metaDescription,
      url: currentPath,
      type: 'website',
      images: [
        {
          url: '/images/vertex-wallpaper-dark.png',
          width: 1200,
          height: 630,
          alt: `${metaTitle} — Vertex`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${metaTitle} | Vertex`,
      description: metaDescription,
      images: ['/images/vertex-wallpaper-dark.png'],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const service = getServiceBySlug(slug, currentLocale);

  if (!service) {
    notFound();
  }

  if (currentLocale !== 'en') {
    redirect(hrefFor(currentLocale, 'services', `/${slug}`));
  }

  setRequestLocale(locale);

  const breadcrumbItems = [
    { name: 'Home', url: `/${locale}` },
    {
      name: 'Services',
      url: `/${locale}/services`,
    },
    {
      name: service.capabilities[currentLocale]?.[0] || 'Service',
      url: `/${locale}/services/${slug}`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema(breadcrumbItems),
          getServiceSchema(
            service,
            currentLocale,
            service.capabilities[currentLocale]?.[0] || 'Vertex Service',
            service.problems[currentLocale]?.join('. ') || ''
          ),
        ]}
      />
      <ServiceDetailContent slug={slug} locale={locale} />
    </>
  );
}
