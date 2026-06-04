'use client'

import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Newspaper } from 'lucide-react'
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
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <SectionHeading
          icon={Newspaper}
          title={t.blog}
          eyebrow="04"
          action={
            <Link href="/blog">
              <Button variant="outline" size="sm">{t.viewAll}</Button>
            </Link>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group" onClick={() => window.scrollTo(0, 0)}>
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-secondary/40 transition-all hover:border-primary/40 hover:bg-secondary/70">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}</span>
                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

