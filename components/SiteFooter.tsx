import { site } from '@/lib/site';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer__panel glass">
          <div>
            <h2 className="footer__heading">
              Open to conversations about frontend work.
            </h2>
          </div>

          <div className="footer__links">
            {site.contact.email ? (
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            ) : null}
            {site.contact.linkedin ? (
              <a
                href={site.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
            {site.contact.github ? (
              <a
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__disclaimer">
            Client names, trademarks and links are referenced for identification
            purposes only and do not imply endorsement or a commercial
            relationship. All projects were carried out as part of my consulting
            activity.
          </p>
          <p>
            &copy; {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
