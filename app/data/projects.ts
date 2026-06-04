export type Project = {
  id: number
  title: string
  description: string
  category: 'web' | 'app' | 'blockchain'
  /** Categorías adicionales para que el proyecto aparezca en más de un filtro (p. ej. ['web','app']). */
  categories?: ('web' | 'app' | 'blockchain')[]
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
    description: "Localización de exoplanes con Chatbot IA para realizar preguntas del selecciona, desarrollado durante el NASA Space Apps Challenge.",
    category: 'app',
    image: "/projects/NASA Challenge.jpeg",
    video: "/projects/NASA Challenge.mp4",
    technologies: ['Python', 'AI', 'Machine Learning', 'OpenAI', 'Next.js']
  },
  {
    id: 2,
    title: "Stacks Governance dApp",
    description: "Aplicación descentralizada para gobernanza desarrollada durante la hackathon de Stacks.",
    category: 'blockchain',
    image: "/projects/inti.png",
    video: "/projects/inti.mp4",
    technologies: ['Stacks','Clarity', 'Web3.js', 'React', 'Vite', 'Vercel']
  },
  {
    id: 3,
    title: "Smart Sales CRM",
    description: "Sistema CRM personalizado para gestión de ventas y clientes.",
    category: 'app',
    image: "/projects/smartsales.png",
    technologies: ['Codeigniter', 'PHP', 'Postgress','Javascript','SQL']
  },
  {
    id: 4,
    title: "Assets Web 3",
    description: "Landing page para proyecto de tokenización",
    category: 'blockchain',
    image: "/projects/landingAssetsW3.png",
    technologies: ['RWA', 'Blockchain', 'Ethereum','Assets Digital','React','Vite',],
    link: 'https://assets-web3-landing.vercel.app/'
  },
  {
    id: 5,
    title: "Assets Web 3 App",
    description: "Aplicación para comprar activos digitales a travéz de tokens",
    category: 'blockchain',
    image: "/projects/asswd.png",
    video: "/projects/assetswe3d.mov",
    technologies: ['RWA', 'Blockchain', 'Ethereum','Assets Digital','React','Vite',],
    link: 'https://app.assetsweb3.com/'
  },
  {
    id: 6,
    title: "Canasta Ahorro",
    description: "Plataforma de e-commerce respaldada por Cencosud Ventures.",
    category: 'app',
    image: "/projects/canasta.png",
    video: "/projects/canasta.mp4",
    technologies: ['Next.js', 'Node.js', 'AWS', 'Cencosud Ventures']
  },
  {
    id: 7,
    title: "Soroban Vitae",
    description: "Creacion de cv en blockchain Stellar.",
    category: 'blockchain',
    image: "/projects/sorobanVitae.png",
    video: "/projects/sorobanVitae.mp4",
    technologies: ['Python', 'FastAPI', 'Docker', 'Vercel'],
    link: 'https://create-soroban-cv-dapp.vercel.app/'
  },
  {
    id: 8,
    title: "Stone Chile",
    description: "🔹Calculadora de cajas por M2 a usar🔹Categorías de producto🔹Fichas técnicas🔹E-commerce🔹 Integración Transbank 🔹Transferencia bancaria   🔹Tipos de envío ( retiro local y 7 días hábiles)",
    category: 'web',
    image: "/projects/stone.png",
    video:"/projects/stone.mp4",
    technologies: ['PHP', 'Wordpress' , 'Cpanel' ],
    link: 'https://stonechile.cl/'
  },
  {
    id: 9,
    title: "Márquez Marnich Arquitectura",
    description: "Sitio web portafolio",
    category: 'web',
    image: "/projects/marquez.png",
    video:"/projects/marquez.mp4",
    technologies: ['PHP', 'Wordpress' , 'Cpanel' ],
    link: 'https://www.marquezmarnich.cl/'
  },
  {
    id: 10,
    title: "WallSpace",
    description: "Sitio web informativa",
    category: 'web',
    image: "/projects/wallspace.png",
    video:"/projects/wallspace.mp4",
    technologies: ['PHP', 'Wordpress' , 'Cpanel' ]
  },
  {
    id: 11,
    title: "El Barometro",
    description: "Sitio web blog, integrado a sistema de votación",
    category: 'app',
    image: "/projects/elbarometro.png",
    video:"/projects/elbarometro2.mov",
    technologies: ['PHP', 'Wordpress' , 'Cpanel' ]
  },
  {
    id: 12,
    title: "Educari",
    description: "Plataforma educativa con IA para estudiantes chilenos: microclases interactivas, simulación de ensayos y feedback al instante, desde 5° básico hasta II medio con preparación PAES.",
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/educari.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'AI', 'AWS'],
    link: 'https://educari.cl/'
  },
  {
    id: 13,
    title: "AgroJob",
    description: "Portal de empleos del sector agrícola en Chile: ofertas laborales con buscador, filtros por ubicación y mapa, conectando trabajadores con empresas del agro.",
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/agrojob.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    link: 'https://agrojob.cl/'
  },
  {
    id: 14,
    title: "PolloExperto",
    description: "Polla del Mundial FIFA 2026: crea grupos con amigos y familia para pronosticar los 104 partidos, con tablas de puntuación por grupo y bonus por marcador exacto.",
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/polloexperto.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    link: 'https://www.polloexperto.com/'
  },
  {
    id: 15,
    title: "Brouk",
    description: "Gestor inmobiliario para brokers y agentes: marketplace de proyectos en convenio con condiciones de venta, material de apoyo y herramientas para vender a sus clientes.",
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/brouk.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    link: 'https://brouk.vercel.app/'
  },
  {
    id: 16,
    title: "WebVitae",
    description: "Agencia de desarrollo digital integral: sitios web, apps, software, IA y marketing en un solo equipo, acompañando proyectos desde la idea hasta el lanzamiento.",
    category: 'web',
    image: "/projects/webvitae.png",
    technologies: ['Next.js', 'React', 'Tailwind', 'Supabase', 'AI'],
    link: 'https://www.webvitae.ai/en'
  },
  {
    id: 17,
    title: "Nido",
    description: "Planificador financiero para padres en Chile: calcula el costo real de criar un hijo y automatiza un plan de ahorro e inversión por metas (primer año, educación, jubilación), con datos locales verificables.",
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/nido.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Vercel'],
    link: 'https://nido-webapp-phi.vercel.app/'
  },
  {
    id: 18,
    title: "Social Prop",
    description: "Plataforma para vender proyectos inmobiliarios: brokers e inmobiliarias acceden a stock en convenio, condiciones comerciales, chat con gestión y material de apoyo para sus clientes.",
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/social-prop.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    link: 'https://social-prop.vercel.app/'
  },
  {
    id: 19,
    title: "Stellar Wizard",
    description: "Creador de activos blockchain sin código: describe en lenguaje natural lo que quieres y la IA genera e implementa NFTs y estrategias DeFi en la red Stellar, en un clic.",
    category: 'blockchain',
    image: "/projects/stellar-wizard.png",
    technologies: ['Stellar', 'AI', 'NLP', 'NFT', 'DeFi', 'React'],
    link: 'https://stellar-wizard.vercel.app/'
  },
  {
    id: 20,
    title: "LaPizarra",
    description: "Plataforma de gestión de fútbol amateur: organiza ligas, equipos y partidos, registra estadísticas y asistencia, gestiona finanzas y transmite en vivo. Toda la memoria de la cancha en un solo lugar.",
    category: 'app',
    categories: ['web', 'app'],
    image: "/projects/la-pizarra.png",
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Vercel'],
    link: 'https://la-pizarra.vercel.app/'
  }
]
