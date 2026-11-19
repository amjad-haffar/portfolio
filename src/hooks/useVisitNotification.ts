import { useEffect } from 'react';

export function useVisitNotification() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    if (sessionStorage.getItem('visit-notified')) return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem('visit-notified', 'true');

      fetch('/api/visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'visit',
          source: getReferralSource(),
        }),
      }).catch(() => {
        // Notifications should never affect the website.
      });
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);
}
function getReferralSource(): string {
  if (!document.referrer) {
    return 'Direct / Unknown';
  }

  return new URL(document.referrer).hostname;
}