"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { User, Phone, Mail, MapPin, Edit, Save, X, ArrowLeft, Shield, AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [saved, setSaved] = useState(false)
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@gacrkn.edu",
    phone: "+91 98765 43210",
    studentId: "GAC2023001",
    department: "Computer Science",
    year: "3rd Year",
    rollNumber: "CS21001",
    emergencyContact: "+91 98765 43211",
    emergencyName: "Jane Doe",
    address: "123, Main Street, RK Nagar, Chennai - 600028",
    bloodGroup: "O+",
    medicalInfo: "No known allergies",
  })

  useEffect(() => {
    const savedProfile = localStorage.getItem("studentProfile")
    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile))
      } catch (error) {
        console.error("Error loading profile:", error)
      }
    }
  }, [])

  const handleSave = () => {
    try {
      localStorage.setItem("studentProfile", JSON.stringify(profile))
      setIsEditing(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (error) {
      console.error("Error saving profile:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/student/dashboard">
              <Button variant="ghost" size="icon" className="hover:bg-green-50">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <Image
              src="/college-logo.png"
              alt="College Logo"
              width={48}
              height={48}
              className="rounded-lg border-2 border-green-600"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Government Arts College RK Nagar</h1>
              <p className="text-sm text-muted-foreground">Student Profile</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Success Message */}
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800">
            ✓ Profile updated successfully!
          </div>
        )}

        {/* Profile Header */}
        <Card className="mb-8 border-2 border-green-100">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-white">
            <div className="flex items-start justify-between flex-wrap gap-6">
              <div className="flex items-center gap-6">
                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl font-bold border-[6px] border-white shadow-2xl">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
                  <p className="text-white/90 mb-3">{profile.email}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {profile.studentId}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {profile.department}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {profile.year}
                    </Badge>
                  </div>
                </div>
              </div>

              {!isEditing ? (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setIsEditing(true)}
                  className="bg-white text-green-700 hover:bg-white/90"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={handleSave}
                    className="bg-white text-green-700 hover:bg-white/90"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                    onClick={() => setIsEditing(false)}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Personal Information */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <Card className="border-2 border-green-100">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-800 flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </CardTitle>
              <CardDescription>Your basic details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                {isEditing ? (
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="border-green-200"
                  />
                ) : (
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <User className="w-4 h-4 text-green-600" />
                    <p>{profile.name}</p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                {isEditing ? (
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="border-green-200"
                  />
                ) : (
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-4 h-4 text-green-600" />
                    <p>{profile.email}</p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                {isEditing ? (
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="border-green-200"
                  />
                ) : (
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-4 h-4 text-green-600" />
                    <p>{profile.phone}</p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                {isEditing ? (
                  <Textarea
                    id="address"
                    value={profile.address}
                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                    className="border-green-200"
                  />
                ) : (
                  <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-4 h-4 text-green-600 mt-1" />
                    <p>{profile.address}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-100">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800">Academic Details</CardTitle>
              <CardDescription>Your course and enrollment information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label>Student ID</Label>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-semibold">{profile.studentId}</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rollNumber">Roll Number</Label>
                {isEditing ? (
                  <Input
                    id="rollNumber"
                    value={profile.rollNumber}
                    onChange={(e) => setProfile({ ...profile, rollNumber: e.target.value })}
                    className="border-blue-200"
                  />
                ) : (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-semibold">{profile.rollNumber}</p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                {isEditing ? (
                  <Input
                    id="department"
                    value={profile.department}
                    onChange={(e) => setProfile({ ...profile, department: e.target.value })}
                    className="border-blue-200"
                  />
                ) : (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p>{profile.department}</p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                {isEditing ? (
                  <Input
                    id="year"
                    value={profile.year}
                    onChange={(e) => setProfile({ ...profile, year: e.target.value })}
                    className="border-blue-200"
                  />
                ) : (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p>{profile.year}</p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bloodGroup">Blood Group</Label>
                {isEditing ? (
                  <Input
                    id="bloodGroup"
                    value={profile.bloodGroup}
                    onChange={(e) => setProfile({ ...profile, bloodGroup: e.target.value })}
                    className="border-blue-200"
                  />
                ) : (
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-700 font-semibold">{profile.bloodGroup}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-2 border-red-100">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-red-800 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Emergency Contact
              </CardTitle>
              <CardDescription>Primary contact for emergencies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="emergencyName">Contact Name</Label>
                {isEditing ? (
                  <Input
                    id="emergencyName"
                    value={profile.emergencyName}
                    onChange={(e) => setProfile({ ...profile, emergencyName: e.target.value })}
                    className="border-red-200"
                  />
                ) : (
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <User className="w-4 h-4 text-red-600" />
                    <p>{profile.emergencyName}</p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergencyContact">Contact Number</Label>
                {isEditing ? (
                  <Input
                    id="emergencyContact"
                    value={profile.emergencyContact}
                    onChange={(e) => setProfile({ ...profile, emergencyContact: e.target.value })}
                    className="border-red-200"
                  />
                ) : (
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-4 h-4 text-red-600" />
                    <p className="font-semibold">{profile.emergencyContact}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-100">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Medical Information
              </CardTitle>
              <CardDescription>Health details for emergencies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="medicalInfo">Medical Conditions & Allergies</Label>
                {isEditing ? (
                  <Textarea
                    id="medicalInfo"
                    value={profile.medicalInfo}
                    onChange={(e) => setProfile({ ...profile, medicalInfo: e.target.value })}
                    className="border-orange-200 min-h-[120px]"
                    placeholder="List any allergies, medications, or medical conditions..."
                  />
                ) : (
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p>{profile.medicalInfo}</p>
                  </div>
                )}
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  This information is confidential and only shared with medical personnel during emergencies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
