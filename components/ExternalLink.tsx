import type { ReactNode } from 'react';

export function ExternalLink({
  href,
  children,
  className = 'link-out'
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <span className="sr-only">(opens in a new tab)</span>
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" fill="none">
        <path
          d="M3 11 11 3M4.6 3H11v6.4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
