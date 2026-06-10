export const CLINIC_NAME = "Sonrisa Perfecta";
export const CLINIC_FULL_NAME = "Clínica Dental Sonrisa Perfecta";

export const CONTACT = {
  phone: "67359725",
  phoneTel: "+59167359725",
  whatsapp: "67359725",
  whatsappLink: "https://wa.me/59167359725",
  email: "citas@sonrisaperfecta.bo",
  address: "Av. Equipetrol Norte, Santa Cruz",
  city: "Santa Cruz, Bolivia",
  maps: "https://maps.google.com/?q=Equipetrol+Norte+Santa+Cruz+Bolivia",
  hours: [
    { day: "Lunes – Viernes", time: "8:00 – 17:00" },
    { day: "Sábado", time: "9:00 – 13:00" },
    { day: "Domingo", time: "Cerrado" },
  ],
  hoursShort: "Lun – Vie · 8:00 – 17:00",
  hoursSat: "Sábado · 9:00 – 13:00",
  emergency: "Emergencias: escríbele a Sara por el chat. Disponible las 24 horas.",
};

export const SERVICES = [
  {
    number: "01",
    name: "Limpieza & Blanqueamiento",
    tagline: "Elimina el sarro. Recupera el brillo.",
    description:
      "La limpieza profesional con ultrasonido elimina el sarro y las manchas acumuladas que el cepillado diario no puede alcanzar. Incluye pulido y aplicación de flúor. El blanqueamiento en clínica con tecnología LED logra hasta 8 tonos más claros en una sola sesión de 90 minutos, de forma segura y sin dañar el esmalte.",
    details: [
      "Limpieza ultrasónica profunda y manual",
      "Pulido con pasta profiláctica",
      "Aplicación de barniz de flúor",
      "Blanqueamiento LED de última generación",
      "Resultado visible desde la primera sesión",
    ],
    duration: "60 – 90 min",
    frequency: "Cada 6 meses",
  },
  {
    number: "02",
    name: "Ortodoncia & Alineadores",
    tagline: "Tu sonrisa alineada, a tu ritmo.",
    description:
      "Ofrecemos soluciones para todas las edades y presupuestos: brackets metálicos convencionales, brackets cerámicos estéticos, y alineadores transparentes tipo Invisalign. Realizamos un diagnóstico digital completo con escáner 3D intraoral antes de comenzar cualquier tratamiento para que puedas ver el resultado antes de iniciarlo.",
    details: [
      "Estudio diagnóstico con escáner 3D intraoral",
      "Simulación digital del resultado final",
      "Brackets metálicos, cerámicos o de zafiro",
      "Alineadores transparentes removibles",
      "Control mensual incluido en el tratamiento",
    ],
    duration: "12 – 24 meses",
    frequency: "Controles cada 4 – 6 semanas",
  },
  {
    number: "03",
    name: "Implantes Dentales",
    tagline: "El reemplazo permanente. Para toda la vida.",
    description:
      "Los implantes dentales de titanio son la solución más avanzada para reemplazar dientes perdidos. Se integran al hueso de forma natural, funcionan exactamente como dientes naturales y duran toda la vida con el cuidado adecuado. Trabajamos con implantes Straumann, la marca más reconocida a nivel mundial, con garantía de 10 años.",
    details: [
      "Implantes Straumann de titanio puro",
      "Tomografía 3D pre-quirúrgica incluida",
      "Cirugía bajo anestesia local sin dolor",
      "Corona de porcelana o circonio personalizada",
      "Garantía de 10 años por escrito",
    ],
    duration: "3 – 6 meses (proceso completo)",
    frequency: "Control anual",
  },
  {
    number: "04",
    name: "Endodoncia",
    tagline: "Salvamos tu diente. Eliminamos el dolor.",
    description:
      "La endodoncia moderna no duele. Utilizamos técnicas rotarias de níquel-titanio y anestesia de alta efectividad para que el tratamiento de conductos sea completamente indoloro. Nuestro objetivo es siempre conservar tu diente natural, evitando extracciones innecesarias que a largo plazo resultan más costosas.",
    details: [
      "Anestesia avanzada de alta efectividad",
      "Instrumental rotario de níquel-titanio",
      "Localización electrónica del ápice",
      "Irrigación ultrasónica pasiva",
      "Radiografías digitales de baja radiación",
    ],
    duration: "60 – 90 min por sesión",
    frequency: "1 – 2 sesiones según complejidad",
  },
  {
    number: "05",
    name: "Odontopediatría",
    tagline: "Para los más pequeños. Con el mayor cuidado.",
    description:
      "Nuestro consultorio infantil fue diseñado específicamente para que los niños lleguen con curiosidad y salgan con confianza. Utilizamos técnicas de manejo conductual y comunicación adaptada a cada edad para eliminar el miedo al dentista desde la primera visita. Tratamos desde los primeros dientes de leche hasta la adolescencia.",
    details: [
      "Ambiente diseñado para niños",
      "Técnicas sin aguja para procedimientos menores",
      "Sellantes dentales preventivos",
      "Fluorización profesional",
      "Guías de hábitos y alimentación para padres",
    ],
    duration: "30 – 60 min",
    frequency: "Control cada 4 – 6 meses",
  },
  {
    number: "06",
    name: "Emergencias Dentales",
    tagline: "Cuando el dolor no puede esperar.",
    description:
      "El dolor dental agudo, las fracturas, los abscesos y los traumatismos requieren atención inmediata. Reservamos turnos de emergencia todos los días para atenderte el mismo día. Fuera del horario de atención, Sara, nuestra asistente virtual, está disponible las 24 horas para orientarte y coordinar tu cita urgente.",
    details: [
      "Turnos de emergencia disponibles mismo día",
      "Atención de dolor agudo y abscesos",
      "Tratamiento de fracturas y traumatismos",
      "Recementado de coronas y puentes",
      "Orientación por chat con Sara, disponible 24/7",
    ],
    duration: "Según el caso",
    frequency: "Cuando lo necesites",
  },
];

