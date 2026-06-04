'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog"
import { Badge } from "@/app/components/ui/badge"
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import SectionHeading from './section-heading'
import posthog from 'posthog-js'

type Hackathon = {
  id: number
  name: string
  description: string
  date: string
  image: string
  project: string
  achievement?: string
  technologies: string[]
  link?: string
}

const hackathons: Hackathon[] = [
  {
    id: 5,
    name: "Platanus Hack",
    description: "En el track de Human Enhancement construimos un sistema de visualización asistida para personas con discapacidad visual: una app que guía con vibraciones y describe en tiempo real lo que ve la cámara (detección de obstáculos, pasos peatonales y orientación).",
    date: "Noviembre 2025",
    image: "/blog/platanus-hack.png",
    project: "Visión asistida (Human Enhancement)",
    achievement: "Seleccionado",
    technologies: ['YOLOv8', 'Claude (Anthropic)', 'ElevenLabs', 'Expo / React Native', 'FastAPI', 'AWS'],
    link: 'https://hack.platan.us/'
  },
  {
    id: 4,
    name: "HackMeridian (Stellar)",
    description: "Becado por Tellus Cooperative para HackMeridian 2025 en Río de Janeiro. En el track de Composability presenté 'Pitch Perfect', una app de IA que da retroalimentación para pulir un pitch y mejorar las chances de financiamiento, conectada a Stellar.",
    date: "Septiembre 2025",
    image: "/blog/hackathon.jpeg",
    project: "Pitch Perfect",
    achievement: "Becado · Track Composability",
    technologies: ['Stellar', 'IA', 'React Native', 'FastAPI'],
    link: 'https://lnkd.in/eVvDvY2p'
  },
  {
    id: 1,
    name: "Hackathon Hacker House",
    description: "Desarrollo de INTI DAO una aplicación descentralizada (dApp) para gobernanza en la blockchain de Stacks.",
    date: "Noviembre 2024",
    image: "/blog/hackathon.jpeg",
    project: "DecentralizedVote",
    achievement: "Segundo Puesto	",
    technologies: ['Stacks', 'Clarity', 'React','Smart Contract'],
    link: 'https://dorahacks.io/hackathon/bitcoin-virtual-hackaton/detail'
  },
  {
    id: 2,
    name: "Stacks Hackathon Virtual",
    description: "Desarrollo de INTI DAO una aplicación descentralizada (dApp) para gobernanza en la blockchain de Stacks.",
    date: "Octubre 2024",
    image: "/hack/HackVirtual.png",
    project: "DecentralizedVote",
    achievement: "Clasificados TOP 5",
    technologies: ['Stacks', 'Clarity', 'React','Smart Contract'],
    link: 'https://dorahacks.io/hackathon/bitcoin-virtual-hackaton/detail'
  },
  {
    id: 3,
    name: "NASA Space Apps Challenge",
    description: "Desarrollé con el equipo un chatbot para localizar exoplanetas durante este desafío global organizado por la NASA.",
    date: "Octubre 2024",
    image: "/hack/spacechallenge.jpg",
    project: "ExoplanetFinder Chatbot",
    achievement: "MVP Terminado",
    technologies: ['Python', 'Natural Language Processing', 'Astronomy APIs','LangChain', 'Vite'],
    link: 'https://www.spaceappschallenge.org/'
  }
]

export default function HackathonGrid() {
  const [selectedHackathon, setSelectedHackathon] = useState<Hackathon | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const expandAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
  }

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <SectionHeading icon={Trophy} title={t.hackathonsTitle} eyebrow="03" />

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {hackathons.map((hackathon) => (
                  <motion.div
                    key={hackathon.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group cursor-pointer rounded-2xl border border-border/60 bg-secondary/30 p-3 transition-all hover:border-primary/40 hover:bg-secondary/60"
                    onClick={() => {
                      posthog.capture('hackathon_clicked', { hackathon_name: hackathon.name, achievement: hackathon.achievement })
                      setSelectedHackathon(hackathon)
                    }}
                  >
                    <div className="relative mb-3 aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={hackathon.image}
                        alt={hackathon.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mb-1 font-semibold">{hackathon.name}</h3>
                    <p className="mb-2 text-sm text-muted-foreground">{hackathon.date}</p>
                    <p className="mb-2 line-clamp-2 text-sm">{hackathon.project}</p>
                    {hackathon.achievement && (
                      <Badge variant="secondary" className="mb-2">
                        {hackathon.achievement}
                      </Badge>
                    )}
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>

        <Dialog open={!!selectedHackathon} onOpenChange={() => setSelectedHackathon(null)}>
          {selectedHackathon && (
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{selectedHackathon.name}</DialogTitle>
              </DialogHeader>
              <motion.div 
                className="mt-4"
                initial="hidden"
                animate="visible"
                variants={expandAnimation}
              >
                <div className="relative aspect-video mb-4">
                  <Image
                    src={selectedHackathon.image}
                    alt={selectedHackathon.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-muted-foreground mb-2">{t.date}: {selectedHackathon.date}</p>
                <h3 className="font-semibold mb-2">{t.project}: {selectedHackathon.project}</h3>
                <p className="text-muted-foreground mb-4">
                  {selectedHackathon.description}
                </p>
                {selectedHackathon.achievement && (
                  <Badge variant="secondary" className="mb-4">
                    {t.achievement}: {selectedHackathon.achievement}
                  </Badge>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  <p className="font-semibold w-full">{t.technologies}:</p>
                  {selectedHackathon.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {selectedHackathon.link && (
                  <Button
                    onClick={() => {
                      posthog.capture('hackathon_link_opened', { hackathon_name: selectedHackathon.name })
                      window.open(selectedHackathon.link, '_blank')
                    }}
                    className="w-full"
                  >
                    {t.viewDetails}
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


