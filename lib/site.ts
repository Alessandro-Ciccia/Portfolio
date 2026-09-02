/**
 * Single source of truth for identity, URLs and contact details.
 * Update the values marked TODO before deploying.
 */
export const site = {
  /** TODO: add your surname. */
  name: 'Alessandro',
  role: 'Frontend Developer',
  /** TODO: replace with your real domain (canonical URLs, sitemap, Open Graph). */
  url: 'https://example.com',
  locale: 'en_GB',
  employer: 'MC Engineering',
  consultingAt: 'Reply Group',
  title: 'Alessandro — Frontend Developer',
  description:
    'Frontend Developer',
  /** TODO: replace with your real contact details. */
  contact: {
    email: 'alessandro.099@outlook.com',
    linkedin: 'https://www.linkedin.com/in/alessandro-ciccia',
    github: 'https://github.com/your-profile'
  }
} as const;

export const nav = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#technology', label: 'Technology' },
  { href: '#about', label: 'About' }
] as const;
