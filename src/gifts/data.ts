import type { MusicRecommendation } from '../components/MusicPlayer';

export type Gift = {
  id: string;
  title: string;
  text: string;
  image?: { src: string; alt: string };
  link?: { url: string; label: string };
  music?: MusicRecommendation;
};

// Keep IDs stable once published so saved collections survive content edits.
export const gifts: Gift[] = [
  {
    id: 'get-lucky',
    title: 'You got lucky',
    text: 'Literally. Here is some Daft Punk for you.',
    music: { provider: 'youtube', id: '5NV6Rdv1a3I' },
  },
  {
    id: 'overthinking',
    title: 'A little advice',
    text: 'Try not to overthink everything. This advice comes from someone who overthought the wording of this gift.',
  },
  {
    id: 'creating-for-yourself',
    title: 'Something to ask yourself',
    text: 'What would you create if nobody was ever going to see it? like this website',
  },
  {
    id: 'daily-universe',
    title: 'Look beyond your screen',
    text: 'NASA shares a different picture of the universe every day. The internet can still be a beautiful place if you know where to look.',
    link: {
      url: 'https://apod.nasa.gov/',
      label: 'A little piece of the universe',
    },
  },
  {
    id: 'another-victim',
    title: 'Another One Bites the Dust',
    text: 'Another victim of my gift collection.',
    music: { provider: 'youtube', id: 'rY0WxgSXdEE' },
  },
  
  {
    id: 'the-ultimate-gift',
    title: 'Congratulations!',
    text: 'I ran out of ideas, so here\'s my face. btw there is no refund policy.',
    image: { src: '/myPhoto.jpg', alt: 'Your questionable gift' },
  },
  
];

