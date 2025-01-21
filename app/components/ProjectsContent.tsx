"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Footer from "./Footer"

const projects = [
  {
    title: "15 Years of Steam: Marketplace and Genre Trends",
    category: "Marketing Strategy | Machine Learning",
    description:
      "Analyzing 71000+ games on Steam, I compiled marketplace trends through Python EDA and visualized through Tableau dashboard. To provide actionable suggestions, I used Natural Language Processing to find out the best SEO strategy for the game page.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B561F1AA6-967A-4F07-BEDF-E9411FC686A1%7D-mi5ryS3h0rQ7HmE9V4JqDxwAnTadRN.png",
    link: "https://github.com/anniechiennn/steam-games-nlp",
    year: "2024",
  },
  {
    title: "Steam Library Analysis: Uncovering User Behaviour and Video Game Popularity",
    category: "Data Analysis | SQL BigQuery",
    description:
      "Focused on player engagement, sentiments, and pricing dynamics, the goal is to provide actionable insights to game companies, aiding them in creating games that resonate with their audience.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/er_diagram.jpg-VlfCq3HhMTp1ZXFchZQbKOzokpU0uQ.jpeg",
    link: "https://github.com/anniechiennn/steam-library-analysis",
    year: "2023",
  },
  {
    title: "Personalized News Recommendation System Using NLP",
    category: "Data Analysis | Machine Learning",
    description:
      "Used a news dataset to examine news website users' browsing patterns and apply their knowledge to build a model which helps websites recommend articles to viewers based on the patterns.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/news_sentiment.jpg-iOktSmIxx9pRiwccmgjVzOYAHuVWxe.jpeg",
    link: "https://github.com/anniechiennn/nlp-news-recommendation",
    year: "2023",
  },
  {
    title: "Uber and Lyft Trip Fare Price Prediction",
    category: "Data Analysis | Machine Learning",
    description:
      "The primary objective is to provide a prediction of Uber and Lyft surge prices under different weather and geolocation factors, such as: temperature, rain, wind, pick up location, and destination, to enhance passengers' ability to make informed booking decisions.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/price_prediction.jpg-BT7Lud6y814FXfl2be6jY8HGcS8Vgr.jpeg",
    link: "https://github.com/anniechiennn/ride-share-price-prediction",
    year: "2023",
  },
  {
    title: "Deciphering Key Influences on Restaurant Success within UberEats with Python Data Analysis",
    category: "Data Analysis | Business Strategy",
    description:
      "Analyzing restaurant performance data across multiple states with a focus on Texas, this project examines key factors influencing success on UberEats including location, pricing, ratings, and menu composition to provide actionable insights for restaurant owners.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ue.jpg-rw79l5K8dXY9wmWgjPsD5KfQloLsEO.jpeg",
    link: "https://github.com/anniechiennn/ubereats-merchant-analysis",
    year: "2023",
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
          A collection of my selected works and projects related to data analytics, marketing, and AI.
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
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
              <div className={`aspect-[4/3] relative ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

