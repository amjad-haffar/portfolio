'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RouteScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let frame: number;

    function scrollToTarget() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (window.location.hash) {
          let id: string;
          try {
            id = decodeURIComponent(window.location.hash.slice(1));
          } catch {
            return;
          }
          const target = document.getElementById(id);
          if (target) {
            target.scrollIntoView();
            target.focus({ preventScroll: true });
            return;
          }
        }
        window.scrollTo(0, 0);
      });
    }

    function followAnchor(event: MouseEvent) {
      const anchor = (event.target as Element).closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const url = new URL(anchor.href);
      if (url.origin === window.location.origin && url.pathname === pathname && url.hash) {
        scrollToTarget();
      }
    }

    scrollToTarget();
    window.addEventListener('hashchange', scrollToTarget);
    window.addEventListener('popstate', scrollToTarget);
    document.addEventListener('click', followAnchor);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', scrollToTarget);
      window.removeEventListener('popstate', scrollToTarget);
      document.removeEventListener('click', followAnchor);
    };
  }, [pathname]);

  return null;
}

