<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0B4551&height=180&section=header&text=Vertex%20Portal%20Web&fontSize=36&desc=Tecnolog%C3%ADa%20Estrat%C3%A9gica%20para%20Transformar%20Ideas%20en%20Resultados&descSize=16&fontColor=FEFEFE&descColor=72C6E8" alt="Vertex Portal Web Banner" width="100%" />

[![Estado del Proyecto](https://img.shields.io/badge/STATUS-PRODUCTION--READY-0B4551?style=for-the-badge&logo=vercel&logoColor=white)](https://vertex.com.co)
[![Versión](https://img.shields.io/badge/VERSION-0.1.0-72C6E8?style=for-the-badge&logo=semver&logoColor=03252D)](https://github.com/ray71mendoza/Vertex-Portal-Web)
[![Next.js](https://img.shields.io/badge/NEXT.JS-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/REACT-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TYPESCRIPT-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TAILWIND%20CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![i18n](https://img.shields.io/badge/I18N-ES%20%7C%20EN-0B4551?style=for-the-badge&logo=google-translate&logoColor=white)](https://next-intl-docs.vercel.app/)
[![WCAG](https://img.shields.io/badge/WCAG-2.2%20AA-success?style=for-the-badge&logo=w3c&logoColor=white)](https://www.w3.org/WAI/standards-guidelines/wcag/)

<p align="center">
  <strong>Plataforma web corporativa de alta ingeniería para Vertex.</strong><br>
  Ecosistema digital bilingüe de alto rendimiento enfocado en consultoría estratégica de innovación, transformación digital, desarrollo de software cloud-native, diseño de marca y experiencias interactivas para organizaciones públicas y privadas en Latinoamérica.
</p>

</div>

---

## 🛠️ Stack Tecnológico

<div align="center">

<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,html,css,nodejs,git,github,vscode,vercel,figma" alt="Tech Stack Icons" />
</a>

<br><br>

| Capa | Tecnología | Propósito y Capacidades |
| :--- | :--- | :--- |
| **Framework Core** | Next.js 16 (App Router & Turbopack) | Arquitectura híbrida (SSG + SSR), optimización de rutas y renderizado ultrarrápido |
| **Biblioteca UI** | React 19 + Framer Motion | Componentes declarativos, animaciones fluidas y transiciones reactivas |
| **Lenguaje** | TypeScript 5 | Tipado estático estricto de modelos de datos, servicios, vacantes y proyectos |
| **Estilos & Diseño** | Tailwind CSS v4 + CSS Modules | Tokens de diseño corporativo Vertex (*Deep Apex Teal*, *Sky Prism Blue*, *Quartz Grey*) |
| **Internacionalización** | `next-intl` (ES / EN) | Enrutamiento dinámico bilingüe con prefijos `/es` y `/en` y tipado seguro |
| **Formularios & Validación** | React Hook Form + Zod | Validación de esquemas robusta en cliente y servidor con protección Honeypot |
| **Iconografía** | Lucide React + Custom SVG System | Iconos consistentes, accesibles e hiperoptimizados |

</div>

---

## ✨ Características y Módulos del Sistema

| Módulo / Funcionalidad | Descripción Detallada | Estado |
| :--- | :--- | :---: |
| 🌐 **Arquitectura Bilingüe (i18n)** | Soporte nativo para Español (`/es`) e Inglés (`/en`) con switch reactivo, persistencia de preferencias y SEO internacional (`hreflang`). | ✅ |
| 🚀 **Página de Inicio (Landing)** | Hero interactivo con background temático, métricas dinámicas, propuesta de valor (*Por qué Vertex*), showcase y mapa de alcance regional. | ✅ |
| 💡 **Catálogo de Servicios** | 7 áreas de especialización con fichas técnicas detalladas: retos que resuelve, capacidades técnicas, resultados esperados y público objetivo. | ✅ |
| 📂 **Detalle de Proyectos (Refactorizado)** | Presentación editorial enterprise: retos, solución de Vertex, resultados cuantificables, chips de servicios cruzados, navegación entre proyectos y CTA. | ✅ |
| 👥 **Quiénes Somos & Equipo** | Historia, pilares estratégicos, presencia geográfica (oficinas y proyectos en LatAm) y perfiles del talento multidisciplinario. | ✅ |
| 💼 **Portal de Empleos & Carreras** | Sistema de exploración de vacantes con filtros por área, modalidad, ubicación y formulario de postulación integrado. | ✅ |
| 📬 **Contacto & Canales Oficiales** | Integración de números oficiales (+57 300 865 8910 / +57 312 491 6281), perfiles oficiales de Instagram y LinkedIn, y formulario seguro. | ✅ |
| 🚫 **Error 404 Personalizado** | Experiencia branded con el isotipo de Vertex, soporte bilingüe, atajos de navegación y política `noindex` para motores de búsqueda. | ✅ |
| ♿ **Accesibilidad WCAG 2.2 AA** | Contraste de color certificado, enlaces *Skip to Content*, navegación por teclado completa, atributos ARIA y respeto a `prefers-reduced-motion`. | ✅ |
| 🔍 **SEO & Metadatos Dinámicos** | Generación de OpenGraph, canonical URLs dinámicas, `sitemap.xml` y `robots.txt` automatizados por ruta. | ✅ |

---

## 🏛️ Arquitectura y Estructura del Proyecto

```text
Vertex-Portal-Web/
├── public/                          # Recursos estáticos globales
│   └── images/                      # Identidad gráfica, isotipos, fondos 4K y mockups
├── src/
│   ├── app/                         # Enrutador App Router de Next.js
│   │   ├── [locale]/                # Rutas localizadas (/es/* y /en/*)
│   │   │   ├── about-us/            # Quiénes somos (EN)
│   │   │   ├── careers/             # Carreras y talento (EN)
│   │   │   ├── contact/ / contacto/ # Formularios y canales de atención
│   │   │   ├── jobs/ / empleos/     # Directorio de vacantes y detalle
│   │   │   ├── our-services/        # Catálogo de servicios (EN)
│   │   │   ├── projects/ / proyectos/ # Casos de éxito y fichas de proyecto
│   │   │   ├── quienes-somos/       # Quiénes somos (ES)
│   │   │   ├── servicios/           # Servicios (ES)
│   │   │   ├── not-found.tsx        # 404 localizado
│   │   │   └── layout.tsx           # Layout base con Header y Footer
│   │   ├── api/contact/             # API Route Handler de contacto
│   │   ├── not-found.tsx            # Fallback 404 global
│   │   ├── globals.css              # Sistema de diseño y variables CSS
│   │   ├── robots.ts                # Generador dinámico de robots.txt
│   │   └── sitemap.ts               # Generador dinámico de sitemap.xml
│   ├── components/
│   │   ├── forms/                   # Componentes de formularios controlados
│   │   ├── navigation/              # Header, Mega Menú, Footer, Language Switcher
│   │   ├── pages/                   # Vistas principales de página
│   │   ├── sections/                # Bloques modulares reutilizables de UI
│   │   └── ui/                      # Átomos UI, Reveal animations e iconos SVG
│   ├── content/                     # Data stores tipados en TypeScript
│   │   ├── careers.ts               # Datos de cultura y ambiente laboral
│   │   ├── company.ts               # Pilares, testimonios y estadísticas
│   │   ├── jobs.ts                  # Registro tipado de vacantes
│   │   ├── locations.ts             # Oficinas, teléfonos y redes sociales
│   │   ├── projects.ts              # Catálogo completo de proyectos y helpers
│   │   └── services.ts              # Definición de los 7 servicios
│   ├── i18n/                        # Configuración de internacionalización
│   │   ├── messages/                # Diccionarios JSON (es.json / en.json)
│   │   ├── config.ts                # Definición de idiomas y rutas canónicas
│   │   └── request.ts               # Server-side message loader
│   └── proxy.ts                     # Middleware de resolución de idioma
├── next.config.ts                   # Configuración del compilador Next.js
├── package.json                     # Dependencias y scripts del proyecto
└── tsconfig.json                    # Configuración estricta de TypeScript
```

---

## ⚡ Puesta en Marcha / Instalación

### Prerrequisitos
* **Node.js**: `v18.18.0` o superior (Recomendado `v20.x` LTS)
* **Gestor de paquetes**: `npm`, `pnpm` o `yarn`

### 1. Clonar el repositorio
```bash
git clone https://github.com/ray71mendoza/Vertex-Portal-Web.git
cd Vertex-Portal-Web
```

### 2. Configurar variables de entorno
Copia la plantilla de configuración e ingresa los valores de entorno locales si requieres integración SMTP:
```bash
cp .env.example .env.local
```

> **`NEXT_PUBLIC_SITE_URL` en producción**: esta variable debe configurarse en Vercel (Project Settings → Environment Variables) apuntando al dominio de producción real (ej. `https://vertex.com.co`). Se usa para construir las URLs canónicas, las etiquetas Open Graph, `sitemap.xml` y el `Host`/`Sitemap` de `robots.txt`. Si el dominio `*.vercel.app` asignado automáticamente por Vercel no debe indexarse (por ser un alias/preview del dominio custom), agrega una regla adicional en `src/app/robots.ts` que bloquee ese host específico usando `process.env.VERCEL_URL`, o configura un redirect 301 permanente desde el dominio `.vercel.app` hacia el dominio custom en la configuración de dominios de Vercel.

### 3. Instalar dependencias
```bash
npm install
```

### 4. Iniciar el entorno de desarrollo
```bash
npm run dev
```
> Accede a [http://localhost:3000](http://localhost:3000). El sistema redirige automáticamente al idioma por defecto (`/es`).

### 5. Compilación y despliegue para producción
```bash
# Validar tipado estricto
npx tsc --noEmit

# Ejecutar linter
npm run lint

# Generar build optimizado (SSG / SSR)
npm run build

# Iniciar servidor en producción
npm run start
```

---

## 🛣️ Enrutamiento y Puntos de Acceso

| Ruta (Español) | Route (English) | Descripción |
| :--- | :--- | :--- |
| `/es` | `/en` | Página principal (Landing corporativa) |
| `/es/quienes-somos` | `/en/about-us` | Sobre Vertex, pilares, alcance regional y equipo |
| `/es/nuestra-oferta` | `/en/our-services` | Resumen integral de capacidades y metodología |
| `/es/servicios/[slug]` | `/en/services/[slug]` | Ficha de servicio especializada (7 disciplinas) |
| `/es/proyectos` | `/en/projects` | Directorio de casos de éxito con filtros |
| `/es/proyectos/[slug]` | `/en/projects/[slug]` | Ficha técnica editorial y resultados de proyecto |
| `/es/trabaja-con-nosotros` | `/en/careers` | Cultura organizacional, beneficios y atracción de talento |
| `/es/empleos` | `/en/jobs` | Buscador de vacantes activas y postulación |
| `/es/contacto` | `/en/contact` | Líneas directas, redes oficiales y formulario |
| `/api/contact` | `/api/contact` | API Endpoint para procesamiento seguro de solicitudes |

---

## 📄 Licencia y Créditos

Este proyecto es propiedad intelectual exclusiva de **Vertex S.A.S.**  
Todos los derechos reservados © 2026.

* **Organización:** Vertex Consultoría de Innovación
* **Canales Oficiales:** [Instagram](https://www.instagram.com/vertexsascol?igsi=dHdpcmQ2bTNwMXRo&utm_source=qr) | [LinkedIn](https://www.linkedin.com/company/vertexsascol/)
* **Atención Directa:** `+57 300 865 8910` · `+57 312 491 6281` · `gerenciavertexsas@gmail.com`

---

<div align="center">
  <sub>Desarrollado con excelencia técnica y diseño contemporáneo para Vertex.</sub>
</div>
