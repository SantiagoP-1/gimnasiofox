export const SITE = {
  name: "FOX",
  fullName: "Centro de Entrenamiento FOX",
  slogan: "El gimnasio más completo de Balcarce",
  city: "Balcarce",
  province: "Buenos Aires, Argentina",
  owner: "Francisco Balinotti",
  phoneDisplay: "+54 2266 47-8000",
  whatsappNumber: "5492266478000",
};

export const SITE_URL = "https://gimnasiofox.vercel.app";

export const INSTAGRAM = {
  handle: "@centro_de_entrenamiento_fox",
  url: "https://www.instagram.com/centro_de_entrenamiento_fox/",
};

export type SocialLink = {
  id: "instagram" | "facebook" | "youtube";
  label: string;
  handle: string;
  url: string;
  note?: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    handle: INSTAGRAM.handle,
    url: INSTAGRAM.url,
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "Francisco Balinotti",
    url: "https://www.facebook.com/francisco.balinotti",
    note: "Perfil del profesor",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "@franciscobalinotti5560",
    url: "https://www.youtube.com/@franciscobalinotti5560",
    note: "Contenido del profesor",
  },
];

export const ADDRESS = {
  streetAddress: "Calle 17 774",
  addressLocality: "Balcarce",
  addressRegion: "Buenos Aires",
  postalCode: "7620",
  addressCountry: "AR",
};
export const MAPS = {
  latitude: -37.84628021982904,
  longitude: -58.26695703316607,
  shortLink: "https://maps.app.goo.gl/BHdRJSE6Px1tDSML8",
  embedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.598673107509!2d-58.26695703316607!3d-37.84628021982904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959aaf1721b902ad%3A0xb76d7dc41a7222b1!2sFox!5e0!3m2!1ses-419!2sar!4v1783465336537!5m2!1ses-419!2sar",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_MESSAGES = {
  general: "Hola FOX! Quiero sumarme al gimnasio, ¿me pasan información? 💪",
  plans: "Hola! Quiero consultar por los planes y precios de FOX.",
  visit: "Hola! Quiero coordinar una visita para conocer las instalaciones.",
  routine: "Hola! Quiero solicitar mi rutina de entrenamiento personalizada.",
  family: "Hola! Quiero consultar por los planes familiares de FOX.",
};

export const SCHEDULE = {
  openTime: "06:30",
  closeTime: "21:00",
  days: [
    { label: "Lunes a Viernes", hours: "06:30 – 21:00" },
    { label: "Sabado y Domingos", hours: "Cerrado" },
  ],
  openDays: [1, 2, 3, 4, 5],
};

export type Plan = {
  id: string;
  name: string;
  price: number;
  frequency: string;
  featured?: boolean;
  perks: string[];
};

export const PLANS: Plan[] = [
  {
    id: "mensual",
    name: "Mensual",
    price: 45000,
    frequency: "Acceso todos los días",
    featured: true,
    perks: [
      "Sin límite de días por semana",
      "Acceso a todos los sectores",
      "Seguimiento de rutina incluido",
    ],
  },
  {
    id: "plan-2x",
    name: "2 veces por semana",
    price: 40000,
    frequency: "2 días semanales",
    perks: [
      "Ideal para mantener constancia",
      "Acceso a todos los sectores",
      "Seguimiento de rutina incluido",
    ],
  },
];

export type ShortPass = {
  id: string;
  name: string;
  price: number;
  duration: string;
};

export const SHORT_PASSES: ShortPass[] = [
  { id: "medio-mes", name: "Medio mes", price: 30000, duration: "15 días" },
  { id: "semana", name: "1 semana", price: 20000, duration: "7 días" },
  { id: "dia", name: "1 día", price: 10000, duration: "Pase diario" },
];

export type FamilyPromo = {
  id: string;
  name: string;
  price: number;
  members: number;
};

export const FAMILY_PROMOS: FamilyPromo[] = [
  { id: "familia-3", name: "Familia 3 integrantes", price: 110000, members: 3 },
  { id: "familia-4", name: "Familia 4 integrantes", price: 130000, members: 4 },
];

export const KEY_ONBOARDING = {
  price: 3000,
  note: "Reposición de llave de ingreso personal",
};

export type Facility = {
  id: string;
  title: string;
  description: string;
  icon: "dumbbell" | "activity" | "trees" | "shower" | "lock" | "bike";
};

