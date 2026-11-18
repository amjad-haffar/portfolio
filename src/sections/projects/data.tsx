
export type Project = {
  name: string;
  tagline: string;
  screenshots: string[];
  stack: string[];
  category?:string,
  url?: string;
  sourceCode?: string;
  screenshotLayout?: 'mobile' | 'desktop';
  sections: {
    title: string;
    text: string;
  }[];
};

export const projects: Project[] = [
  {
    name: 'Future GYM - 2024',
    tagline:
      'A fitness app that improved my posture and my debugging skills.',
    
    url: 'https://play.google.com/store/apps/details?id=net.future_gym&hl=en',
    stack: ['Adaptability','Refactoring', 'Problem Solving','Flutter'],
    screenshots: [
      'images/FG1.jpeg',
      'images/FG2.jpeg',
      'images/FG3.jpeg',
      'images/FG4.jpeg',
      'images/FG7.jpeg',
      'images/FG6.jpeg',
      'images/FG5.jpeg',
    ],
    sections: [
      {
        title: 'The Story',
        text: `Future GYM is an existed large fitness app, that needed major fixes and upgrade 
        with an ambitious client who had another hundred features in mind.
        As the project evolved, the backend was rebuilt, and the 
        Flutter app needed significant updates to keep up.
        Somehow, this became both my favorite and most challenging
        project. `,
      },
      {
        title: 'The Meme',
        text: `The name "Future" eventually became a running joke
        within the company. Between the endless features and fixes,
        we started questioning our own future too 😂.`,
      },
      {
        title: 'What I Actually Did',
        text: `Modernized the app, adapted it to the new backend APIs,
        refactored existing components, and implemented
        new features while keeping the codebase maintainable.`,
      },
      {
        title: 'The Tricky Part',
        text: 'Improving existing code without introducing new problems elsewhere 😵‍💫.',
      },
      {
        title: 'The Unexpected Part',
        text: `The client kept correcting my posture on the meetings. Apparently, working on a fitness app comes with free posture coaching 🤣.
          "blame the backend" doesn't work for this project 💔😅
        `,
      },
    ],
  },
  {
  name: 'Blue BuySale - 2025',
  tagline:
    'A complex marketplace app, led by a harmonised development team',
  screenshots: [
    'images/bb1.png',
      'images/bb2.png',
      'images/bb3.png',
      'images/bb4.png',
      'images/bb5.png',
      'images/bb7.png',
      'images/bb6.png',],
  stack: ['Shared Ownership', 'Reusability', 'Make it our Way','Flutter'],
  url:'https://play.google.com/store/apps/details?id=com.bluebuysale.app&hl=en_GB',
  sections: [
    {
      title: 'The Story',
      text: `because we were building everything from scratch. it means we can build it our way 😎.
        With mistakes learned from previous projects, we had a much better
        idea of how we wanted to structure the app and work together.
        Despite being a fairly large application, it ended up being
        one of our fastest-developed projects`,
    },
    {
      title: 'What I Actually Did',
      text: `Designed the application architecture and developed
      features including dynamic forms, advanced filtering, subscription packages, and many charts.`,
    },
    {
      title: 'The Tricky Part',
      text: `Imagine a marketplace, a social media platform,
        and a business management app all living in the same
        codebase. Now imagine how many features they share 😅.`,
    },
    {
      title: 'The Unexpected Part',
      text: `felt like everyone was a team leader. Everyone took ownership, contributed ideas, and
      helped shape the project. Somehow, we were all on the same wavelength.
      For once, the size of the project wasn't reflected in the amount of chaos`,
    },
  ],
},
];
export const otherProjects: Project[] = [
{
  name: 'TriMind - 2026',
  category: 'academic',
  screenshotLayout:'desktop',
  tagline: 'knowing what AI predicts is not enough. We need to know why AND in a personalised way.',
  screenshots: [
    'images/XAI1.png',
    'images/XAI2.png',
    'images/XAI3.png',
    'images/XAI4.png',
    'images/XAI5.png',
  ],
  stack: [
    'Explainable AI',
    'LLM Integration',
    'Team Collaboration',
    'Trello',
    'Streamlit',
    'Python',
  ],
  sourceCode: 'https://github.com/TriMind-XAI/TriMindApp',
  sections: [
    {
      title: 'The Problem',
      text: 'An AI model can predict whether a patient has a particular disease, but how can we understand what influenced that prediction? And how do we explain it to someone with no technical background? TriMind was developed as part of my MSc in AI to explore these questions.',
    },
    {
      title: 'What I Built',
      text: 'An interactive platform that brings together machine learning, explainable AI (XAI) and LLMs. Users can train models on medical images or tabular data, explore their predictions using different explanation techniques, and generate natural language explanations tailored to clinicians, researchers or patients.',
    },
    {
      title: 'What I learned',
      text: 'This project taught me how to approach development through research and experimentation. Rather than starting with a fixed solution, we explored different approaches, compared their results and built upon what we discovered.',
    },
    {
      title: 'One thing Led to Another',
      text: 'This project was how it kept evolving. Every time we implemented something, we became curious about what else we could do with it. From comparing different explanation methods to exploring counterfactuals and 3D medical images, there was always another idea worth experimenting with. The project became as much about exploration as building the application itself.',    },
  ],
},
{
  name: 'Tyria - 2022',
  category: 'academic',
  tagline: 'Exploring destinations, one optimised route at a time.',
  screenshots: [
    'images/TY1.png',
    'images/TY2.png',
    'images/TY3.png',
    'images/TY4.png',
    'images/TY5.png',
    'images/TY6.png',
  ],
  stack: [
    'Flutter',
    'UI/UX Design',
    'GetX',
    'Mapbox',
    'Genetic Algorithm (Python)',
    'Graphic Design',
    'Backend (Flask)',
  ],
  sourceCode: 'https://github.com/amjad-haffar/selfdrive/',
  sections: [
    {
      title: 'The Idea',
      text: 'Tyria was developed as my graduation project during my Bachelor’s degree in Software Engineering. The idea was to build a mobile application that helps tourists discover destinations, explore attractions and plan their trips.',
    },
    {
      title: 'Not Just Another App',
      text: 'I used a genetic algorithm to optimise routes between tourist destinations, alongside Mapbox for maps and navigation.',
    },
    {
    title: 'What I learned',
    text: 'This project gave me the opportunity to apply theoretical concepts to a practical application, particularly optimisation algorithms. It also helped me develop my skills in mobile development, map integration and connecting application design with technical implementation.',
    },
    {
      title: 'From Design to Development',
      text: 'With my background in graphic design, I wanted to give the application its own visual identity. I designed the entire user interface and logo, combining my interests in design and software development.',
    },
  ],
},
]