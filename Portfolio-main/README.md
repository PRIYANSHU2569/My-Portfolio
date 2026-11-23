# Priyanshu Gupta — Developer Portfolio

A personal portfolio for Priyanshu Gupta, a Computer Science and Engineering student at VIT Bhopal University and full-stack developer. The site presents education, skills, selected projects, experience, achievements, certifications, and contact details in a responsive dark interface with an electric blue accent.

## Features

- Animated WebGL particle background powered by OGL
- Scroll parallax and section motion powered by Framer Motion
- Mouse-following spotlight effects on project cards
- Responsive navigation with active-section tracking
- About, education, skills, projects, experience, achievements, and contact sections
- EmailJS contact form with validation, submission feedback, and a spam honeypot
- Downloadable résumé and replaceable profile photo in `public/`
- Electric blue accent styling on the existing dark theme

## Technology stack

- React 19 and TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- OGL (WebGL particles)
- EmailJS Browser SDK (`@emailjs/browser`)
- Lucide React and React Icons

## Getting started

Requirements: Node.js 18 or later and npm.

```bash
npm install
```

### Configure EmailJS

Copy `.env.example` to `.env` in the project root, then add the values from your EmailJS account:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS template should use `{{from_name}}`, `{{from_email}}`, `{{subject}}`, and `{{message}}`, with `{{to_email}}` as the recipient and `{{from_email}}` as Reply-To. Restart the Vite server after changing `.env`. Keep `.env` local; it is ignored by Git. Never add EmailJS credentials to this README or commit them.

For Vercel, open the project’s **Settings → Environment Variables** and add the same three variable names and their values for the environments you deploy to. Save the changes and redeploy so the new values are included in the build.

### Run development server

```bash
npm run dev
```

### Create and preview a production build

```bash
npm run build
npm run preview
```

## Project structure

```text
public/
  favicon.svg
  profile.png
  resume.pdf
src/
  components/       Shared navigation, footer, and UI components
  context/          Theme context
  lib/              Shared asset paths and utilities
  section/          Hero, about, skills, projects, résumé, and contact
  App.tsx           Page composition and particle background
  index.css         Global styles and Tailwind theme
  main.tsx          React entry point
```

Replace `public/resume.pdf` or `public/profile.png` to update those assets without changing React components. The résumé downloads as `Priyanshu_Gupta_Resume.pdf`.

## Contact

- Email: [priyanshugupta2569@gmail.com](mailto:priyanshugupta2569@gmail.com)
- GitHub: [PRIYANSHU2569](https://github.com/PRIYANSHU2569)
- LinkedIn: [Priyanshu Gupta](https://www.linkedin.com/in/priyanshu-gupta-7474502b7/)
- LeetCode: [Priyanshugupta2569](https://leetcode.com/u/Priyanshugupta2569/)
- GeeksforGeeks: [priyanshug9who](https://www.geeksforgeeks.org/user/priyanshug9who/)
