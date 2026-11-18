import { MusicPlayer } from '../components/MusicPlayer';
import type { Gift } from './data';

export function GiftContent({ gift }: { gift: Gift }) {
  return (
    <div className="gift-content">
      <p>{gift.text}</p>
      {gift.image && <img src={gift.image.src} alt={gift.image.alt} loading="lazy" />}
      {gift.link && <a href={gift.link.url} target="_blank" rel="noopener noreferrer">{gift.link.label}</a>}
      {gift.music && <MusicPlayer key={gift.id} music={gift.music} title={gift.title} />}
    </div>
  );
}

