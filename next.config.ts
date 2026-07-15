import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 va a exigir declarar acá cada valor de `quality` usado en
    // next/image. Hoy solo usamos 78 (galería) y 82 (hero) — si en algún
    // componente nuevo se usa otro valor, agregarlo a esta lista.
    qualities: [78, 82],
  },
};

export default nextConfig;
