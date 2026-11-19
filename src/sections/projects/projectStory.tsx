
import { ProjectGallery } from './ProjectGallery';
import type { Project } from './data';
import { Tags } from '../../components/Tags'

// type ProjectStoryProps = {
//   project: Project;
// };

export function ProjectStory({ project }: { project: Project }) {
  return (
    <article id={project.id} tabIndex={-1} className={`project-story ${project.screenshotLayout ?? 'mobile'}`}>
      <header className="project-story-header">
        <h3>{project.name}</h3>
        <p className="project-story-tagline">
          {project.tagline}
        </p>
      </header>

      <div className="project-story-content">
        <ProjectGallery name={project.name} screenshots={project.screenshots} />

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
