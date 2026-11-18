import { profile } from '../content';
import { Tags } from '../components/Tags';

export function Skills() {
  return (
    <section className="section split" id="skills" tabIndex={-1} aria-labelledby="skills-title">
      <span id="about" tabIndex={-1} className="legacy-anchor" /><h2 id="skills-title">Main Skills</h2>
      <div className="about-copy">
        <Tags items={profile.skills} />
      </div>
    </section>
  );
}
