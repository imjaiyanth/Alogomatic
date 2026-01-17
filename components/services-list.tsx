"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Bot, FileText, Settings, Activity, Kanban, Network, ArrowRight } from "lucide-react"

const services = [
    {
        id: "01",
        title: "AI Agents & Workflows",
        description: "Deploy autonomous digital workers that handle complex, multi-step operations without fatigue.",
        details: [
            "Natural Language Processing for customer intent analysis.",
            "Self-correcting task execution loops.",
            "Seamless integration with existing ERP/CRM APIs."
        ],
        icon: Bot,
        color: "from-blue-500 to-cyan-500",
        tech: ["Python", "LangChain", "OpenAI", "Pinecone"]
    },
    {
        id: "02",
        title: "Cassandra / RAG",
        description: "Transform your static document archives into an intelligent, queryable knowledge base.",
        details: [
            "Vector-based semantic search for high-accuracy retrieval.",
            "Citation-backed answers for enterprise compliance.",
            "Instant conceptual linking across millions of pages."
        ],
        icon: FileText,
        color: "from-emerald-500 to-teal-500",
        tech: ["Vector DB", "Embeddings", "LLMs", "OCR"]
    },
    {
        id: "03",
        title: "Mechintosh Automation",
        description: "Bridge the physical-digital divide with custom control systems for manufacturing.",
        details: [
            "Real-time PLC communication and state management.",
            "Predictive maintenance signaling.",
            "High-frequency data logging for production lines."
        ],
        icon: Settings,
        color: "from-amber-500 to-orange-500",
        tech: ["Rust", "IoT", "MQTT", "Time-Series"]
    },
    {
        id: "04",
        title: "Healthcare Analytics",
        description: "Process sensitive patient data with precision, converting raw metrics into care insights.",
        details: [
            "HIPAA-compliant data pipelines.",
            "Longitudinal patient record analysis.",
            "Real-time anomaly detection for vitals."
        ],
        icon: Activity,
        color: "from-rose-500 to-pink-500",
        tech: ["BigQuery", "HIPAA", "Statistics", "Visualization"]
    },
    {
        id: "05",
        title: "Project Architecture",
        description: "Structured technical leadership to guide complex builds from zero to one.",
        details: [
            "System design and scalability planning.",
            "Technical debt management and code audits.",
            "Development workflow optimization."
        ],
        icon: Kanban,
        color: "from-violet-500 to-purple-500",
        tech: ["Agile", "System Design", "DevOps", "CI/CD"]
    },
    {
        id: "06",
        title: "System Integration",
        description: "The glue that holds the enterprise together. We make disparate systems speak the same language.",
        details: [
            "Custom middleware development.",
            "Legacy system modernization (strangler fig pattern).",
            "High-throughput API gateways."
        ],
        icon: Network,
        color: "from-indigo-500 to-blue-500",
        tech: ["GraphQL", "REST", "gRPC", "Microservices"]
    }
]

export function ServicesList() {
    return (
        <section className="bg-black py-20 pb-40">
            <div className="container px-6 mx-auto">
                <div className="grid gap-32">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
    const isEven = index % 2 === 0
    const cardRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const x = useTransform(scrollYProgress, [0, 0.5], [isEven ? -50 : 50, 0])

    return (
        <motion.div
            ref={cardRef}
            style={{ opacity, x }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}
        >
            {/* Visual/Icon Side */}
            <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                    {/* Abstract Icon Visual */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} blur-3xl opacity-20`} />
                            <service.icon className="relative w-24 h-24 text-white/80" strokeWidth={1} />
                        </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                        {service.tech.map(t => (
                            <span key={t} className="px-3 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/60 backdrop-blur-md">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="absolute top-6 right-6 font-mono text-4xl text-white/5 font-bold">
                        {service.id}
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {service.title}
                </h3>
                <p className="text-xl text-white/60 leading-relaxed mb-8">
                    {service.description}
                </p>

                <ul className="space-y-4 mb-10">
                    {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70">
                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                            <span className="text-sm md:text-base">{detail}</span>
                        </li>
                    ))}
                </ul>

                <button className="flex items-center gap-2 text-white border-b border-transparent hover:border-white/50 pb-1 transition-all group/btn">
                    <span className="text-sm font-mono uppercase tracking-widest">Start Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    )
}
