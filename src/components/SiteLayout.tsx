import { FloatingGift } from '../gifts/FloatingGift';
import { Outlet } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { RouteScroll } from './RouteScroll';

export function SiteLayout() {
  return (
    <>
      <RouteScroll />
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}><Outlet /></main>
      <SiteFooter />
      <FloatingGift />
    </>
  );
}

