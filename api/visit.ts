export async function POST(req: Request) {
  if (req.headers.get('sec-fetch-site') !== 'same-origin') {
    return new Response(null, { status: 403 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return new Response(null, { status: 500 });
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
          text: '👀 Someone finally visited your website!',
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