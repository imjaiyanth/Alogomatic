"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { AnimatedNoise } from "@/components/animated-noise"

export function ColophonSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section
      id="colophon"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 bg-black border-t border-white/10 text-white overflow-hidden"
    >
      <AnimatedNoise opacity={0.12} />
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-24 relative z-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">06 / Directory</span>
        <h2 className="mt-6 font-[var(--font-bebas)] text-6xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">
          MEGHAMSYS
        </h2>
      </motion.div>

      {/* Multi-column layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 md:gap-12 relative z-10"
      >
        {/* Expertise */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mb-6">Expertise</h4>
          <ul className="space-y-4">
            <FooterLink>AI Agents & Workflows</FooterLink>
            <FooterLink>Cassandra (RAG)</FooterLink>
            <FooterLink>Mechintosh Automations</FooterLink>
          </ul>
        </motion.div>

        {/* Development */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mb-6">Dev</h4>
          <ul className="space-y-4">
            <FooterLink>Web Applications</FooterLink>
            <FooterLink>Data Analysis</FooterLink>
            <FooterLink>Project Workflows</FooterLink>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mb-6">Connect</h4>
          <ul className="space-y-4">
            <FooterLink href="#">LinkedIn</FooterLink>
            <FooterLink href="#">GitHub</FooterLink>
            <FooterLink href="#">Twitter/X</FooterLink>
          </ul>
        </motion.div>

        {/* Headquarters */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mb-6">HQ</h4>
          <ul className="space-y-4">
            <li className="font-mono text-xs text-white/60">Tech Hub</li>
            <li className="font-mono text-xs text-white/60">Integrated City</li>
          </ul>
        </motion.div>

        {/* Inquiries */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mb-6">Inquiries</h4>
          <ul className="space-y-4">
            <FooterLink href="mailto:hello@meghamsys.io">Email Us</FooterLink>
            <li className="font-mono text-xs text-white/60">+1 [SYSTEM] 000-0000</li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mb-6">Legal</h4>
          <ul className="space-y-4">
            <FooterLink>Privacy</FooterLink>
            <FooterLink>Terms</FooterLink>
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10"
      >
        <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
          © 2026 MEGHAMSYS. ALL RIGHTS RESERVED.
        </p>
        <p className="font-mono text-[10px] text-white/40">Architecting the future of enterprise systems.</p>
      </motion.div>
    </section>
  )
}

function FooterLink({ children, href }: { children: React.ReactNode; href?: string }) {
  const content = (
    <span className="relative inline-block overflow-hidden group">
      <span className="block font-mono text-xs text-white/60 transition-transform duration-300 group-hover:-translate-y-full group-hover:text-white">
        {children}
      </span>
      <span className="absolute top-0 left-0 block font-mono text-xs text-white transition-transform duration-300 translate-y-full group-hover:translate-y-0">
        {children}
      </span>
    </span>
  )

  if (href) {
    return (
      <li className="block w-fit">
        <a href={href}>{content}</a>
      </li>
    )
  }

  return <li className="block w-fit cursor-default">{content}</li>
}
