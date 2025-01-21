"use client"

import { motion } from "framer-motion"
import StatsSection from "./StatsSection"
import WorkSection from "./WorkSection"
import FaqSection from "./FaqSection"
import Footer from "./Footer"
import { useState } from "react"

export default function HomeContent() {
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

