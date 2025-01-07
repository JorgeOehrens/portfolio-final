'use client'

import { Card, CardContent } from "@/app/components/ui/card"
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function OnlinePresence() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="text-purple-400">🌟</span>
          {t.followMe}
        </h2>
        
        <div className="space-y-3">
          <a 
            href="https://www.linkedin.com/in/jorge-oehrens/" 
            className="flex items-center gap-3 bg-secondary rounded-lg p-3 hover:bg-secondary/80 transition-colors"
          >
            <span className="text-xl">💼</span>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
       
          <a 
            href="https://github.com/JorgeOehrens" 
            className="flex items-center gap-3 bg-secondary rounded-lg p-3 hover:bg-secondary/80 transition-colors"
          >
            <span className="text-xl">💻</span>
            <span className="text-sm font-medium">GitHub</span>
          </a>
          
          <a 
            href="https://jorgeoehrens.com" 
            className="flex items-center gap-3 bg-secondary rounded-lg p-3 hover:bg-secondary/80 transition-colors"
          >
            <span className="text-xl">🌐</span>
            <span className="text-sm font-medium">Portfolio</span>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

