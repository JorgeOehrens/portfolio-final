'use client'

import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../utils/translations'
import { blogPosts } from '@/app/components/blog-preview'
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
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToHome}
        </Button>
      </Link>
      <article className="max-w-3xl mx-auto">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="w-full object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 mb-8 text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{readingTime} min read</span>
          </div>
          <div className="flex gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">{post.excerpt}</p>
          <p>{post.content}</p>
        </div>
      </article>
      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4">{t.relatedPosts}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
            <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id} className="group">
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  width={400}
                  height={200}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{relatedPost.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

