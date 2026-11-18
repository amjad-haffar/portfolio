export type MusicRecommendation = {
  provider: 'spotify' | 'youtube';
  id: string;
};

export function MusicPlayer({ music, title = 'On repeat music player' }: {
  music: MusicRecommendation;
  title?: string;
}) {
  return (
    <iframe
      className={`music-player ${music.provider}`}
      src={music.provider === 'spotify'
        ? `https://open.spotify.com/embed/track/${music.id}`
        : `https://www.youtube-nocookie.com/embed/${music.id}`}
      title={title}
      loading="lazy"
      allow="encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen
    />
  );
}

