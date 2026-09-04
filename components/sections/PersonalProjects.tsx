import { Reveal } from '@/components/Reveal';
import { getAllPersonalProjects } from '@/lib/personal-projects';

export function PersonalProjects() {
  const projects = getAllPersonalProjects();
  const featuredProjects = projects.slice(0, 3);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section
      className="container section"
      id="personal-projects"
      aria-labelledby="personal-projects-title"
    >
      <div className="section__head">
        <h2 className="section__title" id="personal-projects-title">
          Personal projects
        </h2>
        <p className="section__note">
          Independent products and experiments where I document decisions,
          interface work and implementation details.
        </p>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <Reveal className="project-card glass" key={project.slug}>
            <a className="project-card__link" href={`/projects/${project.slug}`}>
              <img
                className="project-card__cover"
                src={project.cover}
                alt=""
                loading="lazy"
              />
              <div className="project-card__body">
                <p className="project-card__eyebrow">
                  {project.year ? `${project.year} · ` : ''}Personal project
                </p>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__summary">{project.summary}</p>
                <ul className="project-card__tags" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {projects.length > featuredProjects.length ? (
        <div className="section__cta">
          <a className="button button--ghost" href="/projects">
            View all personal projects
          </a>
        </div>
      ) : null}
    </section>
  );
}
