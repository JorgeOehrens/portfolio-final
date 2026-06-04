'use client'

import { Card, CardContent } from "@/app/components/ui/card"
import { Share2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import SectionHeading from './section-heading'
import posthog from 'posthog-js'

export default function OnlinePresence() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <SectionHeading icon={Share2} title={t.followMe} />

        <div className="space-y-2">
          <a
            href="https://www.linkedin.com/in/jorge-oehrens/"
            className="flex items-center gap-3 bg-secondary rounded-lg p-3 hover:bg-secondary/80 transition-colors"
            onClick={() => posthog.capture('social_link_clicked', { platform: 'linkedin' })}
          >
            <span className="text-xl">💼</span>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>

          <a
            href="https://github.com/JorgeOehrens"
            className="flex items-center gap-3 bg-secondary rounded-lg p-3 hover:bg-secondary/80 transition-colors"
            onClick={() => posthog.capture('social_link_clicked', { platform: 'github' })}
          >
            <span className="text-xl">💻</span>
            <span className="text-sm font-medium">GitHub</span>
          </a>

          <a
            href="https://jorgeoehrens.com"
            className="flex items-center gap-3 bg-secondary rounded-lg p-3 hover:bg-secondary/80 transition-colors"
            onClick={() => posthog.capture('social_link_clicked', { platform: 'portfolio' })}
          >
            <span className="text-xl">🌐</span>
            <span className="text-sm font-medium">Portfolio</span>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

