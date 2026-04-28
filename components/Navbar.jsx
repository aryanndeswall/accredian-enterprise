"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, GraduationCap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import ThemeToggle from "@/components/ThemeToggle"

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Programs", href: "#domains" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#lead-form" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200/60 dark:border-slate-700/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md group-hover:shadow-blue-500/30 transition-shadow">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <span
            className={`font-bold text-lg tracking-tight transition-colors ${
              scrolled
                ? "text-slate-900 dark:text-white"
                : "text-white"
            }`}
          >
            Accredian
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                scrolled
                  ? "text-slate-600 dark:text-slate-300"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle scrolled={scrolled} />
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all font-medium"
          >
            <a href="#lead-form">Enquire Now</a>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle scrolled={scrolled} />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={`inline-flex items-center justify-center rounded-md h-9 w-9 transition-colors ${
                scrolled
                  ? "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white dark:bg-slate-900">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <GraduationCap className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-bold">Accredian</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center px-3 py-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg font-medium text-sm transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0"
                  >
                    <a href="#lead-form" onClick={() => setOpen(false)}>
                      Enquire Now
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
