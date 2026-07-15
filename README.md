# 🦊 Centro de Entrenamiento FOX

Landing Page moderna desarrollada para **Centro de Entrenamiento FOX**, un gimnasio ubicado en **Balcarce, Buenos Aires (Argentina)**.

El proyecto fue diseñado con un enfoque premium, priorizando una excelente experiencia de usuario, rendimiento, accesibilidad y optimización SEO.

---

## ✨ Características

- 🎨 Diseño moderno con identidad visual propia.
- 📱 Diseño 100% responsive.
- ⚡ Optimizado para rendimiento con Next.js 15.
- 🔍 SEO completo (Metadata, Open Graph, Sitemap y Robots).
- 📈 Lighthouse optimizado.
- 🎬 Animaciones suaves con Framer Motion.
- 💬 Integración directa con WhatsApp.
- 🕒 Estado del gimnasio en tiempo real (Abierto / Cerrado).
- 🖼️ Galería optimizada con Next/Image.
- ♿ Accesibilidad y navegación mediante teclado.
- 🌙 Paleta de colores personalizada basada en la identidad de FOX.

---

# 🚀 Tecnologías utilizadas

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

---

# 📂 Estructura del proyecto

```
app/
│
├── layout.tsx
├── page.tsx
└── globals.css

components/
│
├── Hero.tsx
├── Navbar.tsx
├── MarqueeStrip.tsx
├── Gallery.tsx
├── Footer.tsx
└── ...

lib/
│
├── data.ts
└── utils.ts

public/
│
└── images/
```

La mayor parte del contenido del sitio (textos, horarios, precios, teléfonos, FAQ, planes, etc.) se administra desde:

```
lib/data.ts
```

Esto permite actualizar el sitio sin modificar los componentes.

---

# 📸 Funcionalidades implementadas

## Hero

- Imagen optimizada con Next/Image
- Efecto de zoom lento (Ken Burns)
- Gradientes superpuestos
- CTA principal
- CTA secundario
- Estado del gimnasio en vivo

---

## Navegación

- Navbar transparente
- Cambio al hacer scroll
- Blur dinámico
- Menú responsive
- Animaciones en hover
- Línea inferior animada

---

## Secciones

- Instalaciones
- Servicios
- Planes
- Galería
- Horarios
- Ubicación
- FAQ
- Footer

Cada sección cuenta con animaciones de entrada mediante Framer Motion.

---

## UX

Se implementaron múltiples mejoras para mejorar la experiencia del usuario:

- Hover animations
- Scroll suave
- Animaciones de aparición
- Contadores animados
- Marquee infinito
- Botón flotante de WhatsApp
- Indicador de horario en tiempo real
- Respeto por `prefers-reduced-motion`

---

# ⚡ Optimización

El proyecto fue optimizado pensando en producción.

Se trabajó especialmente en:

- Optimización de imágenes
- Lazy Loading
- Componentes reutilizables
- Minimización de JavaScript
- SEO
- Metadata
- Sitemap
- Robots.txt
- Open Graph
- Tipografías locales
- Accesibilidad

---

# 💻 Instalación

Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/fox-gym.git
```

Ingresar al proyecto

```bash
cd fox-gym
```

Instalar dependencias

```bash
npm install
```

Iniciar el servidor

```bash
npm run dev
```

Abrir

```
http://localhost:3000
```

---

# 🏗️ Build

Generar la versión de producción

```bash
npm run build
```

Ejecutar producción

```bash
npm run start
```

---

# 🌎 Deploy

El proyecto fue desarrollado para desplegarse en **Vercel**, aprovechando todas las optimizaciones de Next.js.

---

# 📱 Responsive

La interfaz fue diseñada para funcionar correctamente en:

- Desktop
- Notebook
- Tablet
- Mobile

---

# 🎯 Objetivo

El objetivo del proyecto fue crear una landing page profesional que represente la identidad del gimnasio, facilite el contacto con nuevos clientes y transmita una imagen moderna, rápida y confiable.

---

# 📄 Licencia

Este proyecto fue desarrollado con fines comerciales para **Centro de Entrenamiento FOX**.

No está permitido reutilizar el diseño o los recursos gráficos sin autorización del propietario.