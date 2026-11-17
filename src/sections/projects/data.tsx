
export type Project = {
  name: string;
  tagline: string;
  screenshots: string[];
  stack: string[];
  url?: string;
  sections: {
    title: string;
    text: string;
  }[];
};

export const projects: Project[] = [
  {
    name: 'Future GYM',
    tagline:
      'A fitness app that improved my posture and my debugging skills.',
    
    url: 'https://play.google.com/store/apps/details?id=net.future_gym&hl=en',
    stack: ['Adaptability','Refactoring', 'Problem Solving'],
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
  name: 'Blue BuySale',
  tagline:
    'A complex project led by a harmonised development team',
  screenshots: [
    'images/bb1.png',
      'images/bb2.png',
      'images/bb3.png',
      'images/bb4.png',
      'images/bb5.png',
      'images/bb7.png',
      'images/bb6.png',],
  stack: ['Shared Ownership', 'Reusability', 'Make it our Way'],
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
