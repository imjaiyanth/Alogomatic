interface IconProps {
  size?: number;
  className?: string;
}

// AI Brain Icon with pulsing neural network animation
export function AnimatedAIBrainIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animated-icon ${className}`}
    >
      <style>
        {`
          @keyframes pulse-node {
            0%, 100% { opacity: 0.4; r: 2; }
            50% { opacity: 1; r: 2.5; }
          }
          @keyframes flow-line {
            0%, 100% { stroke-dashoffset: 0; opacity: 0.3; }
            50% { stroke-dashoffset: -10; opacity: 0.8; }
          }
          @keyframes central-pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          .neural-node { animation: pulse-node 2s ease-in-out infinite; }
          .neural-line { 
            stroke-dasharray: 5 5; 
            animation: flow-line 3s linear infinite; 
          }
          .central-node { 
            animation: central-pulse 2s ease-in-out infinite;
            transform-origin: 16px 16px;
          }
          .neural-node:nth-child(2) { animation-delay: 0.2s; }
          .neural-node:nth-child(3) { animation-delay: 0.4s; }
          .neural-node:nth-child(4) { animation-delay: 0.6s; }
          .neural-node:nth-child(5) { animation-delay: 0.8s; }
        `}
      </style>
      
      {/* Outer nodes with staggered animation */}
      <circle className="neural-node" cx="16" cy="8" r="2.5" fill="currentColor" />
      <circle className="neural-node" cx="8" cy="16" r="2.5" fill="currentColor" />
      <circle className="neural-node" cx="24" cy="16" r="2.5" fill="currentColor" />
      <circle className="neural-node" cx="12" cy="24" r="2.5" fill="currentColor" />
      <circle className="neural-node" cx="20" cy="24" r="2.5" fill="currentColor" />
      
      {/* Animated connecting lines */}
      <g className="neural-line" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1="16" y1="10" x2="10" y2="14" />
        <line x1="16" y1="10" x2="22" y2="14" />
        <line x1="8" y1="18" x2="12" y2="22" />
        <line x1="24" y1="18" x2="20" y2="22" />
        <line x1="10" y1="16" x2="22" y2="16" />
        <line x1="14" y1="24" x2="18" y2="24" />
      </g>
      
      {/* Central processing node with pulse */}
      <g className="central-node">
        <circle cx="16" cy="16" r="3.5" fill="currentColor" />
        <circle cx="16" cy="16" r="2" fill="var(--bg-main, #050510)" />
      </g>
    </svg>
  );
}

// Web App Icon with typing/coding animation
export function AnimatedWebAppIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animated-icon ${className}`}
    >
      <style>
        {`
          @keyframes bracket-expand {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-2px); }
          }
          @keyframes bracket-expand-right {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(2px); }
          }
          @keyframes slash-glow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; stroke-width: 2.5; }
          }
          @keyframes browser-dot {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
          .left-bracket { animation: bracket-expand 2s ease-in-out infinite; transform-origin: center; }
          .right-bracket { animation: bracket-expand-right 2s ease-in-out infinite; transform-origin: center; }
          .code-slash { animation: slash-glow 2s ease-in-out infinite; }
          .browser-dot { animation: browser-dot 1.5s ease-in-out infinite; }
          .browser-dot:nth-child(2) { animation-delay: 0.2s; }
          .browser-dot:nth-child(3) { animation-delay: 0.4s; }
        `}
      </style>
      
      {/* Browser window */}
      <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      
      {/* Animated browser dots */}
      <circle className="browser-dot" cx="7.5" cy="9.5" r="1" fill="currentColor" />
      <circle className="browser-dot" cx="11" cy="9.5" r="1" fill="currentColor" />
      <circle className="browser-dot" cx="14.5" cy="9.5" r="1" fill="currentColor" />
      
      {/* Animated code brackets */}
      <path
        className="left-bracket"
        d="M11 15L9 17L11 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="right-bracket"
        d="M21 15L23 17L21 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Glowing slash */}
      <line
        className="code-slash"
        x1="17.5"
        y1="14.5"
        x2="14.5"
        y2="19.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 3D Cube with rotation animation
