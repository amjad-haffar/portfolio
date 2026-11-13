# Personal portfolio

A single-page React, Vite, and TypeScript portfolio. The person, employment history, credentials, and projects are sample content.

## Run locally

Use Node.js 20 or newer. Open a terminal in this folder and run:

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite. Run `npm run build` to check TypeScript and generate the static site in `dist/`. Run `npm run preview` to serve that build locally.

## Customise

- Update your name, introduction, about text, experience, education, projects, email, and social URLs in `src/content.ts`.
- Replace `public/portrait.png` with your own photo, or update the photo path in the profile data. Update the photo’s alternative text in `src/components/ProfilePhoto.tsx`.
- Add a `url` to a project to link its title to a demo or repository. The first draft uses illustrative project previews.
- Change the page title and description in `index.html`, and remove “Sample portfolio” from the footer in `src/components/SiteFooter.tsx`.
- Edit the colour variables and layout in `src/styles.css`.
