"use client"

import { motion, useMotionValue, useTransform, animate, MotionValue } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const AnimatedNumber = ({ value, shouldStart }: { value: number; shouldStart: boolean }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest: number) => {
    return Math.min(latest, value).toFixed(0).padStart(2, "0")
  })

  useEffect(() => {
    if (shouldStart) {
      const animation = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      })

      return animation.stop
    }
    // Reset when section is out of view
    count.set(0)
  }, [count, value, shouldStart])

  return <motion.span className="font-mono tabular-nums inline-block w-full">{rounded}</motion.span>
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Trigger when 30% of the section is visible
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const stats = [
    { number: 30, label: "PLUS PROJECTS COMPLETED" },
    { number: 10, label: "PLUS ANALYTICS TOOLS MASTERED" },
    { number: 4, label: "PLUS YEARS EXPERIENCE" },
    { number: 2, label: "PROGRAMMING LANGAUGE PROFICIENT" },
  ]

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-8xl md:text-9xl font-bold mb-4">
              <AnimatedNumber value={stat.number} shouldStart={isVisible} />
            </div>
            <div className="text-zinc-500 text-sm uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

