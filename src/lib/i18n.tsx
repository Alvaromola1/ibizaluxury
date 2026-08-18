"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en" | "de" | "fr";

export const galleryItems = [
  { src: "/images/hero-dramatic.jpg", label: "Cliffside Villa" },
  { src: "/images/yacht-glamour.jpg", label: "Superyacht Charter" },
  { src: "/images/cars-fleet.jpg", label: "Supercar Fleet" },
  { src: "/images/chill-concept.jpg", label: "Infinity Living" },
  { src: "/images/yacht-sea.jpg", label: "Open Sea" },
  { src: "/images/vip-night.jpg", label: "Night VIP" },
  { src: "/images/hero-dramatic.jpg", label: "Golden Hour" },
  { src: "/images/champagne-yacht.jpg", label: "Private Jet" },
  { src: "/images/vip-night.jpg", label: "Beach Club" },
  { src: "/images/chef-villa.jpg", label: "Sunset Terrace" },
];

const es = {
  nav: {
    services: "Servicios",
    packages: "Paquetes",
    process: "Proceso",
    gallery: "Galería",
    faq: "FAQ",
    whatsapp: "WhatsApp",
    book: "Reservar",
    request: "Solicitar propuesta",
  },
  hero: {
    label: "Private Concierge · Ibiza",
    h1a: "Tu única misión: estar de chill.",
    h1b: "Del resto nos encargamos nosotros.",
    sub: "Villas exclusivas, yates, supercoches y acceso VIP en toda Ibiza. Tú pones el plan; nosotros lo hacemos realidad.",
    cta1: "Diseñar mi estancia",
    cta2: "Ver servicios",
    priority: "Priority request",
    formTitle: "Respuesta inmediata",
    online: "Online",
  },
  stats: [
    { value: "300+", label: "Villas exclusivas" },
    { value: "600+", label: "Yates & barcos" },
    { value: "50+", label: "Supercars en flota" },
    { value: "24/7", label: "Respuesta inmediata" },
  ],
  access: {
    label: "Acceso real, no catálogo",
    title: "Todo el lujo de Ibiza, a un solo mensaje.",
    p1: "Accedes —a través nuestro— a más de **300 villas**, más de **600 yates y barcos**, y un catálogo amplio de **coches de lujo y superdeportivos**. Tú no haces nada: eliges y disfrutas.",
    p2: "No verás un catálogo online: cada propuesta se prepara a mano para ti. Eso es concierge, no un portal de reservas.",
  },
  proof: [
    { big: "300+", small: "villas de lujo en toda Ibiza" },
    { big: "600+", small: "yates, veleros y barcos disponibles" },
    { big: "50+", small: "supercoches y SUVs premium" },
    { big: "1", small: "concierge dedicado 24/7" },
  ],
  services: {
    label: "Servicios concierge",
    title: "Todo lo que necesitas. Nada de lo que no.",
    sub: "No somos un buscador. Somos tu equipo en la isla: negociamos, reservamos y resolvemos en tiempo real.",
    items: [
      {
        image: "/images/hero-dramatic.jpg",
        title: "Villas exclusivas",
        subtitle: "Propiedades con alma y vistas de película",
        description:
          "Villas en primera línea con infinity pool, fincas con encanto en el interior de la isla y modernas propiedades de diseño con vistas al mar. En Cala Jondal, Es Cubells, San José, Santa Gertrudis y las mejores zonas de Ibiza. Con staff, chef y todo lo que necesites.",
        highlights: ["Infinity pool & vistas al mar", "Chef privado & housekeeping", "Las mejores zonas de la isla"],
      },
      {
        image: "/images/yacht-glamour.jpg",
        title: "Yates & charter",
        subtitle: "El Mediterráneo a tu medida",
        description:
          "Desde day charter hasta multi-día a bordo de Azimut, Sunseeker, Sanlorenzo y más. Tripulación, catering y rutas a calas secretas.",
        highlights: ["Day & multi-day charters", "Tripulación & catering gourmet", "Calas secretas de Ibiza y Formentera"],
      },
      {
        image: "/images/cars-fleet.jpg",
        title: "Flota superdeportiva",
        subtitle: "Lamborghini, Ferrari, Rolls-Royce y más",
        description:
          "Un catálogo amplio de supercoches, SUVs de lujo y descapotables: Lambo Huracán, Ferrari 488 Spider, G63 AMG, Rolls-Royce, SL AMG. Entrega en aeropuerto, villa o puerto.",
        highlights: ["Supercars & hypercars", "Entrega donde quieras", "Multiday sin fricción"],
      },
      {
        image: "/images/vip-night.jpg",
        title: "Experiencias VIP",
        subtitle: "Acceso total a la Ibiza que no se ve",
        description:
          "Mesas VIP en los mejores beach clubs y discotecas, chefs privados en tu villa, servicio de wellness, jets privados, seguridad, fiestas a medida. Si lo imaginas, lo hacemos posible.",
        highlights: ["Beach clubs & nightlife", "Jet privado & transfers", "Celebraciones a medida"],
      },
    ],
  },
  promise: {
    label: "Nuestra promesa",
    title: "Tú no haces nada. Y todo sale perfecto.",
    text: "Villa con vistas perfectas al atardecer, nevera llena y coche con chófer esperándote. Mesa VIP en el mejor beach club o chef privado con cena a la luz de las velas. Traslado al yate para ver el atardecer en Es Vedrà y, a la vuelta, masaje o tratamiento de belleza. Un WhatsApp. Cero fricción.",
    cards: [
      {
        t: "Cero fricción",
        d: "No grupos de WhatsApp ni comparativas infinitas. Nos dices estilo, fechas y mood, y te preparamos varias propuestas reales a medida.",
      },
      {
        t: "Detrás de cada detalle hay un equipo",
        d: "Nos encargamos de absolutamente todo: cerrar la villa, organizar el yate, dejar el coche listo, reservar las mesas y diseñar los menús con el chef. Todo atado antes de que aterrices.",
      },
      {
        t: "Inventario real",
        d: "Todo lo que te proponemos está libre para tus fechas exactas y verificado por nuestro equipo. Sin sorpresas al llegar.",
      },
    ],
  },
  packs: {
    label: "Paquetes",
    title: "Elige tu nivel de dream",
    sub: "Tres formas de vivir Ibiza sin mover un dedo.",
    popular: "Más solicitado",
    items: [
      {
        name: "Escape Essentials",
        price: "Desde 8.500€",
        period: "por estancia",
        description: "Ideal para escapadas de 3–5 noches con el núcleo del lujo ibicenco.",
        features: [
          "Villa boutique o suite premium",
          "Vehículo convertible o SUV",
          "Day charter half-day opcional",
          "Concierge 12h + WhatsApp priority",
          "Reservas beach club",
        ],
        cta: "Diseñar mi escape",
        popular: false,
      },
      {
        name: "Signature Week",
        price: "Desde 28.000€",
        period: "por semana",
        description: "La experiencia completa: villa de alto nivel, yate y ritmo VIP sin fricciones.",
        features: [
          "Villa con piscina y vistas mar",
          "Yate day charter incluido",
          "Flota premium toda la estancia",
          "Chef privado 2 cenas",
          "Concierge 24/7 + itinerario a medida",
          "Mesas VIP garantizadas en los mejores beach clubs",
        ],
        cta: "Reservar Signature",
        popular: true,
      },
      {
        name: "Ultra Private",
        price: "A medida",
        period: "bajo briefing",
        description: "Para quienes exigen discreción total y ejecución impecable.",
        features: [
          "Villa ultra-premium / compound",
          "Yate multi-día + tripulación",
          "Jet privado & security opcional",
          "Event planner & full staff",
          "NDA & protocolo de privacidad",
          "Lead concierge dedicado",
        ],
        cta: "Hablar con concierge",
        popular: false,
      },
    ],
  },
  process: {
    label: "Cómo funciona",
    title: "De la idea al itinerario en cuatro pasos",
    steps: [
      {
        step: "01",
        title: "Briefing express",
        text: "Nos cuentas fechas, invitados, estilo y presupuesto. Nos ponemos en marcha al momento.",
      },
      {
        step: "02",
        title: "Eliges tu plan",
        text: "Recibes varias propuestas y eliges la que más te guste. Ajustamos lo que haga falta.",
      },
      {
        step: "03",
        title: "Todo atado",
        text: "Confirmamos cada reserva y coordinamos al equipo en la isla. Recibes tu itinerario cerrado.",
      },
      {
        step: "04",
        title: "Live your dream",
        text: "Llegas y todo está en su sitio. Si te apetece algo, un mensaje. Si no, no haces nada. Ese es el plan.",
      },
    ],
    feelLabel: "Cómo se siente",
    quote:
      "\"Aterrizamos y ya estaba todo resuelto: coche en la puerta, villa perfecta, reserva en el beach club y el yate confirmado para el día siguiente. No tuve que mover un dedo.\"",
    author: "— Cliente habitual · Signature Week",
  },
  gallery: {
    label: "Inspiración",
    title: "Así se vive Ibiza con nosotros",
    sub: "Villas cliffside, superyates, supercoches y noches VIP. Una muestra del nivel que te espera.",
  },
  testis: {
    label: "Confianza de clientes",
    title: "Historias de estancias impecables",
    items: [
      {
        quote:
          "Llegamos un viernes y a las dos horas estábamos en un day charter a Formentera con chef a bordo. Cero fricción, puro disfrute.",
        name: "Sophie M.",
        role: "Londres · Signature Week",
      },
      {
        quote:
          "Necesitábamos discreción total para un grupo de 12. Villa, G-Wagon, mesas VIP y security sin un solo fallo.",
        name: "A. R.",
        role: "Dubai · Ultra Private",
      },
      {
        quote:
          "Pensaba que alquilar villa + yate por mi cuenta sería más barato. Me equivoqué: el valor está en el acceso y el tiempo ahorrado.",
        name: "Marco & Elena",
        role: "Milán · Escape Essentials",
      },
    ],
  },
  cta: {
    label: "Solicitud prioritaria",
    title: "Cuéntanos tu dream. Nosotros lo hacemos real.",
    sub: "Completa el briefing y nos ponemos en marcha al momento.",
    bullets: [
      "Respuesta inmediata",
      "Varias propuestas a medida",
      "WhatsApp concierge dedicado",
      "Privacidad total",
    ],
    direct: "Preferir WhatsApp directo",
    formTitle: "Briefing de estancia",
    formSub: "60 segundos. Sin spam. Solo tu propuesta.",
  },
  faq: {
    label: "FAQ",
    title: "Preguntas antes de reservar",
    sub: "Transparencia total: proceso y expectativas claras.",
    items: [
      {
        q: "¿Por qué no veo un catálogo online con precios?",
        a: "Porque no somos un portal. Trabajamos de forma 100% personalizada: nos cuentas fechas, grupo y estilo, y te enviamos varias propuestas reales, disponibles y verificadas para tus fechas. Sin catálogos desactualizados ni pérdidas de tiempo.",
      },
      {
        q: "¿Realmente tenéis acceso a tantas villas y barcos?",
        a: "Sí. Acceso directo a inventario y red premium verificada en Ibiza y Formentera. No todo está online por privacidad, pero sí disponible bajo briefing.",
      },
      {
        q: "¿Cuánto cuesta un viaje con vosotros?",
        a: "Depende de fechas, tamaño del grupo y nivel de propiedad. Como referencia: escapes desde ~8.500€, semanas signature desde ~28.000€ y ultra private a medida. Te damos presupuesto cerrado en 24–48h.",
      },
      {
        q: "¿Trabajáis solo en temporada alta?",
        a: "Operamos todo el año, con pico de mayo a octubre. Fuera de temporada hay villas y yates con tarifas más atractivas y más exclusividad.",
      },
      {
        q: "¿Puedo reservar solo un yate o un coche?",
        a: "Sí. Aunque el valor máximo está en el paquete integrado, también gestionamos servicios individuales con el mismo estándar.",
      },
      {
        q: "¿Cómo garantizáis la calidad?",
        a: "Solo trabajamos con inventario inspeccionado o de partners de confianza. Si algo no cumple, lo sustituimos antes de tu llegada.",
      },
      {
        q: "¿En qué idiomas atendéis?",
        a: "Atendemos en español, inglés, alemán, francés e italiano. Ideal para clientes internacionales que llegan a Ibiza.",
      },
      {
        q: "¿Cuál es el proceso de pago y cancelación?",
        a: "Depósito para bloquear, saldo antes de la llegada. Condiciones claras por escrito según propiedad y proveedor. Transparencia total.",
      },
    ],
  },
  form: {
    name: "Nombre completo *",
    email: "Email *",
    phone: "WhatsApp / Teléfono",
    service: "Servicio *",
    guests: "Huéspedes",
    dates: "Fechas aproximadas",
    budget: "Presupuesto orientativo",
    message: "Cuéntanos tu dream",
    namePh: "Tu nombre",
    emailPh: "tu@email.com",
    phonePh: "Tu número con prefijo",
    consent: "He leído y acepto la",
    consentLink: "política de privacidad",
    datesPh: "Ej. 12–19 julio",
    msgPh: "Estilo de villa, beach clubs, celebración especial...",
    submit: "Solicitar propuesta ahora",
    submitting: "Enviando...",
    hint: "Respuesta prioritaria · Sin compromiso · Privacidad total",
    error: "No se pudo enviar la solicitud",
    serviceOpts: [
      { v: "Villas exclusivas", l: "Villas exclusivas" },
      { v: "Yates & charter", l: "Yates & charter" },
      { v: "Flota premium", l: "Flota superdeportiva" },
      { v: "Experiencias VIP", l: "Experiencias VIP" },
      { v: "Escape Essentials", l: "Paquete Escape Essentials" },
      { v: "Signature Week", l: "Paquete Signature Week" },
      { v: "Ultra Private", l: "Paquete Ultra Private" },
      { v: "Todo a medida", l: "Todo a medida" },
    ],
    budgetOpts: [
      { v: "<10k", l: "Menos de 10.000€" },
      { v: "10k-28k", l: "10.000€ – 28.000€" },
      { v: "28k-60k", l: "28.000€ – 60.000€" },
      { v: "60k-120k", l: "60.000€ – 120.000€" },
      { v: "120k+", l: "Más de 120.000€" },
      { v: "flexible", l: "Flexible / a definir" },
    ],
  },
  footer: {
    desc: "Concierge de lujo en Ibiza: villas, yates, flota premium y experiencias VIP diseñadas para que solo tengas que disfrutar.",
    explore: "Explorar",
    contact: "Contacto",
    whats: "WhatsApp Concierge",
    rights: "Private Concierge",
  },
  chill: {
    label: "Modo chill: activado",
    l1: "Tú, al sol.",
    l2: "Nosotros, al teléfono.",
    l3: "Así funciona esto.",
    cta: "Activar modo chill",
  },
  cookies: {
    text: "Usamos cookies propias y de terceros para analítica y publicidad.",
    ok: "Aceptar",
    no: "Rechazar",
  },
  whatsMsg: "Hola, quiero diseñar mi experiencia de lujo en Ibiza.",
  gracias: {
    label: "Confirmación",
    title: "Tu dream ya está en marcha",
    text: "Hemos recibido tu solicitud. Un concierge te contactará de inmediato con opciones reales según fechas, presupuesto y estilo.",
    steps: ["Revisamos disponibilidad", "Preparamos varias propuestas", "Te escribimos por email/WhatsApp"],
    wa: "Escribir por WhatsApp",
    waMsg: "Hola, acabo de enviar mi solicitud desde la web y quiero avanzar.",
    back: "Volver al inicio",
  },
};

