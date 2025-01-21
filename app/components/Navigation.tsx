"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import React from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference bg-black/50 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            YOUR NAME
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Projects", "Blog", "Resume", "Contact"].map((item, index) => (
              <React.Fragment key={`nav-${index}`}>
                {item === "Contact" ? (
                  <a
                    href="/#contact"
                    className="hover:opacity-60 transition-opacity text-white"
                    onClick={(e) => {
                      if (window.location.pathname === "/") {
                        e.preventDefault()
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    {item}
                  </a>
                ) : (
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:opacity-60 transition-opacity text-white"
                  >
                    {item}
                  </Link>
                )}
              </React.Fragment>
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
            {["Home", "Projects", "Blog", "Resume", "Contact"].map((item, index) => (
              <React.Fragment key={`nav-mobile-${index}`}>
                {item === "Contact" ? (
                  <a
                    href="/#contact"
                    className="block py-2 hover:opacity-60 transition-opacity text-white"
                    onClick={(e) => {
                      if (window.location.pathname === "/") {
                        e.preventDefault()
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }
                      setIsOpen(false)
                    }}
                  >
                    {item}
                  </a>
                ) : (
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="block py-2 hover:opacity-60 transition-opacity text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}

