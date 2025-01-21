"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-zinc-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.h1 className="text-2xl font-bold" whileHover={{ scale: 1.05 }}>
            Your Name
          </motion.h1>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {["Home", "Projects", "Blog", "Resume"].map((item) => (
            <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
              <motion.span className="hover:text-zinc-300 transition-colors" whileHover={{ y: -2 }}>
                {item}
              </motion.span>
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          className="md:hidden bg-zinc-800 p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {["Home", "Projects", "Blog", "Resume"].map((item) => (
            <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
              <motion.div className="block py-2 hover:text-zinc-300 transition-colors" whileHover={{ x: 5 }}>
                {item}
              </motion.div>
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  )
}

export default Header

