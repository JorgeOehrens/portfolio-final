'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog"
import { Badge } from "@/app/components/ui/badge"
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Smartphone, FolderGit2, PlayCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { projects, type Project } from '../data/projects'
import SectionHeading from './section-heading'
import posthog from 'posthog-js'

type Filter = 'all' | 'web' | 'app' | 'blockchain' | 'data'

const FILTERS: { key: Filter; labelKey: 'all' | 'web' | 'apps' | 'blockchain' | 'dataFilter' }[] = [
  { key: 'all', labelKey: 'all' },
  { key: 'web', labelKey: 'web' },
  { key: 'app', labelKey: 'apps' },
  { key: 'blockchain', labelKey: 'blockchain' },
  { key: 'data', labelKey: 'dataFilter' },
]

export default function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

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
        <SectionHeading
          icon={FolderGit2}
          title={t.projectsTitle}
          eyebrow="02"
          action={
            <div className="flex flex-wrap justify-end gap-2">
              {FILTERS.map(({ key, labelKey }) => (
                <Button
                  key={key}
                  variant={filter === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => { posthog.capture('project_filter_changed', { filter: key }); setFilter(key) }}
                >
                  {t[labelKey]}
                </Button>
              ))}
            </div>
          }
        />

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group cursor-pointer rounded-2xl border border-border/60 bg-secondary/30 p-3 transition-all hover:border-primary/40 hover:bg-secondary/60"
                    onClick={() => {
                      posthog.capture('project_clicked', { project_title: project.title, project_category: project.category })
                      setSelectedProject(project)
                    }}
                  >
                    <div className="relative mb-3 aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {project.video && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                          <PlayCircle className="h-12 w-12 text-white" strokeWidth={1.5} />
                        </div>
                      )}
                    </div>
                    <h3 className="mb-1 font-semibold">{project.title}</h3>
                    <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                      {project.description[language]}
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
                  {selectedProject.description[language]}
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
                      onClick={() => {
                        posthog.capture('project_link_opened', { project_title: selectedProject.title, link_type: 'live' })
                        window.open(selectedProject.link, '_blank')
                      }}
                      className="w-full"
                    >
                      {t.viewProject}
                    </Button>
                  )}
                  {selectedProject.github && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        posthog.capture('project_link_opened', { project_title: selectedProject.title, link_type: 'github' })
                        window.open(selectedProject.github, '_blank')
                      }}
                      className="w-full gap-2"
                    >
                      <Github className="h-4 w-4" />
                      {t.viewCode}
                    </Button>
                  )}
                  {selectedProject.appStore && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        posthog.capture('project_link_opened', { project_title: selectedProject.title, link_type: 'app_store' })
                        window.open(selectedProject.appStore, '_blank')
                      }}
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

