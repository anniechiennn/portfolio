import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-zinc-400 mb-8">Page not found</p>
        <Link href="/" className="inline-block px-6 py-3 bg-white text-black hover:bg-opacity-90 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  )
}

