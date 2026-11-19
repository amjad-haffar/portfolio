import type { ReactNode } from 'react';
import { FloatingGift } from '../gifts/FloatingGift';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { RouteScroll } from './RouteScroll';
import { VisitNotification } from './VisitNotification';

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RouteScroll />
      <VisitNotification />
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>{children}</main>
      <SiteFooter />
      <FloatingGift />
    </>
  );
}

