'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, Download } from 'lucide-react'
import posthog from 'posthog-js'
import Image from 'next/image'
import SiteNav from './components/site-nav'
import Stats from './components/stats'
import Profile from './components/profile'
import ProjectGrid from './components/project-grid'
import HackathonGrid from './components/hackathon-grid'
import WorkProcess from './components/work-process'
import CertificatesViewer from './components/certificates-viewer'
import DegreesViewer from './components/degrees-viewer'
import Experience from './components/experience'
import SiteFooter from './components/site-footer'
import { motion } from 'framer-motion'
import { useLanguage } from './contexts/LanguageContext'
import { translations } from './utils/translations'
import BlogPreview from '@/app/components/blog-preview'

// Revelado estilo referencia: fade + blur-in al entrar en viewport.
const reveal = {
  initial: { opacity: 0, y: 32, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
}

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur-xl transition-colors hover:bg-secondary"
    >
      <ArrowUp className="h-4 w-4" />
    </a>
  )
}

export default function Portfolio() {
  const { language } = useLanguage()
  const t = translations[language]

  const chips = [
    { icon: '🌎', label: 'Santiago, Chile' },
    { icon: '🌍', label: t.languages },
    { icon: '💼', label: 'WelcomeBack' },
    { icon: '🎓', label: 'Universidad Central De Chile' },
  ]

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero full-bleed con video */}
      <Profile />

      <main className="mx-auto max-w-7xl space-y-28 px-4 pb-28 pt-24 sm:space-y-36 sm:px-6 sm:pt-32">
        <motion.section id="projects" className="scroll-mt-28" {...reveal}>
          <ProjectGrid />
        </motion.section>

        <motion.section id="experience" className="scroll-mt-28" {...reveal}>
          <Experience />
        </motion.section>

        <motion.section id="hackathons" className="scroll-mt-28" {...reveal}>
          <HackathonGrid />
        </motion.section>

        {/* About: bio + chips + stats + skills + certificados */}
        <motion.section id="about" className="scroll-mt-28" {...reveal}>
          <p className="eyebrow mb-6">ABOUT</p>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr,1fr]">
            <div>
              <div className="flex items-start gap-5">
                <Image
                  src="/images/logo.jpeg"
                  alt="Jorge Oehrens"
                  width={72}
                  height={72}
                  className="rounded-2xl ring-1 ring-border"
                />
                <h2 className="font-display text-2xl font-semibold leading-snug tracking-[-0.02em] sm:text-3xl">
                  Jorge Oehrens Benavides
                  <span className="block text-muted-foreground">Software Engineer · Product & Infrastructure</span>
                </h2>
              </div>
              <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.profileBio}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {chips.map(({ icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium"
                  >
                    <span>{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
              <a
                href="/cv/JorgeOehrensCV.pdf"
                download="JorgeOehrensCV.pdf"
                onClick={() => posthog.capture('cv_downloaded')}
                className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Download className="h-4 w-4" />
                {t.resume}
              </a>
              <div className="mt-10">
                <Stats />
              </div>
            </div>
            <WorkProcess />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <CertificatesViewer />
            <DegreesViewer />
          </div>
        </motion.section>

        <motion.section id="blog" className="scroll-mt-28" {...reveal}>
          <BlogPreview />
        </motion.section>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  )
}
