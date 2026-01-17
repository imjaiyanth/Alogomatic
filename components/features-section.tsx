"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Check, Database, LineChart, Network, Terminal as TerminalIcon, Zap, Server, Activity, ArrowRight } from "lucide-react"

export function FeaturesSection() {
    return (
        <section id="features" className="bg-white py-32 overflow-hidden relative">
            <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />

            {/* Feature 1: AI Agents */}
            <div className="container mx-auto px-6 mb-40 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-8">
                            <Bot className="w-4 h-4" />
                            <span>Intelligent Forces</span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tight">
                            Scale With <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Digital Minds
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Deploy purpose-built AI agents that negotiate, execute, and adapt.
                            Our neural workers handle complex workflows 24/7 without fatigue.
                        </p>

                        <div className="space-y-6">
                            {['Self-healing workflows', 'Infinite horizontal scaling', 'Context-aware execution'].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100/50 flex items-center justify-center">
                                        <Check className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <AgentVisual />
                    </div>
                </div>
            </div>

            {/* Feature 2: Mechintosh */}
            <div className="container mx-auto px-6 mb-40 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <TerminalVisual />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-8">
                            <Zap className="w-4 h-4" />
                            <span>Mechintosh Automation</span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tight">
                            Physical <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                Intelligence
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Bridge the gap between hardware and software.
                            Control manufacturing lines, robotics, and physical systems with code-perfect precision.
                        </p>
                        <button className="group mt-4 inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                            <span>Explore Capabilities</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Feature 3: Data Analytics */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-xs font-bold uppercase tracking-widest mb-8">
                            <LineChart className="w-4 h-4" />
                            <span>Deep Insight</span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tight">
                            Clarity in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
                                Chaos
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Our RAG-powered document intelligence instantly parses millions of pages.
                            Turn static archives into a live, queryable knowledge base.
                        </p>
                        <div className="flex gap-8 border-t border-slate-200 pt-8">
                            <div>
                                <div className="text-4xl font-bold text-slate-900 mb-1">99.9%</div>
                                <div className="text-sm font-mono text-slate-500 uppercase tracking-wider">Reliability</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-slate-900 mb-1">&lt;50ms</div>
                                <div className="text-sm font-mono text-slate-500 uppercase tracking-wider">Latency</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <ChartVisual />
                    </div>
                </div>
            </div>
        </section>
    )
}

function AgentVisual() {
    return (
        <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 z-20 relative"
                >
                    <Bot className="w-10 h-10 text-white" />
                </motion.div>
                {/* Ripples */}
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                        transition={{ duration: 2, delay: i * 0.6, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 rounded-2xl border border-blue-500/30 z-10"
                    />
                ))}
            </div>

            {/* Orbiting Nodes */}
            {[0, 1, 2, 3, 4].map((i) => (
                <OrbitingNode key={i} index={i} total={5} />
            ))}
        </div>
    )
}

function OrbitingNode({ index, total }: { index: number; total: number }) {
    const angle = (index / total) * 360
    const radius = 140

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center z-20"
            animate={{
                x: [
                    Math.cos((angle * Math.PI) / 180) * radius,
                    Math.cos(((angle + 360) * Math.PI) / 180) * radius
                ],
                y: [
                    Math.sin((angle * Math.PI) / 180) * radius,
                    Math.sin(((angle + 360) * Math.PI) / 180) * radius
                ]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
            <Network className="w-5 h-5 text-slate-400" />
        </motion.div>
    )
}

function TerminalVisual() {
    const [lines, setLines] = useState<string[]>([])
    const fullLog = [
        "> INITIALIZING_MECHINTOSH_CORE...",
        "> CHECKING_PERIPHERALS [OK]",
        "> CONNECTING_TO_PLC_SUB01...",
        "> CONNECTION_ESTABLISHED (12ms)",
        "> LOADING_PRODUCTION_SCHEMAS...",
        "> OPTIMIZING_ROBOT_ARMS_V4...",
        "> EFFICIENCY_RATING: 98.4%",
        "> SYSTEM_READY_FOR_COMMAND."
    ]

    useEffect(() => {
        let currentLine = 0
        const interval = setInterval(() => {
            if (currentLine < fullLog.length) {
                setLines(prev => [...prev, fullLog[currentLine]])
                currentLine++
            } else {
                setLines([])
                currentLine = 0
            }
        }, 800)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden font-mono text-xs md:text-sm leading-relaxed border border-slate-800">
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-black/20">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-auto text-white/30">bash — 80x24</div>
            </div>
            <div className="p-6 h-[300px] flex flex-col justify-end">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-1"
                    >
                        <span className="text-green-500 mr-2">$</span>
                        <span className="text-white/90">{line}</span>
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2.5 h-4 bg-green-500 mt-1"
                />
            </div>
        </div>
    )
}

function ChartVisual() {
    return (
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <div className="text-sm text-slate-400 font-medium">Total Processed</div>
                    <div className="text-3xl font-bold text-slate-900 mt-1">2,845,920</div>
                </div>
                <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                        <Activity size={16} />
                    </div>
                </div>
            </div>

            <div className="h-64 flex items-end justify-between gap-2">
                {[35, 55, 40, 70, 50, 80, 65, 90, 75, 45, 60, 95].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="w-full bg-emerald-500 rounded-t-sm opacity-20 hover:opacity-100 transition-opacity cursor-crosshair relative group"
                    >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            {h}%
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
