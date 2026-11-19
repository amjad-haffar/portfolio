'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '../content';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header" id="top" tabIndex={-1}>
      <div className="wrap header-inner">
        <Link className="brand" href="/">{profile.name}</Link>
        <nav aria-label="Main navigation">
          <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
          <Link href="/lately" aria-current={pathname === '/lately' ? 'page' : undefined}>Life Lately</Link>
        </nav>
      </div>
    </header>
  );
}

