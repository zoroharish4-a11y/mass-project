"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AlertTriangle, ArrowLeft, Search, Clock, MapPin, Eye, Filter } from "lucide-react"
import Link from "next/link"

export default function EmergencyHistoryPage() {
  const reports = [
    {
      id: "EMR-ABC123",
      type: "Medical Emergency",
      status: "resolved",
      date: "2025-01-10",
      time: "14:30",
      location: "Library Building",
      description: "Student feeling unwell, needed medical attention",
    },
    {
      id: "EMR-DEF456",
      type: "Security Threat",
      status: "in-progress",
      date: "2025-01-12",
      time: "09:15",
      location: "Parking Lot B",
      description: "Suspicious activity reported near vehicles",
    },
    {
      id: "EMR-GHI789",
      type: "Harassment",
      status: "under-review",
      date: "2025-01-08",
      time: "18:45",
      location: "Campus Cafeteria",
      description: "Verbal harassment incident",
    },
    {
      id: "EMR-JKL012",
      type: "Accident",
      status: "resolved",
      date: "2025-01-05",
      time: "11:20",
      location: "Sports Complex",
      description: "Minor injury during sports activity",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "bg-green-100 text-green-700 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "under-review":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getStatusLabel = (status: string) => {
    return status
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Report History</h1>
                <p className="text-xs text-muted-foreground">View your past emergency reports</p>
              </div>
            </div>
            <Link href="/student/emergency">
              <Button variant="default">
                <AlertTriangle className="w-4 h-4 mr-2" />
                New Report
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search reports by ID, type, or location..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Reports</p>
              <p className="text-3xl font-bold text-foreground">{reports.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Resolved</p>
              <p className="text-3xl font-bold text-green-600">
                {reports.filter((r) => r.status === "resolved").length}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">In Progress</p>
              <p className="text-3xl font-bold text-blue-600">
                {reports.filter((r) => r.status === "in-progress").length}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Under Review</p>
              <p className="text-3xl font-bold text-yellow-600">
                {reports.filter((r) => r.status === "under-review").length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Reports List */}
        <div className="space-y-4">
          {reports.map((report) => (
            <Card key={report.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="font-mono">
                        {report.id}
                      </Badge>
                      <Badge className={getStatusColor(report.status) + " border"}>
                        {getStatusLabel(report.status)}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">{report.type}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{report.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>
                          {report.date} at {report.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{report.location}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State (hidden when there are reports) */}
        {reports.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No Reports Yet</h3>
              <p className="text-muted-foreground mb-6">You haven't submitted any emergency reports</p>
              <Link href="/student/emergency">
                <Button>
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Submit Your First Report
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
