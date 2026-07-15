import { MARQUEE_ITEMS } from "@/lib/data";

export default function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="relative overflow-hidden border-y border-fox-gold/25 bg-fox-charcoal py-3"
      aria-hidden="true"
    >
      <div className="fox-ticker flex w-max animate-marquee items-center">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((word, i) => (
              <li
                key={`${copy}-${i}`}
                className="flex items-center font-display text-xs font-semibold uppercase tracking-[0.2em] text-fox-gray sm:text-sm"
              >
                {word}
                <span className="mx-6 h-1 w-1 rounded-full bg-fox-gold/50" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
