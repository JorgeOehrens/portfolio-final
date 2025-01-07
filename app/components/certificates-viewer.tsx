"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"

const certificates = [
  {
    title: "Blockchain Fundamentals Certification",
    issuer: "Chainlink Labs",
    date: "2025",
    file: "/certificates/fundamentalsBlockchain.pdf"
  },
  {
    title: "NASA Space Apps Challenge",
    issuer: "NASA",
    date: "2024",
    file: "/certificates/NASA Space Apps Challenge.pdf"
  }
]

export default function CertificatesViewer() {
  const [scale, ] = useState(1)
  const [selectedCert, setSelectedCert] = useState(certificates[0])

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-purple-400">🎓</span>
            Certificates
          </h2>
          <div className="flex gap-2">
            {certificates.map((cert, index) => (
              <Button
                key={index}
                variant={selectedCert === cert ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCert(cert)}
                className="text-xs"
              >
                {cert.issuer}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          
       
        </div>

        <div className="bg-muted rounded-lg p-4 min-h-[400px] flex items-center justify-center">
          <iframe
            src={selectedCert.file}
            className="w-full h-[400px]"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center center'
            }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <h3 className="font-medium">{selectedCert.title}</h3>
            <p className="text-sm text-muted-foreground">{selectedCert.issuer}</p>
          </div>
          <Badge variant="secondary">{selectedCert.date}</Badge>
        </div>
      </CardContent>
    </Card>
  )
}

