import { profile } from '../content';

export function SiteFooter() {
  return (
    <footer className="wrap footer"><span>{profile.name} · Sample portfolio</span><a href="#top">Back to top ↑</a></footer>
  );
}
