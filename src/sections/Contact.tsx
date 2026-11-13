import { profile } from '../content';

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title">Get in touch</h2>
        <p>Have a project in mind? I’d love to hear from you.</p>
      </div>
      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a>
        {profile.links.map(({ label, url }) => <a key={label} href={url}>{label} <span aria-hidden="true">↗</span></a>)}
      </div>
    </section>
  );
}
