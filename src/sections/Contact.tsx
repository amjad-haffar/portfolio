import { profile } from '../content';

export function Contact() {
  return (
    <section className="contact" id="contact" tabIndex={-1} aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title">Get in touch</h2>
        <p>Want to have a chat? I’d love to hear from you.</p>
      </div>
      <div className="contact-links">
        {profile.links.map(({ label, url }) => <a key={label} href={url}>{label} <span aria-hidden="true">↗</span></a>)}
      </div>
    </section>
  );
}
