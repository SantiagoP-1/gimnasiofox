import { MessageCircle, ClipboardList } from "lucide-react";
import { SITE, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-fox-black py-24 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-fox-gold/60 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fox-gold/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-fox-gold">
            Sumate hoy
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-fox-white sm:text-5xl">
            Tu mejor versión empieza en {SITE.name}.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-fox-gray sm:text-lg">
            Escribinos por WhatsApp y coordinamos tu primera visita al mejor gimnasio de Balcarce.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.visit)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-fox-gold px-7 py-4 text-base font-semibold text-fox-black transition-colors hover:bg-white"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.4} aria-hidden="true" />
              Escribir por WhatsApp
            </a>
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.routine)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-7 py-4 text-base font-semibold text-fox-white transition-colors hover:border-white/35"
            >
              <ClipboardList className="h-4 w-4" aria-hidden="true" />
              Solicitá tu rutina
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
