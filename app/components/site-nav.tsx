'use client'

import { useEffect, useState } from 'react'
import posthog from 'posthog-js'
import { ThemeToggle } from './theme-toggle'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const SECTIONS = [
  { id: 'projects', key: 'navProjects' },
  { id: 'experience', key: 'navExperience' },
  { id: 'hackathons', key: 'navHackathons' },
  { id: 'sessions', key: 'navSessions' },
  { id: 'blog', key: 'navBlog' },
  { id: 'contact', key: 'navContact' },
] as const

export default function SiteNav() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLanguage = (lang: 'es' | 'en') => {
    posthog.capture('language_switched', { language: lang, previous_language: language })
    setLanguage(lang)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Marca */}
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-lg font-extrabold tracking-tight"
          aria-label="Jorge Oehrens"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            JO
          </span>
          <span className="hidden sm:inline">Jorge Oehrens</span>
        </a>

        {/* Anclas (desktop) */}
        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => posthog.capture('nav_section_clicked', { section: s.id })}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {t[s.key]}
              </a>
            </li>
          ))}
        </ul>

        {/* Controles */}
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-border bg-secondary/50 p-0.5">
            <button
              onClick={() => switchLanguage('es')}
              aria-label="Cambiar a Español"
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                language === 'es' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => switchLanguage('en')}
              aria-label="Switch to English"
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
