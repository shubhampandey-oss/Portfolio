# Shubham Pandey — Developer Portfolio

> **Software Engineer & Intelligent Software Engineer**  
> Specializing in scalable application development, deep learning, and modern web architectures.

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Render](https://img.shields.io/badge/Deploy-Render-46E3B7?logo=render&logoColor=white)](https://render.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Live Demo & Profiles
- **GitHub**: [https://github.com/shubhampandey-oss](https://github.com/shubhampandey-oss)
- **LinkedIn**: [https://linkedin.com/in/shubham-pandey-4078b934a](https://linkedin.com/in/shubham-pandey-4078b934a)
- **Email**: [shubham2292pandey@gmail.com](mailto:shubham2292pandey@gmail.com)

---

## 🛠️ Tech Stack
- **Core Bundler & Runtime**: Vite 8, Node.js (ES Modules)
- **Languages**: TypeScript (Strict Mode), HTML5, Modern CSS3
- **Component Architecture**: React 19, Lucide React Icons
- **Typography**: Fontshare (Clash Display, Satoshi) & Google Fonts (Cormorant Garamond, JetBrains Mono)
- **Deployment**: Render (Static Site)

---

## 📂 Project Structure

```
portfolio/
├── public/                       # Static public assets (unbundled)
│   ├── images/
│   │   └── .gitkeep              # Project showcase graphics & thumbnails
│   ├── resume.pdf                # Canonical resume link
│   └── Shubham_Pandey_Resume.pdf # Downloadable resume PDF
├── src/                          # Application source code
│   ├── assets/
│   │   └── .gitkeep              # Bundled media / icons
│   ├── components/               # Modular React / TSX components
│   │   ├── Contact.tsx           # Contact section component
│   │   ├── Footer.tsx            # Site footer with social links & copyright
│   │   ├── Hero.tsx              # Interactive typographic echo hero
│   │   ├── MyWork.tsx            # Project showcase wrapper
│   │   ├── Navbar.tsx            # Fixed blur-glass navigation bar
│   │   ├── Projects.tsx          # Filterable project catalog & metrics
│   │   ├── ResumeSection.tsx     # Resume viewer & download CTA
│   │   ├── WhatIDoSection.tsx    # Technical skills & specialization matrix
│   │   └── index.ts              # Central component barrel export
│   ├── styles/
│   │   └── style.css             # Brutalist/Swiss design system & styling
│   └── main.ts                   # Type-safe cursor, parallax & scroll controller
├── .env.example                  # Template for environment variables
├── .gitignore                    # Comprehensive production exclusion rules
├── index.html                    # Semantic HTML5 entry point
├── jsconfig.json                 # Tooling configuration for JS tooling
├── package.json                  # Project manifest, dependencies & scripts
├── render.yaml                   # Render Blueprint configuration with security headers
├── tsconfig.json                 # Strict TypeScript compiler configuration
├── vite.config.ts                # Production Vite bundler configuration
└── README.md                     # Project documentation & operational guide
```

---

## 💻 Local Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** (v9+) or **pnpm** (v8+)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/shubhampandey-oss/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 3. Environment Configuration
Create a local `.env` configuration file from the provided template:
```bash
cp .env.example .env
```
*(Optionally adjust variables inside `.env` if you need custom endpoints or credentials).*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. Live hot-reloading (HMR) is active.

### 5. Type Check & Production Build
```bash
# Run strict TypeScript validation
npm run typecheck

# Build minified & optimized production artifacts in dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploying to Render

This repository is optimized for [Render](https://render.com/) Static Sites and includes a [`render.yaml`](./render.yaml) blueprint with security headers.

### Option A: Manual Static Site Setup (Simple)
1. Push your repository to your GitHub account (`shubhampandey-oss/portfolio`).
2. Log in to your [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** &rarr; **Static Site**.
4. Connect your GitHub repository (`portfolio`).
5. Configure the deployment settings:
   - **Name**: `shubham-pandey-portfolio`
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
6. Click **Create Static Site**. Render will automatically build and publish your portfolio with free SSL!

### Option B: Blueprint Deployment (One-Click)
1. In the Render Dashboard, click **New +** &rarr; **Blueprint**.
2. Connect your repository. Render will automatically read `render.yaml` and configure the build command, publish directory, rewrite rules, and security headers automatically.
3. Click **Apply**.

---

## 🔒 Security & Best Practices
- ✅ **Zero Secrets Committed**: All environment files (`.env*`, `.local`) and sensitive credentials are encrypted/excluded via `.gitignore`.
- ✅ **Sanitized External Links**: All outbound links include `rel="noopener noreferrer"` to eliminate reverse tab-nabbing attacks.
- ✅ **Security Headers**: `render.yaml` enforces `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy: strict-origin-when-cross-origin`.
- ✅ **Strict Type Safety**: Verified with `tsc --noEmit` under strict TypeScript mode with 0 errors.
- ✅ **Isolated Build Output**: Build artifacts (`dist/`) and dependency folders (`node_modules/`) are strictly kept out of version control.

---

## 📄 License & Credits
Designed and Developed by **Shubham Pandey** © 2026.  
Distributed under the [MIT License](https://opensource.org/licenses/MIT).
