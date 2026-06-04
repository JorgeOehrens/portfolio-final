'use client'

import { Download, MessageCircle } from 'lucide-react'
import posthog from 'posthog-js'
import { Button } from "@/app/components/ui/button"
import SiteNav from './components/site-nav'
import Stats from './components/stats'
import Profile from './components/profile'
import ProjectGrid from './components/project-grid'
import HackathonGrid from './components/hackathon-grid'
import LiveSessionsGrid from './components/live-sessions-grid'
import WorkProcess from './components/work-process'
import OnlinePresence from './components/online-presence'
import ContactSection from './components/contact-section'
import CertificatesViewer from './components/certificates-viewer'
import DegreesViewer from './components/degrees-viewer'
import Experience from './components/experience'
import { motion } from 'framer-motion'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { translations } from './utils/translations'
import BlogPreview from '@/app/components/blog-preview'

// Revelado al entrar en viewport (robusto en hidratación SSR). El hero entra al cargar.
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
}

function PortfolioContent() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <main
        id="top"
        className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-8 sm:px-6 sm:space-y-24"
      >
        {/* Hero: perfil + acciones */}
        <motion.section className="bg-hero-glow scroll-mt-24" {...reveal}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr,1fr]">
            <Profile />
            <div className="flex flex-col gap-4">
              <a
                href="/cv/JorgeOehrensCV.pdf"
                download="JorgeOehrensCV.pdf"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-base font-semibold text-background shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:shadow-[0_14px_30px_hsl(var(--brand)/0.3)] active:scale-[0.98]"
                onClick={() => posthog.capture('cv_downloaded')}
              >
                <Download className="h-4 w-4" />
                {t.resume}
              </a>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => {
                  posthog.capture('nav_section_clicked', { section: 'contact', location: 'hero' })
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <MessageCircle className="h-4 w-4" />
                {t.getInTouch}
              </Button>
              <Stats />
            </div>
          </div>
        </motion.section>

        <motion.section id="experience" className="scroll-mt-24" {...reveal}>
          <Experience />
        </motion.section>

        <motion.section id="projects" className="scroll-mt-24" {...reveal}>
          <ProjectGrid />
        </motion.section>

        <motion.section id="hackathons" className="scroll-mt-24" {...reveal}>
          <HackathonGrid />
        </motion.section>

        <motion.section id="sessions" className="scroll-mt-24" {...reveal}>
          <LiveSessionsGrid />
        </motion.section>

        {/* Certificados + proceso/contacto */}
        <motion.section className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr,1fr]" {...reveal}>
          <div className="space-y-6">
            <CertificatesViewer />
            <DegreesViewer />
          </div>
          <div className="space-y-6">
            <WorkProcess />
            <OnlinePresence />
            <div id="contact" className="scroll-mt-24">
              <ContactSection />
            </div>
          </div>
        </motion.section>

        <motion.section id="blog" className="scroll-mt-24" {...reveal}>
          <BlogPreview />
        </motion.section>
      </main>
    </div>
  )
}

export default function Portfolio() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  )
}
