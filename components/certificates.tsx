'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Award } from 'lucide-react'
import Image from 'next/image'

const certificates = [
  {
    id: 1,
    title: "Web Development",
    issuer: "Udacity",
    date: "2023",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 2,
    title: "React Development",
    issuer: "Meta",
    date: "2023",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 3,
    title: "Full Stack Development",
    issuer: "FreeCodeCamp",
    date: "2022",
    image: "/placeholder.svg?height=200&width=300"
  }
]

export default function Certificates() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {certificates.map((cert) => (
        <Card key={cert.id} className="bg-zinc-900/50 border-zinc-800 overflow-hidden">
          <CardContent className="p-0">
            <Image
              src={cert.image}
              alt={cert.title}
              width={300}
              height={200}
              className="w-full object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-purple-500" />
                <h3 className="font-semibold">{cert.title}</h3>
              </div>
              <p className="text-sm text-zinc-400">{cert.issuer}</p>
              <p className="text-xs text-zinc-500">{cert.date}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

