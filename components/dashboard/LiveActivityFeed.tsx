"use client";
import { ACTIVITY_FEED } from "@/lib/mockData";
import type { ActivityItem } from "@/types";

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  Merged: { bg: "#d1fae5", color: "#065f46" },
  Open:   { bg: "#ede9fe", color: "#6d28d9" },
  Review: { bg: "#fef3c7", color: "#92400e" },
};

function ActivityRow({ item }: { item: ActivityItem }) {
  return (
    <div
      className="flex items-start gap-3 py-[11px]"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      {/* Avatar */}
      <div
        className="flex items-center justify-center rounded-full text-[11px] font-semibold text-white shrink-0"
        style={{ width: 30, height: 30, background: item.avatarColor }}
      >
        {item.initials}
      </div>

      {/* Body */}
      <div className="flex-1 min-w-0">
        <p className="text-[13px] leading-[1.4]" style={{ color: "var(--text)" }}>
          <strong className="font-medium">{item.name}</strong>{" "}
          {item.action} {item.target}
        </p>
        <p className="text-[11px] mt-[2px]" style={{ color: "var(--text3)" }}>
          {item.timeAgo}
        </p>
      </div>

      {/* Tag */}
      {item.tag && (
        <span
          className="text-[11px] font-medium px-2 py-[2px] rounded-[6px] shrink-0 mt-[2px]"
          style={TAG_STYLES[item.tag]}
        >
          {item.tag}
        </span>
      )}
    </div>
  );
}

export function LiveActivityFeed() {
  return (
    <div
      className="rounded-xl p-5 animate-fade-up"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        animationDelay: "0.28s",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="font-display font-semibold text-[14px]" style={{ color: "var(--text)" }}>
            Live Activity
          </div>
          <div className="text-[12px] mt-[2px]" style={{ color: "var(--text3)" }}>
            Real-time team feed
          </div>
        </div>
        <button
          className="text-[12px] px-3 py-[5px] rounded-lg transition-colors"
          style={{
            background: "transparent",
            border: "1px solid var(--border)",
            color: "var(--text2)",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          All
        </button>
      </div>

      {/* Feed */}
      <div>
        {ACTIVITY_FEED.map((item, i) => (
          <div
            key={item.id}
            style={i === ACTIVITY_FEED.length - 1 ? { borderBottom: "none" } : {}}
          >
            <ActivityRow item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
