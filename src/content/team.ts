export interface TeamMember {
  id: string;
  name: string;
  role: { es: string; en: string };
  area: { es: string; en: string };
  specialty: { es: string; en: string };
  bio: { es: string; en: string };
  expertise: { es: string[]; en: string[] };
  country: { es: string; en: string };
  photo: string;
  linkedin?: string;
  order: number;
  visible: boolean;
  isDemo: boolean;
}

/* Equipo real de Vertex S.A.S. */
export const teamMembers: TeamMember[] = [
  {
    id: 'sebastian-fuentes',
    isDemo: false,
    name: 'Sebastián Fuentes Torres',
    role: {
      es: 'Director de Desarrollo',
      en: 'Development Director',
    },
    area: { es: 'Tecnología', en: 'Technology' },
    specialty: {
      es: 'Desarrollo Full Stack, Arquitectura y SEO Técnico',
      en: 'Full Stack Development, Architecture & Technical SEO',
    },
    bio: {
      es: 'Ingeniero de Sistemas y especialista en Big Data que lidera el desarrollo técnico de Vertex, integrando arquitectura de software, diseño UX/UI y SEO para construir productos digitales bilingües de principio a fin.',
      en: "Systems Engineer and Big Data specialist who leads Vertex's technical development, integrating software architecture, UX/UI design, and SEO to build bilingual digital products end to end.",
    },
    expertise: {
      es: ['React / Next.js', 'Arquitectura y APIs', 'SEO Técnico'],
      en: ['React / Next.js', 'Architecture & APIs', 'Technical SEO'],
    },
    country: { es: 'Colombia', en: 'Colombia' },
    photo: '/images/team/sebastian-fuentes.png',
    linkedin: 'https://www.linkedin.com/in/sfuentest/',
    order: 1,
    visible: true,
  },
  {
    id: 'ray-mendoza',
    isDemo: false,
    name: 'Ray Sebastián Mendoza Torres',
    role: {
      es: 'Director de Desarrollo',
      en: 'Development Director',
    },
    area: { es: 'Tecnología', en: 'Technology' },
    specialty: {
      es: 'Desarrollo Full Stack y Liderazgo Técnico',
      en: 'Full Stack Development & Technical Leadership',
    },
    bio: {
      es: 'Ingeniero de Sistemas con experiencia liderando equipos de desarrollo bajo metodologías ágiles, diseñando aplicaciones Full Stack, plataformas de aprendizaje y soluciones para entidades públicas y privadas.',
      en: 'Systems Engineer experienced in leading development teams under agile methodologies, designing Full Stack applications, learning platforms, and solutions for public and private organizations.',
    },
    expertise: {
      es: ['Python & PHP', 'APIs REST', 'Metodologías Ágiles'],
      en: ['Python & PHP', 'REST APIs', 'Agile Methodologies'],
    },
    country: { es: 'Colombia', en: 'Colombia' },
    photo: '/images/team/ray-mendoza.jpg',
    linkedin: 'https://www.linkedin.com/in/raymendozatorres/',
    order: 2,
    visible: true,
  },
  {
    id: 'juan-bejarano',
    isDemo: false,
    name: 'Juan José Bejarano Torres',
    role: {
      es: 'QA – Quality Assurance',
      en: 'QA – Quality Assurance',
    },
    area: { es: 'Tecnología', en: 'Technology' },
    specialty: {
      es: 'Aseguramiento de Calidad y Derecho Tecnológico',
      en: 'Quality Assurance & Technology Law',
    },
    bio: {
      es: 'Estudiante de Derecho e Ingeniería Informática que ejecuta pruebas funcionales y de rendimiento en Vertex, combinando pensamiento analítico con conocimientos legales en protección de datos y propiedad intelectual.',
      en: 'Law and Computer Engineering student who runs functional and performance testing at Vertex, combining analytical thinking with legal expertise in data protection and intellectual property.',
    },
    expertise: {
      es: ['Pruebas Funcionales', 'Control de Calidad', 'Protección de Datos'],
      en: ['Functional Testing', 'Quality Control', 'Data Protection'],
    },
    country: { es: 'Colombia', en: 'Colombia' },
    photo: '/images/team/juan-bejarano.jpg',
    linkedin: 'https://www.linkedin.com/in/juanjosebejaranotorres/',
    order: 3,
    visible: true,
  },
  {
    id: 'maria-gutierrez',
    isDemo: false,
    name: 'María Isabel Gutiérrez Caballero',
    role: {
      es: 'Comunicadora y Estratega Digital',
      en: 'Communications & Digital Strategist',
    },
    area: { es: 'Marketing', en: 'Marketing' },
    specialty: {
      es: 'Marketing Digital y Posicionamiento de Marca',
      en: 'Digital Marketing & Brand Positioning',
    },
    bio: {
      es: 'Comunicadora Social con experiencia en marketing y estrategia digital, enfocada en fortalecer el posicionamiento de marca y crear contenidos que conectan con las audiencias y generan resultados medibles.',
      en: 'Social Communicator with experience in marketing and digital strategy, focused on strengthening brand positioning and creating content that connects with audiences and drives measurable results.',
    },
    expertise: {
      es: ['Estrategia Digital', 'Gestión de Contenidos', 'Análisis de Marca'],
      en: ['Digital Strategy', 'Content Management', 'Brand Analysis'],
    },
    country: { es: 'Colombia', en: 'Colombia' },
    photo: '/images/team/maria-gutierrez.png',
    linkedin: 'https://www.linkedin.com/in/mariaisabelgutierrezcaballero/',
    order: 4,
    visible: true,
  },
  {
    id: 'paula-mendoza',
    isDemo: false,
    name: 'Paula Andrea Mendoza Torres',
    role: {
      es: 'Asesora Jurídica de Tecnología (Legal Tech)',
      en: 'Legal Tech Advisor',
    },
    area: { es: 'Legal', en: 'Legal' },
    specialty: {
      es: 'Derecho Tecnológico y Protección de Datos',
      en: 'Technology Law & Data Protection',
    },
    bio: {
      es: 'Estudiante de Derecho e Ingeniería de Sistemas que apoya a Vertex en el cumplimiento normativo, revisando contratos, políticas de privacidad y regulación de protección de datos aplicable a plataformas digitales.',
      en: "Law and Systems Engineering student who supports Vertex's regulatory compliance, reviewing contracts, privacy policies, and data protection regulations applicable to digital platforms.",
    },
    expertise: {
      es: ['Derecho Tecnológico', 'Cumplimiento Normativo', 'Redacción Jurídica'],
      en: ['Technology Law', 'Regulatory Compliance', 'Legal Drafting'],
    },
    country: { es: 'España', en: 'Spain' },
    photo: '/images/team/paula-mendoza.jpg',
    linkedin: 'https://www.linkedin.com/in/paulamendozatorres',
    order: 5,
    visible: true,
  },
  {
    id: 'juan-barrios',
    isDemo: false,
    name: 'Juan Camilo Barrios Saltarín',
    role: {
      es: 'Desarrollador de Software',
      en: 'Software Developer',
    },
    area: { es: 'Tecnología', en: 'Technology' },
    specialty: {
      es: 'Desarrollo Backend y Arquitectura MVC',
      en: 'Backend Development & MVC Architecture',
    },
    bio: {
      es: 'Desarrollador backend con experiencia en arquitecturas MVC, integración de bases de datos y despliegue de aplicaciones, destacándose por su pensamiento analítico y aprendizaje autónomo.',
      en: 'Backend developer experienced in MVC architectures, database integration, and application deployment, known for his analytical thinking and self-driven learning.',
    },
    expertise: {
      es: ['Java & Spring Boot', 'Bases de Datos', 'Control de Versiones'],
      en: ['Java & Spring Boot', 'Databases', 'Version Control'],
    },
    country: { es: 'Colombia', en: 'Colombia' },
    photo: '/images/team/juan-barrios.jpg',
    linkedin: 'https://www.linkedin.com/in/juan-barrios28/',
    order: 6,
    visible: true,
  },
];

export function getVisibleMembers(): TeamMember[] {
  return teamMembers
    .filter((m) => m.visible)
    .sort((a, b) => a.order - b.order);
}

export function getMembersByArea(area: string, locale: 'es' | 'en'): TeamMember[] {
  return teamMembers
    .filter((m) => m.visible && m.area[locale] === area)
    .sort((a, b) => a.order - b.order);
}

export function getUniqueAreas(locale: 'es' | 'en'): string[] {
  const areas = new Set(teamMembers.filter((m) => m.visible).map((m) => m.area[locale]));
  return Array.from(areas);
}
