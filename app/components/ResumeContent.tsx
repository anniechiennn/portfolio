"use client"

import { motion } from "framer-motion"
import Footer from "./Footer"

export default function ResumeContent() {
  return (
    <div className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 mb-16"
      >
        <h1 className="text-7xl md:text-8xl font-bold mb-6">Resume</h1>
        <p className="text-zinc-400 max-w-2xl">
          Operations Analyst and former Product Manager with 4+ years of experience translating data insights into
          strategic initiatives.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-12">
              {[
                {
                  title: "Operations Analyst",
                  company: "Uber - Uber Eats",
                  summary: "(A leading online food ordering and delivery platform operating in 45 countries)",
                  period: "Feb 2023 - Aug 2023",
                  location: "Taipei, Taiwan",
                  responsibilities: [
                    "Analyzed completion rates of trip types and client satisfaction scores using SQL, Tableau, and Excel to optimize user campaign incentives and enhanced delivery partner retention by 5% QoQ",
                    "Led sustainability initiatives partnering with the largest electric scooter provider in Taiwan, leading to 10% increase in sustainable online hours",
                    "Implemented demand forecasting and process automation in inventory management to reduce costs by 5%",
                    "Collaborated with cross-functional Agile teams to address operational challenges and executed safety initiatives",
                  ],
                },
                {
                  title: "Marketing Operations Manager",
                  company: "SoundOn Group",
                  summary: "(Taiwan's largest podcast platform offering hosting and content production services)",
                  period: "Mar 2021 - May 2022",
                  location: "Taipei, Taiwan",
                  responsibilities: [
                    "Led go-to-market strategies by aligning the product roadmap with cross-functional goals",
                    "Published podcast industry reports on 20+ new outlets, attracting 10,000+ downloads",
                    "Increased user acquisition through optimized digital media campaigns, resulting in 30% Daily Active User growth",
                    "Employed SQL and Tableau to assess user behavior, driving a 13% improvement in homepage click-through rates",
                  ],
                },
                {
                  title: "Project Manager",
                  company: "ARPlanet",
                  summary:
                    "(An IPO enterprise in Taiwan, dedicated to providing augmented and virtual reality solutions.)",
                  period: "Dec 2020 - Mar 2021",
                  location: "Taipei, Taiwan",
                  responsibilities: [
                    "Executed NCCU library's government tender to implement AR in multiple parts of the library, which contributed 20% of quarterly earnings.",
                    "Proposed augmented reality solutions to clients ranging from public units to semiconductor companies, and led crossfunction tasks to ensure project timeline.",
                  ],
                },
                {
                  title: "Product Manager",
                  company: "9SPlay Entertainment Technology",
                  summary: "(A mobile games development and publishing company)",
                  period: "Apr 2019 - Apr 2020",
                  location: "Taipei, Taiwan",
                  responsibilities: [
                    "Optimized live-service game mechanics and pricing strategies, increasing paid user percentage by 15% and ARPPU by 40%",
                    "Presented daily, monthly, and quarterly data reports to communicate results",
                    "Coordinated with global development teams to implement seasonal in-game events",
                  ],
                },
                {
                  title: "Product Manager Intern",
                  company: "Initium Medium",
                  summary:
                    "(Singapore-based digital media platform with over 33k paid subscriptions.)",
                  period: "Jul 2018 - Oct 2018",
                  location: "Taipei, Taiwan",
                  responsibilities: [
                    "Managed web and mobile product backlog and provided product requirements documents to developers.",
                    "Conducted EDA to find insights with data extracted from Google Play Console, App Store Connect, and Google Analytics, which increased feature engagement by 10%.",
                  ],
                },
                {
                  title: "Product Manager Intern",
                  company: "KK Company - KKBOX",
                  summary: "(Asia's leading music streaming service with over 12 million users)",
                  period: "Aug 2017 - Jun 2018",
                  location: "Taipei, Taiwan",
                  responsibilities: [
                    "Generated daily KPI reports of the KKBOX music streaming app with data extracted from Mixpanel and Firebase. ",
                    "Contributed to the training of the song recognition machine learning model with data tagging.",
                  ],
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 border-white/10 pl-8 relative"
                >
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-2" />
                  <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                  <p className="text-zinc-300 mb-1">
                    {job.company} {job.summary}
                  </p>
                  <p className="text-zinc-400 mb-4">
                    • {job.period} • {job.location}
                  </p>
                  <ul className="list-disc list-inside text-zinc-300 space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Master of Science, Business Analytics</h3>
                <p className="text-zinc-400">Boston University Questrom School of Business • Sep 2023 - Jan 2025</p>
                <p className="text-zinc-300 mt-2">Dean's Achievement Scholarship</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Bachelor of Arts, Foreign Language and Literature</h3>
                <p className="text-zinc-400">National Taiwan University • Sep 2014 - Feb 2019</p>
              </div>
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                <ul className="list-disc list-inside text-zinc-300 space-y-2">
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Tableau</li>
                  <li>Looker</li>
                  <li>Excel</li>
                  <li>Statistical Analysis</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Business Skills</h3>
                <ul className="list-disc list-inside text-zinc-300 space-y-2">
                  <li>Business Intelligence</li>
                  <li>A/B Testing</li>
                  <li>Process Automation</li>
                  <li>Business Strategy</li>
                  <li>Quantitative Analysis</li>
                  <li>Cross-functional Communication</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

