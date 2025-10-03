"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, ArrowLeft, Search, Video, FileText, Users, Calendar, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

export default function AwarenessHubPage() {
  const categories = [
    { id: "safety", name: "Safety Tips", count: 24, color: "bg-blue-100 text-blue-700 border-blue-200" },
    { id: "health", name: "Health & Wellness", count: 18, color: "bg-green-100 text-green-700 border-green-200" },
    { id: "legal", name: "Legal Rights", count: 12, color: "bg-purple-100 text-purple-700 border-purple-200" },
    { id: "prevention", name: "Prevention", count: 20, color: "bg-orange-100 text-orange-700 border-orange-200" },
  ]

  const featuredArticles = [
    {
      id: 1,
      title: "Understanding Consent: A Comprehensive Guide",
      category: "Legal Rights",
      readTime: "8 min read",
      views: 1234,
      image: "/consent-education.jpg",
    },
    {
      id: 2,
      title: "Self-Defense Techniques Every Student Should Know",
      category: "Safety Tips",
      readTime: "10 min read",
      views: 2156,
      image: "/self-defense-training.jpg",
    },
    {
      id: 3,
      title: "Mental Health: Recognizing Warning Signs",
      category: "Health & Wellness",
      readTime: "6 min read",
      views: 1876,
      image: "/mental-health-awareness.png",
    },
  ]

  const upcomingWorkshops = [
    {
      id: 1,
      title: "Self-Defense Workshop",
      date: "Jan 20, 2025",
      time: "3:00 PM",
      seats: 15,
      registered: 8,
    },
    {
      id: 2,
      title: "Cybersecurity & Online Safety",
      date: "Jan 22, 2025",
      time: "4:00 PM",
      seats: 30,
      registered: 22,
    },
    {
      id: 3,
      title: "Stress Management Techniques",
      date: "Jan 25, 2025",
      time: "2:00 PM",
      seats: 20,
      registered: 12,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
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
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Awareness Hub</h1>
                <p className="text-xs text-muted-foreground">Safety education & resources</p>
              </div>
            </div>
            <Link href="/student/awareness/workshops">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Workshops
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search articles, videos, workshops..." className="pl-12 h-12 text-base" />
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Browse by Category</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Badge className={`${category.color} border mb-3`}>{category.count} Resources</Badge>
                    <h3 className="font-semibold text-foreground">{category.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="pt-4">
                  <Badge variant="outline" className="mb-2">
                    {article.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{article.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{article.views} views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Workshops */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">Upcoming Workshops</h2>
            <Link href="/student/awareness/workshops">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {upcomingWorkshops.map((workshop) => (
              <Card key={workshop.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-indigo-600" />
                    </div>
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
                  <h3 className="font-semibold text-foreground mb-2">{workshop.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{workshop.time}</span>
                    </div>
                  </div>
                  <Button className="w-full" size="sm" disabled={workshop.registered >= workshop.seats}>
                    {workshop.registered >= workshop.seats ? "Fully Booked" : "Register Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resource Types */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Articles & Guides</CardTitle>
                  <CardDescription>74 resources</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                In-depth articles covering safety, health, and prevention topics
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Browse Articles
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Video className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle>Video Tutorials</CardTitle>
                  <CardDescription>32 videos</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Visual guides and demonstrations for practical skills
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Watch Videos
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle>Community Forums</CardTitle>
                  <CardDescription>Active discussions</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Connect with peers and share experiences</p>
              <Button variant="outline" className="w-full bg-transparent">
                Join Forums
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Popular Topics */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Topics This Week</CardTitle>
            <CardDescription>Most viewed resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center text-sm font-bold text-blue-700">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Campus Safety After Dark</p>
                    <p className="text-xs text-muted-foreground">Safety Tips • 3,245 views</p>
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center text-sm font-bold text-green-700">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Managing Academic Stress</p>
                    <p className="text-xs text-muted-foreground">Health & Wellness • 2,876 views</p>
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center text-sm font-bold text-purple-700">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Know Your Rights: Title IX</p>
                    <p className="text-xs text-muted-foreground">Legal Rights • 2,543 views</p>
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-200 rounded-lg flex items-center justify-center text-sm font-bold text-orange-700">
                    4
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Bystander Intervention Strategies</p>
                    <p className="text-xs text-muted-foreground">Prevention • 2,234 views</p>
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-200 rounded-lg flex items-center justify-center text-sm font-bold text-red-700">
                    5
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Digital Privacy & Security</p>
                    <p className="text-xs text-muted-foreground">Safety Tips • 2,098 views</p>
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
