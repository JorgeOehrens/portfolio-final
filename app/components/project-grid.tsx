'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog"
import { Badge } from "@/app/components/ui/badge"
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Smartphone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { projects, type Project } from '../data/projects'

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

  const filteredProjects = projects
    .filter(
      project =>
        filter === 'all' ||
        project.category === filter ||
        project.categories?.includes(filter)
    )
    .sort((a, b) => b.id - a.id)

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
                <div className="flex flex-col gap-2">
                  {selectedProject.link && (
                    <Button
                      onClick={() => window.open(selectedProject.link, '_blank')}
                      className="w-full"
                    >
                      {t.viewProject}
                    </Button>
                  )}
                  {selectedProject.github && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.github, '_blank')}
                      className="w-full gap-2"
                    >
                      <Github className="h-4 w-4" />
                      {t.viewCode}
                    </Button>
                  )}
                  {selectedProject.appStore && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.appStore, '_blank')}
                      className="w-full gap-2"
                    >
                      <Smartphone className="h-4 w-4" />
                      {t.downloadApp}
                    </Button>
                  )}
                </div>
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

