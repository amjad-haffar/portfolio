import { profile } from '../content';
import { ProfilePhoto } from '../components/ProfilePhoto';

import HeroBackground from '../components/HeroBackground';
export function Hero() {
  return (
    <section className="hero" aria-labelledby="intro-title">
      <div>
            <HeroBackground />
        <p className="eyebrow">{profile.role}</p>
        <h1 id="intro-title">{profile.headline}</h1>
        <p className="intro">{profile.intro}</p>
        <div className="actions">
          <a className="button primary" href="#projects">View projects <span aria-hidden="true">↓</span></a>
          <a className="button secondary" href="#contact">About Me</a>
        </div>
      </div>
      <ProfilePhoto />
    </section>
  );
}
