'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const steps = [
  {
    icon: "💻",
    titleEn: "Full Stack Product Engineering",
    titleEs: "Ingeniería de Producto Full Stack",
  },
  {
    icon: "⚛️",
    titleEn: "TypeScript, React & Next.js",
    titleEs: "TypeScript, React y Next.js",
  },
  {
    icon: "🚀",
    titleEn: "Node.js & NestJS",
    titleEs: "Node.js y NestJS",
  },
  {
    icon: "☁️",
    titleEn: "AWS & Serverless (SST)",
    titleEs: "AWS y Serverless (SST)",
  },
  {
    icon: "🗄️",
    titleEn: "PostgreSQL & Drizzle",
    titleEs: "PostgreSQL y Drizzle",
  },
  {
    icon: "🤖",
    titleEn: "AI & LLMs (OpenAI · RAG)",
    titleEs: "IA y LLMs (OpenAI · RAG)",
  },
  {
    icon: "📊",
    titleEn: "Data Engineering (PySpark · Databricks)",
    titleEs: "Data Engineering (PySpark · Databricks)",
  },
  {
    icon: "🔗",
    titleEn: "Blockchain (Stacks · Stellar)",
    titleEs: "Blockchain (Stacks · Stellar)",
  }

]

export default function WorkProcess() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div>
      <p className="eyebrow mb-4">{t.workProcess}</p>
      <div className="divide-y divide-border">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3 py-3">
            <span className="text-xl">{step.icon}</span>
            <span className="text-sm font-medium">{language === 'en' ? step.titleEn : step.titleEs}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
