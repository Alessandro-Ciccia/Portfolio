export const site = {
  name: 'Alessandro Ciccia',
  role: 'Frontend Developer',
  url: 'https://alessandrociccia.com',
  locale: 'it_IT',
  employer: 'MC Engineering',
  consultingAt: 'Reply Group',
  title: 'Alessandro Ciccia — Frontend Developer',
  description:
    'Frontend Developer',
  contact: {
    email: 'contact@alessandrociccia.com',
    linkedin: 'https://www.linkedin.com/in/alessandro-ciccia',
    github: 'https://github.com/Alessandro-Ciccia'
  }
} as const;

export const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/#personal-projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#technology', label: 'Technology' },
  { href: '/#about', label: 'About' }
] as const;
