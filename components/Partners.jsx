"use client"

import { motion } from "framer-motion"

const partners = [
  "Reliance",
  "HCL Technologies",
  "IBM",
  "CRIF",
  "ADP",
  "Bayer",
  "Infosys",
  "Wipro",
  "TCS",
  "Accenture",
  "Deloitte",
  "EY",
]

export default function Partners() {
  const doubled = [...partners, ...partners]

  return (
    <section id="partners" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-2">
            Our Proven Partnerships
          </p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-500 text-sm">
            Successful collaborations with the industry's best
          </p>
        </motion.div>

        {/* Marquee track */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 w-max animate-marquee">
            {doubled.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-7 py-4 min-w-[150px] flex items-center justify-center shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 transition-all"
              >
                <span className="text-slate-600 dark:text-slate-300 font-semibold text-sm tracking-wide whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
