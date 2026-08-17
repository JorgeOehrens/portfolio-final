'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Download } from 'lucide-react'
import posthog from 'posthog-js'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

/**
 * Hero a pantalla completa estilo tsirakis: video de fondo en loop
 * (horizontal en desktop, vertical en móvil; se elige por matchMedia
 * para descargar solo uno), titular gigante y CTAs pill. El fondo azul
 * calza con el estudio del video, así el load-in y un fallo son invisibles.
 */
export default function Profile() {
  const { language } = useLanguage()
  const t = translations[language]
  const [videoFailed, setVideoFailed] = useState(false)
  const [videoSrc, setVideoSrc] = useState<string>()

  useEffect(() => {
    setVideoSrc(
      window.matchMedia('(max-width: 639px)').matches
        ? '/videos/hero-mobile.mp4'
        : '/videos/hero-desktop.mp4'
    )
  }, [])

  return (
    <section className="relative flex h-[100svh] min-h-[560px] w-full flex-col justify-end overflow-hidden bg-[#2f7490]">
      {videoSrc && !videoFailed && (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Degradado sutil solo para que el texto respire sobre el azul */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
        <span className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t.availableToWork}
        </span>

        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-7xl lg:text-8xl">
          Jorge Oehrens.
          <br />
          <span className="text-white/55">Software Engineer &amp; Product Engineer.</span>
        </h1>

        <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
          {t.profileBio}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            onClick={() => posthog.capture('nav_section_clicked', { section: 'projects', location: 'hero' })}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-base font-semibold text-[hsl(228_28%_8%)] transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            {t.viewMyWork}
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="/cv/JorgeOehrensCV.pdf"
            download="JorgeOehrensCV.pdf"
            onClick={() => posthog.capture('cv_downloaded')}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            {t.resume}
          </a>
        </div>
      </div>
    </section>
  )
}
