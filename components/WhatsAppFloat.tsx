"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-fox-gold text-fox-black shadow-[0_8px_24px_rgba(245,180,0,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fox-white sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} aria-hidden="true" />
    </motion.a>
  );
}
