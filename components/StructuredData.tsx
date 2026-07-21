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
  if (ADDRESS.streetAddress) address.streetAddress = ADDRESS.streetAddress;
  if (ADDRESS.postalCode) address.postalCode = ADDRESS.postalCode;
  return address;
}

export default function StructuredData() {
  const allReviews = TESTIMONIAL_ROWS.flatMap((row) => row.items);
  const averageRating = allReviews.reduce((sum, t) => sum + t.rating, 0) / allReviews.length;

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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(averageRating.toFixed(1)),
      reviewCount: allReviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: allReviews.map((t) => ({
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
