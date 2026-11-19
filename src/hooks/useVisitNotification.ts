import { useEffect } from 'react';

export function useVisitNotification() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    if (sessionStorage.getItem('visit-notified')) return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem('visit-notified', 'true');

      fetch('/api/visit', {
        method: 'POST',
      }).catch(() => {
        // Notifications should never affect the website.
      });
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);
}