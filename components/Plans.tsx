import { Check, MessageCircle, Star, Users } from "lucide-react";
import {
  PLANS,
  SHORT_PASSES,
  FAMILY_PROMOS,
  KEY_ONBOARDING,
  PAYMENT_METHODS,
  WHATSAPP_MESSAGES,
  currency,
  whatsappLink,
} from "@/lib/data";
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

        {/* Membresías */}
        <h3 className="mt-14 font-display text-sm font-bold uppercase tracking-wide text-fox-gray">
          Membresías
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:max-w-2xl">
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

              <h4 className="font-display text-xl font-semibold text-fox-white">{plan.name}</h4>
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

        {/* Pases por tiempo */}
        <h3 className="mt-14 font-display text-sm font-bold uppercase tracking-wide text-fox-gray">
          Pases por tiempo
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {SHORT_PASSES.map((pass) => (
            <div
              key={pass.id}
              className="flex flex-col rounded-lg border border-white/8 bg-fox-charcoal/50 p-6"
            >
              <h4 className="font-display text-base font-semibold text-fox-white">{pass.name}</h4>
              <p className="mt-1 text-xs text-fox-gray-dim">{pass.duration}</p>
              <span className="mt-4 font-display text-2xl font-bold text-fox-white">
                {currency(pass.price)}
              </span>
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.plans)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-xs font-semibold text-fox-white transition-colors hover:border-white/40"
              >
                <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
                Consultar
              </a>
            </div>
          ))}
        </div>

        {/* Planes familiares */}
        <div className="mt-14 flex items-center gap-2">
          <Users className="h-4 w-4 text-fox-gold" aria-hidden="true" />
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-fox-gray">
            Planes familiares
          </h3>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:max-w-2xl">
          {FAMILY_PROMOS.map((promo) => (
            <div
              key={promo.id}
              className="flex flex-col rounded-lg border border-white/8 bg-fox-charcoal/50 p-8 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h4 className="font-display text-lg font-semibold text-fox-white">{promo.name}</h4>
                <p className="mt-1 text-sm text-fox-gray">Membresía mensual para el grupo</p>
              </div>
              <div className="mt-5 flex items-center justify-between gap-4 sm:mt-0 sm:flex-col sm:items-end sm:gap-2">
                <span className="font-display text-2xl font-extrabold text-fox-white">
                  {currency(promo.price)}
                  <span className="ml-1 text-sm font-normal text-fox-gray-dim">/mes</span>
                </span>
                <a
                  href={whatsappLink(WHATSAPP_MESSAGES.family)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-fox-gold px-4 py-2.5 text-xs font-semibold text-fox-black transition-colors hover:bg-white"
                >
                  <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-lg border border-white/8 bg-fox-charcoal p-6 text-sm text-fox-gray sm:flex-row sm:items-center sm:justify-between">
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
