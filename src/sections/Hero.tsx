import { profile } from '../content';
import { ProfilePhoto } from '../components/ProfilePhoto';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="intro-title">
      <div>
        <p className="eyebrow">{profile.role}</p>
        <h1 id="intro-title">{profile.headline}</h1>
        <p className="intro">{profile.intro}</p>
        <div className="actions">
          <a className="button primary" href="#projects">View projects <span aria-hidden="true">↓</span></a>
          <a className="button secondary" href="#contact">Get in touch</a>
        </div>
      </div>
      <ProfilePhoto />
    </section>
  );
}
