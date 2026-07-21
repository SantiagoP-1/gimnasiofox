import { SERVICES } from "@/lib/data";
import { SERVICE_ICONS } from "@/lib/icons";
import SectionHeader from "@/components/SectionHeader";

export default function Services() {
  return (
    <section id="servicios" className="border-t border-white/5 bg-fox-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Servicios"
          title="Entrenás tranquilo, nosotros nos ocupamos del resto."
          description="Seguridad, cobertura y acompañamiento profesional, incluidos."
        />

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <li
                key={service.id}
                className="relative flex gap-4 overflow-hidden bg-fox-black p-7 transition-colors duration-300 hover:bg-fox-charcoal-2"
              >
                <span
                  className="pointer-events-none absolute -top-3 right-4 font-display text-6xl font-extrabold text-white/5 select-none"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-fox-gold/30 bg-fox-gold/10">
                  <Icon className="h-5 w-5 text-fox-gold" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className="relative">
                  <h3 className="font-display text-base font-semibold text-fox-white">{service.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fox-gray">{service.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
