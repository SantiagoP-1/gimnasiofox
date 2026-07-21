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
          {FACILITIES.map((facility) => {
            const Icon = FACILITY_ICONS[facility.icon];
            return (
              <li key={facility.id} className="bg-fox-charcoal p-7 transition-colors duration-300 hover:bg-fox-charcoal-2">
                <Icon className="h-5 w-5 text-fox-gold" strokeWidth={1.8} aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-semibold text-fox-white">{facility.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fox-gray">{facility.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
