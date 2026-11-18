import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function RouteScroll() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          target.scrollIntoView();
          target.focus({ preventScroll: true });
          return;
        }
      }
      window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}

