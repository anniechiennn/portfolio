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

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  const navItems = ["Home", "Projects", "Resume"]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center h-14">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              ANNIE CHIEN
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
              className="md:hidden bg-black/90 backdrop-blur-sm"
            >
              {navItems.map((item) => (
                <NavItem key={item} item={item} onClick={() => setIsOpen(false)} mobile />
              ))}
            </motion.div>
          )}
        </div>
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
      className={`${mobile ? "block py-2" : ""} hover:opacity-60 transition-opacity text-white ${
        isActive ? "font-bold" : ""
      }`}
      onClick={onClick}
    >
      {item}
    </Link>
  )
}

