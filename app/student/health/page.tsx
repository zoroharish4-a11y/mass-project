"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Phone, Calendar, MessageCircle, ArrowLeft, Clock, User, Video, FileText } from "lucide-react"
import Link from "next/link"

export default function HealthSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
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
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Health Support</h1>
                <p className="text-xs text-muted-foreground">Mental & physical health resources</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Confidential
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Crisis Support Banner */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">In Crisis? We're Here to Help</h2>
              <p className="text-red-100">24/7 crisis helpline for immediate mental health support</p>
            </div>
            <div className="flex gap-3">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-red-50">
                <Phone className="w-5 h-5 mr-2" />
                Call Crisis Line
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat Now
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Link href="/student/health/appointments" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Book Appointment</h3>
                <p className="text-xs text-muted-foreground">Schedule counseling session</p>
              </CardContent>
            </Card>
          </Link>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Anonymous Chat</h3>
              <p className="text-xs text-muted-foreground">Talk to a counselor</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Self-Assessment</h3>
              <p className="text-xs text-muted-foreground">Check your wellbeing</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Helplines</h3>
              <p className="text-xs text-muted-foreground">Emergency contacts</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Counseling Services */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Counseling Services</CardTitle>
                  <CardDescription>Professional mental health support</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Connect with licensed counselors for confidential one-on-one sessions. All conversations are private and
                secure.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Dr. Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Clinical Psychologist</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Available
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Dr. Michael Chen</p>
                      <p className="text-xs text-muted-foreground">Mental Health Counselor</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Available
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Dr. Emily Rodriguez</p>
                      <p className="text-xs text-muted-foreground">Therapist</p>
                    </div>
                  </div>
                  <Badge variant="outline">Next: 2 PM</Badge>
                </div>
              </div>

              <div className="flex gap-2">
                <Link href="/student/health/appointments" className="flex-1">
                  <Button className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Session
                  </Button>
                </Link>
                <Button variant="outline">
                  <Video className="w-4 h-4 mr-2" />
                  Video Call
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Support Groups */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle>Support Groups</CardTitle>
                  <CardDescription>Connect with peers</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Join peer support groups to share experiences and find community in a safe, moderated environment.
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">Stress Management</h4>
                    <Badge variant="outline" className="bg-white">
                      12 members
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Weekly sessions on coping with academic stress</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>Every Tuesday, 5:00 PM</span>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">Anxiety Support</h4>
                    <Badge variant="outline" className="bg-white">
                      8 members
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Share strategies for managing anxiety</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>Every Thursday, 4:00 PM</span>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">Wellness Circle</h4>
                    <Badge variant="outline" className="bg-white">
                      15 members
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Focus on overall mental wellbeing</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>Every Friday, 3:00 PM</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                View All Groups
              </Button>
            </CardContent>
          </Card>

          {/* Medical Services */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <CardTitle>Medical Services</CardTitle>
                  <CardDescription>Physical health support</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Access campus health center for medical consultations, prescriptions, and health checkups.
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm text-foreground">General Consultation</span>
                  <Button size="sm" variant="outline">
                    Book
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm text-foreground">Health Checkup</span>
                  <Button size="sm" variant="outline">
                    Book
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm text-foreground">Vaccination</span>
                  <Button size="sm" variant="outline">
                    Book
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm text-foreground">Emergency Care</span>
                  <Button size="sm" variant="outline">
                    Book
                  </Button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm font-medium text-blue-900 mb-1">Health Center Hours</p>
                <p className="text-xs text-blue-700">Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p className="text-xs text-blue-700">Saturday - Sunday: 9:00 AM - 5:00 PM</p>
              </div>
            </CardContent>
          </Card>

          {/* Resources & Tools */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle>Resources & Tools</CardTitle>
                  <CardDescription>Self-help materials</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Access guided exercises, articles, and tools to support your mental health journey.
              </p>

              <div className="space-y-2">
                <button className="w-full text-left p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <p className="text-sm font-medium text-foreground mb-1">Meditation & Mindfulness</p>
                  <p className="text-xs text-muted-foreground">Guided audio sessions</p>
                </button>

                <button className="w-full text-left p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <p className="text-sm font-medium text-foreground mb-1">Mood Tracker</p>
                  <p className="text-xs text-muted-foreground">Monitor your emotional wellbeing</p>
                </button>

                <button className="w-full text-left p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <p className="text-sm font-medium text-foreground mb-1">Breathing Exercises</p>
                  <p className="text-xs text-muted-foreground">Quick relaxation techniques</p>
                </button>

                <button className="w-full text-left p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <p className="text-sm font-medium text-foreground mb-1">Sleep Hygiene Guide</p>
                  <p className="text-xs text-muted-foreground">Improve your sleep quality</p>
                </button>

                <button className="w-full text-left p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <p className="text-sm font-medium text-foreground mb-1">Stress Management Tips</p>
                  <p className="text-xs text-muted-foreground">Practical coping strategies</p>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Appointments */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled sessions</CardDescription>
              </div>
              <Link href="/student/health/appointments">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Counseling Session</p>
                    <p className="text-sm text-muted-foreground">Dr. Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground mt-1">Jan 15, 2025 at 2:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Reschedule
                  </Button>
                  <Button size="sm">Join Session</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Helplines */}
        <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
          <CardHeader>
            <CardTitle>Emergency Helplines</CardTitle>
            <CardDescription>Available 24/7 for immediate support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Campus Mental Health Crisis Line</p>
                <p className="text-xl font-bold text-foreground">1800-CRISIS-HELP</p>
              </div>

              <div className="bg-white rounded-xl p-4 border border-border">
                <p className="text-sm text-muted-foreground mb-1">National Suicide Prevention Lifeline</p>
                <p className="text-xl font-bold text-foreground">988</p>
              </div>

              <div className="bg-white rounded-xl p-4 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Campus Health Center</p>
                <p className="text-xl font-bold text-foreground">1800-XXX-XXXX</p>
              </div>

              <div className="bg-white rounded-xl p-4 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Crisis Text Line</p>
                <p className="text-xl font-bold text-foreground">Text HOME to 741741</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
