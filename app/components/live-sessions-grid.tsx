'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog"
import { Badge } from "@/app/components/ui/badge"
import { motion, AnimatePresence } from 'framer-motion'
import { Radio, PlayCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import SectionHeading from './section-heading'
import posthog from 'posthog-js'

/** Texto traducible: se muestra `es` o `en` según el idioma activo. */
type Localized = { es: string; en: string }

type LiveSession = {
  id: number
  title: Localized
  description: Localized
  /** Fecha legible en cada idioma, p. ej. { es: "Noviembre 2024", en: "November 2024" }. */
  date: Localized
  /** Plataforma o lugar: "YouTube", "Twitch", "Universidad Central", etc. */
  platform: string
  image: string
  /** ID de YouTube (lo que va después de v=). Si existe, se incrusta el reproductor en el modal. */
  youtubeId?: string
  /** Enlace externo (grabación, evento, canal). */
  link?: string
  tags: string[]
}

// Para agregar una sesión nueva, copia un objeto y rellena `es`/`en` en cada campo.
const liveSessions: LiveSession[] = [
  {
    id: 1,
    title: {
      es: "Camino hacia la Hackathon",
      en: "The Road to the Hackathon",
    },
    description: {
      es: "Charla en vivo en la Universidad Central de Chile durante la semana de aniversario. Compartí mi recorrido como freelance, el NASA Space Apps Challenge donde desarrollamos un chatbot con IA para localizar exoplanetas, la hackathon de Stacks en Argentina (2.º lugar con INTI: DAO Builder) y mi experiencia en una startup impulsada por Cencosud Ventures.",
      en: "Live talk at Universidad Central de Chile during anniversary week. I shared my path as a freelancer, the NASA Space Apps Challenge where we built an AI chatbot to locate exoplanets, the Stacks hackathon in Argentina (2nd place with INTI: DAO Builder), and my experience at a startup backed by Cencosud Ventures.",
    },
    date: { es: "Noviembre 2024", en: "November 2024" },
    platform: "Universidad Central de Chile",
    image: "/blog/charla.jpeg",
    tags: ["Charla", "Hackathon", "IA", "Blockchain"],
  },
]

export default function LiveSessionsGrid() {
  const [selectedSession, setSelectedSession] = useState<LiveSession | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const expandAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
  }

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <SectionHeading icon={Radio} title={t.liveSessionsTitle} />

        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {liveSessions.map((session) => (
                  <motion.div
                    key={session.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group cursor-pointer rounded-2xl border border-border/60 bg-secondary/30 p-3 transition-all hover:border-primary/40 hover:bg-secondary/60"
                    onClick={() => {
                      posthog.capture('live_session_clicked', { session_title: session.title.en, platform: session.platform })
                      setSelectedSession(session)
                    }}
                  >
                    <div className="relative mb-3 aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={session.image}
                        alt={session.title[language]}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {session.youtubeId && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity group-hover:bg-black/30">
                          <PlayCircle className="h-12 w-12 text-white" strokeWidth={1.5} />
                        </div>
                      )}
                    </div>
                    <h3 className="mb-1 font-semibold">{session.title[language]}</h3>
                    <p className="mb-2 text-sm text-muted-foreground">{session.date[language]}</p>
                    <p className="mb-2 line-clamp-2 text-sm">{session.description[language]}</p>
                    <Badge variant="secondary" className="mb-2">
                      {session.platform}
                    </Badge>
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>

        <Dialog open={!!selectedSession} onOpenChange={() => setSelectedSession(null)}>
          {selectedSession && (
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{selectedSession.title[language]}</DialogTitle>
              </DialogHeader>
              <motion.div
                className="mt-4"
                initial="hidden"
                animate="visible"
                variants={expandAnimation}
              >
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  {selectedSession.youtubeId ? (
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${selectedSession.youtubeId}`}
                      title={selectedSession.title[language]}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <Image
                      src={selectedSession.image}
                      alt={selectedSession.title[language]}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <p className="text-muted-foreground mb-2">{t.date}: {selectedSession.date[language]}</p>
                <h3 className="font-semibold mb-2">{t.liveSessionPlatform}: {selectedSession.platform}</h3>
                <p className="text-muted-foreground mb-4">
                  {selectedSession.description[language]}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <p className="font-semibold w-full">{t.technologies}:</p>
                  {selectedSession.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {selectedSession.link && (
                  <Button
                    onClick={() => {
                      posthog.capture('live_session_link_opened', { session_title: selectedSession.title.en })
                      window.open(selectedSession.link, '_blank')
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
