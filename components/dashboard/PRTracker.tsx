import { PULL_REQUESTS } from "@/lib/mockData";
import type { PRItem } from "@/types";

const STATUS_STYLES: Record<
  PRItem["status"],
  { dot: string; badge: string; text: string; label: string }
> = {
  open:   { dot: "#8b5cf6", badge: "#ede9fe", text: "#6d28d9", label: "Open" },
  review: { dot: "#f59e0b", badge: "#fef3c7", text: "#92400e", label: "In Review" },
  merged: { dot: "#10b981", badge: "#d1fae5", text: "#065f46", label: "Merged" },
  closed: { dot: "#f43f5e", badge: "#fee2e2", text: "#991b1b", label: "Closed" },
};

export function PRTracker() {
  return (
    <div
      className="rounded-xl p-5 animate-fade-up"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        animationDelay: "0.33s",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="font-display font-semibold text-[14px]" style={{ color: "var(--text)" }}>
            Pull Requests
          </div>
          <div className="text-[12px] mt-[2px]" style={{ color: "var(--text3)" }}>
            Active across all repos
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
          View All
        </button>
      </div>

      {/* List */}
      <div>
        {PULL_REQUESTS.map((pr, i) => {
          const s = STATUS_STYLES[pr.status];
          const isLast = i === PULL_REQUESTS.length - 1;
          return (
            <div
              key={pr.id}
              className="flex items-center gap-3 py-3"
              style={!isLast ? { borderBottom: "1px solid var(--border)" } : {}}
            >
              {/* Status dot */}
              <div
                className="rounded-full shrink-0"
                style={{ width: 8, height: 8, background: s.dot }}
              />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div
                  className="text-[13px] truncate"
                  style={{ color: "var(--text)" }}
                >
                  #{pr.id} — {pr.title}
                </div>
                <div className="text-[11px] mt-[2px]" style={{ color: "var(--text3)" }}>
                  {pr.author} · main ← {pr.branch} · {pr.timeAgo}
                </div>
              </div>

              {/* Badge */}
              <span
                className="text-[11px] font-medium px-2 py-[2px] rounded-[6px] shrink-0"
                style={{ background: s.badge, color: s.text }}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
