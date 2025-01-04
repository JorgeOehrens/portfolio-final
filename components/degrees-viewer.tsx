"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const degrees = [
  {
    title: "Licenciado en Ciencias de la ingeniería",
    institution: "Universidad Central De Chile",
    year: "2022",
    file: "/degrees/licenciatura.pdf"
  },
  {
    title: "Ingeniería civil en computación e informática",
    institution: "Universidad Central De Chile",
    year: "2024",
    file: "/degrees/ingenieria.pdf"
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

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">Page {currentPage}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setScale((prev) => Math.max(0.5, prev - 0.1))}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm">{Math.round(scale * 100)}%</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setScale((prev) => Math.min(2, prev + 0.1))}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-4 min-h-[400px] flex items-center justify-center">
          <iframe
            src={selectedDegree.file}
            className="w-full h-full"
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

