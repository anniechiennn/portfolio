"use client"

import { motion } from "framer-motion"
import Footer from "../components/Footer"

export default function Resume() {
  return (
    <>
      <div className="pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 mb-16"
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-6">Resume</h1>
          <p className="text-zinc-400 max-w-2xl">
            My professional journey and experience in operations and product management.
          </p>
        </motion.div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Experience</h2>
              <div className="space-y-12">
                {[1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-white/10 pl-8 relative"
                  >
                    <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-2" />
                    <h3 className="text-xl font-bold mb-2">Senior Operations Analyst</h3>
                    <p className="text-zinc-400 mb-2">Company Name • 2020 - Present</p>
                    <ul className="list-disc list-inside text-zinc-300 space-y-2">
                      <li>Led cross-functional teams to optimize operational processes</li>
                      <li>Developed and implemented data-driven strategies</li>
                      <li>Improved team efficiency by 25% through process optimization</li>
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Master of Business Administration</h3>
                  <p className="text-zinc-400">University Name • 2018 - 2020</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bachelor of Science in Operations Management</h3>
                  <p className="text-zinc-400">University Name • 2014 - 2018</p>
                </div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-bold mb-8">Skills</h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                  <ul className="list-disc list-inside text-zinc-300 space-y-2">
                    <li>Data Analysis</li>
                    <li>Process Optimization</li>
                    <li>Project Management</li>
                    <li>Business Intelligence</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                  <ul className="list-disc list-inside text-zinc-300 space-y-2">
                    <li>Leadership</li>
                    <li>Problem Solving</li>
                    <li>Communication</li>
                    <li>Team Collaboration</li>
                  </ul>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

