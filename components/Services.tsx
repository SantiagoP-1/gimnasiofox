import {
  ClipboardList,
  Zap,
  ShieldCheck,
  Stethoscope,
  KeyRound,
  Thermometer,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, type Service } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";

const ICONS: Record<Service["icon"], LucideIcon> = {
  clipboard: ClipboardList,
  zap: Zap,
  shield: ShieldCheck,
  stethoscope: Stethoscope,
  key: KeyRound,
  thermometer: Thermometer,
};

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
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <li key={service.id} className="flex gap-4 bg-fox-black p-7 transition-colors duration-300 hover:bg-fox-charcoal-2">
                <Icon className="h-5 w-5 shrink-0 text-fox-gold" strokeWidth={1.8} aria-hidden="true" />
                <div>
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
