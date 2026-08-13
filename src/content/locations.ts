/* ============================================
   CONTENIDO DE DEMOSTRACIÓN
   Reemplazar con información oficial de Vertex
   ============================================ */

export type PresenceType = 'office' | 'operations' | 'projects' | 'coverage';

export interface Office {
  id: string;
  city: string;
  country: { es: string; en: string };
  address: { es: string; en: string };
  phone: string;
  email: string;
  schedule: { es: string; en: string };
  mapsUrl: string;
  type: PresenceType;
  isDemo: boolean;
}

export interface CoverageCountry {
  id: string;
  name: { es: string; en: string };
  code: string;
  type: PresenceType;
  cities?: string[];
  isDemo: boolean;
}

/* Contenido de demostración — Oficinas */
export const offices: Office[] = [
  {
    id: 'bogota',
    city: 'Bogotá',
    country: { es: 'Colombia', en: 'Colombia' },
    /* Dato pendiente de validación — Dirección de demostración */
    address: {
      es: 'Calle 93 #11A-28, Oficina 401, Bogotá, Colombia',
      en: 'Calle 93 #11A-28, Office 401, Bogotá, Colombia',
    },
    phone: '+57 601 000 0000',
    email: 'gerenciavertexsas@gmail.com',
    schedule: {
      es: 'Lunes a viernes, 8:00 a.m. – 6:00 p.m.',
      en: 'Monday to Friday, 8:00 AM – 6:00 PM',
    },
    mapsUrl: 'https://maps.google.com/?q=Bogota+Colombia',
    type: 'office',
    isDemo: true,
  },
  {
    id: 'cartagena',
    city: 'Cartagena',
    country: { es: 'Colombia', en: 'Colombia' },
    /* Dato pendiente de validación — Dirección de demostración */
    address: {
      es: 'Centro, Cartagena de Indias, Colombia',
      en: 'Centro, Cartagena de Indias, Colombia',
    },
    phone: '+57 605 000 0000',
    email: 'gerenciavertexsas@gmail.com',
    schedule: {
      es: 'Lunes a viernes, 8:00 a.m. – 6:00 p.m.',
      en: 'Monday to Friday, 8:00 AM – 6:00 PM',
    },
    mapsUrl: 'https://maps.google.com/?q=Cartagena+Colombia',
    type: 'office',
    isDemo: true,
  },
  {
    id: 'mexico-city',
    city: 'Ciudad de México',
    country: { es: 'México', en: 'Mexico' },
    /* Dato pendiente de validación — Dirección de demostración */
    address: {
      es: 'Paseo de la Reforma 250, Cuauhtémoc, CDMX, México',
      en: 'Paseo de la Reforma 250, Cuauhtémoc, CDMX, Mexico',
    },
    phone: '+52 55 0000 0000',
    email: 'contacto@vertexdemo.com',
    schedule: {
      es: 'Lunes a viernes, 9:00 a.m. – 6:00 p.m.',
      en: 'Monday to Friday, 9:00 AM – 6:00 PM',
    },
    mapsUrl: 'https://maps.google.com/?q=Ciudad+de+Mexico',
    type: 'operations',
    isDemo: true,
  },
];

/* Contenido de demostración — Países de cobertura */
export const coverageCountries: CoverageCountry[] = [
  {
    id: 'co',
    name: { es: 'Colombia', en: 'Colombia' },
    code: 'CO',
    type: 'office',
    cities: ['Bogotá', 'Cartagena', 'Medellín', 'Barranquilla'],
    isDemo: true,
  },
  {
    id: 'mx',
    name: { es: 'México', en: 'Mexico' },
    code: 'MX',
    type: 'operations',
    cities: ['Ciudad de México', 'Monterrey'],
    isDemo: true,
  },
  {
    id: 'pe',
    name: { es: 'Perú', en: 'Peru' },
    code: 'PE',
    type: 'projects',
    cities: ['Lima'],
    isDemo: true,
  },
  {
    id: 'cl',
    name: { es: 'Chile', en: 'Chile' },
    code: 'CL',
    type: 'projects',
    cities: ['Santiago'],
    isDemo: true,
  },
  {
    id: 'ec',
    name: { es: 'Ecuador', en: 'Ecuador' },
    code: 'EC',
    type: 'coverage',
    cities: ['Quito'],
    isDemo: true,
  },
  {
    id: 'pa',
    name: { es: 'Panamá', en: 'Panama' },
    code: 'PA',
    type: 'coverage',
    cities: ['Ciudad de Panamá'],
    isDemo: true,
  },
  {
    id: 'cr',
    name: { es: 'Costa Rica', en: 'Costa Rica' },
    code: 'CR',
    type: 'coverage',
    cities: ['San José'],
    isDemo: true,
  },
  {
    id: 'ar',
    name: { es: 'Argentina', en: 'Argentina' },
    code: 'AR',
    type: 'coverage',
    cities: ['Buenos Aires'],
    isDemo: true,
  },
];

export const presenceTypeLabels: Record<PresenceType, { es: string; en: string }> = {
  office: { es: 'Oficina', en: 'Office' },
  operations: { es: 'Operaciones', en: 'Operations' },
  projects: { es: 'Proyectos', en: 'Projects' },
  coverage: { es: 'Cobertura', en: 'Coverage' },
};

export function getOfficesByType(type?: PresenceType): Office[] {
  if (!type) return offices;
  return offices.filter((o) => o.type === type);
}

export function getCountriesByType(type?: PresenceType): CoverageCountry[] {
  if (!type) return coverageCountries;
  return coverageCountries.filter((c) => c.type === type);
}
