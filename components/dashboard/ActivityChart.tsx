"use client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { DAILY_ACTIVITY } from "@/lib/mockData";

export function ActivityChart() {
  return (
    <div
      className="rounded-xl p-5 animate-fade-up"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        animationDelay: "0.25s",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div
            className="font-display font-semibold text-[14px]"
            style={{ color: "var(--text)" }}
          >
            Commit & PR Activity
          </div>
          <div className="text-[12px] mt-[2px]" style={{ color: "var(--text3)" }}>
            Last 7 days across all repositories
          </div>
        </div>
        <div className="flex items-center gap-4">
          {[
            { color: "#8b5cf6", label: "Commits" },
            { color: "#ddd6fe", label: "PRs" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div
                className="rounded-[2px]"
                style={{ width: 8, height: 8, background: l.color }}
              />
              <span className="text-[12px]" style={{ color: "var(--text2)" }}>
                {l.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={DAILY_ACTIVITY}
          barCategoryGap="25%"
          barGap={4}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="var(--border)"
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "var(--text3)", fontFamily: "DM Sans" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "var(--text3)", fontFamily: "DM Sans" }}
            width={28}
          />
          <Tooltip
            contentStyle={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              fontSize: 12,
              fontFamily: "DM Sans",
              color: "var(--text)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
            cursor={{ fill: "rgba(139,92,246,0.04)" }}
          />
          <Bar dataKey="commits" name="Commits" fill="#8b5cf6" radius={[5, 5, 0, 0]} />
          <Bar dataKey="prs"     name="PRs"     fill="#ddd6fe" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
