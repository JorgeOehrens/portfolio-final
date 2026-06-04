'use client'

import { Card, CardContent } from "@/app/components/ui/card"
import { MapPin, Globe2, Building2, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function Profile() {
  const { language } = useLanguage()
  const t = translations[language]

  const chips = [
    { icon: MapPin, label: 'Santiago, Chile' },
    { icon: Globe2, label: t.languages },
    { icon: Building2, label: 'WelcomeBack' },
    { icon: GraduationCap, label: 'Universidad Central De Chile' },
  ]

  return (
    <Card className="bg-card border-border overflow-hidden">
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="relative shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="Jorge Oehrens"
              width={132}
              height={132}
              className="rounded-2xl ring-1 ring-border"
            />
          </div>

          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t.availableToWork}
            </span>

            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Jorge Oehrens Benavides
            </h1>
            <p className="mt-1 font-medium text-primary">Software Engineer · Product Engineer</p>
            <p className="mt-3 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground">
              {t.profileBio}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {chips.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

