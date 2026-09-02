import { experience } from '@/lib/content';

export function Experience() {
  return (
    <section
      className="container section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section__head">
        <h2 className="section__title" id="experience-title">
          Experience
        </h2>
        <p className="section__note">
          Three distinct relationships, often confused on developer portfolios:
          who employs me, where I work as a consultant, and whose products I have
          contributed to.
        </p>
      </div>

      <div className="timeline">
        {experience.map((row) => (
          <div className="timeline__row glass" key={row.label}>
            <p className="label">{row.label}</p>
            <div>
              <h3 className="timeline__title">{row.title}</h3>
              <p className="timeline__detail">{row.detail}</p>
              {row.tags ? (
                <ul className="tags">
                  {row.tags.map((tag) => (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {row.period ? <p className="timeline__period">{row.period}</p> : <span />}
          </div>
        ))}
      </div>
    </section>
  );
}
