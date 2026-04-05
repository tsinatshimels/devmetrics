"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, TrendingUp, Clock, Users, Github,
  GitPullRequest, Sparkles, BarChart2, Settings, Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  {
    label: "Overview",
    items: [
      { icon: LayoutDashboard, label: "Dashboard",    href: "/dashboard" },
      { icon: TrendingUp,      label: "Analytics",    href: "/analytics",     badge: "New" },
      { icon: Clock,           label: "Activity",     href: "/activity" },
    ],
  },
  {
    label: "Team",
    items: [
      { icon: Users,          label: "Members",       href: "/members" },
      { icon: Github,         label: "Repositories",  href: "/repositories" },
      { icon: GitPullRequest, label: "Pull Requests", href: "/pull-requests" },
    ],
  },
  {
    label: "AI Tools",
    items: [
      { icon: Sparkles,  label: "AI Insights", href: "/ai-insights" },
      { icon: BarChart2, label: "Reports",     href: "/reports" },
    ],
  },
  {
    label: "Settings",
    items: [
      { icon: Settings, label: "Settings", href: "/settings" },
    ],
  },
];

export function Sidebar() {
  const path = usePathname();

  return (
    <aside
      className="fixed top-0 left-0 bottom-0 flex flex-col pb-6"
      style={{
        width: 240,
        background: "var(--surface)",
        borderRight: "1px solid var(--border)",
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3 px-5 py-5"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div
          className="flex items-center justify-center rounded-xl"
          style={{
            width: 34, height: 34,
            background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
          }}
        >
          <Zap size={16} color="white" fill="white" />
        </div>
        <span
          className="font-display font-bold text-[17px] tracking-tight"
          style={{ color: "var(--text)" }}
        >
          Dev<span style={{ color: "var(--purple-500)" }}>Metrics</span>
        </span>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto px-3 pt-3">
        {NAV.map((section) => (
          <div key={section.label} className="mb-1">
            <div
              className="px-2 mb-2 mt-4 text-[10px] font-medium uppercase tracking-widest"
              style={{ color: "var(--text3)" }}
            >
              {section.label}
            </div>
            {section.items.map((item) => {
              const active = path === item.href || path.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-[9px] rounded-xl mb-[2px] text-[13.5px] transition-all",
                    active
                      ? "font-medium"
                      : "font-normal hover:opacity-90"
                  )}
                  style={{
                    background: active ? "var(--purple-100)" : "transparent",
                    color: active ? "var(--purple-700)" : "var(--text2)",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.background = "var(--surface2)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <item.icon size={16} style={{ opacity: active ? 1 : 0.7, flexShrink: 0 }} />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span
                      className="text-[10px] font-semibold px-2 py-[2px] rounded-full"
                      style={{ background: "var(--purple-500)", color: "white" }}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* User card */}
      <div className="px-3">
        <div
          className="flex items-center gap-3 p-3 rounded-xl cursor-pointer"
          style={{ background: "var(--surface2)" }}
        >
          <div
            className="flex items-center justify-center rounded-full font-display font-bold text-[13px] text-white shrink-0"
            style={{
              width: 34, height: 34,
              background: "linear-gradient(135deg,#a78bfa,#7c3aed)",
            }}
          >
            TS
          </div>
          <div className="flex-1 min-w-0">
            <div
              className="text-[13px] font-medium truncate"
              style={{ color: "var(--text)" }}
            >
              Tsinat Shemels
            </div>
            <div className="text-[11px]" style={{ color: "var(--text3)" }}>
              Senior Developer
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
