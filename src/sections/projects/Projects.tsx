
import './ProjectStory.css';

import { projects } from './data';
import { ProjectStory } from './projectStory';


export function Projects() {
  return (
    <section
      className="section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title">
        Stories Behind the Projects : 
      </h2>

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectStory
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}


