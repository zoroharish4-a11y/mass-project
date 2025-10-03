"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Bell,
  User,
  LogOut,
  Users,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  Settings,
  FileText,
  Heart,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AdminDashboard() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

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
                <p className="text-xs text-muted-foreground">Admin Portal</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Admin
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-2">System Overview</h3>
          <p className="text-muted-foreground">Monitor and manage the entire campus safety system</p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                  <p className="text-2xl font-bold text-foreground">2,456</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Reports</p>
                  <p className="text-2xl font-bold text-orange-600">23</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Resolved This Month</p>
                  <p className="text-2xl font-bold text-green-600">342</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">System Health</p>
                  <p className="text-2xl font-bold text-green-600">98%</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Link href="/admin/users">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage all users</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Add, edit, or remove students, faculty, and admin accounts.
                </p>
                <Button className="w-full">Manage Users</Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/reports">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <CardTitle>Emergency Reports</CardTitle>
                    <CardDescription>Monitor all reports</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Oversee all emergency reports and response activities.
                </p>
                <Button className="w-full">View Reports</Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/womens-safety">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <CardTitle>Women's Safety</CardTitle>
                    <CardDescription>Safety oversight</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Monitor panic alerts, safe routes, and emergency contacts.
                </p>
                <Button className="w-full bg-transparent" variant="outline">
                  View Module
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/health">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle>Health Support</CardTitle>
                    <CardDescription>Counseling oversight</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Manage counseling appointments and health resources.
                </p>
                <Button className="w-full bg-transparent" variant="outline">
                  View Module
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/awareness">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle>Awareness Hub</CardTitle>
                    <CardDescription>Content management</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Update awareness content, workshops, and educational materials.
                </p>
                <Button className="w-full bg-transparent" variant="outline">
                  Manage Content
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle>Analytics & Reports</CardTitle>
                  <CardDescription>System insights</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                View comprehensive analytics and generate detailed reports.
              </p>
              <Button className="w-full bg-transparent" variant="outline">
                View Analytics
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>Configure system</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Manage system configurations, notifications, and integrations.
              </p>
              <Button className="w-full bg-transparent" variant="outline">
                Settings
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <CardTitle>Security Logs</CardTitle>
                  <CardDescription>Audit trail</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Review system access logs and security audit trails.</p>
              <Button className="w-full bg-transparent" variant="outline">
                View Logs
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Real-time system health monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Emergency Reporting System</span>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Operational
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Database Services</span>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Operational
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Notification System</span>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Operational
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Location Services</span>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Operational
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
