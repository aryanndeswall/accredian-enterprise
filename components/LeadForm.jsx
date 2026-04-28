"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { ArrowRight, CheckCircle, Building2, Zap, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().optional(),
})

const perks = [
  { icon: CheckCircle, text: "Free consultation with our L&D specialists" },
  { icon: Building2, text: "Custom program designed for your team" },
  { icon: Target, text: "Skill gap assessment included at no cost" },
  { icon: Users, text: "Onboarding ready in as little as 2 weeks" },
  { icon: Zap, text: "Dedicated account manager throughout" },
]

function FieldError({ message }) {
  if (!message) return null
  return <p className="text-red-500 text-xs mt-1">{message}</p>
}

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await res.json()

      if (result.success) {
        toast.success("We'll be in touch shortly!", {
          description: "Our enterprise team will contact you within 24 hours.",
        })
        reset()
      } else {
        toast.error("Something went wrong", {
          description: "Please try again or email us directly.",
        })
      }
    } catch {
      toast.error("Network error", {
        description: "Check your connection and try again.",
      })
    }
  }

  return (
    <section
      id="lead-form"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #0c1f44 50%, #080e1f 100%)",
      }}
    >
      {/* Background blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-700/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">
              Get Expert Guidance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Want to Learn More About Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Training Solutions?
              </span>
            </h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-sm">
              Talk to our enterprise learning specialists. We'll understand your
              team's needs, share relevant case studies, and design a custom
              training roadmap — completely free, no commitment required.
            </p>

            <ul className="space-y-4">
              {perks.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/8">
              <p className="text-slate-500 text-sm">
                Prefer email?{" "}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  enterprise@accredian.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-100 dark:border-slate-800">
              <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-1">
                Start the Conversation
              </h3>
              <p className="text-slate-500 text-sm mb-7">
                Response within 24 business hours.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Rahul Sharma"
                      className={`mt-1.5 ${errors.name ? "border-red-400 focus-visible:ring-red-400/30" : ""}`}
                      {...register("name")}
                    />
                    <FieldError message={errors.name?.message} />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                      Work Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="rahul@company.com"
                      className={`mt-1.5 ${errors.email ? "border-red-400 focus-visible:ring-red-400/30" : ""}`}
                      {...register("email")}
                    />
                    <FieldError message={errors.email?.message} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={`mt-1.5 ${errors.phone ? "border-red-400 focus-visible:ring-red-400/30" : ""}`}
                      {...register("phone")}
                    />
                    <FieldError message={errors.phone?.message} />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      placeholder="Acme Corporation"
                      className={`mt-1.5 ${errors.company ? "border-red-400 focus-visible:ring-red-400/30" : ""}`}
                      {...register("company")}
                    />
                    <FieldError message={errors.company?.message} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                    Message{" "}
                    <span className="text-slate-400 font-normal">(Optional)</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your training goals, team size, timeline, or any specific requirements..."
                    rows={4}
                    className="mt-1.5 resize-none"
                    {...register("message")}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all h-11 gap-2 text-sm font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-slate-400 text-xs text-center">
                  By submitting, you agree to our privacy policy. We never
                  share your data or send unsolicited emails.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
