import { projects } from '../content';
import { ProjectPreview } from '../components/ProjectPreview';
import { Tags } from '../components/Tags';

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Featured projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project" key={project.name}>
            <ProjectPreview variant={project.preview} />
            <div className="project-info">
              <h3>{project.url ? <a href={project.url}>{project.name} ↗</a> : project.name}</h3>
              <p>{project.description}</p>
              <Tags items={project.stack} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
