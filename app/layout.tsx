import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.meghamsys.com"),
  title: "Meghamsys — Engineering for Manufacturing & Healthcare",
  description:
    "We build AI agents and automation systems for manufacturing and healthcare—Cassandra (RAG document intelligence), Mechintosh (manufacturing automations), healthcare data analysis, and project management workflows.",
  generator: "v0.app",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Meghamsys",
    title: "Meghamsys — Engineering for Manufacturing & Healthcare",
    description:
      "We build AI agents and automation systems for manufacturing and healthcare—Cassandra (RAG document intelligence), Mechintosh (manufacturing automations), healthcare data analysis, and project management workflows.",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "Meghamsys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meghamsys — Engineering for Manufacturing & Healthcare",
    description:
      "AI agents and automation systems for manufacturing and healthcare—Cassandra (RAG), Mechintosh, analytics, and PM workflows.",
    images: ["/placeholder-logo.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body
        className={`${dmSans.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
