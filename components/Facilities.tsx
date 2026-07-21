import { FACILITIES } from "@/lib/data";
import { FACILITY_ICONS } from "@/lib/icons";
import SectionHeader from "@/components/SectionHeader";

export default function Facilities() {
  return (
    <section id="instalaciones" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Instalaciones"
          title="Todo lo que necesitás, en un mismo predio."
          description="Seis espacios pensados para que tu rutina no dependa de nada más."
        />

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((facility, index) => {
            const Icon = FACILITY_ICONS[facility.icon];
            return (
              <li
                key={facility.id}
                className="relative overflow-hidden bg-fox-charcoal p-7 transition-colors duration-300 hover:bg-fox-charcoal-2"
              >
                <span
                  className="pointer-events-none absolute -top-3 right-4 font-display text-6xl font-extrabold text-white/5 select-none"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-fox-gold/30 bg-fox-gold/10">
                  <Icon className="h-5 w-5 text-fox-gold" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-fox-white">{facility.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-fox-gray">{facility.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
