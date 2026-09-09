import type { PolicySection } from './dataPolicy';

export const cookiePolicySections: PolicySection[] = [
  {
    id: 'que-son',
    number: '1',
    title: { es: '¿Qué son las cookies y tecnologías similares?', en: 'What are cookies and similar technologies?' },
    paragraphs: [
      {
        es: 'Una cookie es un pequeño archivo de texto que un sitio web guarda en tu navegador para recordar información entre visitas, como tus preferencias o tu sesión. Algunos proveedores de analítica y publicidad usan mecanismos equivalentes (por ejemplo, identificadores en el navegador) para fines similares. En este documento nos referimos a todos ellos como "cookies".',
        en: 'A cookie is a small text file that a website stores in your browser to remember information between visits, such as your preferences or session. Some analytics and advertising providers use equivalent mechanisms (for example, browser identifiers) for similar purposes. In this document we refer to all of them as "cookies".',
      },
      {
        es: 'Vertex organiza las cookies y tecnologías que usa en cuatro categorías: necesarias, preferencias, analítica y marketing. Puedes elegir cuáles activar (salvo las necesarias) desde el banner de cookies o desde "Preferencias de cookies" en el pie de página.',
        en: 'Vertex organizes the cookies and technologies it uses into four categories: necessary, preferences, analytics, and marketing. You can choose which ones to activate (except necessary ones) from the cookie banner or from "Cookie preferences" in the site footer.',
      },
    ],
  },
  {
    id: 'necesarias',
    number: '2',
    title: { es: 'Cookies necesarias', en: 'Necessary cookies' },
    paragraphs: [
      {
        es: 'Permiten el funcionamiento básico del sitio, la seguridad y recordar tu decisión de consentimiento. No requieren autorización porque el sitio no puede operar correctamente sin ellas, y no pueden desactivarse.',
        en: 'These allow the website\'s basic operation, security, and remembering your consent choice. They do not require authorization because the site cannot operate correctly without them, and they cannot be turned off.',
      },
    ],
  },
  {
    id: 'preferencias',
    number: '3',
    title: { es: 'Cookies de preferencias', en: 'Preference cookies' },
    paragraphs: [
      {
        es: 'Recuerdan elecciones que mejoran tu experiencia, como el idioma en el que navegas el sitio (español o inglés).',
        en: 'These remember choices that improve your experience, such as the language in which you browse the site (Spanish or English).',
      },
    ],
  },
  {
    id: 'analitica',
    number: '4',
    title: { es: 'Tecnologías de analítica', en: 'Analytics technologies' },
    paragraphs: [
      {
        es: 'Nos ayudan a entender cómo se usa el sitio (páginas visitadas, comportamiento de navegación) para mejorarlo. Incluyen Google Analytics 4, Microsoft Clarity y una cookie propia de atribución (vertex_attribution) que identifica, de forma agregada y sin datos personales sensibles, qué canal condujo a un contacto comercial. Solo se activan si otorgas tu autorización.',
        en: 'These help us understand how the site is used (pages visited, browsing behavior) so we can improve it. They include Google Analytics 4, Microsoft Clarity, and a first-party attribution cookie (vertex_attribution) that identifies, on an aggregate basis and without sensitive personal data, which channel led to a commercial inquiry. They are only activated if you grant your authorization.',
      },
    ],
  },
  {
    id: 'marketing',
    number: '5',
    title: { es: 'Tecnologías de marketing', en: 'Marketing technologies' },
    paragraphs: [
      {
        es: 'Se usan para medir y mejorar nuestra publicidad. Incluyen el LinkedIn Insight Tag, Google Ads y Meta Pixel. Solo se activan si otorgas tu autorización, y nunca se activan en las páginas de postulación a vacantes, para no exponer información de candidatos a estas herramientas publicitarias.',
        en: 'These are used to measure and improve our advertising. They include the LinkedIn Insight Tag, Google Ads, and Meta Pixel. They are only activated if you grant your authorization, and they are never activated on job application pages, so that candidate information is never exposed to these advertising tools.',
      },
    ],
  },
  {
    id: 'tabla-cookies',
    number: '6',
    title: { es: 'Tabla de cookies y tecnologías', en: 'Cookie and technology table' },
    paragraphs: [
      {
        es: 'Los nombres exactos de las cookies de terceros pueden cambiar según la versión de cada proveedor; consulta la documentación oficial de cada uno para el detalle más actualizado.',
        en: 'The exact names of third-party cookies may change depending on each provider\'s version; consult each provider\'s official documentation for the most up-to-date detail.',
      },
    ],
    table: {
      headers: [
        { es: 'Cookie / tecnología', en: 'Cookie / technology' },
        { es: 'Proveedor', en: 'Provider' },
        { es: 'Categoría', en: 'Category' },
        { es: 'Finalidad', en: 'Purpose' },
        { es: 'Vigencia aproximada', en: 'Approximate retention' },
      ],
      rows: [
        [
          { es: 'vertex_cookie_consent', en: 'vertex_cookie_consent' },
          { es: 'Vertex (propia)', en: 'Vertex (first-party)' },
          { es: 'Necesaria', en: 'Necessary' },
          { es: 'Almacena tu decisión de consentimiento.', en: 'Stores your consent choice.' },
          { es: 'Hasta 12 meses', en: 'Up to 12 months' },
        ],
        [
          { es: 'vertex_locale', en: 'vertex_locale' },
          { es: 'Vertex (propia)', en: 'Vertex (first-party)' },
          { es: 'Preferencias', en: 'Preferences' },
          { es: 'Recuerda tu idioma preferido.', en: 'Remembers your preferred language.' },
          { es: 'Hasta 12 meses', en: 'Up to 12 months' },
        ],
        [
          { es: 'vertex_attribution', en: 'vertex_attribution' },
          { es: 'Vertex (propia)', en: 'Vertex (first-party)' },
          { es: 'Analítica', en: 'Analytics' },
          { es: 'Identifica de forma agregada el canal de adquisición de un contacto.', en: 'Identifies, on an aggregate basis, the acquisition channel of an inquiry.' },
          { es: 'Hasta 60 días', en: 'Up to 60 days' },
        ],
        [
          { es: '_ga, _ga_*, _gid y similares', en: '_ga, _ga_*, _gid, and similar' },
          { es: 'Google (Google Analytics 4 / Google tag)', en: 'Google (Google Analytics 4 / Google tag)' },
          { es: 'Analítica', en: 'Analytics' },
          { es: 'Medición de uso del sitio.', en: 'Site usage measurement.' },
          { es: 'Según documentación de Google (hasta 13 meses)', en: 'Per Google documentation (up to 13 months)' },
        ],
        [
          { es: '_clck, _clsk', en: '_clck, _clsk' },
          { es: 'Microsoft Clarity', en: 'Microsoft Clarity' },
          { es: 'Analítica', en: 'Analytics' },
          { es: 'Análisis de comportamiento de navegación (con enmascaramiento de campos sensibles).', en: 'Browsing behavior analysis (with masking of sensitive fields).' },
          { es: 'Según documentación de Microsoft Clarity (hasta 12 meses)', en: 'Per Microsoft Clarity documentation (up to 12 months)' },
        ],
        [
          { es: 'li_fat_id, bcookie, lidc y similares', en: 'li_fat_id, bcookie, lidc, and similar' },
          { es: 'LinkedIn (Insight Tag)', en: 'LinkedIn (Insight Tag)' },
          { es: 'Marketing', en: 'Marketing' },
          { es: 'Medición de campañas y conversiones en LinkedIn.', en: 'LinkedIn campaign and conversion measurement.' },
          { es: 'Según documentación de LinkedIn', en: 'Per LinkedIn documentation' },
        ],
        [
          { es: '_gcl_*, IDE, test_cookie', en: '_gcl_*, IDE, test_cookie' },
          { es: 'Google Ads', en: 'Google Ads' },
          { es: 'Marketing', en: 'Marketing' },
          { es: 'Medición de conversiones publicitarias.', en: 'Advertising conversion measurement.' },
          { es: 'Según documentación de Google Ads', en: 'Per Google Ads documentation' },
        ],
        [
          { es: '_fbp, _fbc, fr', en: '_fbp, _fbc, fr' },
          { es: 'Meta (Meta Pixel)', en: 'Meta (Meta Pixel)' },
          { es: 'Marketing', en: 'Marketing' },
          { es: 'Medición de campañas y conversiones en Meta.', en: 'Meta campaign and conversion measurement.' },
          { es: 'Según documentación de Meta (hasta 90 días)', en: 'Per Meta documentation (up to 90 days)' },
        ],
        [
          { es: 'Vercel Web Analytics', en: 'Vercel Web Analytics' },
          { es: 'Vercel', en: 'Vercel' },
          { es: 'Sin cookies', en: 'Cookieless' },
          { es: 'Analítica agregada y anonimizada del sitio; no usa cookies ni identifica personas.', en: 'Aggregate, anonymized site analytics; does not use cookies or identify individuals.' },
          { es: 'No aplica (no se almacena en el navegador)', en: 'Not applicable (nothing stored in the browser)' },
        ],
      ],
    },
  },
  {
    id: 'modificar-preferencias',
    number: '7',
    title: { es: 'Cómo modificar tus preferencias', en: 'How to change your preferences' },
    paragraphs: [
      {
        es: 'Puedes aceptar todas las cookies, rechazar las no esenciales o personalizar tu elección por categoría en cualquier momento, sin necesidad de borrar cookies manualmente desde tu navegador. Usa el enlace "Preferencias de cookies" disponible en el pie de página de cualquier página del sitio. Al desactivar una categoría, se eliminan las cookies propias correspondientes y se detiene el envío de nuevos eventos a esas herramientas; la cookie vertex_cookie_consent permanece porque es la que registra tu elección.',
        en: 'You can accept all cookies, reject non-essential ones, or customize your choice by category at any time, without needing to manually delete cookies from your browser. Use the "Cookie preferences" link available in the footer of any page on the site. Turning off a category deletes the corresponding first-party cookies and stops sending new events to those tools; the vertex_cookie_consent cookie remains because it is the one recording your choice.',
      },
      {
        es: 'También puedes gestionar cookies directamente desde la configuración de tu navegador; ten en cuenta que bloquear todas las cookies puede afectar el funcionamiento del sitio.',
        en: 'You can also manage cookies directly from your browser settings; keep in mind that blocking all cookies may affect how the site works.',
      },
    ],
  },
  {
    id: 'vigencia-cambios',
    number: '8',
    title: { es: 'Vigencia y cambios a esta política', en: 'Effective date and changes to this policy' },
    paragraphs: [
      {
        es: 'Esta Política de Cookies entra en vigencia en septiembre de 2026. Vertex podrá actualizarla cuando cambien las tecnologías utilizadas; los cambios sustanciales podrán implicar que te solicitemos autorización nuevamente. Consulta también nuestra Política de Tratamiento de Datos Personales para conocer cómo tratamos tu información.',
        en: 'This Cookie Policy takes effect in September 2026. Vertex may update it as the technologies used change; substantial changes may require us to request your authorization again. Please also see our Personal Data Processing Policy to learn how we handle your information.',
      },
    ],
  },
];
