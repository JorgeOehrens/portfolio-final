"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import { Badge } from "@/app/components/ui/badge"

const degrees = [
  {
    title: "Ingeniería civil en computación e informática",
    institution: "Universidad Central De Chile",
    year: "2024",
    file: "/degrees/ingenieria.pdf"
  },
  {
    title: "Licenciado en Ciencias de la ingeniería",
    institution: "Universidad Central De Chile",
    year: "2022",
    file: "/degrees/licenciatura.pdf"
  }
]

export default function DegreesViewer() {
  const [currentPage, setCurrentPage] = useState(1)
  const [scale, setScale] = useState(1)
  const [selectedDegree, setSelectedDegree] = useState(degrees[0])

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-purple-400">🎯</span>
            Academic Degrees
          </h2>
          <div className="flex gap-2">
            {degrees.map((degree, index) => (
              <Button
                key={index}
                variant={selectedDegree === degree ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDegree(degree)}
                className="text-xs"
              >
                {degree.institution}
              </Button>
            ))}
          </div>
        </div>


        <div className="bg-muted rounded-lg p-4 min-h-[400px] flex items-center justify-center">
          <iframe
            src={selectedDegree.file}
            className="w-full h-[400px]"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center center'
            }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <h3 className="font-medium">{selectedDegree.title}</h3>
            <p className="text-sm text-muted-foreground">{selectedDegree.institution}</p>
          </div>
          <Badge variant="secondary">{selectedDegree.year}</Badge>
        </div>
      </CardContent>
    </Card>
  )
}

