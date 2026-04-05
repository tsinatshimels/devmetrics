export interface Member {
  id: string;
  name: string;
  initials: string;
  role: string;
  avatarColor: string;
  commits: number;
  impact: number;   // 0-100
  score: number;    // 0-100
}

export interface PRItem {
  id: number;
  title: string;
  author: string;
  branch: string;
  status: "open" | "review" | "merged" | "closed";
  timeAgo: string;
}

export interface ActivityItem {
  id: string;
  initials: string;
  name: string;
  action: string;
  target: string;
  timeAgo: string;
  tag?: "Merged" | "Open" | "Review";
  avatarColor: string;
}

export interface StatCard {
  label: string;
  value: string;
  change: string;
  direction: "up" | "down";
  iconColor: string;
  bgColor: string;
}

export interface DailyActivity {
  day: string;
  commits: number;
  prs: number;
}

export interface AIInsight {
  text: string;
  generatedAt: string;
}
