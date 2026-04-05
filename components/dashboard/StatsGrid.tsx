"use client";
import { TrendingUp, TrendingDown, GitCommit, GitPullRequest, CheckCircle, AlertCircle } from "lucide-react";
import { STATS } from "@/lib/mockData";

const ICONS = [GitCommit, GitPullRequest, CheckCircle, AlertCircle];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {STATS.map((stat, i) => {
        const Icon = ICONS[i];
        const delay = `${(i + 1) * 0.05}s`;
        return (
          <div
            key={stat.label}
            className="rounded-xl p-5 relative overflow-hidden cursor-default transition-all animate-fade-up"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              animationDelay: delay,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(139,92,246,0.1)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {/* Icon */}
            <div
              className="flex items-center justify-center rounded-xl mb-4"
              style={{ width: 36, height: 36, background: stat.bgColor }}
            >
              <Icon size={18} color={stat.iconColor} />
            </div>

            {/* Value */}
            <div
              className="font-display font-bold text-[26px] tracking-tight mb-[2px]"
              style={{ color: "var(--text)" }}
            >
              {stat.value}
            </div>
            <div className="text-[12.5px] mb-3" style={{ color: "var(--text3)" }}>
              {stat.label}
            </div>

            {/* Change badge */}
            <span
              className="inline-flex items-center gap-1 text-[12px] font-medium px-2 py-[2px] rounded-full"
              style={{
                background: stat.direction === "up" ? "#dcfce7" : "#ffe4e6",
                color: stat.direction === "up" ? "#15803d" : "#be123c",
              }}
            >
              {stat.direction === "up"
                ? <TrendingUp size={11} />
                : <TrendingDown size={11} />}
              {stat.change}
            </span>

            {/* Sparkline decoration */}
            <svg
              className="absolute bottom-0 right-0 opacity-10"
              width="80" height="40" viewBox="0 0 80 40"
            >
              <polyline
                points="0,35 15,28 30,20 45,25 60,12 80,5"
                fill="none"
                stroke={stat.iconColor}
                strokeWidth="2.5"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
