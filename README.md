<div align="center">

# 🦊 Centro de Entrenamiento FOX

### Landing page premium para un gimnasio en Balcarce, Buenos Aires

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?logo=framer&logoColor=white)](https://www.framer.com/motion/)

**[🔗 Ver demo en vivo](https://gimnasiofox.vercel.app)**

</div>

---

## Sobre el proyecto

Landing page de una sola página para el **Centro de Entrenamiento FOX**, diseñada para
convertir visitas en socios: presenta los planes, instalaciones y horarios del gimnasio,
y lleva al visitante directo a WhatsApp para inscribirse.

Construida priorizando performance y una experiencia cuidada en mobile, donde llega la
mayoría del tráfico real.

### Highlights

- **Diseño a medida**, sin templates — identidad de marca en dorado y negro consistente
  en cada sección.
- **Micro-interacciones con Framer Motion**: reveals al hacer scroll, contador animado
  en las estadísticas, carrusel de testimonios y de planes.
- **Navbar con scroll-spy**: resalta la sección visible mientras se navega.
- **Estado "Abierto ahora / Cerrado ahora" en vivo**, calculado según la hora real del
  visitante (`OpenStatus.tsx`).
- **Cinta dorada con scroll infinito** (`MarqueeStrip.tsx`), inspirada en la cartelería
  de vidrio típica de los gimnasios.
- **Integración directa con WhatsApp** en cada CTA, con mensajes prearmados según el
  contexto (consulta, visita, FAQ).
- **SEO técnico completo**: JSON-LD (`LocalBusiness` + `AggregateRating` + reseñas),
  `sitemap.xml`, `robots.txt` y `manifest.json` generados dinámicamente.
- **Accesibilidad**: contraste AA verificado y respeto total de `prefers-reduced-motion`.
- **Tipografías autohospedadas** (Poppins + Montserrat vía `next/font/local`), sin
  depender de Google Fonts en runtime.

## Stack técnico

| | |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Lenguaje | TypeScript (strict) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animaciones | [Framer Motion](https://www.framer.com/motion/) |
| Iconos | [Lucide React](https://lucide.dev/) |
| Deploy | [Vercel](https://vercel.com/) |

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrí [`http://localhost:3000`](http://localhost:3000).

Para generar el build de producción:

```bash
npm run build
npm run start
```

## Estructura

```
app/                 → layout.tsx, page.tsx, globals.css (tokens de marca), SEO (sitemap, robots, manifest)
components/          → un componente por sección
lib/data.ts          → TODO el contenido del sitio (precios, textos, horarios, WhatsApp)
lib/utils.ts         → helper cn()
public/images/       → fotos del sitio
scripts/             → scripts usados para procesar imágenes (no se ejecutan en runtime)
```

Para cambiar cualquier texto, precio, horario o link de WhatsApp, el 90% de las veces
alcanza con editar **`lib/data.ts`** — no hace falta tocar los componentes.

## ⚠️ Pendiente antes del lanzamiento final

1. **Fotos reales de la galería.** Las secciones de instalaciones muestran hoy imágenes
   generadas por IA como placeholder consciente, a la espera de fotos reales del predio.
   Reemplazando los archivos en `public/images/` (mismo nombre) el diseño se actualiza solo.
2. **Dominio propio.** El sitio corre hoy sobre `gimnasiofox.vercel.app`; migrar a un
   dominio propio en cuanto esté confirmado.

## Deploy

El proyecto está desplegado en [Vercel](https://vercel.com/) conectado a este repo —
cada push a `main` genera un nuevo deploy automáticamente. También funciona en cualquier
hosting compatible con Next.js (no es un sitio 100% estático por los componentes con
estado, así que no sirve un hosting solo-HTML como Hostinger compartido sin Node).

## Notas de diseño

- Tipografías autohospedadas con `next/font/local` (Poppins + Montserrat) en vez de
  Google Fonts, para que el build no dependa de internet y cargue más rápido.
- El elemento distintivo de la página es la cinta dorada con scroll infinito
  (`MarqueeStrip.tsx`) inspirada en la cartelería de vidrio de gimnasios, y el
  indicador "Abierto ahora / Cerrado ahora" en vivo (`OpenStatus.tsx`), que
  calcula el estado real según la hora del visitante.
- Se respeta `prefers-reduced-motion` en todas las animaciones.
