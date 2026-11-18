import type { MusicRecommendation } from './components/MusicPlayer';
type LatelySection = {
  id: string;
  title: string;
  text: string;
  image?: { src: string; alt: string; caption?: string };
  links?: { label: string; url: string }[];
  music?: MusicRecommendation;
};

export const lately = {
  updated: '2026-11-18',
  introduction: 'A little space for what I’m making, listening to and wondering about.',
  sections: [
    { id: 'building', title: 'Currently building', text: `
      This website, actually. It started as a portfolio, 
      but somewhere along the way I decided to turn it into something a little more personal. 
      At this point, I'm not entirely sure where it's going, and that's probably what makes it fun.
      ` },
    { id: 'curious', title: 'Currently curious about', text: `
      Lately, I've been curious about the future of AI and what life might look like 
      when technology reaches a point where almost everything becomes effortless. 
      As much as I love technology, I wonder if life would still be as enjoyable?
      `},
      {
  id: 'repeat',
  title: 'Cant stop listenting to',
  text: 'convincing my self if i listen to this song everyday, I might get lucky? 😎',
  music: {
    provider: 'youtube',
    id: '5NV6Rdv1a3I',
    // id: '69kOkLUCkxIZYexIgSG8rq',
  },
},
    { id: 'figuring-out', title: 'Figuring out', text: `
      What comes after university. Having finished my master's, I'm currently exploring different directions,
       both professionally and personally. There are quite a few things I'd like to do, which makes choosing one particularly difficult.
      ` },
  ] satisfies LatelySection[],
};

export type { LatelySection };

