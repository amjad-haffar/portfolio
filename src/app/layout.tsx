import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SiteLayout } from '../components/SiteLayout';
import '../styles.css';
import '../sections/projects/ProjectStory.css';
import '../gifts/gifts.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://amjad-alhaffar.vercel.app'),
  title: {
    default: 'Amjad Alhaffar | Software Engineer',
    template: '%s | Amjad Alhaffar',
  },
  verification: {
    google: 'gOuymbFLyGqQ34zKxbPcvRtatDGgBvDi4Cc3oe0ZagI',
  },
  description: 'Amjad Alhaffar, Software Engineer with an MSc in Artificial Intelligence and a background in mobile development, software engineering and design.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root"><SiteLayout>{children}</SiteLayout></div>
      </body>
    </html>
  );
}

