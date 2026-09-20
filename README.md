# Aashish — Software Engineer → AI/ML Engineer Portfolio

Personal engineering portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

- **Positioning**: *"Software Engineer → AI/ML Engineer"*
- **Core Theme**: *"Understanding how things work"* — bridging ~3.5 years of production enterprise backend engineering (PKI, Spring Boot, Kubernetes) with foundational machine learning, PyTorch, and applied GenAI.

---

## 🚀 Quick Start (Running Locally)

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Production Static Build**:
   ```bash
   npm run build
   ```
   Outputs an optimized, pre-rendered static export to the `/out` directory.

---

## 📝 Where to Edit Content & Update Placeholders

All portfolio copy, project descriptions, pipeline stages, research details, and social links are centralized in a single configuration file:

📁 **[`src/data/content.ts`](./src/data/content.ts)**

### 1. Updating Social & Contact Info
Search for `contact` in `src/data/content.ts`:
- **Email**: Update `email` (default: `saaashish08@gmail.com`).
- **Phone**: Update `phone` and `displayPhone` (default: `+91 8072543573`).
- **GitHub**: Update `github` URL (default: `https://github.com/AashishStark`).
- **LinkedIn**: Replace the placeholder with your actual LinkedIn profile link:
  ```typescript
  linkedin: "https://linkedin.com/in/your-profile",
  isLinkedinPlaceholder: false,
  ```

### 2. Updating the Resume PDF
- Drop your updated resume PDF into the `/public` folder with the filename:
  ```
  public/Aashish S A Resume.pdf
  ```
- Any click on the **Download Resume** button in the Hero, Navbar, or Footer automatically serves this file.

### 3. Updating Research Papers
Search for `research` in `src/data/content.ts`:
- **Paper 1 (Plant Pathology)**: Linked to your GitHub repository.
- **Paper 2 (Vehicle Pollution Detection)**: When your publication link or DOI is published, set:
  ```typescript
  link: "https://doi.org/your-citation-link",
  linkText: "Read IEEE / Journal Publication",
  isPlaceholder: false,
  ```

### 4. Updating Planned Projects
When you build your planned projects (**Transformer from Scratch** or **Agentic RAG Evaluation**):
- Change `status: "Planned"` to `status: "Live"` or `status: "In Progress"`.
- Add your real `githubUrl`.
- Remove `isPlaceholder: true`.

---

## 🏗️ Architecture & Sections

The site implements the following 9 sections in exact order:
1. **Hero**: Name, role, positioning paragraph, theme banner, quick stat telemetry, and primary CTA buttons.
2. **Skills**: Two visually distinct tiers (**"Currently working with"** for production stack vs. **"Exploring"** for AI/ML stack) using tags/pills with zero skill-percentage bars.
3. **Featured Projects**: Ranked by AI-forward direction with status badges (`Live`, `In Progress`, `Planned`), interactive RAG pipeline visualizer, and an expandable system architecture deep dive modal.
4. **AI Lab**: Reverse-chronological engineering devlog entries explaining mechanical concepts (Cross-Attention, Causal Masking, NumPy Attention, BERT vs. GPT, Backpropagation) plus a direct link to the handwritten study notes dataset.
5. **Technical Journey**: 5-stage milestone path from Foundation to AI Engineering.
6. **About**: Career story at AppViewX, research background, engineering philosophy, and Mepco Schlenk IT education credentials.
7. **Research**: Applied ML papers table with takeaways and source code links.
8. **Beyond Code**: 3 cards connecting non-code passions (Books, Motorcycles, Travel) to the "Understanding how things work" theme.
9. **Contact & Footer**: 1-click email/phone copy buttons, GitHub profile, LinkedIn placeholder, and resume download.

---

## 🚢 Deployment

### Git Push
```bash
git add .
git commit -m "feat: portfolio site"
git push origin main
```

### Vercel Deployment
To deploy or update via Vercel CLI:
```bash
npx vercel --prod
```
Or connect your GitHub repository to Vercel for automatic continuous deployments on every `git push`.
