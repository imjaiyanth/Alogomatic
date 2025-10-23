# Meghamsys Website

AI-native digital partner website built with React, TypeScript, and cutting-edge animations.

## 🚀 Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **GSAP** - Professional-grade animations
- **Motion (Framer Motion)** - React animation library
- **OGL** - Lightweight WebGL library
- **Three.js** - 3D graphics

## 📦 Installation

```bash
# Install dependencies
pnpm install

# or with npm
npm install
```

## 🛠️ Development

```bash
# Start dev server
pnpm dev

# Type check
pnpm type-check

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🏗️ Project Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/      # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── PillNav.tsx
│   └── ...
├── hooks/           # Custom React hooks
│   ├── useActiveSection.ts
│   └── useContactForm.ts
├── App.tsx          # Main app component
├── main.tsx         # Entry point
├── styles.css       # Global styles
└── config.ts        # Environment configuration
```

## 🎨 Key Features

### Custom Navigation
- Pill-style navigation with GSAP animations
- Smooth scroll detection with IntersectionObserver
- Mobile-responsive with hamburger menu

### WebGL Background
- Custom shader-based background (DarkVeil)
- CPPN neural network visualization
- Configurable hue, noise, and scanlines

### Performance
- Code splitting with lazy loading
- Optimized bundle chunking
- Tree-shaking for minimal bundle size

### SEO & Accessibility
- Dynamic meta tags and Open Graph
- Structured data (Schema.org)
- ARIA labels and skip navigation
- Keyboard navigation support

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```env
VITE_FORM_ENDPOINT=your_form_endpoint
VITE_GA_TRACKING_ID=your_tracking_id
```

### Form Integration

The contact form uses the `useContactForm` hook. To integrate with a backend:

1. Update `VITE_FORM_ENDPOINT` in `.env.production`
2. Or use services like [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com), or [Netlify Forms](https://www.netlify.com/products/forms/)

## 📱 Responsive Design

- Desktop: 1180px container width
- Tablet: Adaptive layouts with flexbox
- Mobile: Touch-optimized with mobile menu

## 🎯 Performance Targets

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 📝 Code Quality

- TypeScript strict mode enabled
- No unused variables/parameters
- Consistent code formatting with Prettier
- Component-based architecture

## 🚢 Deployment

### Vercel (Recommended)

```bash
vercel
```

### Netlify

```bash
netlify deploy --prod
```

### Build Output

```bash
pnpm build
# Output: dist/
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Ensure types pass: `pnpm type-check`
4. Submit a pull request

## 📄 License

Private - All rights reserved

## 🔗 Links

- Website: https://meghamsys.com
- Email: sales@meghamsys.com
- Locations: India • USA
