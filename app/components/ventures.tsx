'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import posthog from 'posthog-js'
import { Badge } from '@/app/components/ui/badge'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { ventures } from '../data/ventures'
import SectionHeading from './section-heading'

/**
 * Case studies de los productos que construyo y opero (WelcomeBack, Educari,
 * AgroJob): métricas grandes, qué construí, stack y links a web y tiendas.
 */
export default function Ventures() {
  const { language } = useLanguage()
  const t = translations[language]

  const track = (title: string, link_type: string) =>
    posthog.capture('project_link_opened', { project_title: title, link_type })

  return (
    <div>
      <SectionHeading eyebrow="PRODUCTS" title={t.venturesTitle} subtitle={t.venturesSub} />

      <div className="space-y-20 sm:space-y-28">
        {ventures.map((v, i) => (
          <article
            key={v.title}
            className={`grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
          >
            <a
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track(v.title, 'live')}
              className="group relative block aspect-[16/10] overflow-hidden rounded-3xl lg:sticky lg:top-28 border border-border bg-secondary/50"
            >
              <Image
                src={v.image}
                alt={v.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>

            <div>
              <p className="eyebrow">{v.role[language]}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">{v.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{v.pitch[language]}</p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-6 sm:grid-cols-4">
                {v.metrics.map((m) => (
                  <div key={m.label.en}>
                    <dt className="sr-only">{m.label[language]}</dt>
                    <dd className="font-display text-3xl font-semibold leading-none tracking-[-0.02em]">{m.value}</dd>
                    <dd className="eyebrow mt-2 !text-[10px] leading-snug">{m.label[language]}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-8 space-y-2.5">
                {v.built.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <span className="mt-0.5 text-foreground/50">—</span>
                    <span>{b[language]}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {v.stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="rounded-full font-mono text-xs font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={v.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track(v.title, 'live')}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                >
                  {v.link.replace(/^https?:\/\/(www\.)?|\/$/g, '')}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                {v.appStore && (
                  <a
                    href={v.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track(v.title, 'app_store')}
                    className="transition-transform hover:-translate-y-0.5"
                  >
                    <Image src="/badges/app-store.svg" alt="App Store" width={132} height={44} className="h-11 w-auto" />
                  </a>
                )}
                {v.playStore && (
                  <a
                    href={v.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track(v.title, 'play_store')}
                    className="transition-transform hover:-translate-y-0.5"
                  >
                    <Image src="/badges/google-play.png" alt="Google Play" width={146} height={44} className="h-11 w-auto" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
