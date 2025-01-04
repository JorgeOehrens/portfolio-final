'use client'

import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"

export type BlogPost = {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 13",
    excerpt: "Learn how to build modern web applications with Next.js 13 and its new app directory structure.",
    content: "Next.js 13 introduces a revolutionary app directory structure that changes how we build React applications. In this post, we'll explore the key features of Next.js 13, including server components, improved routing, and enhanced performance optimizations. We'll walk through setting up a new project, creating pages and layouts, and leveraging the power of server-side rendering and static site generation. By the end of this guide, you'll have a solid foundation to start building scalable and efficient web applications with Next.js 13.",
    date: "2023-05-20",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "Discover the power of utility-first CSS with Tailwind and learn how to create stunning designs efficiently.",
    content: "Tailwind CSS has taken the web development world by storm with its utility-first approach to styling. In this comprehensive guide, we'll dive deep into the philosophy behind Tailwind, its core concepts, and how to leverage its extensive set of utility classes to create beautiful, responsive designs. We'll cover everything from basic layout and typography to advanced topics like customizing your Tailwind configuration and optimizing for production. Whether you're a seasoned developer or just starting out, this post will help you harness the full potential of Tailwind CSS in your projects.",
    date: "2023-07-15",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["CSS", "Tailwind", "Web Design"]
  },
  {
    id: 3,
    title: "Introduction to TypeScript",
    excerpt: "Explore the benefits of TypeScript and how it can improve your JavaScript development experience.",
    content: "TypeScript has become an essential tool for many JavaScript developers, offering enhanced type checking, improved tooling, and better code organization. In this introductory post, we'll explore what TypeScript is, why you might want to use it, and how to get started with it in your projects. We'll cover basic types, interfaces, classes, and some advanced features that make TypeScript stand out. By the end of this article, you'll have a solid understanding of how TypeScript can help you write more robust and maintainable code, and you'll be ready to start incorporating it into your development workflow.",
    date: "2023-09-01",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["TypeScript", "JavaScript", "Programming"]
  }
]

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

export { blogPosts }

