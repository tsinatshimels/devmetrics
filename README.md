# ⚡ DevMetrics — AI Developer Productivity Dashboard

> A real-time SaaS dashboard for engineering teams with AI-powered insights, built with Next.js 14, Supabase, and OpenAI.

![DevMetrics Dashboard](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

---

## ✨ Features

- **AI Insight Banner** — GPT-4o-mini analyzes team metrics and surfaces actionable insights in real time
- **Live Activity Feed** — Real-time stream of commits, PR merges, and code reviews
- **Commit & PR Chart** — Interactive bar chart (Recharts) showing 7-day activity trends
- **Team Leaderboard** — AI-scored productivity rankings with impact progress bars
- **PR Tracker** — Full pull request status board with merge/review/blocked states
- **Stat Cards** — Animated KPI cards with sparklines and week-over-week change indicators
- **Sticky Topbar** — Blurred glass topbar with time-range tabs and notification bell
- **Responsive Sidebar** — Collapsible nav with active route highlighting

---

## 🛠 Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Framework  | Next.js 14 (App Router)              |
| Language   | TypeScript                           |
| Styling    | Tailwind CSS + CSS Variables         |
| Charts     | Recharts                             |
| Animation  | Framer Motion                        |
| Database   | Supabase (PostgreSQL)                |
| Auth       | Supabase Auth                        |
| AI         | OpenAI GPT-4o-mini                   |
| Deployment | Vercel                               |
| Icons      | Lucide React                         |
| State      | React hooks (useState, useEffect)    |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/tsinatshemels/devmetrics.git
cd devmetrics
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Fill in your keys in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
OPENAI_API_KEY=your_openai_key
```

### 4. Set up the database

- Go to your [Supabase](https://supabase.com) project → SQL Editor
- Run the contents of `lib/schema.sql`
- This creates tables + seeds sample data

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/dashboard`.

---

## 📁 Project Structure

```
devmetrics/
├── app/
│   ├── dashboard/          # Main dashboard page
│   ├── analytics/          # Analytics page
│   ├── members/            # Team members
│   ├── pull-requests/      # PR tracker
│   ├── ai-insights/        # AI insights hub
│   ├── api/
│   │   └── insights/       # POST /api/insights — OpenAI route
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   └── Topbar.tsx
│   └── dashboard/
│       ├── AIInsightBanner.tsx
│       ├── StatsGrid.tsx
│       ├── ActivityChart.tsx
│       ├── LiveActivityFeed.tsx
│       ├── TeamLeaderboard.tsx
│       └── PRTracker.tsx
├── lib/
│   ├── mockData.ts          # Swap with Supabase queries
│   ├── supabase.ts          # Supabase client
│   ├── schema.sql           # DB schema + seed data
│   └── utils.ts             # cn() helper
├── types/
│   └── index.ts             # Shared TypeScript types
└── .env.local.example
```

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**.

---

## 🔮 Roadmap

- [ ] GitHub OAuth integration (pull live commit/PR data)
- [ ] Real-time updates via Supabase Realtime subscriptions
- [ ] Email/Slack notifications for blockers
- [ ] Per-repository drill-down views
- [ ] Dark mode toggle

---

## 👩‍💻 Author

**Tsinat Shemels** — [@tsinatshemels](https://github.com/tsinatshemels)

---

## 📄 License

MIT — feel free to use this as inspiration for your own projects.
