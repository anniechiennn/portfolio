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

