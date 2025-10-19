import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MagicBento from './MagicBento';
export default function ServicesSection() {
    return (_jsx("section", { className: "section section--contrast", id: "services", children: _jsxs("div", { className: "container section__layout", children: [_jsxs("div", { className: "section__intro", children: [_jsx("p", { className: "eyebrow", children: "What we do" }), _jsx("h2", { children: "Intelligent systems engineered for decisive outcomes." }), _jsx("p", { children: "We blend applied AI research, product strategy, and full-stack execution to deliver human-centered, resilient solutions." })] }), _jsx("div", { className: "section__content section__content--bento", children: _jsx(MagicBento, { textAutoHide: true, enableStars: true, enableSpotlight: true, enableBorderGlow: true, enableTilt: true, enableMagnetism: true, clickEffect: true, spotlightRadius: 320, particleCount: 14, glowColor: "88, 166, 255" }) })] }) }));
}
