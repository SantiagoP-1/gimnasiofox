import type { Metadata, Viewport } from "next";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StructuredData from "@/components/StructuredData";
import { SITE, SITE_URL } from "@/lib/data";
import { poppins, montserrat } from "./fonts";

const title = "Centro de Entrenamiento FOX | Gimnasio en Balcarce";
const description =
  "El gimnasio más completo de Balcarce: musculación, entrenamiento personalizado y fitness, con seguimiento de rutinas y una gran comunidad.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Centro de Entrenamiento FOX",
  },
  description,
  keywords: [
    "Centro de Entrenamiento FOX",
    "Balcarce",
    "gimnasio en Balcarce",
    "musculación en Balcarce",
    "entrenamiento personalizado Balcarce",
    "fitness Balcarce",
  ],
  authors: [{ name: SITE.owner }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE.fullName,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.fullName} — ${SITE.slogan}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="bg-fox-black text-fox-white antialiased">
        <StructuredData />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
