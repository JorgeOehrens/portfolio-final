export type BlogPost = {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  /** Video opcional (mp4 en /public/blog/). Se muestra arriba del post en el detalle. */
  video?: string
  tags: string[]
  /** URL original del post en LinkedIn (cuando proviene de ahí). */
  link?: string
  /** Identificador kebab-case usado para nombrar la imagen en /public/blog/. */
  slug?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 4,
    title: "Platanus Hack 2025: visión asistida con IA 🦾",
    excerpt: "Seleccionado para la Platanus Hack 2025 en las oficinas de Buk. En el track de Human Enhancement construimos un sistema de visualización asistida para personas con discapacidad visual: una app que guía con vibraciones y describe en tiempo real lo que ve la cámara.",
    content: "🚀 Tremendo fin de semana en la hackathon de Platanus en las oficinas de Buk. Estuve en el track de Human Enhancement, donde trabajamos tres pilares: 👁️‍🗨️ detección de obstáculos, 🚦 pasos peatonales y 🧭 orientación. Construimos un sistema de visualización asistida para personas con discapacidad visual: una app que guía con vibraciones y describe en tiempo real lo que la cámara ve. Un desafío intenso y demasiado bacán de desarrollar. 🔧 Tecnologías utilizadas: 🧠 Visión computacional (YOLOv8), 🤖 IA generativa (Anthropic · Claude), 🔊 Text-to-Speech (ElevenLabs), 📱 Front (Expo + React Native), ⚙️ Backend (FastAPI) y ☁️ Infra en AWS (ECR + App Runner), Docker y Cloudflare. Tremendo espacio para crear, iterar y darle forma a un MVP funcional en tiempo récord. 💻🦾 Vamos con todo ⚡️",
    date: "2025-11",
    image: "/blog/platanus-hack.png",
    tags: ["Hackathon", "Platanus", "IA", "Computer Vision", "React Native", "FastAPI"],
    slug: "platanus-hack"
  },
  {
    id: 5,
    title: "HackMeridian 2025 en Río de Janeiro 🇧🇷🚀",
    excerpt: "Becado para HackMeridian 2025 (Stellar) en Río de Janeiro. En el track de Composability presenté 'Pitch Perfect', una app de IA que da retroalimentación para pulir un pitch y mejorar las chances de financiamiento.",
    content: "¡A Brasil los pasajes! 🚀🇧🇷 Estuve en HackMeridian 2025 (15–16 de septiembre, Río de Janeiro) participando en el track de Composability con un proyecto de IA que busca conectar usuarios, profesionales y emprendedores con Stellar. Postulé con \"Pitch Perfect\", una aplicación diseñada para dar retroalimentación y ayudar a pulir un pitch con miras a obtener financiamiento. Gracias a la beca de Tellus Cooperative tuve la oportunidad de ganar el viaje ✈️ y, además —gracias a su gestión— también el alojamiento 🏨. ¡Muy agradecido por este gran apoyo! 🙏",
    date: "2025-09",
    image: "/blog/hackathon.jpeg",
    tags: ["Hackathon", "Stellar", "IA", "HackMeridian", "Blockchain", "Brasil"],
    link: "https://lnkd.in/eVvDvY2p",
    slug: "hackmeridian-2025"
  },
  {
    id: 3,
    title: "Hackathon 48 horas en la Welcome Back Week 💻⏰",
    excerpt: "En la Welcome Back Week construimos en 48 horas un producto de IA 100% enfocado en el cliente: 'Onboarding en 1 click'. Con el equipo Hello World pasamos de 4 reuniones a un solo clic — y nos quedamos con el primer lugar.",
    content: "Hackathon 48 horas 💻⏰ Una de las cosas que pasaron en la Welcome Back Week: construir productos de IA enfocados 100% en el cliente. Junto a Javier formamos el team \"Hello World\" y nuestro foco fue el track de Onboarding. 📍 El dolor: configurar todas nuestras herramientas para un cliente nuevo podía tomar horas o días, tiempo en el que el cliente todavía no veía el valor completo de lo que ofrecemos. 🏆 El producto: Onboarding en 1 click. 🗺️ El flujo: eliges tu local en Google Maps, leemos tu web (si tienes) y la IA arma todo el setup inicial. 🎞️ El pitch: \"De 4 reuniones a 1 click\". Herramientas que conectamos en el setup: → Menú digital → Email marketing → Landing → Fidelización (tarjetas en Apple Wallet y Google Wallet) → Generación de QR y links con tracking (menús digitales, mesas, landing y links en general). ¿Qué viene? 🛠️ El 70–80% ya está funcional; ahora el desafío es llevarlo a producción: refactorizar, optimizar, definir los últimos detalles y sumar Instagram para los que no tienen web 👀. Y lo mejor: el equipo Hello World se quedó con el primer lugar 🏆. Gracias al team por la experiencia y los consejos 👏",
    date: "2026-04",
    image: "/blog/welcome-back-hackathon.jpg",
    video: "/blog/welcome-back-hackathon.mp4",
    tags: ["Hackathon", "IA", "Producto", "Onboarding", "WelcomeBack", "Full Stack"],
    slug: "welcome-back-hackathon"
  },
  {
    id: 1,
    title: "Ganamos en la Hackathon Hacker House 🇦🇷",
    excerpt: "Obtuvimos el segundo lugar en la Hackathon Hacker House Argentina con nuestro proyecto INTI: DAO Builder. Descubre nuestra experiencia y cómo fue participar en este increíble evento.",
    content: " Ganamos en la Hackathon Hacker House 🇦🇷 ! Con el equipo de INTI: DAO Builder , formado por Andrés Peña Mellado y Joaquin Farfan Torres estuvimos trabajando para lograr un objetivo el cual era poder llegar lo más lejos con nuestro proyecto en donde obtuvimos el 🥈2do lugar en la categoría de Stacks . Agradecer a la organización y a todos los que nos apoyaron desde Chile en este desafío. 🙏🏼Además, pudimos participar de LABITCONF realizada el 1 y 2 de Nov, en donde el evento estuvo con todo, charlas , ventures capital interesadas en web3, proyectos y todo lo que significa una conferencia de primer nivel 🤝🔥. Pueden revisar nuestro Pitch Deck y GitHub para conocer más sobre nuestra presentación en este evento. 💻 Data Room: Revisa la información escencial de INTI ✨ https://lnkd.in/e8iJFTGnPitch Deck:  Revisa nuestra propuesta de valor ✨ https://lnkd.in/eXRQ9jz4dApp : https://lnkd.in/eukaBkDi",
    date: "2024-10",
    image: "/blog/hackathon.jpeg",
    tags: ["Next.js", "React", "Web Development", "Blockchain", "Stacks", "Layer2Bitcoin", 'Full Stack', 'Software engeneer']
  },
  {
    id: 2,
    title: "Charla Universidad",
    excerpt: "Compartí mi experiencia como desarrollador en la Universidad Central de Chile, hablando sobre hackathons, proyectos en blockchain y mi trabajo en startups.",
    content: "'Camino hacia la Hackathon' ✍ fue el nombre de la charla realizada en la Universidad Central de Chile durante la semana de aniversario, donde varios egresados compartimos nuestras experiencias con los estudiantes de ingeniería. Agradezco a Alejandro Sanhueza y al Consejo de Egresados ICCI - UCEN por la invitación y la excelente coordinación de estos eventos 👏 En mi participación, hablé sobre mi recorrido como freelance, mi experiencia en el NASA Space Apps Challenge CH , donde desarrollamos una aplicación para localizar exoplanetas mediante un chatbot con inteligencia artificial, y también sobre mi última participación en la hackathon de Stacks en Argentina, en donde obtuvimos el 2.º lugar 🇨🇱 con el proyecto INTI: DAO Builder , una aplicación descentralizada en blockchain para la gobernanza de organizaciones. Además, compartí mi experiencia actual en Canasta Ahorro, una startup impulsada por Cencosud Ventures en donde me encuentro trabajando actualmente 🤝",
    date: "2024-11",
    image: "/blog/charla.jpeg",
    tags: ["Hackathon", "Charla", "Universidad", 'Full Stack', 'Software engeneer']
  }
].sort((a, b) => b.date.localeCompare(a.date))
