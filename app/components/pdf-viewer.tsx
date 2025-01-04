"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'

export default function PDFViewer() {
  const [currentPage, setCurrentPage] = useState(1)
  const [scale, setScale] = useState(1)
  const [numPages, setNumPages] = useState(null)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  return (
    <Card className="bg-card text-card-foreground">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Certificates & Degrees</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">
              Page {currentPage} of {numPages || '--'}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.min(numPages, prev + 1))}
              disabled={currentPage >= numPages}
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
        <div className="bg-muted rounded-lg p-4 min-h-[600px] flex items-center justify-center">
          <iframe
            src="/sample.pdf"
            className="w-full h-full"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center center'
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

