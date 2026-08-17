"use client"

import { useState } from 'react'
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const degrees = [
  {
    title: "Ingeniería civil en computación e informática",
    institution: "Universidad Central De Chile",
    year: "2024",
    file: "/degrees/ingenieria.pdf"
  },
  {
    title: "Licenciado en Ciencias de la ingeniería",
    institution: "Universidad Central De Chile",
    year: "2022",
    file: "/degrees/licenciatura.pdf"
  }
]

export default function DegreesViewer() {
  const [selectedDegree, setSelectedDegree] = useState(degrees[0])
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="rounded-3xl border border-border bg-card p-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">{t.academicDegrees}</h3>
          <div className="flex flex-wrap justify-end gap-2">
            {degrees.map((degree, index) => (
              <Button
                key={index}
                variant={selectedDegree === degree ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setSelectedDegree(degree)}
              >
                {degree.year}
              </Button>
            ))}
          </div>
        </div>

        {/* Iframe para visualizar PDFs */}
        <div className="overflow-hidden rounded-xl border border-border bg-muted">
          <iframe
            src={selectedDegree.file}
            title={selectedDegree.title}
            className="h-[55vh] min-h-[360px] w-full"
          />
        </div>

        {/* Información adicional */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-medium">{selectedDegree.title}</h3>
            <p className="text-sm text-muted-foreground">
              {selectedDegree.institution}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={selectedDegree.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              {language === 'en' ? 'Open' : 'Abrir'}
            </a>
            <Badge variant="secondary">{selectedDegree.year}</Badge>
          </div>
        </div>
    </div>
  )
}
