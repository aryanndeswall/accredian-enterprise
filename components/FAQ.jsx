"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    category: "About the Course",
    items: [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "Accredian offers a comprehensive suite including certificate courses, executive education, post-graduate certifications, and bespoke corporate workshops. These span AI/ML, Data Science, Leadership, Digital Transformation, and more — all customizable for your organization.",
      },
      {
        q: "What domain specializations are available?",
        a: "We specialize in 7 key domains: Product & Innovation, Gen-AI Mastery, Leadership Elevation, Tech & Data, Operations Excellence, Digital Enterprise, and Fintech Innovation — each with multiple structured sub-tracks.",
      },
      {
        q: "Are the certifications recognized by employers?",
        a: "Yes. Accredian certifications are co-branded with IITs, IIMs, and international institutions, making them highly credible for professional advancement and market recognition.",
      },
    ],
  },
  {
    category: "About the Delivery",
    items: [
      {
        q: "How are the programs delivered?",
        a: "Programs are delivered through live online sessions, on-site workshops, or hybrid formats. We adapt to your team's schedule and geography to minimize disruption while maximizing engagement.",
      },
      {
        q: "What is the typical program duration?",
        a: "Durations range from intensive 1-day workshops to 6-month structured learning journeys — depending on the depth, domain, and organizational needs we're solving for.",
      },
      {
        q: "How do you track learner progress?",
        a: "We provide real-time dashboards for L&D managers, with individual completion rates, assessment scores, engagement metrics, and skill acquisition milestones.",
      },
    ],
  },
  {
    category: "Miscellaneous",
    items: [
      {
        q: "How does Accredian customize programs for our organization?",
        a: "We start with a skill gap analysis, co-design a curriculum with your L&D team, source relevant case studies from your industry, and assign practitioners with domain-matched experience.",
      },
      {
        q: "What is the minimum team size for enterprise engagement?",
        a: "We typically engage with cohorts of 10+ participants, though we can accommodate smaller groups for C-suite or executive leadership programs.",
      },
    ],
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Still have questions?{" "}
            <a
              href="#lead-form"
              className="text-blue-600 hover:underline font-medium"
            >
              Reach out to our enterprise team
            </a>{" "}
            directly.
          </p>
        </motion.div>

        <div className="space-y-10">
          {faqs.map((section, si) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: si * 0.08 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {section.category}
                </span>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>

              <Accordion openMultiple={false} className="space-y-2">
                {section.items.map((faq, qi) => (
                  <AccordionItem
                    key={qi}
                    value={`${si}-${qi}`}
                    className="border border-slate-200 dark:border-slate-800 rounded-xl px-5 data-[state=open]:border-blue-200 dark:data-[state=open]:border-blue-800/70 data-[state=open]:bg-blue-50/40 dark:data-[state=open]:bg-blue-950/10 transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 dark:text-white font-medium text-sm hover:no-underline py-5 text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pb-5 pt-0">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