const en: typeof es = {
  nav: {
    services: "Services",
    packages: "Packages",
    process: "Process",
    gallery: "Gallery",
    faq: "FAQ",
    whatsapp: "WhatsApp",
    book: "Book now",
    request: "Request a proposal",
  },
  hero: {
    label: "Private Concierge · Ibiza",
    h1a: "Your only mission: to chill.",
    h1b: "We take care of the rest.",
    sub: "Exclusive villas, yachts, supercars and VIP access across Ibiza. You set the plan; we make it happen.",
    cta1: "Design my stay",
    cta2: "View services",
    priority: "Priority request",
    formTitle: "Instant response",
    online: "Online",
  },
  stats: [
    { value: "300+", label: "Exclusive villas" },
    { value: "600+", label: "Yachts & boats" },
    { value: "50+", label: "Supercars in fleet" },
    { value: "24/7", label: "Instant response" },
  ],
  access: {
    label: "Real access, not a catalogue",
    title: "All of Ibiza's luxury, one message away.",
    p1: "Through us you access over **300 villas**, more than **600 yachts and boats**, and a wide catalogue of **luxury cars and supercars**. You do nothing: choose and enjoy.",
    p2: "You won't find an online catalogue here: every proposal is prepared by hand for you. That's concierge — not a booking portal.",
  },
  proof: [
    { big: "300+", small: "luxury villas across Ibiza" },
    { big: "600+", small: "yachts, sailboats and boats available" },
    { big: "50+", small: "supercars and premium SUVs" },
    { big: "1", small: "dedicated concierge 24/7" },
  ],
  services: {
    label: "Concierge services",
    title: "Everything you need. Nothing you don't.",
    sub: "We're not a search engine. We're your team on the island: we negotiate, book and solve in real time.",
    items: [
      {
        image: "/images/hero-dramatic.jpg",
        title: "Exclusive villas",
        subtitle: "Properties with soul and breathtaking views",
        description:
          "Frontline villas with infinity pools, charming fincas in the island's countryside and modern design properties overlooking the sea. In Cala Jondal, Es Cubells, San José, Santa Gertrudis and Ibiza's finest areas. With staff, chef and everything you need.",
        highlights: ["Infinity pool & sea views", "Private chef & housekeeping", "The island's finest areas"],
      },
      {
        image: "/images/yacht-glamour.jpg",
        title: "Yachts & charter",
        subtitle: "The Mediterranean, your way",
        description:
          "From day charters to multi-day trips aboard Azimut, Sunseeker, Sanlorenzo and more. Crew, catering and routes to secret coves.",
        highlights: ["Day & multi-day charters", "Crew & gourmet catering", "Hidden coves of Ibiza & Formentera"],
      },
      {
        image: "/images/cars-fleet.jpg",
        title: "Supercar fleet",
        subtitle: "Lamborghini, Ferrari, Rolls-Royce and more",
        description:
          "A wide catalogue of supercars, luxury SUVs and convertibles: Lambo Huracán, Ferrari 488 Spider, G63 AMG, Rolls-Royce, SL AMG. Delivered to airport, villa or port.",
        highlights: ["Supercars & hypercars", "Delivery anywhere", "Frictionless multi-day"],
      },
      {
        image: "/images/vip-night.jpg",
        title: "VIP experiences",
        subtitle: "Full access to the Ibiza you don't see",
        description:
          "VIP tables at the best beach clubs and nightclubs, private chefs at your villa, wellness services, private jets, security, bespoke parties. If you can imagine it, we make it happen.",
        highlights: ["Beach clubs & nightlife", "Private jet & transfers", "Bespoke celebrations"],
      },
    ],
  },
  promise: {
    label: "Our promise",
    title: "You do nothing. And everything turns out perfect.",
    text: "A villa with perfect sunset views, a stocked fridge and a chauffeured car waiting for you. A VIP table at the best beach club or a private chef with a candlelit dinner at home. Transfer to the yacht for sunset at Es Vedrà and, on your return, a massage or beauty treatment. One WhatsApp. Zero friction.",
    cards: [
      {
        t: "Zero friction",
        d: "No WhatsApp groups, no endless comparisons. Tell us your style, dates and mood, and we prepare several real, tailored proposals.",
      },
      {
        t: "A team behind every detail",
        d: "We handle absolutely everything: locking in the villa, arranging the yacht, having the car ready, booking the tables and designing the menus with the chef. All set before you land.",
      },
      {
        t: "Real inventory",
        d: "Everything we propose is free for your exact dates and verified by our team. No surprises on arrival.",
      },
    ],
  },
  packs: {
    label: "Packages",
    title: "Choose your level of dream",
    sub: "Three ways to live Ibiza without lifting a finger.",
    popular: "Most requested",
    items: [
      {
        name: "Escape Essentials",
        price: "From €8,500",
        period: "per stay",
        description: "Ideal for 3–5 night escapes with the core of Ibiza luxury.",
        features: [
          "Boutique villa or premium suite",
          "Convertible or SUV",
          "Optional half-day charter",
          "12h concierge + priority WhatsApp",
          "Beach club reservations",
        ],
        cta: "Design my escape",
        popular: false,
      },
      {
        name: "Signature Week",
        price: "From €28,000",
        period: "per week",
        description: "The full experience: top-tier villa, yacht and VIP pace with zero friction.",
        features: [
          "Villa with pool and sea views",
          "Day yacht charter included",
          "Premium fleet for the whole stay",
          "Private chef, 2 dinners",
          "24/7 concierge + bespoke itinerary",
          "Guaranteed VIP tables at the best beach clubs",
        ],
        cta: "Book Signature",
        popular: true,
      },
      {
        name: "Ultra Private",
        price: "Bespoke",
        period: "upon briefing",
        description: "For those who demand total discretion and flawless execution.",
        features: [
          "Ultra-premium villa / compound",
          "Multi-day yacht + crew",
          "Private jet & optional security",
          "Event planner & full staff",
          "NDA & privacy protocol",
          "Dedicated lead concierge",
        ],
        cta: "Talk to a concierge",
        popular: false,
      },
    ],
  },
  process: {
    label: "How it works",
    title: "From idea to itinerary in four steps",
    steps: [
      {
        step: "01",
        title: "Express briefing",
        text: "Tell us dates, guests, style and budget. We get moving right away.",
      },
      {
        step: "02",
        title: "Choose your plan",
        text: "You receive several proposals and pick your favourite. We fine-tune whatever's needed.",
      },
      {
        step: "03",
        title: "Everything locked in",
        text: "We confirm every booking and coordinate the team on the island. You receive a closed itinerary.",
      },
      {
        step: "04",
        title: "Live your dream",
        text: "You land and everything is in place. Fancy something? One message. If not, do nothing. That's the plan.",
      },
    ],
    feelLabel: "How it feels",
    quote:
      "\"We landed and everything was already sorted: car at the door, perfect villa, beach club reservation and the yacht confirmed for the next day. I didn't lift a finger.\"",
    author: "— Returning client · Signature Week",
  },
  gallery: {
    label: "Inspiration",
    title: "This is Ibiza with us",
    sub: "Cliffside villas, superyachts, supercars and VIP nights. A glimpse of the level that awaits you.",
  },
  testis: {
    label: "Client trust",
    title: "Stories of flawless stays",
    items: [
      {
        quote:
          "We arrived on a Friday and two hours later we were on a day charter to Formentera with a chef on board. Zero friction, pure enjoyment.",
        name: "Sophie M.",
        role: "London · Signature Week",
      },
      {
        quote:
          "We needed total discretion for a group of 12. Villa, G-Wagon, VIP tables and security without a single slip.",
        name: "A. R.",
        role: "Dubai · Ultra Private",
      },
      {
        quote:
          "I thought booking villa + yacht on my own would be cheaper. I was wrong: the value is in the access and the time saved.",
        name: "Marco & Elena",
        role: "Milan · Escape Essentials",
      },
    ],
  },
  cta: {
    label: "Priority request",
    title: "Tell us your dream. We make it real.",
    sub: "Complete the briefing and we get moving immediately.",
    bullets: [
      "Instant response",
      "Several tailored proposals",
      "Dedicated WhatsApp concierge",
      "Total privacy",
    ],
    direct: "Prefer WhatsApp directly",
    formTitle: "Stay briefing",
    formSub: "60 seconds. No spam. Just your proposal.",
  },
  faq: {
    label: "FAQ",
    title: "Questions before booking",
    sub: "Total transparency: clear process and expectations.",
    items: [
      {
        q: "Why don't I see an online catalogue with prices?",
        a: "Because we're not a portal. We work 100% personally: you tell us dates, group and style, and we send you several real proposals, available and verified for your dates. No outdated catalogues, no wasted time.",
      },
      {
        q: "Do you really have access to that many villas and boats?",
        a: "Yes. Direct access to verified premium inventory and network across Ibiza and Formentera. Not everything is online for privacy reasons, but it's all available upon briefing.",
      },
      {
        q: "How much does a trip with you cost?",
        a: "It depends on dates, group size and property level. As a reference: escapes from ~€8,500, signature weeks from ~€28,000 and ultra private is bespoke. You get a closed quote within 24–48h.",
      },
      {
        q: "Do you only operate in high season?",
        a: "We operate year-round, peaking May to October. Off-season offers villas and yachts at better rates with even more exclusivity.",
      },
      {
        q: "Can I book just a yacht or a car?",
        a: "Yes. While the greatest value is in the integrated package, we also manage individual services to the same standard.",
      },
      {
        q: "How do you guarantee quality?",
        a: "We only work with inspected inventory or trusted partners. If something doesn't meet the standard, we replace it before your arrival.",
      },
      {
        q: "Which languages do you speak?",
        a: "We assist in Spanish, English, German, French and Italian. Ideal for international clients arriving in Ibiza.",
      },
      {
        q: "What's the payment and cancellation process?",
        a: "Deposit to lock in, balance before arrival. Clear written terms per property and provider. Total transparency.",
      },
    ],
  },
  form: {
    name: "Full name *",
    email: "Email *",
    phone: "WhatsApp / Phone",
    service: "Service *",
    guests: "Guests",
    dates: "Approximate dates",
    budget: "Approximate budget",
    message: "Tell us your dream",
    namePh: "Your name",
    emailPh: "you@email.com",
    phonePh: "Your number with country code",
    consent: "I have read and accept the",
    consentLink: "privacy policy",
    datesPh: "E.g. July 12–19",
    msgPh: "Villa style, beach clubs, special celebration...",
    submit: "Request proposal now",
    submitting: "Sending...",
    hint: "Priority response · No commitment · Total privacy",
    error: "The request could not be sent",
    serviceOpts: [
      { v: "Villas exclusivas", l: "Exclusive villas" },
      { v: "Yates & charter", l: "Yachts & charter" },
      { v: "Flota premium", l: "Supercar fleet" },
      { v: "Experiencias VIP", l: "VIP experiences" },
      { v: "Escape Essentials", l: "Escape Essentials package" },
      { v: "Signature Week", l: "Signature Week package" },
      { v: "Ultra Private", l: "Ultra Private package" },
      { v: "Todo a medida", l: "Fully bespoke" },
    ],
    budgetOpts: [
      { v: "<10k", l: "Under €10,000" },
      { v: "10k-28k", l: "€10,000 – €28,000" },
      { v: "28k-60k", l: "€28,000 – €60,000" },
      { v: "60k-120k", l: "€60,000 – €120,000" },
      { v: "120k+", l: "Over €120,000" },
      { v: "flexible", l: "Flexible / to define" },
    ],
  },
  footer: {
    desc: "Luxury concierge in Ibiza: villas, yachts, premium fleet and VIP experiences designed so all you have to do is enjoy.",
    explore: "Explore",
    contact: "Contact",
    whats: "WhatsApp Concierge",
    rights: "Private Concierge",
  },
  chill: {
    label: "Chill mode: on",
    l1: "You, in the sun.",
    l2: "Us, on the phone.",
    l3: "That's how this works.",
    cta: "Activate chill mode",
  },
  cookies: {
    text: "We use first and third-party cookies for analytics and advertising.",
    ok: "Accept",
    no: "Decline",
  },
  whatsMsg: "Hi, I'd like to design my luxury experience in Ibiza.",
  gracias: {
    label: "Confirmation",
    title: "Your dream is underway",
    text: "We've received your request. A concierge will contact you right away with real options based on your dates, budget and style.",
    steps: ["We check availability", "We prepare several proposals", "We reach out via email/WhatsApp"],
    wa: "Message us on WhatsApp",
    waMsg: "Hi, I just sent my request from the website and I'd like to move forward.",
    back: "Back to home",
  },
};

