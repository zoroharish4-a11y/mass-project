import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 Government Arts College RK Nagar. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Made by <span className="font-medium text-foreground">BSC. Computer Science II Year</span>
            </p>
          </div>

          <div className="text-center md:text-right">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              About This Project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
