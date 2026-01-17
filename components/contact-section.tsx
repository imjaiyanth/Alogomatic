"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Send } from "lucide-react"

export function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // ... handled same as before ...
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = (formData.get("name") ?? "").toString().trim()
    const email = (formData.get("email") ?? "").toString().trim()
    const message = (formData.get("message") ?? "").toString().trim()

    if (!name || !email || !message) {
      window.alert("Please fill out your name, email, and inquiry.")
      return
    }

    const subject = "Meghamsys — Project inquiry"
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n")
    window.location.href = `mailto:hello@meghamsys.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    form.reset()
  }

  return (
    <section id="contact" className="relative py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-8 block"
            >
              05 / Engagement
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8"
            >
              Start the <br /> Conversation.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-md leading-relaxed mb-12"
            >
              Ready to transform your operations with intelligent systems?
              Reach out to discuss your specific requirements.
            </motion.p>

            <div className="hidden lg:block">
              <div className="flex items-center gap-4 text-slate-400 text-sm font-mono uppercase tracking-wider">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Systems Online: 24/7/365</span>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-8 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100"
          >
            <FloatingInput id="name" label="Full Name" />
            <FloatingInput id="email" label="Email Address" type="email" />
            <FloatingTextArea id="message" label="Project Inquiry" />

            <button
              type="submit"
              className="w-full group bg-slate-900 text-white h-14 rounded-xl font-medium tracking-wide flex items-center justify-center gap-3 hover:bg-black transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function FloatingInput({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={id}
        className="block px-4 pb-2.5 pt-5 w-full text-base text-slate-900 bg-white rounded-xl border border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-colors"
        placeholder=" "
        required
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600 cursor-text"
      >
        {label}
      </label>
    </div>
  )
}

function FloatingTextArea({ id, label }: { id: string; label: string }) {
  return (
    <div className="relative">
      <textarea
        id={id}
        name={id}
        rows={4}
        className="block px-4 pb-2.5 pt-5 w-full text-base text-slate-900 bg-white rounded-xl border border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-colors resize-none"
        placeholder=" "
        required
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600 cursor-text"
      >
        {label}
      </label>
    </div>
  )
}
