type Localized = { es: string; en: string }

export type Venture = {
  title: string
  role: Localized
  pitch: Localized
  metrics: { value: string; label: Localized }[]
  built: Localized[]
  stack: string[]
  image: string
  link: string
  appStore?: string
  playStore?: string
}

/** Productos que construyo y opero; se muestran como case study en "Productos". */
export const ventures: Venture[] = [
  {
    title: 'WelcomeBack',
    role: { es: 'Software Engineer · dic 2025 — hoy', en: 'Software Engineer · Dec 2025 — now' },
    pitch: {
      es: 'Software para restaurantes nativo en IA: fidelización, catálogo, menú digital y POS. Soy dueño del catálogo, el menú digital y el POS: los diseñé, los construí y los opero.',
      en: 'AI-native software for restaurants: loyalty, catalog, digital menu and POS. I own the catalog, the digital menu and the POS: I designed, built and operate them.',
    },
    metrics: [
      { value: '300+', label: { es: 'Restaurantes', en: 'Restaurants' } },
      { value: '13', label: { es: 'Países', en: 'Countries' } },
      { value: '$350M+', label: { es: 'CLP transados', en: 'CLP processed' } },
      { value: 'x7', label: { es: 'MRR en 12 meses', en: 'MRR in 12 months' } },
    ],
    built: [
      { es: 'Catálogo, menú digital y POS de punta a punta; sobre esa línea de producto el negocio hizo MRR x7, ARPU x2 y LTV/CAC 11.', en: 'Catalog, digital menu and POS end-to-end; on that product line the business hit 7x MRR, 2x ARPU and an LTV/CAC of 11.' },
      { es: 'Servicios y APIs en NestJS sobre microservicios, con publicación en S3 + CDN que alinea preview y producción.', en: 'NestJS services and APIs on microservices, with S3 + CDN publishing that keeps preview and production aligned.' },
      { es: 'Guardias on-call con Better Stack y analítica de producto con PostHog. 1er lugar en la WelcomeBack Week con un onboarding con IA hecho en 48 horas.', en: 'On-call with Better Stack and product analytics with PostHog. 1st place at WelcomeBack Week with an AI onboarding built in 48 hours.' },
    ],
    stack: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'AWS (Bedrock, S3, CDN, EKS)', 'Better Stack', 'PostHog'],
    image: '/projects/welcomeback.png',
    link: 'https://welcomeback.io/',
  },
  {
    title: 'Educari',
    role: { es: 'Cofundador · Product Engineer · sep 2024 — hoy', en: 'Co-founder · Product Engineer · Sep 2024 — now' },
    pitch: {
      es: 'Plataforma PAES con IA para estudiantes de 4° básico a II medio: microclases interactivas, ensayos simulados y "Edu", un tutor con IA. Web, app móvil, portal para colegios y admin, todo sobre AWS. Respaldada por AWS Startups y OpenBeauchef (U. de Chile).',
      en: 'AI-powered PAES prep for 4th to 11th graders: interactive micro-lessons, mock tests and "Edu", an AI tutor. Web, mobile app, school portal and admin, all on AWS. Backed by AWS Startups and OpenBeauchef (U. de Chile).',
    },
    metrics: [
      { value: '900+', label: { es: 'Usuarios', en: 'Users' } },
      { value: '713', label: { es: 'Ensayos rendidos', en: 'Mock tests taken' } },
      { value: '912', label: { es: 'Clases realizadas', en: 'Lessons completed' } },
      { value: '10', label: { es: 'Lambdas de IA', en: 'AI Lambdas' } },
    ],
    built: [
      { es: 'Tutor "Edu" sobre Claude (Bedrock) con búsqueda semántica: indexa las clases en Pinecone vía una cola SQS y responde enlazando clases reales.', en: '"Edu" tutor on Claude (Bedrock) with semantic search: classes are indexed into Pinecone through an SQS queue, and answers link real lessons.' },
      { es: 'IA en producción para explicaciones paso a paso, generación de preguntas y ensayos PDF para colegios, con caché y cuotas por usuario.', en: 'AI in production for step-by-step explanations, question generation and PDF mock exams for schools, with caching and per-user quotas.' },
      { es: 'Crons en EventBridge: vencimiento de licencias de colegios, publicación del blog y avisos de fin de prueba por email (SES + RevenueCat).', en: 'EventBridge crons: school license expiry, blog publishing and trial-ending emails (SES + RevenueCat).' },
      { es: 'Infra como código con SST: 3 sitios Next.js, BFF tRPC (~400 procedimientos), RDS Postgres, S3, DynamoDB; pagos con Flow y RevenueCat.', en: 'Infra as code with SST: 3 Next.js sites, a tRPC BFF (~400 procedures), RDS Postgres, S3, DynamoDB; payments with Flow and RevenueCat.' },
    ],
    stack: ['Next.js', 'React Native (Expo)', 'tRPC', 'AWS (Lambda, RDS, SQS, EventBridge, Bedrock)', 'SST', 'Pinecone', 'Clerk', 'ElevenLabs'],
    image: '/projects/educari.png',
    link: 'https://educari.cl/',
    appStore: 'https://apps.apple.com/cl/app/id6787794272',
    playStore: 'https://play.google.com/store/apps/details?id=com.educari.app',
  },
  {
    title: 'AgroJob',
    role: { es: 'Fundador · lo construí de punta a punta', en: 'Founder · built end-to-end' },
    pitch: {
      es: 'Plataforma de empleo y comunidad para el agro: web, app para iOS y Android y un servicio en Rails que produce un podcast diario. La IA hace el matching, resume ofertas, escribe el blog y te entrena para entrevistas por voz.',
      en: 'A jobs and community platform for agriculture: web, iOS and Android app, and a Rails service that produces a daily podcast. AI does the matching, summarizes listings, writes the blog and coaches you for voice interviews.',
    },
    metrics: [
      { value: '3', label: { es: 'Apps: web, móvil y Rails', en: 'Apps: web, mobile, Rails' } },
      { value: '87', label: { es: 'Rutas de API', en: 'API routes' } },
      { value: '1/día', label: { es: 'Podcast generado', en: 'Generated podcast' } },
      { value: '21', label: { es: 'Archivos de specs RSpec', en: 'RSpec spec files' } },
    ],
    built: [
      { es: 'Matching candidato–oferta con IA (pesos configurables), resúmenes de ofertas e ingesta de empleos externos que extrae los datos con GPT-4o.', en: 'AI candidate–job matching (configurable weights), listing summaries and external job ingestion with GPT-4o extraction.' },
      { es: 'Agente de blog: un cron elige una empresa u oferta, escribe el post y genera la portada con IA; se publica en forma programada.', en: 'Blog agent: a cron picks a company or listing, writes the post and generates the cover with AI; publishing is scheduled.' },
      { es: 'AgroCast (Rails 8 + Solid Queue): un pipeline de jobs junta noticias, clima y ofertas, escribe un diálogo entre dos voces, lo sintetiza con ElevenLabs y lo une con ffmpeg. Se despliega con Kamal.', en: 'AgroCast (Rails 8 + Solid Queue): a job pipeline collects news, weather and listings, writes a two-host dialogue, synthesizes it with ElevenLabs and stitches it with ffmpeg. Deployed with Kamal.' },
      { es: 'App Expo con entrevistas de práctica por voz, optimizador de CV, mapa de ofertas y suscripciones (RevenueCat y Mercado Pago).', en: 'Expo app with voice interview practice, CV optimizer, job map and subscriptions (RevenueCat and Mercado Pago).' },
    ],
    stack: ['Next.js 14', 'Supabase', 'React Native (Expo)', 'Ruby on Rails 8', 'OpenAI', 'ElevenLabs', 'Vercel Cron', 'Kamal'],
    image: '/projects/agrojob.png',
    link: 'https://agrojob.cl/',
    appStore: 'https://apps.apple.com/cl/app/id6829986477',
    playStore: 'https://play.google.com/store/apps/details?id=com.agronomtech.agrojob',
  },
  {
    title: 'Mejora tu Pitch',
    role: { es: 'Fundador · nació como Pitch Perfect (HackMeridian 2025)', en: 'Founder · born as Pitch Perfect (HackMeridian 2025)' },
    pitch: {
      es: 'Practicas tu pitch en voz alta contra un agente que te repregunta, y al colgar te evalúa con los criterios reales de Start-Up Chile y Y Combinator: qué falló y qué hacer distinto. El mismo motor de voz hace las entrevistas de práctica de AgroJob.',
      en: 'You practice your pitch out loud against an agent that pushes back, and when you hang up it grades you against the real Start-Up Chile and Y Combinator criteria: what failed and what to do differently. The same voice engine runs AgroJob\'s practice interviews.',
    },
    metrics: [
      { value: '164', label: { es: 'Tests en verde', en: 'Passing tests' } },
      { value: '925', label: { es: 'Assertions', en: 'Assertions' } },
      { value: '6:30', label: { es: 'Cron diario del podcast', en: 'Daily podcast cron' } },
      { value: 'RAG', label: { es: 'Sobre bases oficiales', en: 'On official criteria' } },
    ],
    built: [
      { es: 'Agente de voz con ElevenLabs y un evaluador que cita las bases oficiales: RAG con pgvector sobre documentos scrapeados de Start-Up Chile y Y Combinator.', en: 'ElevenLabs voice agent and an evaluator that cites the official criteria: RAG with pgvector over documents scraped from Start-Up Chile and Y Combinator.' },
      { es: 'Ingesta de conocimiento desde repos de GitHub, notas de Obsidian y sitios web, con el corpus de cada usuario aislado del resto.', en: 'Knowledge ingestion from GitHub repos, Obsidian notes and websites, with each user\'s corpus isolated from everyone else\'s.' },
      { es: 'Solid Queue con un cron diario que produce el podcast "AgroJob al Día": junta el material, escribe el guion y genera el audio.', en: 'Solid Queue with a daily cron that produces the "AgroJob al Día" podcast: it gathers the material, writes the script and generates the audio.' },
    ],
    stack: ['Ruby on Rails 8', 'Solid Queue', 'PostgreSQL + pgvector', 'React 19 + Vite', 'ElevenLabs', 'Railway'],
    image: '/projects/mejoratupitch.png',
    link: 'https://mejoratupitch.cl/',
  },
]
