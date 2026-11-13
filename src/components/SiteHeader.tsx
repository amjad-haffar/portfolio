import { profile } from '../content';

const navigation = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

export function SiteHeader() {
  return (
    <header className="site-header" id="top">
      <div className="wrap header-inner">
        <a className="brand" href="#top"><span className="monogram">{profile.initials}</span>{profile.name}</a>
        <nav aria-label="Main navigation">
          {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
