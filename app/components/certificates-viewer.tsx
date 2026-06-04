"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { Award, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import SectionHeading from './section-heading'
import posthog from 'posthog-js'

const certificates = [
  {
    title: "Blockchain Fundamentals Certification",
    issuer: "Chainlink Labs",
    date: "2025",
    file: "/certificates/fundamentalsBlockchain.pdf"
  },
  {
    title: "NASA Space Apps Challenge",
    issuer: "NASA",
    date: "2024",
    file: "/certificates/NASA Space Apps Challenge.pdf"
  }
]

export default function CertificatesViewer() {
  const [selectedCert, setSelectedCert] = useState(certificates[0])
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <SectionHeading
          icon={Award}
          title={t.certificatesTitle}
          action={
            <div className="flex flex-wrap justify-end gap-2">
              {certificates.map((cert, index) => (
                <Button
                  key={index}
                  variant={selectedCert === cert ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    posthog.capture('certificate_viewed', { certificate_title: cert.title, issuer: cert.issuer })
                    setSelectedCert(cert)
                  }}
                >
                  {cert.issuer}
                </Button>
              ))}
            </div>
          }
        />

        <div className="overflow-hidden rounded-xl border border-border bg-muted">
          <iframe
            src={selectedCert.file}
            title={selectedCert.title}
            className="h-[55vh] min-h-[360px] w-full"
          />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-medium">{selectedCert.title}</h3>
            <p className="text-sm text-muted-foreground">{selectedCert.issuer}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={selectedCert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              {language === 'en' ? 'Open' : 'Abrir'}
            </a>
            <Badge variant="secondary">{selectedCert.date}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

