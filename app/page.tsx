import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Heart, AlertTriangle, BookOpen } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/college-building.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/85 to-slate-950/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-emerald-500/50 shadow-2xl p-1">
              <Image
                src="/college-emblem.png"
                alt="Government Arts College RK Nagar Logo"
                width={56}
                height={56}
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">Government Arts College</h1>
              <p className="text-base text-slate-200 font-medium drop-shadow-md">RK Nagar - Emergency Support Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/about">
              <Button
                variant="secondary"
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 shadow-lg font-semibold"
              >
                About
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="secondary"
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 shadow-lg"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </header>

        <main className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 text-balance drop-shadow-2xl">
              Your Safety, Our Priority
            </h2>
            <p className="text-xl text-slate-100 max-w-2xl mx-auto text-balance drop-shadow-lg font-medium">
              A comprehensive emergency reporting and support system designed to keep our campus community safe and
              connected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 hover:bg-white/10 transition-all hover:shadow-white/5">
              <div className="w-12 h-12 bg-red-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-red-400/30">
                <AlertTriangle className="w-6 h-6 text-red-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Emergency Reporting</h3>
              <p className="text-sm text-slate-300">
                Quick access to emergency services with real-time location sharing and instant alerts.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 hover:bg-white/10 transition-all hover:shadow-white/5">
              <div className="w-12 h-12 bg-pink-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-pink-400/30">
                <Shield className="w-6 h-6 text-pink-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Women's Safety</h3>
              <p className="text-sm text-slate-300">
                Dedicated support with panic button, safe routes, and 24/7 helpline access.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 hover:bg-white/10 transition-all hover:shadow-white/5">
              <div className="w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-green-400/30">
                <Heart className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Health Support</h3>
              <p className="text-sm text-slate-300">
                Mental health resources, medical assistance, and confidential counseling services.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 hover:bg-white/10 transition-all hover:shadow-white/5">
              <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-blue-400/30">
                <BookOpen className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Awareness Hub</h3>
              <p className="text-sm text-slate-300">
                Educational resources, safety tips, and community guidelines for prevention.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h3>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
              Join our community and access comprehensive safety and support services available 24/7.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="text-lg px-8 bg-white text-slate-900 hover:bg-slate-100 shadow-lg">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md shadow-lg"
                >
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <footer className="mt-24 text-center text-sm text-slate-200">
          <p>
            Emergency Hotline: <span className="font-semibold text-white">1800-XXX-XXXX</span>
          </p>
          <p className="mt-2">Available 24/7 for immediate assistance</p>
          <p className="mt-4 text-slate-300">Government Arts And Science College, RK Nagar</p>
          <p className="mt-4">
            <Link
              href="/about"
              className="text-slate-200 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              About This Project
            </Link>
          </p>
        </footer>
      </div>
    </div>
  )
}
