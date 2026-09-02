import { site } from '@/lib/site';

export function Hero() {
  return (
    <section className="container hero" aria-labelledby="hero-title">
      <div className="hero__enter">
        <p className="hero__role glass">
          <span className="hero__rule" aria-hidden="true" />
          {site.role}
        </p>

        <h1 className="hero__title" id="hero-title">
          Frontend Developer
        </h1>

        <p className="hero__lead">
          I work on the frontend of large web platforms: component architecture,
          interface quality and the day-to-day evolution of codebases that stay
          in production for years.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#work">
            See selected work
          </a>
          <a className="button button--ghost" href="#experience">
            How I work with clients
          </a>
        </div>

        <dl className="hero__facts glass">
          <div className="hero__fact">
            <dt>Employer</dt>
            <dd>{site.employer}</dd>
          </div>
          <div className="hero__fact">
            <dt>Currently consulting at</dt>
            <dd>{site.consultingAt}</dd>
          </div>
          <div className="hero__fact">
            <dt>Focus</dt>
            <dd>Enterprise web platforms</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
