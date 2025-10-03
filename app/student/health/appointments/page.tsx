"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft, User, Video, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedCounselor, setSelectedCounselor] = useState("")

  const counselors = [
    { id: "1", name: "Dr. Sarah Johnson", specialty: "Clinical Psychologist", available: true },
    { id: "2", name: "Dr. Michael Chen", specialty: "Mental Health Counselor", available: true },
    { id: "3", name: "Dr. Emily Rodriguez", specialty: "Therapist", available: false },
  ]

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/student/health">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Book Appointment</h1>
              <p className="text-xs text-muted-foreground">Schedule a counseling session</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Select Counselor */}
            <Card>
              <CardHeader>
                <CardTitle>Select Counselor</CardTitle>
                <CardDescription>Choose a mental health professional</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {counselors.map((counselor) => (
                  <button
                    key={counselor.id}
                    onClick={() => setSelectedCounselor(counselor.id)}
                    disabled={!counselor.available}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      selectedCounselor === counselor.id
                        ? "border-blue-500 bg-blue-50"
                        : counselor.available
                          ? "border-border hover:border-muted-foreground"
                          : "border-border opacity-50 cursor-not-allowed"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-blue-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{counselor.name}</p>
                          <p className="text-sm text-muted-foreground">{counselor.specialty}</p>
                        </div>
                      </div>
                      {counselor.available ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Available
                        </Badge>
                      ) : (
                        <Badge variant="outline">Unavailable</Badge>
                      )}
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Select Date & Time */}
            <Card>
              <CardHeader>
                <CardTitle>Select Date & Time</CardTitle>
                <CardDescription>Choose your preferred slot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Available Time Slots</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-sm rounded-lg border-2 transition-all ${
                          selectedTime === time
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-border hover:border-muted-foreground"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Session Details */}
            <Card>
              <CardHeader>
                <CardTitle>Session Details</CardTitle>
                <CardDescription>Tell us what you'd like to discuss</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sessionType">Session Type</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button type="button" variant="outline" className="bg-transparent">
                      <Video className="w-4 h-4 mr-2" />
                      Video
                    </Button>
                    <Button type="button" variant="outline" className="bg-transparent">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat
                    </Button>
                    <Button type="button" variant="outline" className="bg-transparent">
                      <User className="w-4 h-4 mr-2" />
                      In-Person
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Visit (Optional)</Label>
                  <Textarea
                    id="reason"
                    placeholder="Briefly describe what you'd like to discuss..."
                    rows={4}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground">This information is confidential</p>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="anonymous" className="mt-1 rounded border-border" />
                  <label htmlFor="anonymous" className="text-sm text-muted-foreground">
                    I understand this session is confidential and my information will be kept private
                  </label>
                </div>
              </CardContent>
            </Card>

            <Button size="lg" className="w-full" disabled={!selectedCounselor || !selectedDate || !selectedTime}>
              <Calendar className="w-5 h-5 mr-2" />
              Confirm Appointment
            </Button>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedCounselor ? (
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Counselor</p>
                      <p className="text-sm font-medium text-foreground">
                        {counselors.find((c) => c.id === selectedCounselor)?.name}
                      </p>
                    </div>

                    {selectedDate && (
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Date</p>
                        <p className="text-sm font-medium text-foreground">
                          {new Date(selectedDate).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    )}

                    {selectedTime && (
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Time</p>
                        <p className="text-sm font-medium text-foreground">{selectedTime}</p>
                      </div>
                    )}

                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Duration</p>
                      <p className="text-sm font-medium text-foreground">50 minutes</p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Cost</p>
                      <p className="text-sm font-medium text-foreground">Free for students</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Select a counselor to see booking details
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Important Info */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-base">Important Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-blue-900">
                <p>• Sessions are 50 minutes long</p>
                <p>• Please arrive 5 minutes early</p>
                <p>• Free cancellation up to 24 hours before</p>
                <p>• All sessions are confidential</p>
                <p>• You can reschedule anytime</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
