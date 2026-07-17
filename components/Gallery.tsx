import dynamic from "next/dynamic";
import SectionHeader from "@/components/SectionHeader";
import type { CarouselSlide } from "@/components/GalleryCarousel";
import musculacion from "@/public/images/gallery-musculacion.webp";
import aerobico from "@/public/images/gallery-aerobico-ai.webp";
import comunidad from "@/public/images/gallery-comunidad-ai.webp";
import equipamiento from "@/public/images/gallery-equipamiento-ai.webp";
import pesas from "@/public/images/gallery-pesas-ai.webp";

const GalleryCarousel = dynamic(() =>
  import("@/components/GalleryCarousel").then((mod) => mod.GalleryCarousel)
);

// Nota para Santi: las marcadas como ilustrativas son generadas con IA
// (mientras no haya fotos reales de esos sectores). La de "Sector
// musculación" es una foto real del gimnasio. Reemplazar cada import por la
// foto real correspondiente a medida que estén disponibles — los nombres de
// archivo en /public/images/ quedan documentados en el README.
const SLIDES: CarouselSlide[] = [
  {
    title: "Sector musculación",
    src: musculacion,
    alt: "Sector de musculación del Centro de Entrenamiento FOX",
  },
  {
    title: "Sector aeróbico",
    src: aerobico,
    alt: "Sector aeróbico del Centro de Entrenamiento FOX (imagen ilustrativa)",
    aiGenerated: true,
  },
  {
    title: "Comunidad FOX",
    src: comunidad,
    alt: "Alumnos entrenando en FOX (imagen ilustrativa)",
    aiGenerated: true,
  },
  {
    title: "Equipamiento completo",
    src: equipamiento,
    alt: "Piso de equipamiento del Centro de Entrenamiento FOX (imagen ilustrativa)",
    aiGenerated: true,
  },
  {
    title: "Pesas y accesorios",
    src: pesas,
    alt: "Rack de mancuernas del Centro de Entrenamiento FOX (imagen ilustrativa)",
    aiGenerated: true,
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="border-t border-white/5 bg-fox-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Galería"
          title="Conocé el predio antes de venir."
          description="Algunas fotos son ilustrativas mientras sumamos las reales del predio."
        />
      </div>

      <div className="mt-14">
        <GalleryCarousel slides={SLIDES} />
      </div>
    </section>
  );
}
