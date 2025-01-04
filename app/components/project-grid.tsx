'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
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
    title: "Webitae Portfolio",
    description: "Desarrollo de sitios web profesionales y modernos para empresas y emprendedores.",
    category: 'web',
    image: "/placeholder.svg?height=400&width=600",
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://instagram.com/webitae'
  },
  {
    id: 2,
    title: "NASA Space Apps Challenge",
    description: "Chatbot para localizar exoplanetas desarrollado durante el NASA Space Apps Challenge.",
    category: 'app',
    image: "/placeholder.svg?height=400&width=600",
    video: "https://example.com/nasa-challenge.mp4",
    technologies: ['Python', 'AI', 'Machine Learning']
  },
  {
    id: 3,
    title: "Stacks Governance dApp",
    description: "Aplicación descentralizada para gobernanza desarrollada durante la hackathon de Stacks.",
    category: 'blockchain',
    image: "/placeholder.svg?height=400&width=600",
    technologies: ['Solidity', 'Web3.js', 'React']
  },
  {
    id: 4,
    title: "Smart Sales CRM",
    description: "Sistema CRM personalizado para gestión de ventas y clientes.",
    category: 'web',
    image: "/placeholder.svg?height=400&width=600",
    technologies: ['Django', 'Python', 'PostgreSQL']
  },
  {
    id: 5,
    title: "Canasta Ahorro",
    description: "Plataforma de e-commerce respaldada por Cencosud Ventures.",
    category: 'app',
    image: "/placeholder.svg?height=400&width=600",
    technologies: ['Next.js', 'Node.js', 'AWS']
  },
  {
    id: 6,
    title: "Flux Solar Dashboard",
    description: "Microservicio para automatización de procesos en energía solar.",
    category: 'web',
    image: "/placeholder.svg?height=400&width=600",
    technologies: ['Python', 'FastAPI', 'Docker']
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
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter('all')}
            >
              {t.all}
            </Button>
            <Button
              variant={filter === 'web' ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter('web')}
            >
              {t.web}
            </Button>
            <Button
              variant={filter === 'app' ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter('app')}
            >
              {t.apps}
            </Button>
            <Button
              variant={filter === 'blockchain' ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter('blockchain')}
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

