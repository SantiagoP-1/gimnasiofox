import dynamic from "next/dynamic";
import {
  PLANS,
  SHORT_PASSES,
  FAMILY_PROMOS,
  KEY_ONBOARDING,
  PAYMENT_METHODS,
  WHATSAPP_MESSAGES,
  currency,
} from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import type { PlanCarouselItem } from "@/components/PlansCarousel";

const PlansCarousel = dynamic(() => import("@/components/PlansCarousel"));

const medioMes = SHORT_PASSES.find((pass) => pass.id === "medio-mes");
const mensualSavingsPct = medioMes
  ? Math.round((1 - PLANS.find((plan) => plan.id === "mensual")!.price / (medioMes.price * 2)) * 100)
  : undefined;

const ITEMS: PlanCarouselItem[] = [
  ...PLANS.map((plan) => ({
    id: plan.id,
    tag: "Membresía",
    name: plan.name,
    subtitle: plan.frequency,
    price: plan.price,
    cadence: "/mes",
    perks: plan.perks,
    featured: plan.featured,
    savingsNote:
      plan.id === "mensual" && mensualSavingsPct
        ? `Ahorrás ${mensualSavingsPct}% vs. 2 pases de medio mes`
        : undefined,
    message: WHATSAPP_MESSAGES.plans,
  })),
  ...SHORT_PASSES.map((pass) => ({
    id: pass.id,
    tag: "Pase",
    name: pass.name,
    subtitle: pass.duration,
    price: pass.price,
    message: WHATSAPP_MESSAGES.plans,
  })),
  ...FAMILY_PROMOS.map((promo) => ({
    id: promo.id,
    tag: "Familiar",
    name: promo.name,
    subtitle: "Membresía mensual para el grupo",
    price: promo.price,
    cadence: "/mes",
    message: WHATSAPP_MESSAGES.family,
  })),
];

export default function Plans() {
  return (
    <section id="planes" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Planes"
          title="Elegí el plan que se adapta a tu ritmo."
          description="Sin letra chica. Cambiás o cancelás cuando quieras."
        />
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
        <PlansCarousel items={ITEMS} />

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
