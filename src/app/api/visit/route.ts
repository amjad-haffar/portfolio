function isBot(userAgent: string): boolean {
  return /bot|crawler|spider|slurp|headless/i.test(userAgent);
}
function getVisitorInfo(userAgent: string) {
  let device = 'Unknown';
  let os = 'Unknown';
  let browser = 'Unknown';

  if (/iPad|Tablet|Android(?!.*Mobile)/i.test(userAgent)) {
    device = 'Tablet';
  } else if (/Mobile|iPhone|Android/i.test(userAgent)) {
    device = 'Mobile';
  } else if (/Windows|Macintosh|Linux/i.test(userAgent)) {
    device = 'Desktop';
  }

  if (/Windows/i.test(userAgent)) {
    os = 'Windows';
  } else if (/Android/i.test(userAgent)) {
    os = 'Android';
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    os = 'iOS';
  } else if (/Macintosh/i.test(userAgent)) {
    os = 'macOS';
  } else if (/Linux/i.test(userAgent)) {
    os = 'Linux';
  }

  if (/Edg/i.test(userAgent)) {
    browser = 'Edge';
  } else if (/Firefox|FxiOS/i.test(userAgent)) {
    browser = 'Firefox';
  } else if (/Chrome|CriOS/i.test(userAgent)) {
    browser = 'Chrome';
  } else if (/Safari/i.test(userAgent)) {
    browser = 'Safari';
  }

  return { device, os, browser };
}
export async function POST(req: Request) {
  
  if (req.headers.get('sec-fetch-site') !== 'same-origin') {
    return new Response(null, { status: 403 });
  }
  const userAgent = req.headers.get('user-agent') ?? '';
  if (isBot(userAgent)) {
    return new Response(null, { status: 204 });
  }
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return new Response(null, { status: 500 });
  }
  let body;

  try {
    body = await req.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return new Response(null, { status: 400 });
  }
  let message: string;
  const country = req.headers.get('x-vercel-ip-country') ?? 'Unknown';
  const city = req.headers.get('x-vercel-ip-city') ?? 'Unknown';

  switch (body.event) {
    case 'visit': {
      const { device, os, browser } =
        getVisitorInfo(userAgent);

      const source =
        typeof body.source === 'string' &&
        /^[a-z0-9.-]{1,253}$/i.test(body.source)
          ? body.source
          : 'Direct / Unknown';

      message = [
        '👀 Someone finally visited your website!',
        '',
        `Source: ${source}`,
        `Device: ${device}`,
        `location: ${country}, ${city}`,
        `OS: ${os}`,
        `Browser: ${browser}`,
      ].join('\n');

      break;
    }

    case 'gift': {
      if (
        !Number.isSafeInteger(body.count) ||
        body.count < 1
      ) {
        return new Response(null, { status: 400 });
      }

      message = [
        '🎁 Another victim of your gift collection.',
        '',
        `Gifts opened: ${body.count}`,
      ].join('\n');

      break;
    }

    default:
      return new Response(null, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    return new Response(null, {
      status: response.ok ? 200 : 502,
    });
  } catch {
    return new Response(null, { status: 500 });
  }
}