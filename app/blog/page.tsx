"use client"

import { motion } from "framer-motion"
import Footer from "../components/Footer"

const posts = [
  {
    title: "The Future of Operations Management",
    excerpt: "Exploring how AI and automation are reshaping operations management...",
    date: "2023-12-01",
    readTime: "5 min read",
  },
  {
    title: "Optimizing Product Development Cycles",
    excerpt: "Key strategies for streamlining product development and delivery...",
    date: "2023-11-15",
    readTime: "8 min read",
  },
  // Add more blog posts as needed
]

export default function Blog() {
  return (
    <>
      <div className="pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 mb-16"
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-6">Blog</h1>
          <p className="text-zinc-400 max-w-2xl">
            Thoughts, insights, and experiences from my journey in operations and product management.
          </p>
        </motion.div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-12 max-w-3xl mx-auto">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/10 pb-12 last:border-0"
              >
                <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 hover:text-zinc-300 transition-colors">
                  <a href="#">{post.title}</a>
                </h2>
                <p className="text-zinc-400 mb-6">{post.excerpt}</p>
                <a href="#" className="text-sm font-medium hover:text-zinc-300 transition-colors">
                  Read More →
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

