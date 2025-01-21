import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import Navigation from "./components/Navigation"
import MouseCursor from "./components/MouseCursor"
import type { Metadata } from "next"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Your Name - Portfolio",
    template: "%s | Your Name",
  },
  description: "Operations Analyst & Product Manager Portfolio",
  keywords: ["portfolio", "operations analyst", "product manager"],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
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

