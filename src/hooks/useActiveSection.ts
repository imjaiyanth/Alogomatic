import { useEffect, useMemo, useState } from 'react';

type SectionInput = string | { id: string; threshold?: number };

type NormalizedSection = {
  id: string;
  threshold: number;
};

const DEFAULT_SECTIONS: NormalizedSection[] = [
  { id: 'home', threshold: 0.55 },
  { id: 'about', threshold: 0.4 },
  { id: 'services', threshold: 0.4 },
  { id: 'delivery', threshold: 0.35 },
  { id: 'solutions', threshold: 0.35 },
  { id: 'impact', threshold: 0.35 },
  { id: 'industries', threshold: 0.35 },
  { id: 'tech', threshold: 0.35 },
  { id: 'faq', threshold: 0.35 },
  { id: 'insights', threshold: 0.35 },
  { id: 'accessibility', threshold: 0.3 },
  { id: 'contact', threshold: 0.25 }
];

const INTERSECTION_THRESHOLDS = [0.1, 0.25, 0.35, 0.45, 0.6, 0.75, 0.9];

export function useActiveSection(sections: SectionInput[] = DEFAULT_SECTIONS) {
  const normalizedSections = useMemo<NormalizedSection[]>(
    () =>
      sections.map(section =>
        typeof section === 'string'
          ? { id: section, threshold: 0.35 }
          : { id: section.id, threshold: section.threshold ?? 0.35 }
      ),
    [sections]
  );

  const [activeHref, setActiveHref] = useState<string>(() => {
    const first = normalizedSections[0];
    return first ? `#${first.id}` : '';
  });

  useEffect(() => {
    if (!normalizedSections.length || typeof window === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => ({
            id: entry.target.id,
            ratio: entry.intersectionRatio
          }))
          .sort((a, b) => b.ratio - a.ratio);

        if (!visible.length) {
          return;
        }

        const next = visible[0];
        if (!next) {
          return;
        }

        const nextHref = `#${next.id}`;
        setActiveHref(prev => (prev === nextHref ? prev : nextHref));
      },
      {
        rootMargin: '0px 0px -40% 0px',
        threshold: INTERSECTION_THRESHOLDS
      }
    );

    const observedElements = normalizedSections
      .map(section => {
        const el = document.getElementById(section.id);
        if (!el) {
          return null;
        }

        observer.observe(el);
        return el;
      })
  .filter((el): el is HTMLElement => el !== null);

    const handleHashChange = () => {
      setActiveHref(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observedElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [normalizedSections]);

  const handleManualActivate = (href: string) => {
    setActiveHref(`#${href.replace(/^#/, '')}`);
  };

  return {
    activeHref,
    setActiveHref: handleManualActivate
  };
}

export default useActiveSection;
