import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { VisionSection } from "@/components/vision-section"
import { ClientsSection } from "@/components/clients-section"
import { FeaturesSection } from "@/components/features-section"
import { ContactSection } from "@/components/contact-section"
import { ColophonSection } from "@/components/colophon-section"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <VisionSection />
        <ClientsSection />
        <FeaturesSection />
        <ContactSection />
        <ColophonSection />
      </div>
    </main>
  )
}
