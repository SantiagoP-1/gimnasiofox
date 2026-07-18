"use client";

import { useRef } from "react";
import { Check, MessageCircle, Star, ArrowRight } from "lucide-react";
import { currency, whatsappLink } from "@/lib/data";
import { cn } from "@/lib/utils";

export type PlanCarouselItem = {
  id: string;
  tag: string;
  name: string;
  subtitle: string;
  price: number;
  cadence?: string;
  perks?: string[];
  featured?: boolean;
  message: string;
};

function PlanCard({ item }: { item: PlanCarouselItem }) {
  return (
    <div
      className={cn(
        "flex h-full w-72 shrink-0 snap-start flex-col rounded-lg border p-7 text-center sm:w-80",
        item.featured
          ? "border-transparent bg-fox-gold text-fox-black"
          : "border-white/8 bg-fox-charcoal/50 text-fox-white"
      )}
    >
      <span
        className={cn(
          "mx-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide",
          item.featured ? "bg-fox-black/10 text-fox-black" : "bg-fox-gold/10 text-fox-gold"
        )}
      >
        {item.featured && <Star className="h-3 w-3 fill-current" aria-hidden="true" />}
        {item.tag}
      </span>

      <h4 className="mt-4 font-display text-xl font-semibold">{item.name}</h4>
      <p className={cn("mt-1 text-sm", item.featured ? "text-fox-black/70" : "text-fox-gray")}>
        {item.subtitle}
      </p>

      <div className="mt-6 flex items-baseline justify-center gap-1">
        <span className="font-display text-4xl font-extrabold">{currency(item.price)}</span>
        {item.cadence && (
          <span className={cn("text-sm", item.featured ? "text-fox-black/60" : "text-fox-gray-dim")}>
            {item.cadence}
          </span>
        )}
      </div>

      {item.perks && (
        <ul className="mt-6 flex flex-col gap-2.5 text-left">
          {item.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2.5 text-sm">
              <Check
                className={cn("mt-0.5 h-4 w-4 shrink-0", item.featured ? "text-fox-black" : "text-fox-gold")}
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <span className={item.featured ? "text-fox-black/80" : "text-fox-gray"}>{perk}</span>
            </li>
          ))}
        </ul>
      )}

      <a
        href={whatsappLink(item.message)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors",
          item.featured
            ? "bg-fox-black text-fox-white hover:bg-fox-charcoal"
            : "border border-white/15 text-fox-white hover:border-white/40"
        )}
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
        Consultar
      </a>
    </div>
  );
}

export default function PlansCarousel({ items }: { items: PlanCarouselItem[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    const step = (card?.offsetWidth ?? 300) + 20;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label="Planes, pases y promociones — desplizar horizontalmente"
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 sm:-mx-8 sm:px-8"
      >
        {items.map((item) => (
          <li key={item.id} className="flex">
            <PlanCard item={item} />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Plan anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-fox-white transition-colors hover:border-fox-gold hover:text-fox-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fox-gold"
        >
          <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Siguiente plan"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-fox-white transition-colors hover:border-fox-gold hover:text-fox-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fox-gold"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
