"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, MessageSquare, Home, Clock } from "lucide-react"
import Link from "next/link"

export default function EmergencyConfirmationPage() {
  const reportId = "EMR-" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="border-green-200 shadow-lg">
          <CardContent className="pt-12 pb-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>

            <h1 className="text-3xl font-bold text-foreground mb-3">Report Submitted Successfully</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your emergency report has been received and is being processed
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <p className="text-sm text-blue-900 mb-2">Report ID</p>
              <p className="text-2xl font-bold text-blue-700">{reportId}</p>
              <p className="text-xs text-blue-700 mt-2">Save this ID for future reference</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
              <div className="bg-white border border-border rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Response Time</p>
                    <p className="text-sm text-muted-foreground">5-10 minutes</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Campus security has been notified and will respond shortly
                </p>
              </div>

              <div className="bg-white border border-border rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Status Updates</p>
                    <p className="text-sm text-muted-foreground">Via notifications</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">You'll receive updates as your report is processed</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
              <div className="flex items-start gap-3 text-left">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-600">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Immediate Review</p>
                  <p className="text-sm text-muted-foreground">
                    Campus security reviews your report and assesses the situation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-600">2</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Response Dispatch</p>
                  <p className="text-sm text-muted-foreground">Appropriate personnel are dispatched to your location</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-600">3</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Follow-up</p>
                  <p className="text-sm text-muted-foreground">
                    You'll be contacted for any additional information needed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Need immediate assistance?</p>
              <div className="flex gap-3 justify-center">
                <Button size="lg" variant="outline" className="bg-transparent">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Hotline
                </Button>
                <Link href="/student/dashboard">
                  <Button size="lg">
                    <Home className="w-5 h-5 mr-2" />
                    Back to Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
