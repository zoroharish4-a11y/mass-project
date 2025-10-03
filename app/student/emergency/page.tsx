"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, MapPin, Phone, Upload, ArrowLeft, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function EmergencyReportPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [locationEnabled, setLocationEnabled] = useState(false)
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    location: "",
    anonymous: false,
  })

  const emergencyTypes = [
    { id: "medical", label: "Medical Emergency", color: "bg-red-100 text-red-700 border-red-200" },
    { id: "security", label: "Security Threat", color: "bg-orange-100 text-orange-700 border-orange-200" },
    { id: "fire", label: "Fire/Hazard", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
    { id: "accident", label: "Accident", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { id: "harassment", label: "Harassment", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { id: "other", label: "Other Emergency", color: "bg-gray-100 text-gray-700 border-gray-200" },
  ]

  const handleLocationAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationEnabled(true)
          setFormData({
            ...formData,
            location: `${position.coords.latitude}, ${position.coords.longitude}`,
          })
        },
        (error) => {
          console.log("[v0] Location error:", error)
          alert("Unable to access location. Please enable location services.")
        },
      )
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/student/emergency/confirmation")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
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
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Emergency Reporting</h1>
                <p className="text-xs text-muted-foreground">Report an incident or emergency</p>
              </div>
            </div>
            <Link href="/student/emergency/history">
              <Button variant="outline" size="sm">
                <Clock className="w-4 h-4 mr-2" />
                History
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Emergency Hotline Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Need Immediate Help?</h2>
              <p className="text-red-100">Call our 24/7 emergency hotline for instant assistance</p>
            </div>
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-red-50">
              <Phone className="w-5 h-5 mr-2" />
              Call 1800-XXX-XXXX
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Emergency Type Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Emergency Type</CardTitle>
              <CardDescription>Choose the category that best describes your situation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-3">
                {emergencyTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, type: type.id })}
                    className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                      formData.type === type.id
                        ? type.color + " border-current"
                        : "bg-white border-border hover:border-muted-foreground"
                    }`}
                  >
                    <p className="font-semibold">{type.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Incident Details */}
          <Card>
            <CardHeader>
              <CardTitle>Incident Details</CardTitle>
              <CardDescription>Provide as much information as possible</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what happened, when it occurred, and any other relevant details..."
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">Be as detailed as possible to help responders</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="flex gap-2">
                  <Input
                    id="location"
                    placeholder="Enter location or use GPS"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant={locationEnabled ? "default" : "outline"}
                    onClick={handleLocationAccess}
                    className="flex-shrink-0"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {locationEnabled ? "Location Set" : "Use GPS"}
                  </Button>
                </div>
                {locationEnabled && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Location sharing enabled</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>Attach Evidence (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-muted-foreground transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Click to upload photos or videos</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG, MP4 up to 10MB</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Options */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Notifications</CardTitle>
              <CardDescription>Control how your report is handled</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={formData.anonymous}
                  onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                  className="mt-1 rounded border-border"
                />
                <div>
                  <label htmlFor="anonymous" className="font-medium text-foreground cursor-pointer">
                    Submit Anonymously
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Your identity will be hidden from the report. Emergency services will still be notified.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="notify" defaultChecked className="mt-1 rounded border-border" />
                <div>
                  <label htmlFor="notify" className="font-medium text-foreground cursor-pointer">
                    Receive Status Updates
                  </label>
                  <p className="text-sm text-muted-foreground">Get notifications about the progress of your report</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="emergency-contact" className="mt-1 rounded border-border" />
                <div>
                  <label htmlFor="emergency-contact" className="font-medium text-foreground cursor-pointer">
                    Notify Emergency Contact
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Alert your registered emergency contact about this incident
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="submit"
              size="lg"
              className="flex-1 bg-red-600 hover:bg-red-700"
              disabled={isSubmitting || !formData.type || !formData.description}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Submitting Report...
                </>
              ) : (
                <>
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Submit Emergency Report
                </>
              )}
            </Button>
            <Link href="/student/dashboard">
              <Button type="button" size="lg" variant="outline">
                Cancel
              </Button>
            </Link>
          </div>
        </form>

        {/* Help Text */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> All emergency reports are taken seriously and will be reviewed by campus security and
            relevant authorities. False reports may result in disciplinary action.
          </p>
        </div>
      </main>
    </div>
  )
}
