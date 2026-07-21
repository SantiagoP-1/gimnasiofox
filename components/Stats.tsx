"use client";

import { useState } from "react";
import { Clock, LayoutGrid, Star, CalendarCheck } from "lucide-react";
import { FACILITIES, PLANS, TESTIMONIAL_ROWS } from "@/lib/data";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const reviewCount = TESTIMONIAL_ROWS.flatMap((row) => row.items).length;

const stats = [
  {
    icon: Clock,
    value: 14.5,
    decimals: 1,
    suffix: "h",
    label: "Abierto por día, de 06:30 a 21:00",
  },
  {
    icon: CalendarCheck,
    value: 5,
    suffix: "",
    label: "Días a la semana para entrenar",
  },
  {
    icon: LayoutGrid,
    value: FACILITIES.length,
    suffix: "",
    label: "Espacios: musculación, aeróbico, patios y más",
  },
  {
    icon: Star,
    value: reviewCount,
    suffix: "",
    label: "Reseñas, todas 5★ en Google",
  },
];

export default function Stats() {
  const [started, setStarted] = useState<boolean[]>(() => stats.map(() => false));

  return (
    <section className="border-b border-white/5 bg-fox-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              onViewportEnter={() => setStarted((prev) => (prev[i] ? prev : prev.map((v, idx) => (idx === i ? true : v))))}
            >
              <div className="flex flex-col gap-3">
                <stat.icon className="h-6 w-6 text-fox-gold" strokeWidth={2} aria-hidden="true" />
                <p className="font-display text-4xl font-extrabold text-fox-white sm:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} start={started[i]} />
                </p>
                <p className="max-w-[20ch] text-sm text-fox-gray">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-fox-gray-dim">
          {PLANS.length} planes flexibles disponibles para adaptarse a tu ritmo de entrenamiento.
        </p>
      </div>
    </section>
  );
}
