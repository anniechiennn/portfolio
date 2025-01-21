"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Project 1",
    category: "Branding & Strategy",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BFE5F1770-F5C2-42A9-9FC0-F7119A614271%7D-Q6nUTYR1T9O6sPPDC3GTKQUNswyIwj.png",
  },
  {
    title: "Project 2",
    category: "Web Design & Dev",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BFE5F1770-F5C2-42A9-9FC0-F7119A614271%7D-Q6nUTYR1T9O6sPPDC3GTKQUNswyIwj.png",
  },
  {
    title: "Project 3",
    category: "Branding",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BFE5F1770-F5C2-42A9-9FC0-F7119A614271%7D-Q6nUTYR1T9O6sPPDC3GTKQUNswyIwj.png",
  },
  {
    title: "Project 4",
    category: "Development",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BFE5F1770-F5C2-42A9-9FC0-F7119A614271%7D-Q6nUTYR1T9O6sPPDC3GTKQUNswyIwj.png",
  },
  {
    title: "Project 5",
    category: "Design",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BFE5F1770-F5C2-42A9-9FC0-F7119A614271%7D-Q6nUTYR1T9O6sPPDC3GTKQUNswyIwj.png",
  },
  {
    title: "Project 6",
    category: "Strategy",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BFE5F1770-F5C2-42A9-9FC0-F7119A614271%7D-Q6nUTYR1T9O6sPPDC3GTKQUNswyIwj.png",
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="container mx-auto px-4 py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-7xl md:text-8xl font-bold mb-6">MY WORK</h2>
          <p className="text-zinc-500 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui eu mi viverra molestie.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 px-6 py-2 border border-white/20 rounded-full text-sm"
          >
            All Work
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3]"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-sm text-zinc-400">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

