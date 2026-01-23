import type { Translations } from "./schema";

const es: Translations = {
  header: {
    browseTaskers: "Explorar Especialistas",
    howItWorks: "Cómo Funciona",
    becomeTasker: "Ser Especialista",
    signIn: "Iniciar Sesión",
    signUp: "Registrarse",
  },

  hero: {
    title1: "Encuentra especialistas de confianza",
    title2: "para cada tarea del hogar",
    subtitle:
      "Conecta con especialistas verificados en plomería, jardinería, cuidado infantil y más",
    searchPlaceholder: "Buscar servicios o especialistas...",
  },

  trades: {
    title: "Servicios Populares",
    plumbing: "Plomería",
    electrical: "Electricidad",
    gardening: "Jardinería",
    carpentry: "Carpintería",
    childcare: "Cuidado Infantil",
    eldercare: "Cuidado de Adultos Mayores",
    cleaning: "Limpieza",
    painting: "Pintura",
  },

  stats: {
    taskers: "Especialistas Verificados",
    completed: "Tareas Completadas",
    rating: "Calificación Promedio",
  },

  howItWorks: {
    title: "Cómo Funciona",
    step1Title: "1. Buscar y Explorar",
    step1Desc:
      "Encuentra el/la especialista perfecto/a para tus necesidades navegando por categorías o buscando directamente",
    step2Title: "2. Ver Perfiles",
    step2Desc:
      "Revisa calificaciones, reseñas y experiencia para tomar una decisión informada",
    step3Title: "3. Contactar",
    step3Desc:
      "Contacta a el/la especialista directamente y agenda el servicio a tu conveniencia",
  },

  browse: {
    allTaskers: "Todos los especialistas",
    searchResults: "Resultados de Búsqueda",
    clearFilter: "Limpiar filtro",
    verified: "Verificado",
    perHour: "por hora",
    experience: "experiencia",
    noResults: "No se encontraron especialistas",
    noResultsDesc: "Intenta ajustar tu búsqueda o filtros",
    viewAll: "Ver todos",
  },

  profile: {
    backToResults: "Volver a resultados",
    verifiedPro: "Especialista Verificado/a",
    reviews: "reseñas",
    hourlyRate: "Tarifa por Hora",
    availability: "Disponibilidad",
    about: "Acerca de",
    skills: "Habilidades y Servicios",
    callNow: "Llamar Ahora",
    contacts: "Contactos",
    sendMessage: "Enviar Mensaje",
    recentReviews: "Reseñas Recientes",
    location: "Ubicación",
  },

  ad: {
    sponsored: "Patrocinado",
    title: "Herramientas y Suministros Premium",
    subtitle: "Obtén 20% de descuento en tu primera compra",
    cta: "Comprar Ahora",
  },

  taskers: {
    maria: {
      name: "María Rodríguez",
      bio: "Plomera licenciada especializada en reparaciones residenciales y comerciales. Tiempo de respuesta rápido y calidad garantizada.",
      skills: [
        "Reparaciones de Emergencia",
        "Instalación de Tuberías",
        "Limpieza de Drenajes",
        "Calentadores de Agua",
      ],
    },
    james: {
      name: "Carlos Chen",
      bio: "Electricista certificado con experiencia en cableado residencial, instalaciones de iluminación y actualizaciones eléctricas.",
      skills: [
        "Cableado",
        "Iluminación",
        "Actualización de Paneles",
        "Hogar Inteligente",
      ],
    },
    sarah: {
      name: "Sara Johnson",
      bio: "Jardinera apasionada que ofrece servicios de paisajismo, mantenimiento y diseño de jardines.",
      skills: [
        "Paisajismo",
        "Poda",
        "Diseño de Jardines",
        "Cuidado del Césped",
      ],
    },
    david: {
      name: "David Park",
      bio: "Carpintero hábil para muebles personalizados, reparaciones y renovaciones del hogar.",
      skills: [
        "Muebles Personalizados",
        "Construcción de Terrazas",
        "Instalación de Gabinetes",
        "Reparaciones",
      ],
    },
    emma: {
      name: "Emma Williams",
      bio: "Proveedora experimentada de cuidado infantil con certificación en RCP y formación en educación temprana.",
      skills: [
        "Cuidado de Bebés",
        "Actividades Educativas",
        "Preparación de Comidas",
        "Certificada en RCP",
      ],
    },
    robert: {
      name: "Roberto Martínez",
      bio: "Especialista compasivo en cuidado de adultos mayores que brinda asistencia diaria y compañía.",
      skills: [
        "Cuidado Personal",
        "Recordatorios de Medicamentos",
        "Compañía",
        "Tareas Domésticas Ligeras",
      ],
    },
  },

  availability: {
    monSat: "Lun-Sáb, 8am-6pm",
    tueSun: "Mar-Dom, 9am-7pm",
    monFri: "Lun-Vie, 7am-3pm",
    flexible: "Lun-Vie, Flexible",
    twentyFourSeven: "Lun-Dom, 24/7",
  },

  reviews: {
    john: {
      text: "¡Excelente trabajo! Muy profesional y completó el trabajo antes de lo programado.",
    },
    sarah: {
      text: "¡Altamente recomendado! Gran comunicación y servicio de calidad.",
    },
    michael: {
      text: "Buena experiencia en general. Contrataría nuevamente para proyectos futuros.",
    },
  },

  time: {
    daysAgo: "hace {days} días",
    weeksAgo: "hace {weeks} semana(s)",
    today: "hoy",
    yesterday: "ayer",
  },

  specialists: {
    strings: {
      specialty: "Especialidad",
      yearsOfExperience: "Años de Experiencia",
      services: "Servicios",
      hourlyRate: "Tarifa por Hora",
      subtitle:
        "Únete a nuestra comunidad de especialistas verificados y conecta con clientes que necesitan tus servicios.",
    },
    placeholders: {
      firstName: "Juan",
      lastName: "Pérez",
      description: "Contá brevemente tu experiencia y servicios",
      yearsOfExperience: "3",
      region: "Provincia o estado",
      city: "Ciudad",
      selectSpecialty: "Seleccioná una especialidad",
      services: "Ej: reparaciones, instalaciones, mantenimiento",
      hourlyRate: "Ej: 500",
      hourlyRateExample: "Ej: 2500",
      whatsapp: "+54 9 11 1234567",
      email: "correo@email.com",
    },
  },
};

export default es;
