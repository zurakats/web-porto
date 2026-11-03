# Edra Fahar Athaya — Personal IT Portfolio (`web-porto-1`)

A personal portfolio website presenting Edra Fahar Athaya's education, software engineering projects, internship experience, certifications, and technical support background.

Built with **React + Vite** (frontend) and **Node.js + Express** (backend), designed in a **Modern Dark** developer aesthetic.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, Lucide React, Framer Motion
- **Backend:** Node.js, Express.js (ES Modules), CORS, Helmet, In-Memory Caching
- **Content Store:** Curated local JSON data files on backend with dynamic enrichment
- **Asset Discovery:** Vite `import.meta.glob` automatic screenshot indexing by project slug

---

## 📂 Project Structure

```text
web-porto-1/
├── client/
│   ├── public/
│   │   ├── documents/
│   │   │   ├── CV-Edra-Fahar-Athaya-Software-Development.pdf
│   │   │   └── CV-Edra-Fahar-Athaya-IT-Support.pdf
│   │   └── favicon.svg
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/profile/edra-profile.svg
│   │   │   └── projects/
│   │   │       ├── mya-navigator/
│   │   │       ├── scan-translator/
│   │   │       ├── predictive-lead-scoring/
│   │   │       └── gradehub/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   ├── projects/
│   │   │   └── sections/
│   │   ├── lib/
│   │   │   ├── api.js
│   │   │   └── projectImages.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/env.js
│   │   ├── controllers/
│   │   ├── data/
│   │   │   ├── profile.json
│   │   │   ├── projects.json
│   │   │   ├── experience.json
│   │   │   ├── education.json
│   │   │   ├── skills.json
│   │   │   └── certifications.json
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   │   ├── github.service.js
│   │   │   └── portfolio.service.js
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
├── docs/
│   └── content-verification.md
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies

You can install all dependencies from the root directory or within each workspace:

```bash
# Root
npm install

# Client
cd client && npm install

# Server
cd ../server && npm install
```

### 2. Run in Development Mode

Run both client and server concurrently from the root directory:

```bash
npm run dev
```

Or run them in separate terminal windows:

```bash
# Terminal 1: Backend API (runs on http://localhost:5000)
npm run dev:server

# Terminal 2: Frontend Client (runs on http://localhost:5173)
npm run dev:client
```

### 3. Production Build

Build the frontend client for production:

```bash
npm run build
```

---

## 🖼️ How to Add or Update Project Screenshots

Screenshots use an **automatic discovery convention**. You **never** need to hardcode image paths in React components or in the JSON records.

1. Create a folder in `client/src/assets/projects/<project-slug>/` matching the project `slug` in `server/src/data/projects.json`.
2. Add your image inside that folder named `cover.webp` (or `cover.png`, `cover.jpg`, `cover.svg`).
3. Vite will automatically discover the cover image and map it to the corresponding project card at build time.
4. If an image is absent, a designed fallback panel is rendered automatically without broken image icons.

---

## 🛡️ Content Integrity & Source Rules

All claims on this site are traceable to verified documents:
- Detailed breakdown in `docs/content-verification.md`.
- No inflated claims, skill progress bars, or fake demo links.
- Team capstone contributions are explicitly delineated (e.g. REBE role for Predictive Lead Scoring).
