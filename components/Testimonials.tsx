import { Star } from "lucide-react";
import { TESTIMONIAL_ROWS, type Testimonial } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex w-80 shrink-0 flex-col gap-4 rounded-lg border border-white/8 bg-fox-charcoal p-6">
      <div className="flex gap-0.5" aria-label={`${item.rating} de 5 estrellas`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-fox-gold text-fox-gold" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="text-sm leading-relaxed text-fox-gray">&ldquo;{item.quote}&rdquo;</blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-1">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fox-gold/15 text-xs font-semibold text-fox-gold">
          {initials(item.author)}
        </span>
        <span className="text-sm font-medium text-fox-white">{item.author}</span>
      </figcaption>
    </figure>
  );
}

function ScrollRow({
  items,
  direction,
  duration,
}: {
  items: Testimonial[];
  direction: "left" | "right";
  duration: number;
}) {
  const animClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="fox-fade-edges group w-full overflow-hidden">
      <div
        className={cn("fox-ticker flex w-max items-stretch gap-5", animClass, "group-hover:[animation-play-state:paused]")}
        style={{ "--scroll-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-stretch gap-5" aria-hidden={copy === 1}>
            {items.map((item) => (
              <TestimonialCard key={`${copy}-${item.id}`} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Testimonios"
          title="Lo que dice nuestra comunidad."
          description="27 reseñas reales de Google, todas de 5 estrellas."
        />
      </div>

      <div className="mt-14 flex flex-col gap-5">
        {TESTIMONIAL_ROWS.map((row) => (
          <ScrollRow key={row.id} items={row.items} direction={row.direction} duration={row.duration} />
        ))}
      </div>
    </section>
  );
}
