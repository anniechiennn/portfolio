"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import StatsSection from "./StatsSection"
import WorkSection from "./WorkSection"
import FaqSection from "./FaqSection"
import Footer from "./Footer"
import { useState } from "react"
import Link from "next/link"

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
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="w-full max-w-7xl mx-auto">
        <motion.p
          className="text-sm mb-4 text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ( Hello! )
        </motion.p>
        <motion.h1
          className="text-[8vw] md:text-[6vw] font-bold leading-none tracking-tighter mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          I&apos;M ANNIE CHIEN
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Link href="/projects">
            <motion.div
              className="group relative aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/claudio-schwarz-fyeOxvYvIyY-unsplash.jpg-L4nge0PzPES9nywG2EVG3eGEiRE8sK.jpeg"
                alt="Projects"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 transition-opacity group-hover:opacity-75" />
              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl font-bold mb-1">Projects</h2>
                <p className="text-sm text-zinc-300">Data & AI</p>
              </div>
            </motion.div>
          </Link>

          <Link href="/resume">
            <motion.div
              className="group relative aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/andrew-neel-cckf4TsHAuw-unsplash.jpg-ujZ9aEeWMgCyeGvnxntHdaZhY91D4r.jpeg"
                alt="Resume"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 transition-opacity group-hover:opacity-75" />
              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl font-bold mb-1">Resume</h2>
                <p className="text-sm text-zinc-300">Experience & Skills</p>
              </div>
            </motion.div>
          </Link>

          <motion.div
            className="group relative aspect-[4/3] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/S__145498240.jpg-Gqg6tBhj54DTPYzn2zKp88lDromZ29.jpeg"
              alt="Annie Chien"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 transition-opacity group-hover:opacity-75" />
            <div className="absolute bottom-4 left-4">
              <h2 className="text-2xl font-bold mb-1">Me - Annie Chien</h2>
              <p className="text-sm text-zinc-300">Operations Analyst | Marketing</p>
            </div>
          </motion.div>
        </div>

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
      </div>
    </section>
  )
}

function ExpertiseSection() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const expertise = [
    {
      title: "OPERATIONS ANALYSIS",
      description: "Leveraging data-driven insights to optimize business processes and drive operational efficiency.",
    },
    {
      title: "PRODUCT STRATEGY",
      description:
        "Developing and implementing strategic product roadmaps aligned with business goals and market demands.",
    },
    {
      title: "DATA ANALYTICS",
      description:
        "Utilizing advanced analytics tools to extract meaningful insights and support decision-making processes.",
    },
    {
      title: "PROJECT MANAGEMENT",
      description: "Leading cross-functional teams to deliver successful projects on time and within budget.",
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
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-7xl md:text-8xl font-bold"
        >
          LET&apos;S
          <br />
          CONNECT
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 pt-4"
        >
          <p className="text-xl">
            <span className="font-bold">E-mail:</span>{" "}
            <a href="mailto:annie.ia.chien@gmail.com" className="hover:underline">
              annie.ia.chien@gmail.com
            </a>
          </p>
          <p className="text-xl">
            <span className="font-bold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/anniechien/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/anniechien
            </a>
          </p>
          <p className="text-xl">
            <span className="font-bold">GitHub:</span>{" "}
            <a
              href="https://github.com/anniechiennn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/anniechiennn
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

