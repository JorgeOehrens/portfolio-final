'use client'

import { Card, CardContent } from "@/app/components/ui/card"
import { Github, Calendar, Trophy } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function Stats() {
  const { language } = useLanguage()
  const t = translations[language]

  const stats = [
    { icon: Github, value: '113', suffix: '+', label: t.satisfiedPartners },
    { icon: Calendar, value: '6', suffix: '+', label: t.certificates },
    { icon: Trophy, value: '5', suffix: '+', label: t.hackathonsTitle },
  ]

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map(({ icon: Icon, value, suffix, label }) => (
        <Card key={label} className="bg-card border-border">
          <CardContent className="flex flex-col gap-2 p-4">
            <Icon className="h-4 w-4 text-primary" />
            <div className="font-display text-2xl font-semibold leading-none tracking-[-0.02em] sm:text-3xl">
              {value}
              <span className="text-primary">{suffix}</span>
            </div>
            <div className="text-xs leading-tight text-muted-foreground">{label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
