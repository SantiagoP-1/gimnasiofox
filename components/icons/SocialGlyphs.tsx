import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function InstagramGlyph(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookGlyph(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M14 8.5h-1.5A1.5 1.5 0 0 0 11 10v2m0 0H9m2 0v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function YoutubeGlyph(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="4" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" strokeLinejoin="round" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppGlyph(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path
        d="M4 20.5 5.2 16.4A8 8 0 1 1 8.4 19.3L4 20.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 9.6c.2-.6.5-.6.8-.6h.5c.2 0 .4 0 .6.4.2.5.6 1.5.6 1.6.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.2 1.6 2 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1.2-.2.6-.7.8-.9.2-.2.3-.2.6-.1.2.1 1.5.7 1.8.8.3.1.4.2.5.3.1.2.1.9-.2 1.5-.3.6-1.5 1.2-2.1 1.2-.6 0-1.1.2-3.6-.9-3-1.3-4.8-4.4-5-4.6-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.2Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
