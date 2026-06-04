'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog"
import { useLanguage } from '../contexts/LanguageContext'
import Image from 'next/image'
import { blogPosts, type BlogPost } from '@/app/data/posts'

export default function Blog() {
  const { language } = useLanguage()
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="text-purple-400">📝</span>
          {language === 'en' ? 'Blog' : 'Blog'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-secondary rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedPost(post)}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{post.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        {selectedPost && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedPost.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                width={800}
                height={400}
                className="w-full object-cover rounded-lg mb-4"
              />
              <p className="text-sm mb-4">{selectedPost.content}</p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{new Date(selectedPost.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}</span>
                <div className="flex gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </Card>
  )
}

