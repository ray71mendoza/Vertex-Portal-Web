import type { ServiceCategory } from './services';

/* DEMO CONTENT - REPLACE WITH OFFICIAL INFORMATION BEFORE PRODUCTION PUBLICATION */

export interface Project {
  id: string;
  slug: { es: string; en: string };
  title: { es: string; en: string };
  category: ServiceCategory;
  sector: 'public' | 'private' | 'infrastructure' | 'territorial';
  status: 'active' | 'completed' | 'paused';
  location?: { es: string; en: string };
  description: { es: string; en: string };
  challenge?: { es: string; en: string };
  solution?: { es: string; en: string };
  scope?: { es: string; en: string };
  process?: { es: string; en: string };
  results?: { es: string; en: string };
  services: ServiceCategory[];
  coverImage: string;
  gallery?: string[];
  featured: boolean;
  order: number;
  visible: boolean;
  publishedAt: string;
  isDemo: boolean;
}

export const projects: Project[] = [
  {
    id: 'demo-territorial-infrastructure',
    isDemo: true,
    slug: {
      es: 'plataforma-transformacion-infraestructura-territorial',
      en: 'territorial-infrastructure-transformation-platform',
    },
    title: {
      es: 'Plataforma de Transformación para Infraestructura Territorial',
      en: 'Territorial Infrastructure Transformation Platform',
    },
    category: 'public-sector-large-projects',
    sector: 'infrastructure',
    status: 'active',
    location: {
      es: 'Región Caribe, Colombia',
      en: 'Caribbean Region, Colombia',
    },
    description: {
      es: 'Diseño e implementación de un ecosistema digital integral para el seguimiento y apropiación de obras de infraestructura pública regional.',
      en: 'Design and implementation of a comprehensive digital ecosystem for monitoring and social adoption of regional public infrastructure works.',
    },
    challenge: {
      es: 'Necesidad de unificar la comunicación institucional, el monitoreo ciudadano y la gestión de datos de avance de obras en múltiples municipios.',
      en: 'Need to unify institutional communication, citizen monitoring, and progress tracking data across multiple municipalities.',
    },
    solution: {
      es: 'Vertex integró una arquitectura web cloud con paneles de control interactivos, georreferenciación y estrategia de comunicación social.',
      en: 'Vertex integrated a cloud web architecture featuring interactive dashboards, georeferencing, and a social communication strategy.',
    },
    results: {
      es: 'Visualización transparente en tiempo real y aumento significativo en la apropiación comunitaria de los proyectos.',
      en: 'Transparent real-time visualization and significant increase in community ownership of infrastructure projects.',
    },
    services: ['public-sector-large-projects', 'software-development', 'digital-marketing-communications'],
    coverImage: '/images/vertex-wallpaper-dark.png',
    featured: true,
    order: 1,
    visible: true,
    publishedAt: '2026-01-15',
  },
  {
    id: 'demo-document-automation-nexo',
    isDemo: true,
    slug: {
      es: 'sistema-gestion-documental-automatizacion-institucional',
      en: 'institutional-document-automation-system',
    },
    title: {
      es: 'Sistema de Gestión Documental y Automatización Institucional',
      en: 'Institutional Document Management & Automation System',
    },
    category: 'software-development',
    sector: 'public',
    status: 'completed',
    location: {
      es: 'Bogotá, Colombia',
      en: 'Bogotá, Colombia',
    },
    description: {
      es: 'Plataforma de archivo electrónico con firma digital, trazabilidad inmutable y tablas de retención documental para el sector público.',
      en: 'Electronic document system featuring digital signatures, immutable audit trails, and document retention schedules for public entities.',
    },
    challenge: {
      es: 'Eliminación del papel físico y cumplimiento estricto de la normativa de archivo electrónico y retención legal.',
      en: 'Elimination of paper workflows and strict compliance with electronic archiving regulations and legal holds.',
    },
    solution: {
      es: 'Desarrollo de software a la medida respaldado en microservicios, seguridad criptográfica SHA-256 e integración de flujos de trabajo.',
      en: 'Custom software development backed by microservices, SHA-256 cryptographic security, and automated workflow integration.',
    },
    results: {
      es: 'Reducción del 90% en tiempos de radicación y consulta documental con auditoría completa.',
      en: '90% reduction in document filing and search times with full immutable auditing.',
    },
    services: ['software-development', 'innovation-digital-transformation'],
    coverImage: '/images/vertex-wallpaper-light.png',
    featured: true,
    order: 2,
    visible: true,
    publishedAt: '2026-02-01',
  },
  {
    id: 'demo-brand-identity-ecosystem',
    isDemo: true,
    slug: {
      es: 'renovacion-branding-ecosistema-digital',
      en: 'brand-renovation-digital-ecosystem',
    },
    title: {
      es: 'Renovación de Marca y Ecosistema Digital Corporativo',
      en: 'Brand Renovation & Corporate Digital Ecosystem',
    },
    category: 'strategic-design-branding',
    sector: 'private',
    status: 'completed',
    location: {
      es: 'Colombia',
      en: 'Colombia',
    },
    description: {
      es: 'Estrategia de posicionamiento, diseño de identidad corporativa, manual de marca y plataforma web corporativa bilingüe.',
      en: 'Positioning strategy, corporate identity design, brand manual, and a bilingual corporate web platform.',
    },
    challenge: {
      es: 'Modernizar la presencia de marca para reflejar capacidades avanzadas de tecnología e inteligencia artificial.',
      en: 'Modernize brand presence to align with advanced capabilities in technology and artificial intelligence.',
    },
    solution: {
      es: 'Rediseño del sistema visual, tokens de diseño responsivo y desarrollo web de alto rendimiento.',
      en: 'Redesign of visual design system, responsive design tokens, and high-performance web development.',
    },
    results: {
      es: 'Identidad sólida y coherente en todos los canales de comunicación física y digital.',
      en: 'Solid and coherent identity across all physical and digital communication channels.',
    },
    services: ['strategic-design-branding', 'digital-marketing-communications'],
    coverImage: '/images/vertex-wallpaper-dark.png',
    featured: true,
    order: 3,
    visible: true,
    publishedAt: '2026-03-10',
  },
  {
    id: 'demo-international-fair-stand',
    isDemo: true,
    slug: {
      es: 'experiencia-interactiva-stand-feria-internacional',
      en: 'interactive-experience-international-trade-fair-stand',
    },
    title: {
      es: 'Experiencia Interactiva y Stand para Feria Internacional',
      en: 'Interactive Experience & International Trade Fair Stand',
    },
    category: 'trade-show-experiences',
    sector: 'private',
    status: 'completed',
    location: {
      es: 'Cartagena / Internacional',
      en: 'Cartagena / International',
    },
    description: {
      es: 'Conceptualización 3D, producción arquitectónica y coordinación logística de pabellón ferial con tecnología interactiva.',
      en: '3D conceptualization, architectural production, and logistics coordination for an interactive trade fair pavilion.',
    },
    challenge: {
      es: 'Destacar en un evento internacional masivo integrando presencia física y experiencias tecnológicas inmersivas.',
      en: 'Stand out at a major international event by integrating physical presence with immersive tech experiences.',
    },
    solution: {
      es: 'Diseño tridimensional, panelería técnica, montaje completo y desarrollo de contenido audiovisual interactivo.',
      en: 'Three-dimensional design, technical panels, full assembly, and interactive audiovisual content development.',
    },
    results: {
      es: 'Alta afluencia de visitantes y reconocimiento por innovación en el espacio ferial.',
      en: 'High visitor engagement and recognition for innovation in the exhibition space.',
    },
    services: ['trade-show-experiences', 'audiovisual-production', 'strategic-design-branding'],
    coverImage: '/images/vertex-wallpaper-light.png',
    featured: true,
    order: 4,
    visible: true,
    publishedAt: '2026-04-05',
  },
];

