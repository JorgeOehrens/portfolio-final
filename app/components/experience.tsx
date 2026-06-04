'use client'

import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Briefcase, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { experiences } from '../data/experience'

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
          <span className="text-purple-400">💼</span>
          {t.experience}
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* línea vertical */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-border" aria-hidden />

          <div className="space-y-8">
            {experiences.map((exp) => {
              const isCurrent = /presente|present/i.test(exp.period)
              return (
                <div key={exp.id} className="relative pl-12">
                  {/* punto */}
                  <span
                    className={`absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 ${
                      isCurrent
                        ? 'border-purple-400 bg-purple-400/15'
                        : 'border-border bg-secondary'
                    }`}
                  >
                    <Briefcase className={`h-4 w-4 ${isCurrent ? 'text-purple-400' : 'text-muted-foreground'}`} />
                  </span>

                  <div className="rounded-xl border border-border/60 bg-secondary/40 p-4 transition-colors hover:bg-secondary/70">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold">{exp.role}</h3>
                          {isCurrent && (
                            <Badge className="bg-purple-400/15 text-purple-300 border-purple-400/30 text-[10px] px-2 py-0">
                              Actual
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-purple-400 flex items-center gap-1">
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
                      <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0 sm:mt-1">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-foreground/90 mt-3">{exp.description}</p>

                    <ul className="mt-3 space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-purple-400 mt-0.5">▹</span>
                          <span>{h}</span>
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
