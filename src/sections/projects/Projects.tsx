import { Link } from 'react-router-dom';
import './ProjectStory.css';
import { otherProjects, projects } from './data';
import { ProjectStory } from './projectStory';

export function Projects() {
  return (
    <section className="section projects-section" id="projects" tabIndex={-1} aria-labelledby="projects-title">
      <div className="wrap">
        <h2 id="projects-title">Stories Behind the Projects :</h2>
        <nav className="project-index" aria-label="Project stories">
          {[...projects, ...otherProjects].map((project) => (
            <Link key={project.id} to={`/#${project.id}`}>{project.name}</Link>
          ))}
        </nav>
        <div className="projects-list">
          {projects.map((project) => <ProjectStory key={project.id} project={project} />)}
        </div>
        <header className="academic-heading">
          <h2>Personal &amp; Academic Projects</h2>
          <h2>Source Code Available 👀</h2>
        </header>
        <div className="projects-list">
          {otherProjects.map((project) => <ProjectStory key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}

