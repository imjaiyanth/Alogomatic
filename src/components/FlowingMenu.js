import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useId, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import './FlowingMenu.css';
const animationDefaults = { duration: 0.65, ease: 'expo.out' };
export default function FlowingMenu({ items, ariaLabel = 'Selected work' }) {
    return (_jsx("div", { className: "flow-menu", children: _jsx("nav", { className: "flow-menu__list", "aria-label": ariaLabel, children: items.map(item => (_jsx(MenuItem, { ...item }, item.label))) }) }));
}
function MenuItem({ href, label, summary, image, meta }) {
    const itemRef = useRef(null);
    const marqueeRef = useRef(null);
    const marqueeInnerRef = useRef(null);
    const descriptionId = useId();
    const prefersReducedMotion = useMemo(() => {
        if (typeof window === 'undefined' || !window.matchMedia)
            return true;
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }, []);
    const repeatedContent = useMemo(() => Array.from({ length: 3 }).map((_, idx) => (_jsxs(Fragment, { children: [_jsx("span", { className: "flow-menu__label", children: label }), _jsx("span", { className: "flow-menu__summary", children: summary }), _jsx("div", { className: "flow-menu__media", style: { backgroundImage: image } }), _jsx("ul", { className: "flow-menu__meta", "aria-hidden": "true", children: meta.map(token => (_jsx("li", { children: token }, `${token}-${idx}`))) })] }, `${label}-${idx}`))), [image, label, meta, summary]);
    const performAnimation = (direction, edge) => {
        if (!marqueeRef.current || !marqueeInnerRef.current)
            return;
        if (prefersReducedMotion) {
            const marqueeHiddenY = edge === 'top' ? '-102%' : '102%';
            const innerHiddenY = edge === 'top' ? '102%' : '-102%';
            if (direction === 'in') {
                marqueeRef.current.style.transform = 'translate3d(0, 0%, 0)';
                marqueeInnerRef.current.style.transform = 'translate3d(0, 0%, 0)';
            }
            else {
                marqueeRef.current.style.transform = `translate3d(0, ${marqueeHiddenY}, 0)`;
                marqueeInnerRef.current.style.transform = `translate3d(0, ${innerHiddenY}, 0)`;
            }
            return;
        }
        const tl = gsap.timeline({ defaults: animationDefaults });
        const marqueeY = edge === 'top' ? '-102%' : '102%';
        const innerY = edge === 'top' ? '102%' : '-102%';
        if (direction === 'in') {
            tl.set(marqueeRef.current, { y: marqueeY }).set(marqueeInnerRef.current, { y: innerY }).to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
        }
        else {
            tl.to(marqueeRef.current, { y: marqueeY }, 0).to(marqueeInnerRef.current, { y: innerY }, 0);
        }
    };
    const findClosestEdge = (mouseX, mouseY, rect) => {
        const distTop = Math.pow(mouseX - rect.width / 2, 2) + Math.pow(mouseY - 0, 2);
        const distBottom = Math.pow(mouseX - rect.width / 2, 2) + Math.pow(mouseY - rect.height, 2);
        return distTop < distBottom ? 'top' : 'bottom';
    };
    const handleEnter = (event) => {
        if (!itemRef.current)
            return;
        const rect = itemRef.current.getBoundingClientRect();
        const fromKeyboard = event.type === 'focus';
        const edge = fromKeyboard || !('clientX' in event)
            ? 'bottom'
            : findClosestEdge(event.clientX - rect.left, event.clientY - rect.top, rect);
        performAnimation('in', edge);
        marqueeRef.current?.setAttribute('data-active', 'true');
    };
    const handleLeave = (event) => {
        if (!itemRef.current)
            return;
        const rect = itemRef.current.getBoundingClientRect();
        const fromKeyboard = event.type === 'blur';
        const edge = fromKeyboard || !('clientX' in event)
            ? 'bottom'
            : findClosestEdge(event.clientX - rect.left, event.clientY - rect.top, rect);
        performAnimation('out', edge);
        marqueeRef.current?.removeAttribute('data-active');
    };
    return (_jsxs("div", { className: "flow-menu__item", ref: itemRef, children: [_jsxs("a", { className: "flow-menu__link", href: href, onMouseEnter: handleEnter, onMouseLeave: handleLeave, onFocus: handleEnter, onBlur: handleLeave, "aria-describedby": descriptionId, children: [_jsx("span", { children: label }), _jsxs("span", { id: descriptionId, className: "flow-menu__sr", children: [summary, ". ", meta.join(' • ')] })] }), _jsx("div", { className: "flow-menu__marquee", ref: marqueeRef, "aria-hidden": "true", children: _jsx("div", { className: "flow-menu__marquee-inner", ref: marqueeInnerRef, children: _jsx("div", { className: "flow-menu__marquee-track", children: repeatedContent }) }) })] }));
}
