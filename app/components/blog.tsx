'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog"
import { useLanguage } from '../contexts/LanguageContext'
import Image from 'next/image'

type BlogPost = {
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
    title: "Ganamos en la Hackathon Hacker House 🇦🇷",
    excerpt: "Learn how to build modern web applications with Next.js 13 and its new app directory structure.",
    content: " Ganamos en la Hackathon Hacker House 🇦🇷 ! Con el equipo de INTI: DAO Builder , formado por Andrés Peña Mellado y Joaquin Farfan Torres estuvimos trabajando para lograr un objetivo el cual era poder llegar lo más lejos con nuestro proyecto en donde obtuvimos el 🥈2do lugar en la categoría de Stacks . Agradecer a la organización y a todos los que nos apoyaron desde Chile en este desafío. 🙏🏼Además, pudimos participar de LABITCONF realizada el 1 y 2 de Nov, en donde el evento estuvo con todo, charlas , ventures capital interesadas en web3, proyectos y todo lo que significa una conferencia de primer nivel 🤝🔥. Pueden revisar nuestro Pitch Deck y GitHub para conocer más sobre nuestra presentación en este evento. 💻 Data Room: Revisa la información escencial de INTI ✨ https://lnkd.in/e8iJFTGnPitch Deck:  Revisa nuestra propuesta de valor ✨ https://lnkd.in/eXRQ9jz4dApp : https://lnkd.in/eukaBkDi",
    date: "2024-05-20",
    image: "/blog/charla.jpeg",
    tags: ["Next.js", "React", "Web Development", "Blockchain","Stacks","Layer2Bitcoin", 'Full Stack', 'Software engeneer']
  },
  {
    id: 2,
    title: "Charla Universidad",
    excerpt: "Discover the power of utility-first CSS with Tailwind and learn how to create stunning designs efficiently.",
    content: "'Camino hacia la Hackathon' ✍ fue el nombre de la charla realizada en la Universidad Central de Chile durante la semana de aniversario, donde varios egresados compartimos nuestras experiencias con los estudiantes de ingeniería. Agradezco a Alejandro Sanhueza y al Consejo de Egresados ICCI - UCEN por la invitación y la excelente coordinación de estos eventos 👏 En mi participación, hablé sobre mi recorrido como freelance, mi experiencia en el NASA Space Apps Challenge CH , donde desarrollamos una aplicación para localizar exoplanetas mediante un chatbot con inteligencia artificial, y también sobre mi última participación en la hackathon de Stacks en Argentina, en donde obtuvimos el 2.º lugar 🇨🇱 con el proyecto INTI: DAO Builder , una aplicación descentralizada en blockchain para la gobernanza de organizaciones. Además, compartí mi experiencia actual en Canasta Ahorro, una startup impulsada por Cencosud Ventures en donde me encuentro trabajando actualmente 🤝",
    date: "2024-07-15",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Hackathon", "Charla", "Universidad", 'Full Stack', 'Software engeneer']
  }
]

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

