"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowLeft, Navigation, Clock, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function SafeRoutesPage() {
  const routes = [
    {
      id: 1,
      name: "Library to Residence Hall A",
      distance: "0.8 km",
      duration: "10 min",
      lighting: "Excellent",
      cameras: 8,
      rating: 4.8,
      description: "Well-lit path with multiple security cameras and emergency call boxes",
    },
    {
      id: 2,
      name: "Main Gate to Academic Block",
      distance: "1.2 km",
      duration: "15 min",
      lighting: "Good",
      cameras: 12,
      rating: 4.9,
      description: "Primary route with high foot traffic and 24/7 security patrol",
    },
    {
      id: 3,
      name: "Cafeteria to Sports Complex",
      distance: "0.6 km",
      duration: "8 min",
      lighting: "Excellent",
      cameras: 6,
      rating: 4.7,
      description: "Shortest route with excellent lighting and emergency assistance points",
    },
    {
      id: 4,
      name: "Parking Lot to Library",
      distance: "0.5 km",
      duration: "6 min",
      lighting: "Good",
      cameras: 5,
      rating: 4.6,
      description: "Direct path with good visibility and regular security rounds",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/student/womens-safety">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Safe Routes</h1>
                <p className="text-xs text-muted-foreground">Well-lit and monitored campus paths</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Map Placeholder */}
        <Card className="mb-8 overflow-hidden">
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-96 flex items-center justify-center relative">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground mb-2">Interactive Campus Map</p>
              <p className="text-sm text-muted-foreground">View safe routes with real-time updates</p>
            </div>
            <div className="absolute top-4 right-4">
              <Button size="sm">
                <Navigation className="w-4 h-4 mr-2" />
                Use My Location
              </Button>
            </div>
          </div>
        </Card>

        {/* Route Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Safe Routes</p>
              <p className="text-3xl font-bold text-foreground">{routes.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Security Cameras</p>
              <p className="text-3xl font-bold text-blue-600">31</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Emergency Boxes</p>
              <p className="text-3xl font-bold text-green-600">15</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Avg. Rating</p>
              <p className="text-3xl font-bold text-orange-600">4.8</p>
            </CardContent>
          </Card>
        </div>

        {/* Routes List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">Available Safe Routes</h2>

          {routes.map((route) => (
            <Card key={route.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{route.name}</h3>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <Shield className="w-3 h-3 mr-1" />
                        {route.lighting}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{route.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{route.distance}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{route.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Shield className="w-4 h-4" />
                        <span>{route.cameras} cameras</span>
                      </div>
                      <div className="flex items-center gap-1 text-orange-600">
                        <Star className="w-4 h-4 fill-orange-600" />
                        <span className="font-medium">{route.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button>
                      <Navigation className="w-4 h-4 mr-2" />
                      Navigate
                    </Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety Features */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle>Safety Features on All Routes</CardTitle>
            <CardDescription>What makes these routes safe</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">24/7 CCTV Monitoring</p>
                  <p className="text-sm text-muted-foreground">All routes covered by security cameras</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Emergency Call Boxes</p>
                  <p className="text-sm text-muted-foreground">Direct line to campus security every 100m</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Excellent Lighting</p>
                  <p className="text-sm text-muted-foreground">Well-lit paths for maximum visibility</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Regular Patrols</p>
                  <p className="text-sm text-muted-foreground">Security personnel patrol these routes hourly</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
