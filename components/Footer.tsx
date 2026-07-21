import Image from "next/image";
import { MapPin } from "lucide-react";
import { SITE, NAV_LINKS, SOCIAL_LINKS, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/data";
import logo from "@/public/images/logo-white.webp";
import { FacebookGlyph, InstagramGlyph, YoutubeGlyph, WhatsAppGlyph } from "@/components/icons/SocialGlyphs";

const SOCIAL_ICONS = {
  instagram: InstagramGlyph,
  facebook: FacebookGlyph,
  youtube: YoutubeGlyph,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-fox-black pt-16 pb-8">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-transparent via-white/25 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <a href="#inicio" aria-label="Centro de Entrenamiento FOX — inicio">
              <Image src={logo} alt="Centro de Entrenamiento FOX" className="h-10 w-auto" />
            </a>
            <p className="mt-4 max-w-xs text-sm text-fox-gray">{SITE.slogan}.</p>
            <p className="mt-1 text-sm text-fox-gray-dim">
              {SITE.city}, {SITE.province}
            </p>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wide text-fox-white">
              Navegación
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-fox-gray transition-colors hover:text-fox-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wide text-fox-white">
              Contacto
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={whatsappLink(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={SITE.phoneDisplay}
                  className="flex items-center gap-2 text-sm text-fox-gray transition-colors hover:text-fox-white"
                >
                  <WhatsAppGlyph className="h-4 w-4 shrink-0 text-fox-gold" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-fox-gray">
                <MapPin className="h-4 w-4 shrink-0 text-fox-gold" aria-hidden="true" />
                {SITE.city}, {SITE.province}
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wide text-fox-white">
              Seguinos
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.id];
                return (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-fox-gray transition-colors hover:text-fox-white"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-fox-gold" aria-hidden="true" />
                      {social.label}
                      {social.note && (
                        <span className="text-xs text-fox-gray-dim">({social.note})</span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-fox-gray-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.fullName}. Todos los derechos reservados.
          </p>
          <p>Propietario: {SITE.owner}</p>
        </div>
      </div>
    </footer>
  );
}
