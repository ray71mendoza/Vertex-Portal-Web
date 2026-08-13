# Vertex Portal Web — Sitio Web Corporativo

Sitio web corporativo de **Vertex** (Innovación, Transformación Digital, IA y Soluciones Tecnológicas).

Desarrollado con **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4** y **next-intl**.

---

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ o 20+ LTS
- npm o pnpm

### 1. Instalación de dependencias

```bash
npm install
```

### 2. Iniciar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador. El sitio redirigirá automáticamente a la versión en español `/es`.

### 3. Compilación de producción

```bash
npm run build
npm run start
```

---

## 📁 Estructura del Proyecto

```
Vertex Portal Web/
├── public/
│   └── images/               → Logos, isotipo y fondos oficiales
├── src/
│   ├── app/
│   │   ├── [locale]/         → Rutas bilingües ES / EN (Home, Nosotros, Servicios, Proyectos, Equipo, Contacto, Legales)
│   │   ├── api/
│   │   │   └── contact/      → API Route handler para formulario de contacto
│   │   ├── sitemap.ts        → Generador dinámico de Sitemap XML
│   │   └── robots.ts         → Generador de robots.txt
│   ├── components/
│   │   ├── forms/            → Formulario de contacto con Zod y Honeypot
│   │   ├── layout/           → Estructuras base
│   │   ├── navigation/       → Header sticky, Mega-menú, Footer, LanguageSwitcher
│   │   ├── pages/            → Componentes de contenido por página
│   │   ├── sections/         → Secciones del Inicio (Hero, Capacidades, Propuesta de Valor, Metodología, Sectores)
│   │   └── ui/               → Componentes base de animación y diseño
│   ├── content/
│   │   ├── services.ts       → Modelo de datos de los 7 servicios
│   │   ├── projects.ts       → Modelo de datos de proyectos
│   │   └── team.ts           → Modelo de datos de equipo
│   ├── i18n/
│   │   ├── messages/
│   │   │   ├── es.json       → Traducciones en Español
│   │   │   └── en.json       → Traducciones en Inglés
│   │   ├── config.ts         → Configuración de idiomas y rutas
│   │   └── request.ts        → Carga dinámica de mensajes
│   └── styles/
│       └── globals.css       → Sistema de diseño y tokens CSS de Vertex
├── .env.example              → Ejemplo de variables de entorno
├── next.config.ts            → Configuración de Next.js
└── package.json
```

---

## 📝 Actualización de Contenido Real

Para agregar o editar información real antes del lanzamiento a producción:

1. **Proyectos:** Editar o agregar objetos en `src/content/projects.ts`.
2. **Integrantes del equipo:** Agregar perfiles reales en `src/content/team.ts`.
3. **Servicios y capacidades:** Actualizar `src/content/services.ts` o los archivos de traducción `src/i18n/messages/es.json` y `en.json`.
4. **Formulario de contacto:** Configurar credenciales SMTP en `.env.local` según se indica en `.env.example`.

---

## 🌐 Tecnologías y Accesibilidad

- **Internacionalización:** next-intl con persisencia y fallback.
- **Formularios:** React Hook Form + Zod + Honeypot anti-spam.
- **Accesibilidad:** WCAG 2.2 AA (Skip to content, ARIA labels, soporte para movimiento reducido).
- **SEO:** Metadata API, OpenGraph, hreflang tags y sitemap XML automático.
