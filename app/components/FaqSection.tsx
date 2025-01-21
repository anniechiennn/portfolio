"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const faqItems = [
  {
    title: "MY WORKFLOW",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui eu mi viverra molestie.",
  },
  {
    title: "NO-CODING",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui eu mi viverra molestie.",
  },
  {
    title: "REVISIONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui eu mi viverra molestie.",
  },
  {
    title: "CO-WORK",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui eu mi viverra molestie.",
  },
  {
    title: "THE BUDGET",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui eu mi viverra molestie.",
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
              YOU ASK
              <br />I ANSWER
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500"
            >
              Can't find your question? Ask me directly.
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

