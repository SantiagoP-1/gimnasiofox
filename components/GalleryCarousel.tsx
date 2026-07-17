"use client";

import { useRef, useState, useEffect, type CSSProperties } from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselSlide = {
  title: string;
  src: StaticImageData;
  alt: string;
  aiGenerated?: boolean;
};

type SlideProps = {
  slide: CarouselSlide;
  index: number;
  current: number;
  total: number;
  onSelect: (index: number) => void;
};

function Slide({ slide, index, current, total, onSelect }: SlideProps) {
  const slideRef = useRef<HTMLLIElement>(null);
  const isActive = current === index;

  // Paralaje sutil siguiendo el mouse — se escribe directo en el elemento
  // (sin requestAnimationFrame corriendo indefinidamente de fondo, que es lo
  // que hacía el componente original incluso sin que nadie tocara el mouse).
  const handleMouseMove = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!isActive) return;
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = event.clientX - (r.left + r.width / 2);
    const y = event.clientY - (r.top + r.height / 2);
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    const el = slideRef.current;
    if (!el) return;
    el.style.setProperty("--x", "0px");
    el.style.setProperty("--y", "0px");
  };

  return (
    <li
      ref={slideRef}
      role="group"
      aria-roledescription="slide"
      aria-label={`${slide.title} — ${index + 1} de ${total}`}
      tabIndex={0}
      className="relative mx-3 flex h-72 w-72 shrink-0 flex-col items-center justify-center [perspective:1200px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fox-gold sm:h-96 sm:w-96 lg:h-[26rem] lg:w-[26rem]"
      onClick={() => onSelect(index)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(index);
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          transform: isActive ? "scale(1) rotateX(0deg)" : "scale(0.94) rotateX(6deg)",
          transformOrigin: "bottom",
          cursor: isActive ? "default" : "pointer",
          "--x": "0px",
          "--y": "0px",
        } as CSSProperties
      }
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-lg bg-fox-charcoal transition-transform duration-150 ease-out"
        style={{
          transform: isActive ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)" : "none",
        }}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          placeholder="blur"
          quality={78}
          sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 416px"
          className={cn("object-cover transition-opacity duration-500", isActive ? "opacity-100" : "opacity-50")}
        />
        {isActive && <div className="absolute inset-0 bg-fox-black/25" />}
        {slide.aiGenerated && (
          <span className="absolute right-3 top-3 rounded-full bg-fox-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-fox-gray backdrop-blur-sm">
            Imagen ilustrativa
          </span>
        )}
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 rounded-b-lg bg-linear-to-t from-fox-black/90 to-transparent p-5 pt-12 transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0"
        )}
      >
        <p className="font-display text-base font-semibold text-fox-white sm:text-lg">{slide.title}</p>
      </div>
    </li>
  );
}

export function GalleryCarousel({ slides }: { slides: CarouselSlide[] }) {
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  const goTo = (index: number) => setCurrent(((index % slides.length) + slides.length) % slides.length);
  const previous = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    const recalc = () => {
      const viewport = viewportRef.current;
      const activeSlide = trackRef.current?.children[current] as HTMLElement | undefined;
      if (!viewport || !activeSlide) return;
      const target = activeSlide.offsetLeft + activeSlide.offsetWidth / 2 - viewport.clientWidth / 2;
      setOffset(target);
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [current, slides.length]);

  // Sin listener en `window`: las flechas del teclado solo navegan el
  // carrusel cuando el foco está dentro de él (el evento burbujea desde el
  // botón o la slide enfocada), no en cualquier parte de la página.
  const handleContainerKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      previous();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  return (
    <div
      role="region"
      aria-label="Galería de fotos del gimnasio"
      aria-roledescription="carousel"
      onKeyDown={handleContainerKeyDown}
      className="relative"
    >
      <div ref={viewportRef} className="fox-fade-edges overflow-hidden">
        <ul
          ref={trackRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${-offset}px)` }}
        >
          {slides.map((slide, index) => (
            <Slide key={slide.title} slide={slide} index={index} current={current} total={slides.length} onSelect={goTo} />
          ))}
        </ul>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={previous}
          aria-label="Foto anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-fox-white transition-colors hover:border-fox-gold hover:text-fox-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fox-gold"
        >
          <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
        </button>

        <span className="text-sm text-fox-gray-dim" aria-live="polite" aria-atomic="true">
          {current + 1} / {slides.length}
        </span>

        <button
          type="button"
          onClick={next}
          aria-label="Foto siguiente"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-fox-white transition-colors hover:border-fox-gold hover:text-fox-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fox-gold"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
