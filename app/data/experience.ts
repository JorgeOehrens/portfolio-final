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
      es: "Mantengo la plataforma de fidelización que usan más de 300 restaurantes en 13 países; toco frontend, backend e infraestructura.",
      en: "I maintain the loyalty platform used by more than 300 restaurants across 13 countries; I work on frontend, backend and infrastructure.",
    },
    highlights: [
      {
        es: "Soy dueño del catálogo, el menú digital y el POS: los diseñé, los construí y los opero. Sobre esa línea de producto el negocio hizo MRR x7, ARPU x2 y LTV/CAC 11 en 12 meses.",
        en: "I own the catalog, the digital menu and the POS: I designed, built and operate them. On top of that product line the business hit 7x MRR, 2x ARPU and an LTV/CAC of 11 in 12 months.",
      },
      {
        es: "Servicios backend y APIs en NestJS sobre una arquitectura de microservicios, con flujos de publicación en S3 y CDN alineando preview y producción.",
        en: "Backend services and APIs in NestJS over a microservices architecture, with publishing flows on S3 and CDN aligning preview and production.",
      },
      {
        es: "Observabilidad con Better Stack y analítica de usuarios (PostHog), en colaboración con producto, diseño y growth.",
        en: "Observability with Better Stack and user analytics (PostHog), in collaboration with product, design and growth.",
      },
    ],
    stack: ["NestJS", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS (Bedrock, S3, CDN)", "Better Stack", "Claude"],
    link: "https://welcomeback.io/",
  },
  {
    id: 2,
    role: "Co-Founder & Product Engineer",
    company: "Educari",
    location: "Chile",
    period: { es: "sep 2024 — Presente", en: "Sep 2024 — Present" },
    description: {
      es: "Cofundé Educari, plataforma PAES (4° básico a II medio) con microclases, ensayos simulados y tutor con IA. Está en App Store y Google Play, y la usan más de 350 estudiantes de colegios de Santiago.",
      en: "Co-founded Educari, a PAES prep platform (4th grade to 11th grade) with micro-lessons, mock tests and an AI tutor. It's on the App Store and Google Play, used by more than 350 students from Santiago schools.",
    },
    highlights: [
      {
        es: "713 ensayos rendidos y 912 clases realizadas en la plataforma. Respaldada por AWS Startups y OpenBeauchef (U. de Chile).",
        en: "713 mock tests taken and 912 lessons completed on the platform. Backed by AWS Startups and OpenBeauchef (U. de Chile).",
      },
      {
        es: "IA generativa para generación de clases, tutor de estudio y explicaciones dinámicas, con búsqueda semántica para explorar contenido en lenguaje natural (Pinecone).",
        en: "Generative AI for lesson generation, a study tutor and dynamic explanations, with semantic search to explore content in natural language (Pinecone).",
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
      es: "Armé desde cero la plataforma de Big Data de OnNet Fibra sobre Azure y junté 8 fuentes distintas en una arquitectura medallón: ingesta, procesamiento distribuido y entregables analíticos para el monitoreo operativo de la red de fibra óptica.",
      en: "Built OnNet Fibra's Big Data platform on Azure from scratch, bringing 8 different sources into a medallion architecture: ingestion, distributed processing and analytical deliverables for operational monitoring of the fiber-optic network.",
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
        es: "Lideré un módulo que cruza los pagos recibidos contra las facturas emitidas, sobre un revenue de USD 10.000; detecté diferencias que nadie veía.",
        en: "Led a module that reconciles payments received against issued invoices, over USD 10,000 in revenue; it surfaced discrepancies nobody was catching.",
      },
      {
        es: "Apoyé mejoras en el sistema logístico, asignando pedidos según la comuna del cliente.",
        en: "Supported improvements to the logistics system, assigning orders based on the customer's district.",
      },
    ],
    stack: ["Python", "PostgreSQL", "REST APIs"],
  },
  {
    id: 6,
    role: "Software Engineer",
    company: "Smart Sales",
    location: "Santiago, Chile",
    period: { es: "jun 2023 — may 2024", en: "Jun 2023 — May 2024" },
    description: {
      es: "Me hice cargo de un CRM en PHP con CodeIgniter 3 (MVC) que usaban todos los días 500 ejecutivos de 5 empresas de call center.",
      en: "I took ownership of a PHP CRM built on CodeIgniter 3 (MVC), used every day by 500 agents across 5 call-center companies.",
    },
    highlights: [
      {
        es: "Rehice los datos y las vistas de cliente para que encontraran la información sin esperas.",
        en: "Rebuilt the data model and customer views so agents could find information without waiting.",
      },
      {
        es: "Desarrollo de funcionalidades end-to-end sobre el CRM (front-end y datos).",
        en: "End-to-end feature development on the CRM (front-end and data).",
      },
    ],
    stack: ["PHP", "CodeIgniter 3", "PostgreSQL", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 4,
    role: "Desarrollador Full Stack",
    company: "Freelance / WebVitae",
    location: "Chile",
    period: { es: "mar 2020 — dic 2024", en: "Mar 2020 — Dec 2024" },
    description: {
      es: "Más de 4 años construyendo productos digitales de punta a punta, para clientes y proyectos propios.",
      en: "Over 4 years building digital products end-to-end, for clients and my own projects.",
    },
    highlights: [
      {
        es: "Cofundé WebVitae: software a medida, inventarios y sistemas administrativos para decenas de clientes.",
        en: "Co-founded WebVitae: custom software, inventory systems and admin platforms for dozens of clients.",
      },
      {
        es: "AmagiBitcoin: monitoreo de inversión en BTC (Django), MVP en 6 meses y +2 años en operación.",
        en: "AmagiBitcoin: BTC investment monitoring (Django), MVP in 6 months and 2+ years in operation.",
      },
    ],
    stack: ["Django", "Python", "React", "JavaScript"],
    link: "https://webvitae.ai/",
  },
]
