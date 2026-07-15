import { Clock } from "lucide-react";
import { SCHEDULE } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import OpenStatus from "@/components/OpenStatus";

export default function Schedule() {
  return (
    <section id="horarios" className="border-t border-white/5 bg-fox-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader eyebrow="Horarios" title="Entrená cuando mejor te quede." align="center" />

        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-lg border border-white/8 bg-fox-black">
          <div className="flex items-center gap-3 border-b border-white/8 px-8 py-6">
            <Clock className="h-5 w-5 text-fox-gold" aria-hidden="true" />
            <OpenStatus />
          </div>
          <ul>
            {SCHEDULE.days.map((day) => (
              <li
                key={day.label}
                className="flex items-center justify-between border-b border-white/5 px-8 py-5 text-sm last:border-b-0 sm:text-base"
              >
                <span className="font-medium text-fox-white">{day.label}</span>
                <span className={day.hours === "Cerrado" ? "text-fox-gray-dim" : "text-fox-gray"}>
                  {day.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
