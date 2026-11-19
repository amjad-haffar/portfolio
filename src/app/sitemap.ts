import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://amjad-alhaffar.vercel.app/' },
    { url: 'https://amjad-alhaffar.vercel.app/lately' },
  ];
}

