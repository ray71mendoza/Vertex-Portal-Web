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
    id: 'vertex-crm-pro',
    isDemo: false,
    slug: {
      es: 'vertex-crm-pro',
      en: 'vertex-crm-pro',
    },
    title: {
      es: 'VERTEX CRM PRO',
      en: 'VERTEX CRM PRO',
    },
    category: 'software-development',
    sector: 'private',
    status: 'active',
    location: {
      es: 'Colombia / Internacional',
      en: 'Colombia / International',
    },
    description: {
      es: 'Plataforma SaaS B2B integral de nivel corporativo concebida para acelerar el ciclo de ventas comercial, optimizar la conversión de leads, automatizar la facturación multi-régimen y centralizar el soporte al cliente en tiempo real.',
      en: 'Enterprise-grade B2B SaaS platform designed to accelerate sales cycles, optimize lead conversion, automate multi-regime invoicing, and centralize real-time customer support.',
    },
    challenge: {
      es: 'Procesos comerciales fragmentados, pérdida de trazabilidad en el embudo de ventas, desconexión entre cotizaciones y facturación, y falta de visibilidad en métricas de conversión en tiempo real.',
      en: 'Fragmented sales processes, loss of sales pipeline traceability, disconnection between quotes and invoicing, and lack of real-time conversion visibility.',
    },
    solution: {
      es: 'Vertex desarrolló un ecosistema modular con tableros interactivos Drag & Drop, gestión documental con firma digital, analítica predictiva, motor de mensajería bidireccional y facturación automatizada.',
      en: 'Vertex engineered a modular ecosystem featuring Drag & Drop interactive boards, document management with digital signatures, predictive analytics, bi-directional messaging, and automated invoicing.',
    },
    results: {
      es: 'Centralización total del pipeline comercial, reducción de tiempos operativos de facturación y seguimiento en tiempo real de leads.',
      en: 'Complete centralization of commercial pipelines, reduced invoicing operational overhead, and real-time lead tracking.',
    },
    services: ['software-development', 'innovation-digital-transformation'],
    coverImage: '/images/projects/vertex-crm-pro.jpg',
    featured: true,
    order: 1,
    visible: true,
    publishedAt: '2026-01-15',
  },
  {
    id: 'vertex-nexo',
    isDemo: false,
    slug: {
      es: 'vertex-nexo',
      en: 'vertex-nexo',
    },
    title: {
      es: 'VERTEX NEXO',
      en: 'VERTEX NEXO',
    },
    category: 'software-development',
    sector: 'public',
    status: 'active',
    location: {
      es: 'Colombia',
      en: 'Colombia',
    },
    description: {
      es: 'Sistema de Gestión Documental Electrónica de Archivo (SGDEA) Enterprise diseñado para garantizar la inmutabilidad, trazabilidad, ciclo de vida documental y estricto cumplimiento normativo (normas AGN, Ley 594 de 2000 y Acuerdo 001 de 2024).',
      en: 'Enterprise Electronic Document & Records Management System (SGDEA) designed to guarantee immutability, traceability, full document lifecycle, and strict regulatory compliance with national archiving standards.',
    },
    challenge: {
      es: 'Dependencia de procesos en papel físico, vulnerabilidad en la custodia documental, falta de tablas de retención electrónica estandarizadas y riesgo de incumplimiento de la normativa archivística.',
      en: 'Heavy dependency on physical paper workflows, vulnerability in document custody, lack of standardized retention schedules, and regulatory non-compliance risks.',
    },
    solution: {
      es: 'Vertex implementó una arquitectura modular en NestJS y Next.js con radicación automatizada, firma digital, motor de búsqueda full-text OpenSearch, almacenamiento inmutable S3 y trazabilidad criptográfica.',
      en: 'Vertex deployed a modular NestJS and Next.js architecture featuring automated filing, digital signatures, OpenSearch full-text search, immutable S3 storage, and cryptographic audit trails.',
    },
    results: {
      es: 'Eliminación del uso de papel físico, consulta instantánea de expedientes electrónicos y cumplimiento estricto de normas AGN y Ley 594.',
      en: 'Zero paper reliance, instantaneous electronic record search, and rigorous compliance with national archive regulations.',
    },
    services: ['software-development', 'public-sector-large-projects', 'innovation-digital-transformation'],
    coverImage: '/images/projects/vertex-nexo.jpg',
    featured: true,
    order: 2,
    visible: true,
    publishedAt: '2026-02-01',
  },
  {
    id: 'vertex-sprint',
    isDemo: false,
    slug: {
      es: 'vertex-sprint',
      en: 'vertex-sprint',
    },
    title: {
      es: 'VERTEX SPRINT',
      en: 'VERTEX SPRINT',
    },
    category: 'software-development',
    sector: 'private',
    status: 'active',
    location: {
      es: 'Colombia / Internacional',
      en: 'Colombia / International',
    },
    description: {
      es: 'Plataforma integral de gestión ágil de proyectos (Enterprise Agile Management) para orquestar tableros Scrum y Kanban, refinamiento de backlog, hojas de ruta interactivas tipo Gantt y métricas avanzadas de desempeño (Velocity, Burndown, CFD).',
      en: 'Enterprise Agile Management platform designed to orchestrate Scrum and Kanban boards, backlog refinement, interactive Gantt roadmaps, and advanced velocity performance metrics.',
    },
    challenge: {
      es: 'Dificultad para alinear equipos multidisciplinarios, falta de visibilidad en el avance de sprints, cuellos de botella en el flujo de entrega continua y ausencia de métricas ágiles unificadas.',
      en: 'Difficulty coordinating multidisciplinary teams, lack of sprint progress visibility, continuous delivery bottlenecks, and fragmented agile metrics.',
    },
    solution: {
      es: 'Vertex desarrolló un workspace colaborativo de alto rendimiento con tableros reactivos, estimación ágil de historias de usuario, diagramas de flujo acumulativo (CFD) y gráficos Burndown/Velocity en tiempo real.',
      en: 'Vertex built a high-performance collaborative workspace with reactive boards, agile story estimation, Cumulative Flow Diagrams (CFD), and real-time Burndown/Velocity analytics.',
    },
    results: {
      es: 'Optimización del flujo de entrega continua, visibilidad completa del ciclo de vida del software y alineación estratégica de equipos de ingeniería.',
      en: 'Optimized continuous delivery workflows, full visibility into software lifecycles, and strategic alignment for engineering teams.',
    },
    services: ['software-development', 'innovation-digital-transformation'],
    coverImage: '/images/projects/vertex-sprint.jpg',
    featured: true,
    order: 3,
    visible: true,
    publishedAt: '2026-03-01',
  },
  {
    id: 'suite-de-vertex',
    isDemo: false,
    slug: {
      es: 'suite-de-vertex',
      en: 'vertex-enterprise-suite',
    },
    title: {
      es: 'SUITE DE VERTEX',
      en: 'SUITE DE VERTEX',
    },
    category: 'software-development',
    sector: 'private',
    status: 'active',
    location: {
      es: 'Colombia / Internacional',
      en: 'Colombia / International',
    },
    description: {
      es: 'Plataforma centralizada de gobernanza de identidades, autenticación unificada y centro de aplicaciones SaaS corporativo con protocolo Single Sign-On (SSO) Hand-off para todo el ecosistema de herramientas Vertex.',
      en: 'Centralized identity governance, unified authentication, and corporate SaaS application hub featuring Single Sign-On (SSO) Hand-off for the entire Vertex ecosystem.',
    },
    challenge: {
      es: 'Dispersión en el acceso a múltiples aplicaciones corporativas, redundancia en la gestión de credenciales de usuario y necesidad de auditoría de accesos centralizada y segura.',
      en: 'Fragmented access to multiple enterprise tools, redundant user credential management, and the need for centralized and secure access auditing.',
    },
    solution: {
      es: 'Vertex diseñó un Hub central (SuiteHub) con protocolo propietario de SSO Hand-off (TTL 30s), aislamiento multi-tenant, panel de lanzamiento de aplicaciones y monitoreo de seguridad perimetral.',
      en: 'Vertex engineered a central SuiteHub with proprietary SSO Hand-off protocol (30s TTL), multi-tenant isolation, unified app launchpad, and perimeter security auditing.',
    },
    results: {
      es: 'Acceso unificado con una sola credencial a todo el ecosistema de productos Vertex, reducción de fricción operativa y auditoría de seguridad en tiempo real.',
      en: 'Single credential access across all Vertex products, reduced operational friction, and real-time security auditing.',
    },
    services: ['software-development', 'innovation-digital-transformation', 'strategic-design-branding'],
    coverImage: '/images/projects/suite-de-vertex.jpg',
    featured: true,
    order: 4,
    visible: true,
    publishedAt: '2026-03-15',
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


