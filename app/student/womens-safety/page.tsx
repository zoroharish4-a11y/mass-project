"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Phone, MapPin, Users, AlertCircle, ArrowLeft, Navigation, Clock } from "lucide-react"
import Link from "next/link"

export default function WomensSafetyPage() {
  const [panicActive, setPanicActive] = useState(false)

  const handlePanicButton = () => {
    setPanicActive(true)
    // Simulate panic alert
    setTimeout(() => {
      alert("Emergency alert sent! Campus security and emergency contacts have been notified.")
      setPanicActive(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/student/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Women's Safety</h1>
                <p className="text-xs text-muted-foreground">Dedicated safety features & support</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              24/7 Active
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Panic Button Section */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 mb-8 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Emergency Panic Button</h2>
            <p className="text-red-100 mb-8">
              Press and hold for 3 seconds to send instant alert to campus security and your emergency contacts
            </p>
            <button
              onMouseDown={handlePanicButton}
              disabled={panicActive}
              className={`w-48 h-48 rounded-full mx-auto flex items-center justify-center text-white font-bold text-2xl transition-all ${
                panicActive
                  ? "bg-red-800 scale-95 cursor-not-allowed"
                  : "bg-red-700 hover:bg-red-800 hover:scale-105 active:scale-95 shadow-2xl"
              }`}
            >
              {panicActive ? (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-2"></div>
                  <span className="text-base">Alerting...</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <AlertCircle className="w-16 h-16 mb-2" />
                  <span>PANIC</span>
                </div>
              )}
            </button>
            <p className="text-sm text-red-100 mt-6">Your location will be shared automatically</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Link href="/student/womens-safety/safe-routes" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Safe Routes</h3>
                <p className="text-sm text-muted-foreground">View well-lit and monitored paths across campus</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/student/womens-safety/contacts" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Emergency Contacts</h3>
                <p className="text-sm text-muted-foreground">Quick access to helplines and support services</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/student/womens-safety/escort" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Safety Escort</h3>
                <p className="text-sm text-muted-foreground">Request campus security escort service</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* 24/7 Helpline */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <CardTitle>24/7 Women's Helpline</CardTitle>
                  <CardDescription>Confidential support anytime</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
                <p className="text-sm text-pink-900 mb-2">Campus Women's Safety Helpline</p>
                <p className="text-2xl font-bold text-pink-700">1800-WOMEN-HELP</p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Other Support Numbers:</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm text-foreground">National Women's Helpline</span>
                    <span className="text-sm font-semibold text-foreground">181</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm text-foreground">Police Emergency</span>
                    <span className="text-sm font-semibold text-foreground">100</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm text-foreground">Campus Security</span>
                    <span className="text-sm font-semibold text-foreground">1800-XXX-XXXX</span>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </CardContent>
          </Card>

          {/* Live Tracking */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Share Live Location</CardTitle>
                  <CardDescription>Let trusted contacts track you</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Share your real-time location with emergency contacts or friends when traveling alone. They can track
                your journey and receive alerts if you deviate from your route.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-blue-900">Location Sharing</p>
                  <Badge variant="outline" className="bg-white">
                    Inactive
                  </Badge>
                </div>
                <p className="text-xs text-blue-700 mb-3">Start sharing to enable live tracking</p>
                <Button className="w-full bg-transparent" variant="outline">
                  <MapPin className="w-4 h-4 mr-2" />
                  Start Sharing Location
                </Button>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Trusted Contacts (3)</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-sm font-semibold">
                      JD
                    </div>
                    <span className="text-sm text-foreground">Jane Doe (Mother)</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-sm font-semibold">
                      SS
                    </div>
                    <span className="text-sm text-foreground">Sarah Smith (Friend)</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-sm font-semibold">
                      CS
                    </div>
                    <span className="text-sm text-foreground">Campus Security</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Tips */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle>Safety Tips</CardTitle>
                  <CardDescription>Stay informed and prepared</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-orange-700">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Stay in Well-Lit Areas</p>
                    <p className="text-xs text-muted-foreground">Use designated safe routes, especially at night</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-orange-700">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Share Your Location</p>
                    <p className="text-xs text-muted-foreground">Let someone know where you're going</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-orange-700">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Trust Your Instincts</p>
                    <p className="text-xs text-muted-foreground">If something feels wrong, seek help immediately</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-orange-700">4</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Keep Phone Charged</p>
                    <p className="text-xs text-muted-foreground">Ensure you can always call for help</p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4 bg-transparent">
                View All Safety Guidelines
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your safety interactions</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-3 border-b border-border">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Safe Route Used</p>
                    <p className="text-xs text-muted-foreground">Library to Residence Hall A</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-border">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Escort Service Completed</p>
                    <p className="text-xs text-muted-foreground">Evening escort from campus to parking</p>
                    <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Safety Workshop Attended</p>
                    <p className="text-xs text-muted-foreground">Self-Defense Basics</p>
                    <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Resources */}
        <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
          <CardHeader>
            <CardTitle>Need Someone to Talk To?</CardTitle>
            <CardDescription>Confidential counseling and support services available</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button>
                <Phone className="w-4 h-4 mr-2" />
                Call Counselor
              </Button>
              <Button variant="outline" className="bg-white">
                <Users className="w-4 h-4 mr-2" />
                Join Support Group
              </Button>
              <Link href="/student/health">
                <Button variant="outline" className="bg-white">
                  Schedule Appointment
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
