import { technology } from '@/lib/content';

export function Technology() {
  return (
    <section
      className="container section"
      id="technology"
      aria-labelledby="technology-title"
    >
      <div className="section__head">
        <h2 className="section__title" id="technology-title">
          Technology
        </h2>
        <p className="section__note">
          The tools I use in production, grouped by the job they do.
        </p>
      </div>

      <div className="tech">
        {technology.map((group) => (
          <div className="tech__group glass" key={group.group}>
            <h3 className="tech__title">{group.group}</h3>
            <ul className="tech__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
