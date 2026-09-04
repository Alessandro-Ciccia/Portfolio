import fs from 'node:fs';
import path from 'node:path';

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  coverHasBorder: boolean;
  technologies: string[];
  year?: string;
  website?: string;
  repository?: string;
  order: number;
};

export type PersonalProject = ProjectMeta & {
  markdown: string;
};

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'personal-projects');

type Frontmatter = Record<string, string>;

function parseArray(value: string | undefined): string[] {
  if (!value) return [];

  return value
    .replace(/^\[/, '')
    .replace(/\]$/, '')
    .split(',')
    .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
}

function parseFrontmatter(file: string): { data: Frontmatter; markdown: string } {
  const match = file.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return { data: {}, markdown: file };
  }

  const [, frontmatter = '', markdown = ''] = match;
  const data = frontmatter.split('\n').reduce<Frontmatter>((result, line) => {
    const separator = line.indexOf(':');
    if (separator === -1) return result;

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
    if (key) result[key] = value;

    return result;
  }, {});

  return { data, markdown: markdown.trim() };
}

function readProjectFile(fileName: string): PersonalProject {
  const slug = fileName.replace(/\.md$/, '');
  const file = fs.readFileSync(path.join(PROJECTS_DIR, fileName), 'utf8');
  const { data, markdown } = parseFrontmatter(file);

  return {
    slug,
    title: data.title ?? slug,
    summary: data.summary ?? '',
    cover: data.cover ?? '/projects/placeholder.svg',
    coverHasBorder: data.coverHasBorder !== 'false',
    technologies: parseArray(data.technologies),
    year: data.year,
    website: data.website,
    repository: data.repository,
    order: Number(data.order ?? 0),
    markdown
  };
}

export function getAllPersonalProjects(): PersonalProject[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((fileName) => fileName.endsWith('.md'))
    .map(readProjectFile)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getPersonalProject(slug: string): PersonalProject | undefined {
  const fileName = `${slug}.md`;
  const filePath = path.join(PROJECTS_DIR, fileName);

  if (!fs.existsSync(filePath)) return undefined;

  return readProjectFile(fileName);
}
