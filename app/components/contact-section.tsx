'use client'

import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Mail, Send, MessageCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import posthog from 'posthog-js'

export default function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Card className="border-primary/20 bg-gradient-to-b from-primary/10 to-card">
      <CardContent className="p-6 text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25">
          <Mail className="h-6 w-6" />
        </span>
        <h2 className="font-display text-xl font-semibold tracking-[-0.02em]">{t.letsWorkTogether}</h2>
        <p className="mb-6 mt-1 text-sm text-muted-foreground">{language === 'en' ? "Let's make magic happen together!" : "¡Hagamos magia juntos!"}</p>

        <div className="space-y-2.5">
          <Button
            className="w-full"
            onClick={() => {
              posthog.capture('contact_clicked', { method: 'email', location: 'contact_section' })
              window.location.href = 'mailto:jorge.oehrens@gmail.com'
            }}
          >
            <Mail className="h-4 w-4" />
            {t.emailMe}
          </Button>
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => {
              posthog.capture('contact_clicked', { method: 'telegram', location: 'contact_section' })
              window.location.href = 'https://t.me/JorgeOeh'
            }}
          >
            <Send className="h-4 w-4" />
            {t.telegramMe}
          </Button>
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => {
              posthog.capture('contact_clicked', { method: 'whatsapp', location: 'contact_section' })
              window.location.href = 'https://wa.me/56950653521'
            }}
          >
            <MessageCircle className="h-4 w-4" />
            {t.whatsappMe}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

