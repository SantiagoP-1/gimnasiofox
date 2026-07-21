"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Plus } from "lucide-react";
import { FAQS, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  return (
    <section id="faq" className="border-t border-white/5 bg-fox-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader eyebrow="Preguntas frecuentes" title="Todo lo que necesitás saber." align="center" />

        <div className="mt-14 flex flex-col gap-2">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="overflow-hidden rounded-lg border border-white/8 bg-fox-black">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-medium text-fox-white sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fox-gold/10"
                  >
                    <Plus className="h-4 w-4 text-fox-gold" aria-hidden="true" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="px-6"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-fox-gray">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-fox-gray">
          ¿Tenés otra consulta?{" "}
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.faq)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-fox-gold transition-colors hover:text-white"
          >
            Escribinos por WhatsApp
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}
