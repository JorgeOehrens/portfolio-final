'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import posthog from 'posthog-js'

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jorge-oehrens/', platform: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/JorgeOehrens', platform: 'github' },
  { label: 'Portfolio', href: 'https://jorge5.dev', platform: 'portfolio' },
]

const CONTACTS = [
  { label: 'Telegram', href: 'https://t.me/JorgeOeh', method: 'telegram' },
  { label: 'WhatsApp', href: 'https://wa.me/56950653521', method: 'whatsapp' },
]

export default function SiteFooter() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-5xl font-semibold tracking-[-0.03em] sm:text-7xl">
          {t.sayHello}
        </h2>
        <p className="mt-3 max-w-md text-muted-foreground">
          {language === 'en' ? "Let's make magic happen together!" : '¡Hagamos magia juntos!'}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="eyebrow mb-3">Email</p>
            <a
              href="mailto:jorge.oehrens@gmail.com"
              onClick={() => posthog.capture('contact_clicked', { method: 'email', location: 'footer' })}
              className="text-sm font-medium hover:underline"
            >
              jorge.oehrens@gmail.com
            </a>
            <div className="mt-3 flex flex-col gap-2">
              {CONTACTS.map((c) => (
                <a
                  key={c.method}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => posthog.capture('contact_clicked', { method: c.method, location: 'footer' })}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {c.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">{t.elsewhere}</p>
            <div className="flex flex-col gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => posthog.capture('social_link_clicked', { platform: s.platform })}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">{t.basedIn}</p>
            <p className="text-sm text-muted-foreground">Santiago, Chile 🇨🇱</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Jorge Oehrens</p>
          <p>{t.designedAndBuilt}</p>
        </div>
      </div>
    </footer>
  )
}
