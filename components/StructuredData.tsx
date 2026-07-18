import {
  SITE,
  SOCIAL_LINKS,
  SITE_URL,
  ADDRESS,
  MAPS,
  SCHEDULE,
  PLANS,
  SHORT_PASSES,
  FAMILY_PROMOS,
  FACILITIES,
  SERVICES,
  PAYMENT_METHODS,
  TESTIMONIAL_ROWS,
} from "@/lib/data";

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function buildAddress() {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: ADDRESS.addressLocality,
    addressRegion: ADDRESS.addressRegion,
    addressCountry: ADDRESS.addressCountry,
  };
  // streetAddress / postalCode se omiten a propósito: no se proveyó la
  // dirección real y no queremos indexar un dato falso. Ver lib/data.ts.
  if (ADDRESS.streetAddress) address.streetAddress = ADDRESS.streetAddress;
  if (ADDRESS.postalCode) address.postalCode = ADDRESS.postalCode;
  return address;
}

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["ExerciseGym", "SportsActivityLocation", "LocalBusiness"],
    name: SITE.fullName,
    alternateName: SITE.name,
    description: `${SITE.slogan}. Musculación, sector aeróbico, seguimiento de rutinas y comunidad en ${SITE.city}.`,
    slogan: SITE.slogan,
    url: SITE_URL,
    image: `${SITE_URL}/images/og-image.jpg`,
    logo: `${SITE_URL}/images/logo-mark.webp`,
    telephone: `+${SITE.whatsappNumber}`,
    priceRange: "$$",
    currenciesAccepted: "ARS",
    paymentAccepted: PAYMENT_METHODS.join(", "),
    address: buildAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: MAPS.latitude,
      longitude: MAPS.longitude,
    },
    hasMap: MAPS.shortLink,
    sameAs: SOCIAL_LINKS.map((s) => s.url),
    openingHoursSpecification: SCHEDULE.openDays.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${DAY_NAMES[day]}`,
      opens: SCHEDULE.openTime,
      closes: SCHEDULE.closeTime,
    })),
    amenityFeature: [...FACILITIES, ...SERVICES].map((item) => ({
      "@type": "LocationFeatureSpecification",
      name: item.title,
      value: true,
    })),
    makesOffer: [
      ...PLANS.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        description: plan.frequency,
        price: plan.price,
        priceCurrency: "ARS",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: plan.price,
          priceCurrency: "ARS",
          unitText: "MONTH",
        },
      })),
      ...SHORT_PASSES.map((pass) => ({
        "@type": "Offer",
        name: pass.name,
        description: `Pase válido por ${pass.duration}`,
        price: pass.price,
        priceCurrency: "ARS",
      })),
      ...FAMILY_PROMOS.map((promo) => ({
        "@type": "Offer",
        name: promo.name,
        description: `Membresía mensual para ${promo.members} integrantes`,
        price: promo.price,
        priceCurrency: "ARS",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: promo.price,
          priceCurrency: "ARS",
          unitText: "MONTH",
        },
      })),
    ],
    
    review: TESTIMONIAL_ROWS.flatMap((row) => row.items).map((t) => ({
      "@type": "Review",
      reviewBody: t.quote,
      author: { "@type": "Person", name: t.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 0) }}
    />
  );
}
