# Sai Srujan — Personal Developer Portfolio Website

A minimal, light-themed, high-performance developer portfolio built with React, TypeScript, and Vite. Designed specifically for software engineering recruiters, internship hiring managers, and technical interviewers.

---

## 👨‍💻 About Sai Srujan

- **Full Name**: Gondela Sai Srujan
- **Preferred Display Name**: Sai Srujan
- **Professional Title**: Software Developer | Java & Data Structures and Algorithms | Web Development
- **Location**: Hyderabad, Telangana, India
- **Education**: B.Tech in Computer Science and Engineering (2023–2027), Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)
- **Current CGPA**: 9.02 / 10.0
- **Intermediate**: MPC (Mathematics, Physics, Chemistry), Sri Chaitanya Junior College (95.5%)
- **Problem Solving**: 600+ Data Structures & Algorithms problems solved in Java
- **Availability**: Open to internships and full-time software development roles

---

## 🚀 Tech Stack

- **Frontend Core**: React 18 & TypeScript
- **Bundler & Tooling**: Vite
- **Styling**: Vanilla CSS Design Tokens (Warm minimalist palette, custom CSS variables, responsive grids)
- **Icons**: Custom zero-dependency SVG icon system matching modern design standards
- **Deployment**: Vercel & GitHub

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg             # Custom "SS" monogram favicon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Responsive sticky navigation with mobile drawer
│   │   ├── Hero.tsx            # Hero with availability badge, CTA buttons & monogram
│   │   ├── QuickHighlights.tsx # 600+ DSA, 9.02 CGPA, 2027 graduation strip
│   │   ├── About.tsx           # Narrative background & key attributes
│   │   ├── Education.tsx       # GRIET B.Tech & Sri Chaitanya Junior College
│   │   ├── Skills.tsx          # Categorized skills (Java primary, core CS, project APIs)
│   │   ├── Projects.tsx        # Selected projects grid & architecture flow
│   │   ├── ProjectCard.tsx     # Card with conditional actions & technology chips
│   │   ├── Experience.tsx      # GDGoC GRIET, COSMOS 2026, Agentathon 2025
│   │   ├── Achievements.tsx    # Factual milestones & accomplishments
│   │   ├── Certifications.tsx  # IBM GenAI & Cisco Networking Academy
│   │   ├── Contact.tsx         # Direct email, click-to-call, and profile links
│   │   ├── Footer.tsx          # Semantic footer with dynamic current year
│   │   ├── Icons.tsx           # Lightweight, zero-dependency SVG icons
│   │   ├── SectionHeading.tsx  # Reusable section headers
│   │   └── SocialLinks.tsx     # GitHub, LinkedIn, LeetCode profile links
│   ├── data/
│   │   └── portfolio.ts        # Single source of truth for portfolio data
│   ├── App.tsx                 # Root component assembly
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Design tokens, color palette, and typography
├── vercel.json                 # Vercel SPA routing and build configuration
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Builds optimized production assets to the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

### Method 1: Git-Connected Automatic Deploy (Recommended)
1. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/srujan0516/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Open [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository from GitHub.
4. Vercel automatically detects the Vite framework using `vercel.json`.
5. Click **"Deploy"**. Future pushes to `main` will automatically deploy live.

### Method 2: Vercel CLI Deploy
```bash
vercel login
vercel --prod
```

---

## 📬 Contact & Profiles

- **Email**: [saisrujan115@gmail.com](mailto:saisrujan115@gmail.com)
- **Phone**: [+91 6305387164](tel:+916305387164)
- **GitHub**: [https://github.com/srujan0516](https://github.com/srujan0516)
- **LeetCode**: [https://leetcode.com/u/G2lYT6OPhC/](https://leetcode.com/u/G2lYT6OPhC/)
- **LinkedIn**: [https://in.linkedin.com/in/gondela-sai-srujan-83a11a314](https://in.linkedin.com/in/gondela-sai-srujan-83a11a314)
- **Resume**: [Google Drive Link](https://drive.google.com/file/d/1vjYcjbq5o7XsIEQtQyCnflvpAjiknJ_v/view?usp=drive_link)
