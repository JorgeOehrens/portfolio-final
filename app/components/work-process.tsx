'use client'

import { Card, CardContent } from "@/app/components/ui/card"
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const steps = [
  {
    icon: "💻",
    titleEn: "Full Stack Development",
    titleEs: "Desarrollo Full Stack",
  },
  {
    icon: "⚛️",
    titleEn: "React & Next.js",
    titleEs: "React y Next.js",
  },
  {
    icon: "🐍",
    titleEn: "Python & Django",
    titleEs: "Python y Django",
  },
  {
    icon: "☁️",
    titleEn: "AWS & Cloud",
    titleEs: "AWS y Cloud",
  },
  {
    icon: "🔗",
    titleEn: "Blockchain & Solidity",
    titleEs: "Blockchain y Solidity",
  },
  {
    icon: "🕹️",
    titleEn: "Rust",
    titleEs: "Rust",
  },
  {
    icon: "🎞️",
    titleEn: "Node.js & Express.js",
    titleEs:"Node.js & Express.js",
  }

]

export default function WorkProcess() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="text-purple-400">⭐</span>
          {t.workProcess}
        </h2>
        
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-secondary rounded-lg p-3"
            >
              <span className="text-xl">{step.icon}</span>
              <span className="text-sm font-medium">{language === 'en' ? step.titleEn : step.titleEs}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

