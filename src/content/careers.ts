/* ============================================
   CONTENIDO DE DEMOSTRACIÓN
   Reemplazar con información oficial de Vertex
   ============================================ */

import type { JobArea } from './jobs';

export interface TalentArea {
  id: JobArea;
  icon: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  profiles: { es: string[]; en: string[] };
}

export interface RecruitmentStep {
  id: string;
  number: string;
  icon: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export interface WorkAttribute {
  id: string;
  icon: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
}

export interface WorkEnvironmentValue {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
}

/* Áreas de interés profesional */
export const talentAreas: TalentArea[] = [
  {
    id: 'technology',
    icon: 'Code2',
    title: { es: 'Tecnología y Desarrollo', en: 'Technology & Development' },
    description: {
      es: 'Diseño de arquitecturas, desarrollo de software a la medida, plataformas web y móviles, integración de sistemas y soluciones cloud.',
      en: 'Architecture design, custom software development, web and mobile platforms, system integration, and cloud solutions.',
    },
    profiles: {
      es: ['Desarrolladores Full-Stack', 'Arquitectos de Software', 'Ingenieros DevOps', 'Especialistas QA'],
      en: ['Full-Stack Developers', 'Software Architects', 'DevOps Engineers', 'QA Specialists'],
    },
  },
  {
    id: 'data',
    icon: 'BarChart3',
    title: { es: 'Datos y Analítica', en: 'Data & Analytics' },
    description: {
      es: 'Análisis de datos, visualización de información, inteligencia artificial, machine learning y soluciones de analítica avanzada.',
      en: 'Data analysis, information visualization, artificial intelligence, machine learning, and advanced analytics solutions.',
    },
    profiles: {
      es: ['Analistas de Datos', 'Científicos de Datos', 'Ingenieros de Datos', 'Especialistas en IA'],
      en: ['Data Analysts', 'Data Scientists', 'Data Engineers', 'AI Specialists'],
    },
  },
  {
    id: 'consulting',
    icon: 'Lightbulb',
    title: { es: 'Consultoría', en: 'Consulting' },
    description: {
      es: 'Transformación digital, gestión del cambio, estrategia organizacional, adopción tecnológica y formulación de proyectos.',
      en: 'Digital transformation, change management, organizational strategy, technology adoption, and project formulation.',
    },
    profiles: {
      es: ['Consultores de Transformación', 'Estrategas Digitales', 'Facilitadores de Cambio'],
      en: ['Transformation Consultants', 'Digital Strategists', 'Change Facilitators'],
    },
  },
  {
    id: 'design',
    icon: 'Palette',
    title: { es: 'Diseño y Experiencia', en: 'Design & Experience' },
    description: {
      es: 'Diseño UX/UI, identidad corporativa, branding, sistemas de diseño, diseño editorial y material corporativo.',
      en: 'UX/UI design, corporate identity, branding, design systems, editorial design, and corporate materials.',
    },
    profiles: {
      es: ['Diseñadores UX/UI', 'Directores Creativos', 'Diseñadores de Marca', 'Diseñadores Gráficos'],
      en: ['UX/UI Designers', 'Creative Directors', 'Brand Designers', 'Graphic Designers'],
    },
  },
  {
    id: 'project-management',
    icon: 'FolderKanban',
    title: { es: 'Gestión de Proyectos', en: 'Project Management' },
    description: {
      es: 'Planificación, ejecución y seguimiento de proyectos tecnológicos, coordinación de equipos multidisciplinarios y aseguramiento de calidad.',
      en: 'Planning, execution, and monitoring of technology projects, coordination of multidisciplinary teams, and quality assurance.',
    },
    profiles: {
      es: ['Gerentes de Proyecto', 'Scrum Masters', 'Coordinadores de Operaciones'],
      en: ['Project Managers', 'Scrum Masters', 'Operations Coordinators'],
    },
  },
  {
    id: 'business',
    icon: 'TrendingUp',
    title: { es: 'Comercial y Negocios', en: 'Business Development' },
    description: {
      es: 'Desarrollo de relaciones comerciales, identificación de oportunidades, propuestas de valor y expansión de mercado.',
      en: 'Business relationship development, opportunity identification, value propositions, and market expansion.',
    },
    profiles: {
      es: ['Ejecutivos Comerciales', 'Gerentes de Cuenta', 'Especialistas en Licitaciones'],
      en: ['Business Executives', 'Account Managers', 'Bid Specialists'],
    },
  },
  {
    id: 'marketing',
    icon: 'Megaphone',
    title: { es: 'Marketing y Comunicaciones', en: 'Marketing & Communications' },
    description: {
      es: 'Estrategias de comunicación digital, producción audiovisual, gestión de redes sociales, contenidos y posicionamiento de marca.',
      en: 'Digital communication strategies, audiovisual production, social media management, content, and brand positioning.',
    },
    profiles: {
      es: ['Analistas de Marketing', 'Productores Audiovisuales', 'Community Managers', 'Redactores'],
      en: ['Marketing Analysts', 'Audiovisual Producers', 'Community Managers', 'Copywriters'],
    },
  },
  {
    id: 'hr',
    icon: 'Heart',
    title: { es: 'Talento Humano', en: 'Human Resources' },
    description: {
      es: 'Reclutamiento, desarrollo profesional, bienestar organizacional, cultura corporativa y gestión del talento.',
      en: 'Recruitment, professional development, organizational wellness, corporate culture, and talent management.',
    },
    profiles: {
      es: ['Especialistas de Selección', 'Coordinadores de Bienestar', 'Gestores de Cultura'],
      en: ['Recruitment Specialists', 'Wellness Coordinators', 'Culture Managers'],
    },
  },
];

/* Proceso de reclutamiento y contratación */
export const recruitmentSteps: RecruitmentStep[] = [
  {
    id: 'apply',
    number: '01',
    icon: 'Send',
    title: { es: 'Postulación', en: 'Application' },
    description: {
      es: 'Selecciona una oportunidad y comparte tu información profesional a través del formulario de la vacante.',
      en: 'Select an opportunity and share your professional information through the job application form.',
    },
  },
  {
    id: 'review',
    number: '02',
    icon: 'FileSearch',
    title: { es: 'Revisión de perfil', en: 'Profile review' },
    description: {
      es: 'El equipo de talento revisa tu experiencia y evalúa la afinidad de tu perfil con la oportunidad.',
      en: 'The talent team reviews your experience and evaluates your profile fit with the opportunity.',
    },
  },
  {
    id: 'initial-call',
    number: '03',
    icon: 'MessageCircle',
    title: { es: 'Conversación inicial', en: 'Initial conversation' },
    description: {
      es: 'Un primer encuentro para conocerte, entender tus expectativas y explicar el rol y el equipo.',
      en: 'A first meeting to get to know you, understand your expectations, and explain the role and team.',
    },
  },
  {
    id: 'assessment',
    number: '04',
    icon: 'ClipboardCheck',
    title: { es: 'Evaluación', en: 'Assessment' },
    description: {
      es: 'Según el cargo, puede incluir una entrevista técnica, un ejercicio práctico o una conversación con el equipo.',
      en: 'Depending on the role, this may include a technical interview, practical exercise, or team conversation.',
    },
  },
  {
    id: 'decision',
    number: '05',
    icon: 'CheckCircle2',
    title: { es: 'Decisión y propuesta', en: 'Decision & offer' },
    description: {
      es: 'Vertex comunica el resultado y, cuando corresponde, presenta una propuesta formal de vinculación.',
      en: 'Vertex communicates the result and, when applicable, presents a formal employment offer.',
    },
  },
  {
    id: 'onboarding',
    number: '06',
    icon: 'Rocket',
    title: { es: 'Incorporación', en: 'Onboarding' },
    description: {
      es: 'Recibes acompañamiento durante tu integración al equipo, con los recursos y el contexto necesarios.',
      en: 'You receive support during your team integration, with the necessary resources and context.',
    },
  },
];

/* Atributos de la experiencia laboral — Por qué trabajar en Vertex */
export const workAttributes: WorkAttribute[] = [
  {
    id: 'impact',
    icon: 'Zap',
    title: { es: 'Proyectos con impacto', en: 'Impactful projects' },
    description: {
      es: 'Participarás en proyectos que transforman organizaciones y generan valor real para comunidades y empresas en Latinoamérica.',
      en: 'You will participate in projects that transform organizations and generate real value for communities and companies across Latin America.',
    },
  },
  {
    id: 'learning',
    icon: 'BookOpen',
    title: { es: 'Aprendizaje continuo', en: 'Continuous learning' },
    description: {
      es: 'Cada proyecto es una oportunidad para aprender nuevas tecnologías, metodologías y perspectivas profesionales.',
      en: 'Every project is an opportunity to learn new technologies, methodologies, and professional perspectives.',
    },
  },
  {
    id: 'collaboration',
    icon: 'Users',
    title: { es: 'Colaboración multidisciplinaria', en: 'Multidisciplinary collaboration' },
    description: {
      es: 'Trabajarás junto a profesionales de diferentes disciplinas, combinando capacidades técnicas, creativas y estratégicas.',
      en: 'You will work alongside professionals from different disciplines, combining technical, creative, and strategic capabilities.',
    },
  },
  {
    id: 'growth',
    icon: 'TrendingUp',
    title: { es: 'Crecimiento profesional', en: 'Professional growth' },
    description: {
      es: 'Acompañamos tu desarrollo profesional con retos progresivos, retroalimentación y oportunidades de liderazgo.',
      en: 'We support your professional development with progressive challenges, feedback, and leadership opportunities.',
    },
  },
  {
    id: 'innovation',
    icon: 'Lightbulb',
    title: { es: 'Cultura de innovación', en: 'Innovation culture' },
    description: {
      es: 'Fomentamos la exploración de nuevas ideas, tecnologías y enfoques para resolver problemas de manera creativa.',
      en: 'We encourage exploring new ideas, technologies, and approaches to solve problems creatively.',
    },
  },
  {
    id: 'reach',
    icon: 'Globe',
    title: { es: 'Alcance regional', en: 'Regional reach' },
    description: {
      es: 'Nuestros proyectos abarcan diferentes países de Latinoamérica, brindándote una perspectiva profesional amplia y diversa.',
      en: 'Our projects span different Latin American countries, giving you a broad and diverse professional perspective.',
    },
  },
];

/* Valores del ambiente de trabajo */
export const workEnvironmentValues: WorkEnvironmentValue[] = [
  {
    id: 'collab',
    title: { es: 'Colaboración', en: 'Collaboration' },
    description: {
      es: 'Trabajamos en equipo, compartiendo conocimiento y apoyándonos mutuamente para alcanzar los mejores resultados.',
      en: 'We work as a team, sharing knowledge and supporting each other to achieve the best results.',
    },
  },
  {
    id: 'communication',
    title: { es: 'Comunicación abierta', en: 'Open communication' },
    description: {
      es: 'Valoramos la transparencia y la comunicación directa en todas las interacciones, desde la planificación hasta la retroalimentación.',
      en: 'We value transparency and direct communication in all interactions, from planning to feedback.',
    },
  },
  {
    id: 'respect',
    title: { es: 'Respeto', en: 'Respect' },
    description: {
      es: 'Cada persona aporta una perspectiva única. Escuchamos, respetamos y valoramos la diversidad de ideas y experiencias.',
      en: 'Every person brings a unique perspective. We listen to, respect, and value the diversity of ideas and experiences.',
    },
  },
  {
    id: 'autonomy',
    title: { es: 'Autonomía responsable', en: 'Responsible autonomy' },
    description: {
      es: 'Confiamos en la capacidad de cada profesional para tomar decisiones y gestionar su trabajo con responsabilidad.',
      en: 'We trust each professional\'s ability to make decisions and manage their work responsibly.',
    },
  },
  {
    id: 'knowledge',
    title: { es: 'Intercambio de conocimiento', en: 'Knowledge sharing' },
    description: {
      es: 'Promovemos espacios para compartir aprendizajes, mejores prácticas y descubrimientos entre equipos.',
      en: 'We promote spaces to share learnings, best practices, and discoveries across teams.',
    },
  },
  {
    id: 'results',
    title: { es: 'Orientación a resultados', en: 'Results-driven' },
    description: {
      es: 'Medimos nuestro trabajo por el impacto que genera, no solo por las tareas completadas.',
      en: 'We measure our work by the impact it generates, not just by tasks completed.',
    },
  },
];

/* Beneficios laborales de ejemplo — Dato pendiente de validación */
export const employeeBenefits = [
  {
    id: 'flexibility',
    icon: 'Clock',
    title: { es: 'Flexibilidad', en: 'Flexibility' },
    description: {
      es: 'Modelos de trabajo flexibles adaptados a cada rol y proyecto.',
      en: 'Flexible work models adapted to each role and project.',
    },
    isDemo: true,
  },
  {
    id: 'development',
    icon: 'GraduationCap',
    title: { es: 'Desarrollo profesional', en: 'Professional development' },
    description: {
      es: 'Acceso a formación, certificaciones y oportunidades de crecimiento.',
      en: 'Access to training, certifications, and growth opportunities.',
    },
    isDemo: true,
  },
  {
    id: 'projects',
    icon: 'Rocket',
    title: { es: 'Proyectos relevantes', en: 'Relevant projects' },
    description: {
      es: 'Participación en proyectos con impacto real para organizaciones públicas y privadas.',
      en: 'Participation in projects with real impact for public and private organizations.',
    },
    isDemo: true,
  },
  {
    id: 'culture',
    icon: 'Heart',
    title: { es: 'Cultura colaborativa', en: 'Collaborative culture' },
    description: {
      es: 'Un ambiente donde las ideas son valoradas y el trabajo en equipo es fundamental.',
      en: 'An environment where ideas are valued and teamwork is fundamental.',
    },
    isDemo: true,
  },
];
