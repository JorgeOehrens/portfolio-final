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
 
  ,
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
    image: "/hack/hackVirtual.png",
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
    achievement: "Finalista Global",
    technologies: ['Python', 'Natural Language Processing', 'Astronomy APIs','LangChain', 'Vite'],
    link: 'https://www.spaceappschallenge.org/'
  }
]

export default function HackathonGrid() {
  const [selectedHackathon, setSelectedHackathon] = useState<Hackathon | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const expandAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
  }

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="text-purple-400">🏆</span>
          {t.hackathonsTitle}
        </h2>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {isLoading
              ? Array(3).fill(0).map((_, index) => (
                  <HackathonSkeleton key={index} />
                ))
              : hackathons.map((hackathon) => (
                  <motion.div
                    key={hackathon.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedHackathon(hackathon)}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                      <Image
                        src={hackathon.image}
                        alt={hackathon.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-semibold mb-1">{hackathon.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{hackathon.date}</p>
                    <p className="text-sm line-clamp-2 mb-2">{hackathon.project}</p>
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
                    onClick={() => window.open(selectedHackathon.link, '_blank')}
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

function HackathonSkeleton() {
  return (
    <div className="space-y-3">
      <div className="aspect-video bg-muted rounded-lg animate-pulse" />
      <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
      <div className="h-3 bg-muted rounded w-1/2 animate-pulse" />
      <div className="h-3 bg-muted rounded w-2/3 animate-pulse" />
      <div className="h-5 w-24 bg-muted rounded animate-pulse" />
    </div>
  )
}

