"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    // Add event listener for route changes
    window.addEventListener("popstate", handleRouteChange)

    return () => {
      // Remove event listener on cleanup
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/#contact"
    }
    setIsOpen(false)
  }

  const navItems = ["Home", "Projects", "Resume", "Contact"]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference bg-black/50 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            ANNIE CHIEN
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item} item={item} onClick={item === "Contact" ? handleContactClick : undefined} />
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
            className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm p-4 md:hidden"
          >
            {navItems.map((item) => (
              <NavItem
                key={item}
                item={item}
                onClick={(e) => {
                  if (item === "Contact") {
                    handleContactClick(e)
                  } else {
                    setIsOpen(false)
                  }
                }}
                mobile
              />
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}

interface NavItemProps {
  item: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  mobile?: boolean
}

function NavItem({ item, onClick, mobile = false }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
  const href = item === "Contact" ? "/#contact" : item === "Home" ? "/" : `/${item.toLowerCase()}`

  return (
    <Link
      href={href}
      className={`${mobile ? "block py-2" : ""} hover:opacity-60 transition-opacity text-white ${isActive ? "font-bold" : ""}`}
      onClick={(e) => {
        if (onClick) {
          onClick(e)
        } else {
          window.scrollTo(0, 0)
        }
      }}
    >
      {item}
    </Link>
  )
}

