# Abdelrahman Sabry — Portfolio

> Front-end engineer building clear, responsive interfaces with React and TypeScript.

[![Live website](https://img.shields.io/badge/Live%20website-abdelrahman--sabry--portfolio.vercel.app-d8fb65?style=flat-square&labelColor=090b0f)](https://abdelrahman-sabry-portfolio.vercel.app)
[![GitHub profile](https://img.shields.io/badge/GitHub-abdelrahmansabry85-181717?style=flat-square&logo=github)](https://github.com/abdelrahmansabry85)
[![Built with React](https://img.shields.io/badge/React-TypeScript-61dafb?style=flat-square&logo=react&logoColor=111518)](https://react.dev/)

## Overview

This is a one-page personal portfolio for Abdelrahman Sabry, a front-end engineer and data engineering trainee. The homepage focuses on selected web projects, certifications, a practical toolset, services, a downloadable CV, and direct contact links.

The visual direction is dark and editorial, with a light-mode alternative, a typed hero name, an animated front-end stack orbit, real project screenshots, expandable case studies, and responsive layouts for mobile and desktop.

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
| **Mostafa Teacher Hub** | Arabic-first information site for a teacher's schedule, address, timing, and AI-powered revision quizzes. | [Open project](https://mrmostafamashaly.vercel.app/) |

### Project screenshots

<p>
  <img src="./public/medidash.webp" alt="MediDash landing page" width="49%" />
  <img src="./public/mostafa-teacher-hub.webp" alt="Mostafa Teacher Hub landing page" width="49%" />
</p>

Each project includes a case-study expansion with the problem, role, design decisions, outcome, technology details, and additional real screenshots.

## What is included

- About section focused on front-end engineering and practical English-education support
- Selected work with real landing-page screenshots, live links, and expandable case studies
- Animated stack marquee and icon-based tools grid
- Services for front-end engineering, raw spreadsheet cleanup, technical content, and UI systems handoff
- Certifications section linking to the public LinkedIn certifications page
- Downloadable CV in the hero and resume sections
- Email, WhatsApp, LinkedIn, X, and GitHub contact links
- Dark and light themes with persisted preference
- Responsive layout for mobile, tablet, and desktop
- Open Graph and Twitter sharing metadata, canonical URL, sitemap, robots.txt, and profile structured data
- Lazy-loaded WebP project screenshots

## Technology

- React 19 + TypeScript
- Vite
- React Icons
- HTML5 and CSS3
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

The site deploys on Vercel, connected to this GitHub repository's `main` branch. Every push to `main` triggers a new production deployment automatically — no manual steps needed — and every pull request gets its own preview URL.

To connect it yourself (if not already linked):

1. Go to [vercel.com/new](https://vercel.com/new) and import the `abdelrahman-sabry-portfolio` repository from GitHub.
2. Vercel detects Vite via [`vercel.json`](./vercel.json) (`npm run build`, output `dist/`) — just click **Deploy**.
3. Verify under **Settings → Git** that the connected repository is `abdelrahmansabry85/abdelrahman-sabry-portfolio` and the production branch is `main`.

To connect an existing project instead: open it on Vercel → **Settings → Git** → connect the GitHub repository and select `main` as the production branch.

## Project files

```text
src/
  App.tsx        Page sections, content, interactions, and project data
  styles.css     Responsive visual system, themes, and animations
  main.tsx       React entry point
public/
  documents/     Downloadable CV (PDF)
  *.webp         Optimized real project landing-page screenshots
  *.png          Original screenshot source assets
```

## Contact

- Email: [mobodymo6@gmail.com](mailto:mobodymo6@gmail.com)
- WhatsApp: [Message on WhatsApp](https://wa.me/201553258929)
- LinkedIn: [Abdelrahman Sabry](https://www.linkedin.com/in/abdelrahman-sabry-b36500275/)
- X: [@abosabrynbo](https://x.com/abosabrynbo)
- GitHub: [abdelrahman-sabry-portfolio](https://github.com/abdelrahmansabry85/abdelrahman-sabry-portfolio)

## License

This is a personal portfolio repository. No open-source license is currently declared; please contact Abdelrahman before reusing personal content, documents, or project assets.
