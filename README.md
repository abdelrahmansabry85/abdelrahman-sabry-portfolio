# Abdelrahman Sabry — Portfolio

> Front-end engineer building clear, responsive interfaces with React and TypeScript.

[![Live website](https://img.shields.io/badge/Live%20website-abdelrahman--sabry--portfolio.vercel.app-d8fb65?style=flat-square&labelColor=090b0f)](https://abdelrahman-sabry-portfolio.vercel.app)
[![GitHub profile](https://img.shields.io/badge/GitHub-abdelrahmansabry85-181717?style=flat-square&logo=github)](https://github.com/abdelrahmansabry85)
[![Built with React](https://img.shields.io/badge/React-TypeScript-61dafb?style=flat-square&logo=react&logoColor=111518)](https://react.dev/)

## Overview

This is a one-page personal portfolio for Abdelrahman Sabry, a front-end engineer and data engineering trainee. The current homepage focuses on selected web projects, a practical toolset, services, a downloadable CV, and direct contact links. Presentation and documentation assets remain stored in the repository for a dedicated documents page later.

The visual direction is dark and editorial, with a light-mode alternative, an animated front-end stack orbit, real project screenshots, icon-based tool cards, smooth section transitions, and responsive layouts for mobile and desktop.

## Quick links

- [Live portfolio](https://abdelrahman-sabry-portfolio.vercel.app)
- [GitHub profile](https://github.com/abdelrahmansabry85)
- [Source repository](https://github.com/abdelrahmansabry85/abdelrahman-sabry-portfolio)
- [LinkedIn](https://www.linkedin.com/in/abdelrahman-sabry-b36500275/)
- [X](https://x.com/abosabrynbo)

## Featured work

| Project | Description | Live site |
| --- | --- | --- |
| **MediDash** | Online medical system focused on doctor discovery, bookings, records, and an AI assistant. | [Open project](https://la-phi.vercel.app/) |
| **Mostafa Teacher Hub** | Arabic-first information site for a teacher’s schedule, address, timing, and AI-powered revision quizzes. | [Open project](https://mrmostafamashaly.vercel.app/) |

### Project screenshots

<p>
  <img src="./public/medidash.webp" alt="MediDash landing page" width="49%" />
  <img src="./public/mostafa-teacher-hub.webp" alt="Mostafa Teacher Hub landing page" width="49%" />
</p>

Each project includes a case-study expansion with the problem, role, design decisions, outcome, technology details, and additional real screenshots.

## What is included

- About section focused on front-end engineering and practical English-education support
- Selected work with real landing-page screenshots and live links
- Animated stack marquee and icon-based tools grid
- Services for front-end engineering, raw spreadsheet cleanup, technical content, and UI systems handoff
- Compact certifications section linking to the public LinkedIn certifications page
- Downloadable CV, with presentation and documentation assets preserved for a future documents page
- One-page resume section with a branded CV download
- Email, WhatsApp, LinkedIn, X, and GitHub contact links
- Dark and light themes with persisted preference
- Responsive layout for mobile, tablet, and desktop
- Open Graph and Twitter sharing metadata, canonical URL, sitemap, robots.txt, and profile structured data
- Lazy-loaded WebP project screenshots; large documents remain downloadable without loading on the homepage

## Technology

- React
- TypeScript
- Vite
- React Icons
- HTML5 and CSS3
- Bootstrap-informed project experience
- Vercel deployment

## Run locally

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/abdelrahmansabry85/abdelrahman-sabry-portfolio.git
cd abdelrahman-sabry-portfolio
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Validate a production build

```bash
npm run build
npm run preview
```

The build runs TypeScript checks before generating the production files in `dist/`.

## Deployment

The production site is deployed on Vercel and connected to the GitHub `main` branch. New pushes to `main` can trigger a new deployment automatically.

```bash
npm run build
```

Vercel uses the project configuration in [`vercel.json`](./vercel.json): `npm run build` with `dist/` as the output directory.

## Project files

```text
src/
  App.tsx        Page sections, content, interactions, and project data
  styles.css     Responsive visual system, themes, and animations
  main.tsx       React entry point
public/
  documents/     CV, MediDash decks, and technical documentation
  editorial/     Additional presentation PDFs and cover thumbnails
  *.webp         Optimized real project landing-page screenshots
  *.png          Original screenshot source assets
```

## Documents

The repository preserves the supplied work samples as public assets for the planned documents page. They are not currently shown in the homepage navigation:

- [Branded CV](./public/documents/Abdelrahman-Sabry-CV.pdf)
- [MediDash final presentation](./public/documents/MediDash-Presentation-Final.pptx)
- [MediDash first-semester presentation](./public/documents/MediDash-Presentation-First-Semester.pptx)
- [MediDash technical documentation](./public/documents/MediDash-Technical-Documentation.pdf)
- [Messi and His Impact on Argentina](./public/editorial/Messi-and-His-Impact-on-Argentina.pdf)
- [AI Systems and the n8n Tool](./public/editorial/Arabic-Editorial-Presentation.pdf)

## Contact

- Email: [mobodymo6@gmail.com](mailto:mobodymo6@gmail.com)
- WhatsApp: [Message on WhatsApp](https://wa.me/201553258929)
- LinkedIn: [Abdelrahman Sabry](https://www.linkedin.com/in/abdelrahman-sabry-b36500275/)
- X: [@abosabrynbo](https://x.com/abosabrynbo)
- GitHub: [abdelrahman-sabry-portfolio](https://github.com/abdelrahmansabry85/abdelrahman-sabry-portfolio)

## License

This is a personal portfolio repository. No open-source license is currently declared; please contact Abdelrahman before reusing personal content, documents, or project assets.
