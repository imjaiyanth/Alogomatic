# Custom AI-Themed Service Icons

This file contains custom SVG icons designed to match Meghamsys's turquoise/cyan brand theme (#52f0ff).

## Available Icons

### 1. AIBrainIcon
**Use for:** AI Automation, Machine Learning, Neural Networks
- Features a neural network design with connected nodes
- Central processing hub with surrounding connection points
- Perfect for AI and automation services

### 2. WebAppIcon
**Use for:** Web Applications, Custom Software, Development
- Browser window with code brackets
- Represents modern web development
- Clean, developer-friendly aesthetic

### 3. Cube3DIcon
**Use for:** 3D Configurators, Product Visualization, 3D Rendering
- Isometric 3D cube with depth shading
- Multiple faces showing dimensionality
- Ideal for 3D and visualization services

### 4. ChatBotIcon
**Use for:** AI Chatbots, Customer Support, Conversational AI
- Chat bubble with AI thinking dots
- Sparkle indicators showing AI intelligence
- Perfect for chatbot and support automation

### 5. AutomationIcon
**Use for:** Workflow Automation, Process Optimization
- Lightning bolt representing speed
- Gear elements showing automation mechanics
- Combines speed with automated processes

### 6. IntegrationIcon
**Use for:** System Integration, API Connections, Data Flow
- Central hub with connected nodes
- Network topology design
- Great for integration and connectivity services

## Usage

```tsx
import { AIBrainIcon, WebAppIcon, Cube3DIcon } from './icons/ServiceIcons';

// Basic usage
<AIBrainIcon size={32} />

// With custom className
<WebAppIcon size={40} className="my-custom-class" />

// In a styled container
<div style={{ color: 'var(--accent)' }}>
  <Cube3DIcon size={28} />
</div>
```

## Props

All icons accept the same props:

- `size?: number` - Icon size in pixels (default: 32)
- `className?: string` - Additional CSS classes

## Styling

Icons inherit color from their parent via `currentColor`, making them easy to theme:

```css
/* Icons will be turquoise */
.icon-container {
  color: var(--accent); /* #52f0ff */
}

/* Add glow effect */
.icon-container svg {
  filter: drop-shadow(0 2px 8px rgba(82, 240, 255, 0.4));
}
```

## Design Principles

1. **Consistent Line Weight:** All icons use 1.5px stroke width
2. **Opacity Layers:** Multiple opacity values create depth (0.2, 0.3, 0.6, 0.9)
3. **Rounded Caps:** strokeLinecap="round" for softer appearance
4. **32×32 ViewBox:** Consistent sizing and scaling
5. **Theme-Aware:** Uses currentColor and CSS variables for easy theming

## Brand Colors

Primary: `#52f0ff` (Turquoise/Cyan)
Secondary: `#1ec8ff` (Deeper Blue)
Background: `#050510` (Dark Navy)
