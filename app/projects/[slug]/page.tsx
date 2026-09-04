import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ExternalLink } from '@/components/ExternalLink';
import { Markdown } from '@/components/Markdown';
import { ProjectGallery } from '@/components/ProjectGallery';
import {
  getAllPersonalProjects,
  getPersonalProject
} from '@/lib/personal-projects';
import { site } from '@/lib/site';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPersonalProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPersonalProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [{ url: project.cover }]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPersonalProject(slug);

  if (!project) notFound();

  const [contentBeforeGallery, contentAfterGallery] = project.markdown.split('{{gallery}}');

  return (
    <article className="container project-page">
      <a className="back-link" href="/#personal-projects">
        ← Back to personal projects
      </a>

      <header className="project-hero glass">
        <div className="project-hero__copy">
          <p className="project-card__eyebrow">
            {project.year ? `${project.year} · ` : ''}Personal project
          </p>
          <h1 className="project-hero__title">{project.title}</h1>
          <p className="project-hero__summary">{project.summary}</p>
          <ul className="project-card__tags" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <div className="project-hero__actions">
            {project.website ? (
              <ExternalLink href={project.website}>Visit project</ExternalLink>
            ) : null}
            {project.repository ? (
              <ExternalLink href={project.repository}>View repository</ExternalLink>
            ) : null}
          </div>
        </div>
        <img
          className="project-hero__cover"
          data-border={project.coverHasBorder}
          src={project.cover}
          alt=""
        />
      </header>

      <Markdown content={contentBeforeGallery ?? ''} />
      <ProjectGallery images={project.screenshots} />
      {contentAfterGallery ? <Markdown content={contentAfterGallery} /> : null}
    </article>
  );
}
