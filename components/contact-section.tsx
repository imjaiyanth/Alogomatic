"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BitmapChevron } from "./bitmap-chevron"

gsap.registerPlugin(ScrollTrigger)

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = (formData.get("name") ?? "").toString().trim()
    const email = (formData.get("email") ?? "").toString().trim()
    const message = (formData.get("message") ?? "").toString().trim()

    if (!name || !email || !message) {
      window.alert("Please fill out your name, email, and inquiry.")
      return
    }

    const subject = "Meghamsys — Project inquiry"
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n")

    window.location.href = `mailto:hello@meghamsys.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    form.reset()
  }

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      if (formRef.current) {
        const inputs = formRef.current.querySelectorAll("div")
        gsap.from(inputs, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / Engagement</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">CONTACT US</h2>
        <p className="mt-4 font-mono text-sm text-muted-foreground max-w-md uppercase tracking-wider">
          AI agents, Cassandra (RAG), Mechintosh automations, healthcare analytics, project workflows.
        </p>
      </div>

      <form
        ref={formRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-name"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
          >
            Full Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            className="bg-transparent border-b border-border/50 py-3 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
            placeholder="SYSTEM_USER"
            autoComplete="name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-email"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
          >
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className="bg-transparent border-b border-border/50 py-3 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
            placeholder="USER@MEGHAMSYS.IO"
            autoComplete="email"
            required
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label
            htmlFor="contact-message"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
          >
            Project Inquiry
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className="bg-transparent border-b border-border/50 py-3 font-mono text-sm focus:outline-none focus:border-accent transition-colors resize-none"
            placeholder="DESCRIBE_TECHNICAL_REQUIREMENTS"
            required
          />
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="group flex items-center gap-4 px-8 py-4 bg-accent text-background font-mono text-xs uppercase tracking-widest hover:bg-foreground transition-colors"
          >
            Send Inquiry
            <BitmapChevron className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>
    </section>
  )
}
