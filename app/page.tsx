import { HeroSection } from "@/components/hero-section"
import { SignalsSection } from "@/components/signals-section"
import { WorkSection } from "@/components/work-section"
import { PrinciplesSection } from "@/components/principles-section"
import { IndustriesSection } from "@/components/industries-section" // added industries section
import { ContactSection } from "@/components/contact-section" // added contact section import
import { ColophonSection } from "@/components/colophon-section"
import { SideNav } from "@/components/side-nav"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <a
        href="#contact"
        className="fixed top-6 right-6 z-50 inline-flex items-center gap-3 border border-foreground/20 bg-background/70 backdrop-blur-sm px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
      >
        Contact Us
      </a>

      <div className="relative z-10">
        <HeroSection />
        <SignalsSection />
        <WorkSection />
        <PrinciplesSection />
        <IndustriesSection />
        <ContactSection />
        <ColophonSection />
      </div>
    </main>
  )
}
