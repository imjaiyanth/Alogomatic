"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BitmapChevron } from "@/components/bitmap-chevron"

gsap.registerPlugin(ScrollTrigger)

const industries = [
  {
    id: "01",
    name: "HEALTHCARE",
    description: "Digital health platforms, telemedicine, and AI diagnostics.",
    details: ["HIPAA Compliance", "Data Interoperability", "Real-time Monitoring"],
  },
  {
    id: "02",
    name: "FINTECH",
    description: "Secure payment gateways, blockchain, and automated trading.",
    details: ["Transaction Security", "Legacy Modernization", "Fraud Detection"],
  },
  {
    id: "03",
    name: "MANUFACTURING",
    description: "Industry 4.0, predictive maintenance, and IoT supply chains.",
    details: ["IIoT Integration", "Inventory Management", "Process Automation"],
  },
  {
    id: "04",
    name: "LOGISTICS",
    description: "Fleet management, route optimization, and real-time tracking.",
    details: ["Supply Chain Visibility", "Asset Management", "Route Planning"],
  },
]

export function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Grid items animation
      const items = gridRef.current?.querySelectorAll(".industry-item")
      gsap.from(items, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/40"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">04 / Industries</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">INDUSTRIES WE SERVE</h2>
      </div>

      {/* Industries Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className="industry-item group relative bg-background p-8 min-h-[400px] flex flex-col justify-between overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--accent)_1px,_transparent_1px)] bg-[size:24px_24px]" />

            <div>
              <span className="font-mono text-[12px] text-accent mb-8 block">{industry.id}</span>
              <h3 className="font-[var(--font-bebas)] text-4xl mb-4 group-hover:text-accent transition-colors duration-300">
                {industry.name}
              </h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">{industry.description}</p>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2 border-t border-border/40 pt-6">
                {industry.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80 flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-accent/40" />
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 group/btn cursor-pointer mt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent group-hover/btn:translate-x-1 transition-transform">
                  Explore Solutions
                </span>
                <BitmapChevron className="w-4 h-4 text-accent rotate-[-90deg]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
