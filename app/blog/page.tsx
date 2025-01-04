'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { blogPosts, BlogPost } from '../components/blog-preview'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function BlogPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToHome}
        </Button>
      </Link>
      <h1 className="text-3xl font-bold mb-8">{t.blog}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post: BlogPost) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="group">
            <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}
                  </span>
                  <div className="flex gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

