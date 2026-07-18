"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

export default function MapEmbed({ src, title }: { src: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="flex h-full w-full flex-col items-center justify-center gap-3 bg-fox-charcoal text-fox-gray transition-colors hover:text-fox-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-fox-gold"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-fox-gold/30 bg-fox-gold/10">
          <MapPin className="h-6 w-6 text-fox-gold" aria-hidden="true" />
        </span>
        <span className="text-sm font-medium">Ver mapa interactivo</span>
        <span className="text-xs text-fox-gray-dim">Carga el mapa de Google al tocar</span>
      </button>
    );
  }

  return (
    <iframe
      title={title}
      src={src}
      className="h-full w-full grayscale invert-[0.92] contrast-[1.1]"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
