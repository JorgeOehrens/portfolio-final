'use client'

import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../utils/translations'
import { blogPosts } from '@/app/data/posts'
import Image from 'next/image'
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const t = translations[language]

  const post = blogPosts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  const readingTime = Math.ceil(post.content.split(' ').length / 200) // Assuming 200 words per minute

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <Link href="/">
        <Button variant="ghost" className="mb-6 rounded-full">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToHome}
        </Button>
      </Link>
      <article className="mx-auto max-w-3xl">
        {post.video ? (
          <video
            src={post.video}
            poster={post.image}
            controls
            playsInline
            className="mb-10 w-full rounded-2xl border border-border"
          />
        ) : (
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="mb-10 w-full rounded-2xl border border-border object-cover"
          />
        )}
        <h1 className="mb-5 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">{post.title}</h1>
        <div className="mb-10 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-2 h-3.5 w-3.5" />
            <span>{new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-3.5 w-3.5" />
            <span>{readingTime} min</span>
          </div>
          <div className="flex gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="rounded-full font-mono text-[10px] font-normal uppercase">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="max-w-none">
          <p className="mb-6 text-lg leading-relaxed">{post.excerpt}</p>
          <p className="leading-relaxed text-muted-foreground">{post.content}</p>
        </div>
      </article>
      <div className="mx-auto mt-20 max-w-3xl border-t border-border pt-10">
        <h2 className="mb-6 font-display text-2xl font-semibold tracking-[-0.02em]">{t.relatedPosts}</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
            <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id} className="group">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-secondary/50">
                <Image
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.01em]">{relatedPost.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{relatedPost.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
