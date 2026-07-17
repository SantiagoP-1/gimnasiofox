# Centro de Entrenamiento FOX — Landing Page

Landing page premium para el Centro de Entrenamiento FOX (Balcarce, Buenos Aires).
Next.js 15 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

Para generar el build de producción:

```bash
npm run build
npm run start
```

## Estructura

```
app/                 → layout.tsx, page.tsx, globals.css (tokens de marca)
components/          → un componente por sección
lib/data.ts          → TODO el contenido del sitio (precios, textos, horarios, WhatsApp)
lib/utils.ts         → helper cn()
public/images/       → fotos (hoy con placeholders, ver checklist abajo)
scripts/             → script usado para generar los placeholders (no se ejecuta en runtime)
```

Para cambiar cualquier texto, precio, horario o link de WhatsApp, el 90% de las veces
alcanza con editar **`lib/data.ts`** — no hace falta tocar los componentes.

## ⚠️ Checklist antes de publicar

1. **Fotos reales.** No tuve acceso a fotos reales del gimnasio, así que generé
   placeholders con la identidad de marca (fondo oscuro + dorado, con una etiqueta
   "ESPACIO PARA FOTO REAL") para que el diseño se vea completo mientras tanto.
   Reemplazá estos archivos en `public/images/` por fotos reales **con el mismo
   nombre** y el diseño se actualiza solo:
   - `hero.jpg` (1920×1200 aprox., horizontal) — foto de la sala principal
   - `gallery-musculacion.jpg` (1200×900)
   - `gallery-aerobico.jpg` (1200×900)
   - `gallery-patio.jpg` (1200×900)
   - `gallery-duchas.jpg` (1200×900)
   - `gallery-comunidad.jpg` (1200×900) — gente entrenando, buena para la sección de comunidad
   - `gallery-ingreso.jpg` (1200×900)

2. **Número de WhatsApp.** Configurado en `lib/data.ts` como `5492266478000`
   (a partir de `+54 2266 47-8000`, agregando el `9` que exige WhatsApp para
   Argentina). Probá el botón flotante y los botones de "Sumate por WhatsApp"
   antes de publicar — si el `9` no corresponde a esta línea, hay que sacarlo.

3. **Dirección exacta y mapa.** No tenía la calle/altura del gimnasio, así que
   el mapa de la sección Ubicación (`components/Location.tsx`) apunta a una
   búsqueda genérica de "Centro de Entrenamiento FOX, Balcarce". Actualizá la
   constante `mapQuery` con la dirección real (o mejor, el Place ID de Google
   Maps) para que el pin sea exacto.

4. **Instagram.** El footer y la sección de ubicación muestran
   `@fox.balcarce` como placeholder — reemplazar por el usuario real en
   `components/Footer.tsx` y `components/Location.tsx`.

5. **Días de horario.** Se asumió Lunes a Sábado de 06:30 a 21:00 y domingo
   cerrado, porque el horario recibido no especificaba días. Ajustar en
   `lib/data.ts` → `SCHEDULE` si es distinto.

## Deploy

El proyecto está listo para desplegar en Vercel (`vercel.com`) conectando el
repo o corriendo `vercel` desde esta carpeta. También funciona en cualquier
hosting compatible con Next.js (no es un sitio 100% estático por los
componentes con estado, así que no sirve un hosting solo-HTML como Hostinger
compartido sin Node).

## Notas de diseño

- Tipografías autohospedadas con `@fontsource` (Poppins + Montserrat) en vez
  de Google Fonts, para que el build no dependa de internet y cargue más rápido.
- El elemento distintivo de la página es la cinta dorada con scroll infinito
  (`MarqueeStrip.tsx`) inspirada en la cartelería de vidrio de gimnasios, y el
  indicador "Abierto ahora / Cerrado ahora" en vivo (`OpenStatus.tsx`), que
  calcula el estado real según la hora del visitante.
- Se respeta `prefers-reduced-motion` en todas las animaciones.
