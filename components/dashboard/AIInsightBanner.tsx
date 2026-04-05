"use client";
import { useState } from "react";
import { Brain } from "lucide-react";

const INSIGHTS = [
  "Your team's velocity increased 23% this week. Alex has the highest PR merge rate. Consider assigning complex features to her. 3 PRs are blocked — review recommended.",
  "Code review turnaround dropped 18% — most reviews are pending >24h. Consider setting a team SLA of 4 hours for PR reviews.",
  "Sam pushed the most commits this week but has 0 merged PRs. Check if there are blockers on the review side.",
];

export function AIInsightBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [idx, setIdx] = useState(0);

  if (dismissed) return null;

  return (
    <div
      className="flex items-center gap-5 rounded-2xl px-6 py-5 relative overflow-hidden animate-fade-up"
      style={{
        background: "linear-gradient(135deg,#7c3aed 0%,#5b21b6 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: -40, right: -40, width: 180, height: 180,
          background: "rgba(255,255,255,0.05)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: -60, right: 60, width: 120, height: 120,
          background: "rgba(255,255,255,0.04)",
        }}
      />

      {/* Icon */}
      <div
        className="flex items-center justify-center rounded-xl shrink-0"
        style={{
          width: 44, height: 44,
          background: "rgba(255,255,255,0.15)",
        }}
      >
        <Brain size={22} color="white" />
      </div>

      {/* Text */}
      <div className="flex-1">
        <div
          className="text-[11px] font-medium uppercase tracking-widest mb-1"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          AI Insight · Just now
        </div>
        <p className="text-[14px] text-white leading-relaxed">
          {INSIGHTS[idx]}
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 shrink-0">
        <button
          onClick={() => setIdx((i) => (i + 1) % INSIGHTS.length)}
          className="px-4 py-[7px] rounded-lg text-[12px] font-medium transition-opacity hover:opacity-80"
          style={{
            background: "white",
            color: "#6d28d9",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Next Insight
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="px-4 py-[7px] rounded-lg text-[12px] font-medium text-white transition-opacity hover:opacity-80"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
