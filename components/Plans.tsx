import { Check, MessageCircle, Star } from "lucide-react";
import { PLANS, KEY_ONBOARDING, PAYMENT_METHODS, WHATSAPP_MESSAGES, currency, whatsappLink } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export default function Plans() {
  return (
    <section id="planes" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Planes"
          title="Elegí el plan que se adapta a tu ritmo."
          description="Sin letra chica. Cambiás o cancelás cuando quieras."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex h-full flex-col rounded-lg border p-8 transition-transform duration-300",
                plan.featured
                  ? "fox-gold-border border-transparent bg-fox-charcoal hover:-translate-y-1"
                  : "border-white/8 bg-fox-charcoal/50"
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-fox-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-fox-black">
                  <Star className="h-3 w-3 fill-fox-black" aria-hidden="true" />
                  Más elegido
                </span>
              )}

              <h3 className="font-display text-xl font-semibold text-fox-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-fox-gray">{plan.frequency}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold text-fox-white sm:text-5xl">
                  {currency(plan.price)}
                </span>
                <span className="text-sm text-fox-gray-dim">/mes</span>
              </div>

              <ul className="mt-7 flex flex-col gap-3">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm text-fox-gray">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-fox-gold" strokeWidth={2.5} aria-hidden="true" />
                    {perk}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(WHATSAPP_MESSAGES.plans)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors",
                  plan.featured
                    ? "bg-fox-gold text-fox-black hover:bg-white"
                    : "border border-white/15 text-fox-white hover:border-white/40"
                )}
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
                Consultar por WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-lg border border-white/8 bg-fox-charcoal p-6 text-sm text-fox-gray sm:flex-row sm:items-center sm:justify-between">
          <p>
            Ingreso con llave personal. Reposición ante pérdida:{" "}
            <span className="font-semibold text-fox-white">{currency(KEY_ONBOARDING.price)}</span>.
          </p>
          <p className="text-fox-gray-dim">Medios de pago: {PAYMENT_METHODS.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
