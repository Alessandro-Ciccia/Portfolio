'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { nav as navItems, site } from '@/lib/site';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="container site-header__inner glass">
        <a className="brand" href="/#top">
          <span className="brand__dot" aria-hidden="true" />
          <span>{site.name}</span>
          <span className="brand__role">{site.role}</span>
        </a>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} className="nav__link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            className="icon-button menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              {open ? (
                <path
                  d="m3.5 3.5 9 9m0-9-9 9"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2.5 5h11M2.5 11h11"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="mobile-nav glass" aria-label="Primary mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="mobile-nav__link"
              href={item.href}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
