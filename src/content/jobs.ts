/* ============================================
   CONTENIDO DE DEMOSTRACIÓN — VACANTES DE MUESTRA
   Reemplazar con integración a ATS, CMS o API
   ============================================ */

export type JobModality = 'remote' | 'hybrid' | 'onsite';
export type JobContractType = 'full-time' | 'part-time' | 'contract' | 'freelance';
export type JobArea =
  | 'technology'
  | 'data'
  | 'consulting'
  | 'design'
  | 'project-management'
  | 'business'
  | 'marketing'
  | 'hr';

export interface JobOpening {
  id: string;
  slug: string;
  title: { es: string; en: string };
  area: JobArea;
  areaLabel: { es: string; en: string };
  city: string;
  country: { es: string; en: string };
  modality: JobModality;
  contractType: JobContractType;
  publishedAt: string;
  closedAt?: string;
  isOpen: boolean;
  summary: { es: string; en: string };
  description: { es: string; en: string };
  responsibilities: { es: string[]; en: string[] };
  requirements: { es: string[]; en: string[] };
  niceToHave: { es: string[]; en: string[] };
  teamInfo: { es: string; en: string };
  isDemo: boolean;
}

export const jobAreaLabels: Record<JobArea, { es: string; en: string }> = {
  technology: { es: 'Tecnología y Desarrollo', en: 'Technology & Development' },
  data: { es: 'Datos y Analítica', en: 'Data & Analytics' },
  consulting: { es: 'Consultoría', en: 'Consulting' },
  design: { es: 'Diseño y Experiencia', en: 'Design & Experience' },
  'project-management': { es: 'Gestión de Proyectos', en: 'Project Management' },
  business: { es: 'Comercial y Negocios', en: 'Business Development' },
  marketing: { es: 'Marketing y Comunicaciones', en: 'Marketing & Communications' },
  hr: { es: 'Talento Humano', en: 'Human Resources' },
};

export const modalityLabels: Record<JobModality, { es: string; en: string }> = {
  remote: { es: 'Remoto', en: 'Remote' },
  hybrid: { es: 'Híbrido', en: 'Hybrid' },
  onsite: { es: 'Presencial', en: 'On-site' },
};

export const contractTypeLabels: Record<JobContractType, { es: string; en: string }> = {
  'full-time': { es: 'Tiempo completo', en: 'Full-time' },
  'part-time': { es: 'Medio tiempo', en: 'Part-time' },
  contract: { es: 'Contrato', en: 'Contract' },
  freelance: { es: 'Freelance', en: 'Freelance' },
};

