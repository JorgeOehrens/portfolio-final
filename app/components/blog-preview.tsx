'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { blogPosts } from '@/app/data/posts'
import SectionHeading from './section-heading'

export default function BlogPreview() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div>
      <SectionHeading
        eyebrow="BLOG"
        title={t.blog}
        action={
          <Link href="/blog">
            <Button variant="outline" size="sm" className="rounded-full">{t.viewAll}</Button>
          </Link>
        }
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, 3).map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="group" onClick={() => window.scrollTo(0, 0)}>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-secondary/50">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <p className="eyebrow mt-4">
              {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}
              {post.tags[0] ? ` · ${post.tags[0]}` : ''}
            </p>
            <h3 className="mt-1.5 font-display text-lg font-semibold tracking-[-0.01em]">
              {post.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
