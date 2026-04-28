"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"

function Counter({ to, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  useEffect(() => {
    if (!inView) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(to * eased))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Professionals Trained",
    sub: "For Exceptional Career Success",
  },
  {
    value: 200,
    suffix: "+",
    label: "Sessions Delivered",
    sub: "With Unmatched Excellence",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Active Learners",
    sub: "In Dynamic Courses",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    sub: "Across All Programs",
  },
]

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-2">
            Our Track Record
          </p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            The Numbers Behind Our Success
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center group"
            >
              {/* Subtle card bg */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl py-8 px-4 group-hover:border-blue-200 dark:group-hover:border-blue-800/50 group-hover:shadow-lg group-hover:shadow-blue-500/5 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-slate-900 dark:text-white font-semibold text-sm mb-1">
                  {stat.label}
                </p>
                <p className="text-slate-400 text-xs">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
