import { credentials } from '../content';

export function Education() {
  return (
    <section className="section split" id="education" aria-labelledby="education-title">
      <h2 id="education-title">Education &amp;<br /> certifications</h2>
      <div className="entries">
        {credentials.map((item) => (
          <article className="entry" key={item.title}>
            <div className="entry-heading"><h3>{item.title}</h3><span>{item.date}</span></div>
            <p className="organization">{item.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
