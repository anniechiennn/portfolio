"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const faqItems = [
  {
    title: "OPERATIONAL EXCELLENCE",
    description: "Analyzed delivery partner data using SQL and Tableau, improving retention by 5% QoQ through optimized incentives and campaigns.",
  },
  {
    title: "REVENUE OPERATIONS",
    description: "Conducted A/B testing and BI analysis to optimize pricing strategies, increasing paid user percentage by 15% and ARPPU by 40%.",
  },
  {
    title: "PROCESS OPTIMIZATION",
    description: "Implemented demand forecasting and automated inventory management processes, reducing operational costs by 5% while maintaining service quality.",
  },
  {
    title: "INDUSTRY RESEARCH",
    description: "Published podcast industry reports reaching 20+ media outlets, generating 10,000+ downloads through comprehensive data analysis and insights.",
  },
  {
    title: "DIGITAL GROWTH",
    description: "Drove 40% growth in Daily Active Users through optimized digital campaigns and improved homepage click-through rates by 13% using data-driven content strategies.",
  },
]

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  return (
    <section className="container mx-auto px-4 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-bold leading-none mb-8"
            >
              CAREER
              <br />HIGHLIGHTS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500"
            >
              What I achieved in the past.
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50"
              >
                <button
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  className="w-full flex justify-between items-center p-4 text-left border border-white/10"
                >
                  <span className="text-lg font-medium">{item.title}</span>
                  <span className="text-2xl">{openItem === index ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border border-t-0 border-white/10"
                    >
                      <p className="p-4 text-zinc-400">{item.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

