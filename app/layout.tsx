import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { site } from '@/lib/site';
import './globals.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-bricolage'
});

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-plex'
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`
  },
  description: site.description,
  applicationName: site.title,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'Svelte',
    'TypeScript',
    'GraphQL',
    'Magnolia CMS',
    'enterprise frontend'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    siteName: site.title,
    title: site.title,
    description: site.description
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' }
  },
  formatDetection: { telephone: false, email: false, address: false }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0eafc' },
    { media: '(prefers-color-scheme: dark)', color: '#170a2b' }
  ]
};

/**
 * Applies the stored theme before first paint. The site is designed
 * dark-first, so dark is the default until the visitor chooses otherwise.
 */
const themeScript = `(function(){try{var s=localStorage.getItem('theme');document.documentElement.dataset.theme=(s==='light'||s==='dark')?s:'dark';}catch(e){document.documentElement.dataset.theme='dark';}})();`;

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  description: site.description,
  worksFor: { '@type': 'Organization', name: site.employer },
  knowsAbout: [
    'React',
    'Next.js',
    'Svelte',
    'TypeScript',
    'Tailwind CSS',
    'CSS Modules',
    'GraphQL',
    'Magnolia CMS'
  ]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          {/* Content must stay visible if JavaScript never runs. */}
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="field" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <div className="page">
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
