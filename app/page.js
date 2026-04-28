import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Partners from "@/components/Partners"
import Benefits from "@/components/Benefits"
import Domains from "@/components/Domains"
import Solutions from "@/components/Solutions"
import HowItWorks from "@/components/HowItWorks"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import LeadForm from "@/components/LeadForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <Benefits />
      <Domains />
      <Solutions />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  )
}
