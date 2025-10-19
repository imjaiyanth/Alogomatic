import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';
const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;
const cardData = [
    {
        color: '#080316',
        title: 'AI Agents & Copilots',
        description: 'Design domain-tuned assistants that reason, act, and learn alongside your teams.',
        label: 'Autonomy'
    },
    {
        color: '#070312',
        title: 'Workflow Orchestration',
        description: 'Connect systems with multi-agent flows that close loops without human bottlenecks.',
        label: 'Automation'
    },
    {
        color: '#060010',
        title: 'Product Strategy & UX',
        description: 'Translate vision into validated product roadmaps, prototypes, and launch-ready experiences.',
        label: 'Experience'
    },
    {
        color: '#050015',
        title: 'Full-stack Platforms',
        description: 'Ship resilient web applications, APIs, and data planes engineered to scale with demand.',
        label: 'Engineering'
    },
    {
        color: '#060018',
        title: 'Insight Fabric',
        description: 'Fuse data sources into real-time intelligence layers that surface trends and decisions.',
        label: 'Intelligence'
    },
    {
        color: '#04000f',
        title: 'Governance & Safety',
        description: 'Operationalize responsible AI with monitoring, controls, and compliance baked-in.',
        label: 'Trust'
    }
];
const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
    const el = document.createElement('div');
    el.className = 'magic-particle';
    el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
    return el;
};
const calculateSpotlightValues = (radius) => ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75
});
const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;
    card.style.setProperty('--magic-glow-x', `${relativeX}%`);
    card.style.setProperty('--magic-glow-y', `${relativeY}%`);
    card.style.setProperty('--magic-glow-intensity', glow.toString());
    card.style.setProperty('--magic-glow-radius', `${radius}px`);
};
const ParticleCard = ({ children, className = '', disableAnimations = false, style, particleCount = DEFAULT_PARTICLE_COUNT, glowColor = DEFAULT_GLOW_COLOR, enableTilt = true, clickEffect = false, enableMagnetism = false }) => {
    const cardRef = useRef(null);
    const particlesRef = useRef([]);
    const timeoutsRef = useRef([]);
    const isHoveredRef = useRef(false);
    const memoizedParticles = useRef([]);
    const particlesInitialized = useRef(false);
    const magnetismAnimationRef = useRef(null);
    const initializeParticles = useCallback(() => {
        if (particlesInitialized.current || !cardRef.current)
            return;
        const { width, height } = cardRef.current.getBoundingClientRect();
        memoizedParticles.current = Array.from({ length: particleCount }, () => createParticleElement(Math.random() * width, Math.random() * height, glowColor));
        particlesInitialized.current = true;
    }, [particleCount, glowColor]);
    const clearAllParticles = useCallback(() => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
        magnetismAnimationRef.current?.kill();
        particlesRef.current.forEach(particle => {
            gsap.to(particle, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'back.in(1.7)',
                onComplete: () => {
                    particle.parentNode?.removeChild(particle);
                }
            });
        });
        particlesRef.current = [];
    }, []);
    const animateParticles = useCallback(() => {
        if (!cardRef.current || !isHoveredRef.current)
            return;
        if (!particlesInitialized.current) {
            initializeParticles();
        }
        memoizedParticles.current.forEach((particle, index) => {
            const timeoutId = window.setTimeout(() => {
                if (!isHoveredRef.current || !cardRef.current)
                    return;
                const clone = particle.cloneNode(true);
                cardRef.current.appendChild(clone);
                particlesRef.current.push(clone);
                gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
                gsap.to(clone, {
                    x: (Math.random() - 0.5) * 100,
                    y: (Math.random() - 0.5) * 100,
                    rotation: Math.random() * 360,
                    duration: 2 + Math.random() * 2,
                    ease: 'none',
                    repeat: -1,
                    yoyo: true
                });
                gsap.to(clone, {
                    opacity: 0.3,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    repeat: -1,
                    yoyo: true
                });
            }, index * 100);
            timeoutsRef.current.push(timeoutId);
        });
    }, [initializeParticles]);
    useEffect(() => {
        if (disableAnimations || !cardRef.current)
            return;
        const element = cardRef.current;
        const handleMouseEnter = () => {
            isHoveredRef.current = true;
            animateParticles();
            if (enableTilt) {
                gsap.to(element, {
                    rotateX: 5,
                    rotateY: 5,
                    duration: 0.3,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });
            }
        };
        const handleMouseLeave = () => {
            isHoveredRef.current = false;
            clearAllParticles();
            if (enableTilt) {
                gsap.to(element, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
            if (enableMagnetism) {
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };
        const handleMouseMove = (e) => {
            if (!enableTilt && !enableMagnetism)
                return;
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            if (enableTilt) {
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                gsap.to(element, {
                    rotateX,
                    rotateY,
                    duration: 0.1,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });
            }
            if (enableMagnetism) {
                const magnetX = (x - centerX) * 0.05;
                const magnetY = (y - centerY) * 0.05;
                magnetismAnimationRef.current = gsap.to(element, {
                    x: magnetX,
                    y: magnetY,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };
        const handleClick = (e) => {
            if (!clickEffect)
                return;
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
            const ripple = document.createElement('div');
            ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;
            element.appendChild(ripple);
            gsap.fromTo(ripple, {
                scale: 0,
                opacity: 1
            }, {
                scale: 1,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                onComplete: () => ripple.remove()
            });
        };
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('click', handleClick);
        return () => {
            isHoveredRef.current = false;
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('click', handleClick);
            clearAllParticles();
        };
    }, [
        animateParticles,
        clearAllParticles,
        disableAnimations,
        enableTilt,
        enableMagnetism,
        clickEffect,
        glowColor
    ]);
    return (_jsx("div", { ref: cardRef, className: `${className} magic-particle-container`, style: { ...style, position: 'relative', overflow: 'hidden' }, children: children }));
};
const GlobalSpotlight = ({ gridRef, disableAnimations = false, enabled = true, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, glowColor = DEFAULT_GLOW_COLOR }) => {
    const spotlightRef = useRef(null);
    const isInsideSection = useRef(false);
    useEffect(() => {
        if (disableAnimations || !gridRef?.current || !enabled)
            return;
        const spotlight = document.createElement('div');
        spotlight.className = 'magic-spotlight';
        spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
        document.body.appendChild(spotlight);
        spotlightRef.current = spotlight;
        const handleMouseMove = (e) => {
            if (!spotlightRef.current || !gridRef.current)
                return;
            const section = gridRef.current.closest('.magic-bento-section');
            const rect = section?.getBoundingClientRect();
            const mouseInside = rect &&
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;
            isInsideSection.current = mouseInside || false;
            const cards = gridRef.current.querySelectorAll('.magic-card');
            if (!mouseInside) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                cards.forEach(card => {
                    card.style.setProperty('--magic-glow-intensity', '0');
                });
                return;
            }
            const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
            let minDistance = Infinity;
            cards.forEach(card => {
                const cardRect = card.getBoundingClientRect();
                const centerX = cardRect.left + cardRect.width / 2;
                const centerY = cardRect.top + cardRect.height / 2;
                const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                const effectiveDistance = Math.max(0, distance);
                minDistance = Math.min(minDistance, effectiveDistance);
                let glowIntensity = 0;
                if (effectiveDistance <= proximity) {
                    glowIntensity = 1;
                }
                else if (effectiveDistance <= fadeDistance) {
                    glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                }
                updateCardGlowProperties(card, e.clientX, e.clientY, glowIntensity, spotlightRadius);
            });
            gsap.to(spotlightRef.current, {
                left: e.clientX,
                top: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
            const targetOpacity = minDistance <= proximity
                ? 0.8
                : minDistance <= fadeDistance
                    ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
                    : 0;
            gsap.to(spotlightRef.current, {
                opacity: targetOpacity,
                duration: targetOpacity > 0 ? 0.2 : 0.5,
                ease: 'power2.out'
            });
        };
        const handleMouseLeave = () => {
            isInsideSection.current = false;
            gridRef.current?.querySelectorAll('.magic-card').forEach(card => {
                card.style.setProperty('--magic-glow-intensity', '0');
            });
            if (spotlightRef.current) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
        };
    }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);
    return null;
};
const BentoCardGrid = ({ children, gridRef }) => (_jsx("div", { className: "magic-grid magic-bento-section", ref: gridRef, children: children }));
const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (typeof window === 'undefined')
            return;
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
};
const MagicBento = ({ textAutoHide = true, enableStars = true, enableSpotlight = true, enableBorderGlow = true, disableAnimations = false, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, particleCount = DEFAULT_PARTICLE_COUNT, enableTilt = false, glowColor = DEFAULT_GLOW_COLOR, clickEffect = true, enableMagnetism = true }) => {
    const gridRef = useRef(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = disableAnimations || isMobile;
    const renderCardContent = (card) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "magic-card__header", children: _jsx("div", { className: "magic-card__label", children: card.label }) }), _jsxs("div", { className: "magic-card__content", children: [_jsx("h3", { className: "magic-card__title", children: card.title }), _jsx("p", { className: "magic-card__description", children: card.description })] })] }));
    return (_jsxs("div", { className: "magic-bento", children: [enableSpotlight && (_jsx(GlobalSpotlight, { gridRef: gridRef, disableAnimations: shouldDisableAnimations, enabled: enableSpotlight, spotlightRadius: spotlightRadius, glowColor: glowColor })), _jsx(BentoCardGrid, { gridRef: gridRef, children: cardData.map((card, index) => {
                    const baseClassName = `magic-card ${textAutoHide ? 'magic-card--text-autohide' : ''} ${enableBorderGlow ? 'magic-card--border-glow' : ''}`;
                    const cardStyles = {
                        backgroundColor: card.color,
                        '--magic-glow-color': glowColor
                    };
                    if (enableStars) {
                        return (_jsx(ParticleCard, { className: baseClassName.trim(), style: cardStyles, disableAnimations: shouldDisableAnimations, particleCount: particleCount, glowColor: glowColor, enableTilt: enableTilt, clickEffect: clickEffect, enableMagnetism: enableMagnetism, children: renderCardContent(card) }, card.label ?? index));
                    }
                    return (_jsx("div", { className: `${baseClassName.trim()} magic-particle-container`, style: { ...cardStyles, position: 'relative', overflow: 'hidden' }, ref: el => {
                            if (!el || shouldDisableAnimations)
                                return;
                            const handleMouseMove = (e) => {
                                const rect = el.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                const centerX = rect.width / 2;
                                const centerY = rect.height / 2;
                                if (enableTilt) {
                                    const rotateX = ((y - centerY) / centerY) * -10;
                                    const rotateY = ((x - centerX) / centerX) * 10;
                                    gsap.to(el, {
                                        rotateX,
                                        rotateY,
                                        duration: 0.1,
                                        ease: 'power2.out',
                                        transformPerspective: 1000
                                    });
                                }
                                if (enableMagnetism) {
                                    const magnetX = (x - centerX) * 0.05;
                                    const magnetY = (y - centerY) * 0.05;
                                    gsap.to(el, {
                                        x: magnetX,
                                        y: magnetY,
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }
                            };
                            const handleMouseLeave = () => {
                                if (enableTilt) {
                                    gsap.to(el, {
                                        rotateX: 0,
                                        rotateY: 0,
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }
                                if (enableMagnetism) {
                                    gsap.to(el, {
                                        x: 0,
                                        y: 0,
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }
                            };
                            const handleClick = (e) => {
                                if (!clickEffect)
                                    return;
                                const rect = el.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
                                const ripple = document.createElement('div');
                                ripple.className = 'magic-ripple';
                                ripple.style.cssText = `
                    position: absolute;
                    width: ${maxDistance * 2}px;
                    height: ${maxDistance * 2}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                    left: ${x - maxDistance}px;
                    top: ${y - maxDistance}px;
                    pointer-events: none;
                    z-index: 1000;
                  `;
                                el.appendChild(ripple);
                                gsap.fromTo(ripple, {
                                    scale: 0,
                                    opacity: 1
                                }, {
                                    scale: 1,
                                    opacity: 0,
                                    duration: 0.8,
                                    ease: 'power2.out',
                                    onComplete: () => ripple.remove()
                                });
                            };
                            el.addEventListener('mousemove', handleMouseMove);
                            el.addEventListener('mouseleave', handleMouseLeave);
                            el.addEventListener('click', handleClick);
                        }, children: renderCardContent(card) }, card.label ?? index));
                }) })] }));
};
export default MagicBento;
