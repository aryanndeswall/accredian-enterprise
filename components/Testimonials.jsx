"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    company: "ADP",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    author: "Learning & Development Lead",
    role: "ADP India",
    initial: "A",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    company: "Bayer",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    author: "HR Director",
    role: "Bayer South Asia",
    initial: "B",
    gradient: "from-emerald-600 to-emerald-700",
  },
  {
    company: "Reliance",
    quote:
      "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    author: "Talent Development Manager",
    role: "Reliance Industries",
    initial: "R",
    gradient: "from-violet-600 to-violet-700",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-900 dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-2">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Partners Say
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Trusted by India's leading enterprises for L&amp;D excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/[0.04] backdrop-blur-sm border border-white/8 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 group"
            >
              <Quote className="w-7 h-7 text-blue-400/60 mb-4" />
              <Stars />
              <p className="text-slate-300 leading-relaxed text-sm mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                >
                  <span className="text-white font-bold text-sm">{t.initial}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
