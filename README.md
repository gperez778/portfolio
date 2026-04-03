# George Perez — Portfolio

Next.js 14 rebuild of [gperezdesign.framer.website](https://gperezdesign.framer.website/), self-hostable on Vercel.

## Stack

- **Next.js 14** (App Router)
- **Framer Motion** — all animations
- **Tailwind CSS** — styling
- **TypeScript**

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, marquee, project grid |
| `/about` | About — bio, skills, experience |
| `/imvu-hashtags` | Case study: IMVU Hashtags Discover |
| `/ea-meta` | Case study: EA Design System |
| `/ea-help-center` | Case study: EA Help Center |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)

```bash
npm i -g vercel
vercel
```

Follow the prompts. Zero config required — `vercel.json` is included.

### Option 2 — Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy**

No environment variables are required.

## Customization

### Update project data
Edit `lib/projects.ts` to change project titles, descriptions, tags, and cover images.

### Update cover images
Replace the placeholder `coverImage` URLs in `lib/projects.ts` with real `framerusercontent.com` URLs from your Framer site (right-click images in Framer → Copy image address).

### Update resume link
In `app/about/page.tsx`, replace the `href` on the "View Resume" link with your actual Google Docs or PDF URL.

### Add new case study pages
1. Create `app/[your-slug]/page.tsx`
2. Use `<CaseStudyLayout>` from `components/CaseStudyLayout.tsx`
3. Add the project to `lib/projects.ts`

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, Navbar, PageTransition
│   ├── globals.css         # Global styles + Tailwind
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── imvu-hashtags/page.tsx
│   ├── ea-meta/page.tsx
│   └── ea-help-center/page.tsx
├── components/
│   ├── Navbar.tsx          # Fixed nav with blur
│   ├── Footer.tsx
│   ├── PageTransition.tsx  # AnimatePresence wrapper
│   ├── ScrollReveal.tsx    # Scroll-triggered fade-in
│   ├── ProjectCard.tsx     # Hover-animated project card
│   ├── MarqueeSection.tsx  # Dual horizontal ticker
│   └── CaseStudyLayout.tsx # Shared case study template
├── lib/
│   └── projects.ts         # All project data
├── next.config.ts
├── tailwind.config.ts
├── vercel.json
└── README.md
```
