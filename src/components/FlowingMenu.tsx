import { Fragment, useId, useMemo, useRef } from 'react';
import type { FocusEvent, MouseEvent as ReactMouseEvent } from 'react';
import { gsap } from 'gsap';

import './FlowingMenu.css';

export interface FlowingMenuItem {
  href: string;
  label: string;
  summary: string;
  image: string;
  meta: string[];
}

interface FlowingMenuProps {
  items: FlowingMenuItem[];
  ariaLabel?: string;
}

const animationDefaults: gsap.TweenVars = { duration: 0.65, ease: 'expo.out' };

export default function FlowingMenu({ items, ariaLabel = 'Selected work' }: FlowingMenuProps) {
  return (
    <div className="flow-menu">
      <nav className="flow-menu__list" aria-label={ariaLabel}>
        {items.map(item => (
          <MenuItem key={item.label} {...item} />
        ))}
      </nav>
    </div>
  );
}

type InteractiveEvent = ReactMouseEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>;

function MenuItem({ href, label, summary, image, meta }: FlowingMenuItem) {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const descriptionId = useId();
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const repeatedContent = useMemo(
    () =>
      Array.from({ length: 3 }).map((_, idx) => (
        <Fragment key={`${label}-${idx}`}>
          <span className="flow-menu__label">{label}</span>
          <span className="flow-menu__summary">{summary}</span>
          <div className="flow-menu__media" style={{ backgroundImage: image }} />
          <ul className="flow-menu__meta" aria-hidden="true">
            {meta.map(token => (
              <li key={`${token}-${idx}`}>{token}</li>
            ))}
          </ul>
        </Fragment>
      )),
    [image, label, meta, summary]
  );

  const performAnimation = (direction: 'in' | 'out', edge: 'top' | 'bottom') => {
    if (!marqueeRef.current || !marqueeInnerRef.current) return;

    if (prefersReducedMotion) {
      const marqueeHiddenY = edge === 'top' ? '-102%' : '102%';
      const innerHiddenY = edge === 'top' ? '102%' : '-102%';
      if (direction === 'in') {
        marqueeRef.current.style.transform = 'translate3d(0, 0%, 0)';
        marqueeInnerRef.current.style.transform = 'translate3d(0, 0%, 0)';
      } else {
        marqueeRef.current.style.transform = `translate3d(0, ${marqueeHiddenY}, 0)`;
        marqueeInnerRef.current.style.transform = `translate3d(0, ${innerHiddenY}, 0)`;
      }
      return;
    }

    const tl = gsap.timeline({ defaults: animationDefaults });
    const marqueeY = edge === 'top' ? '-102%' : '102%';
    const innerY = edge === 'top' ? '102%' : '-102%';

    if (direction === 'in') {
      tl.set(marqueeRef.current, { y: marqueeY }).set(marqueeInnerRef.current, { y: innerY }).to(
        [marqueeRef.current, marqueeInnerRef.current],
        { y: '0%' }
      );
    } else {
      tl.to(marqueeRef.current, { y: marqueeY }, 0).to(marqueeInnerRef.current, { y: innerY }, 0);
    }
  };

  const findClosestEdge = (mouseX: number, mouseY: number, rect: DOMRect): 'top' | 'bottom' => {
    const distTop = Math.pow(mouseX - rect.width / 2, 2) + Math.pow(mouseY - 0, 2);
    const distBottom = Math.pow(mouseX - rect.width / 2, 2) + Math.pow(mouseY - rect.height, 2);
    return distTop < distBottom ? 'top' : 'bottom';
  };

  const handleEnter = (event: InteractiveEvent) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const fromKeyboard = event.type === 'focus';
    const edge = fromKeyboard || !('clientX' in event)
      ? 'bottom'
      : findClosestEdge(event.clientX - rect.left, event.clientY - rect.top, rect);
    performAnimation('in', edge);
    marqueeRef.current?.setAttribute('data-active', 'true');
  };

  const handleLeave = (event: InteractiveEvent) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const fromKeyboard = event.type === 'blur';
    const edge = fromKeyboard || !('clientX' in event)
      ? 'bottom'
      : findClosestEdge(event.clientX - rect.left, event.clientY - rect.top, rect);
    performAnimation('out', edge);
    marqueeRef.current?.removeAttribute('data-active');
  };

  return (
    <div className="flow-menu__item" ref={itemRef}>
      <a
        className="flow-menu__link"
        href={href}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onFocus={handleEnter}
        onBlur={handleLeave}
        aria-describedby={descriptionId}
      >
        <span>{label}</span>
        <span id={descriptionId} className="flow-menu__sr">
          {summary}. {meta.join(' • ')}
        </span>
      </a>
      <div className="flow-menu__marquee" ref={marqueeRef} aria-hidden="true">
        <div className="flow-menu__marquee-inner" ref={marqueeInnerRef}>
          <div className="flow-menu__marquee-track">{repeatedContent}</div>
        </div>
      </div>
    </div>
  );
}
