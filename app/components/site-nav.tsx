'use client'

import posthog from 'posthog-js'
import { ThemeToggle } from './theme-toggle'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

const SECTIONS = [
  { id: 'projects', key: 'navProjects' },
  { id: 'experience', key: 'navExperience' },
  { id: 'hackathons', key: 'navHackathons' },
  { id: 'blog', key: 'navBlog' },
  { id: 'about', key: 'navAbout' },
] as const

export default function SiteNav() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const switchLanguage = (lang: 'es' | 'en') => {
    posthog.capture('language_switched', { language: lang, previous_language: language })
    setLanguage(lang)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border border-border bg-background/70 py-2 pl-5 pr-2 shadow-lg shadow-black/5 backdrop-blur-xl">
        {/* Marca */}
        <a
          href="#top"
          className="flex items-center gap-1.5 font-display text-lg font-semibold tracking-[-0.02em]"
          aria-label="Jorge Oehrens"
        >
          <span aria-hidden>✦</span>
          Jorge.
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
        <div className="flex items-center gap-1.5">
          <div className="flex items-center rounded-full border border-border p-0.5">
            <button
              onClick={() => switchLanguage('es')}
              aria-label="Cambiar a Español"
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                language === 'es' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => switchLanguage('en')}
              aria-label="Switch to English"
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                language === 'en' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>
          <ThemeToggle />
          <a
            href="#contact"
            onClick={() => posthog.capture('nav_section_clicked', { section: 'contact', location: 'nav' })}
            className="hidden items-center rounded-full border border-border px-4 py-1.5 text-sm font-medium transition-colors hover:bg-secondary sm:inline-flex"
          >
            {t.sayHi}
          </a>
        </div>
      </nav>
    </header>
  )
}