const de: typeof es = {
  nav: {
    services: "Leistungen",
    packages: "Pakete",
    process: "Ablauf",
    gallery: "Galerie",
    faq: "FAQ",
    whatsapp: "WhatsApp",
    book: "Buchen",
    request: "Angebot anfordern",
  },
  hero: {
    label: "Private Concierge · Ibiza",
    h1a: "Deine einzige Mission: chillen.",
    h1b: "Um den Rest kümmern wir uns.",
    sub: "Exklusive Villen, Yachten, Supersportwagen und VIP-Zugang auf ganz Ibiza. Du bestimmst den Plan; wir machen ihn wahr.",
    cta1: "Meinen Aufenthalt planen",
    cta2: "Leistungen ansehen",
    priority: "Priority Request",
    formTitle: "Sofortige Antwort",
    online: "Online",
  },
  stats: [
    { value: "300+", label: "Exklusive Villen" },
    { value: "600+", label: "Yachten & Boote" },
    { value: "50+", label: "Supersportwagen" },
    { value: "24/7", label: "Sofortige Antwort" },
  ],
  access: {
    label: "Echter Zugang, kein Katalog",
    title: "Der ganze Luxus Ibizas — nur eine Nachricht entfernt.",
    p1: "Über uns erhältst du Zugang zu über **300 Villen**, mehr als **600 Yachten und Booten** und einem großen Katalog an **Luxusautos und Supersportwagen**. Du machst nichts: aussuchen und genießen.",
    p2: "Du findest hier keinen Online-Katalog: Jedes Angebot wird von Hand für dich erstellt. Das ist Concierge — kein Buchungsportal.",
  },
  proof: [
    { big: "300+", small: "Luxusvillen auf ganz Ibiza" },
    { big: "600+", small: "Yachten, Segelboote und Boote" },
    { big: "50+", small: "Supersportwagen und Premium-SUVs" },
    { big: "1", small: "persönlicher Concierge 24/7" },
  ],
  services: {
    label: "Concierge-Leistungen",
    title: "Alles, was du brauchst. Nichts, was du nicht brauchst.",
    sub: "Wir sind keine Suchmaschine. Wir sind dein Team auf der Insel: Wir verhandeln, buchen und lösen in Echtzeit.",
    items: [
      {
        image: "/images/hero-dramatic.jpg",
        title: "Exklusive Villen",
        subtitle: "Immobilien mit Seele und atemberaubender Aussicht",
        description:
          "Villen in erster Meereslinie mit Infinity-Pool, charmante Fincas im Inselinneren und moderne Designer-Anwesen mit Meerblick. In Cala Jondal, Es Cubells, San José, Santa Gertrudis und den besten Lagen Ibizas. Mit Personal, Koch und allem, was du brauchst.",
        highlights: ["Infinity-Pool & Meerblick", "Privatkoch & Housekeeping", "Die besten Lagen der Insel"],
      },
      {
        image: "/images/yacht-glamour.jpg",
        title: "Yachten & Charter",
        subtitle: "Das Mittelmeer nach deinen Wünschen",
        description:
          "Vom Tagescharter bis zu mehrtägigen Törns an Bord von Azimut, Sunseeker, Sanlorenzo und mehr. Crew, Catering und Routen zu geheimen Buchten.",
        highlights: ["Tages- & Mehrtagescharter", "Crew & Gourmet-Catering", "Geheime Buchten von Ibiza & Formentera"],
      },
      {
        image: "/images/cars-fleet.jpg",
        title: "Supersportwagen-Flotte",
        subtitle: "Lamborghini, Ferrari, Rolls-Royce und mehr",
        description:
          "Ein großer Katalog an Supersportwagen, Luxus-SUVs und Cabrios: Lambo Huracán, Ferrari 488 Spider, G63 AMG, Rolls-Royce, SL AMG. Lieferung an Flughafen, Villa oder Hafen.",
        highlights: ["Supercars & Hypercars", "Lieferung überallhin", "Mehrtägig ohne Aufwand"],
      },
      {
        image: "/images/vip-night.jpg",
        title: "VIP-Erlebnisse",
        subtitle: "Voller Zugang zum verborgenen Ibiza",
        description:
          "VIP-Tische in den besten Beach Clubs und Nachtclubs, Privatköche in deiner Villa, Wellness-Service, Privatjets, Security, Feiern nach Maß. Wenn du es dir vorstellen kannst, machen wir es möglich.",
        highlights: ["Beach Clubs & Nightlife", "Privatjet & Transfers", "Feiern nach Maß"],
      },
    ],
  },
  promise: {
    label: "Unser Versprechen",
    title: "Du machst nichts. Und alles wird perfekt.",
    text: "Villa mit perfektem Sonnenuntergangsblick, gefüllter Kühlschrank und Wagen mit Chauffeur, der auf dich wartet. VIP-Tisch im besten Beach Club oder Privatkoch mit Dinner bei Kerzenschein. Transfer zur Yacht zum Sonnenuntergang am Es Vedrà und danach Massage oder Beauty-Behandlung. Eine WhatsApp. Null Reibung.",
    cards: [
      {
        t: "Null Reibung",
        d: "Keine WhatsApp-Gruppen, keine endlosen Vergleiche. Du nennst uns Stil, Daten und Mood — wir bereiten mehrere echte, maßgeschneiderte Vorschläge vor.",
      },
      {
        t: "Hinter jedem Detail steht ein Team",
        d: "Wir kümmern uns um absolut alles: Villa sichern, Yacht organisieren, Auto bereitstellen, Tische reservieren und Menüs mit dem Koch gestalten. Alles fixiert, bevor du landest.",
      },
      {
        t: "Echtes Inventar",
        d: "Alles, was wir vorschlagen, ist für deine exakten Daten frei und von unserem Team geprüft. Keine Überraschungen bei der Ankunft.",
      },
    ],
  },
  packs: {
    label: "Pakete",
    title: "Wähle dein Traum-Level",
    sub: "Drei Wege, Ibiza zu erleben, ohne einen Finger zu rühren.",
    popular: "Am meisten gebucht",
    items: [
      {
        name: "Escape Essentials",
        price: "Ab 8.500 €",
        period: "pro Aufenthalt",
        description: "Ideal für 3–5 Nächte mit dem Kern des Ibiza-Luxus.",
        features: [
          "Boutique-Villa oder Premium-Suite",
          "Cabrio oder SUV",
          "Optionaler Halbtagescharter",
          "12h-Concierge + Priority WhatsApp",
          "Beach-Club-Reservierungen",
        ],
        cta: "Meinen Escape planen",
        popular: false,
      },
      {
        name: "Signature Week",
        price: "Ab 28.000 €",
        period: "pro Woche",
        description: "Das komplette Erlebnis: Top-Villa, Yacht und VIP-Rhythmus ohne Reibung.",
        features: [
          "Villa mit Pool und Meerblick",
          "Tages-Yachtcharter inklusive",
          "Premium-Flotte für den ganzen Aufenthalt",
          "Privatkoch, 2 Dinner",
          "24/7-Concierge + maßgeschneidertes Programm",
          "Garantierte VIP-Tische in den besten Beach Clubs",
        ],
        cta: "Signature buchen",
        popular: true,
      },
      {
        name: "Ultra Private",
        price: "Nach Maß",
        period: "auf Anfrage",
        description: "Für alle, die absolute Diskretion und makellose Umsetzung verlangen.",
        features: [
          "Ultra-Premium-Villa / Anwesen",
          "Mehrtägige Yacht + Crew",
          "Privatjet & optionale Security",
          "Eventplaner & volles Personal",
          "NDA & Datenschutzprotokoll",
          "Persönlicher Lead-Concierge",
        ],
        cta: "Mit Concierge sprechen",
        popular: false,
      },
    ],
  },
  process: {
    label: "So funktioniert es",
    title: "Von der Idee zum Programm in vier Schritten",
    steps: [
      {
        step: "01",
        title: "Express-Briefing",
        text: "Du nennst uns Daten, Gäste, Stil und Budget. Wir legen sofort los.",
      },
      {
        step: "02",
        title: "Wähle deinen Plan",
        text: "Du erhältst mehrere Vorschläge und wählst deinen Favoriten. Wir passen an, was nötig ist.",
      },
      {
        step: "03",
        title: "Alles fixiert",
        text: "Wir bestätigen jede Buchung und koordinieren das Team auf der Insel. Du erhältst dein fertiges Programm.",
      },
      {
        step: "04",
        title: "Live your dream",
        text: "Du landest und alles ist an seinem Platz. Lust auf etwas? Eine Nachricht. Wenn nicht, machst du nichts. Das ist der Plan.",
      },
    ],
    feelLabel: "So fühlt es sich an",
    quote:
      "\"Wir landeten und alles war bereits erledigt: Auto vor der Tür, perfekte Villa, Beach-Club-Reservierung und die Yacht für den nächsten Tag bestätigt. Ich musste keinen Finger rühren.\"",
    author: "— Stammkunde · Signature Week",
  },
  gallery: {
    label: "Inspiration",
    title: "So erlebst du Ibiza mit uns",
    sub: "Klippenvillen, Superyachten, Supersportwagen und VIP-Nächte. Ein Einblick in das Niveau, das dich erwartet.",
  },
  testis: {
    label: "Vertrauen unserer Kunden",
    title: "Geschichten makelloser Aufenthalte",
    items: [
      {
        quote:
          "Wir kamen freitags an und zwei Stunden später waren wir auf einem Tagescharter nach Formentera mit Koch an Bord. Null Reibung, purer Genuss.",
        name: "Sophie M.",
        role: "London · Signature Week",
      },
      {
        quote:
          "Wir brauchten absolute Diskretion für eine Gruppe von 12. Villa, G-Wagon, VIP-Tische und Security ohne einen einzigen Fehler.",
        name: "A. R.",
        role: "Dubai · Ultra Private",
      },
      {
        quote:
          "Ich dachte, Villa + Yacht selbst zu buchen wäre günstiger. Ich lag falsch: Der Wert liegt im Zugang und der gesparten Zeit.",
        name: "Marco & Elena",
        role: "Mailand · Escape Essentials",
      },
    ],
  },
  cta: {
    label: "Prioritätsanfrage",
    title: "Erzähl uns deinen Traum. Wir machen ihn wahr.",
    sub: "Fülle das Briefing aus und wir legen sofort los.",
    bullets: [
      "Sofortige Antwort",
      "Mehrere maßgeschneiderte Vorschläge",
      "Persönlicher WhatsApp-Concierge",
      "Absolute Privatsphäre",
    ],
    direct: "Lieber direkt über WhatsApp",
    formTitle: "Aufenthalts-Briefing",
    formSub: "60 Sekunden. Kein Spam. Nur dein Angebot.",
  },
  faq: {
    label: "FAQ",
    title: "Fragen vor der Buchung",
    sub: "Volle Transparenz: klarer Ablauf und klare Erwartungen.",
    items: [
      {
        q: "Warum sehe ich keinen Online-Katalog mit Preisen?",
        a: "Weil wir kein Portal sind. Wir arbeiten 100% persönlich: Du nennst uns Daten, Gruppe und Stil, und wir senden dir mehrere echte, verfügbare und geprüfte Vorschläge für deine Daten. Keine veralteten Kataloge, keine Zeitverschwendung.",
      },
      {
        q: "Habt ihr wirklich Zugang zu so vielen Villen und Booten?",
        a: "Ja. Direkter Zugang zu geprüftem Premium-Inventar und Netzwerk auf Ibiza und Formentera. Aus Datenschutzgründen ist nicht alles online, aber auf Briefing verfügbar.",
      },
      {
        q: "Was kostet eine Reise mit euch?",
        a: "Das hängt von Daten, Gruppengröße und Objektniveau ab. Als Referenz: Escapes ab ~8.500 €, Signature-Wochen ab ~28.000 € und Ultra Private nach Maß. Festes Angebot innerhalb von 24–48h.",
      },
      {
        q: "Arbeitet ihr nur in der Hochsaison?",
        a: "Wir sind das ganze Jahr aktiv, mit Spitze von Mai bis Oktober. Außerhalb der Saison gibt es Villen und Yachten zu attraktiveren Preisen und mit noch mehr Exklusivität.",
      },
      {
        q: "Kann ich nur eine Yacht oder ein Auto buchen?",
        a: "Ja. Der größte Mehrwert liegt zwar im Gesamtpaket, aber wir organisieren auch Einzelleistungen mit demselben Standard.",
      },
      {
        q: "Wie garantiert ihr die Qualität?",
        a: "Wir arbeiten nur mit geprüftem Inventar oder vertrauenswürdigen Partnern. Wenn etwas nicht passt, ersetzen wir es vor deiner Ankunft.",
      },
      {
        q: "In welchen Sprachen betreut ihr?",
        a: "Wir betreuen auf Spanisch, Englisch, Deutsch, Französisch und Italienisch. Ideal für internationale Gäste auf Ibiza.",
      },
      {
        q: "Wie läuft Zahlung und Stornierung?",
        a: "Anzahlung zur Sicherung, Restbetrag vor Ankunft. Klare schriftliche Bedingungen je nach Objekt und Anbieter. Volle Transparenz.",
      },
    ],
  },
  form: {
    name: "Vollständiger Name *",
    email: "E-Mail *",
    phone: "WhatsApp / Telefon",
    service: "Leistung *",
    guests: "Gäste",
    dates: "Ungefähre Daten",
    budget: "Ungefähres Budget",
    message: "Erzähl uns deinen Traum",
    namePh: "Dein Name",
    emailPh: "du@email.com",
    phonePh: "Deine Nummer mit Vorwahl",
    consent: "Ich habe die",
    consentLink: "Datenschutzerklärung gelesen und akzeptiere sie",
    datesPh: "z. B. 12.–19. Juli",
    msgPh: "Villenstil, Beach Clubs, besondere Feier...",
    submit: "Jetzt Angebot anfordern",
    submitting: "Wird gesendet...",
    hint: "Prioritäre Antwort · Unverbindlich · Absolute Privatsphäre",
    error: "Die Anfrage konnte nicht gesendet werden",
    serviceOpts: [
      { v: "Villas exclusivas", l: "Exklusive Villen" },
      { v: "Yates & charter", l: "Yachten & Charter" },
      { v: "Flota premium", l: "Supersportwagen-Flotte" },
      { v: "Experiencias VIP", l: "VIP-Erlebnisse" },
      { v: "Escape Essentials", l: "Paket Escape Essentials" },
      { v: "Signature Week", l: "Paket Signature Week" },
      { v: "Ultra Private", l: "Paket Ultra Private" },
      { v: "Todo a medida", l: "Komplett nach Maß" },
    ],
    budgetOpts: [
      { v: "<10k", l: "Unter 10.000 €" },
      { v: "10k-28k", l: "10.000 € – 28.000 €" },
      { v: "28k-60k", l: "28.000 € – 60.000 €" },
      { v: "60k-120k", l: "60.000 € – 120.000 €" },
      { v: "120k+", l: "Über 120.000 €" },
      { v: "flexible", l: "Flexibel / offen" },
    ],
  },
  footer: {
    desc: "Luxus-Concierge auf Ibiza: Villen, Yachten, Premium-Flotte und VIP-Erlebnisse — damit du nur noch genießen musst.",
    explore: "Entdecken",
    contact: "Kontakt",
    whats: "WhatsApp Concierge",
    rights: "Private Concierge",
  },
  chill: {
    label: "Chill-Modus: an",
    l1: "Du, in der Sonne.",
    l2: "Wir, am Telefon.",
    l3: "So funktioniert das.",
    cta: "Chill-Modus aktivieren",
  },
  cookies: {
    text: "Wir verwenden eigene Cookies und Cookies von Drittanbietern für Analyse und Werbung.",
    ok: "Akzeptieren",
    no: "Ablehnen",
  },
  whatsMsg: "Hallo, ich möchte mein Luxus-Erlebnis auf Ibiza planen.",
  gracias: {
    label: "Bestätigung",
    title: "Dein Traum ist auf dem Weg",
    text: "Wir haben deine Anfrage erhalten. Ein Concierge meldet sich sofort mit echten Optionen passend zu Daten, Budget und Stil.",
    steps: ["Wir prüfen die Verfügbarkeit", "Wir erstellen mehrere Vorschläge", "Wir melden uns per E-Mail/WhatsApp"],
    wa: "Per WhatsApp schreiben",
    waMsg: "Hallo, ich habe gerade meine Anfrage über die Website gesendet und möchte fortfahren.",
    back: "Zurück zur Startseite",
  },
};

