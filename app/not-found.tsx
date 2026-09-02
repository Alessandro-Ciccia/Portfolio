import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <section className="container hero" aria-labelledby="notfound-title">
      <h1 className="hero__title" id="notfound-title">
        This page does not exist.
      </h1>
      <p className="hero__lead">The link may be outdated or mistyped.</p>
      <div className="hero__actions">
        <a className="button button--primary" href="/">
          Back to the homepage
        </a>
      </div>
    </section>
  );
}
