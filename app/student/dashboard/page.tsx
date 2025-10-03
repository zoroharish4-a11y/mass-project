"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, Heart, BookOpen, Bell, MapPin, Phone, Clock, User, LogOut, Menu } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-green-600">
                <Image
                  src="/college-logo.png"
                  alt="Government Arts College RK Nagar Logo"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Government Arts And Science College</h1>
                <p className="text-xs text-muted-foreground">RK Nagar - Student Portal</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div className="hidden md:flex items-center gap-2">
                <Link href="/student/profile">
                  <Button variant="ghost" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Emergency Alert Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 mb-8 text-white shadow-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Emergency Assistance</h2>
              <p className="text-red-100">Quick access to emergency services - Available 24/7</p>
            </div>
            <div className="flex gap-3">
              <Link href="/student/emergency">
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-red-50">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Report Emergency
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Helpline
              </Button>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-2">Welcome back, Udhayan  </h3>
          <p className="text-muted-foreground">Here's your safety dashboard overview</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Reports</p>
                  <p className="text-2xl font-bold text-foreground">2</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Safety Score</p>
                  <p className="text-2xl font-bold text-foreground">95%</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Resources Read</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Last Check-in</p>
                  <p className="text-2xl font-bold text-foreground">2h</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Modules */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Emergency Reporting */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <CardTitle>Emergency Reporting</CardTitle>
                    <CardDescription>Report incidents and emergencies</CardDescription>
                  </div>
                </div>
                <Badge variant="destructive">Priority</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Quick access to emergency services with real-time location sharing and instant alerts to campus
                security.
              </p>
              <div className="flex gap-2">
                <Link href="/student/emergency" className="flex-1">
                  <Button className="w-full" variant="destructive">
                    Report Now
                  </Button>
                </Link>
                <Link href="/student/emergency/history">
                  <Button variant="outline">View History</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Women's Safety */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <CardTitle>Women's Safety</CardTitle>
                    <CardDescription>Dedicated safety features</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access panic button, safe routes, emergency contacts, and 24/7 support specifically for women's safety.
              </p>
              <div className="flex gap-2">
                <Link href="/student/womens-safety" className="flex-1">
                  <Button className="w-full">Access Features</Button>
                </Link>
                <Link href="/student/womens-safety/safe-routes">
                  <Button variant="outline">
                    <MapPin className="w-4 h-4 mr-2" />
                    Safe Routes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Health Support */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle>Health Support</CardTitle>
                  <CardDescription>Mental & physical health resources</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access counseling services, medical assistance, and confidential support for mental and physical health.
              </p>
              <div className="flex gap-2">
                <Link href="/student/health" className="flex-1">
                  <Button className="w-full bg-transparent" variant="outline">
                    Get Support
                  </Button>
                </Link>
                <Link href="/student/health/appointments">
                  <Button variant="outline">Book Session</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Awareness Hub */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Awareness Hub</CardTitle>
                  <CardDescription>Safety education & resources</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Educational content, safety tips, workshops, and community guidelines for prevention and awareness.
              </p>
              <div className="flex gap-2">
                <Link href="/student/awareness" className="flex-1">
                  <Button className="w-full bg-transparent" variant="outline">
                    Explore Resources
                  </Button>
                </Link>
                <Link href="/student/awareness/workshops">
                  <Button variant="outline">Workshops</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest interactions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-border">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Counseling Session Scheduled</p>
                  <p className="text-sm text-muted-foreground">
                    Your appointment is confirmed for Jan 15, 2025 at 2:00 PM
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-border">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">New Workshop Available</p>
                  <p className="text-sm text-muted-foreground">
                    "Self-Defense Basics" workshop registration is now open
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Report Status Updated</p>
                  <p className="text-sm text-muted-foreground">
                    Your incident report #1234 has been reviewed by faculty
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
