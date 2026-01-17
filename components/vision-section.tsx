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
            <div className="relative z-10 container px-4 md:px-6 h-full flex items-end pb-32">
                <motion.div
                    style={{ opacity }}
                    className="max-w-xl text-left"
                >
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-white/90 tracking-tight mb-6">
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="block"
                            >
                                Chain That Binds
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="block"
                            >
                                Art to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Code</span>
                            </motion.span>
                        </span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-white/60 max-w-lg leading-relaxed mb-10"
                    >
                        Odio suspendisse quam purus suscipit non tellus metus blandit egestas. Malesuada ut donec est id ut aliquam facilisi sit etiam.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <button className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 text-sm font-medium text-white transition-all hover:bg-white/20 hover:scale-105">
                            <span className="relative z-10">Get Started</span>
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
