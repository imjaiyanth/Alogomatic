interface IconProps {
  size?: number;
  className?: string;
}

// AI Brain/Neural Network Icon - for AI Automation & Chatbots
export function AIBrainIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Neural network nodes */}
      <circle cx="16" cy="8" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="8" cy="16" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="24" cy="16" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="12" cy="24" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="20" cy="24" r="2.5" fill="currentColor" opacity="0.9" />
      
      {/* Connecting lines with gradient effect */}
      <g stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round">
        <line x1="16" y1="10" x2="10" y2="14" />
        <line x1="16" y1="10" x2="22" y2="14" />
        <line x1="8" y1="18" x2="12" y2="22" />
        <line x1="24" y1="18" x2="20" y2="22" />
        <line x1="10" y1="16" x2="22" y2="16" />
        <line x1="14" y1="24" x2="18" y2="24" />
      </g>
      
      {/* Central processing node */}
      <circle cx="16" cy="16" r="3.5" fill="currentColor" />
      <circle cx="16" cy="16" r="2" fill="var(--bg-main, #050510)" />
    </svg>
  );
}

// Code/Web App Icon - for Web Applications
export function WebAppIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Browser window frame */}
      <rect
        x="4"
        y="6"
        width="24"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Browser dots */}
      <circle cx="7.5" cy="9.5" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="11" cy="9.5" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="14.5" cy="9.5" r="1" fill="currentColor" opacity="0.6" />
      
      {/* Code brackets */}
      <path
        d="M11 15L9 17L11 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 15L23 17L21 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Forward slash */}
      <line
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

// 3D Cube Icon - for 3D Product Configurators
export function Cube3DIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 3D Cube structure */}
      {/* Top face */}
      <path
        d="M16 6L26 11L16 16L6 11L16 6Z"
        fill="currentColor"
        opacity="0.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* Left face */}
      <path
        d="M6 11V21L16 26V16L6 11Z"
        fill="currentColor"
        opacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* Right face */}
      <path
        d="M16 16V26L26 21V11L16 16Z"
        fill="currentColor"
        opacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* Edge highlights for depth */}
      <line x1="16" y1="6" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

// Chat Bubble with AI sparkles - for Chatbots
export function ChatBotIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Chat bubble */}
      <path
        d="M8 8C8 6.34315 9.34315 5 11 5H21C22.6569 5 24 6.34315 24 8V17C24 18.6569 22.6569 20 21 20H13L8 24V8Z"
        fill="currentColor"
        opacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* AI thinking dots */}
      <circle cx="12" cy="12.5" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="16" cy="12.5" r="1.5" fill="currentColor" />
      <circle cx="20" cy="12.5" r="1.5" fill="currentColor" opacity="0.8" />
      
      {/* AI sparkle indicators */}
      <path
        d="M26 8L27 6L28 8L27 10L26 8Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M27 15L28 13L29 15L28 17L27 15Z"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  );
}

// Lightning/Automation Icon - for Workflow Automation
export function AutomationIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lightning bolt for automation speed */}
      <path
        d="M18 4L10 16H16L14 28L22 16H16L18 4Z"
        fill="currentColor"
        opacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* Gear/cog elements for automation */}
      <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="8" r="1" fill="currentColor" />
      
      <circle cx="8" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="8" cy="24" r="1" fill="currentColor" />
    </svg>
  );
}

// Network/Integration Icon - for System Integration
export function IntegrationIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central hub */}
      <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Connected nodes */}
      <circle cx="8" cy="8" r="2.5" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="8" r="2.5" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="24" r="2.5" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Connection lines */}
      <line x1="10" y1="9.5" x2="13" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="22" y1="9.5" x2="19" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="10" y1="22.5" x2="13" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="22" y1="22.5" x2="19" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}