const fr: typeof es = {
  nav: {
    services: "Services",
    packages: "Forfaits",
    process: "Processus",
    gallery: "Galerie",
    faq: "FAQ",
    whatsapp: "WhatsApp",
    book: "Réserver",
    request: "Demander une proposition",
  },
  hero: {
    label: "Private Concierge · Ibiza",
    h1a: "Votre seule mission : le mode chill.",
    h1b: "Nous nous occupons du reste.",
    sub: "Villas exclusives, yachts, supercars et accès VIP dans toute Ibiza. Vous fixez le plan ; nous le réalisons.",
    cta1: "Concevoir mon séjour",
    cta2: "Voir les services",
    priority: "Demande prioritaire",
    formTitle: "Réponse immédiate",
    online: "En ligne",
  },
  stats: [
    { value: "300+", label: "Villas exclusives" },
    { value: "600+", label: "Yachts & bateaux" },
    { value: "50+", label: "Supercars en flotte" },
    { value: "24/7", label: "Réponse immédiate" },
  ],
  access: {
    label: "Accès réel, pas un catalogue",
    title: "Tout le luxe d'Ibiza, à un message près.",
    p1: "Grâce à nous, vous accédez à plus de **300 villas**, plus de **600 yachts et bateaux** et un large catalogue de **voitures de luxe et supercars**. Vous ne faites rien : choisissez et profitez.",
    p2: "Vous ne trouverez pas de catalogue en ligne : chaque proposition est préparée à la main pour vous. C'est ça la conciergerie — pas un portail de réservation.",
  },
  proof: [
    { big: "300+", small: "villas de luxe dans toute Ibiza" },
    { big: "600+", small: "yachts, voiliers et bateaux disponibles" },
    { big: "50+", small: "supercars et SUV premium" },
    { big: "1", small: "concierge dédié 24/7" },
  ],
  services: {
    label: "Services de conciergerie",
    title: "Tout ce dont vous avez besoin. Rien de superflu.",
    sub: "Nous ne sommes pas un moteur de recherche. Nous sommes votre équipe sur l'île : nous négocions, réservons et résolvons en temps réel.",
    items: [
      {
        image: "/images/hero-dramatic.jpg",
        title: "Villas exclusives",
        subtitle: "Des propriétés avec âme et des vues de cinéma",
        description:
          "Villas en première ligne avec piscine à débordement, fincas de charme dans l'intérieur de l'île et propriétés design modernes face à la mer. À Cala Jondal, Es Cubells, San José, Santa Gertrudis et les meilleurs quartiers d'Ibiza. Avec personnel, chef et tout ce dont vous avez besoin.",
        highlights: ["Piscine à débordement & vue mer", "Chef privé & housekeeping", "Les meilleurs quartiers de l'île"],
      },
      {
        image: "/images/yacht-glamour.jpg",
        title: "Yachts & charter",
        subtitle: "La Méditerranée sur mesure",
        description:
          "Du day charter aux croisières de plusieurs jours à bord d'Azimut, Sunseeker, Sanlorenzo et plus. Équipage, catering et routes vers des criques secrètes.",
        highlights: ["Charter à la journée & multi-jours", "Équipage & catering gourmet", "Criques secrètes d'Ibiza & Formentera"],
      },
      {
        image: "/images/cars-fleet.jpg",
        title: "Flotte supercar",
        subtitle: "Lamborghini, Ferrari, Rolls-Royce et plus",
        description:
          "Un large catalogue de supercars, SUV de luxe et cabriolets : Lambo Huracán, Ferrari 488 Spider, G63 AMG, Rolls-Royce, SL AMG. Livraison à l'aéroport, à la villa ou au port.",
        highlights: ["Supercars & hypercars", "Livraison où vous voulez", "Multi-jours sans friction"],
      },
      {
        image: "/images/vip-night.jpg",
        title: "Expériences VIP",
        subtitle: "Accès total à l'Ibiza qu'on ne voit pas",
        description:
          "Tables VIP dans les meilleurs beach clubs et discothèques, chefs privés dans votre villa, services wellness, jets privés, sécurité, fêtes sur mesure. Si vous l'imaginez, nous le rendons possible.",
        highlights: ["Beach clubs & nightlife", "Jet privé & transferts", "Célébrations sur mesure"],
      },
    ],
  },
  promise: {
    label: "Notre promesse",
    title: "Vous ne faites rien. Et tout est parfait.",
    text: "Villa avec vue parfaite sur le coucher de soleil, réfrigérateur rempli et voiture avec chauffeur qui vous attend. Table VIP au meilleur beach club ou chef privé avec dîner aux chandelles. Transfert vers le yacht pour le coucher de soleil à Es Vedrà et, au retour, massage ou soin beauté. Un WhatsApp. Zéro friction.",
    cards: [
      {
        t: "Zéro friction",
        d: "Pas de groupes WhatsApp, pas de comparaisons sans fin. Dites-nous votre style, vos dates et votre mood — nous préparons plusieurs propositions réelles sur mesure.",
      },
      {
        t: "Une équipe derrière chaque détail",
        d: "Nous nous occupons d'absolument tout : bloquer la villa, organiser le yacht, préparer la voiture, réserver les tables et composer les menus avec le chef. Tout est réglé avant votre atterrissage.",
      },
      {
        t: "Inventaire réel",
        d: "Tout ce que nous proposons est libre pour vos dates exactes et vérifié par notre équipe. Aucune surprise à l'arrivée.",
      },
    ],
  },
  packs: {
    label: "Forfaits",
    title: "Choisissez votre niveau de rêve",
    sub: "Trois façons de vivre Ibiza sans lever le petit doigt.",
    popular: "Le plus demandé",
    items: [
      {
        name: "Escape Essentials",
        price: "Dès 8 500 €",
        period: "par séjour",
        description: "Idéal pour des escapades de 3–5 nuits avec l'essentiel du luxe ibicenco.",
        features: [
          "Villa boutique ou suite premium",
          "Cabriolet ou SUV",
          "Day charter demi-journée en option",
          "Concierge 12h + WhatsApp prioritaire",
          "Réservations beach club",
        ],
        cta: "Concevoir mon escape",
        popular: false,
      },
      {
        name: "Signature Week",
        price: "Dès 28 000 €",
        period: "par semaine",
        description: "L'expérience complète : villa haut de gamme, yacht et rythme VIP sans friction.",
        features: [
          "Villa avec piscine et vue mer",
          "Day charter en yacht inclus",
          "Flotte premium tout le séjour",
          "Chef privé, 2 dîners",
          "Concierge 24/7 + itinéraire sur mesure",
          "Tables VIP garanties dans les meilleurs beach clubs",
        ],
        cta: "Réserver Signature",
        popular: true,
      },
      {
        name: "Ultra Private",
        price: "Sur mesure",
        period: "sur briefing",
        description: "Pour ceux qui exigent une discrétion totale et une exécution impeccable.",
        features: [
          "Villa ultra-premium / domaine",
          "Yacht multi-jours + équipage",
          "Jet privé & sécurité en option",
          "Event planner & personnel complet",
          "NDA & protocole de confidentialité",
          "Lead concierge dédié",
        ],
        cta: "Parler à un concierge",
        popular: false,
      },
    ],
  },
  process: {
    label: "Comment ça marche",
    title: "De l'idée à l'itinéraire en quatre étapes",
    steps: [
      {
        step: "01",
        title: "Briefing express",
        text: "Dites-nous dates, invités, style et budget. Nous nous mettons en route immédiatement.",
      },
      {
        step: "02",
        title: "Choisissez votre plan",
        text: "Vous recevez plusieurs propositions et choisissez votre préférée. Nous ajustons ce qu'il faut.",
      },
      {
        step: "03",
        title: "Tout est réglé",
        text: "Nous confirmons chaque réservation et coordonnons l'équipe sur l'île. Vous recevez votre itinéraire finalisé.",
      },
      {
        step: "04",
        title: "Live your dream",
        text: "Vous atterrissez et tout est en place. Une envie ? Un message. Sinon, vous ne faites rien. C'est ça le plan.",
      },
    ],
    feelLabel: "Ce que ça fait",
    quote:
      "\"Nous avons atterri et tout était déjà réglé : voiture à la porte, villa parfaite, réservation au beach club et yacht confirmé pour le lendemain. Je n'ai pas levé le petit doigt.\"",
    author: "— Client fidèle · Signature Week",
  },
  gallery: {
    label: "Inspiration",
    title: "Voici Ibiza avec nous",
    sub: "Villas sur falaise, superyachts, supercars et nuits VIP. Un aperçu du niveau qui vous attend.",
  },
  testis: {
    label: "Confiance de nos clients",
    title: "Histoires de séjours impeccables",
    items: [
      {
        quote:
          "Arrivés un vendredi, deux heures plus tard nous étions en day charter vers Formentera avec chef à bord. Zéro friction, pur plaisir.",
        name: "Sophie M.",
        role: "Londres · Signature Week",
      },
      {
        quote:
          "Nous avions besoin d'une discrétion totale pour un groupe de 12. Villa, G-Wagon, tables VIP et sécurité sans le moindre faux pas.",
        name: "A. R.",
        role: "Dubaï · Ultra Private",
      },
      {
        quote:
          "Je pensais que réserver villa + yacht moi-même serait moins cher. J'avais tort : la valeur est dans l'accès et le temps gagné.",
        name: "Marco & Elena",
        role: "Milan · Escape Essentials",
      },
    ],
  },
  cta: {
    label: "Demande prioritaire",
    title: "Racontez-nous votre rêve. Nous le réalisons.",
    sub: "Complétez le briefing et nous nous mettons en route immédiatement.",
    bullets: [
      "Réponse immédiate",
      "Plusieurs propositions sur mesure",
      "Concierge WhatsApp dédié",
      "Confidentialité totale",
    ],
    direct: "Préférer WhatsApp directement",
    formTitle: "Briefing de séjour",
    formSub: "60 secondes. Pas de spam. Juste votre proposition.",
  },
  faq: {
    label: "FAQ",
    title: "Questions avant de réserver",
    sub: "Transparence totale : processus et attentes clairs.",
    items: [
      {
        q: "Pourquoi je ne vois pas de catalogue en ligne avec les prix ?",
        a: "Parce que nous ne sommes pas un portail. Nous travaillons de façon 100% personnalisée : vous nous indiquez dates, groupe et style, et nous vous envoyons plusieurs propositions réelles, disponibles et vérifiées pour vos dates. Pas de catalogues obsolètes, pas de temps perdu.",
      },
      {
        q: "Avez-vous vraiment accès à autant de villas et de bateaux ?",
        a: "Oui. Accès direct à un inventaire et un réseau premium vérifiés à Ibiza et Formentera. Tout n'est pas en ligne pour des raisons de confidentialité, mais tout est disponible sur briefing.",
      },
      {
        q: "Combien coûte un voyage avec vous ?",
        a: "Cela dépend des dates, de la taille du groupe et du niveau de la propriété. À titre de référence : escapades dès ~8 500 €, semaines signature dès ~28 000 € et ultra private sur mesure. Devis fermé sous 24–48h.",
      },
      {
        q: "Travaillez-vous uniquement en haute saison ?",
        a: "Nous opérons toute l'année, avec un pic de mai à octobre. Hors saison, villas et yachts offrent de meilleurs tarifs et encore plus d'exclusivité.",
      },
      {
        q: "Puis-je réserver seulement un yacht ou une voiture ?",
        a: "Oui. Même si la valeur maximale est dans le forfait intégré, nous gérons aussi des services individuels avec le même standard.",
      },
      {
        q: "Comment garantissez-vous la qualité ?",
        a: "Nous travaillons uniquement avec un inventaire inspecté ou des partenaires de confiance. Si quelque chose ne convient pas, nous le remplaçons avant votre arrivée.",
      },
      {
        q: "Dans quelles langues travaillez-vous ?",
        a: "Nous vous accompagnons en espagnol, anglais, allemand, français et italien. Idéal pour les clients internationaux arrivant à Ibiza.",
      },
      {
        q: "Quel est le processus de paiement et d'annulation ?",
        a: "Acompte pour bloquer, solde avant l'arrivée. Conditions claires par écrit selon la propriété et le prestataire. Transparence totale.",
      },
    ],
  },
  form: {
    name: "Nom complet *",
    email: "Email *",
    phone: "WhatsApp / Téléphone",
    service: "Service *",
    guests: "Invités",
    dates: "Dates approximatives",
    budget: "Budget approximatif",
    message: "Racontez-nous votre rêve",
    namePh: "Votre nom",
    emailPh: "vous@email.com",
    phonePh: "Votre numéro avec indicatif",
    consent: "J'ai lu et j'accepte la",
    consentLink: "politique de confidentialité",
    datesPh: "Ex. 12–19 juillet",
    msgPh: "Style de villa, beach clubs, célébration spéciale...",
    submit: "Demander ma proposition",
    submitting: "Envoi...",
    hint: "Réponse prioritaire · Sans engagement · Confidentialité totale",
    error: "La demande n'a pas pu être envoyée",
    serviceOpts: [
      { v: "Villas exclusivas", l: "Villas exclusives" },
      { v: "Yates & charter", l: "Yachts & charter" },
      { v: "Flota premium", l: "Flotte supercar" },
      { v: "Experiencias VIP", l: "Expériences VIP" },
      { v: "Escape Essentials", l: "Forfait Escape Essentials" },
      { v: "Signature Week", l: "Forfait Signature Week" },
      { v: "Ultra Private", l: "Forfait Ultra Private" },
      { v: "Todo a medida", l: "Entièrement sur mesure" },
    ],
    budgetOpts: [
      { v: "<10k", l: "Moins de 10 000 €" },
      { v: "10k-28k", l: "10 000 € – 28 000 €" },
      { v: "28k-60k", l: "28 000 € – 60 000 €" },
      { v: "60k-120k", l: "60 000 € – 120 000 €" },
      { v: "120k+", l: "Plus de 120 000 €" },
      { v: "flexible", l: "Flexible / à définir" },
    ],
  },
  footer: {
    desc: "Conciergerie de luxe à Ibiza : villas, yachts, flotte premium et expériences VIP conçues pour que vous n'ayez qu'à profiter.",
    explore: "Explorer",
    contact: "Contact",
    whats: "WhatsApp Concierge",
    rights: "Private Concierge",
  },
  chill: {
    label: "Mode chill : activé",
    l1: "Vous, au soleil.",
    l2: "Nous, au téléphone.",
    l3: "C'est comme ça que ça marche.",
    cta: "Activer le mode chill",
  },
  cookies: {
    text: "Nous utilisons des cookies propres et tiers à des fins d'analyse et de publicité.",
    ok: "Accepter",
    no: "Refuser",
  },
  whatsMsg: "Bonjour, je souhaite concevoir mon expérience de luxe à Ibiza.",
  gracias: {
    label: "Confirmation",
    title: "Votre rêve est en route",
    text: "Nous avons bien reçu votre demande. Un concierge vous contactera immédiatement avec de vraies options selon vos dates, budget et style.",
    steps: ["Nous vérifions les disponibilités", "Nous préparons plusieurs propositions", "Nous vous écrivons par email/WhatsApp"],
    wa: "Écrire sur WhatsApp",
    waMsg: "Bonjour, je viens d'envoyer ma demande depuis le site et je souhaite avancer.",
    back: "Retour à l'accueil",
  },
};

export const dicts: Record<Lang, typeof es> = { es, en, de, fr };
export type Dict = typeof es;

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}>({ lang: "es", setLang: () => {}, t: es });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("ild-lang") as Lang | null;
    if (saved && dicts[saved]) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("ild-lang", l);
    document.documentElement.lang = l;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dicts[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/** Renders **bold** markers as gold strong tags */
export function B({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-[#d4b06a]">
            {p}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}
