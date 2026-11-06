'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function Stats() {
  const { language } = useLanguage()
  const t = translations[language]

  const stats = [
    { value: '300', suffix: '+', label: t.statRestaurants },
    { value: '$350M', suffix: '+', label: t.statTransacted },
    { value: '900', suffix: '+', label: t.statEducari },
  ]

  return (
    <div className="grid grid-cols-3 gap-6 border-t border-border pt-6">
      {stats.map(({ value, suffix, label }) => (
        <div key={label}>
          <div className="font-display text-4xl font-semibold leading-none tracking-[-0.02em] sm:text-5xl">
            {value}
            <span className="text-muted-foreground">{suffix}</span>
          </div>
          <div className="eyebrow mt-3 !text-[10px] leading-snug sm:!text-xs">{label}</div>
        </div>
      ))}
    </div>
  )
}
