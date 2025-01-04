'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

type LinkedInPost = {
  id: number
  content: string
  likes: number
  comments: number
  shares: number
  date: string
}

const linkedInPosts: LinkedInPost[] = [
  {
    id: 1,
    content: "Just launched a new web app using Next.js and TailwindCSS! The power of these technologies never ceases to amaze me. The development process was smooth, and the result is a blazing fast, responsive website. Can't wait to share more details about this project. #webdevelopment #nextjs #tailwindcss #coding",
    likes: 150,
    comments: 23,
    shares: 7,
    date: "2023-06-15"
  },
  {
    id: 2,
    content: "Excited to share my experience at the recent NASA Space Apps Challenge! It was an incredible 48 hours of coding, problem-solving, and collaboration. Our team developed a solution to track and visualize space debris, which could potentially help in future space missions. Grateful for the opportunity to work on such impactful projects. #hackathon #spaceapps #nasachallenge #innovation",
    likes: 200,
    comments: 45,
    shares: 12,
    date: "2023-10-10"
  },
  {
    id: 3,
    content: "New blog post: '5 Tips for Optimizing React Performance' - check it out! In this post, I dive deep into practical strategies to boost your React app's performance. From code splitting to memoization, these tips will help you create smoother, faster React applications. Let me know your thoughts and if you have any additional tips to share! #reactjs #webperf #javascript #coding",
    likes: 180,
    comments: 30,
    shares: 15,
    date: "2023-11-05"
  }
]

export default function LinkedInActivity() {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedPost, setSelectedPost] = useState<LinkedInPost | null>(null)

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="text-purple-400">💼</span>
          {language === 'en' ? 'LinkedIn Activity' : 'Actividad de LinkedIn'}
        </h2>
        <div className="space-y-4">
          {linkedInPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-secondary rounded-lg p-4 cursor-pointer hover:bg-secondary/80 transition-colors"
              onClick={() => setSelectedPost(post)}
            >
              <p className="text-sm mb-2 line-clamp-2">{post.content}</p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}</span>
                <div className="flex gap-2">
                  <Badge variant="secondary">{post.likes} {language === 'en' ? 'Likes' : 'Me gusta'}</Badge>
                  <Badge variant="secondary">{post.comments} {language === 'en' ? 'Comments' : 'Comentarios'}</Badge>
                  <Badge variant="secondary">{post.shares} {language === 'en' ? 'Shares' : 'Compartidos'}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        {selectedPost && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{language === 'en' ? 'LinkedIn Post' : 'Publicación de LinkedIn'}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-sm mb-4">{selectedPost.content}</p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{new Date(selectedPost.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}</span>
                <div className="flex gap-2">
                  <Badge variant="secondary">{selectedPost.likes} {language === 'en' ? 'Likes' : 'Me gusta'}</Badge>
                  <Badge variant="secondary">{selectedPost.comments} {language === 'en' ? 'Comments' : 'Comentarios'}</Badge>
                  <Badge variant="secondary">{selectedPost.shares} {language === 'en' ? 'Shares' : 'Compartidos'}</Badge>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </Card>
  )
}