/* Vacante de muestra — 10 oportunidades de demostración */
export const jobOpenings: JobOpening[] = [
  {
    id: 'job-001',
    slug: 'desarrollador-frontend-senior',
    isDemo: true,
    isOpen: true,
    title: {
      es: 'Desarrollador Frontend Senior',
      en: 'Senior Frontend Developer',
    },
    area: 'technology',
    areaLabel: { es: 'Tecnología y Desarrollo', en: 'Technology & Development' },
    city: 'Bogotá',
    country: { es: 'Colombia', en: 'Colombia' },
    modality: 'hybrid',
    contractType: 'full-time',
    publishedAt: '2026-08-01',
    summary: {
      es: 'Buscamos un desarrollador frontend con experiencia en React, Next.js y sistemas de diseño para liderar la construcción de plataformas web de alto rendimiento.',
      en: 'We are looking for a frontend developer experienced in React, Next.js, and design systems to lead high-performance web platform development.',
    },
    description: {
      es: 'Serás parte del equipo de tecnología, liderando el desarrollo de interfaces web modernas para proyectos de transformación digital. Trabajarás con tecnologías como React, Next.js, TypeScript y sistemas de diseño propios.',
      en: 'You will be part of the technology team, leading the development of modern web interfaces for digital transformation projects. You will work with technologies like React, Next.js, TypeScript, and proprietary design systems.',
    },
    responsibilities: {
      es: [
        'Desarrollar interfaces web responsivas y accesibles',
        'Colaborar con el equipo de diseño UX/UI',
        'Implementar y mantener sistemas de diseño',
        'Optimizar el rendimiento de aplicaciones web',
        'Participar en revisiones de código y mentoría técnica',
        'Documentar soluciones y patrones de desarrollo',
      ],
      en: [
        'Develop responsive and accessible web interfaces',
        'Collaborate with the UX/UI design team',
        'Implement and maintain design systems',
        'Optimize web application performance',
        'Participate in code reviews and technical mentoring',
        'Document solutions and development patterns',
      ],
    },
    requirements: {
      es: [
        '5+ años de experiencia en desarrollo frontend',
        'Dominio de React, Next.js y TypeScript',
        'Experiencia con Tailwind CSS o sistemas de diseño basados en tokens',
        'Conocimiento de accesibilidad web (WCAG)',
        'Experiencia con herramientas de control de versiones (Git)',
        'Capacidad de comunicación y trabajo en equipo',
      ],
      en: [
        '5+ years of frontend development experience',
        'Proficiency in React, Next.js, and TypeScript',
        'Experience with Tailwind CSS or token-based design systems',
        'Knowledge of web accessibility (WCAG)',
        'Experience with version control tools (Git)',
        'Communication skills and team collaboration',
      ],
    },
    niceToHave: {
      es: [
        'Experiencia con framer-motion o animaciones web',
        'Conocimiento de SEO técnico',
        'Familiaridad con plataformas cloud (AWS, GCP)',
      ],
      en: [
        'Experience with framer-motion or web animations',
        'Knowledge of technical SEO',
        'Familiarity with cloud platforms (AWS, GCP)',
      ],
    },
    teamInfo: {
      es: 'Te integrarás al equipo de tecnología, compuesto por desarrolladores full-stack, arquitectos de software y especialistas en DevOps, trabajando en proyectos para organizaciones públicas y privadas.',
      en: 'You will join the technology team, composed of full-stack developers, software architects, and DevOps specialists, working on projects for public and private organizations.',
    },
  },
  {
    id: 'job-002',
    slug: 'especialista-datos-analytics',
    isDemo: true,
    isOpen: true,
    title: {
      es: 'Especialista en Datos y Analítica',
      en: 'Data & Analytics Specialist',
    },
    area: 'data',
    areaLabel: { es: 'Datos y Analítica', en: 'Data & Analytics' },
    city: 'Bogotá',
    country: { es: 'Colombia', en: 'Colombia' },
    modality: 'remote',
    contractType: 'full-time',
    publishedAt: '2026-07-28',
    summary: {
      es: 'Buscamos un especialista en datos con experiencia en visualización, análisis y modelado de datos para proyectos de transformación digital.',
      en: 'We are looking for a data specialist with experience in visualization, analysis, and data modeling for digital transformation projects.',
    },
    description: {
      es: 'Trabajarás en el diseño e implementación de soluciones de datos para clientes del sector público y privado, incluyendo dashboards, pipelines de datos y modelos analíticos.',
      en: 'You will work on designing and implementing data solutions for public and private sector clients, including dashboards, data pipelines, and analytical models.',
    },
    responsibilities: {
      es: [
        'Diseñar e implementar pipelines de datos',
        'Crear dashboards y visualizaciones interactivas',
        'Colaborar con equipos de desarrollo y consultoría',
        'Documentar modelos y procesos de datos',
        'Asegurar la calidad e integridad de los datos',
      ],
      en: [
        'Design and implement data pipelines',
        'Create dashboards and interactive visualizations',
        'Collaborate with development and consulting teams',
        'Document data models and processes',
        'Ensure data quality and integrity',
      ],
    },
    requirements: {
      es: [
        '3+ años de experiencia en análisis de datos',
        'Dominio de SQL y Python',
        'Experiencia con herramientas de visualización (Power BI, Tableau o similar)',
        'Conocimiento de bases de datos relacionales y no relacionales',
        'Pensamiento analítico y capacidad de comunicación',
      ],
      en: [
        '3+ years of data analysis experience',
        'Proficiency in SQL and Python',
        'Experience with visualization tools (Power BI, Tableau, or similar)',
        'Knowledge of relational and non-relational databases',
        'Analytical thinking and communication skills',
      ],
    },
    niceToHave: {
      es: [
        'Experiencia con plataformas cloud (AWS, GCP, Azure)',
        'Conocimiento de machine learning',
        'Certificaciones en analítica de datos',
      ],
      en: [
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Machine learning knowledge',
        'Data analytics certifications',
      ],
    },
    teamInfo: {
      es: 'Formarás parte del equipo de datos e innovación, colaborando directamente con consultores y desarrolladores en proyectos que combinan analítica avanzada con transformación organizacional.',
      en: 'You will be part of the data and innovation team, collaborating directly with consultants and developers on projects combining advanced analytics with organizational transformation.',
    },
  },
  {
    id: 'job-003',
    slug: 'consultor-transformacion-digital',
    isDemo: true,
    isOpen: true,
    title: {
      es: 'Consultor de Transformación Digital',
      en: 'Digital Transformation Consultant',
    },
    area: 'consulting',
    areaLabel: { es: 'Consultoría', en: 'Consulting' },
    city: 'Ciudad de México',
    country: { es: 'México', en: 'Mexico' },
    modality: 'hybrid',
    contractType: 'full-time',
    publishedAt: '2026-08-05',
    summary: {
      es: 'Buscamos un consultor con experiencia en procesos de transformación digital para acompañar a organizaciones en la adopción de nuevas tecnologías y modelos operativos.',
      en: 'We are looking for a consultant experienced in digital transformation processes to accompany organizations in adopting new technologies and operating models.',
    },
    description: {
      es: 'Liderarás proyectos de consultoría estratégica, trabajando directamente con líderes de organizaciones para diseñar e implementar hojas de ruta de transformación digital.',
      en: 'You will lead strategic consulting projects, working directly with organizational leaders to design and implement digital transformation roadmaps.',
    },
    responsibilities: {
      es: [
        'Realizar diagnósticos organizacionales',
        'Diseñar hojas de ruta de transformación digital',
        'Facilitar talleres con equipos directivos',
        'Acompañar la implementación de soluciones tecnológicas',
        'Medir el impacto y los resultados de los proyectos',
      ],
      en: [
        'Conduct organizational assessments',
        'Design digital transformation roadmaps',
        'Facilitate workshops with leadership teams',
        'Support technology solution implementation',
        'Measure project impact and results',
      ],
    },
    requirements: {
      es: [
        '5+ años de experiencia en consultoría o transformación digital',
        'Experiencia en gestión del cambio organizacional',
        'Conocimiento de metodologías ágiles',
        'Habilidades de presentación y facilitación',
        'Disponibilidad para viajes ocasionales',
      ],
      en: [
        '5+ years of experience in consulting or digital transformation',
        'Experience in organizational change management',
        'Knowledge of agile methodologies',
        'Presentation and facilitation skills',
        'Availability for occasional travel',
      ],
    },
    niceToHave: {
      es: [
        'MBA o maestría en áreas afines',
        'Certificaciones en gestión de proyectos (PMP, PRINCE2)',
        'Experiencia en sector público',
      ],
      en: [
        'MBA or master\'s degree in related fields',
        'Project management certifications (PMP, PRINCE2)',
        'Public sector experience',
      ],
    },
    teamInfo: {
      es: 'Trabajarás con el equipo de consultoría y estrategia, colaborando con especialistas en tecnología, diseño y comunicación para ofrecer soluciones integrales.',
      en: 'You will work with the consulting and strategy team, collaborating with technology, design, and communications specialists to deliver comprehensive solutions.',
    },
  },
  {
    id: 'job-004',
    slug: 'disenador-ux-ui',
    isDemo: true,
    isOpen: true,
    title: {
      es: 'Diseñador UX/UI',
      en: 'UX/UI Designer',
    },
    area: 'design',
    areaLabel: { es: 'Diseño y Experiencia', en: 'Design & Experience' },
    city: 'Cartagena',
    country: { es: 'Colombia', en: 'Colombia' },
    modality: 'remote',
    contractType: 'full-time',
    publishedAt: '2026-08-03',
    summary: {
      es: 'Buscamos un diseñador UX/UI con experiencia en productos digitales, sistemas de diseño e investigación de usuarios.',
      en: 'We are looking for a UX/UI designer with experience in digital products, design systems, and user research.',
    },
    description: {
      es: 'Diseñarás experiencias digitales para plataformas web y móviles, colaborando con equipos de desarrollo y consultoría para crear interfaces intuitivas y accesibles.',
      en: 'You will design digital experiences for web and mobile platforms, collaborating with development and consulting teams to create intuitive and accessible interfaces.',
    },
    responsibilities: {
      es: [
        'Diseñar interfaces web y móviles centradas en el usuario',
        'Crear y mantener sistemas de diseño',
        'Realizar investigación de usuarios y pruebas de usabilidad',
        'Crear prototipos interactivos de alta fidelidad',
        'Colaborar con equipos de desarrollo en la implementación',
      ],
      en: [
        'Design user-centered web and mobile interfaces',
        'Create and maintain design systems',
        'Conduct user research and usability testing',
        'Create high-fidelity interactive prototypes',
        'Collaborate with development teams on implementation',
      ],
    },
    requirements: {
      es: [
        '3+ años de experiencia en diseño UX/UI',
        'Dominio de Figma',
        'Experiencia en investigación de usuarios',
        'Conocimiento de accesibilidad y diseño inclusivo',
        'Portafolio con proyectos de productos digitales',
      ],
      en: [
        '3+ years of UX/UI design experience',
        'Proficiency in Figma',
        'User research experience',
        'Knowledge of accessibility and inclusive design',
        'Portfolio with digital product projects',
      ],
    },
    niceToHave: {
      es: [
        'Experiencia con design tokens y Tailwind CSS',
        'Conocimiento básico de HTML/CSS',
        'Experiencia en diseño de marca',
      ],
      en: [
        'Experience with design tokens and Tailwind CSS',
        'Basic HTML/CSS knowledge',
        'Brand design experience',
      ],
    },
    teamInfo: {
      es: 'Serás parte del equipo de diseño estratégico, trabajando junto a directores creativos, desarrolladores frontend y consultores de experiencia.',
      en: 'You will be part of the strategic design team, working alongside creative directors, frontend developers, and experience consultants.',
    },
  },
  {
    id: 'job-005',
    slug: 'gerente-proyectos-tecnologia',
    isDemo: true,
    isOpen: true,
    title: {
      es: 'Gerente de Proyectos de Tecnología',
      en: 'Technology Project Manager',
    },
    area: 'project-management',
    areaLabel: { es: 'Gestión de Proyectos', en: 'Project Management' },
    city: 'Bogotá',
    country: { es: 'Colombia', en: 'Colombia' },
    modality: 'hybrid',
    contractType: 'full-time',
    publishedAt: '2026-07-25',
    summary: {
      es: 'Buscamos un gerente de proyectos con experiencia en implementación de soluciones tecnológicas para organizaciones del sector público y privado.',
      en: 'We are looking for a project manager experienced in implementing technology solutions for public and private sector organizations.',
    },
    description: {
      es: 'Liderarás la planificación, ejecución y entrega de proyectos tecnológicos, asegurando el cumplimiento de alcances, tiempos y estándares de calidad.',
      en: 'You will lead the planning, execution, and delivery of technology projects, ensuring compliance with scope, timelines, and quality standards.',
    },
    responsibilities: {
      es: [
        'Planificar y gestionar proyectos tecnológicos de principio a fin',
        'Coordinar equipos multidisciplinarios',
        'Gestionar el alcance, cronograma y riesgos del proyecto',
        'Comunicar avances y resultados a stakeholders',
        'Asegurar estándares de calidad y entrega oportuna',
      ],
      en: [
        'Plan and manage technology projects end-to-end',
        'Coordinate multidisciplinary teams',
        'Manage project scope, schedule, and risks',
        'Communicate progress and results to stakeholders',
        'Ensure quality standards and timely delivery',
      ],
    },
    requirements: {
      es: [
        '5+ años de experiencia en gestión de proyectos tecnológicos',
        'Conocimiento de metodologías ágiles y predictivas',
        'Experiencia con herramientas de gestión (Jira, Asana o similar)',
        'Certificación PMP, PRINCE2 o Scrum Master',
        'Habilidades de liderazgo y negociación',
      ],
      en: [
        '5+ years of technology project management experience',
        'Knowledge of agile and predictive methodologies',
        'Experience with management tools (Jira, Asana, or similar)',
        'PMP, PRINCE2, or Scrum Master certification',
        'Leadership and negotiation skills',
      ],
    },
    niceToHave: {
      es: [
        'Experiencia en sector público',
        'Conocimiento técnico en desarrollo de software',
        'MBA o maestría en gestión',
      ],
      en: [
        'Public sector experience',
        'Technical knowledge in software development',
        'MBA or management master\'s degree',
      ],
    },
    teamInfo: {
      es: 'Liderarás proyectos que involucran equipos de desarrollo, diseño, comunicación y consultoría, trabajando en estrecha colaboración con los clientes.',
      en: 'You will lead projects involving development, design, communications, and consulting teams, working closely with clients.',
    },
  },
  {
    id: 'job-006',
    slug: 'ejecutivo-desarrollo-negocios',
    isDemo: true,
    isOpen: true,
    title: {
      es: 'Ejecutivo de Desarrollo de Negocios',
      en: 'Business Development Executive',
    },
    area: 'business',
    areaLabel: { es: 'Comercial y Negocios', en: 'Business Development' },
    city: 'Ciudad de México',
    country: { es: 'México', en: 'Mexico' },
    modality: 'onsite',
    contractType: 'full-time',
    publishedAt: '2026-08-07',
    summary: {
      es: 'Buscamos un ejecutivo comercial con experiencia en venta consultiva de servicios tecnológicos para expandir la presencia de Vertex en el mercado mexicano.',
      en: 'We are looking for a business executive experienced in consultative selling of technology services to expand Vertex\'s presence in the Mexican market.',
    },
    description: {
      es: 'Serás responsable de identificar oportunidades de negocio, construir relaciones con clientes potenciales y presentar las capacidades de Vertex para resolver sus desafíos organizacionales.',
      en: 'You will be responsible for identifying business opportunities, building relationships with potential clients, and presenting Vertex\'s capabilities to solve their organizational challenges.',
    },
    responsibilities: {
      es: [
        'Identificar y desarrollar oportunidades de negocio',
        'Construir y mantener relaciones con clientes estratégicos',
        'Preparar propuestas comerciales y presentaciones',
        'Colaborar con equipos técnicos para diseñar soluciones',
        'Cumplir con objetivos de crecimiento comercial',
      ],
      en: [
        'Identify and develop business opportunities',
        'Build and maintain relationships with strategic clients',
        'Prepare commercial proposals and presentations',
        'Collaborate with technical teams to design solutions',
        'Meet commercial growth objectives',
      ],
    },
    requirements: {
      es: [
        '4+ años de experiencia en venta de servicios tecnológicos o de consultoría',
        'Red de contactos en el sector empresarial mexicano',
        'Experiencia en venta consultiva B2B',
        'Habilidades de presentación y negociación',
        'Disponibilidad para viajes dentro de México',
      ],
      en: [
        '4+ years of experience selling technology or consulting services',
        'Contact network in the Mexican business sector',
        'B2B consultative selling experience',
        'Presentation and negotiation skills',
        'Availability for travel within Mexico',
      ],
    },
    niceToHave: {
      es: [
        'Experiencia en contratación pública',
        'Conocimiento del ecosistema tecnológico latinoamericano',
        'CRM y herramientas de ventas',
      ],
      en: [
        'Public procurement experience',
        'Knowledge of the Latin American tech ecosystem',
        'CRM and sales tools',
      ],
    },
    teamInfo: {
      es: 'Serás parte del equipo comercial, trabajando con la dirección estratégica y los equipos técnicos para diseñar propuestas integrales.',
      en: 'You will be part of the business team, working with strategic leadership and technical teams to design comprehensive proposals.',
    },
  },
  {
    id: 'job-007',
    slug: 'analista-marketing-digital',
    isDemo: true,
    isOpen: true,
    title: {
      es: 'Analista de Marketing Digital',
      en: 'Digital Marketing Analyst',
    },
    area: 'marketing',
    areaLabel: { es: 'Marketing y Comunicaciones', en: 'Marketing & Communications' },
    city: 'Bogotá',
    country: { es: 'Colombia', en: 'Colombia' },
    modality: 'remote',
    contractType: 'full-time',
    publishedAt: '2026-08-10',
    summary: {
      es: 'Buscamos un analista de marketing digital para liderar la estrategia de contenidos, redes sociales y posicionamiento de Vertex y sus clientes.',
      en: 'We are looking for a digital marketing analyst to lead content strategy, social media, and positioning for Vertex and its clients.',
    },
    description: {
      es: 'Serás responsable de planificar y ejecutar estrategias de marketing digital tanto para Vertex como para proyectos de clientes que requieran comunicación digital.',
      en: 'You will be responsible for planning and executing digital marketing strategies for both Vertex and client projects requiring digital communication.',
    },
    responsibilities: {
      es: [
        'Planificar y ejecutar estrategias de contenido digital',
        'Gestionar redes sociales corporativas',
        'Analizar métricas de rendimiento y presentar informes',
        'Colaborar con el equipo de diseño en piezas visuales',
        'Implementar campañas de posicionamiento digital',
      ],
      en: [
        'Plan and execute digital content strategies',
        'Manage corporate social media',
        'Analyze performance metrics and present reports',
        'Collaborate with the design team on visual assets',
        'Implement digital positioning campaigns',
      ],
    },
    requirements: {
      es: [
        '3+ años de experiencia en marketing digital',
        'Conocimiento de herramientas de analítica (Google Analytics, Meta Business)',
        'Experiencia en gestión de redes sociales',
        'Capacidad de redacción y storytelling',
        'Pensamiento analítico y orientación a resultados',
      ],
      en: [
        '3+ years of digital marketing experience',
        'Knowledge of analytics tools (Google Analytics, Meta Business)',
        'Social media management experience',
        'Copywriting and storytelling skills',
        'Analytical thinking and results orientation',
      ],
    },
    niceToHave: {
      es: [
        'Experiencia en marketing B2B para empresas de tecnología',
        'Conocimiento de SEO y SEM',
        'Certificaciones en marketing digital',
      ],
      en: [
        'B2B marketing experience for technology companies',
        'SEO and SEM knowledge',
        'Digital marketing certifications',
      ],
    },
    teamInfo: {
      es: 'Te unirás al equipo de comunicación y marketing, trabajando con diseñadores, productores audiovisuales y consultores de estrategia.',
      en: 'You will join the communications and marketing team, working with designers, audiovisual producers, and strategy consultants.',
    },
  },
  {
    id: 'job-008',
    slug: 'especialista-talento-humano',
    isDemo: true,
    isOpen: true,
    title: {
      es: 'Especialista de Talento Humano',
      en: 'Human Resources Specialist',
    },
    area: 'hr',
    areaLabel: { es: 'Talento Humano', en: 'Human Resources' },
    city: 'Bogotá',
    country: { es: 'Colombia', en: 'Colombia' },
    modality: 'hybrid',
    contractType: 'full-time',
    publishedAt: '2026-08-08',
    summary: {
      es: 'Buscamos un especialista en talento humano para liderar los procesos de reclutamiento, desarrollo y bienestar del equipo Vertex.',
      en: 'We are looking for an HR specialist to lead recruitment, development, and wellness processes for the Vertex team.',
    },
    description: {
      es: 'Serás responsable de atraer, seleccionar y desarrollar el talento que hace posible la misión de Vertex, asegurando una experiencia laboral positiva y alineada con la cultura de la empresa.',
      en: 'You will be responsible for attracting, selecting, and developing the talent that makes Vertex\'s mission possible, ensuring a positive work experience aligned with company culture.',
    },
    responsibilities: {
      es: [
        'Liderar procesos de reclutamiento y selección',
        'Diseñar programas de desarrollo profesional',
        'Gestionar la experiencia del colaborador',
        'Administrar procesos de onboarding',
        'Implementar iniciativas de bienestar y cultura organizacional',
      ],
      en: [
        'Lead recruitment and selection processes',
        'Design professional development programs',
        'Manage employee experience',
        'Administer onboarding processes',
        'Implement wellness and organizational culture initiatives',
      ],
    },
    requirements: {
      es: [
        '3+ años de experiencia en gestión de talento humano',
        'Experiencia en reclutamiento de perfiles tecnológicos',
        'Conocimiento de legislación laboral colombiana',
        'Habilidades de comunicación y empatía',
        'Experiencia con herramientas ATS',
      ],
      en: [
        '3+ years of human resources management experience',
        'Experience recruiting technology profiles',
        'Knowledge of Colombian labor legislation',
        'Communication and empathy skills',
        'Experience with ATS tools',
      ],
    },
    niceToHave: {
      es: [
        'Experiencia en empresas de tecnología',
        'Certificaciones en gestión de talento',
        'Conocimiento de employer branding',
      ],
      en: [
        'Experience in technology companies',
        'Talent management certifications',
        'Employer branding knowledge',
      ],
    },
    teamInfo: {
      es: 'Liderarás el área de talento humano, reportando a la dirección y trabajando transversalmente con todas las áreas de la empresa.',
      en: 'You will lead the human resources area, reporting to leadership and working cross-functionally with all company areas.',
    },
  },
  {
    id: 'job-009',
    slug: 'desarrollador-backend-nodejs',
    isDemo: true,
    isOpen: true,
    title: {
      es: 'Desarrollador Backend Node.js',
      en: 'Backend Node.js Developer',
    },
    area: 'technology',
    areaLabel: { es: 'Tecnología y Desarrollo', en: 'Technology & Development' },
    city: 'Remoto',
    country: { es: 'Colombia', en: 'Colombia' },
    modality: 'remote',
    contractType: 'contract',
    publishedAt: '2026-08-12',
    summary: {
      es: 'Buscamos un desarrollador backend con experiencia en Node.js, microservicios y bases de datos para proyectos de software empresarial.',
      en: 'We are looking for a backend developer with experience in Node.js, microservices, and databases for enterprise software projects.',
    },
    description: {
      es: 'Participarás en el diseño e implementación de APIs, microservicios y arquitecturas backend para plataformas de alto rendimiento.',
      en: 'You will participate in designing and implementing APIs, microservices, and backend architectures for high-performance platforms.',
    },
    responsibilities: {
      es: [
        'Diseñar e implementar APIs RESTful y GraphQL',
        'Desarrollar microservicios escalables',
        'Optimizar consultas y modelos de base de datos',
        'Implementar pruebas automatizadas',
        'Colaborar con equipos de frontend y DevOps',
      ],
      en: [
        'Design and implement RESTful and GraphQL APIs',
        'Develop scalable microservices',
        'Optimize database queries and models',
        'Implement automated testing',
        'Collaborate with frontend and DevOps teams',
      ],
    },
    requirements: {
      es: [
        '4+ años de experiencia en desarrollo backend con Node.js',
        'Experiencia con PostgreSQL, MongoDB o bases de datos similares',
        'Conocimiento de arquitectura de microservicios',
        'Experiencia con Docker y despliegue en la nube',
        'Familiaridad con metodologías ágiles',
      ],
      en: [
        '4+ years of backend development experience with Node.js',
        'Experience with PostgreSQL, MongoDB, or similar databases',
        'Knowledge of microservices architecture',
        'Experience with Docker and cloud deployment',
        'Familiarity with agile methodologies',
      ],
    },
    niceToHave: {
      es: [
        'Experiencia con NestJS',
        'Conocimiento de Kubernetes',
        'Experiencia con sistemas de mensajería (RabbitMQ, Kafka)',
      ],
      en: [
        'Experience with NestJS',
        'Kubernetes knowledge',
        'Experience with messaging systems (RabbitMQ, Kafka)',
      ],
    },
    teamInfo: {
      es: 'Trabajarás dentro del equipo de software factory, colaborando con arquitectos, frontend developers y el equipo de QA.',
      en: 'You will work within the software factory team, collaborating with architects, frontend developers, and the QA team.',
    },
  },
  {
    id: 'job-010',
    slug: 'productor-audiovisual',
    isDemo: true,
    isOpen: true,
    title: {
      es: 'Productor Audiovisual',
      en: 'Audiovisual Producer',
    },
    area: 'marketing',
    areaLabel: { es: 'Marketing y Comunicaciones', en: 'Marketing & Communications' },
    city: 'Cartagena',
    country: { es: 'Colombia', en: 'Colombia' },
    modality: 'onsite',
    contractType: 'contract',
    publishedAt: '2026-07-20',
    summary: {
      es: 'Buscamos un productor audiovisual con experiencia en video corporativo, animación y fotografía profesional para proyectos institucionales.',
      en: 'We are looking for an audiovisual producer experienced in corporate video, animation, and professional photography for institutional projects.',
    },
    description: {
      es: 'Producirás contenido audiovisual de alta calidad para proyectos de comunicación institucional, branding y marketing digital.',
      en: 'You will produce high-quality audiovisual content for institutional communication, branding, and digital marketing projects.',
    },
    responsibilities: {
      es: [
        'Producir videos corporativos e institucionales',
        'Realizar fotografía profesional',
        'Crear animaciones 2D y motion graphics',
        'Gestionar la posproducción y edición de contenido',
        'Coordinar equipos de producción y logística',
      ],
      en: [
        'Produce corporate and institutional videos',
        'Conduct professional photography',
        'Create 2D animations and motion graphics',
        'Manage post-production and content editing',
        'Coordinate production teams and logistics',
      ],
    },
    requirements: {
      es: [
        '3+ años de experiencia en producción audiovisual',
        'Dominio de Adobe Premiere, After Effects y Photoshop',
        'Experiencia en fotografía corporativa y de eventos',
        'Portafolio con proyectos audiovisuales relevantes',
        'Capacidad de trabajo en equipo y bajo presión',
      ],
      en: [
        '3+ years of audiovisual production experience',
        'Proficiency in Adobe Premiere, After Effects, and Photoshop',
        'Corporate and event photography experience',
        'Portfolio with relevant audiovisual projects',
        'Ability to work in teams and under pressure',
      ],
    },
    niceToHave: {
      es: [
        'Experiencia con drones para fotografía y video aéreo',
        'Conocimiento de iluminación profesional',
        'Experiencia en transmisiones en vivo',
      ],
      en: [
        'Drone experience for aerial photography and video',
        'Professional lighting knowledge',
        'Live streaming experience',
      ],
    },
    teamInfo: {
      es: 'Serás parte del equipo de producción audiovisual, trabajando con directores creativos, diseñadores gráficos y el equipo de marketing.',
      en: 'You will be part of the audiovisual production team, working with creative directors, graphic designers, and the marketing team.',
    },
  },
];

