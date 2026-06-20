# Portafolio Profesional Optimizado para SEO - Luis Enrique Galván Morales

Este es un portafolio web personal premium, moderno y de alto rendimiento, diseñado para **Luis Enrique Galván Morales** utilizando las últimas características del ecosistema de **Next.js 15+ (App Router)**, **TypeScript** y **Tailwind CSS v4**.

El proyecto se enfoca en cumplir con rigurosas pautas de **SEO dinámico**, **accesibilidad (WCAG 2.1)** y **optimización de recursos web (Core Web Vitals)**, obteniendo puntuaciones sobresalientes en auditorías como Google Lighthouse.

---

## 🚀 Características Principales

### 1. Diseño Visual Premium y Responsivo
- **Estilo SaaS Dark Mode**: Interfaz basada en una paleta de color oscura profunda (`#030712`) con glows radiales de fondo y efectos modernos de sobriedad.
- **Micro-interacciones Fluidas**: Botones y tarjetas de proyectos reactivos que responden al cursor con pequeños desplazamientos, escalados tridimensionales y sombras dinámicas.
- **Componentes con Iconografía**: Tarjetas y badges de habilidades técnicas (`TechBadge`) personalizadas con colores por categoría (Frontend, Backend, Móvil, Base de Datos, Nube, Diseño) e iconos vectoriales SVG integrados de forma ligera.

### 2. Optimización de SEO Avanzada
- **Meta Tags Dinámicos**: Configuración del motor de metadatos de Next.js (`Metadata`) en layouts y páginas dinámicas para generar descripciones, palabras clave, etiquetas OpenGraph (para compartir en LinkedIn o WhatsApp) y Twitter Cards específicas por cada página o proyecto.
- **Sitemap Dinámico (`/sitemap.xml`)**: Generador dinámico en [src/app/sitemap.ts](src/app/sitemap.ts) que rastrea e indexa de forma automática tanto las páginas estáticas como los slugs individuales de cada proyecto.
- **Control de Indexación (`/robots.txt`)**: Definición de directivas de rastreo en [src/app/robots.ts](src/app/robots.ts) para evitar la indexación de directorios privados (`/_next/`, `/api/`) y guiar a los bots hacia el archivo sitemap.

### 3. Rendimiento de Carga y Buenas Prácticas
- **Optimización de Imágenes con `next/image`**:
  - Compresión automática y soporte para formatos de imagen modernos (**AVIF y WebP**).
  - Definición responsiva del atributo `sizes` para descargar resoluciones adecuadas según la pantalla.
  - Carga diferida (`loading="lazy"`) para elementos bajo el pliegue visual y carga prioritaria (`priority`) en avatares e imágenes superiores para evitar CLS (Cumulative Layout Shift) y advertencias en consola.
- **Carga de Fuentes Inteligente**: Carga de la tipografía de Google Font `Inter` mediante `next/font/google` para eliminar el bloqueo de renderizado de texto.

---

## 📁 Estructura del Proyecto

La estructura del directorio sigue las pautas modernas de Next.js en el directorio `src/`:

```text
├── next.config.ts          # Configuración del optimizador de imágenes y remotePatterns
├── package.json            # Scripts de ejecución y dependencias del proyecto
├── tsconfig.json           # Configuración del compilador de TypeScript y alias @/*
└── src
    ├── app
    │   ├── layout.tsx      # Contenedor global de layouts, fuentes e inyección de metatags SEO
    │   ├── page.tsx        # Página de inicio con Hero, Proyectos, Habilidades y Formulario
    │   ├── about
    │   │   └── page.tsx    # Vista "Sobre Mí" con biografía y habilidades técnicas
    │   ├── contact
    │   │   └── page.tsx    # Vista dedicada de contacto con accesos rápidos a redes
    │   ├── projects
    │   │   ├── page.tsx    # Archivo/Catálogo con todos los proyectos
    │   │   └── [slug]
    │   │       └── page.tsx# Detalle dinámico del proyecto con SSG (generateStaticParams)
    │   ├── robots.ts       # Generador estático de robots.txt
    │   ├── sitemap.ts      # Generador dinámico de sitemap.xml
    │   └── globals.css     # Hoja de estilos global configurada para Tailwind CSS v4
    ├── components
    │   ├── Header.tsx      # Barra de navegación superior con enlaces de enrutamiento
    │   ├── Footer.tsx      # Pie de página institucional con copyright dinámico
    │   ├── ProjectCard.tsx # Tarjeta reutilizable de proyecto con lazy-loading y optimizaciones
    │   └── TechBadge.tsx   # Badge reutilizable para tecnologías con colores e iconos SVG
    ├── lib
    │   └── data.ts         # Base de datos local/estática con proyectos e información en español
    └── types
        └── index.ts        # Contratos y tipos de TypeScript de la aplicación
```

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Gestión de Recursos**: [Google Fonts (Inter)](https://fonts.google.com/)
- **Entorno de ejecución**: [Node.js](https://nodejs.org/) (versión superior a 18.18)

---

## 💻 Ejecución Local

Para correr e inspeccionar este proyecto en tu computadora local:

### 1. Instalar dependencias
Asegúrate de estar en el directorio raíz del proyecto y ejecuta:
```bash
npm install
```

### 2. Correr el servidor en modo desarrollo
Inicia el entorno de desarrollo para realizar pruebas rápidas y recarga en tiempo real:
```bash
npm run dev
```
Abre tu navegador e ingresa a [http://localhost:3000](http://localhost:3000).

### 3. Compilar y correr el servidor en producción (Recomendado para Lighthouse)
Para verificar la velocidad real, la generación estática y obtener una puntuación superior a 90/100 en todas las categorías de Lighthouse, compila y levanta la versión de producción:
```bash
npm run build
npm start
```

---

## ☁️ Despliegue en Vercel

Este portafolio está optimizado para desplegarse instantáneamente en **Vercel** siguiendo estos pasos:

1. Sube tu repositorio a GitHub (ej: `github.com/tu-usuario/mi-portafolio`).
2. Ve a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
3. Presiona **Add New** -> **Project** e importa el repositorio de tu portafolio.
4. Presiona **Deploy**. Vercel compilará estáticamente las páginas e iniciará la CDN.

### Vinculación de un Dominio Personalizado
1. En tu panel de Vercel, ve a **Settings** -> **Domains**.
2. Ingresa tu dominio (ej: `luisgalvan.tk` o tu dominio personalizado) y presiona **Add**.
3. Vercel te dará una dirección IP (`A Record`) y un alias `CNAME`. Cópialos.
4. Ve al panel de control de tu registrador de dominios (como Freenom o cualquier proveedor DNS) y añade los registros DNS indicados.
5. Vercel validará los registros en pocos minutos y generará automáticamente un certificado SSL seguro (`https://`).
