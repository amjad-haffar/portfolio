import { useEffect } from 'react';

export function useVisitNotification() {
  useEffect(() => {
    if (!import.meta.env.PROD) return;

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