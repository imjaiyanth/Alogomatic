"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
// Utilizing the projects existing Logo component
import { Logo } from "@/components/logo"

const navLinks = [
    { label: "Overview", href: "/" },
    { label: "Services", href: "/services" },
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
                    "pointer-events-auto flex items-center justify-between gap-8 pl-6 pr-3 py-3 rounded-full border transition-all duration-300",
                    "bg-[#0F1012] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]", // Base styling
                    scrolled ? "scale-100 opacity-90 hover:opacity-100 backdrop-blur-md" : "scale-105"
                )}
            >
                {/* Left: Brand */}
                <Link href="/" className="flex items-center gap-4 pl-2 group">
                    <div className="relative flex items-center justify-center w-9 h-9">
                        <Logo className="w-full h-full text-white" />
                    </div>
                    <span className="font-sans text-lg font-medium text-white tracking-tight group-hover:text-white/80 transition-colors">
                        Meghamsys
                    </span>
                </Link>

                {/* Center: Navigation Links */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="px-5 py-2.5 text-base text-gray-400 font-medium hover:text-white transition-colors rounded-full hover:bg-white/5"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right: CTA Button */}
                <Link
                    href="mailto:hello@meghamsys.io"
                    className="bg-white hover:bg-gray-200 text-black px-7 py-3 rounded-full text-base font-semibold transition-all hover:scale-105 active:scale-95"
                >
                    Book a call
                </Link>
            </nav>
        </header>
    )
}
