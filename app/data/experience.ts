export type Experience = {
  id: number
  role: string
  company: string
  location?: string
  /** Periodo legible, p. ej. "dic 2025 — Presente". */
  period: string
  description: string
  highlights: string[]
  stack: string[]
  link?: string
}

/** Experiencia laboral, de más reciente a más antigua (roles actuales primero). */
export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "WelcomeBack",
    location: "Santiago, Chile",
    period: "dic 2025 — Presente",
    description: "Ingeniero de software en el ciclo completo de features —de la idea a producción— trabajando en backend y frontend, con foco en que cada entrega tenga impacto real en el producto.",
    highlights: [
      "Diseño e implementación de servicios backend y APIs en una arquitectura de microservicios.",
      "Flujos de publicación escalables con S3 y CDN, alineando entornos de preview y producción.",
      "Analítica y tracking de usuarios (PostHog) en colaboración con producto, diseño y growth.",
    ],
    stack: ["TypeScript", "Node.js", "AWS", "S3 / CDN", "PostHog"],
    link: "https://welcomeback.io/",
  },
  {
    id: 2,
    role: "Co-Founder & Product Engineer",
    company: "Educari",
    location: "Chile",
    period: "sep 2024 — Presente",
    description: "Cofundé una plataforma EdTech B2B para la preparación universitaria en Chile. Lidero producto de punta a punta: construir, iterar rápido y dejar todo listo para escalar.",
    highlights: [
      "IA generativa (GPT-4o) para generación de clases, asistente de estudio y explicaciones dinámicas.",
      "Búsqueda semántica para explorar contenido en lenguaje natural (Pinecone).",
      "3 aplicaciones en Next.js (estudiantes, admin y colegios), suscripciones con pagos (Flow.cl) y autenticación (Clerk).",
    ],
    stack: ["TypeScript", "Next.js", "tRPC", "SST", "AWS", "PostgreSQL", "Pinecone", "OpenAI", "Clerk"],
    link: "https://educari.cl/",
  },
  {
    id: 3,
    role: "Data Engineer & Data Architect",
    company: "MOS-iT · OnNet Fibra",
    location: "Santiago, Chile",
    period: "ene 2025 — dic 2025",
    description: "Soluciones de datos para telecomunicaciones, enfocado en pipelines, arquitectura y monitoreo operativo de red.",
    highlights: [
      "Pipelines de ingesta y procesamiento distribuido con PySpark y Databricks.",
      "Arquitectura de datos sobre Data Lake en Azure (Data Factory).",
      "Alertas sobre métricas de red (OLT/ONT) y optimización de infraestructura con reducción significativa de costos.",
    ],
    stack: ["PySpark", "Databricks", "Azure", "Data Factory", "Python"],
    link: "https://mos-it.cl/",
  },
  {
    id: 5,
    role: "Software Engineer",
    company: "Canasta Ahorro · Cencosud Ventures",
    location: "Santiago, Chile",
    period: "jun 2024 — dic 2024",
    description: "Ingeniero de software en una startup de e-commerce respaldada por Cencosud Ventures, con foco en control de pagos y logística.",
    highlights: [
      "Lideré un proyecto para detectar errores de facturación, comparando pagos realizados contra facturas emitidas y mejorando el control de pagos.",
      "Apoyé mejoras en el sistema logístico, asignando pedidos según la comuna del cliente.",
    ],
    stack: ["Next.js", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    id: 6,
    role: "Software Engineer",
    company: "Smart Sales",
    location: "Santiago, Chile",
    period: "jun 2023 — may 2024",
    description: "Mantención e integración del CRM usado por equipos de call center, optimizando la gestión y visualización de datos de clientes.",
    highlights: [
      "Mejoras en la interfaz y en la estructura de datos para facilitar la toma de decisiones comerciales.",
      "Desarrollo de funcionalidades end-to-end sobre el CRM (front-end y datos).",
    ],
    stack: ["CodeIgniter", "PHP", "JavaScript", "PostgreSQL"],
  },
  {
    id: 4,
    role: "Software Engineer · Product Builder / Founder",
    company: "Freelance / Independiente",
    location: "Chile",
    period: "mar 2020 — dic 2024",
    description: "Más de 4 años construyendo productos digitales de punta a punta, para clientes y proyectos propios.",
    highlights: [
      "WebVitae: cofundé un estudio de sitios web, branding y soluciones digitales, entregando proyectos end-to-end.",
      "AmagiBitcoin: plataforma de monitoreo de inversión en BTC (Django, monorepo). MVP en ~6 meses y más de 2 años de evolución y operación.",
    ],
    stack: ["Django", "Python", "React", "JavaScript"],
    link: "https://webvitae.ai/",
  },
]
