# Onkar Dunakhe — Portfolio Website

A responsive personal portfolio built with only:

- HTML
- CSS
- Vanilla JavaScript

No framework and no build step are required.

## Folder structure

```text
OnkarDunakhe-Portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── resume.pdf
```

## Run locally

1. Open the folder in VS Code or IntelliJ.
2. Open `index.html` in your browser.

For the best development experience, use VS Code + Live Server, or any simple local web server.

## What to edit

### 1. Personal links
Open `index.html` and search for:

- LinkedIn
- GitHub
- Email
- Phone

Replace the URLs with your real links.

### 2. Project links
Search for:

```html
<a href="#" aria-label="GitHub repository">GitHub ↗</a>
```

Replace `#` with the GitHub repository URL.

### 3. Resume
Replace:

```text
assets/resume.pdf
```

with your updated resume PDF, keeping the same filename if you want the buttons to continue working.

### 4. Colors
Open `style.css` and edit the variables at the top:

```css
--accent: #7c5cff;
--accent-2: #4cc9f0;
```

### 5. Content
All visible text is directly inside `index.html`, so it is easy to change.

## Deployment

This is a static website, so it can be deployed directly to GitHub Pages or Netlify.

Recommended for this portfolio: Netlify if you want the easiest deployment and custom-domain setup.

GitHub Pages is also excellent if your GitHub profile is an important part of your recruiter presence.

## Important before publishing

- Add your real GitHub profile URL.
- Add GitHub repository URLs for both projects.
- Check that your LinkedIn URL is correct.
- Replace the resume PDF with your latest resume.
- Test the website on mobile.
- Test every button and link.
