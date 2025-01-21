"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import FaqSection from "./components/FaqSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="bg-gradient-radial from-black via-purple-900/20 to-teal-900/20 text-white">
      <HeroSection />
      <StatsSection />
      <WorkSection />
      <ExpertiseSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <motion.h1
        className="text-[8vw] md:text-[6vw] font-bold leading-none tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        YOUR NAME
      </motion.h1>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
          <motion.div
            className="w-1 h-1 bg-white rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { number: "99", label: "Projects Completed" },
    { number: "07", label: "Years Experience" },
    { number: "03", label: "Industry Awards" },
    { number: "10", label: "Happy Clients" },
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-6xl md:text-7xl font-bold mb-2">{stat.number}</div>
            <div className="text-sm opacity-60">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function WorkSection() {
  const projects = [
    {
      title: "Project One",
      category: "Strategy & Design",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B728207A0-0209-4F87-9AE1-6852765DE6DF%7D-98ZM5s4Glj51OXbv4atHYwjAOxmISf.png",
    },
    {
      title: "Project Two",
      category: "Web Design",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B728207A0-0209-4F87-9AE1-6852765DE6DF%7D-98ZM5s4Glj51OXbv4atHYwjAOxmISf.png",
    },
    {
      title: "Project Three",
      category: "Branding",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B728207A0-0209-4F87-9AE1-6852765DE6DF%7D-98ZM5s4Glj51OXbv4atHYwjAOxmISf.png",
    },
    {
      title: "Project Four",
      category: "Development",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B728207A0-0209-4F87-9AE1-6852765DE6DF%7D-98ZM5s4Glj51OXbv4atHYwjAOxmISf.png",
    },
  ]

  return (
    <section id="work" className="container mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-7xl md:text-8xl font-bold mb-12"
      >
        MY WORK
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="w-full grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm opacity-60">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ExpertiseSection() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const expertise = [
    {
      title: "OPERATIONS ANALYSIS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "PRODUCT STRATEGY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "DATA ANALYTICS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "PROJECT MANAGEMENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  return (
    <section id="expertise" className="container mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-7xl md:text-8xl font-bold mb-12"
      >
        CHECK MY
        <br />
        EXPERTISE
      </motion.h2>
      <div className="space-y-4">
        {expertise.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => setOpenItem(openItem === index ? null : index)}
              className="w-full flex justify-between items-center py-4 border-b border-white/20"
            >
              <span className="text-xl font-bold">{item.title}</span>
              <span className="text-2xl">{openItem === index ? "−" : "+"}</span>
            </button>
            {openItem === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="py-4 text-white/60"
              >
                {item.description}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-7xl md:text-8xl font-bold mb-12"
      >
        LET&apos;S
        <br />
        TALK
      </motion.h2>
      <form className="max-w-2xl">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-2 bg-white text-black font-medium hover:bg-opacity-90 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

