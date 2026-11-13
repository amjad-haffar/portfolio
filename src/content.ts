export const profile = {
  name: 'Alex Morgan',
  initials: 'AM',
  role: 'Frontend developer',
  headline: 'I build thoughtful things for the web.',
  intro: 'I’m Alex Morgan, a frontend developer who cares about clear design, accessible interfaces, and code that’s easy to work with.',
  photo: './portrait.png',
  location: 'London, UK',
  about: [
    'I enjoy taking an idea from a rough sketch to a working interface. I focus on making the details feel right, from how a layout adapts on a small screen to how a form explains an error.',
    'I like working with designers and engineers early, when we can still make the simplest choice for the people who’ll use the product.',
  ],
  skills: ['React', 'TypeScript', 'CSS', 'Accessibility', 'Design systems'],
  email: 'alex@example.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],
};

export const experience = [
  { role: 'Frontend Developer', company: 'Northstar Studio', dates: '2023 — Present', description: 'Build reusable components and responsive product flows for a small design and engineering team.' },
  { role: 'Junior Web Developer', company: 'Studio Field', dates: '2021 — 2023', description: 'Built and maintained client websites with a focus on keyboard navigation and mobile layouts.' },
];

export const credentials = [
  { title: 'BSc Computer Science', issuer: 'Example University', date: '2021' },
  { title: 'Responsive Web Design', issuer: 'freeCodeCamp certification', date: '2022' },
];

type Project = {
  name: string;
  preview: 'planner' | 'library';
  description: string;
  stack: string[];
  url?: string;
};

export const projects: Project[] = [
  { name: 'Daymark', preview: 'planner', description: 'A weekly planner that puts tasks and calendar blocks side by side so you can see what fits.', stack: ['React', 'TypeScript'] },
  { name: 'Margin Notes', preview: 'library', description: 'A personal reading log for tracking books, saving quotes, and revisiting notes.', stack: ['React', 'CSS'] },
];
