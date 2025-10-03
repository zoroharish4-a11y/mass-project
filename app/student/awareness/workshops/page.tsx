"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, ArrowLeft, Search, Users, Clock, MapPin, Filter } from "lucide-react"
import Link from "next/link"

export default function WorkshopsPage() {
  const workshops = [
    {
      id: 1,
      title: "Self-Defense Workshop",
      description: "Learn basic self-defense techniques and situational awareness strategies",
      date: "Jan 20, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Sports Complex, Room 101",
      instructor: "Officer Sarah Martinez",
      seats: 15,
      registered: 8,
      category: "Safety",
    },
    {
      id: 2,
      title: "Cybersecurity & Online Safety",
      description: "Protect yourself from online threats, scams, and identity theft",
      date: "Jan 22, 2025",
      time: "4:00 PM - 5:30 PM",
      location: "Computer Lab, Building C",
      instructor: "Dr. James Wilson",
      seats: 30,
      registered: 22,
      category: "Safety",
    },
    {
      id: 3,
      title: "Stress Management Techniques",
      description: "Practical strategies for managing academic and personal stress",
      date: "Jan 25, 2025",
      time: "2:00 PM - 3:30 PM",
      location: "Wellness Center",
      instructor: "Dr. Emily Chen",
      seats: 20,
      registered: 12,
      category: "Health",
    },
    {
      id: 4,
      title: "Bystander Intervention Training",
      description: "Learn how to safely intervene in potentially harmful situations",
      date: "Jan 28, 2025",
      time: "5:00 PM - 6:30 PM",
      location: "Student Center, Hall A",
      instructor: "Campus Safety Team",
      seats: 25,
      registered: 15,
      category: "Prevention",
    },
    {
      id: 5,
      title: "Mental Health First Aid",
      description: "Recognize and respond to mental health crises in peers",
      date: "Feb 1, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Health Center, Conference Room",
      instructor: "Dr. Michael Rodriguez",
      seats: 18,
      registered: 10,
      category: "Health",
    },
    {
      id: 6,
      title: "Understanding Consent & Boundaries",
      description: "Comprehensive workshop on consent, communication, and healthy relationships",
      date: "Feb 5, 2025",
      time: "4:00 PM - 5:30 PM",
      location: "Student Center, Hall B",
      instructor: "Legal Affairs Office",
      seats: 30,
      registered: 18,
      category: "Legal",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Safety":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "Health":
        return "bg-green-100 text-green-700 border-green-200"
      case "Prevention":
        return "bg-orange-100 text-orange-700 border-orange-200"
      case "Legal":
        return "bg-purple-100 text-purple-700 border-purple-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/student/awareness">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Workshops & Events</h1>
              <p className="text-xs text-muted-foreground">Register for upcoming sessions</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Search and Filter */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search workshops..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Workshops</p>
              <p className="text-3xl font-bold text-foreground">{workshops.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Your Registrations</p>
              <p className="text-3xl font-bold text-blue-600">3</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Completed</p>
              <p className="text-3xl font-bold text-green-600">5</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Available Seats</p>
              <p className="text-3xl font-bold text-orange-600">
                {workshops.reduce((acc, w) => acc + (w.seats - w.registered), 0)}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Workshops List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">Upcoming Workshops</h2>

          {workshops.map((workshop) => (
            <Card key={workshop.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{workshop.title}</h3>
                      <Badge className={`${getCategoryColor(workshop.category)} border`}>{workshop.category}</Badge>
                      <Badge
                        variant="outline"
                        className={
                          workshop.registered >= workshop.seats
                            ? "bg-red-50 text-red-700 border-red-200"
                            : "bg-green-50 text-green-700 border-green-200"
                        }
                      >
                        {workshop.seats - workshop.registered} seats left
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{workshop.description}</p>

                    <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{workshop.instructor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button disabled={workshop.registered >= workshop.seats}>
                      {workshop.registered >= workshop.seats ? "Fully Booked" : "Register"}
                    </Button>
                    <Button variant="outline">Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Card */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle>Workshop Information</CardTitle>
            <CardDescription>What you need to know</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-foreground">
            <p>• All workshops are free for students</p>
            <p>• Certificates of completion provided</p>
            <p>• Registration closes 24 hours before the workshop</p>
            <p>• Please arrive 10 minutes early</p>
            <p>• Contact us if you need to cancel your registration</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
