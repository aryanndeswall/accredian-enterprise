# Accredian Enterprise 

A production-grade, internship-level clone of [enterprise.accredian.com](https://enterprise.accredian.com) built with Next.js 16 App Router, Tailwind CSS v4, shadcn/ui, and Framer Motion.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, JS) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| DB / API | Supabase (PostgreSQL) |
| Theme | next-themes (dark mode) |
| Toasts | Sonner |

---

## Features

- **Sticky Navbar** — transparent over hero, frosted glass on scroll, mobile sheet drawer
- **Scroll Progress Bar** — fixed top bar driven by Framer Motion `useScroll`
- **Dark Mode** — full system/manual toggle via next-themes
- **Hero** — full-screen dark gradient with animated dashboard card and floating notification
- **Animated Counters** — `requestAnimationFrame` ease-out counters trigger on scroll into view
- **Marquee Partners** — infinite CSS scroll with hover-pause, gradient edge masks
- **Lead Form** — Zod-validated, POST `/api/lead` → Supabase `leads` table, toast on success
- **11 Sections** — Stats, Partners, Benefits, Domains, Solutions, HowItWorks, Testimonials, FAQ, LeadForm, Footer

---

## Getting Started

### 1. Clone & install

```bash
git clone <repo-url>
cd accredian-enterprise
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Fill in your Supabase credentials in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

> Without these set, the API route logs leads to the console instead — safe for local dev.

### 3. Create the Supabase table

Run this SQL in your Supabase SQL editor:

```sql
create table leads (
  id          uuid        default gen_random_uuid() primary key,
  name        text        not null,
  email       text        not null,
  phone       text        not null,
  company     text        not null,
  message     text,
  created_at  timestamptz default now()
);

alter table leads enable row level security;

create policy "Service role can insert"
  on leads for insert
  with check (true);
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add env vars (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`) in project settings
4. Deploy — zero config needed

---

## Project Structure

```
accredian-enterprise/
├── app/
│   ├── api/lead/route.js     # POST /api/lead → Supabase
│   ├── globals.css           # Tailwind v4 theme + marquee keyframes
│   ├── layout.js             # Root layout with ThemeProvider + Toaster
│   └── page.js               # Page assembly (all 11 sections)
├── components/
│   ├── Navbar.jsx            # Sticky, frosted glass, mobile sheet
│   ├── Hero.jsx              # Full-screen dark hero + animated card
│   ├── Stats.jsx             # Animated counters
│   ├── Partners.jsx          # Infinite marquee
│   ├── Benefits.jsx          # 6 benefit cards
│   ├── Domains.jsx           # 7 domain cards
│   ├── Solutions.jsx         # 4 program type cards
│   ├── HowItWorks.jsx        # 3-step timeline
│   ├── Testimonials.jsx      # 3 client testimonials
│   ├── FAQ.jsx               # Accordion FAQ
│   ├── LeadForm.jsx          # Split-layout form → /api/lead
│   ├── Footer.jsx            # Multi-column footer + CTA banner
│   ├── ScrollProgress.jsx    # Fixed scroll progress bar
│   ├── ThemeProvider.jsx     # next-themes wrapper
│   └── ThemeToggle.jsx       # Sun/moon toggle button
└── lib/
    └── supabase.js           # Supabase client singleton
```
