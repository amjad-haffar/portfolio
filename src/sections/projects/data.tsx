
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
    screenshots: [
      'images/FG1.jpeg',
      'images/FG2.jpeg',
      'images/FG3.jpeg',
      'images/FG4.jpeg',
      'images/FG5.jpeg',
      'images/FG7.jpeg',
      'images/FG6.jpeg',
    ],
    url: 'https://play.google.com/store/apps/details?id=net.future_gym&hl=en',
    stack: ['Flutter', 'Dart', 'Firebase'],
    sections: [
      {
        title: 'The Story',
        text: `Future GYM is a large fitness app serving 4 different user roles,
         with an ambitious client constantly pushing for fixes and new features. 
         As the project evolved, the backend was rebuilt, while the Flutter App also needed significant updates.
         My work focused on modernizing the app, adapting it to the new backend APIs, fixing bugs, and implementing features
         while keeping the codebase maintainable.`,
      },
      {
        title: 'What I Actually Did',
        text: 'Investigated bugs, implemented features, and refactored existing components.',
      },
      {
        title: 'The Tricky Part',
        text: 'Improving existing code without introducing new problems elsewhere 😵‍💫.',
      },
      {
        title: 'The Unexpected Part',
        text: 'The client kept correcting my posture on the meetings. Apparently, working on a fitness app comes with free posture coaching 🤣.',
      },
    ],
  },
];
