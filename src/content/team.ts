/* ============================================
   CONTENIDO DE DEMOSTRACIÓN
   Reemplazar con información oficial de Vertex
   ============================================ */

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

/* Contenido de demostración — Perfiles ficticios del equipo */
export const teamMembers: TeamMember[] = [
  {
    id: 'demo-member-1',
    isDemo: true,
    name: 'Santiago Vargas',
    role: {
      es: 'Director de Innovación y Estrategia Digital',
      en: 'Director of Innovation & Digital Strategy',
    },
    area: { es: 'Dirección', en: 'Leadership' },
    specialty: {
      es: 'Arquitectura de Soluciones e Inteligencia Artificial',
      en: 'Solution Architecture & Artificial Intelligence',
    },
    bio: {
      es: 'Líder con más de 12 años de experiencia en formulación de proyectos tecnológicos integrales para el sector público y privado. Especialista en transformación digital y adopción de inteligencia artificial.',
      en: 'Leader with over 12 years of experience formulating comprehensive technology projects for public and private sectors. Specialist in digital transformation and AI adoption.',
    },
    expertise: {
      es: ['Transformación Digital', 'Inteligencia Artificial', 'Arquitectura Cloud'],
      en: ['Digital Transformation', 'Artificial Intelligence', 'Cloud Architecture'],
    },
    country: { es: 'Colombia', en: 'Colombia' },
    photo: '/images/vertex-symbol.png',
    linkedin: 'https://linkedin.com/in/demo-profile',
    order: 1,
    visible: true,
  },
  {
    id: 'demo-member-2',
    isDemo: true,
    name: 'Mariana López',
    role: {
      es: 'Líder de Diseño Estratégico y UX/UI',
      en: 'Lead Strategic Designer & UX/UI',
    },
    area: { es: 'Diseño', en: 'Design' },
    specialty: {
      es: 'Sistemas de Diseño, Branding e Identidad Corporativa',
      en: 'Design Systems, Branding & Corporate Identity',
    },
    bio: {
      es: 'Especialista en desarrollo de sistemas visuales y productos digitales orientados a maximizar la conversión y la usabilidad. Experiencia en branding para empresas de tecnología.',
      en: 'Specialist in building visual systems and digital products focused on maximizing conversion and usability. Experienced in branding for technology companies.',
    },
    expertise: {
      es: ['Diseño UX/UI', 'Sistemas de Diseño', 'Estrategia de Marca'],
      en: ['UX/UI Design', 'Design Systems', 'Brand Strategy'],
    },
    country: { es: 'Colombia', en: 'Colombia' },
    photo: '/images/vertex-symbol.png',
    linkedin: 'https://linkedin.com/in/demo-profile',
    order: 2,
    visible: true,
  },
  {
    id: 'demo-member-3',
    isDemo: true,
    name: 'Diego Ramírez',
    role: {
      es: 'Arquitecto Principal de Software',
      en: 'Principal Software Architect',
    },
    area: { es: 'Tecnología', en: 'Technology' },
    specialty: {
      es: 'Desarrollo Full Stack, Microservicios y Seguridad',
      en: 'Full Stack Development, Microservices & Security',
    },
    bio: {
      es: 'Experto en ingeniería de software escalable, automatización de procesos empresariales y estándares de ciberseguridad. Más de 10 años diseñando arquitecturas para el sector público.',
      en: 'Expert in scalable software engineering, business process automation, and cybersecurity standards. Over 10 years designing architectures for the public sector.',
    },
    expertise: {
      es: ['Next.js / React', 'Node.js & Microservicios', 'Bases de Datos Enterprise'],
      en: ['Next.js / React', 'Node.js & Microservices', 'Enterprise Databases'],
    },
    country: { es: 'Colombia', en: 'Colombia' },
    photo: '/images/vertex-symbol.png',
    linkedin: 'https://linkedin.com/in/demo-profile',
    order: 3,
    visible: true,
  },
  {
    id: 'demo-member-4',
    isDemo: true,
    name: 'Catalina Morales',
    role: {
      es: 'Gerente de Proyectos',
      en: 'Project Manager',
    },
    area: { es: 'Gestión', en: 'Management' },
    specialty: {
      es: 'Gestión de Proyectos de Gran Escala y Sector Público',
      en: 'Large-Scale & Public Sector Project Management',
    },
    bio: {
      es: 'Profesional con certificación PMP y experiencia en la coordinación de proyectos de tecnología, comunicación y apropiación social para entidades públicas y privadas.',
      en: 'PMP-certified professional with experience coordinating technology, communication, and social adoption projects for public and private entities.',
    },
    expertise: {
      es: ['Metodologías Ágiles', 'Gestión de Riesgos', 'Coordinación Multidisciplinaria'],
      en: ['Agile Methodologies', 'Risk Management', 'Cross-functional Coordination'],
    },
    country: { es: 'Colombia', en: 'Colombia' },
    photo: '/images/vertex-symbol.png',
    order: 4,
    visible: true,
  },
  {
    id: 'demo-member-5',
    isDemo: true,
    name: 'Alejandro Torres',
    role: {
      es: 'Líder de Consultoría Digital',
      en: 'Digital Consulting Lead',
    },
    area: { es: 'Consultoría', en: 'Consulting' },
    specialty: {
      es: 'Transformación Organizacional y Estrategia Digital',
      en: 'Organizational Transformation & Digital Strategy',
    },
    bio: {
      es: 'Consultor con experiencia en el diseño de estrategias de transformación digital para organizaciones en proceso de modernización. Experto en gestión del cambio y adopción tecnológica.',
      en: 'Consultant experienced in designing digital transformation strategies for organizations undergoing modernization. Expert in change management and technology adoption.',
    },
    expertise: {
      es: ['Transformación Digital', 'Gestión del Cambio', 'Estrategia Organizacional'],
      en: ['Digital Transformation', 'Change Management', 'Organizational Strategy'],
    },
    country: { es: 'México', en: 'Mexico' },
    photo: '/images/vertex-symbol.png',
    linkedin: 'https://linkedin.com/in/demo-profile',
    order: 5,
    visible: true,
  },
  {
    id: 'demo-member-6',
    isDemo: true,
    name: 'Valentina Herrera',
    role: {
      es: 'Directora de Marketing y Comunicaciones',
      en: 'Marketing & Communications Director',
    },
    area: { es: 'Marketing', en: 'Marketing' },
    specialty: {
      es: 'Comunicación Estratégica y Posicionamiento Digital',
      en: 'Strategic Communication & Digital Positioning',
    },
    bio: {
      es: 'Profesional en comunicación con amplia experiencia en estrategias de posicionamiento, marketing de contenidos y gestión de marca para empresas de tecnología y sector público.',
      en: 'Communications professional with extensive experience in positioning strategies, content marketing, and brand management for technology companies and the public sector.',
    },
    expertise: {
      es: ['Estrategia Digital', 'Marketing de Contenidos', 'Gestión de Marca'],
      en: ['Digital Strategy', 'Content Marketing', 'Brand Management'],
    },
    country: { es: 'Colombia', en: 'Colombia' },
    photo: '/images/vertex-symbol.png',
    order: 6,
    visible: true,
  },
  {
    id: 'demo-member-7',
    isDemo: true,
    name: 'Andrés Castillo',
    role: {
      es: 'Especialista en Datos e Inteligencia Artificial',
      en: 'Data & AI Specialist',
    },
    area: { es: 'Datos', en: 'Data' },
    specialty: {
      es: 'Machine Learning, Analítica Avanzada y Big Data',
      en: 'Machine Learning, Advanced Analytics & Big Data',
    },
    bio: {
      es: 'Ingeniero de datos con experiencia en el diseño de soluciones de analítica avanzada, machine learning y visualización de información para proyectos de impacto social y empresarial.',
      en: 'Data engineer experienced in designing advanced analytics, machine learning, and information visualization solutions for social and business impact projects.',
    },
    expertise: {
      es: ['Machine Learning', 'Python & SQL', 'Visualización de Datos'],
      en: ['Machine Learning', 'Python & SQL', 'Data Visualization'],
    },
    country: { es: 'Perú', en: 'Peru' },
    photo: '/images/vertex-symbol.png',
    linkedin: 'https://linkedin.com/in/demo-profile',
    order: 7,
    visible: true,
  },
  {
    id: 'demo-member-8',
    isDemo: true,
    name: 'Laura Méndez',
    role: {
      es: 'Productora Audiovisual',
      en: 'Audiovisual Producer',
    },
    area: { es: 'Producción', en: 'Production' },
    specialty: {
      es: 'Video Corporativo, Animación y Fotografía Profesional',
      en: 'Corporate Video, Animation & Professional Photography',
    },
    bio: {
      es: 'Productora audiovisual con experiencia en la creación de contenido corporativo, videos institucionales, animaciones 2D y cobertura fotográfica de eventos y proyectos de gran escala.',
      en: 'Audiovisual producer experienced in creating corporate content, institutional videos, 2D animations, and photographic coverage of large-scale events and projects.',
    },
    expertise: {
      es: ['Producción de Video', 'Motion Graphics', 'Fotografía Corporativa'],
      en: ['Video Production', 'Motion Graphics', 'Corporate Photography'],
    },
    country: { es: 'Colombia', en: 'Colombia' },
    photo: '/images/vertex-symbol.png',
    order: 8,
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