export const FACILITIES: Facility[] = [
  {
    id: "musculacion",
    title: "Sector musculación",
    description: "Equipamiento de calidad para fuerza e hipertrofia, con espacio pensado para entrenar cómodo.",
    icon: "dumbbell",
  },
  {
    id: "aerobico",
    title: "Sector aeróbico",
    description: "Zona dedicada al trabajo cardiovascular, integrada al resto de la sala de entrenamiento.",
    icon: "activity",
  },
  {
    id: "patios",
    title: "2 patios internos",
    description: "Espacios al aire libre dentro del predio, ideales para entrada en calor y trabajo funcional.",
    icon: "trees",
  },
  {
    id: "duchas",
    title: "Duchas",
    description: "Vestuarios con duchas disponibles para antes o después de entrenar.",
    icon: "shower",
  },
  {
    id: "lockers",
    title: "Lockers",
    description: "Guardado seguro para tus pertenencias mientras entrenás.",
    icon: "lock",
  },
  {
    id: "bicicletas",
    title: "Guardado de bicicletas",
    description: "Espacio reservado para dejar tu bici de forma segura durante el entrenamiento.",
    icon: "bike",
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "clipboard" | "zap" | "shield" | "stethoscope" | "key" | "thermometer";
};

export const SERVICES: Service[] = [
  {
    id: "seguimiento",
    title: "Seguimiento de rutinas",
    description: "Profesores atentos que acompañan tu progreso y ajustan tu rutina en el tiempo.",
    icon: "clipboard",
  },
  {
    id: "desfibrilador",
    title: "Desfibrilador",
    description: "Equipamiento de emergencia disponible en el predio para entrenar con tranquilidad.",
    icon: "zap",
  },
  {
    id: "assistem",
    title: "Área protegida Assistem",
    description: "Predio bajo sistema de protección Assistem para mayor seguridad de los socios.",
    icon: "shield",
  },
  {
    id: "cobertura",
    title: "Cobertura médica",
    description: "Cobertura pensada para que entrenes con la respaldo que corresponde.",
    icon: "stethoscope",
  },
  {
    id: "ingreso",
    title: "Ingreso con llave personal",
    description: "Acceso individual mediante llave propia. Reposición ante pérdida: $3.000.",
    icon: "key",
  },
  {
    id: "confort",
    title: "Confort todo el año",
    description: "Ventiladores en verano y calefacción en invierno para entrenar en cualquier época.",
    icon: "thermometer",
  },
];

export const PAYMENT_METHODS = ["Efectivo", "Transferencia", "Tarjeta de crédito"];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  rating: number;
};

