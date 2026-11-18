import { MusicPlayer } from '../components/MusicPlayer';
import { lately, type LatelySection } from '../lately';

export default function LifeLately() {
  const date = new Date(lately.updated + 'T12:00:00Z').toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  });

  return (
    <div className="lately-page">
      <div className="wrap">
        <header className="lately-intro">
          <h1>Life, lately.</h1>
          <p className="lately-updated">Last updated <time dateTime={lately.updated}>{date}</time></p>
          <p className="intro">{lately.introduction}</p>
        </header>
        <div className="lately-notes">
          {lately.sections.map((section: LatelySection) => (
            <section className="lately-note" key={section.id} aria-labelledby={section.id}>
              <h2 id={section.id}>{section.title}</h2>
              <div className="lately-content">
              <p>{section.text}</p>
              {section.music && (
              <MusicPlayer music={section.music} />
            )}
              {section.image && (
                <figure>
                  <img src={section.image.src} alt={section.image.alt} loading="lazy" />
                  {section.image.caption && <figcaption>{section.image.caption}</figcaption>}
                </figure>
              )}
              {section.links && (
                <ul className="lately-links">
                  {section.links.map((link) => <li key={link.url}><a href={link.url}>{link.label}</a></li>)}
                </ul>
              )}
            </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

