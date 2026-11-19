'use client';

import { useState, useEffect } from 'react';
import { profile } from '../content';

export function ProfilePhoto() {
  const [unavailable, setUnavailable] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setUnavailable(false);
      setIndex(prev => (prev + 1) % profile.photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <figure className="profile-card">
      <div className="portrait">
        {unavailable ? (
          <span aria-hidden="true">{profile.initials}</span>
        ) : (
          profile.photos.map((photo, i) => (
            <img
              key={photo}
              src={photo}
              alt={`Portrait of ${profile.name}`}
              width="1024"
              height="1024"
              className={i === index ? 'active' : ''}
              aria-hidden={i !== index}
              onError={() => {
                if (i === index) setUnavailable(true);
              }}
            />
          ))
        )}
      </div>

      <figcaption>
        <strong>{profile.name}</strong>
        <span>{profile.location}</span>
      </figcaption>
    </figure>
  );
}