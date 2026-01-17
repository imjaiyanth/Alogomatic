import { Navbar } from "@/components/navbar"
import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"
import { ContactSection } from "@/components/contact-section"
import { ColophonSection } from "@/components/colophon-section"

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen bg-black">
            <Navbar />
            <ServicesHero />
            <ServicesList />
            <ContactSection />
            <ColophonSection />
        </main>
    )
}
