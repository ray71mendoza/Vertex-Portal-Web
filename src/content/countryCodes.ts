// Dial codes for the contact form's phone field country selector.
// `iso` is the ISO 3166-1 alpha-2 code, used to derive the flag emoji.
export interface CountryDialCode {
  iso: string;
  dial: string;
  es: string;
  en: string;
}

export const countryDialCodes: CountryDialCode[] = [
  // Colombia first — Vertex's home market and the default selection.
  { iso: 'CO', dial: '+57', es: 'Colombia', en: 'Colombia' },

  // Rest of Latin America
  { iso: 'MX', dial: '+52', es: 'México', en: 'Mexico' },
  { iso: 'AR', dial: '+54', es: 'Argentina', en: 'Argentina' },
  { iso: 'BR', dial: '+55', es: 'Brasil', en: 'Brazil' },
  { iso: 'CL', dial: '+56', es: 'Chile', en: 'Chile' },
  { iso: 'VE', dial: '+58', es: 'Venezuela', en: 'Venezuela' },
  { iso: 'PE', dial: '+51', es: 'Perú', en: 'Peru' },
  { iso: 'EC', dial: '+593', es: 'Ecuador', en: 'Ecuador' },
  { iso: 'BO', dial: '+591', es: 'Bolivia', en: 'Bolivia' },
  { iso: 'PY', dial: '+595', es: 'Paraguay', en: 'Paraguay' },
  { iso: 'UY', dial: '+598', es: 'Uruguay', en: 'Uruguay' },
  { iso: 'PA', dial: '+507', es: 'Panamá', en: 'Panama' },
  { iso: 'CR', dial: '+506', es: 'Costa Rica', en: 'Costa Rica' },
  { iso: 'GT', dial: '+502', es: 'Guatemala', en: 'Guatemala' },
  { iso: 'HN', dial: '+504', es: 'Honduras', en: 'Honduras' },
  { iso: 'SV', dial: '+503', es: 'El Salvador', en: 'El Salvador' },
  { iso: 'NI', dial: '+505', es: 'Nicaragua', en: 'Nicaragua' },
  { iso: 'DO', dial: '+1', es: 'República Dominicana', en: 'Dominican Republic' },
  { iso: 'CU', dial: '+53', es: 'Cuba', en: 'Cuba' },
  { iso: 'PR', dial: '+1', es: 'Puerto Rico', en: 'Puerto Rico' },

  // North America
  { iso: 'US', dial: '+1', es: 'Estados Unidos', en: 'United States' },
  { iso: 'CA', dial: '+1', es: 'Canadá', en: 'Canada' },

  // Europe
  { iso: 'ES', dial: '+34', es: 'España', en: 'Spain' },
  { iso: 'PT', dial: '+351', es: 'Portugal', en: 'Portugal' },
  { iso: 'FR', dial: '+33', es: 'Francia', en: 'France' },
  { iso: 'DE', dial: '+49', es: 'Alemania', en: 'Germany' },
  { iso: 'IT', dial: '+39', es: 'Italia', en: 'Italy' },
  { iso: 'GB', dial: '+44', es: 'Reino Unido', en: 'United Kingdom' },
  { iso: 'IE', dial: '+353', es: 'Irlanda', en: 'Ireland' },
  { iso: 'NL', dial: '+31', es: 'Países Bajos', en: 'Netherlands' },
  { iso: 'BE', dial: '+32', es: 'Bélgica', en: 'Belgium' },
  { iso: 'CH', dial: '+41', es: 'Suiza', en: 'Switzerland' },
  { iso: 'AT', dial: '+43', es: 'Austria', en: 'Austria' },
  { iso: 'SE', dial: '+46', es: 'Suecia', en: 'Sweden' },
  { iso: 'NO', dial: '+47', es: 'Noruega', en: 'Norway' },
  { iso: 'DK', dial: '+45', es: 'Dinamarca', en: 'Denmark' },
  { iso: 'FI', dial: '+358', es: 'Finlandia', en: 'Finland' },
  { iso: 'PL', dial: '+48', es: 'Polonia', en: 'Poland' },
  { iso: 'GR', dial: '+30', es: 'Grecia', en: 'Greece' },
  { iso: 'RO', dial: '+40', es: 'Rumania', en: 'Romania' },
  { iso: 'CZ', dial: '+420', es: 'República Checa', en: 'Czech Republic' },
  { iso: 'HU', dial: '+36', es: 'Hungría', en: 'Hungary' },
  { iso: 'RU', dial: '+7', es: 'Rusia', en: 'Russia' },
  { iso: 'UA', dial: '+380', es: 'Ucrania', en: 'Ukraine' },

  // Asia & Oceania
  { iso: 'CN', dial: '+86', es: 'China', en: 'China' },
  { iso: 'JP', dial: '+81', es: 'Japón', en: 'Japan' },
  { iso: 'KR', dial: '+82', es: 'Corea del Sur', en: 'South Korea' },
  { iso: 'IN', dial: '+91', es: 'India', en: 'India' },
  { iso: 'SG', dial: '+65', es: 'Singapur', en: 'Singapore' },
  { iso: 'ID', dial: '+62', es: 'Indonesia', en: 'Indonesia' },
  { iso: 'MY', dial: '+60', es: 'Malasia', en: 'Malaysia' },
  { iso: 'PH', dial: '+63', es: 'Filipinas', en: 'Philippines' },
  { iso: 'TH', dial: '+66', es: 'Tailandia', en: 'Thailand' },
  { iso: 'VN', dial: '+84', es: 'Vietnam', en: 'Vietnam' },
  { iso: 'AE', dial: '+971', es: 'Emiratos Árabes Unidos', en: 'United Arab Emirates' },
  { iso: 'SA', dial: '+966', es: 'Arabia Saudita', en: 'Saudi Arabia' },
  { iso: 'IL', dial: '+972', es: 'Israel', en: 'Israel' },
  { iso: 'TR', dial: '+90', es: 'Turquía', en: 'Turkey' },
  { iso: 'AU', dial: '+61', es: 'Australia', en: 'Australia' },
  { iso: 'NZ', dial: '+64', es: 'Nueva Zelanda', en: 'New Zealand' },

  // Africa
  { iso: 'ZA', dial: '+27', es: 'Sudáfrica', en: 'South Africa' },
  { iso: 'NG', dial: '+234', es: 'Nigeria', en: 'Nigeria' },
  { iso: 'EG', dial: '+20', es: 'Egipto', en: 'Egypt' },
  { iso: 'MA', dial: '+212', es: 'Marruecos', en: 'Morocco' },
];
