/* DEMO CONTENT - REPLACE WITH OFFICIAL INFORMATION BEFORE PRODUCTION PUBLICATION */

export interface TeamMember {
  id: string;
  name: string;
  role: { es: string; en: string };
  specialty: { es: string; en: string };
  bio: { es: string; en: string };
  expertise: { es: string[]; en: string[] };
  photo: string;
  linkedin?: string;
  order: number;
  visible: boolean;
  isDemo: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'demo-member-1',
    isDemo: true,
    name: 'Dirección Estratégica & Tecnología',
    role: {
      es: 'Director de Innovación y Estrategia Digital',
      en: 'Director of Innovation & Digital Strategy',
    },
    specialty: {
      es: 'Arquitectura de Soluciones e Inteligencia Artificial',
      en: 'Solution Architecture & Artificial Intelligence',
    },
    bio: {
      es: 'Líder con más de 12 años de experiencia en formulación de proyectos tecnológicos integrales para el sector público y privado.',
      en: 'Leader with over 12 years of experience formulating comprehensive technology projects for public and private sectors.',
    },
    expertise: {
      es: ['Transformación Digital', 'Inteligencia Artificial', 'Arquitectura Cloud'],
      en: ['Digital Transformation', 'Artificial Intelligence', 'Cloud Architecture'],
    },
    photo: '/images/vertex-symbol.png',
    order: 1,
    visible: true,
  },
  {
    id: 'demo-member-2',
    isDemo: true,
    name: 'Diseño & Experiencia de Usuario',
    role: {
      es: 'Líder de Diseño Estratégico y UX/UI',
      en: 'Lead Strategic Designer & UX/UI',
    },
    specialty: {
      es: 'Sistemas de Diseño, Branding e Identidad Corporativa',
      en: 'Design Systems, Branding & Corporate Identity',
    },
    bio: {
      es: 'Especialista en desarrollo de sistemas visuales y productos digitales orientados a maximizar la conversión y la usabilidad.',
      en: 'Specialist in building visual systems and digital products focused on maximizing conversion and usability.',
    },
    expertise: {
      es: ['Diseño UX/UI', 'Sistemas de Diseño', 'Estrategia de Marca'],
      en: ['UX/UI Design', 'Design Systems', 'Brand Strategy'],
    },
    photo: '/images/vertex-symbol.png',
    order: 2,
    visible: true,
  },
  {
    id: 'demo-member-3',
    isDemo: true,
    name: 'Desarrollo de Software & Arquitectura',
    role: {
      es: 'Arquitecto Principal de Software Factory',
      en: 'Principal Software Factory Architect',
    },
    specialty: {
      es: 'Desarrollo Full Stack, Microservicios y Seguridad',
      en: 'Full Stack Development, Microservices & Security',
    },
    bio: {
      es: 'Experto en ingeniería de software escalable, automatización de procesos empresariales y estándares de ciberseguridad.',
      en: 'Expert in scalable software engineering, business process automation, and cybersecurity standards.',
    },
    expertise: {
      es: ['Next.js / React', 'Node.js & Microservicios', 'Bases de Datos Enterprise'],
      en: ['Next.js / React', 'Node.js & Microservices', 'Enterprise Databases'],
    },
    photo: '/images/vertex-symbol.png',
    order: 3,
    visible: true,
  },
];

export function getVisibleMembers(): TeamMember[] {
  return teamMembers
    .filter((m) => m.visible)
    .sort((a, b) => a.order - b.order);
}
