'use client'

import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Briefcase, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { experiences } from '../data/experience'
import SectionHeading from './section-heading'

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6 sm:p-8">
        <SectionHeading icon={Briefcase} title={t.experience} eyebrow="01" />

        {/* Timeline */}
        <div className="relative">
          {/* línea vertical */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-border" aria-hidden />

          <div className="space-y-8">
            {experiences.map((exp) => {
              const isCurrent = /presente|present/i.test(exp.period.es)
              return (
                <div key={exp.id} className="relative pl-12">
                  {/* punto */}
                  <span
                    className={`absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 ${
                      isCurrent
                        ? 'border-primary bg-primary/15'
                        : 'border-border bg-secondary'
                    }`}
                  >
                    <Briefcase className={`h-4 w-4 ${isCurrent ? 'text-primary' : 'text-muted-foreground'}`} />
                  </span>

                  <div className="rounded-2xl border border-border/60 bg-secondary/40 p-4 transition-colors hover:border-primary/30 hover:bg-secondary/70">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold">{exp.role}</h3>
                          {isCurrent && (
                            <Badge className="bg-primary/15 text-primary border-primary/30 text-[10px] px-2 py-0">
                              {t.current}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-primary flex items-center gap-1 flex-wrap">
                          {exp.link ? (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline inline-flex items-center gap-1"
                            >
                              {exp.company}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ) : (
                            exp.company
                          )}
                          {exp.location && (
                            <span className="text-muted-foreground">· {exp.location}</span>
                          )}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground shrink-0 sm:mt-1 sm:whitespace-nowrap">
                        {exp.period[language]}
                      </span>
                    </div>

                    <p className="text-sm text-foreground/90 mt-3">{exp.description[language]}</p>

                    <ul className="mt-3 space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-0.5">▹</span>
                          <span>{h[language]}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.stack.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
