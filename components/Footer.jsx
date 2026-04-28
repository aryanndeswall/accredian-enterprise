import Link from "next/link"
import { GraduationCap, Mail, MapPin } from "lucide-react"

const SocialIcons = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  ),
}

const socials = [
  { key: "LinkedIn", href: "https://www.linkedin.com/company/accredianedu/", label: "LinkedIn" },
  { key: "Twitter", href: "https://twitter.com/accredianedu", label: "Twitter" },
  { key: "Facebook", href: "https://facebook.com/accredianlearn", label: "Facebook" },
  { key: "Instagram", href: "https://www.instagram.com/accredian_edu", label: "Instagram" },
  { key: "YouTube", href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA", label: "YouTube" },
]

const links = {
  Company: [
    { label: "About Accredian", href: "https://accredian.com/About" },
    { label: "Blog", href: "https://blog.accredian.com" },
    { label: "Why Accredian", href: "https://accredian.com/whyaccredian" },
    { label: "Careers", href: "#" },
  ],
  Programs: [
    { label: "Gen-AI Mastery", href: "#domains" },
    { label: "Data Science", href: "#domains" },
    { label: "Leadership", href: "#domains" },
    { label: "Digital Enterprise", href: "#domains" },
  ],
  Solutions: [
    { label: "Certificate Programs", href: "#solutions" },
    { label: "Executive Education", href: "#solutions" },
    { label: "Custom Training", href: "#lead-form" },
    { label: "How It Works", href: "#how-it-works" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* CTA banner */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg">
              Ready to transform your workforce?
            </p>
            <p className="text-slate-400 text-sm mt-1">
              Talk to our experts today — free consultation included.
            </p>
          </div>
          <a
            href="#lead-form"
            className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all"
          >
            Enquire Now →
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-white">Accredian</span>
          </Link>

          <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
            Empowering enterprises with next-generation learning solutions.
            Building the high-performance workforce of tomorrow.
          </p>

          <div className="space-y-3 mb-7">
            <a
              href="mailto:enterprise@accredian.com"
              className="flex items-center gap-2.5 text-sm hover:text-slate-300 transition-colors group"
            >
              <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>enterprise@accredian.com</span>
            </a>
            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-2">
            {socials.map(({ key, href, label }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 flex items-center justify-center transition-all duration-200 text-slate-400 hover:text-white"
              >
                {SocialIcons[key]}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([category, items]) => (
          <div key={category}>
            <p className="text-white font-semibold text-sm mb-5">{category}</p>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-500 hover:text-slate-200 text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © 2026 Accredian · A Brand of FullStack Education Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-slate-600 hover:text-slate-400 text-xs transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
