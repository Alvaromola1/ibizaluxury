export const brand = {
  name: "Ibiza Luxury Dreams",
  tagline: "Tú de chill. Nosotros de todo lo demás.",
  phone: "+34 691 785 960",
  whatsapp: "34691785960",
  email: "info@ibizaluxurydreams.com",
  location: "Ibiza · Balearic Islands",
  instagram: "https://instagram.com/ibizaluxurydreams",
};

export const noCatalog = {
  eyebrow: "Nuestro modelo · 100% personal",
  headline: "No hay catálogo online. Y por eso te va a gustar.",
  text: "Trabajamos 100% personalizado. No te mostramos las 300 villas y 600 barcos para que pierdas horas comparando. Nos dices fechas y estilo, y te enviamos SOLO lo que está realmente libre y encaja contigo. Privado, hecho a tu medida y con disponibilidad real.",
  points: [
    {
      icon: "✓",
      t: "Disponibilidad real, confirmada",
      d: "Todo lo que recibes está libre para tus fechas exactas. Nada de opciones que ya no están.",
    },
    {
      icon: "◆",
      t: "Acceso off-market",
      d: "Las mejores villas y yates no se publican en internet. Por eso otros no los tienen. Nosotros sí.",
    },
    {
      icon: "✦",
      t: "Hecho a tu medida, no un menú infinito",
      d: "Varias propuestas que encajan con tu grupo, estilo y presupuesto. Decisiones fáciles, cero fatiga.",
    },
    {
      icon: "◐",
      t: "Privacidad para propietarios y para ti",
      d: "Discreción total. Lo mejor de Ibiza se gestiona en privado, no en una web abierta.",
    },
  ],
  compare: [
    {
      aspect: "Disponibilidad",
      others: "Anuncios que a veces ya están reservados",
      us: "Solo villas y barcos realmente libres para tus fechas",
    },
    {
      aspect: "Inventario top",
      others: "Lo que aparece buscando en Google",
      us: "Off-market: lo mejor no se publica",
    },
    {
      aspect: "Lo que recibes",
      others: "200 resultados abrumadores",
      us: "Varias propuestas a medida que encajan contigo",
    },
    {
      aspect: "Privacidad",
      others: "La casa expuesta en internet",
      us: "Discreción total, propietarios off-market",
    },
    {
      aspect: "Tu esfuerzo",
      others: "Comparar, llamar, negociar, rezar",
      us: "Nada. Tú de chill.",
    },
  ],
};

export const inventory = [
  { value: "300+", label: "Villas privadas", detail: "De boutique a cliffside compounds" },
  { value: "600+", label: "Barcos & yates", detail: "Day boats a superyates con crew" },
  { value: "150+", label: "Coches de lujo", detail: "Supercars, G-Wagon, Cabrios, SUV" },
  { value: "100%", label: "Hacemos que pase", detail: "Chef, mesas, jet, wellness, security" },
];

export const services = [
  {
    id: "villas",
    title: "300+ villas privadas",
    subtitle: "Acceso real, no catálogo genérico",
    description:
      "Desde joyas escondidas en Es Cubells hasta compounds con staff completo en Cala Jondal. Todas verificadas y con disponibilidad real.",
    image: "/images/hero-dramatic.svg",
    highlights: ["Infinity pool & sea views", "Private chef & housekeeping", "Discreet high-end locations"],
  },
  {
    id: "yachts",
    title: "600+ barcos & yates",
    subtitle: "De day charter a superyate",
    description:
      "De Antonio, Axopar, Sunseeker, Sanlorenzo, Azimut. Tripulación, catering premium, rutas a calas que solo conocemos nosotros.",
    image: "/images/yacht-glamour.svg",
    highlights: ["Day & multi-day charters", "Crew & gourmet catering", "Formentera + calas secretas"],
  },
  {
    id: "cars",
    title: "Flota de superdeportivos",
    subtitle: "G63, Urus, Ferrari, McLaren...",
    description:
      "No hablamos de 10 coches. Catálogo amplio de supercars, cabrios, SUV premium. Entrega en aeropuerto, villa o puerto en 90 min.",
    image: "/images/cars-fleet.svg",
    highlights: ["G63, Urus, Ferrari, SL AMG", "Airport & villa delivery 90′", "Multi-day flexible"],
  },
  {
    id: "experiences",
    title: "Todo lo que imagines",
    subtitle: "El concepto: tú no haces nada",
    description:
      "Mesas VIP en los mejores beach clubs, chefs privados en tu villa, wellness al amanecer, jets privados, seguridad, fiestas a medida. Si lo imaginas, lo hacemos pasar.",
    image: "/images/vip-night.svg",
    highlights: ["Mesas VIP & beach clubs", "Chefs privados & fiestas", "Jet, wellness, security"],
  },
];

export const chillBullets = [
  {
    icon: "☾",
    title: "Tú no organizas",
    text: "No grupos de WhatsApp, no comparativas infinitas. Nos dices estilo, fechas y mood. Te preparamos varias propuestas reales a medida.",
  },
  {
    icon: "✦",
    title: "Nosotros orquestamos",
    text: "Bloqueamos villa, yate, coche, reservas VIP, staff, transfers, chef y todo lo que necesites, en el momento que lo necesites. Un solo interlocutor.",
  },
  {
    icon: "◐",
    title: "Tú solo disfrutas",
    text: "Llegas, te tumbas, te subes al barco, cenas como Dios. Si surge algo, un mensaje. Si no, no haces nada. Ese es el plan.",
  },
];

