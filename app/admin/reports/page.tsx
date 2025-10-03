"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Shield, Bell, User, LogOut, Search, Filter, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AdminReportsPage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const reports = [
    {
      id: "ER-2024-001",
      type: "Medical Emergency",
      student: "Student #2456",
      location: "Main Building, Floor 3",
      time: "10 mins ago",
      status: "In Progress",
      priority: "High",
    },
    {
      id: "ER-2024-002",
      type: "Safety Concern",
      student: "Student #1823",
      location: "Library Parking",
      time: "25 mins ago",
      status: "Assigned",
      priority: "Medium",
    },
    {
      id: "ER-2024-003",
      type: "Harassment",
      student: "Student #3421",
      location: "Campus Cafeteria",
      time: "1 hour ago",
      status: "Under Review",
      priority: "High",
    },
    {
      id: "ER-2024-004",
      type: "Infrastructure Issue",
      student: "Student #5678",
      location: "Hostel Block B",
      time: "2 hours ago",
      status: "Resolved",
      priority: "Low",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SafeCampus</h1>
                <p className="text-xs text-muted-foreground">Admin - All Reports</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
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
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-2">All Emergency Reports</h3>
          <p className="text-muted-foreground">Monitor and manage all emergency reports across the campus</p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search reports..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Reports List */}
        <div className="space-y-4">
          {reports.map((report) => (
            <Card key={report.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge
                        variant="outline"
                        className={
                          report.priority === "High"
                            ? "bg-red-50 text-red-700 border-red-200"
                            : report.priority === "Medium"
                              ? "bg-orange-50 text-orange-700 border-orange-200"
                              : "bg-blue-50 text-blue-700 border-blue-200"
                        }
                      >
                        {report.priority} Priority
                      </Badge>
                      <Badge variant="outline">{report.status}</Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">{report.type}</h4>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{report.student}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{report.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{report.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Take Action</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
