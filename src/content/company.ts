/* ============================================
   CONTENIDO DE DEMOSTRACIÓN
   Reemplazar con información oficial de Vertex
   ============================================ */

export interface CompanyStatistic {
  id: string;
  value: string;
  label: { es: string; en: string };
  icon: string;
  isDemo: boolean;
}

export interface WhyVertexPillar {
  id: string;
  icon: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export interface Testimonial {
  id: string;
  name: string;
  role: { es: string; en: string };
  company: string;
  quote: { es: string; en: string };
  photo: string;
  isDemo: boolean;
}

/* Contenido de demostración — Estadísticas provisionales */
export const companyStatistics: CompanyStatistic[] = [
  {
    id: 'countries',
    value: '8+',
    label: { es: 'Países alcanzados', en: 'Countries reached' },
    icon: 'Globe',
    isDemo: true,
  },
  {
    id: 'projects',
    value: '120+',
    label: { es: 'Proyectos desarrollados', en: 'Projects delivered' },
    icon: 'FolderKanban',
    isDemo: true,
  },
  {
    id: 'professionals',
    value: '50+',
    label: { es: 'Profesionales especializados', en: 'Specialized professionals' },
    icon: 'Users',
    isDemo: true,
  },
  {
    id: 'areas',
    value: '7',
    label: { es: 'Áreas de experiencia', en: 'Areas of expertise' },
    icon: 'Layers',
    isDemo: true,
  },
  {
    id: 'satisfaction',
    value: '97%',
    label: { es: 'Nivel de satisfacción', en: 'Satisfaction rate' },
    icon: 'ThumbsUp',
    isDemo: true,
  },
];

/* Pilares — Por qué Vertex */
export const whyVertexPillars: WhyVertexPillar[] = [
  {
    id: 'expertise',
    icon: 'GraduationCap',
    title: {
      es: 'Conocimiento especializado',
      en: 'Specialized expertise',
    },
    description: {
      es: 'Equipos con experiencia comprobada en tecnología, diseño, comunicación y gestión de proyectos de gran escala.',
      en: 'Teams with proven experience in technology, design, communication, and large-scale project management.',
    },
  },
  {
    id: 'custom',
    icon: 'Settings',
    title: {
      es: 'Soluciones a la medida',
      en: 'Tailored solutions',
    },
    description: {
      es: 'Cada proyecto se diseña a partir de las necesidades reales de la organización, sin enfoques genéricos ni plantillas predefinidas.',
      en: 'Each project is designed based on the organization\'s real needs, without generic approaches or predefined templates.',
    },
  },
  {
    id: 'vision',
    icon: 'Eye',
    title: {
      es: 'Visión estratégica',
      en: 'Strategic vision',
    },
    description: {
      es: 'Integramos tecnología con estrategia de negocio para que cada solución responda a objetivos concretos y genere valor medible.',
      en: 'We integrate technology with business strategy so every solution addresses concrete objectives and generates measurable value.',
    },
  },
  {
    id: 'multidisciplinary',
    icon: 'Users',
    title: {
      es: 'Talento multidisciplinario',
      en: 'Multidisciplinary talent',
    },
    description: {
      es: 'Profesionales que combinan capacidades técnicas, creativas y de gestión para abordar desafíos complejos desde múltiples perspectivas.',
      en: 'Professionals combining technical, creative, and management capabilities to address complex challenges from multiple perspectives.',
    },
  },
  {
    id: 'closeness',
    icon: 'Handshake',
    title: {
      es: 'Cercanía con el cliente',
      en: 'Client-centric approach',
    },
    description: {
      es: 'Acompañamos a cada organización con comunicación directa, transparencia en cada etapa y compromiso con el resultado.',
      en: 'We accompany each organization with direct communication, transparency at every stage, and commitment to results.',
    },
  },
  {
    id: 'regional',
    icon: 'MapPin',
    title: {
      es: 'Alcance en Latinoamérica',
      en: 'Latin American reach',
    },
    description: {
      es: 'Capacidad para trabajar con organizaciones de diferentes países, comprendiendo sus contextos, regulaciones y oportunidades.',
      en: 'Ability to work with organizations across different countries, understanding their contexts, regulations, and opportunities.',
    },
  },
];

/* Contenido de demostración — Testimonios provisionales */
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    isDemo: true,
    name: 'Camila Restrepo',
    role: {
      es: 'Directora de Innovación',
      en: 'Innovation Director',
    },
    company: 'Empresa Demo Alpha',
    quote: {
      es: 'Vertex entendió nuestros desafíos desde el primer día y diseñó una solución que realmente transformó la forma en que operamos. Su enfoque integral y su compromiso con el resultado marcaron la diferencia.',
      en: 'Vertex understood our challenges from day one and designed a solution that truly transformed the way we operate. Their comprehensive approach and commitment to results made the difference.',
    },
    photo: '',
  },
  {
    id: 'testimonial-2',
    isDemo: true,
    name: 'Andrés Mendoza',
    role: {
      es: 'Gerente de Tecnología',
      en: 'Technology Manager',
    },
    company: 'Empresa Demo Beta',
    quote: {
      es: 'Lo que más valoramos de Vertex es que no solo entregaron una plataforma técnicamente sólida, sino que nos acompañaron en todo el proceso de cambio organizacional.',
      en: 'What we value most about Vertex is that they didn\'t just deliver a technically solid platform — they accompanied us through the entire organizational change process.',
    },
    photo: '',
  },
  {
    id: 'testimonial-3',
    isDemo: true,
    name: 'Valentina Herrera',
    role: {
      es: 'Coordinadora de Proyectos',
      en: 'Project Coordinator',
    },
    company: 'Empresa Demo Gamma',
    quote: {
      es: 'La capacidad de Vertex para integrar diseño, tecnología y comunicación en un solo equipo nos permitió avanzar más rápido y con mayor claridad.',
      en: 'Vertex\'s ability to integrate design, technology, and communication in a single team allowed us to move faster and with greater clarity.',
    },
    photo: '',
  },
  {
    id: 'testimonial-4',
    isDemo: true,
    name: 'Ricardo Fuentes',
    role: {
      es: 'Director Ejecutivo',
      en: 'Executive Director',
    },
    company: 'Empresa Demo Delta',
    quote: {
      es: 'Elegimos a Vertex por su experiencia en el sector público y su capacidad para manejar proyectos complejos con altos estándares de calidad y transparencia.',
      en: 'We chose Vertex for their public sector experience and their ability to handle complex projects with high standards of quality and transparency.',
    },
    photo: '',
  },
];
