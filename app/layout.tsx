import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import Navigation from "./components/Navigation"
import MouseCursor from "./components/MouseCursor"
import type { Metadata } from "next"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Annie Chien - Portfolio",
    template: "%s | Annie Chien",
  },
  description: "Operations Analyst & Marketing Specialist Portfolio",
  keywords: ["portfolio", "operations analyst", "marketing specialist", "data analytics"],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AC_logo-esPm2FbM4dKsPh3rr0uvANUX0poXb6.png",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AC_logo-esPm2FbM4dKsPh3rr0uvANUX0poXb6.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AC_logo-esPm2FbM4dKsPh3rr0uvANUX0poXb6.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AC_logo-esPm2FbM4dKsPh3rr0uvANUX0poXb6.png",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${spaceGrotesk.className} text-white antialiased`}>
        <MouseCursor />
        <Navigation />
        {children}
      </body>
    </html>
  )
}

