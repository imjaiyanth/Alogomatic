"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const signals = [
  {
    id: "01",
    cat: "Core",
    title: "AI Agents & Workflows",
    note: "Purpose-built AI agents that automate operational and engineering workflows with measurable outcomes.",
    // Neural Nodes Pattern
    patternStyle: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zzM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }
  },
  {
    id: "02",
    cat: "Intel",
    title: "Cassandra / Document RAG",
    note: "Intelligent document analysis and retrieval using a dedicated RAG model for structured answers and citations.",
    // Document Lines Pattern
    patternStyle: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`
    }
  },
  {
    id: "03",
    cat: "Auto",
    title: "Mechintosh Automation",
    note: "Custom automations for manufacturing workflows—repeatable processes, data pipelines, and system actions.",
    // Diagonal Construction Lines
    patternStyle: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 0h20L0 20z'/%3E%3C/g%3E%3C/svg%3E")`
    }
  },
  {
    id: "04",
    cat: "Data",
    title: "Healthcare Analytics",
    note: "Analytics and reporting pipelines for healthcare data with careful handling of privacy and data quality.",
    // Cross/Plus Pattern
    patternStyle: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M30 30h4v4h-4v4h-4v-4h-4v-4h4v-4h4v4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }
  },
  {
    id: "05",
    cat: "Mgmt",
    title: "Project Management",
    note: "Automation for planning, tracking, and delivery—status signals, handoffs, and structured reporting.",
    // Grid Pattern
    patternStyle: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%239C92AC' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`
    }
  },
  {
    id: "06",
    cat: "Sys",
    title: "System Integration",
    note: "Reliable integration across enterprise systems and custom platforms with stable APIs and data contracts.",
    // Circuit Board / Tech Lines
    patternStyle: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`
    }
  },
]

export function SignalsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      // Header slide up
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Grid items stagger
      const items = gridRef.current?.querySelectorAll(".service-item")
      if (items) {
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="signals" ref={sectionRef} className="relative py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">

        {/* Section header */}
        <div ref={headerRef} className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">
              System Capabilities
            </span>
            <h2 className="font-sans font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
              Services
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              Deploying intelligent infrastructure for the next generation of industrial efficiency.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-border">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="service-item group relative border-r border-b border-border p-8 lg:p-12 hover:bg-accent/5 transition-colors duration-300 overflow-hidden"
            >
              {/* Background Pattern */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-[0.15] group-hover:opacity-40 bg-center bg-repeat"
                style={signal.patternStyle}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-xs text-muted-foreground/60">{signal.id}</span>
                  <span className="font-mono text-xs text-accent uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">{signal.cat}</span>
                </div>

                <h3 className="font-sans text-2xl lg:text-3xl font-medium mb-4 pr-8 group-hover:text-accent transition-colors duration-200">
                  {signal.title}
                </h3>

                <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-8 text-pretty">
                  {signal.note}
                </p>

                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
