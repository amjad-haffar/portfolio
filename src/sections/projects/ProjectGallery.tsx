'use client';

import { useState } from 'react';

export function ProjectGallery({ name, screenshots }: { name: string; screenshots: string[] }) {
  const [activeSlide, setActiveSlide] = useState(0);

  function previousSlide() {
    setActiveSlide((current) => (current - 1 + screenshots.length) % screenshots.length);
  }

  function nextSlide() {
    setActiveSlide((current) => (current + 1) % screenshots.length);
  }

  if (screenshots.length === 0) return null;

  return (
    <div className="project-story-gallery">
      <img src={screenshots[activeSlide]} alt={`${name} screenshot ${activeSlide + 1}`} />
      {screenshots.length > 1 && (
        <div className="project-story-controls">
          <button type="button" onClick={previousSlide} aria-label="Previous screenshot">←</button>
          <span aria-live="polite">{activeSlide + 1} / {screenshots.length}</span>
          <button type="button" onClick={nextSlide} aria-label="Next screenshot">→</button>
        </div>
      )}
    </div>
  );
}

