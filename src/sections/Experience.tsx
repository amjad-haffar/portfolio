import { experience } from '../content';

export function Experience() {
  return (
    <section className="section split" id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>
      <div className="entries">
        {experience.map((job) => (
          <article className="entry" key={job.company}>
            <div className="entry-heading"><h3>{job.role}</h3><span>{job.dates}</span></div>
            <p className="organization">{job.company}</p>
            <p>{job.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