// Reseñas reales de Google del negocio. Se excluyó a propósito la de Rubén
// Oscar Sánchez ("Muy lindo lugar, atención pobre") — es una crítica de
// servicio real y no corresponde mostrarla en la propia landing, pero vale
// la pena que el gimnasio la revise puertas adentro.
export const TESTIMONIAL_ROWS: { id: string; direction: "left" | "right"; duration: number; items: Testimonial[] }[] = [
  {
    id: "row-1",
    direction: "left",
    duration: 50,
    items: [
      { id: "r1", author: "Claudio Carillo", rating: 5, quote: "El mejor y más completo gimnasio de Balcarce." },
      { id: "r2", author: "Naza Heavymetal", rating: 5, quote: "Gran variedad de máquinas y los entrenadores están atentos para guiar a los principiantes." },
      { id: "r3", author: "Alberto Lantaño", rating: 5, quote: "Excelente. Máquinas de sobra, muy buena predisposición de quienes están a cargo y sin problemas con los horarios." },
      { id: "r4", author: "Anabel Fioriti", rating: 5, quote: "Muy equipado y los profes unos genios. Muy recomendable." },
      { id: "r5", author: "Elian Sandoval", rating: 5, quote: "El mejor gym sin duda alguna. Una gran comunidad te espera." },
      { id: "r6", author: "Mayra Pacheco", rating: 5, quote: "Un gimnasio muy completo y una atención espectacular." },
      { id: "r7", author: "Roxana Maldonado", rating: 5, quote: "El mejor gym de Balcarce. Buenas máquinas y muy buen control." },
      { id: "r8", author: "Agustín Pueblas", rating: 5, quote: "Excelente servicio. Entrenadores atentos." },
      { id: "r9", author: "Monijor Caro", rating: 5, quote: "Está bueno para todas las actividades." },
    ],
  },
  {
    id: "row-2",
    direction: "right",
    duration: 56,
    items: [
      { id: "r10", author: "Nahuel Lapalma", rating: 5, quote: "El mejor gym de la ciudad." },
      { id: "r11", author: "Sebastián Blanco", rating: 5, quote: "Una masa." },
      { id: "r12", author: "Susana Inés Gioffre", rating: 5, quote: "Saludable mentalmente y físicamente." },
      { id: "r13", author: "Jonathan", rating: 5, quote: "El mejor gimnasio de Balcarce." },
      { id: "r14", author: "Florencia Diez De Ulzurrun", rating: 5, quote: "Excelente atención." },
      { id: "r15", author: "Karen Eriksen", rating: 5, quote: "Muy completo." },
      { id: "r16", author: "Laura Inés Hamdan", rating: 5, quote: "Excelente." },
      { id: "r17", author: "Diego Tamagno", rating: 5, quote: "Excelente." },
      { id: "r18", author: "Martín Yan", rating: 5, quote: "Mejor gimnasio." },
    ],
  },
  {
    id: "row-3",
    direction: "left",
    duration: 62,
    items: [
      { id: "r19", author: "Silvia Zarate", rating: 5, quote: "El mejor gimnasio." },
      { id: "r20", author: "Nicolás M. Barra Pelecano", rating: 5, quote: "Muy completo." },
      { id: "r21", author: "Luis Abel Saracho", rating: 5, quote: "¡Excelente!" },
      { id: "r22", author: "Martín Gual", rating: 5, quote: "Uno de los más nuevos y con muchas alternativas para entrenar sin tener que esperar máquinas. Además, el precio mensual es accesible." },
      { id: "r23", author: "Pino Chorén", rating: 5, quote: "Muy buen gym." },
      { id: "r24", author: "Eric Acosta", rating: 5, quote: "Están muy buenas las máquinas." },
      { id: "r25", author: "Federico Guerra", rating: 5, quote: "Un gimnasio muy completo en zona céntrica de la ciudad." },
      { id: "r26", author: "Nancy Isla", rating: 5, quote: "¡Me encanta! Desconecto del mundo." },
      { id: "r27", author: "Facundo Di Pompo", rating: 5, quote: "Buen lugar para entrenar." },
    ],
  },
];

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQS: FAQItem[] = [
  {
    id: "planes",
    question: "¿Qué planes tiene FOX?",
    answer:
      "Tenés un plan Mensual (acceso todos los días) a $45.000, uno de 2 veces por semana a $40.000, y pases por tiempo: medio mes a $30.000, una semana a $20.000 y un día a $10.000. También hay planes familiares para 3 o 4 integrantes. Todos incluyen acceso a musculación, aeróbico y seguimiento de rutina.",
  },
  {
    id: "ingreso",
    question: "¿Cómo es el ingreso al gimnasio?",
    answer:
      "El ingreso es mediante una llave personal que se entrega a cada socio. Si la perdés, la reposición tiene un costo de $3.000.",
  },
  {
    id: "pagos",
    question: "¿Qué medios de pago aceptan?",
    answer: "Podés pagar en efectivo, por transferencia bancaria o con tarjeta de crédito.",
  },
  {
    id: "horarios",
    question: "¿Cuál es el horario de atención?",
    answer:
      "FOX abre de 06:30 a 21:00. Podés escribirnos por WhatsApp para confirmar disponibilidad en el horario que prefieras.",
  },
  {
    id: "seguridad",
    question: "¿Qué medidas de seguridad tiene el predio?",
    answer:
      "Contamos con desfibrilador en el predio, área protegida por el sistema Assistem y cobertura médica, además de acompañamiento profesional en cada rutina.",
  },
  {
    id: "comodidades",
    question: "¿Tienen duchas y lockers?",
    answer:
      "Sí, el predio cuenta con duchas, lockers para guardar tus pertenencias y un espacio exclusivo para guardar bicicletas.",
  },
];

export const NAV_LINKS = [
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
  { href: "#galeria", label: "Galería" },
  { href: "#horarios", label: "Horarios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#faq", label: "FAQ" },
];

export type HeroHighlight = {
  id: string;
  title: string;
  icon: "dumbbell" | "userCheck" | "users";
};

export const HERO_HIGHLIGHTS: HeroHighlight[] = [
  { id: "equipamiento", title: "Equipamiento de primer nivel", icon: "dumbbell" },
  { id: "profesores", title: "Profesores calificados", icon: "userCheck" },
  { id: "comunidad", title: "Comunidad que motiva", icon: "users" },
];

export const MARQUEE_ITEMS = [
  "MUSCULACIÓN",
  "ENTRENAMIENTO FUNCIONAL",
  "COMUNIDAD FOX",
  "SEGUIMIENTO PERSONALIZADO",
  "AERÓBICO",
  "CONSTANCIA",
  "BALCARCE",
];

export const currency = (value: number) =>
  `$${new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 }).format(value)}`;
