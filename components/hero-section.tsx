"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Bot, Command, Cpu, Globe, Play, Sparkles, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]" />
      <div className="absolute right-0 top-0 -z-10 h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Floating Icons */}
      <FloatingIcon icon={Bot} className="top-1/4 left-[15%] text-blue-400 delay-0" />
      <FloatingIcon icon={Globe} className="top-1/3 right-[15%] text-indigo-400 delay-1000" />
      <FloatingIcon icon={Cpu} className="bottom-1/4 left-[20%] text-purple-400 delay-2000" />
      <FloatingIcon icon={Zap} className="bottom-1/3 right-[20%] text-yellow-400 delay-3000" />

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">

        {/* Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
        >
          <Sparkles className="h-4 w-4 text-blue-400" />
          <span>Powering Next-Gen Intelligence</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl text-5xl font-medium tracking-tight text-white sm:text-7xl mb-6 leading-[1.1]"
        >
          Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Intelligent Agents</span> <br />
          & Web Systems at Scale
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg text-white/60 mb-10 leading-relaxed"
        >
          We specialize in crafting autonomous AI agents and high-performance web applications.
          Move from concept to deployment with our engineering-first approach.
        </motion.p>

        {/* Configuration Bar Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-full max-w-lg mx-auto mb-12 group"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-70 blur group-hover:opacity-100 transition duration-500" />
          <div className="relative flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-black/50 p-2 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-2 px-2">
              <div className="flex h-10 items-center justify-center rounded-lg bg-white/5 px-4 text-sm font-medium text-white hover:bg-white/10 transition-colors cursor-pointer">
                <span>Agent Config</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div className="flex gap-1">
                <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Bot className="h-4 w-4 text-blue-400" />
                </div>
                <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                  <Globe className="h-4 w-4 text-indigo-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              </button>
              <button className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Play className="h-4 w-4 fill-current ml-0.5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            Start Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Floating App Icons Bottom Layer - Purely Decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] pointer-events-none -z-10">
          <motion.div style={{ y: y1 }} className="absolute top-10 left-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <Command className="w-8 h-8 text-white/50" />
          </motion.div>

          <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <Cpu className="w-8 h-8 text-white/50" />
          </motion.div>
        </div>

      </div>
    </section>
  )
}

function FloatingIcon({ icon: Icon, className }: { icon: any, className?: string }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn("absolute hidden lg:flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl", className)}
    >
      <Icon className="w-6 h-6" />
    </motion.div>
  )
}
