export interface CustomProject {
  id: string;
  title: { es: string; en: string };
  client: { es: string; en: string };
  description: { es: string; en: string };
  category: { es: string; en: string };
  coverImage?: string;
  url?: string;
  inDevelopment?: boolean;
}

export const customProjects: CustomProject[] = [
  {
    id: 'incal-agricola',
    title: {
      es: 'INCAL Agricola',
      en: 'INCAL Agricola',
    },
    client: {
      es: 'Industria de alimentos · Italia',
      en: 'Food industry · Italy',
    },
    description: {
      es: 'Sitio corporativo internacional para presentar su portafolio de concentrados, jugos, purés e ingredientes de fruta a fabricantes de alimentos y bebidas.',
      en: 'International corporate website showcasing its portfolio of concentrates, juices, purees, and fruit ingredients for food and beverage manufacturers.',
    },
    category: {
      es: 'Sitio web corporativo',
      en: 'Corporate website',
    },
    coverImage: '/images/projects/custom/incal-agricola-home.webp',
    url: 'https://www.incalagricola.com/',
  },
  {
    id: 'nela-joyeria',
    title: {
      es: 'NELA Joyería',
      en: 'NELA Joyería',
    },
    client: {
      es: 'Joyería · Colombia',
      en: 'Jewelry · Colombia',
    },
    description: {
      es: 'Tienda en línea para una joyería colombiana, con catálogo de anillos, aretes, cadenas, dijes y pulseras en plata ley 925, pago seguro y envíos a todo el país.',
      en: 'Online store for a Colombian jewelry brand, with a catalog of 925 sterling silver rings, earrings, chains, pendants, and bracelets, secure payment, and nationwide shipping.',
    },
    category: {
      es: 'Tienda en línea',
      en: 'Online store',
    },
    coverImage: '/images/projects/custom/nela-joyeria.webp',
    url: 'https://nela-joyeria.nela-joyeria.workers.dev/',
  },
  {
    id: 'gfb-solutions',
    title: {
      es: 'GFB Solutions',
      en: 'GFB Solutions',
    },
    client: {
      es: 'Alimentos y bebidas · España',
      en: 'Food and beverage · Spain',
    },
    description: {
      es: 'Sitio corporativo B2B que reúne sus soluciones de envases, materias primas, sabores y aromas, y consultoría industrial para empresas de alimentos y bebidas.',
      en: 'B2B corporate website bringing together its packaging, raw materials, flavors and aromas, and industrial consulting solutions for food and beverage businesses.',
    },
    category: {
      es: 'Sitio web corporativo',
      en: 'Corporate website',
    },
    coverImage: '/images/projects/custom/gfb-solutions.webp',
    url: 'https://gfb-solutions.vercel.app/',
    inDevelopment: true,
  },
  {
    id: 'gorgona-energy',
    title: {
      es: 'GORGONA Energy & Technology',
      en: 'GORGONA Energy & Technology',
    },
    client: {
      es: 'Energía e innovación · Colombia',
      en: 'Energy and innovation · Colombia',
    },
    description: {
      es: 'Presencia digital para comunicar proyectos de desarrollo energético, transformación digital, conectividad e innovación territorial de alto impacto.',
      en: 'Digital presence communicating high-impact energy development, digital transformation, connectivity, and territorial innovation projects.',
    },
    category: {
      es: 'Sitio web corporativo',
      en: 'Corporate website',
    },
    coverImage: '/images/projects/custom/gorgona-energy.webp',
    url: 'https://gorgona.com.co/',
  },
  {
    id: 'caribbean-tech-energy',
    title: {
      es: 'Caribbean Technology & Energy',
      en: 'Caribbean Technology & Energy',
    },
    client: {
      es: 'Tecnología y energía · Caribe colombiano',
      en: 'Technology and energy · Colombian Caribbean',
    },
    description: {
      es: 'Sitio corporativo orientado a soluciones de transición energética, conectividad, telecomunicaciones y ciencia, tecnología e innovación aplicada.',
      en: 'Corporate website focused on energy transition, connectivity, telecommunications, and applied science, technology, and innovation solutions.',
    },
    category: {
      es: 'Sitio web corporativo',
      en: 'Corporate website',
    },
    coverImage: '/images/projects/custom/caribbean-tech-energy.webp',
    url: 'https://www.caribbeantechenergy.com/',
  },
  {
    id: 'conectando-aracataca-dibulla',
    title: {
      es: 'Conectando Aracataca y Dibulla',
      en: 'Connecting Aracataca and Dibulla',
    },
    client: {
      es: 'Inclusión digital · Magdalena y La Guajira',
      en: 'Digital inclusion · Magdalena and La Guajira',
    },
    description: {
      es: 'Portal informativo para el proyecto de implementación de 44 zonas digitales de acceso público gratuito en comunidades rurales.',
      en: 'Information portal for a project implementing 44 free public-access digital zones in rural communities.',
    },
    category: {
      es: 'Portal informativo',
      en: 'Information portal',
    },
    coverImage: '/images/projects/custom/conectando-aracataca-dibulla.webp',
    url: 'https://www.conectandoaracatacaydibulla.com/',
  },
  {
    id: 'campus-conectando-bolivar',
    title: {
      es: 'Campus Conectando Bolívar',
      en: 'Connecting Bolívar Campus',
    },
    client: {
      es: 'Formación digital · Bolívar',
      en: 'Digital education · Bolívar',
    },
    description: {
      es: 'Campus virtual de formación y apropiación digital para comunidades vinculadas a 63 zonas WiFi rurales en municipios PDET de Bolívar.',
      en: 'Virtual learning and digital adoption campus for communities connected to 63 rural Wi-Fi zones across PDET municipalities in Bolívar.',
    },
    category: {
      es: 'Plataforma educativa',
      en: 'Learning platform',
    },
    coverImage: '/images/projects/custom/campus-bolivar.webp',
    url: 'https://campus.conectandobolivar.com/',
  },
  {
    id: 'campus-aracataca-dibulla',
    title: {
      es: 'Campus Aracataca y Dibulla',
      en: 'Aracataca and Dibulla Campus',
    },
    client: {
      es: 'Formación digital · Magdalena y La Guajira',
      en: 'Digital education · Magdalena and La Guajira',
    },
    description: {
      es: 'Plataforma educativa que centraliza cursos y contenidos para fortalecer la apropiación de las TIC y el desarrollo de comunidades rurales.',
      en: 'Learning platform centralizing courses and content to strengthen technology adoption and development in rural communities.',
    },
    category: {
      es: 'Plataforma educativa',
      en: 'Learning platform',
    },
    coverImage: '/images/projects/custom/campus-aracataca-dibulla.webp',
    url: 'https://campus.conectandoaracatacaydibulla.com/',
  },
];