export const STATS = [
  { value: "98%", label: "de pacientes recomiendan la clínica" },
  { value: "15+", label: "años de experiencia en Bolivia" },
  { value: "3.000+", label: "sonrisas transformadas" },
  { value: "6", label: "especialidades bajo un mismo techo" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Vine con miedo al dentista. Salí con una sonrisa nueva y sin ansiedad. El equipo es extraordinariamente profesional y humano.",
    author: "María J.",
    location: "La Paz",
    service: "Blanqueamiento e Implante",
  },
  {
    quote:
      "Llevaba años pensando en los implantes. El proceso fue mucho más sencillo de lo que imaginaba. El resultado es perfecto, nadie nota que no es mi diente natural.",
    author: "Carlos M.",
    location: "Cochabamba",
    service: "Implante dental",
  },
  {
    quote:
      "La atención para mis hijos es impecable. Por primera vez van al dentista sin llorar. Eso lo dice todo.",
    author: "Andrea V.",
    location: "Santa Cruz",
    service: "Odontopediatría",
  },
  {
    quote:
      "Dos años de ortodoncia con alineadores y el resultado superó mis expectativas. El seguimiento del Dr. Morales fue impecable en cada etapa.",
    author: "Rodrigo P.",
    location: "La Paz",
    service: "Ortodoncia con alineadores",
  },
  {
    quote:
      "Tenía un dolor insoportable un sábado por la noche. Le escribí a Sara por el chat y al día siguiente me atendieron a primera hora. Salvadores.",
    author: "Lucía F.",
    location: "El Alto",
    service: "Emergencia dental",
  },
];

