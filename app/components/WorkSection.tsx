"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "15 Years of Steam: Marketplace and Genre Trends",
    category: "Marketing Analytics | Machine Learning",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B561F1AA6-967A-4F07-BEDF-E9411FC686A1%7D-mi5ryS3h0rQ7HmE9V4JqDxwAnTadRN.png",
    link: "https://github.com/anniechiennn/steam-games-nlp",
  },
  {
    title: "Steam Library Analysis: Uncovering User Behaviour and Video Game Popularity",
    category: "Data Analysis | SQL BigQuery",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/er_diagram.jpg-VlfCq3HhMTp1ZXFchZQbKOzokpU0uQ.jpeg",
    link: "https://github.com/anniechiennn/steam-library-analysis",
  },
  {
    title: "Uber and Lyft Trip Fare Price Prediction",
    category: "Data Analysis | Machine Learning",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/price_prediction.jpg-BT7Lud6y814FXfl2be6jY8HGcS8Vgr.jpeg",
    link: "https://github.com/anniechiennn/ride-share-price-prediction",
  },
  {
    title: "Personalized News Recommendation System Using NLP",
    category: "Data Analysis | Machine Learning",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/news_sentiment.jpg-iOktSmIxx9pRiwccmgjVzOYAHuVWxe.jpeg",
    link: "https://github.com/anniechiennn/nlp-news-recommendation",
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="container mx-auto px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-7xl md:text-8xl font-bold mb-6">MY WORK</h2>
          <p className="text-zinc-500 max-w-lg">
            A collection of data analytics and machine learning projects focusing on market analysis and user behavior.
          </p>
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-6 py-2 border border-white/20 rounded-full text-sm"
            >
              All Work
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] block overflow-hidden w-[95%] mx-auto"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/60 transition-opacity group-hover:bg-black/75" />
              <div className="absolute inset-x-4 bottom-4">
                <motion.h3
                  className="text-lg font-medium mb-2"
                  initial={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-zinc-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.category}
                </motion.p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

