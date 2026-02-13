# Personal Shopify Developer Portfolio

A clean, personal one-page portfolio for an individual Shopify developer. Targets **Shopify agencies** (white-label partner), **ecommerce managers**, and **Shopify store owners**. Built with **Next.js 14** and **Tailwind CSS**.

## Features

- **Sticky navbar** with smooth scroll to all sections
- **Hero** with left profile photo placeholder and right intro (headline, subheadline, bullets, CTAs)
- **About Me** — friendly, US-based, remote worldwide
- **Services** — Theme, App, Speed, CRO/UX, Ongoing Support
- **My Work Style** — 6 bullet points (code, turnaround, communication, performance, agency workflows, long-term support)
- **Selected Work** — 4 case study cards (Problem, Solution, Results, Tech, View Details)
- **Working With Agencies** — white-label, Slack/Jira/GitHub, 20–40 hrs/week, trial tasks
- **Tech Stack** — badges for Liquid, Shopify CLI, HTML, CSS, JS, React, Node, APIs, GitHub, Jira, Slack
- **Testimonials** — 3 placeholders (agency/client style)
- **Contact** — form, email, LinkedIn, CTA sentence
- **Footer** — copyright, US-based · Remote worldwide
- **SEO** — meta title, description, keywords, Open Graph
- **Animations** — hero fade-in, section scroll-reveal

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

1. **Your name** — Replace `[Your Name]` in: `layout.tsx` (meta), `Navbar.tsx`, `Hero.tsx`, `Footer.tsx`.
2. **Profile photo** — In `Hero.tsx`, replace the placeholder div with a real image (e.g. Next.js `Image` with `/your-photo.jpg`).
3. **Contact form** — In `Contact.tsx`, wire `handleSubmit` to Formspree, Netlify Forms, or an API route.
4. **Email / LinkedIn** — Update `hello@example.com` and the LinkedIn URL in `Contact.tsx`.

## Project structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx   # SEO, fonts
│   └── page.tsx     # Section order
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── AboutMe.tsx
    ├── Services.tsx
    ├── WorkStyle.tsx
    ├── CaseStudies.tsx
    ├── WorkingWithAgencies.tsx
    ├── TechStack.tsx
    ├── Testimonials.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    └── SectionReveal.tsx
```
