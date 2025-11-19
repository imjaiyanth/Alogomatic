import type { CSSProperties } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { usePageVisibility, useReducedMotion } from '../hooks/useReducedMotion';

interface InsightCard {
  id: string;
  chip: string;
  title: string;
  summary: string;
  accent: string;
  glow: string;
}

const cards: InsightCard[] = [
  {
    id: 'telemetry',
    chip: 'Reliable',
    title: 'Telemetry that operators trust',
    summary: 'Command centres surface the right device signals with SLO guardrails and clear ownership handoffs.',
    accent: 'linear-gradient(135deg, rgba(82, 240, 255, 0.18) 0%, rgba(56, 189, 248, 0.52) 35%, rgba(124, 58, 237, 0.66) 100%)',
    glow: 'rgba(82, 240, 255, 0.7)'
  },
  {
    id: 'portals',
    chip: 'Customizable',
    title: 'Portals designed for adoption',
    summary: 'Role-based workspaces, design systems, and embedded knowledge keep customers, partners, and field teams aligned.',
    accent: 'linear-gradient(140deg, rgba(59, 130, 246, 0.2) 0%, rgba(22, 163, 74, 0.45) 40%, rgba(82, 240, 255, 0.6) 100%)',
    glow: 'rgba(45, 212, 191, 0.65)'
  },
  {
    id: 'automation',
    chip: 'Smooth',
    title: 'Automation with human guardrails',
    summary: 'Copilots act on telemetry, escalate with context, and keep service teams in the loop with auditable playbooks.',
    accent: 'linear-gradient(140deg, rgba(244, 114, 182, 0.18) 0%, rgba(124, 58, 237, 0.55) 50%, rgba(56, 189, 248, 0.65) 100%)',
    glow: 'rgba(124, 58, 237, 0.7)'
  }
];

const ROTATION_INTERVAL = 5200;

export default function CardSwapShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isVisible = usePageVisibility();

  useEffect(() => {
    if (prefersReducedMotion || isHovering || !isVisible) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, isHovering, isVisible]);

  const orderedCards = useMemo(() => {
    return cards
      .map((card, idx) => ({ card, offset: (idx - activeIndex + cards.length) % cards.length }))
      .filter((entry) => entry.offset < 3);
  }, [activeIndex]);

  return (
    <div
      className="card-swap"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="card-swap__copy">
        <p className="card-swap__eyebrow">In motion</p>
        <h3 className="card-swap__title metallic-heading">How connected operations come to life.</h3>
        <p className="card-swap__summary">
          Each card highlights a pillar of our delivery playbooks—from reliable telemetry to human-centred automation. The stack rotates automatically, or tap a pill to explore a focus area.
        </p>
        <div className="card-swap__controls" role="tablist" aria-label="Service focus areas">
          {cards.map((card, idx) => (
            <button
              key={card.id}
              className="card-swap__control"
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-selected={activeIndex === idx}
              role="tab"
            >
              <span>{card.chip}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="card-swap__stage" aria-live="polite">
        {orderedCards.map(({ card, offset }) => (
          <article
            key={card.id}
            className="card-swap__card"
            data-active={offset === 0}
            style={{
              '--offset': offset,
              '--card-glow': card.glow,
              background: card.accent
            } as CSSProperties & { '--offset': number; '--card-glow': string }}
          >
            <div className="card-swap__chip">{card.chip}</div>
            <div className="card-swap__body">
              <h4>{card.title}</h4>
              <p>{card.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
