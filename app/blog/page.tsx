'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { blogPosts, type BlogPost } from '@/app/data/posts'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import posthog from 'posthog-js'

export default function BlogPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <Link href="/">
        <Button variant="ghost" className="mb-6 rounded-full">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToHome}
        </Button>
      </Link>
      <p className="eyebrow mb-3">BLOG</p>
      <h1 className="mb-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">{t.blog}</h1>
      <p className="mb-12 max-w-md text-muted-foreground">{t.blogSub}</p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post: BlogPost) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="group"
            onClick={() => posthog.capture('blog_post_opened', { post_id: post.id, post_title: post.title })}
          >
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
              {post.tags[0] ? ` · ${post.tags.join(', ')}` : ''}
            </p>
            <h2 className="mt-1.5 font-display text-xl font-semibold tracking-[-0.01em]">{post.title}</h2>
            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
