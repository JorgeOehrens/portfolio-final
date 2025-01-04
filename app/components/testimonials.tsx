import { Card, CardContent } from "@/app/components/ui/card"
import Image from 'next/image'

export default function Testimonials() {
  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="text-purple-400">⚡</span>
          Projects
        </h2>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Smart Sales"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Smart Sales CRM</h3>
                    <p className="text-sm text-muted-foreground">Smart Sales - Santiago, Chile</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2023 - 2024</span>
                </div>
                <p className="text-sm text-foreground mt-2">
                  Developed and maintained CRM solutions, providing support and implementing new features for clients.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Canasta Ahorro"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Canasta Ahorro</h3>
                    <p className="text-sm text-muted-foreground">Cencosud Ventures - Santiago, Chile</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <p className="text-sm text-foreground mt-2">
                  Developed robust and scalable systems for this Cencosud Ventures-backed startup, focusing on user needs and system performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

