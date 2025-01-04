'use client'

import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Crown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6 text-center">
        <Crown className="w-12 h-12 mx-auto mb-4 text-purple-400" />
        <h2 className="text-xl font-semibold mb-2">{t.letsWorkTogether}</h2>
        <p className="text-sm text-zinc-400 mb-6">{language === 'en' ? "Let's Make Magic Happen Together!" : "¡Hagamos magia juntos!"}</p>
        
        <div className="space-y-3">
          <Button 
            variant="secondary" 
            className="w-full bg-secondary hover:bg-secondary/80"
            onClick={() => window.location.href = 'mailto:jorge.oehrens@gmail.com'}
          >
            {t.emailMe}
          </Button>
          <Button 
            variant="secondary" 
            className="w-full bg-secondary hover:bg-secondary/80"
            onClick={() => window.location.href = 'https://t.me/JorgeOeh'}
          >
            {t.telegramMe}
          </Button>
          <Button 
            variant="secondary" 
            className="w-full bg-secondary hover:bg-secondary/80"
            onClick={() => window.location.href = 'https://wa.me/56950653521'}
          >
            {t.whatsappMe}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

