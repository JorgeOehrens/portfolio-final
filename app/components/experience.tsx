'use client'

import { Badge } from "@/app/components/ui/badge"
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { experiences } from '../data/experience'
import SectionHeading from './section-heading'

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div>
      <SectionHeading eyebrow="EXPERIENCE" title={t.experience} subtitle={t.experienceSub} />

      <div className="divide-y divide-border">
        {experiences.map((exp) => {
          const isCurrent = /presente|present/i.test(exp.period.es)
          return (
            <div key={exp.id} className="grid grid-cols-1 gap-4 py-10 first:pt-0 sm:grid-cols-[220px,1fr] sm:gap-10">
              {/* Meta a la izquierda */}
              <div className="eyebrow leading-relaxed">
                <p>{exp.period[language]}</p>
                {exp.location && <p className="mt-1">{exp.location}</p>}
                {isCurrent && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {t.current}
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  {exp.role}
                </h3>
                <p className="mt-1 text-base text-muted-foreground">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-foreground hover:underline"
                    >
                      {exp.company}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="text-foreground">{exp.company}</span>
                  )}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {exp.description[language]}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-0.5 text-foreground/50">—</span>
                      <span>{h[language]}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.stack.map((tech, i) => (
                    <Badge key={i} variant="outline" className="rounded-full font-mono text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
