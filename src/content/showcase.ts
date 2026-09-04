export interface ShowcaseItem {
  id: string;
  image: string;
  eyebrow: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  tags: { es: string[]; en: string[] };
}

export const homeShowcaseItems: ShowcaseItem[] = [
  {
    id: 'ai-operations',
    image: '/images/showcase-home-dashboard.jpg',
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
    id: 'brand-system',
    image: '/images/showcase-home-design.jpg',
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
    id: 'software-platform',
    image: '/images/showcase-home-abstract.jpg',
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
    id: 'latam-network',
    image: '/images/showcase-home-latam.jpg',
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

export const careersShowcaseItems: ShowcaseItem[] = [
  {
    id: 'careers-dev',
    image: '/images/showcase-careers-dev.jpg',
    eyebrow: { es: 'Talento técnico', en: 'Technical talent' },
    title: { es: 'Un equipo que construye soluciones reales', en: 'A team building real solutions' },
    description: {
      es: 'Profesionales que transforman ideas en productos digitales funcionales para clientes de distintos sectores.',
      en: 'Professionals turning ideas into functional digital products for clients across industries.',
    },
    tags: {
      es: ['Desarrollo', 'Producto', 'Tecnología'],
      en: ['Development', 'Product', 'Technology'],
    },
  },
  {
    id: 'careers-design',
    image: '/images/showcase-careers-design.jpg',
    eyebrow: { es: 'Diseño y marca', en: 'Design & brand' },
    title: { es: 'Creatividad con propósito estratégico', en: 'Creativity with strategic purpose' },
    description: {
      es: 'Un equipo que da forma a identidades visuales y experiencias digitales memorables.',
      en: 'A team shaping visual identities and memorable digital experiences.',
    },
    tags: {
      es: ['UX/UI', 'Branding', 'Diseño'],
      en: ['UX/UI', 'Branding', 'Design'],
    },
  },
  {
    id: 'careers-team',
    image: '/images/showcase-careers-team.jpg',
    eyebrow: { es: 'Cultura Vertex', en: 'Vertex culture' },
    title: { es: 'Colaboración con visión regional', en: 'Collaboration with a regional vision' },
    description: {
      es: 'Equipos que trabajan juntos en proyectos con alcance nacional y latinoamericano.',
      en: 'Teams working together on projects with national and Latin American reach.',
    },
    tags: {
      es: ['Colaboración', 'LATAM', 'Equipo'],
      en: ['Collaboration', 'LATAM', 'Team'],
    },
  },
];

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
