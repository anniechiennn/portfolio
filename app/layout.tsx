import type React from "react"
import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import Navigation from "./components/Navigation"
import MouseCursor from "./components/MouseCursor"
import type { Metadata } from "next"
import Script from "next/script"

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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DHJCQ26ZNK" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DHJCQ26ZNK');
          `}
        </Script>
      </head>
      <body className={`${spaceGrotesk.className} text-white antialiased`}>
        <MouseCursor />
        <Navigation />
        {children}
      </body>
    </html>
  )
}



import './globals.css'