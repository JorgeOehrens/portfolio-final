/** Texto traducible: se muestra `es` o `en` según el idioma activo. */
type Localized = { es: string; en: string }

export type Project = {
  id: number
  title: string
  description: Localized
  category: 'web' | 'app' | 'blockchain' | 'data'
  /** Categorías adicionales para que el proyecto aparezca en más de un filtro (p. ej. ['web','app']). */
  categories?: ('web' | 'app' | 'blockchain' | 'data')[]
  image: string
  video?: string
  technologies: string[]
  link?: string
  /** Repo de GitHub (cuando exista). Muestra botón "Ver código" en el modal. */
  github?: string
  /** Link a App Store / Play Store. Muestra botón "Descargar app" en el modal. */
  appStore?: string
  /** Captura en formato vertical para apps móviles, p. ej. /projects/<slug>-mobile.png */
  mobileImage?: string
  /** Identificador kebab-case usado por el script de capturas para nombrar el PNG. */
  slug?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NASA Space Apps Challenge",
    description: {
      es: "Localización de exoplanetas con un chatbot de IA al que puedes hacerle preguntas, desarrollado durante el NASA Space Apps Challenge.",
      en: "Exoplanet discovery with an AI chatbot you can ask questions, built during the NASA Space Apps Challenge.",
    },
    category: 'app',
    image: "/projects/NASA Challenge.jpeg",
    video: "/projects/NASA Challenge.mp4",
    technologies: ['Python', 'AI', 'Machine Learning', 'OpenAI', 'Next.js']
  },
  {
    id: 2,
    title: "Stacks Governance dApp",
    description: {
      es: "Aplicación descentralizada para gobernanza desarrollada durante la hackathon de Stacks.",
      en: "Decentralized governance application built during the Stacks hackathon.",
    },
    category: 'blockchain',
    image: "/projects/inti.png",
    video: "/projects/inti.mp4",
    technologies: ['Stacks','Clarity', 'Web3.js', 'React', 'Vite', 'Vercel']
  },
  {
    id: 3,
    title: "Smart Sales CRM",
    description: {
      es: "Sistema CRM personalizado para gestión de ventas y clientes.",
      en: "Custom CRM system for sales and customer management.",
    },
    category: 'app',
    image: "/projects/smartsales.png",
    technologies: ['Codeigniter', 'PHP', 'Postgress','Javascript','SQL']
  },
  {
    id: 4,
    title: "Assets Web 3",
    description: {
      es: "Landing page para proyecto de tokenización.",
      en: "Landing page for a tokenization project.",
    },
    category: 'blockchain',
    image: "/projects/landingAssetsW3.png",
    technologies: ['RWA', 'Blockchain', 'Ethereum','Assets Digital','React','Vite',],
    link: 'https://assets-web3-landing.vercel.app/'
  },
  {
    id: 5,
    title: "Assets Web 3 App",
    description: {
      es: "Aplicación para comprar activos digitales a través de tokens.",
      en: "App to buy digital assets through tokens.",
    },
    category: 'blockchain',
    image: "/projects/asswd.png",
    video: "/projects/assetswe3d.mov",
    technologies: ['RWA', 'Blockchain', 'Ethereum','Assets Digital','React','Vite',],
    link: 'https://app.assetsweb3.com/'
  },
  {
    id: 6,
    title: "Canasta Ahorro",
    description: {
      es: "Plataforma de e-commerce respaldada por Cencosud Ventures.",
      en: "E-commerce platform backed by Cencosud Ventures.",
    },
    category: 'app',
    image: "/projects/canasta.png",
    video: "/projects/canasta.mp4",
    technologies: ['Next.js', 'Node.js', 'AWS', 'Cencosud Ventures']
  },
  {
    id: 7,
    title: "Soroban Vitae",
    description: {
      es: "Creación de CV en la blockchain de Stellar.",
      en: "Create your CV on the Stellar blockchain.",
    },
    category: 'blockchain',
    image: "/projects/sorobanVitae.png",
    video: "/projects/sorobanVitae.mp4",
    technologies: ['Python', 'FastAPI', 'Docker', 'Vercel'],
    link: 'https://create-soroban-cv-dapp.vercel.app/'
  },
  {
    id: 8,
    title: "Stone Chile",
    description: {
      es: "🔹Calculadora de cajas por m² 🔹Categorías de producto 🔹Fichas técnicas 🔹E-commerce 🔹Integración Transbank 🔹Transferencia bancaria 🔹Tipos de envío (retiro local y 7 días hábiles)",
      en: "🔹Box-per-m² calculator 🔹Product categories 🔹Spec sheets 🔹E-commerce 🔹Transbank integration 🔹Bank transfer 🔹Shipping options (local pickup and 7 business days)",
    },
    category: 'web',
    image: "/projects/stone.png",
    video:"/projects/stone.mp4",
    technologies: ['PHP', 'Wordpress' , 'Cpanel' ],
    link: 'https://stonechile.cl/'
  },
  {
    id: 9,
    title: "Márquez Marnich Arquitectura",
    description: {
      es: "Sitio web portafolio.",
      en: "Portfolio website.",
    },
    category: 'web',
    image: "/projects/marquez.png",
    video:"/projects/marquez.mp4",
    technologies: ['PHP', 'Wordpress' , 'Cpanel' ],
    link: 'https://www.marquezmarnich.cl/'
  },
  {
    id: 10,
    title: "WallSpace",
    description: {
      es: "Sitio web informativo.",
      en: "Informational website.",
    },
    category: 'web',
    image: "/projects/wallspace.png",
    video:"/projects/wallspace.mp4",
    technologies: ['PHP', 'Wordpress' , 'Cpanel' ]
  },
  {
    id: 11,
    title: "El Barometro",
    description: {
      es: "Sitio web tipo blog, integrado a un sistema de votación.",
      en: "Blog-style website integrated with a voting system.",
    },
    category: 'app',
    image: "/projects/elbarometro.png",
    video:"/projects/elbarometro2.mov",
    technologies: ['PHP', 'Wordpress' , 'Cpanel' ]
  },
  {
    id: 12,
    title: "Educari",
    description: {
      es: "Plataforma educativa con IA para estudiantes chilenos: microclases interactivas, simulación de ensayos y feedback al instante, desde 5° básico hasta II medio con preparación PAES.",
      en: "AI-powered education platform for Chilean students: interactive micro-lessons, mock-test simulation and instant feedback, from 5th grade to 12th grade with PAES (college-entrance) prep.",
    },
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/educari.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'AI', 'AWS'],
    link: 'https://educari.cl/'
  },
  {
    id: 13,
    title: "AgroJob",
    description: {
      es: "Portal de empleos del sector agrícola en Chile: ofertas laborales con buscador, filtros por ubicación y mapa, conectando trabajadores con empresas del agro.",
      en: "Agricultural job board for Chile: listings with search, location filters and a map, connecting workers with agribusiness companies.",
    },
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/agrojob.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    link: 'https://agrojob.cl/'
  },
  {
    id: 14,
    title: "PolloExperto",
    description: {
      es: "Polla del Mundial FIFA 2026: crea grupos con amigos y familia para pronosticar los 104 partidos, con tablas de puntuación por grupo y bonus por marcador exacto.",
      en: "FIFA World Cup 2026 prediction pool: create groups with friends and family to predict all 104 matches, with per-group leaderboards and bonus points for exact scores.",
    },
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/polloexperto.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    link: 'https://www.polloexperto.com/'
  },
  {
    id: 15,
    title: "Brouk",
    description: {
      es: "Gestor inmobiliario para brokers y agentes: marketplace de proyectos en convenio con condiciones de venta, material de apoyo y herramientas para vender a sus clientes.",
      en: "Real-estate manager for brokers and agents: a marketplace of partner projects with sales terms, supporting materials and tools to sell to their clients.",
    },
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/brouk.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    link: 'https://brouk.vercel.app/'
  },
  {
    id: 16,
    title: "WebVitae",
    description: {
      es: "Agencia de desarrollo digital integral: sitios web, apps, software, IA y marketing en un solo equipo, acompañando proyectos desde la idea hasta el lanzamiento.",
      en: "Full-service digital development agency: websites, apps, software, AI and marketing in one team, guiding projects from idea to launch.",
    },
    category: 'web',
    image: "/projects/webvitae.png",
    technologies: ['Next.js', 'React', 'Tailwind', 'Supabase', 'AI'],
    link: 'https://www.webvitae.ai/en'
  },
  {
    id: 17,
    title: "Nido",
    description: {
      es: "Planificador financiero para padres en Chile: calcula el costo real de criar un hijo y automatiza un plan de ahorro e inversión por metas (primer año, educación, jubilación), con datos locales verificables.",
      en: "Financial planner for parents in Chile: calculates the real cost of raising a child and automates a goal-based saving and investing plan (first year, education, retirement), with verifiable local data.",
    },
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/nido.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Vercel'],
    link: 'https://nido-webapp-phi.vercel.app/'
  },
  {
    id: 18,
    title: "Social Prop",
    description: {
      es: "Plataforma para vender proyectos inmobiliarios: brokers e inmobiliarias acceden a stock en convenio, condiciones comerciales, chat con gestión y material de apoyo para sus clientes.",
      en: "Platform to sell real-estate projects: brokers and developers access partner inventory, commercial terms, a managed chat and supporting materials for their clients.",
    },
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/social-prop.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    link: 'https://social-prop.vercel.app/'
  },
  {
    id: 19,
    title: "Stellar Wizard",
    description: {
      es: "Creador de activos blockchain sin código: describe en lenguaje natural lo que quieres y la IA genera e implementa NFTs y estrategias DeFi en la red Stellar, en un clic.",
      en: "No-code blockchain asset creator: describe what you want in natural language and the AI generates and deploys NFTs and DeFi strategies on the Stellar network, in one click.",
    },
    category: 'blockchain',
    image: "/projects/stellar-wizard.png",
    technologies: ['Stellar', 'AI', 'NLP', 'NFT', 'DeFi', 'React'],
    link: 'https://stellar-wizard.vercel.app/'
  },
  {
    id: 20,
    title: "LaPizarra",
    description: {
      es: "Plataforma de gestión de fútbol amateur: organiza ligas, equipos y partidos, registra estadísticas y asistencia, gestiona finanzas y transmite en vivo. Toda la memoria de la cancha en un solo lugar.",
      en: "Amateur football management platform: organize leagues, teams and matches, track stats and attendance, manage finances and stream live. All the pitch's memory in one place.",
    },
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/la-pizarra.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Vercel'],
    link: 'https://la-pizarra.vercel.app/'
  },
  {
    id: 21,
    title: "OnNet Fibra · Plataforma Big Data",
    description: {
      es: "Plataforma de datos en Azure para una red de fibra óptica. Ingiere potencias de OLT/ONT y fibra óptica más plataformas operacionales (factibilidad, cierres, construcciones, alarmas) mediante Azure Data Factory, cola Kafka y notebooks, bajo una arquitectura de datos medallón (Bronze/Silver/Gold) procesada en Databricks (PySpark). Pipeline de históricos + incrementales programados por minutos, horas y días, con entregables en dashboards de Databricks, Power BI y archivos Excel. Optimización de costos cloud de ~20%.",
      en: "Azure data platform for a fiber-optic network. Ingests OLT/ONT and fiber power levels plus operational platforms (feasibility, closures, construction, alarms) via Azure Data Factory, a Kafka queue and notebooks, under a medallion data architecture (Bronze/Silver/Gold) processed in Databricks (PySpark). Historical + scheduled incremental pipelines by minutes, hours and days, with deliverables in Databricks dashboards, Power BI and Excel files. ~20% cloud cost optimization.",
    },
    category: 'data',
    image: "/projects/onnet-bigdata.png",
    technologies: ['Azure', 'Azure Data Factory', 'Kafka', 'Databricks', 'PySpark', 'Medallion', 'Power BI', 'Excel', 'Data Lake'],
  }
]
