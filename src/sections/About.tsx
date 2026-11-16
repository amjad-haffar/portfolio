import { profile } from '../content';
import { Tags } from '../components/Tags';

export function About() {
  return (
    <section className="section split" id="about" aria-labelledby="about-title">
      <h2 id="about-title">Main Skills</h2>
      <div className="about-copy">
        <Tags items={profile.skills} />
      </div>
    </section>
  );
}
