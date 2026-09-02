'use client';

import { useEffect, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Rendered element. Defaults to a div. */
  as?: 'div' | 'article';
  className?: string;
  /** Colour key applied to the block, used by the case study styles. */
  accent?: 'iris' | 'aqua';
  'aria-labelledby'?: string;
};

/**
 * Fades content in the first time it scrolls into view.
 * The content is always in the DOM: the effect only animates opacity and
 * transform, and is skipped entirely under prefers-reduced-motion or when
 * IntersectionObserver is unavailable.
 */
export function Reveal({
  children,
  as = 'div',
  className,
  accent,
  'aria-labelledby': labelledBy
}: RevealProps) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!node) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  const props = {
    ref: setNode,
    className: className ? `reveal ${className}` : 'reveal',
    'data-visible': visible,
    'data-accent': accent,
    'aria-labelledby': labelledBy
  };

  return as === 'article' ? (
    <article {...props}>{children}</article>
  ) : (
    <div {...props}>{children}</div>
  );
}
