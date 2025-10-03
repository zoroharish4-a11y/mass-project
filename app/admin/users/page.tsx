"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Shield, Bell, LogOut, Search, Filter, User, Mail, Phone, MoreVertical } from "lucide-react"
import Link from "next/link"

export default function AdminUsersPage() {
  const users = [
    {
      id: "1",
      name: "harish",
      email: "rajesh.kumar@college.edu",
      phone: "+91 98765 43210",
      role: "Student",
      department: "Computer Science",
      status: "Active",
    },
    {
      id: "2",
      name: "Priya Sharma",
      email: "priya.sharma@college.edu",
      phone: "+91 98765 43211",
      role: "Student",
      department: "Electronics",
      status: "Active",
    },
    {
      id: "3",
      name: "Dr. Anand Verma",
      email: "anand.verma@college.edu",
      phone: "+91 98765 43212",
      role: "Faculty",
      department: "Mechanical",
      status: "Active",
    },
    {
      id: "4",
      name: "Sneha Patel",
      email: "sneha.patel@college.edu",
      phone: "+91 98765 43213",
      role: "Student",
      department: "Civil",
      status: "Active",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SafeCampus</h1>
                <p className="text-xs text-muted-foreground">Admin - User Management</p>
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
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-2">User Management</h3>
            <p className="text-muted-foreground">Manage all students, faculty, and admin accounts</p>
          </div>
          <Button>Add New User</Button>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search users..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Role
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {users.map((user) => (
            <Card key={user.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{user.name}</h4>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          <span>{user.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          <span>{user.phone}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">{user.role}</Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {user.department}
                        </Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {user.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
