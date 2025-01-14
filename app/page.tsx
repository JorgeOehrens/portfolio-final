'use client'

import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import Stats from './components/stats'
import Profile from './components/profile'
import ProjectGrid from './components/project-grid'
import HackathonGrid from './components/hackathon-grid'
import WorkProcess from './components/work-process'
import OnlinePresence from './components/online-presence'
import ContactSection from './components/contact-section'
import { ThemeToggle } from './components/theme-toggle'
import CertificatesViewer from './components/certificates-viewer'
import DegreesViewer from './components/degrees-viewer'
import { motion } from 'framer-motion'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { translations } from './utils/translations'
import BlogPreview from '@/app/components/blog-preview'

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex justify-center lg:justify-start space-x-2">
      <Button
        variant="outline"
        size="lg"
        onClick={() => setLanguage('es')}
        aria-label="Switch to Spanish"
        className={`text-2xl ${language === 'es' ? 'bg-secondary' : ''}`}
      >
        🇨🇱
      </Button>
      <Button
        variant="outline"
        size="lg"
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        className={`text-2xl ${language === 'en' ? 'bg-secondary' : ''}`}
      >
        🇺🇸
      </Button>
    </div>
  )
}

function PortfolioContent() {
  const [isLoading, setIsLoading] = useState(true)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <motion.div
      className="min-h-screen bg-background text-foreground p-4 sm:p-6 font-jakarta"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <motion.div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0" variants={itemVariants}>
          <LanguageSwitcher />
          <ThemeToggle />
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants}>
          <Stats />
        </motion.div>

        {/* Profile + Actions */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6" variants={itemVariants}>
          <Profile />
          <div className="space-y-6">
            <a
              href="/cv/JorgeOehrensCV.pdf"
              download="JorgeOehrensCV.pdf"
              className="w-full bg-secondary hover:bg-secondary/80 flex items-center justify-center border border-outline rounded-md p-2"
            >
              <Download className="mr-2 h-4 w-4" />
              {t.resume}
            </a>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="w-full bg-secondary hover:bg-secondary/80"
                onClick={() => window.location.href = 'https://t.me/JorgeOeh'}
              >
                {t.telegramMe}
              </Button>
              <Button
                variant="outline"
                className="w-full bg-secondary hover:bg-secondary/80"
                onClick={() => window.location.href = 'https://wa.me/56950653521'}
              >
                {t.whatsappMe}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Grids */}
        <motion.div variants={itemVariants}>
          <ProjectGrid />
        </motion.div>

        <motion.div variants={itemVariants}>
          <HackathonGrid />
        </motion.div>

        {/* Certificates + Work Process */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6" variants={itemVariants}>
          <div className="space-y-6">
            <CertificatesViewer />
            <DegreesViewer />
          </div>
          <div className="space-y-6">
            <WorkProcess />
            <OnlinePresence />
            <ContactSection />
          </div>
        </motion.div>

        {/* Blog Preview */}
        <motion.div variants={itemVariants}>
          <BlogPreview />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  )
}
