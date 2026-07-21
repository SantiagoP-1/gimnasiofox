import Image from "next/image";
import { ArrowRight, ChevronDown, MapPin, MessageCircle } from "lucide-react";
import { HERO_HIGHLIGHTS, SITE, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/data";
import { HERO_HIGHLIGHT_ICONS } from "@/lib/icons";
import OpenStatus from "@/components/OpenStatus";
import Reveal from "@/components/Reveal";
import heroImg from "@/public/images/hero.webp";
import foxMark from "@/public/images/logo-fox-mark.webp";

export default function Hero() {
  return (
    <section id="inicio" className="fox-noise relative flex min-h-svh items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Sala de entrenamiento del Centro de Entrenamiento FOX en Balcarce"
          fill
          priority
          placeholder="blur"
          quality={82}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-fox-black/52 via-fox-black/68 to-fox-black/86" />
        <div className="absolute inset-0 bg-linear-to-r from-fox-black/60 via-transparent to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-fox-black/70 to-transparent sm:h-28" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 pb-12 sm:px-8 sm:pt-28 sm:pb-24">
        <Reveal>
          <OpenStatus />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.3em] text-fox-gold sm:mt-8">
            Centro de Entrenamiento
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <h1 className="mt-3 max-w-xs sm:max-w-lg md:max-w-xl">
            <span className="sr-only">Centro de Entrenamiento FOX — Gimnasio en {SITE.city}</span>
            <Image
              src={foxMark}
              alt=""
              aria-hidden="true"
              className="h-auto w-full"
            />
          </h1>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mt-5 max-w-xl text-xl font-medium text-fox-gray sm:mt-6 sm:text-2xl">
            {SITE.slogan}.
          </p>
          <p className="mt-3 max-w-lg text-base text-fox-gray-dim sm:text-lg">
            Musculación, aeróbico y una comunidad que te acompaña en cada rutina, en el corazón de {SITE.city}.
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-fox-gold px-7 py-3.5 text-base font-semibold text-fox-black transition-colors hover:bg-white sm:py-4"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.4} aria-hidden="true" />
              Sumate por WhatsApp
            </a>
            <a
              href="#planes"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-7 py-3.5 text-base font-semibold text-fox-white transition-colors hover:border-white/40 sm:py-4"
            >
              Ver planes
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.44}>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-4 sm:mt-10 sm:gap-y-4 sm:pt-6">
            {HERO_HIGHLIGHTS.map((item) => {
              const Icon = HERO_HIGHLIGHT_ICONS[item.icon];
              return (
                <li key={item.id} className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-fox-gold/30 bg-fox-gold/10 sm:h-9 sm:w-9">
                    <Icon className="h-4 w-4 text-fox-gold" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-fox-white">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.5} className="absolute bottom-6 left-5 z-10 hidden sm:block">
        <div className="flex items-center gap-3 rounded-lg border-l-2 border-fox-gold bg-fox-black/70 py-3 pl-4 pr-5 backdrop-blur-sm">
          <MapPin className="h-4 w-4 text-fox-gold" aria-hidden="true" />
          <div className="leading-tight">
            <p className="text-xs font-semibold uppercase tracking-wide text-fox-gold">
              {SITE.city}, {SITE.province.split(",")[0]}
            </p>
            <p className="text-sm text-fox-white">Te esperamos</p>
          </div>
        </div>
      </Reveal>

      <a
        href="#instalaciones"
        aria-label="Ir a instalaciones"
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-fox-gray sm:bottom-8"
      >
        <span className="hidden text-xs uppercase tracking-[0.2em] sm:inline">Descubrí más</span>
        <ChevronDown className="h-5 w-5 animate-scroll-hint" />
      </a>
    </section>
  );
}
