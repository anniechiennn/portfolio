"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Footer from "./Footer"

const projects = [
  {
    title: "Brand Identity Design",
    category: "Branding & Strategy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui eu mi viverra molestie.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BFE5F1770-F5C2-42A9-9FC0-F7119A614271%7D-Q6nUTYR1T9O6sPPDC3GTKQUNswyIwj.png",
    year: "2023",
  },
  {
    title: "Web Platform Development",
    category: "Web Design & Dev",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui eu mi viverra molestie.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BFE5F1770-F5C2-42A9-9FC0-F7119A614271%7D-Q6nUTYR1T9O6sPPDC3GTKQUNswyIwj.png",
    year: "2023",
  },
  {
    title: "Product Design System",
    category: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui eu mi viverra molestie.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BFE5F1770-F5C2-42A9-9FC0-F7119A614271%7D-Q6nUTYR1T9O6sPPDC3GTKQUNswyIwj.png",
    year: "2022",
  },
]

export default function ProjectsContent() {
  return (
    <div className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 mb-16"
      >
        <h1 className="text-7xl md:text-8xl font-bold mb-6">Projects</h1>
        <p className="text-zinc-400 max-w-2xl">
          A collection of my selected works and projects. Each piece represents a unique challenge and solution.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="space-y-4">
                  <div className="text-zinc-500 text-sm tracking-wider">{project.year}</div>
                  <h2 className="text-4xl font-bold">{project.title}</h2>
                  <p className="text-zinc-400">{project.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-zinc-500">{project.category}</span>
                  <motion.a href="#" className="inline-flex items-center text-sm font-medium" whileHover={{ x: 5 }}>
                    View Project
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
              <div className={`aspect-[4/3] relative ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

