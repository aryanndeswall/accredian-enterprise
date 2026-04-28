"use client"

import { motion } from "framer-motion"
import {
  Cpu,
  BrainCircuit,
  Crown,
  Database,
  Settings2,
  Globe,
  TrendingUp,
} from "lucide-react"

const domains = [
  {
    icon: Cpu,
    title: "Product & Innovation Hub",
    desc: "Product management, design thinking, and agile innovation frameworks.",
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: BrainCircuit,
    title: "Gen-AI Mastery",
    desc: "Generative AI, LLMs, prompt engineering, and AI-first product development.",
    gradient: "from-violet-500 to-violet-600",
    bg: "bg-violet-50 dark:bg-violet-950/20",
  },
  {
    icon: Crown,
    title: "Leadership Elevation",
    desc: "Executive leadership, strategic thinking, and organizational change management.",
    gradient: "from-amber-500 to-amber-600",
    bg: "bg-amber-50 dark:bg-amber-950/20",
  },
  {
    icon: Database,
    title: "Tech & Data Insights",
    desc: "Data science, ML engineering, cloud computing, and advanced analytics.",
    gradient: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
  },
  {
    icon: Settings2,
    title: "Operations Excellence",
    desc: "Process optimization, supply chain resilience, and operational efficiency.",
    gradient: "from-slate-600 to-slate-700",
    bg: "bg-slate-50 dark:bg-slate-800/50",
  },
  {
    icon: Globe,
    title: "Digital Enterprise",
    desc: "Digital transformation, e-commerce strategy, and enterprise architecture.",
    gradient: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
  },
  {
    icon: TrendingUp,
    title: "Fintech Innovation Lab",
    desc: "Blockchain, payments, risk management, and financial technology ecosystems.",
    gradient: "from-rose-500 to-rose-600",
    bg: "bg-rose-50 dark:bg-rose-950/20",
  },
]

export default function Domains() {
  return (
    <section id="domains" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-2">
            Our Domain Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Specialized Programs to Fuel Innovation
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Deep expertise across 7 critical business domains — each with
            structured tracks and measurable outcomes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {domains.map((domain, i) => {
            const Icon = domain.icon
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 cursor-default shadow-sm hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-slate-900/60 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center mb-4 shadow-md`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-2 leading-snug">
                  {domain.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {domain.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
