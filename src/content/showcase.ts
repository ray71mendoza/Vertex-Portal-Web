export interface ShowcaseItem {
  id: string;
  image: string;
  eyebrow: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  tags: { es: string[]; en: string[] };
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 'ai-operations',
    image: '/images/vertexPrincipal.png',
    eyebrow: { es: 'Inteligencia aplicada', en: 'Applied intelligence' },
    title: { es: 'Operaciones más claras con datos e IA', en: 'Clearer operations with data and AI' },
    description: {
      es: 'Paneles, automatización y modelos de apoyo a la decisión para equipos que necesitan actuar con precisión.',
      en: 'Dashboards, automation and decision-support models for teams that need to act with precision.',
    },
    tags: {
      es: ['IA', 'Analítica', 'Automatización'],
      en: ['AI', 'Analytics', 'Automation'],
    },
  },
  {
    id: 'software-platform',
    image: '/images/demo-software-platform.svg',
    eyebrow: { es: 'Software a la medida', en: 'Custom software' },
    title: { es: 'Plataformas robustas para crecer', en: 'Robust platforms built to scale' },
    description: {
      es: 'Arquitecturas web, móviles y cloud preparadas para integrarse con procesos existentes.',
      en: 'Web, mobile and cloud architectures ready to integrate with existing processes.',
    },
    tags: {
      es: ['Cloud', 'Web apps', 'Integraciones'],
      en: ['Cloud', 'Web apps', 'Integrations'],
    },
  },
  {
    id: 'brand-system',
    image: '/images/demo-brand-system.svg',
    eyebrow: { es: 'Diseño estratégico', en: 'Strategic design' },
    title: { es: 'Marcas y experiencias con sistema', en: 'Brands and experiences with a system' },
    description: {
      es: 'Identidad, UX/UI y comunicación visual para que cada punto de contacto sea coherente.',
      en: 'Identity, UX/UI and visual communication so every touchpoint feels coherent.',
    },
    tags: {
      es: ['Marca', 'UX/UI', 'Comunicación'],
      en: ['Brand', 'UX/UI', 'Communication'],
    },
  },
  {
    id: 'latam-network',
    image: '/images/demo-latam-network.svg',
    eyebrow: { es: 'Alcance LATAM', en: 'LATAM reach' },
    title: { es: 'Presencia colombiana, visión regional', en: 'Colombian presence, regional vision' },
    description: {
      es: 'Capacidad de acompañar organizaciones en diferentes contextos de Latinoamérica.',
      en: 'Capability to support organizations across different Latin American contexts.',
    },
    tags: {
      es: ['Colombia', 'LATAM', 'Sector público'],
      en: ['Colombia', 'LATAM', 'Public sector'],
    },
  },
];
