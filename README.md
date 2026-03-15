# Portfolio — S. Tarun Kumar

A personal portfolio website showcasing skills, projects, achievements, and certifications. Built with vanilla HTML, CSS, and JavaScript. Features an editorial/brutalist design with distinctive typography and scroll-triggered animations.

## Live Site

[tar-2005.github.io/newportfolio](https://tar-2005.github.io/newportfolio) *(or your deployed URL)*

## Features

- **Responsive layout** — Mobile-first sidebar with hamburger menu
- **Scroll reveals** — Sections animate in on scroll
- **Typing effect** — Hero section cycles through roles (Data Analyst, Programmer, Web Designer)
- **Scroll spy** — Nav highlights current section
- **Social links** — LinkedIn, GitHub, Email, Phone in sidebar
- **No build step** — Plain HTML/CSS/JS, open and run

## Project Structure

```
Portfolio 2.0/
├── index.html          # Main page
├── css/
│   └── style.css       # Styles
├── js/
│   └── script.js       # Behavior (typing, scroll spy, menu)
├── assets/
│   └── images/
│       ├── My_Img.jpg  # Profile photo
│       └── resume.jpg  # Resume preview
├── .github/
│   └── workflows/
│       └── static.yml  # GitHub Pages deploy
└── README.md
```

## Sections

| Section        | Content                                       |
|----------------|-----------------------------------------------|
| About          | Bio, contact details                          |
| Skills         | Languages, tools, frameworks, coursework      |
| Projects       | Portfolio site, Smart Fence System            |
| Achievements   | Mini Project Expo, 100% Attendance            |
| Resume         | Education, resume preview                     |
| Certifications | IBM, freeCodeCamp, HackerRank, NPTEL          |
| Events         | Symposiums, workshops, IETE membership        |
| Contact        | Address, phone, email, map                    |

## Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/Tar-2005/Portfolio-2.0.git
   cd Portfolio-2.0
   ```

2. Serve the files (or open `index.html` in a browser):
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```

3. Open `http://localhost:3000` (or `8000`).

## Deployment

Deploys automatically to GitHub Pages on push to `main` via `.github/workflows/static.yml`.

Configure in **Settings → Pages** → Source: *GitHub Actions*.

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript (IntersectionObserver, no frameworks)
- Google Fonts: Bebas Neue, Libre Baskerville

## License

© Tarun Kumar. All rights reserved.
