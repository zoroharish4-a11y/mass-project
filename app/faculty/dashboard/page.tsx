"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertTriangle,
  Shield,
  Bell,
  User,
  LogOut,
  Menu,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function FacultyDashboard() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const pendingReports = [
    {
      id: "EMR-ABC123",
      type: "Medical Emergency",
      student: "bala",
      status: "pending",
      priority: "high",
      time: "15 mins ago",
      location: "Library Building",
    },
    {
      id: "EMR-DEF456",
      type: "Security Threat",
      student: "priyan",
      status: "in-progress",
      priority: "critical",
      time: "30 mins ago",
      location: "Parking Lot B",
    },
    {
      id: "EMR-GHI789",
      type: "Haring Incident",
      student: "haribhaii",
      status: "pending",
      priority: "medium",
      time: "1 hour ago",
      location: "Campus Cafeteria",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "bg-red-100 text-red-700 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-700 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "in-progress":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "resolved":
        return "bg-green-100 text-green-700 border-green-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SafeCampus</h1>
                <p className="text-xs text-muted-foreground">Faculty Portal</p>
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
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Dr. Smith
                </Button>
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
        {/* Alert Banner */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 mb-8 text-white shadow-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Active Emergency Reports</h2>
              <p className="text-orange-100">
                {pendingReports.filter((r) => r.status === "pending").length} reports require immediate attention
              </p>
            </div>
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
              <AlertTriangle className="w-5 h-5 mr-2" />
              View All Reports
            </Button>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-2">Welcome back, Dr. Smith!</h3>
          <p className="text-muted-foreground">Here's your response dashboard overview</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pending Reports</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {pendingReports.filter((r) => r.status === "pending").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">In Progress</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {pendingReports.filter((r) => r.status === "in-progress").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Resolved Today</p>
                  <p className="text-2xl font-bold text-green-600">12</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                  <p className="text-2xl font-bold text-foreground">8m</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Reports */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Pending Reports</CardTitle>
                <CardDescription>Reports requiring immediate attention</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingReports.map((report) => (
                <div
                  key={report.id}
                  className="flex items-start justify-between p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="font-mono">
                        {report.id}
                      </Badge>
                      <Badge className={`${getPriorityColor(report.priority)} border`}>
                        {report.priority.toUpperCase()}
                      </Badge>
                      <Badge className={`${getStatusColor(report.status)} border`}>
                        {report.status.replace("-", " ").toUpperCase()}
                      </Badge>
                    </div>

                    <h4 className="font-semibold text-foreground mb-1">{report.type}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>Student: {report.student}</span>
                      <span>Location: {report.location}</span>
                      <span>Reported: {report.time}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm">Review</Button>
                    <Button size="sm" variant="outline">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <CardTitle>Emergency Reports</CardTitle>
                  <CardDescription>Review and respond</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access all emergency reports submitted by students and take appropriate action.
              </p>
              <Button className="w-full">View Reports</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Student Management</CardTitle>
                  <CardDescription>View student profiles</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access student information, contact details, and emergency contacts.
              </p>
              <Button className="w-full bg-transparent" variant="outline">
                Manage Students
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>View insights & trends</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Analyze incident patterns, response times, and campus safety metrics.
              </p>
              <Button className="w-full bg-transparent" variant="outline">
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-border">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Report EMR-JKL012 Resolved</p>
                  <p className="text-sm text-muted-foreground">
                    Medical emergency at Sports Complex successfully handled
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">30 minutes ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-border">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">New Report Assigned</p>
                  <p className="text-sm text-muted-foreground">Security threat report EMR-DEF456 assigned to you</p>
                  <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Student Follow-up Completed</p>
                  <p className="text-sm text-muted-foreground">
                    Follow-up call with Jane Smith regarding report EMR-GHI789
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
