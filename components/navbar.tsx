"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
// Utilizing the projects existing Logo component
import { Logo } from "@/components/logo"

const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "Services", href: "/services" },
    { label: "Philosophy", href: "#vision" },
    { label: "Platform", href: "#features" }, // Added to match density of example
]

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav
                className={cn(
                    "pointer-events-auto flex items-center justify-between gap-12 pl-3 pr-2 py-2 rounded-full border transition-all duration-300",
                    "bg-[#0F1012] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]", // Base styling
                    scrolled ? "w-auto scale-95 opacity-90 hover:opacity-100 backdrop-blur-md" : "w-auto"
                )}
            >
                {/* Left: Brand */}
                <Link href="/" className="flex items-center gap-3 pl-3 group">
                    <div className="relative flex items-center justify-center w-8 h-8">
                        <Logo className="w-full h-full text-white" />
                    </div>
                    <span className="font-sans text-base font-medium text-white tracking-tight group-hover:text-white/80 transition-colors">
                        Meghamsys
                    </span>
                </Link>

                {/* Center: Navigation Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="px-4 py-2 text-sm text-gray-400 font-medium hover:text-white transition-colors rounded-full hover:bg-white/5"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Dropdown Example (Case Studies style) */}
                    <button className="flex items-center gap-1 px-4 py-2 text-sm text-gray-400 font-medium hover:text-white transition-colors rounded-full hover:bg-white/5 group">
                        More
                        <ChevronDown className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" />
                    </button>
                </div>

                {/* Right: CTA Button */}
                <Link
                    href="#contact"
                    className="bg-white hover:bg-gray-200 text-black px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                >
                    Book a call
                </Link>
            </nav>
        </header>
    )
}
