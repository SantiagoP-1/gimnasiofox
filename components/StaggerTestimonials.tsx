"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/lib/data";
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

type DeckItem = Testimonial & { deckKey: number };

const VISIBLE_RANGE = 3;

function Card({
  item,
  position,
  onMove,
  cardSize,
}: {
  item: DeckItem;
  position: number;
  onMove: (steps: number) => void;
  cardSize: number;
}) {
  const isCenter = position === 0;

  return (
    <li
      onClick={() => !isCenter && onMove(position)}
      tabIndex={isCenter ? -1 : 0}
      role={isCenter ? undefined : "button"}
      aria-label={isCenter ? undefined : `Traer al frente la reseña de ${item.author}`}
      onKeyDown={(e) => {
        if (!isCenter && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onMove(position);
        }
      }}
      className={cn(
        "absolute left-1/2 top-1/2 flex flex-col justify-between rounded-lg border p-6 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 border-transparent bg-fox-gold text-fox-black shadow-xl shadow-black/40"
          : "z-0 cursor-pointer border-white/10 bg-fox-charcoal text-fox-white hover:border-fox-gold/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fox-gold"
      )}
      style={
        {
          width: cardSize,
          height: cardSize,
          transform: `translate(-50%, -50%) translateX(${(cardSize / 1.5) * position}px) translateY(${
            isCenter ? -36 : position % 2 ? 14 : -14
          }px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
        } as CSSProperties
      }
    >
      <div>
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold",
            isCenter ? "bg-fox-black/10 text-fox-black" : "bg-fox-gold/15 text-fox-gold"
          )}
        >
          {initials(item.author)}
        </span>
        <p className="mt-4 line-clamp-6 text-sm font-medium leading-snug sm:text-base">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>
      <p className={cn("text-xs italic", isCenter ? "text-fox-black/70" : "text-fox-gray-dim")}>
        — {item.author}
      </p>
    </li>
  );
}

export default function StaggerTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [cardSize, setCardSize] = useState(300);
  const [list, setList] = useState<DeckItem[]>(() => testimonials.map((t, i) => ({ ...t, deckKey: i })));
  const keyRef = useRef(testimonials.length);

  const handleMove = (steps: number) => {
    if (steps === 0) return;
    setList((prev) => {
      const next = [...prev];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = next.shift();
          if (!item) return prev;
          next.push({ ...item, deckKey: keyRef.current++ });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = next.pop();
          if (!item) return prev;
          next.unshift({ ...item, deckKey: keyRef.current++ });
        }
      }
      return next;
    });
  };

  useEffect(() => {
    const update = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 300 : 240);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      style={{ height: cardSize + 140 }}
    >
      <ul className="absolute inset-0">
        {list.map((item, index) => {
          const position =
            list.length % 2 ? index - (list.length + 1) / 2 : index - list.length / 2;
          if (Math.abs(position) > VISIBLE_RANGE) return null;
          return <Card key={item.deckKey} item={item} position={position} onMove={handleMove} cardSize={cardSize} />;
        })}
      </ul>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
        <button
          type="button"
          onClick={() => handleMove(-1)}
          aria-label="Reseña anterior"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-fox-black text-fox-white transition-colors hover:border-fox-gold hover:text-fox-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fox-gold"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => handleMove(1)}
          aria-label="Siguiente reseña"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-fox-black text-fox-white transition-colors hover:border-fox-gold hover:text-fox-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fox-gold"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