export const TEAM = [
  {
    name: "Dra. Valentina Rojas",
    role: "Directora Clínica · Implantología",
    bio: "Odontóloga con especialización en Implantología Oral por la Universidad de Buenos Aires. Más de 15 años ejerciendo en Bolivia, con más de 1.200 implantes colocados. Certificada por el ITI (International Team for Implantology) con sede en Suiza.",
    credentials: ["U. de Buenos Aires · Especialista en Implantología", "ITI Fellow · Suiza", "Colegio de Odontólogos de La Paz"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Dr. Sebastián Morales",
    role: "Ortodoncista",
    bio: "Especialista en Ortodoncia por la Universidad Mayor de San Andrés, con formación adicional en Barcelona. Pionero en el uso de alineadores transparentes en Bolivia. Certified Invisalign Provider con más de 300 casos tratados.",
    credentials: ["UMSA · Especialista en Ortodoncia", "Certified Invisalign Provider", "SIDO · Sociedad Iberoamericana de Ortodoncia"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Dra. Camila Quispe",
    role: "Odontopediatra",
    bio: "Especialista en Odontología Infantil por la Pontificia Universidad Católica de Chile. Experta en manejo conductual del miedo dental y en odontología mínimamente invasiva para niños. Referente en Bolivia en la filosofía CAMBRA de cariología.",
    credentials: ["PUC Chile · Especialista en Odontopediatría", "Certificación CAMBRA · Cariología", "Miembro de la ALOP"],
    image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Dr. Marcos Torrez",
    role: "Endodoncista",
    bio: "Especialista en Endodoncia por la Universidad Autónoma Gabriel René Moreno. Experto en tratamientos de conductos de una sola visita y en retratamientos complejos. Utiliza microscopio dental para procedimientos de alta precisión.",
    credentials: ["UAGRM · Especialista en Endodoncia", "Endodoncia microscópica avanzada", "Miembro de la SEOC"],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=85",
  },
];

export const FAQ = [
  {
    question: "¿Duele el tratamiento de conductos?",
    answer:
      "No. Con las técnicas y anestesias actuales, la endodoncia es un procedimiento completamente indoloro. La mayoría de nuestros pacientes quedan sorprendidos de lo sencillo que resultó. El dolor que asociamos a la muela es el de la infección previa, no el del tratamiento.",
  },
  {
    question: "¿Cuánto dura un implante dental?",
    answer:
      "Un implante bien colocado y bien cuidado dura toda la vida. La corona (la parte visible) puede necesitar reemplazo después de 15 a 20 años. Los implantes Straumann que utilizamos tienen aval científico de más de 50 años de investigación y una tasa de éxito del 97%.",
  },
  {
    question: "¿Desde qué edad pueden venir los niños?",
    answer:
      "Recomendamos la primera visita al dentista cuando aparece el primer diente de leche, alrededor de los 6 meses a 1 año. Esta primera visita es informativa y ayuda a los padres a establecer hábitos correctos desde el inicio.",
  },
  {
    question: "¿Aceptan seguros médicos o cajas de salud?",
    answer:
      "Actualmente trabajamos con pago directo. Ofrecemos planes de financiamiento sin interés para tratamientos de mayor inversión como implantes y ortodoncia. Consulta con nuestro equipo las opciones disponibles según tu tratamiento.",
  },
  {
    question: "¿Qué diferencia al blanqueamiento en clínica del que se hace en casa?",
    answer:
      "El blanqueamiento en clínica utiliza concentraciones de peróxido más altas bajo supervisión profesional, con resultados de 6 a 8 tonos en 90 minutos. Los kits de casa requieren semanas y logran 2 a 4 tonos. Ambos son seguros, pero los resultados y velocidad son muy diferentes.",
  },
  {
    question: "¿Puedo agendar una consulta de evaluación antes de decidirme?",
    answer:
      "Sí, y te lo recomendamos. La consulta de evaluación incluye revisión clínica, orientación sobre las opciones de tratamiento y presupuesto sin compromiso. Es gratuita para la mayoría de los tratamientos. Agenda con Sara, nuestra asistente virtual.",
  },
];

export const VALUES = [
  {
    number: "01",
    title: "Sin dolor",
    description:
      "Usamos las técnicas de anestesia más avanzadas disponibles. Ningún procedimiento tiene por qué doler.",
  },
  {
    number: "02",
    title: "Sin sorpresas",
    description:
      "Antes de empezar cualquier tratamiento te explicamos el plan completo, los tiempos y el costo total.",
  },
  {
    number: "03",
    title: "Sin apuros",
    description:
      "Cada cita está diseñada con el tiempo necesario. Nunca sentirás que eres uno más en una línea de producción.",
  },
];

export const NAV_LINKS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const COPY = {
  heroTagline: "Clínica dental de especialidades · La Paz, Bolivia",
  heroH1Line1: "Tu sonrisa,",
  heroH1Line2: "rediseñada.",
  heroCtaPrimary: "Agendar cita",
  heroCtaFinal: "Agendar ahora",
  chatbotBadge: "Disponible 24/7",
  chatbotHeadline: "Agenda tu cita en menos de 2 minutos",
  chatbotDesc:
    "Sara, nuestra asistente virtual, verifica disponibilidad en tiempo real y agenda directamente en nuestro calendario. Sin esperas, sin llamadas.",
  chatbotLabel: "Asistente virtual",
  testimonialsLabel: "Lo que dicen nuestros pacientes",
  ctaFinalHeadline: "Tu próxima cita,\na un mensaje de distancia.",
  servicesSubtitleLabel: "Especialidades",
  servicesH1Line1: "Lo que hacemos",
  servicesH1Line2: "mejor.",
  servicesCtaLink: "Agendar consulta de evaluación →",
  servicesCtaBoxTitle: "¿No estás seguro qué servicio necesitas?",
  servicesCtaBoxDesc:
    "Agenda una consulta de evaluación gratuita. Te examinamos y te orientamos sobre el tratamiento más adecuado para ti.",
  servicesCtaBoxCta: "Consulta gratis",
  nosotrosLabel: "La clínica",
  nosotrosH1Line1: "Medicina dental",
  nosotrosH1Line2: "con propósito.",
  nosotrosPhilosophyTitle: "Nuestra filosofía",
  nosotrosPhilosophyText:
    "Creemos que el cuidado dental va más allá de tratar dientes. Cada paciente que cruza nuestra puerta merece un diagnóstico personalizado, un plan de tratamiento honesto y un ambiente donde el miedo al dentista desaparezca. No buscamos hacer el mayor número de procedimientos: buscamos hacer los correctos.",
  nosotrosCommitmentTitle: "Nuestro compromiso",
  nosotrosCommitmentText:
    "Trabajamos exclusivamente con materiales de grado internacional y tecnología de última generación — desde el escáner 3D intraoral hasta los implantes Straumann. Nos capacitamos continuamente en Buenos Aires, Santiago, Madrid y São Paulo porque la odontología avanza rápido, y nuestros pacientes en Bolivia merecen acceso a lo mejor.",
  nosotrosTeamTitle: "El equipo",
  nosotrosValuesTitle: "Cómo trabajamos",
  nosotrosCredentialsTitle: "Acreditaciones",
  nosotrosCredentials: [
    "Registro ante el Ministerio de Salud de Bolivia · Res. 0892",
    "Miembros del Colegio de Odontólogos de La Paz",
    "ITI Fellow — International Team for Implantology",
    "Certified Invisalign Provider",
    "SIDO — Sociedad Iberoamericana de Ortodoncia",
    "Formación continua: Buenos Aires · Santiago · Madrid",
  ],
  nosotrosCta: "Conocernos en persona",
  contactLabel: "Contacto",
  contactH1: "Hablemos.",
  contactAddressLabel: "Dirección",
  contactPhoneLabel: "Teléfono",
  contactWhatsappLabel: "WhatsApp",
  contactEmailLabel: "Email",
  contactHoursLabel: "Horario de atención",
  contactEmergencyLabel: "Emergencias",
  contactChatLabel: "Agenda con Sara",
  contactChatDesc:
    "Nuestra asistente virtual verifica disponibilidad y confirma tu cita al instante, sin esperas ni llamadas telefónicas.",
  footerCopyright: "Clínica Dental Sonrisa Perfecta · Todos los derechos reservados",
  faqTitle: "Preguntas frecuentes",
  faqSubtitle: "Lo que más nos preguntan",
};

export const CHATBOT_STRINGS = {
  greeting:
    "Hola, soy Sara 👋 Soy la asistente virtual de Sonrisa Perfecta. Estoy aquí para ayudarte a agendar tu cita. ¿Qué servicio te interesa o en qué puedo ayudarte?",
  mockReply:
    "Perfecto, gracias. Para confirmar tu cita necesito tu nombre completo y un número de teléfono de contacto. ¿Me los puedes proporcionar?",
  errorReply: "Por el momento no puedo procesar tu solicitud. Por favor intenta nuevamente en unos minutos.",
  headerLabel: "Sara — Asistente virtual",
  inputPlaceholder: "Escribe tu mensaje...",
  sendLabel: "Enviar",
};
