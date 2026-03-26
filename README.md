# Parth Jangir — Portfolio

**Live:** [parthjangir.in](https://parthjangir.in)

Built with React 18 + Vite + Framer Motion.

## Local Dev
```bash
npm install
npm run dev
```

## Build & Deploy to Hostinger
```bash
npm run build
# Upload contents of /dist folder to public_html/ on Hostinger
# OR connect GitHub repo via hPanel → Git → auto-deploy
```

## Structure
```
parth-portfolio/
├── public/
│   ├── favicon.svg
│   ├── .htaccess           ← Apache config for Hostinger
│   └── Parth_Jangir_Resume.pdf   ← add your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useInView.js
│   ├── data/
│   │   └── portfolio.js    ← all content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```
