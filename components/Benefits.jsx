"use client"

import { motion } from "framer-motion"
import { Target, BarChart3, Users, Lightbulb, Shield, Zap } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Tailored Training Programs",
    description:
      "Custom learning paths aligned to your organization's specific goals, culture, and business challenges.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Outcomes",
    description:
      "Measurable ROI with skill gap analysis, progress tracking, and detailed performance metrics.",
  },
  {
    icon: Users,
    title: "Expert-Led Sessions",
    description:
      "Industry practitioners with 10+ years of hands-on experience lead every session and workshop.",
  },
  {
    icon: Lightbulb,
    title: "Industry-Relevant Curriculum",
    description:
      "Programs co-designed with Fortune 500 companies to reflect real market demands and emerging trends.",
  },
  {
    icon: Shield,
    title: "Certified Credentials",
    description:
      "Globally recognized certificates from IITs, IIMs, and international institutions employees are proud to display.",
  },
  {
    icon: Zap,
    title: "Flexible Delivery",
    description:
      "Online, offline, or blended formats — adapt to your team's schedule, geography, and learning style.",
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-2">
            The Accredian Edge
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Key Aspects of Our Strategic Training
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Built for enterprises that take learning seriously. Every feature
            designed to maximize team performance and deliver measurable business
            impact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/3 group-hover:to-indigo-600/3 transition-all duration-300 rounded-2xl" />

                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-4 shadow-md shadow-blue-500/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-semibold text-base mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
