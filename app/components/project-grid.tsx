'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog"
import { Badge } from "@/app/components/ui/badge"
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

type Project = {
  id: number
  title: string
  description: string
  category: 'web' | 'app' | 'blockchain'
  image: string
  video?: string
  technologies: string[]
  link?: string
}

const projects: Project[] = [
 
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
  }
  ,
  {
    id: 11,
    title: "El Barometro",
    description: "Sitio web blog, integrado a sistema de votación",
    category: 'app',
    image: "/projects/elbarometro.png",
    video:"/projects/elbarometro2.mov",
    technologies: ['PHP', 'Wordpress' , 'Cpanel' ]
  }
]

export default function ProjectGrid() {
  const [filter, setFilter] = useState<'all' | 'web' | 'app' | 'blockchain'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category === filter
  )

  const expandAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
  }

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-purple-400">💼</span>
            {t.projectsTitle}
          </h2>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
  <Button
    variant={filter === 'all' ? "default" : "outline"}
    size="sm"
    onClick={() => setFilter('all')}
    className="min-w-[100px] text-center"
  >
    {t.all}
  </Button>
  <Button
    variant={filter === 'web' ? "default" : "outline"}
    size="sm"
    onClick={() => setFilter('web')}
    className="min-w-[100px] text-center"
  >
    {t.web}
  </Button>
  <Button
    variant={filter === 'app' ? "default" : "outline"}
    size="sm"
    onClick={() => setFilter('app')}
    className="min-w-[100px] text-center"
  >
    {t.apps}
  </Button>
  <Button
    variant={filter === 'blockchain' ? "default" : "outline"}
    size="sm"
    onClick={() => setFilter('blockchain')}
    className="min-w-[100px] text-center"
  >
    {t.blockchain}
  </Button>
</div>

        </div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {isLoading
              ? Array(6).fill(0).map((_, index) => (
                  <ProjectSkeleton key={index} />
                ))
              : filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      {project.video && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-white text-4xl">▶️</span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <motion.div 
                className="mt-4"
                initial="hidden"
                animate="visible"
                variants={expandAnimation}
              >
                <div className="relative aspect-video mb-4">
                  {selectedProject.video ? (
                    <video
                      src={selectedProject.video}
                      controls
                      className="w-full h-full rounded-lg"
                    />
                  ) : (
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  )}
                </div>
                <p className="text-muted-foreground mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {selectedProject.link && (
                  <Button
                    onClick={() => window.open(selectedProject.link, '_blank')}
                    className="w-full"
                  >
                    {t.viewProject}
                  </Button>
                )}
              </motion.div>
            </DialogContent>
          )}
        </Dialog>
      </CardContent>
    </Card>
  )
}

function ProjectSkeleton() {
  return (
    <div className="space-y-3">
      <div className="aspect-video bg-muted rounded-lg animate-pulse" />
      <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
      <div className="h-3 bg-muted rounded w-1/2 animate-pulse" />
      <div className="flex gap-2">
        <div className="h-5 w-16 bg-muted rounded animate-pulse" />
        <div className="h-5 w-16 bg-muted rounded animate-pulse" />
        <div className="h-5 w-16 bg-muted rounded animate-pulse" />
      </div>
    </div>
  )
}

