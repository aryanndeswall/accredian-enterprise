"use client"

import { motion } from "framer-motion"
import { Award, Building2, BookOpen, BarChart2 } from "lucide-react"

const solutions = [
  {
    icon: Award,
    title: "Program Specific",
    subtitle: "Certificate · Executive · Post Graduate Certificate",
    description:
      "Structured programs with recognized credentials from India's top institutions — IITs, IIMs, and global partners.",
    emoji: "🎓",
  },
  {
    icon: Building2,
    title: "Industry Specific",
    subtitle: "IT · Healthcare · Retail · Finance · Education · Manufacturing",
    description:
      "Domain-tailored curriculum built around industry-specific challenges, regulations, and terminology.",
    emoji: "🏢",
  },
  {
    icon: BookOpen,
    title: "Topic Specific",
    subtitle: "ML · Design · Analytics · Cybersecurity · Cloud",
    description:
      "Focused deep-dive modules on a single technical or business discipline — from beginner to expert.",
    emoji: "🔬",
  },
  {
    icon: BarChart2,
    title: "Level Specific",
    subtitle: "Senior Leadership · Mid-Career Professionals · Freshers",
    description:
      "Progression-aware content that adapts to where each learner is in their career journey.",
    emoji: "📊",
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-2">
            Tailored Course Segmentation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Custom-Fit Courses for Every Professional
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
            No generic off-the-shelf content. Every engagement is scoped,
            designed, and delivered for your specific organizational context.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {solutions.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 overflow-hidden hover:border-blue-200 dark:hover:border-blue-700/60 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                {/* Decorative emoji */}
                <div className="absolute top-5 right-6 text-7xl opacity-[0.07] group-hover:opacity-[0.12] select-none transition-opacity duration-300 pointer-events-none">
                  {s.emoji}
                </div>

                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight">
                        {s.title}
                      </h3>
                      <p className="text-blue-600 text-xs font-medium mt-0.5">
                        {s.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {s.description}
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
