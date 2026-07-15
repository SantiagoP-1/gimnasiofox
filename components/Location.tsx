import { MapPin, Navigation, AtSign } from "lucide-react";
import { SITE, ADDRESS, MAPS, INSTAGRAM } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Ubicación"
          title={`Te esperamos en ${SITE.city}.`}
          description="Coordiná tu visita y conocé el predio en persona."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="h-80 overflow-hidden rounded-lg border border-white/8 sm:h-full">
            <iframe
              title="Ubicación de Centro de Entrenamiento FOX en Balcarce"
              src={MAPS.embedSrc}
              className="h-full w-full grayscale invert-[0.92] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex h-full flex-col justify-between rounded-lg border border-white/8 bg-fox-charcoal p-8">
            <div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-fox-gold" aria-hidden="true" />
                <p className="text-fox-white">
                  {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion}
                </p>
              </div>

              <a
                href={INSTAGRAM.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-3 text-sm text-fox-gray transition-colors hover:text-fox-white"
              >
                <AtSign className="h-4 w-4 text-fox-gold" aria-hidden="true" />
                <span>{INSTAGRAM.handle}</span>
              </a>
            </div>

            <a
              href={MAPS.shortLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-fox-gold px-6 py-3.5 text-sm font-semibold text-fox-black transition-colors hover:bg-white"
            >
              <Navigation className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
