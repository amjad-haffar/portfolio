import { Link, NavLink } from 'react-router-dom';
import { profile } from '../content';

const navigation = [
  ['Projects', '/#projects'],
  ['Skills', '/#skills'],
  ['Education', '/#education'],
  ['Contact', '/#contact'],
];

export function SiteHeader() {
  return (
    <header className="site-header" id="top" tabIndex={-1}>
      <div className="wrap header-inner">
        <Link className="brand" to="/"><span className="monogram">{profile.initials}</span>{profile.name}</Link>
        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/lately">Life Lately</NavLink>
        </nav>
      </div>
    </header>
  );
}

