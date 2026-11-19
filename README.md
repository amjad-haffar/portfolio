# Personal website

React, TypeScript and Next.js App Router. The existing portfolio and Life Lately content, styles, media and gift interactions are retained.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production build and local production server:

```sh
npm run build
npm run typecheck
npm run start
```

There is currently no lint script or lint configuration.

## Application structure

- `src/app/layout.tsx` defines the HTML document, global stylesheet imports, default metadata and shared layout.
- `src/app/page.tsx` serves `/`, using `src/views/Home.tsx`.
- `src/app/lately/page.tsx` serves `/lately`, using `src/views/LifeLately.tsx`, and supplies its own title, description and canonical URL.
- `src/components/SiteLayout.tsx` composes the shared header, footer, page content, navigation scrolling, visitor notification and gifts. It persists during client-side page navigation.
- `src/sections/` contains the existing portfolio sections. Content stays in `src/content.ts`, `src/lately.ts` and `src/sections/projects/data.tsx`.
- `src/app/api/visit/route.ts` implements the existing `POST /api/visit` endpoint.
- `src/app/robots.ts` and `src/app/sitemap.ts` generate the existing crawler URLs using the deployment domain `https://amjad-alhaffar.vercel.app`.

The former page components moved from `src/pages/` to `src/views/` because Next.js reserves `pages/` for its older Pages Router. The views retain their content and compose the same sections.

## Server and client rendering

The root layout, pages, views, portfolio sections, story text and music player are Server Components. Both pages are generated as static HTML during `npm run build`. Their actual content appears in the initial response for crawlers and browsers with JavaScript disabled.

Only interactive components use `'use client'`:

- `SiteHeader` uses `usePathname` to mark the current navigation link.
- `RouteScroll` handles section-anchor scrolling and focus, including repeated anchor clicks.
- `ProfilePhoto` manages the existing four-second photo rotation and image-error fallback.
- `HeroBackground` creates random particles after mounting. Its initial server and client markup match.
- `ProjectGallery` manages screenshot navigation. `projectStory.tsx` keeps the story text on the server.
- `FloatingGift` manages the existing five-second introduction, sequential gift selection, unwrapping, minimisation and collection. It stays mounted across page changes. Gift progress remains in memory and resets on refresh, matching the current implementation.
- `VisitNotification` runs the existing production-only notification hook.

Client Components are also prerendered where appropriate. Their JavaScript adds interactivity after the initial HTML loads. Browser APIs and random particles are accessed after mounting or from event handlers.

The stylesheet files and public assets retain their original contents. Images continue using the existing HTML image elements and CSS dimensions.

## Telegram notifications

Set these server-side environment variables in the existing Vercel project:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

For local production testing, Next.js also reads `.env.local`. Keep secrets out of source control and avoid the `NEXT_PUBLIC_` prefix for these values.

The client still waits three seconds and sends one request per browser session, using the existing `sessionStorage` key `visit-notified`. Development mode sends no notification. The API requires the existing same-origin header and sends the same Telegram text, with the same success and failure status codes. Credentials are read only in the server Route Handler.

Live delivery requires the configured server environment. Local checks use mocked Telegram responses.

## Vercel

`vercel.json` selects Next.js with the standard development and build commands. Deploy this repository to the existing Vercel project to retain its domain. Use the framework's automatic output directory. Remove any old Vite `dist` output-directory override in the project's dashboard if one was configured there. Both pages are static, while the Telegram POST endpoint runs as a server function. A static-only export would omit that endpoint, so this project uses the standard Next.js deployment.

## Migration notes

Next.js replaces Vite's entry HTML, `main.tsx`, `App.tsx`, Vite type references and React Router. `next-env.d.ts`, `next.config.ts` and the TypeScript Next.js plugin provide framework typing and build configuration. The Turbopack root is explicitly the project folder to avoid picking up an unrelated parent lockfile.

React and its type packages were upgraded to React 19 alongside Next.js 16. The gift timeout ref now has an explicit initial value for the newer React types. No CSS or content changes were needed.

Validation includes the production build, TypeScript, raw HTTP content and metadata checks, stylesheet/content comparisons, mocked Telegram handler paths, and notification timing/session checks. Browser visual and hydration verification could not be completed because the in-app browser timed out connecting to local preview servers. Both page routes and crawler URLs returned HTTP 200 from the production server.
