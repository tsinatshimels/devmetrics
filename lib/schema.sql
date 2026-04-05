-- ─────────────────────────────────────────
-- DevMetrics — Supabase Schema
-- Run this in your Supabase SQL Editor
-- ─────────────────────────────────────────

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ── Members ──────────────────────────────
create table if not exists members (
  id            uuid primary key default uuid_generate_v4(),
  name          text not null,
  initials      text not null,
  role          text not null,
  avatar_color  text not null,
  github_handle text,
  created_at    timestamptz default now()
);

-- ── Commits ──────────────────────────────
create table if not exists commits (
  id          uuid primary key default uuid_generate_v4(),
  member_id   uuid references members(id) on delete cascade,
  repo        text not null,
  message     text,
  sha         text,
  committed_at timestamptz default now()
);

-- ── Pull Requests ─────────────────────────
create table if not exists pull_requests (
  id           uuid primary key default uuid_generate_v4(),
  pr_number    integer not null,
  title        text not null,
  member_id    uuid references members(id) on delete cascade,
  branch       text not null,
  base_branch  text not null default 'main',
  status       text check (status in ('open','review','merged','closed')) default 'open',
  repo         text not null,
  created_at   timestamptz default now(),
  updated_at   timestamptz default now()
);

-- ── Daily Activity ────────────────────────
create table if not exists daily_activity (
  id         uuid primary key default uuid_generate_v4(),
  day        date not null,
  commits    integer default 0,
  prs        integer default 0,
  created_at timestamptz default now(),
  unique(day)
);

-- ── Seed sample data ──────────────────────
insert into members (name, initials, role, avatar_color, github_handle) values
  ('Alex L.',   'AL', 'Frontend', 'linear-gradient(135deg,#8b5cf6,#6d28d9)', 'alexl'),
  ('Sam A.',    'SA', 'Backend',  'linear-gradient(135deg,#10b981,#059669)', 'sama'),
  ('Maria R.',  'MR', 'Fullstack','linear-gradient(135deg,#f59e0b,#d97706)', 'mariar'),
  ('Jordan K.', 'JK', 'Frontend', 'linear-gradient(135deg,#3b82f6,#1d4ed8)', 'jordank');

insert into daily_activity (day, commits, prs) values
  (current_date - 6, 55, 30),
  (current_date - 5, 70, 40),
  (current_date - 4, 45, 25),
  (current_date - 3, 85, 55),
  (current_date - 2, 60, 35),
  (current_date - 1, 95, 65),
  (current_date,     78, 48);

-- Row Level Security (optional — enable for auth)
-- alter table members        enable row level security;
-- alter table commits        enable row level security;
-- alter table pull_requests  enable row level security;
-- alter table daily_activity enable row level security;
