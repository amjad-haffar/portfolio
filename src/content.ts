
export const profile = {
  name: 'Amjad Alhaffar',
  initials: 'AA',
  role: 'Software Engineer',
  headline: 'Making Art, from Guitar Strings to Lines of Code.',
  intro:
    "MSc in Artificial Intelligence, Software Engineer with three years of experience. I use technology to build creative solutions and make a positive impact. When I'm not coding, you'll probably find me playing guitar.",
  photos: ['./myPhoto.jpg',
    './me4.jpeg',
    './me5.jpeg',
    './me3.jpeg',
    './me2.jpeg',
    './me.jpeg',
    
  ],
  location: 'Sheffield, UK',
  skills: [
    'Flutter',
    'React ',
    'React Native',
    'Android/IOS',
    'Node.js ',
    'Firebase',
    'Architectures',
    'SQL',
    'Machine Learning',
    'Python',
    'Explainable AI',    
    'LLM',
    'Figma',
    'Git',
    'Agile'
  ],
  links: [
    {      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/amjadalhaffarsyr/',},
    {
      label: 'GitHub',
      url: 'https://github.com/amjad-haffar',
    },
    {label: 'Instagram',
      url: 'https://www.instagram.com/amjad.haffar.mp3',
    }
    
  ],
};

export const experience = [
  {
    role: 'Flutter Developer',
    company: 'E-Solutions Group',
    dates: 'Oct 2023 — Aug 2025',
    description:
      'Developed and maintained five production mobile applications using Flutter and Dart. Took ownership of projects built from scratch and existing applications, integrated REST APIs, resolved bugs, and improved code maintainability. Also worked with native Android Java code.',
  },
  {
    role: 'Freelance Mobile App Developer & Designer',
    company: 'Freelance',
    dates: 'Jul 2022 — Oct 2023',
    description:
      'Developed two cross-platform mobile applications using Flutter and Firebase, integrating authentication, APIs, and cloud services.',
  },
  {
    role: 'Mobile App Developer',
    company: 'B-Wire',
    dates: 'Nov 2021 — May 2022',
    description:
      'Worked on mobile application development using Flutter and React Native with JavaScript.',
  },
  {
    role: 'Volunteer Software Developer',
    company: 'Syrian Astronomical Association',
    dates: 'Jan 2024 — Aug 2025',
    description:
      'Developed a Flutter desktop application for telescope automation and integrated a Python Flask API for astronomical data and calculations.',
  },
];

export const credentials = [
  {
    title: 'MSc Artificial Intelligence — Distinction',
    issuer: 'Sheffield Hallam University',
    date: '2026',
  },
  {
    title: 'BSc Software Engineering',
    issuer: 'Yarmouk Private University',
    date: '2022',
  },
];

type Project = {
  name: string;
  preview: 'planner' | 'library';
  description: string;
  stack: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    name: 'Explainable AI Platform for Medical Decision Support',
    preview: 'planner',
    description:
      'An end-to-end AI prototype combining machine learning, deep learning, SHAP, Grad-CAM, and LLM-generated explanations to make medical model predictions more understandable.',
    stack: ['Python', 'Streamlit', 'Machine Learning', 'SHAP', 'Grad-CAM', 'LLMs'],
  },
  {
    name: 'Tyria — Tourism Mobile Application',
    preview: 'library',
    description:
      'A mobile tourism application developed as my graduation project, featuring user authentication, destination discovery, interactive maps, and REST API integration.',
    stack: ['Flutter', 'Dart', 'Mapbox', 'GetX', 'REST APIs'],
    url: 'https://github.com/amjad-haffar/selfdrive/',
  },
];
let gifts=[
  'Technology has traditionally helped us overcome limitations. But what happens when those limitations are themselves part of what makes life enjoyable?'
]