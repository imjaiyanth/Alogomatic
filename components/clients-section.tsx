"use client"

import { Activity, Aperture, Box, Circle, Command, Hexagon, Layers, Triangle } from "lucide-react"
import { motion } from "framer-motion"

const clients = [
    { name: "Nebula", icon: Box },
    { name: "Vertex", icon: Triangle },
    { name: "Horizon", icon: Circle },
    { name: "Quantum", icon: Hexagon },
    { name: "Synapse", icon: Activity },
    { name: "Orbit", icon: Aperture },
    { name: "Flux", icon: Layers },
    { name: "Core", icon: Command },
]

// Duplicate for continuous loop
const marqueeClients = [...clients, ...clients, ...clients]

export function ClientsSection() {
    return (
        <section className="bg-background py-20 border-b border-border/40 overflow-hidden relative">
            {/* Gradient masks for smooth fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="container mx-auto px-6 text-center mb-12">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Trusted By Industry Leaders
                </h3>
            </div>

            <div className="flex relative">
                <motion.div
                    className="flex gap-24 items-center shrink-0"
                    animate={{
                        x: ["0%", "-33.33%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {marqueeClients.map((client, i) => (
                        <div key={i} className="flex items-center gap-3 group cursor-default opacity-50 hover:opacity-100 transition-opacity duration-300">
                            <client.icon className="w-8 h-8 text-foreground group-hover:text-accent transition-colors" />
                            <span className="font-sans font-bold text-xl text-foreground group-hover:text-accent transition-colors">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
