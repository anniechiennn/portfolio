"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  const navItems = ["Home", "Projects", "Resume"]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference bg-black/50 backdrop-blur-sm pt-4">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative w-10 h-10 -ml-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AC_logo-esPm2FbM4dKsPh3rr0uvANUX0poXb6.png"
              alt="AC Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item} item={item} />
            ))}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-black/60 backdrop-blur-md p-4 md:hidden"
          >
            {navItems.map((item) => (
              <NavItem key={item} item={item} onClick={() => setIsOpen(false)} mobile />
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}

interface NavItemProps {
  item: string
  onClick?: () => void
  mobile?: boolean
}

function NavItem({ item, onClick, mobile = false }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
  const href = item === "Home" ? "/" : `/${item.toLowerCase()}`

  return (
    <Link
      href={href}
      className={`${
        mobile ? "block py-2 hover:bg-white/10 px-4 rounded transition-colors" : ""
      } hover:opacity-60 transition-opacity text-white ${isActive ? "font-bold" : ""}`}
      onClick={onClick}
    >
      {item}
    </Link>
  )
}