export const packages = [
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
      "Mesas garantizadas en hotspots",
    ],
    cta: "Reservar Signature",
    popular: true,
  },
  {
    name: "Ultra Private",
    price: "A medida",
    period: "bajo briefing",
    description: "Para HNWIs, celebridades y grupos que exigen discreción total y ejecución impecable.",
    features: [
      "Villa ultra-premium / compound",
      "Yate multi-día + tripulación",
      "Jet privado & security opcional",
      "Event planner & full staff",
      "NDA & privacy protocol",
      "Dedicated lead concierge",
    ],
    cta: "Hablar con concierge",
    popular: false,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Briefing express",
    text: "Estilo, fechas, invitados, presupuesto. Te respondemos de inmediato con varias propuestas reales y con disponibilidad.",
  },
  {
    step: "02",
    title: "Propuesta a medida",
    text: "Varias propuestas premium, no 50 links. Villa + barco + coche + experiencias. Precio cerrado, sin sorpresas.",
  },
  {
    step: "03",
    title: "Confirmación & setup",
    text: "Bloqueamos todo. Organizamos staff, transfers, reservas VIP, chefs, extras. Todo listo antes de que aterrices.",
  },
  {
    step: "04",
    title: "Chill total",
    text: "Tu única misión es disfrutar. Si te apetece algo extra, nos escribes. Si no, sigues de chill mientras todo se ejecuta alrededor.",
  },
];

export const testimonials = [
  {
    quote:
      "Llegamos un viernes y a las dos horas estábamos en un day charter a Formentera con chef a bordo. Cero fricción, puro disfrute.",
    name: "Sophie M.",
    role: "Londres · Signature Week",
    rating: 5,
  },
  {
    quote:
      "Necesitábamos discreción total para un grupo de 12. Villa, G-Wagon, mesas en Ushuaïa y security sin un solo fallo.",
    name: "A. R.",
    role: "Dubai · Ultra Private",
    rating: 5,
  },
  {
    quote:
      "Pensaba que alquilar villa + yate por mi cuenta sería más barato. Me equivoqué: el valor está en el acceso y el tiempo ahorrado.",
    name: "Marco & Elena",
    role: "Milán · Escape Essentials",
    rating: 5,
  },
];

export const stats = [
  { value: "300+", label: "Villas verificadas" },
  { value: "600+", label: "Barcos & yates" },
  { value: "150+", label: "Superdeportivos & premium" },
  { value: "Inmediata", label: "Primera respuesta" },
];

export const faq = [
  {
    q: "¿Cuánto cuesta un viaje con vosotros?",
    a: "Depende de fechas, tamaño del grupo y nivel de propiedad. Como referencia: escapes desde ~8.500€, semanas signature desde ~28.000€ y ultra private a medida. Te damos presupuesto cerrado en 24–48h.",
  },
  {
    q: "¿Tenéis realmente 300+ villas y 600+ barcos?",
    a: "Sí. Acceso directo a inventario propio y red premium verificada en Ibiza y Formentera. No todo está online por privacidad, pero sí disponible bajo briefing.",
  },
  {
    q: "¿Por qué no tengo un catálogo online para mirar?",
    a: "Porque trabajamos 100% personalizado y porque la mejor parte del inventario es off-market: sus propietarios no lo publican en internet. Si lo pusiéramos todo online, perderías horas comparando opciones que igual no están libres para tus fechas. En su lugar, nos dices fechas y estilo y te mandamos solo lo real y disponible. Más exclusividad, menos ruido.",
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
    q: "¿Qué significa 'tú no haces nada'?",
    a: "Que tu único trabajo es disfrutar. Nosotros nos encargamos de reservas, coordinar staff, horarios, cambios de plan, mensajes, transfers y cualquier detalle que necesites, cuando lo necesites. Un WhatsApp y resuelto.",
  },
];

export const gallery = [
  { src: "/images/hero-dramatic.svg", alt: "Villa cliffside con infinity pool al atardecer", label: "300+ Villas" },
  { src: "/images/yacht-glamour.svg", alt: "Superyate en aguas turquesas", label: "600+ Yates" },
  { src: "/images/cars-fleet.svg", alt: "Flota de supercars G63, Urus, Ferrari", label: "Flota Supercars" },
  { src: "/images/champagne-yacht.svg", alt: "Champagne en yate frente a Ibiza", label: "Champagne @ Sea" },
  { src: "/images/chef-villa.svg", alt: "Private chef en villa de lujo", label: "Private Chef" },
  { src: "/images/vip-night.svg", alt: "Experiencia VIP beach club al atardecer", label: "VIP Access" },
  { src: "/images/chill-concept.svg", alt: "Persona de chill en piscina infinity", label: "Chill Concept" },
  { src: "/images/fleet-showroom.svg", alt: "Showroom supercars Lamborghini", label: "Luxe Fleet" },
  { src: "/images/yacht-sea.svg", alt: "Yate navegando sobre aguas cristalinas", label: "Open Sea" },
];

export const concepts = {
  headline: "Tu única misión es disfrutar.",
  subheadline:
    "Del resto nos encargamos nosotros. Llegas, te relajas y disfrutas; nosotros nos ocupamos de cada detalle de tu estancia en Ibiza. Sin que muevas un solo dedo.",
  conceptLine: "Del resto nos encargamos nosotros.",
};
