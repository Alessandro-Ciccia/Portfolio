import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { getAllPersonalProjects } from '@/lib/personal-projects';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Personal projects',
  description: 'A collection of personal projects by Alessandro Ciccia.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: `Personal projects — ${site.name}`,
    description: 'A collection of personal projects by Alessandro Ciccia.',
    url: '/projects'
  }
};

export default function ProjectsPage() {
  const projects = getAllPersonalProjects();

  return (
    <div className="container projects-page">
      <a className="back-link" href="/#personal-projects">
        ← Back home
      </a>

      <header className="section__head projects-page__head">
        <h1 className="section__title">Personal projects</h1>
        <p className="section__note">
          A complete archive of independent products and experiments, with notes,
          screenshots and implementation details for each project.
        </p>
      </header>

      <div className="project-grid">
        {projects.map((project) => (
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
                <h2 className="project-card__title">{project.title}</h2>
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
    </div>
  );
}
