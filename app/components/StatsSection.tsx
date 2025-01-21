"use client"

import { motion, useMotionValue, useTransform, animate, MotionValue } from "framer-motion"
import { useEffect } from "react"

const AnimatedNumber = ({ value }: { value: number }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest: number) => {
    return latest.toFixed(0).padStart(2, "0")
  })

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1],
    })

    return controls.stop
  }, [count, value])

  return <motion.span className="font-mono tabular-nums inline-block w-full">{rounded}</motion.span>
}

export default function StatsSection() {
  const stats = [
    { number: 99, label: "Projects Completed" },
    { number: 7, label: "Years Experience" },
    { number: 3, label: "Industry Awards" },
    { number: 10, label: "Happy Clients" },
  ]

  return (
    <section className="container mx-auto px-4 py-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-8xl md:text-9xl font-bold mb-4">
              <AnimatedNumber value={stat.number} />
            </div>
            <div className="text-zinc-500 text-sm uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

