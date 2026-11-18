
import { useState } from 'react';
import type { Project } from './data';
import { Tags } from '../../components/Tags'

// type ProjectStoryProps = {
//   project: Project;
// };

export function ProjectStory({ project }: { project: Project }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const screenshots = project.screenshots;
  const hasScreenshots = screenshots.length > 0;

  function previousSlide() {
    setActiveSlide((current) =>
      (current - 1 + screenshots.length) % screenshots.length
    );
  }

  function nextSlide() {
    setActiveSlide((current) =>
      (current + 1) % screenshots.length
    );
  }

  return (
    <article className={`project-story ${project.screenshotLayout ?? 'mobile'}`}>
      <header className="project-story-header">
        <h3>{project.name}</h3>
        <p className="project-story-tagline">
          {project.tagline}
        </p>
      </header>

      <div className="project-story-content">
        {hasScreenshots && (
          <div className="project-story-gallery">
            <img
              src={screenshots[activeSlide]}
              alt={`${project.name} screenshot ${activeSlide + 1}`}
            />

            {screenshots.length > 1 && (
              <div className="project-story-controls">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous screenshot"
                >
                  ←
                </button>

                <span aria-live="polite">
                  {activeSlide + 1} / {screenshots.length}
                </span>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next screenshot"
                >
                  →
                </button>
              </div>
            )}
          </div>
        )}

        <div className="project-story-details">
          {project.sections.map((section) => (
            <section
              className="project-story-section"
              key={section.title}
            >
              <h4>{section.title}</h4>
              <p>{section.text}</p>
            </section>
          ))}
          {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View project ↗
          </a>
          
        )}
        {project.sourceCode && (
          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
            Source Code ↗
          </a>
          
        )}
        </div>
      </div>

      <div className="project-story-stack">
        <Tags items={project.stack} />
      </div>
    </article>
  );
}
