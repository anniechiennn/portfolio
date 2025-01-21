import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import Navigation from "./components/Navigation"
import MouseCursor from "./components/MouseCursor"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Your Name - Portfolio",
  description: "Operations Analyst & Product Manager Portfolio",
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
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}

