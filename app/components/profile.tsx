import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { MapPin, Globe2, Building2, GraduationCap } from 'lucide-react'
import Image from 'next/image'

export default function Profile() {
  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative">
            <Image
              src="/images/logo.jpeg"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-xl"
            />
            <Badge 
              variant="secondary" 
              className="absolute -top-3 -right-3 bg-green-500/10 text-green-500 border-green-500/20"
            >
              Available To Work
            </Badge>
          </div>
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-1">Jorge Oehrens Benavides</h1>
            <p className="text-purple-400 mb-1">Software engineer</p>
            
            <div className="grid grid-cols-2 gap-y-3 mt-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-foreground">Santiago, Chile</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-foreground">Spanish & English</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-foreground">Software engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-foreground">Universidad Central De Chile</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

