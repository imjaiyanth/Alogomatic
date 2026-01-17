"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatedNoise } from "@/components/animated-noise"

export function ServicesHero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={containerRef} className="relative h-[70vh] min-h-[600px] w-full overflow-hidden bg-black flex items-center justify-center pt-20">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[#050505]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a1a2e,transparent_70%)]" />
                <AnimatedNoise opacity={0.05} />
            </div>

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6"
                >
                    <span className="font-mono text-xs text-blue-400 uppercase tracking-[0.2em] border border-blue-900/50 bg-blue-900/10 px-3 py-1 rounded-full">
                        Core Capabilities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8"
                >
                    Engineering <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                        Intelligence
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed"
                >
                    We don't just build software; we architect the nervous systems of modern enterprise.
                    From autonomous agents to industrial automation, our services bridge the gap between potential and performance.
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                style={{ opacity }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
            >
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            </motion.div>
        </section>
    )
}
