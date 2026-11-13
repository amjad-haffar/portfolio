import { profile } from '../content';
import { Tags } from '../components/Tags';

export function About() {
  return (
    <section className="section split" id="about" aria-labelledby="about-title">
      <h2 id="about-title">About me</h2>
      <div className="about-copy">
        {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <Tags items={profile.skills} />
      </div>
    </section>
  );
}
