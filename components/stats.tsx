'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Flag, Users, Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function Stats() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Flag className="h-5 w-5 text-purple-400" />
            <div>
              <div className="text-4xl font-bold">20<span className="text-purple-400">+</span></div>
              <div className="text-sm text-muted-foreground">{t.projectsTitle}</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Users className="h-5 w-5 text-purple-400" />
            <div>
              <div className="text-4xl font-bold">20<span className="text-purple-400">+</span></div>
              <div className="text-sm text-muted-foreground">{t.satisfiedPartners}</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Star className="h-5 w-5 text-purple-400" />
            <div>
              <div className="text-4xl font-bold">3<span className="text-purple-400">+</span></div>
              <div className="text-sm text-muted-foreground">{t.certificates}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

