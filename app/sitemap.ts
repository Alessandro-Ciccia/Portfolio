import type { MetadataRoute } from 'next';
import { getAllPersonalProjects } from '@/lib/personal-projects';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const projectRoutes = getAllPersonalProjects().map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${site.url}/projects`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    ...projectRoutes
  ];
}
