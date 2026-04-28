"use client"

import { motion } from "framer-motion"
import { Search, Map, PlayCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Skill Gap Analysis",
    description:
      "We conduct a deep diagnostic of your team's current capabilities against industry benchmarks and organizational goals — identifying precise skill gaps and growth opportunities.",
  },
  {
    number: "02",
    icon: Map,
    title: "Customized Training Plan",
    description:
      "Our learning architects design a tailored roadmap — selecting the right programs, expert instructors, delivery format, and timeline to address your specific business needs.",
  },
  {
    number: "03",
    icon: PlayCircle,
    title: "Flexible Program Delivery",
    description:
      "Execute the plan through live online sessions, on-site workshops, or a blended hybrid model — with real-time progress tracking and continuous learner support.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-2">
            How We Deliver Results
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            A Structured Three-Step Approach
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Precision-engineered to minimize disruption, maximize engagement,
            and deliver measurable outcomes from day one.
          </p>
        </motion.div>

        <div className="relative grid lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Connector line */}
          <div
            aria-hidden
            className="absolute hidden lg:block top-11 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-300 dark:from-blue-700 dark:via-indigo-600 dark:to-blue-700"
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative mb-6 z-10">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/25">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 flex items-center justify-center shadow-sm">
                    <span className="text-blue-600 font-bold text-xs">{i + 1}</span>
                  </div>
                </div>

                <div className="inline-block bg-blue-50 dark:bg-blue-950/40 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-blue-100 dark:border-blue-800">
                  Step {step.number}
                </div>

                <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
