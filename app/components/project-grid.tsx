'use client'

import { useState } from 'react'
import { Button } from "@/app/components/ui/button"
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog"
import { Badge } from "@/app/components/ui/badge"
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Smartphone, ArrowUpRight, PlayCircle } from 'lucide-react'
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

const metaLine = (p: Project) =>
  Array.from(new Set([p.category, ...(p.categories ?? [])])).join(', ') + ' · ' + p.technologies.slice(0, 2).join(', ')

export default function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const featured = projects.filter(p => p.featured).sort((a, b) => b.id - a.id)
  const rest = projects
    .filter(p => !p.featured)
    .filter(p => filter === 'all' || p.category === filter || p.categories?.includes(filter))
    .sort((a, b) => b.id - a.id)

  const openProject = (project: Project) => {
    posthog.capture('project_clicked', { project_title: project.title, project_category: project.category })
    setSelectedProject(project)
  }

  return (
    <div>
      <SectionHeading eyebrow="PORTFOLIO" title={t.projectsTitle} subtitle={t.projectsSub} />

      {/* Destacados: cards grandes tipo case study */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        {featured.map((project) => (
          <button
            key={project.id}
            onClick={() => openProject(project)}
            className="group block text-left"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-secondary/50">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              )}
            </div>
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="eyebrow">{metaLine(project)}</p>
              <span className="hidden items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-foreground sm:inline-flex">
                {t.viewProject}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.description[language]}
            </p>
          </button>
        ))}
      </div>

      {/* Resto: grilla compacta con filtros */}
      <div className="mt-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            {t.moreProjects}
          </h3>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(({ key, labelKey }) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => { posthog.capture('project_filter_changed', { filter: key }); setFilter(key) }}
              >
                {t[labelKey]}
              </Button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {rest.map((project) => (
              <motion.button
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group block text-left"
                onClick={() => openProject(project)}
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-secondary/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {project.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <PlayCircle className="h-10 w-10 text-white" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
                <p className="eyebrow mt-4">{metaLine(project)}</p>
                <h4 className="mt-1.5 font-display text-lg font-semibold tracking-[-0.01em]">
                  {project.title}
                </h4>
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description[language]}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal con toda la información del proyecto */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl tracking-[-0.02em]">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    controls
                    autoPlay
                    muted
                    className="h-full w-full"
                  />
                ) : (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <p className="mb-4 text-muted-foreground">
                {selectedProject.description[language]}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="font-mono text-xs">
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
                    className="w-full rounded-full"
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
                    className="w-full gap-2 rounded-full"
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
                    className="w-full gap-2 rounded-full"
                  >
                    <Smartphone className="h-4 w-4" />
                    {t.downloadApp}
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
