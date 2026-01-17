"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function VisionSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1])

    return (
        <section ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Parallax Background with Scale Effect */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: "url('/vision-bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
            </motion.div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }}
            />

            {/* Content */}
            <div className="relative z-10 container px-4 md:px-6">
                <motion.div
                    style={{ opacity }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-mono text-white/60 mb-8"
                    >
                        <Sparkles className="w-3 h-3 text-amber-200" />
                        <span>INTELLIGENCE REIMAGINED</span>
                    </motion.div>

                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] text-white tracking-tight mb-8">
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="block"
                            >
                                The Chain That Binds
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-200"
                            >
                                Art to Algorithms
                            </motion.span>
                        </span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-12"
                    >
                        In a unique convergence of logic and aesthetics, we forge systems that don't just calculate—they create. Intelligence is the new medium; we are the sculptors.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <button className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:scale-105">
                            <span className="relative z-10">Start the Transformation</span>
                            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-blue-200 to-amber-100 transition-transform duration-300 group-hover:translate-y-0" />
                        </button>
                    </motion.div>
                </motion.div>

                {/* Footer Stats / Decor */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-[-150px] left-0 w-full flex justify-between px-4 md:px-0 text-xs font-mono text-white/30 uppercase tracking-widest hidden md:flex"
                >
                    <span>Sys_Op: Neural_Bridge</span>
                    <span>Status: Connected</span>
                    <span>Latency: &lt;1ms</span>
                </motion.div>
            </div>
        </section>
    )
}