export function AnimatedCube3DIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animated-icon ${className}`}
    >
      <style>
        {`
          @keyframes rotate-cube {
            0% { opacity: 0.2; }
            25% { opacity: 0.4; }
            50% { opacity: 0.3; }
            75% { opacity: 0.25; }
            100% { opacity: 0.2; }
          }
          @keyframes glow-edge {
            0%, 100% { opacity: 0.3; stroke-width: 1.5; }
            50% { opacity: 0.7; stroke-width: 2; }
          }
          .cube-face-top { animation: rotate-cube 4s ease-in-out infinite; animation-delay: 0s; }
          .cube-face-left { animation: rotate-cube 4s ease-in-out infinite; animation-delay: 1.3s; }
          .cube-face-right { animation: rotate-cube 4s ease-in-out infinite; animation-delay: 2.6s; }
          .cube-edge { animation: glow-edge 3s ease-in-out infinite; }
        `}
      </style>
      
      {/* Top face */}
      <path
        className="cube-face-top"
        d="M16 6L26 11L16 16L6 11L16 6Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* Left face */}
      <path
        className="cube-face-left"
        d="M6 11V21L16 26V16L6 11Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* Right face */}
      <path
        className="cube-face-right"
        d="M16 16V26L26 21V11L16 16Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* Glowing central edge */}
      <line className="cube-edge" x1="16" y1="6" x2="16" y2="16" stroke="currentColor" />
    </svg>
  );
}

// ChatBot Icon with message bubbles appearing
export function AnimatedChatBotIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animated-icon ${className}`}
    >
      <style>
        {`
          @keyframes chat-bubble-pop {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
          }
          @keyframes typing-dot {
            0%, 100% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(-2px); opacity: 1; }
          }
          @keyframes sparkle-twinkle {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          .chat-bubble { animation: chat-bubble-pop 3s ease-in-out infinite; transform-origin: center; }
          .typing-dot { animation: typing-dot 1.5s ease-in-out infinite; transform-origin: center; }
          .typing-dot:nth-child(2) { animation-delay: 0.2s; }
          .typing-dot:nth-child(3) { animation-delay: 0.4s; }
          .sparkle { animation: sparkle-twinkle 2s ease-in-out infinite; transform-origin: center; }
          .sparkle:nth-child(2) { animation-delay: 0.5s; }
        `}
      </style>
      
      {/* Chat bubble with animation */}
      <path
        className="chat-bubble"
        d="M8 8C8 6.34315 9.34315 5 11 5H21C22.6569 5 24 6.34315 24 8V17C24 18.6569 22.6569 20 21 20H13L8 24V8Z"
        fill="currentColor"
        opacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* Typing dots with staggered bounce */}
      <circle className="typing-dot" cx="12" cy="12.5" r="1.5" fill="currentColor" />
      <circle className="typing-dot" cx="16" cy="12.5" r="1.5" fill="currentColor" />
      <circle className="typing-dot" cx="20" cy="12.5" r="1.5" fill="currentColor" />
      
      {/* AI sparkles */}
      <path className="sparkle" d="M26 8L27 6L28 8L27 10L26 8Z" fill="currentColor" />
      <path className="sparkle" d="M27 15L28 13L29 15L28 17L27 15Z" fill="currentColor" />
    </svg>
  );
}

// Automation Icon with rotating gears and lightning
export function AnimatedAutomationIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animated-icon ${className}`}
    >
      <style>
        {`
          @keyframes lightning-strike {
            0%, 90%, 100% { opacity: 0.5; }
            92%, 96% { opacity: 1; }
          }
          @keyframes rotate-gear {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes rotate-gear-reverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          .lightning { animation: lightning-strike 3s ease-in-out infinite; }
          .gear-1 { animation: rotate-gear 4s linear infinite; transform-origin: 24px 8px; }
          .gear-2 { animation: rotate-gear-reverse 4s linear infinite; transform-origin: 8px 24px; }
        `}
      </style>
      
      {/* Lightning bolt */}
      <path
        className="lightning"
        d="M18 4L10 16H16L14 28L22 16H16L18 4Z"
        fill="currentColor"
        opacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* Rotating gears */}
      <g className="gear-1">
        <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="8" r="1" fill="currentColor" />
      </g>
      
      <g className="gear-2">
        <circle cx="8" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="8" cy="24" r="1" fill="currentColor" />
      </g>
    </svg>
  );
}

// Integration Icon with data flowing through network
export function AnimatedIntegrationIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animated-icon ${className}`}
    >
      <style>
        {`
          @keyframes data-flow {
            0% { stroke-dashoffset: 20; opacity: 0.3; }
            100% { stroke-dashoffset: 0; opacity: 0.7; }
          }
          @keyframes hub-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          @keyframes node-ping {
            0%, 100% { opacity: 0.3; r: 2; }
            50% { opacity: 1; r: 2.8; }
          }
          .data-line { 
            stroke-dasharray: 5 5; 
            animation: data-flow 2s linear infinite; 
          }
          .central-hub { animation: hub-pulse 2s ease-in-out infinite; transform-origin: 16px 16px; }
          .network-node { animation: node-ping 2s ease-in-out infinite; }
          .network-node:nth-child(2) { animation-delay: 0.3s; }
          .network-node:nth-child(3) { animation-delay: 0.6s; }
          .network-node:nth-child(4) { animation-delay: 0.9s; }
          .network-node:nth-child(5) { animation-delay: 1.2s; }
        `}
      </style>
      
      {/* Central hub */}
      <circle className="central-hub" cx="16" cy="16" r="4" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Connected nodes with ping animation */}
      <circle className="network-node" cx="8" cy="8" r="2.5" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <circle className="network-node" cx="24" cy="8" r="2.5" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <circle className="network-node" cx="8" cy="24" r="2.5" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <circle className="network-node" cx="24" cy="24" r="2.5" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Data flow lines */}
      <g className="data-line" stroke="currentColor" strokeWidth="1.5">
        <line x1="10" y1="9.5" x2="13" y2="14" />
        <line x1="22" y1="9.5" x2="19" y2="14" />
        <line x1="10" y1="22.5" x2="13" y2="18" />
        <line x1="22" y1="22.5" x2="19" y2="18" />
      </g>
    </svg>
  );
}
