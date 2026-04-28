"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustBadges = [
  { icon: CheckCircle, label: "Tailored Solutions" },
  { icon: Zap, label: "Industry Insights" },
  { icon: Users, label: "Expert Guidance" },
]

const bars = [
  { label: "Data Science & AI", progress: 87, color: "#3b82f6" },
  { label: "Leadership Development", progress: 72, color: "#6366f1" },
  { label: "Digital Transformation", progress: 95, color: "#8b5cf6" },
  { label: "Gen-AI Mastery", progress: 64, color: "#60a5fa" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#040d1f]">
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-60 -left-40 w-[700px] h-[700px] rounded-full bg-blue-700/20 blur-[140px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-indigo-700/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
              Enterprise Learning Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-5"
          >
            Next-Gen Expertise
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent">
              For Your Enterprise
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
          >
            Cultivate high-performance teams through expert-led learning.
            Programs in AI, Data Science, Leadership &amp; more — purpose-built
            for modern enterprises.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-5 mb-10"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-slate-400 text-sm">
                <Icon className="w-4 h-4 text-blue-400" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all gap-2 font-semibold"
            >
              <a href="#lead-form">
                Enquire Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/8 hover:border-white/40 bg-transparent font-medium"
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </motion.div>
        </div>

        {/* Right: Dashboard visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Main card */}
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-7 shadow-2xl">
              {/* Card header */}
              <div className="flex items-center justify-between mb-7">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                    Training Dashboard
                  </p>
                  <p className="text-white font-semibold">Q4 Progress Overview</p>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-5 mb-7">
                {bars.map((item, i) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="text-slate-500">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: item.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 0.9 + i * 0.12,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom metrics */}
              <div className="grid grid-cols-3 gap-2 pt-5 border-t border-white/8">
                {[
                  { val: "10K+", label: "Trained", color: "#60a5fa" },
                  { val: "98%", label: "Satisfaction", color: "#818cf8" },
                  { val: "200+", label: "Sessions", color: "#a78bfa" },
                ].map(({ val, label, color }) => (
                  <div key={label} className="text-center">
                    <p className="font-bold text-xl" style={{ color }}>
                      {val}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating notification */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-white dark:bg-slate-800 rounded-xl px-4 py-3 shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-slate-900 dark:text-white text-xs font-semibold">
                  Training Completed
                </p>
                <p className="text-slate-500 text-xs">
                  Reliance team · 48 participants
                </p>
              </div>
            </motion.div>

            {/* Floating badge top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.4 }}
              className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-blue-600/30"
            >
              Live · 3 sessions active
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none" />
    </section>
  )
}
