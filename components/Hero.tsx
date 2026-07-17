import Image from "next/image";
import { ArrowRight, ChevronDown, Dumbbell, MapPin, MessageCircle, UserCheck, Users } from "lucide-react";
import { HERO_HIGHLIGHTS, SITE, WHATSAPP_MESSAGES, whatsappLink, type HeroHighlight } from "@/lib/data";
import OpenStatus from "@/components/OpenStatus";
import Reveal from "@/components/Reveal";
import heroImg from "@/public/images/hero.webp";
import foxMark from "@/public/images/logo-fox-mark.webp";

const HIGHLIGHT_ICONS: Record<HeroHighlight["icon"], typeof Dumbbell> = {
  dumbbell: Dumbbell,
  userCheck: UserCheck,
  users: Users,
};

export default function Hero() {
  return (
    <section id="inicio" className="fox-noise relative flex min-h-[100svh] items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-linear-to-b from-fox-black/70 via-fox-black/85 to-fox-black" />
        <div className="absolute inset-0 bg-linear-to-r from-fox-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-24 sm:px-8">
        <Reveal>
          <OpenStatus />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.3em] text-fox-gold">
            Centro de Entrenamiento
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <h1 className="mt-3 max-w-md sm:max-w-lg md:max-w-xl">
            <span className="sr-only">FOX</span>
            <Image
              src={foxMark}
              alt=""
              aria-hidden="true"
              className="h-auto w-full"
            />
          </h1>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mt-6 max-w-xl text-xl font-medium text-fox-gray sm:text-2xl">
            {SITE.slogan}.
          </p>
          <p className="mt-3 max-w-lg text-base text-fox-gray-dim sm:text-lg">
            Musculación, aeróbico y una comunidad que te acompaña en cada rutina, en el corazón de {SITE.city}.
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-fox-gold px-7 py-4 text-base font-semibold text-fox-black transition-colors hover:bg-white"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.4} aria-hidden="true" />
              Sumate por WhatsApp
            </a>
            <a
              href="#planes"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-7 py-4 text-base font-semibold text-fox-white transition-colors hover:border-white/40"
            >
              Ver planes
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.44}>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
            {HERO_HIGHLIGHTS.map((item) => {
              const Icon = HIGHLIGHT_ICONS[item.icon];
              return (
                <li key={item.id} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-fox-gold/30 bg-fox-gold/10">
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
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-fox-gray md:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Descubrí más</span>
        <ChevronDown className="h-5 w-5 animate-bounce" style={{ animationDuration: "1.8s" }} />
      </a>
    </section>
  );
}
