"use client";
import { useState } from "react";
import { Search, Bell, Sparkles } from "lucide-react";

const TABS = ["Week", "Month", "Quarter"] as const;

export function Topbar() {
  const [active, setActive] = useState<(typeof TABS)[number]>("Week");

  return (
    <header
      className="flex items-center gap-3 px-7 py-[14px] sticky top-0 z-50"
      style={{
        background: "rgba(250,249,255,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Page title */}
      <h1
        className="flex-1 font-display font-bold text-[17px] tracking-tight"
        style={{ color: "var(--text)" }}
      >
        Dashboard
      </h1>

      {/* Search */}
      <div
        className="flex items-center gap-2 px-3 py-[7px] rounded-xl text-[13px]"
        style={{
          background: "var(--surface2)",
          border: "1px solid var(--border)",
          color: "var(--text3)",
          width: 220,
          cursor: "text",
        }}
      >
        <Search size={14} />
        <span>Search anything…</span>
      </div>

      {/* Tabs */}
      <div
        className="flex gap-1 rounded-xl p-[3px]"
        style={{ background: "var(--surface2)" }}
      >
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className="px-3 py-1 rounded-[7px] text-[12px] transition-all"
            style={{
              background: active === t ? "var(--surface)" : "transparent",
              color: active === t ? "var(--text)" : "var(--text3)",
              fontWeight: active === t ? 500 : 400,
              boxShadow: active === t ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Notification bell */}
      <div
        className="relative flex items-center justify-center rounded-xl cursor-pointer"
        style={{
          width: 36, height: 36,
          background: "var(--surface2)",
          border: "1px solid var(--border)",
        }}
      >
        <Bell size={16} style={{ color: "var(--text2)" }} />
        <div
          className="absolute rounded-full border-2"
          style={{
            top: 6, right: 6,
            width: 7, height: 7,
            background: "var(--purple-500)",
            borderColor: "var(--bg)",
          }}
        />
      </div>

      {/* AI Report button */}
      <button
        className="flex items-center gap-2 px-4 py-[9px] rounded-xl text-[13px] font-medium text-white transition-all"
        style={{
          background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
          boxShadow: "0 2px 8px rgba(124,58,237,0.25)",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(124,58,237,0.35)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(124,58,237,0.25)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        <Sparkles size={14} />
        AI Report
      </button>
    </header>
  );
}
