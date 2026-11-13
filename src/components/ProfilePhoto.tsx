import { useState } from 'react';
import { profile } from '../content';

export function ProfilePhoto() {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <figure className="profile-card">
      <div className="portrait">
        {unavailable ? <span aria-hidden="true">{profile.initials}</span> : (
          <img src={profile.photo} alt={`Sample profile portrait for ${profile.name}`} width="1024" height="1024" onError={() => setUnavailable(true)} />
        )}
      </div>
      <figcaption><strong>{profile.name}</strong><span>{profile.location}</span></figcaption>
    </figure>
  );
}
