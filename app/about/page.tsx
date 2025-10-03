import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Code, Shield, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/college-building.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b bg-white/10 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full border-2 border-emerald-600 overflow-hidden bg-white p-1">
                  <Image src="/college-emblem.png" alt="College Logo" fill className="object-contain" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Government Arts And Science College</h1>
                  <p className="text-sm text-slate-600">RK Nagar</p>
                </div>
              </Link>
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-emerald-600/20 backdrop-blur-sm text-white border-b border-white/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About This Project</h1>
            <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
              Emergency Reporting Site - A comprehensive safety and support portal for campus community
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Project Overview */}
          <Card className="mb-8 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="w-6 h-6 text-emerald-600" />
                Project Overview
              </CardTitle>
              <CardDescription>Emergency Reporting Site</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                The Emergency Reporting Site is a comprehensive web-based platform designed to enhance campus safety and
                provide immediate support to students, faculty, and staff. This portal integrates multiple safety
                modules including emergency reporting, women's safety features, health support services, and an
                awareness hub.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                  <Shield className="w-5 h-5 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Emergency Reporting</h3>
                    <p className="text-sm text-slate-600">Quick incident reporting with real-time location sharing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                  <Users className="w-5 h-5 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Women's Safety</h3>
                    <p className="text-sm text-slate-600">Panic button, safe routes, and 24/7 support access</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Creator Section */}
          <Card className="mb-8 border-emerald-200 bg-gradient-to-br from-white/95 to-emerald-50/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Award className="w-6 h-6 text-emerald-600" />
                Project Creator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-emerald-500 ring-offset-4">
                  <Image
                    src="/harish-profile.jpeg"
                    alt="M. Harish - Developer and Designer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-4xl font-bold text-slate-900 mb-2 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                    M. HARISH
                  </h3>
                  <p className="text-xl text-emerald-700 font-semibold mb-4">BSC Computer Science IIYEear</p>
                  <div className="space-y-2 text-slate-700">
                    <p className="flex items-center justify-center md:justify-start gap-2">
                      <Code className="w-4 h-4 text-emerald-600" />
                      <span className="font-medium">Role:</span> Lead Developer & Designer
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span className="font-medium">Project:</span> Emergency Reporting website
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg border border-emerald-200">
                    <p className="text-sm text-slate-600 italic">
                      "Dedicated to creating a safer campus environment through technology and innovation. This project
                      aims to provide immediate support and resources to our college community."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Development Team */}
          <Card className="mb-8 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="w-6 h-6 text-emerald-600" />
                Development Team
              </CardTitle>
              <CardDescription>Made by BSC. Computer Science II Year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-6 rounded-lg border border-emerald-200">
                <p className="text-slate-700 leading-relaxed mb-4">
                  This project was developed by the talented students of the BSC Computer Science II Year program at
                  Government Arts College, RK Nagar. The team worked collaboratively to design, develop, and implement
                  this comprehensive emergency reporting and safety portal.
                </p>
                <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                  <Award className="w-5 h-5" />
                  <span>BSC. Computer Science II Year - Government Arts And Science College, RK Nagar</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies Used */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Code className="w-6 h-6 text-emerald-600" />
                Technologies Used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "shadcn/ui",
                  "LocalStorage",
                  "Responsive Design",
                  "Modern UI/UX",
                ].map((tech) => (
                  <div key={tech} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center">
                    <span className="text-sm font-medium text-slate-700">{tech}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="border-t bg-white/10 backdrop-blur-md mt-12">
          <div className="container mx-auto px-4 py-6">
            <div className="text-center text-sm text-slate-600">
              <p>&copy; {new Date().getFullYear()} Government Arts College And science, RK Nagar. All rights reserved.</p>
              <p className="mt-1">Emergency Reporting Site - Developed by BSC. Computer Science II Year</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