/* Funciones de búsqueda y filtrado */
export function getOpenJobs(): JobOpening[] {
  return jobOpenings.filter((j) => j.isOpen);
}

export function getJobBySlug(slug: string): JobOpening | undefined {
  return jobOpenings.find((j) => j.slug === slug);
}

export function getJobsByArea(area: JobArea): JobOpening[] {
  return jobOpenings.filter((j) => j.isOpen && j.area === area);
}

export function getJobCountByArea(area: JobArea): number {
  return jobOpenings.filter((j) => j.isOpen && j.area === area).length;
}

export function filterJobs(filters: {
  keyword?: string;
  area?: JobArea;
  country?: string;
  modality?: JobModality;
  contractType?: JobContractType;
}, locale: 'es' | 'en'): JobOpening[] {
  return jobOpenings.filter((job) => {
    if (!job.isOpen) return false;

    if (filters.keyword) {
      const kw = filters.keyword.toLowerCase();
      const titleMatch = job.title[locale].toLowerCase().includes(kw);
      const summaryMatch = job.summary[locale].toLowerCase().includes(kw);
      const areaMatch = job.areaLabel[locale].toLowerCase().includes(kw);
      if (!titleMatch && !summaryMatch && !areaMatch) return false;
    }

    if (filters.area && job.area !== filters.area) return false;
    if (filters.country && job.country[locale] !== filters.country) return false;
    if (filters.modality && job.modality !== filters.modality) return false;
    if (filters.contractType && job.contractType !== filters.contractType) return false;

    return true;
  });
}

export function getUniqueCountries(locale: 'es' | 'en'): string[] {
  const countries = new Set(jobOpenings.filter((j) => j.isOpen).map((j) => j.country[locale]));
  return Array.from(countries).sort();
}
