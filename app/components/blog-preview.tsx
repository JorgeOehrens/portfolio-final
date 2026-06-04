'use client'

import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { blogPosts } from '@/app/data/posts'

export default function BlogPreview() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-purple-400">📝</span>
            {t.blog}
          </h2>
          <Link href="/blog">
            <Button variant="outline">{t.viewAll}</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
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

