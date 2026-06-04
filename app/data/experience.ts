/** Texto traducible: se muestra `es` o `en` según el idioma activo. */
type Localized = { es: string; en: string }

export type Experience = {
  id: number
  role: string
  company: string
  location?: string
  /** Periodo legible por idioma, p. ej. { es: "dic 2025 — Presente", en: "Dec 2025 — Present" }. */
  period: Localized
  description: Localized
  highlights: Localized[]
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
    period: { es: "dic 2025 — Presente", en: "Dec 2025 — Present" },
    description: {
      es: "Ingeniero de software en el ciclo completo de features —de la idea a producción— trabajando en backend y frontend, con foco en que cada entrega tenga impacto real en el producto.",
      en: "Software engineer across the full feature cycle —from idea to production— working on backend and frontend, focused on every release having real product impact.",
    },
    highlights: [
      {
        es: "Diseño e implementación de servicios backend y APIs en una arquitectura de microservicios.",
        en: "Design and implementation of backend services and APIs in a microservices architecture.",
      },
      {
        es: "Flujos de publicación escalables con S3 y CDN, alineando entornos de preview y producción.",
        en: "Scalable publishing flows with S3 and CDN, aligning preview and production environments.",
      },
      {
        es: "Analítica y tracking de usuarios (PostHog) en colaboración con producto, diseño y growth.",
        en: "User analytics and tracking (PostHog) in collaboration with product, design and growth.",
      },
    ],
    stack: ["TypeScript", "Node.js", "AWS", "S3 / CDN", "PostHog"],
    link: "https://welcomeback.io/",
  },
  {
    id: 2,
    role: "Co-Founder & Product Engineer",
    company: "Educari",
    location: "Chile",
    period: { es: "sep 2024 — Presente", en: "Sep 2024 — Present" },
    description: {
      es: "Cofundé una plataforma EdTech B2B para la preparación universitaria en Chile. Lidero producto de punta a punta: construir, iterar rápido y dejar todo listo para escalar.",
      en: "Co-founded a B2B EdTech platform for university prep in Chile. I lead product end-to-end: build, iterate fast, and get everything ready to scale.",
    },
    highlights: [
      {
        es: "IA generativa (GPT-4o) para generación de clases, asistente de estudio y explicaciones dinámicas.",
        en: "Generative AI (GPT-4o) for lesson generation, a study assistant and dynamic explanations.",
      },
      {
        es: "Búsqueda semántica para explorar contenido en lenguaje natural (Pinecone).",
        en: "Semantic search to explore content in natural language (Pinecone).",
      },
      {
        es: "3 aplicaciones en Next.js (estudiantes, admin y colegios), suscripciones con pagos (Flow.cl) y autenticación (Clerk).",
        en: "3 Next.js apps (students, admin and schools), subscription payments (Flow.cl) and authentication (Clerk).",
      },
    ],
    stack: ["TypeScript", "Next.js", "tRPC", "SST", "AWS", "PostgreSQL", "Pinecone", "OpenAI", "Clerk"],
    link: "https://educari.cl/",
  },
  {
    id: 3,
    role: "Data Engineer & Data Architect",
    company: "MOS-iT · OnNet Fibra",
    location: "Santiago, Chile",
    period: { es: "ene 2025 — dic 2025", en: "Jan 2025 — Dec 2025" },
    description: {
      es: "Diseñé y operé la plataforma de Big Data de OnNet Fibra sobre Azure, de punta a punta: ingesta, procesamiento distribuido y entregables analíticos para el monitoreo operativo de la red de fibra óptica.",
      en: "Designed and operated OnNet Fibra's Big Data platform on Azure, end-to-end: ingestion, distributed processing and analytical deliverables for operational monitoring of the fiber-optic network.",
    },
    highlights: [
      {
        es: "Ingesta de fuentes de red —potencias de OLT/ONT y fibra óptica— y de plataformas operacionales (factibilidad, cierres, construcciones y alarmas), vía Azure Data Factory, cola Kafka (streaming) y notebooks.",
        en: "Ingestion of network sources —OLT/ONT power levels and fiber optics— and operational platforms (feasibility, closures, construction and alarms), via Azure Data Factory, a Kafka queue (streaming) and notebooks.",
      },
      {
        es: "Arquitectura de datos medallón (Bronze/Silver/Gold) en Azure, con procesamiento distribuido en Databricks (PySpark) sobre Data Lake.",
        en: "Medallion data architecture (Bronze/Silver/Gold) on Azure, with distributed processing in Databricks (PySpark) over a Data Lake.",
      },
      {
        es: "Diseñé el pipeline de ingesta de extremo a extremo: carga inicial de históricos (backfill) y luego incrementales programados por minutos, horas y días según criticidad.",
        en: "Designed the end-to-end ingestion pipeline: initial historical load (backfill) and then scheduled incrementals by minutes, hours and days depending on criticality.",
      },
      {
        es: "Entregables analíticos para operaciones —dashboards en Databricks, Power BI y archivos Excel—, con ~20% de reducción de costos cloud tras heredar un setup de alto costo dejado por una consultora externa.",
        en: "Analytical deliverables for operations —Databricks dashboards, Power BI and Excel files—, with ~20% cloud cost reduction after inheriting a high-cost setup left by an external consultancy.",
      },
    ],
    stack: ["Azure", "Azure Data Factory", "Kafka", "Databricks", "PySpark", "Medallion", "Power BI", "Excel", "Python", "Data Lake"],
    link: "https://mos-it.cl/",
  },
  {
    id: 5,
    role: "Software Engineer",
    company: "Canasta Ahorro · Cencosud Ventures",
    location: "Santiago, Chile",
    period: { es: "jun 2024 — dic 2024", en: "Jun 2024 — Dec 2024" },
    description: {
      es: "Ingeniero de software en una startup de e-commerce respaldada por Cencosud Ventures, con foco en control de pagos y logística.",
      en: "Software engineer at an e-commerce startup backed by Cencosud Ventures, focused on payment control and logistics.",
    },
    highlights: [
      {
        es: "Lideré un proyecto para detectar errores de facturación, comparando pagos realizados contra facturas emitidas y mejorando el control de pagos.",
        en: "Led a project to detect billing errors, comparing payments made against issued invoices and improving payment control.",
      },
      {
        es: "Apoyé mejoras en el sistema logístico, asignando pedidos según la comuna del cliente.",
        en: "Supported improvements to the logistics system, assigning orders based on the customer's district.",
      },
    ],
    stack: ["Next.js", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    id: 6,
    role: "Software Engineer",
    company: "Smart Sales",
    location: "Santiago, Chile",
    period: { es: "jun 2023 — may 2024", en: "Jun 2023 — May 2024" },
    description: {
      es: "Mantención e integración del CRM usado por equipos de call center, optimizando la gestión y visualización de datos de clientes.",
      en: "Maintenance and integration of the CRM used by call-center teams, optimizing customer data management and visualization.",
    },
    highlights: [
      {
        es: "Mejoras en la interfaz y en la estructura de datos para facilitar la toma de decisiones comerciales.",
        en: "Improvements to the interface and data structure to support commercial decision-making.",
      },
      {
        es: "Desarrollo de funcionalidades end-to-end sobre el CRM (front-end y datos).",
        en: "End-to-end feature development on the CRM (front-end and data).",
      },
    ],
    stack: ["CodeIgniter", "PHP", "JavaScript", "PostgreSQL"],
  },
  {
    id: 4,
    role: "Software Engineer · Product Builder / Founder",
    company: "Freelance / Independiente",
    location: "Chile",
    period: { es: "mar 2020 — dic 2024", en: "Mar 2020 — Dec 2024" },
    description: {
      es: "Más de 4 años construyendo productos digitales de punta a punta, para clientes y proyectos propios.",
      en: "Over 4 years building digital products end-to-end, for clients and my own projects.",
    },
    highlights: [
      {
        es: "WebVitae: cofundé un estudio de sitios web, branding y soluciones digitales, entregando proyectos end-to-end.",
        en: "WebVitae: co-founded a studio for websites, branding and digital solutions, delivering projects end-to-end.",
      },
      {
        es: "AmagiBitcoin: plataforma de monitoreo de inversión en BTC (Django, monorepo). MVP en ~6 meses y más de 2 años de evolución y operación.",
        en: "AmagiBitcoin: a BTC investment monitoring platform (Django, monorepo). MVP in ~6 months and over 2 years of evolution and operation.",
      },
    ],
    stack: ["Django", "Python", "React", "JavaScript"],
    link: "https://webvitae.ai/",
  },
]
