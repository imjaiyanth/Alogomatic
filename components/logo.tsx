import React from "react"

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Meghamsys Logo"
    >
      <defs>
        <linearGradient id="cloudGradient" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#2DD4BF" /> {/* Teal-400 */}
          <stop offset="100%" stopColor="#0F766E" /> {/* Teal-700 */}
        </linearGradient>
        <linearGradient id="gloss" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Cloud Shape */}
      <g filter="url(#dropShadow)">
        <path
          d="M25 65 
             H75 
             A 15 15 0 0 0 75 35 
             A 20 20 0 0 0 35 35 
             A 15 15 0 0 0 25 65 
             Z"
          fill="url(#cloudGradient)"
          stroke="none"
        />
        {/* Glossy Highlight */}
        <path
          d="M30 40
             A 16 16 0 0 1 65 38
             A 12 12 0 0 1 72 45
             Q 50 35 30 40
             Z"
          fill="url(#gloss)"
        />
      </g>

      {/* Letter M */}
      <path
        d="M38 60 
           L38 42 
           L50 52 
           L62 42 
           L62 60"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
