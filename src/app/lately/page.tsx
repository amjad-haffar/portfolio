import type { Metadata } from 'next';
import LifeLately from '../../views/LifeLately';

export const metadata: Metadata = {
  title: 'Life Lately',
  description: 'What Amjad Alhaffar is building, wondering about, listening to and figuring out lately.',
  alternates: { canonical: '/lately' },
};

export default function Page() {
  return <LifeLately />;
}

