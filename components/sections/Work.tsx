import { ExternalLink } from '@/components/ExternalLink';
import { Reveal } from '@/components/Reveal';
import {
  ecosystem,
  stellantis,
  unicredit,
  type Logo,
  type MetaRow
} from '@/lib/content';

function Meta({ rows }: { rows: MetaRow[] }) {
  return (
    <dl className="meta">
      {rows.map((row) => (
        <div className="meta__row" key={row.label}>
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function LogoMark({ logo, className }: { logo?: Logo; className: string }) {
  if (!logo) {
    return null;
  }

  return <img className={className} src={logo.src} alt={logo.alt} loading="lazy" />;
}

export function Work() {
  return (
    <section className="container section" id="work" aria-labelledby="work-title">
      <div className="section__head">
        <h2 className="section__title" id="work-title">
          Selected work
        </h2>
        <p className="section__note">
          Enterprise projects I have worked on as a Frontend Developer, delivered
          as part of my consulting activity. Client names and links are shown for
          identification purposes only.
        </p>
      </div>

      <Reveal
        as="article"
        className="case"
        accent="aqua"
        aria-labelledby="case-ecosystem"
      >
        <div className="case__body">
          <header className="case__rail glass">
            <LogoMark logo={ecosystem.logo} className="case__logo" />
            <p className="case__kicker">Travel</p>
            <h3 className="case__client" id="case-ecosystem">
              {ecosystem.title}
            </h3>
            <p className="case__tagline">{ecosystem.tagline}</p>
            {ecosystem.website ? (
              <ExternalLink href={ecosystem.website.href}>
                Visit {ecosystem.website.label}
              </ExternalLink>
            ) : null}
            <Meta rows={ecosystem.meta} />
          </header>

          <div className="case__main">
            <p className="contribution">{ecosystem.contribution}</p>
            <ul className="contribution__list">
              {ecosystem.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="brands">
              {ecosystem.brands.map((brand) => (
                <div className="brand-row glass" key={brand.name}>
                  <div className="brand-row__identity">
                    <LogoMark logo={brand.logo} className="brand-row__logo" />
                    <h4 className="brand-row__name">{brand.name}</h4>
                  </div>
                  <div>
                    <p className="brand-row__description">{brand.description}</p>
                    <ExternalLink href={brand.href}>
                      Visit {brand.hrefLabel}
                    </ExternalLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal
        as="article"
        className="case"
        accent="iris"
        aria-labelledby="case-stellantis"
      >
        <div className="case__body">
          <header className="case__rail glass">
            <LogoMark logo={stellantis.logo} className="case__logo" />
            <p className="case__kicker">Automotive</p>
            <h3 className="case__client" id="case-stellantis">
              {stellantis.client}
            </h3>
            <p className="case__tagline">{stellantis.tagline}</p>
            {stellantis.website ? (
              <ExternalLink href={stellantis.website.href}>
                Visit {stellantis.website.label}
              </ExternalLink>
            ) : null}
            <Meta rows={stellantis.meta} />
          </header>

          <div className="case__main">
            <p className="contribution">{stellantis.contribution}</p>
            <ul className="contribution__list">
              {stellantis.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal
        as="article"
        className="case"
        accent="aqua"
        aria-labelledby="case-unicredit"
      >
        <div className="case__body">
          <header className="case__rail glass">
            <LogoMark logo={unicredit.logo} className="case__logo" />
            <p className="case__kicker">Banking</p>
            <h3 className="case__client" id="case-unicredit">
              {unicredit.client}
            </h3>
            <p className="case__tagline">{unicredit.tagline}</p>
            {unicredit.website ? (
              <ExternalLink href={unicredit.website.href}>
                Visit {unicredit.website.label}
              </ExternalLink>
            ) : null}
            <Meta rows={unicredit.meta} />
          </header>

          <div className="case__main">
            <p className="contribution">{unicredit.contribution}</p>
            <ul className="contribution__list">
              {unicredit.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
