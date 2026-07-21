import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    { path: "../node_modules/@fontsource/poppins/files/poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../node_modules/@fontsource/poppins/files/poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../node_modules/@fontsource/poppins/files/poppins-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../node_modules/@fontsource/poppins/files/poppins-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const montserrat = localFont({
  src: [
    { path: "../node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../node_modules/@fontsource/montserrat/files/montserrat-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});