export function getProjectBySlug(slug: string, locale: 'es' | 'en'): Project | undefined {
  return projects.find((p) => p.visible && p.slug[locale] === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.visible && p.featured)
    .sort((a, b) => a.order - b.order);
}

export function getVisibleProjects(): Project[] {
  return projects
    .filter((p) => p.visible)
    .sort((a, b) => a.order - b.order);
}

export function getRelatedProjects(currentProjectId: string, limit = 2): Project[] {
  const visible = getVisibleProjects();
  const current = visible.find((p) => p.id === currentProjectId);
  if (!current) return visible.slice(0, limit);

  // Match by category or shared services
  const matches = visible.filter((p) => {
    if (p.id === currentProjectId) return false;
    const sameCategory = p.category === current.category;
    const sharedService = p.services.some((s) => current.services.includes(s));
    return sameCategory || sharedService;
  });

  if (matches.length >= limit) return matches.slice(0, limit);
  // If not enough matches, pad with other visible projects
  const others = visible.filter((p) => p.id !== currentProjectId && !matches.some((m) => m.id === p.id));
  return [...matches, ...others].slice(0, limit);
}

export function getNextPrevProjects(currentProjectId: string): { prev: Project | null; next: Project | null } {
  const visible = getVisibleProjects();
  const currentIndex = visible.findIndex((p) => p.id === currentProjectId);
  if (currentIndex === -1) return { prev: null, next: null };

  const prev = currentIndex > 0 ? visible[currentIndex - 1] : null;
  const next = currentIndex < visible.length - 1 ? visible[currentIndex + 1] : null;
  return { prev, next };
}

export function getProjectsByServiceCategory(category: ServiceCategory, limit = 2): Project[] {
  const visible = getVisibleProjects();
  const matched = visible.filter((p) => p.category === category || p.services.includes(category));
  if (matched.length > 0) return matched.slice(0, limit);
  return visible.slice(0, limit);
}


