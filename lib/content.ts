export type MetaRow = { label: string; value: string };

export type WebsiteLink = {
  href: string;
  label: string;
};

export type Logo = {
  src: string;
  alt: string;
};

export type CaseStudy = {
  id: string;
  client: string;
  tagline: string;
  meta: MetaRow[];
  contribution: string;
  highlights: string[];
  website?: WebsiteLink;
  logo?: Logo;
};

export type EcosystemBrand = {
  name: string;
  description: string;
  href: string;
  hrefLabel: string;
  logo?: Logo;
};

export const stellantis: CaseStudy = {
  id: 'stellantisandyou',
  client: 'Stellantis &You',
  tagline: 'Enterprise frontend development for an automotive group project.',
  website: {
    href: 'https://www.stellantisandyou.com',
    label: 'stellantisandyou.com'
  },
  logo: {
    src: '/logos/stellantis.jpeg',
    alt: 'Stellantis &You logo'
  },
  meta: [
    { label: 'Client', value: 'Stellantis &You' },
    { label: 'Role', value: 'Frontend Developer' },
    { label: 'Context', value: 'Enterprise, automotive' },
    { label: 'Engagement', value: 'Consulting project' },
    { label: 'Stack', value: 'Svelte, TypeScript, Tailwind CSS' }
  ],
  contribution:
    'Project developed as part of my consulting activity. I worked as a Frontend Developer inside an enterprise development team, on a structured and long-lived codebase built with Svelte, TypeScript and Tailwind CSS.',
  highlights: [
    'Development and maintenance of UI components',
    'Implementation of responsive interfaces',
    'Work within an established frontend architecture and codebase conventions',
    'Continuous evolution and maintenance of existing features',
    'Day-to-day collaboration inside an enterprise development team'
  ]
};

export const ecosystem = {
  id: 'alpitour-digital-ecosystem',
  title: 'Alpitour Digital Ecosystem',
  tagline:
    'Frontend development and continuous evolution of the web platforms of three travel brands, on a shared architecture.',
  website: {
    href: 'https://www.alpitourworld.com',
    label: 'alpitourworld.com'
  },
  logo: {
    src: '/logos/alpiworld.jpg',
    alt: 'Alpitour World logo'
  },
  meta: [
    { label: 'Clients', value: 'Alpitour, Eden Viaggi, Turisanda' },
    { label: 'Role', value: 'Frontend Developer' },
    { label: 'Context', value: 'Enterprise, travel' },
    { label: 'Engagement', value: 'Consulting project' },
    {
      label: 'Stack',
      value: 'React, Next.js, TypeScript, CSS Modules, GraphQL, Magnolia CMS'
    }
  ],
  contribution:
    'Project developed as part of my consulting activity. The three brands share one digital ecosystem: a React and Next.js frontend, content modelled in Magnolia CMS and data served over GraphQL. My work covered feature development, reusable components and the continuous evolution of the platforms.',
  highlights: [
    'Development of reusable components integrated with Magnolia CMS',
    'Consumption and integration of GraphQL data sources',
    'Responsive, cross-brand interfaces on a shared codebase',
    'Continuous evolution of existing platform features'
  ],
  brands: [
    {
      name: 'Alpitour',
      description:
        'I contributed to the development and continuous evolution of the Alpitour digital platform, the largest product of the group ecosystem.',
      href: 'https://www.alpitour.it',
      hrefLabel: 'alpitour.it',
      logo: {
        src: '/logos/alpitour.png',
        alt: 'Alpitour logo'
      }
    },
    {
      name: 'Eden Viaggi',
      description:
        'Frontend development and continuous evolution of the Eden Viaggi web platform, sharing the ecosystem architecture.',
      href: 'https://www.edenviaggi.it',
      hrefLabel: 'edenviaggi.it',
      logo: {
        src: '/logos/edenviaggi.png',
        alt: 'Eden Viaggi logo'
      }
    },
    {
      name: 'Turisanda',
      description:
        'Frontend development and continuous evolution of the Turisanda web platform, within the same digital ecosystem.',
      href: 'https://www.turisanda.it',
      hrefLabel: 'turisanda.it',
      logo: {
        src: '/logos/turisanda.png',
        alt: 'Turisanda logo'
      }
    }
  ] satisfies EcosystemBrand[]
};

export type ExperienceRow = {
  label: string;
  title: string;
  detail: string;
  period: string;
  tags?: string[];
};

export const experience: ExperienceRow[] = [
  {
    label: 'Employer',
    title: 'MC Engineering',
    detail: 'Frontend Developer',
    period: 'Current'
  },
  {
    label: 'Consulting environment',
    title: 'Reply',
    detail: 'Working on client projects as a consultant Frontend Developer',
    period: 'Current'
  },
  {
    label: 'Client projects',
    title: 'Enterprise projects I have worked on',
    detail:
      'Projects delivered as part of my consulting activity, not employment relationships.',
    period: '',
    tags: ['Stellantis &You', 'Alpitour', 'Eden Viaggi', 'Turisanda']
  }
];

export const technology: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'Next.js', 'Svelte', 'TypeScript'] },
  {
    group: 'Styling',
    items: ['Tailwind CSS', 'CSS Modules', 'Sass', 'SCSS', 'Styled Components']
  },
  { group: 'Data', items: ['GraphQL', 'REST APIs'] },
  { group: 'Backend', items: ['Java'] },
  { group: 'CMS', items: ['Magnolia CMS', 'Adobe Experience Manager (AEM)'] }
];
