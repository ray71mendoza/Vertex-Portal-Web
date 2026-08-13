export type ServiceCategory =
  | 'innovation-digital-transformation'
  | 'software-development'
  | 'strategic-design-branding'
  | 'digital-marketing-communications'
  | 'audiovisual-production'
  | 'public-sector-large-projects'
  | 'trade-show-experiences';

export interface ServiceData {
  id: ServiceCategory;
  slug: { es: string; en: string };
  icon: string;
  capabilities: { es: string[]; en: string[] };
  problems: { es: string[]; en: string[] };
  benefits: { es: string[]; en: string[] };
  targetAudience: { es: string[]; en: string[] };
  order: number;
}

export const services: ServiceData[] = [
  {
    id: 'innovation-digital-transformation',
    slug: {
      es: 'innovacion-transformacion-digital',
      en: 'innovation-digital-transformation',
    },
    icon: 'Lightbulb',
    capabilities: {
      es: [
        'Consultoría en transformación digital',
        'Automatización de procesos empresariales',
        'Implementación de soluciones basadas en inteligencia artificial',
        'Analítica de datos y visualización de información',
        'Arquitectura e integración de soluciones digitales',
      ],
      en: [
        'Digital transformation consulting',
        'Business process automation',
        'AI-based solution implementation',
        'Data analytics and information visualization',
        'Digital solution architecture and integration',
      ],
    },
    problems: {
      es: [
        'Procesos manuales que consumen tiempo y recursos',
        'Falta de visibilidad en datos clave para la toma de decisiones',
        'Desconexión entre áreas y sistemas de la organización',
        'Resistencia al cambio y falta de adopción tecnológica',
        'Dificultad para escalar operaciones de forma eficiente',
      ],
      en: [
        'Manual processes that consume time and resources',
        'Lack of visibility into key data for decision-making',
        'Disconnection between organizational areas and systems',
        'Resistance to change and lack of technology adoption',
        'Difficulty scaling operations efficiently',
      ],
    },
    benefits: {
      es: [
        'Procesos optimizados y automatizados',
        'Decisiones basadas en datos e inteligencia artificial',
        'Mayor agilidad organizacional',
        'Reducción de costos operativos',
        'Innovación continua y competitividad sostenible',
      ],
      en: [
        'Optimized and automated processes',
        'Data-driven and AI-powered decisions',
        'Greater organizational agility',
        'Reduced operational costs',
        'Continuous innovation and sustainable competitiveness',
      ],
    },
    targetAudience: {
      es: [
        'Empresas en proceso de digitalización',
        'Organizaciones con procesos manuales complejos',
        'Entidades que necesitan mejorar su toma de decisiones con datos',
        'Compañías que buscan incorporar inteligencia artificial',
      ],
      en: [
        'Companies undergoing digitalization',
        'Organizations with complex manual processes',
        'Entities needing to improve data-driven decision-making',
        'Companies looking to incorporate artificial intelligence',
      ],
    },
    order: 1,
  },
  {
    id: 'software-development',
    slug: {
      es: 'desarrollo-de-software',
      en: 'software-development',
    },
    icon: 'Code2',
    capabilities: {
      es: [
        'Software a la medida',
        'Aplicaciones web y móviles',
        'Plataformas y sistemas empresariales',
        'Servicios de software factory',
        'Integración de API y servicios',
        'Soluciones cloud',
        'Infraestructura tecnológica',
        'Hardware y software empresarial',
        'Mantenimiento, soporte y evolución de software',
      ],
      en: [
        'Custom software',
        'Web and mobile applications',
        'Enterprise platforms and systems',
        'Software factory services',
        'API and service integration',
        'Cloud solutions',
        'Technology infrastructure',
        'Enterprise hardware and software',
        'Software maintenance, support and evolution',
      ],
    },
    problems: {
      es: [
        'Sistemas obsoletos que limitan el crecimiento',
        'Falta de integración entre plataformas',
        'Necesidad de soluciones que no existen en el mercado',
        'Costos elevados de mantenimiento de software legado',
        'Dificultad para escalar la infraestructura tecnológica',
      ],
      en: [
        'Outdated systems limiting growth',
        'Lack of integration between platforms',
        'Need for solutions that don\'t exist in the market',
        'High maintenance costs for legacy software',
        'Difficulty scaling technology infrastructure',
      ],
    },
    benefits: {
      es: [
        'Software diseñado para las necesidades exactas de la organización',
        'Integración completa entre sistemas',
        'Escalabilidad y rendimiento garantizados',
        'Soporte continuo y evolución del producto',
        'Reducción de dependencia de soluciones genéricas',
      ],
      en: [
        'Software designed for the organization\'s exact needs',
        'Complete system integration',
        'Guaranteed scalability and performance',
        'Continuous support and product evolution',
        'Reduced dependency on generic solutions',
      ],
    },
    targetAudience: {
      es: [
        'Empresas que necesitan software personalizado',
        'Organizaciones con sistemas legados que modernizar',
        'Compañías que requieren plataformas web o móviles',
        'Entidades que buscan migrar a la nube',
      ],
      en: [
        'Companies needing custom software',
        'Organizations with legacy systems to modernize',
        'Companies requiring web or mobile platforms',
        'Entities looking to migrate to the cloud',
      ],
    },
    order: 2,
  },
  {
    id: 'strategic-design-branding',
    slug: {
      es: 'diseno-estrategico-branding',
      en: 'strategic-design-branding',
    },
    icon: 'Palette',
    capabilities: {
      es: [
        'Estrategia, construcción y posicionamiento de marca',
        'Creación y renovación de identidad corporativa',
        'Diseño UX/UI',
        'Diseño editorial',
        'Presentaciones corporativas e institucionales',
        'Material publicitario, comercial y POP',
        'Diseño para eventos y proyectos institucionales',
        'Packaging y etiquetas',
        'Manuales de identidad visual',
        'Adaptación de piezas para medios digitales e impresos',
      ],
      en: [
        'Brand strategy, building and positioning',
        'Corporate identity creation and renewal',
        'UX/UI design',
        'Editorial design',
        'Corporate and institutional presentations',
        'Advertising, commercial and POP materials',
        'Event and institutional project design',
        'Packaging and labels',
        'Visual identity manuals',
        'Piece adaptation for digital and print media',
      ],
    },
    problems: {
      es: [
        'Marca desactualizada que no refleja la evolución de la organización',
        'Inconsistencia visual entre canales y materiales',
        'Experiencias digitales que no conectan con los usuarios',
        'Falta de materiales corporativos profesionales',
      ],
      en: [
        'Outdated brand that doesn\'t reflect organizational evolution',
        'Visual inconsistency across channels and materials',
        'Digital experiences that don\'t connect with users',
        'Lack of professional corporate materials',
      ],
    },
    benefits: {
      es: [
        'Marca coherente y reconocible en todos los puntos de contacto',
        'Experiencias de usuario intuitivas y atractivas',
        'Materiales corporativos de alta calidad',
        'Posicionamiento de marca fortalecido',
      ],
      en: [
        'Coherent and recognizable brand at every touchpoint',
        'Intuitive and attractive user experiences',
        'High-quality corporate materials',
        'Strengthened brand positioning',
      ],
    },
    targetAudience: {
      es: [
        'Empresas que necesitan construir o renovar su marca',
        'Organizaciones con presencia digital débil',
        'Compañías que requieren diseño UX/UI profesional',
        'Entidades que necesitan materiales corporativos integrales',
      ],
      en: [
        'Companies needing to build or renew their brand',
        'Organizations with weak digital presence',
        'Companies requiring professional UX/UI design',
        'Entities needing comprehensive corporate materials',
      ],
    },
    order: 3,
  },
  {
    id: 'digital-marketing-communications',
    slug: {
      es: 'marketing-comunicacion-digital',
      en: 'digital-marketing-communications',
    },
    icon: 'Megaphone',
    capabilities: {
      es: [
        'Estrategias de comunicación digital',
        'Gestión de presencia y reputación de marca',
        'Marketing de contenidos',
        'Gestión de redes sociales',
        'Posicionamiento y visibilidad digital',
        'Análisis de resultados y rendimiento de canales',
      ],
      en: [
        'Digital communication strategies',
        'Brand presence and reputation management',
        'Content marketing',
        'Social media management',
        'Digital positioning and visibility',
        'Results analysis and channel performance',
      ],
    },
    problems: {
      es: [
        'Baja visibilidad digital de la marca',
        'Ausencia de estrategia de comunicación clara',
        'Desconexión con las audiencias objetivo',
        'Falta de medición del impacto de las acciones digitales',
      ],
      en: [
        'Low digital brand visibility',
        'Absence of clear communication strategy',
        'Disconnection with target audiences',
        'Lack of measurement of digital actions impact',
      ],
    },
    benefits: {
      es: [
        'Mayor alcance y visibilidad de marca',
        'Conexión efectiva con audiencias objetivo',
        'Contenido estratégico que genera valor',
        'Decisiones basadas en datos de rendimiento',
      ],
      en: [
        'Greater brand reach and visibility',
        'Effective connection with target audiences',
        'Strategic content that generates value',
        'Performance data-driven decisions',
      ],
    },
    targetAudience: {
      es: [
        'Empresas que buscan aumentar su presencia digital',
        'Organizaciones que necesitan gestión profesional de redes',
        'Compañías que requieren estrategias de contenido',
        'Entidades que necesitan medir su impacto digital',
      ],
      en: [
        'Companies looking to increase digital presence',
        'Organizations needing professional social media management',
        'Companies requiring content strategies',
        'Entities needing to measure digital impact',
      ],
    },
    order: 4,
  },
  {
    id: 'audiovisual-production',
    slug: {
      es: 'produccion-audiovisual',
      en: 'audiovisual-production',
    },
    icon: 'Video',
    capabilities: {
      es: [
        'Videos corporativos e institucionales',
        'Piezas audiovisuales publicitarias y comerciales',
        'Animación 2D y motion graphics',
        'Fotografía corporativa y profesional',
        'Edición, posproducción y adaptación a diferentes formatos',
      ],
      en: [
        'Corporate and institutional videos',
        'Advertising and commercial audiovisual pieces',
        '2D animation and motion graphics',
        'Corporate and professional photography',
        'Editing, post-production and format adaptation',
      ],
    },
    problems: {
      es: [
        'Contenido visual de baja calidad que no representa la marca',
        'Falta de material audiovisual para comunicación institucional',
        'Necesidad de contenido animado para redes y presentaciones',
        'Ausencia de fotografía profesional corporativa',
      ],
      en: [
        'Low-quality visual content that doesn\'t represent the brand',
        'Lack of audiovisual material for institutional communication',
        'Need for animated content for social media and presentations',
        'Absence of professional corporate photography',
      ],
    },
    benefits: {
      es: [
        'Contenido audiovisual de alta calidad y propósito',
        'Material versátil para múltiples canales',
        'Comunicación visual que refuerza la marca',
        'Producción profesional de principio a fin',
      ],
      en: [
        'High-quality, purpose-driven audiovisual content',
        'Versatile material for multiple channels',
        'Visual communication that reinforces the brand',
        'Professional production from start to finish',
      ],
    },
    targetAudience: {
      es: [
        'Empresas que necesitan videos corporativos',
        'Organizaciones con eventos que requieren cobertura',
        'Compañías que necesitan contenido animado',
        'Entidades que requieren fotografía profesional',
      ],
      en: [
        'Companies needing corporate videos',
        'Organizations with events requiring coverage',
        'Companies needing animated content',
        'Entities requiring professional photography',
      ],
    },
    order: 5,
  },
  {
    id: 'public-sector-large-projects',
    slug: {
      es: 'sector-publico-grandes-proyectos',
      en: 'public-sector-large-projects',
    },
    icon: 'Building2',
    capabilities: {
      es: [
        'Apropiación social de la tecnología',
        'Comunicación estratégica para infraestructura y desarrollo territorial',
        'Plataformas educativas y de formación',
        'Programas de innovación pública y organizacional',
        'Gestión del cambio y adopción tecnológica',
        'Ecosistemas y plataformas digitales',
        'Contenidos educativos, informativos e institucionales',
        'Formulación y ejecución de proyectos tecnológicos',
        'Medición, seguimiento y evaluación de resultados e impacto',
      ],
      en: [
        'Social technology adoption',
        'Strategic communication for infrastructure and territorial development',
        'Educational and training platforms',
        'Public and organizational innovation programs',
        'Change management and technology adoption',
        'Digital ecosystems and platforms',
        'Educational, informational and institutional content',
        'Technology project formulation and execution',
        'Measurement, monitoring and results impact evaluation',
      ],
    },
    problems: {
      es: [
        'Baja adopción de tecnología en entidades públicas',
        'Falta de comunicación efectiva en proyectos de infraestructura',
        'Ausencia de plataformas digitales para servicios públicos',
        'Dificultad para medir el impacto de programas y proyectos',
        'Resistencia al cambio organizacional',
      ],
      en: [
        'Low technology adoption in public entities',
        'Lack of effective communication in infrastructure projects',
        'Absence of digital platforms for public services',
        'Difficulty measuring program and project impact',
        'Resistance to organizational change',
      ],
    },
    benefits: {
      es: [
        'Mayor adopción y apropiación de tecnología',
        'Comunicación clara y efectiva para grandes proyectos',
        'Plataformas que mejoran servicios públicos',
        'Medición verificable de resultados e impacto',
        'Transferencia de conocimiento y sostenibilidad',
      ],
      en: [
        'Greater technology adoption and ownership',
        'Clear and effective communication for large projects',
        'Platforms that improve public services',
        'Verifiable measurement of results and impact',
        'Knowledge transfer and sustainability',
      ],
    },
    targetAudience: {
      es: [
        'Entidades públicas en proceso de modernización',
        'Proyectos de infraestructura que necesitan comunicación',
        'Organizaciones que ejecutan programas de innovación',
        'Instituciones que requieren plataformas educativas',
      ],
      en: [
        'Public entities undergoing modernization',
        'Infrastructure projects needing communication',
        'Organizations executing innovation programs',
        'Institutions requiring educational platforms',
      ],
    },
    order: 6,
  },
  {
    id: 'trade-show-experiences',
    slug: {
      es: 'stands-experiencias-feriales',
      en: 'trade-show-experiences',
    },
    icon: 'LayoutGrid',
    capabilities: {
      es: [
        'Conceptualización y diseño creativo',
        'Diseño y modelado 3D',
        'Distribución y optimización del espacio',
        'Paneles gráficos, murales y piezas visuales',
        'Planos, medidas y especificaciones técnicas',
        'Selección de mobiliario y equipos',
        'Coordinación con organizadores y proveedores',
        'Gestión de requerimientos técnicos y formularios',
        'Planificación logística nacional e internacional',
        'Material comercial y promocional',
        'Coordinación de producción, montaje y desmontaje',
        'Acompañamiento integral',
      ],
      en: [
        'Creative conceptualization and design',
        '3D design and modeling',
        'Space distribution and optimization',
        'Graphic panels, murals and visual pieces',
        'Plans, measurements and technical specifications',
        'Furniture and equipment selection',
        'Coordination with organizers and suppliers',
        'Technical requirements and forms management',
        'National and international logistics planning',
        'Commercial and promotional materials',
        'Production, assembly and disassembly coordination',
        'Comprehensive support',
      ],
    },
    problems: {
      es: [
        'Necesidad de un stand que destaque en una feria',
        'Logística compleja para eventos nacionales e internacionales',
        'Falta de coherencia entre la marca y el espacio físico',
        'Coordinación de múltiples proveedores y tiempos',
      ],
      en: [
        'Need for a standout trade show booth',
        'Complex logistics for national and international events',
        'Lack of coherence between brand and physical space',
        'Coordination of multiple suppliers and timelines',
      ],
    },
    benefits: {
      es: [
        'Stand que comunica y posiciona la marca',
        'Gestión integral sin preocupaciones logísticas',
        'Diseño optimizado para el espacio asignado',
        'Coordinación profesional de principio a fin',
      ],
      en: [
        'Booth that communicates and positions the brand',
        'Comprehensive management without logistics worries',
        'Design optimized for the assigned space',
        'Professional coordination from start to finish',
      ],
    },
    targetAudience: {
      es: [
        'Empresas que participan en ferias y exposiciones',
        'Organizaciones que necesitan presencia en eventos',
        'Compañías con participación ferial internacional',
        'Entidades públicas con representación en eventos',
      ],
      en: [
        'Companies participating in trade shows and exhibitions',
        'Organizations needing event presence',
        'Companies with international trade show participation',
        'Public entities with event representation',
      ],
    },
    order: 7,
  },
];

export function getServiceBySlug(slug: string, locale: 'es' | 'en'): ServiceData | undefined {
  return services.find((s) => s.slug[locale] === slug);
}

export function getServiceById(id: ServiceCategory): ServiceData | undefined {
  return services.find((s) => s.id === id);
}
