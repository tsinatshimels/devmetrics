import { TEAM_MEMBERS } from "@/lib/mockData";

export function TeamLeaderboard() {
  return (
    <div
      className="rounded-xl p-5 animate-fade-up"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        animationDelay: "0.3s",
      }}
    >
      {/* Header */}
      <div className="mb-5">
        <div className="font-display font-semibold text-[14px]" style={{ color: "var(--text)" }}>
          Team Leaderboard
        </div>
        <div className="text-[12px] mt-[2px]" style={{ color: "var(--text3)" }}>
          AI-scored productivity this week
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {["Member", "Commits", "Impact", "Score"].map((h) => (
              <th
                key={h}
                className="text-left text-[11px] font-medium pb-3 uppercase tracking-wider"
                style={{
                  color: "var(--text3)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TEAM_MEMBERS.map((m) => (
            <tr key={m.id}>
              {/* Member */}
              <td className="py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center justify-center rounded-full text-[10px] font-semibold text-white shrink-0"
                    style={{ width: 28, height: 28, background: m.avatarColor }}
                  >
                    {m.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium" style={{ color: "var(--text)" }}>
                      {m.name}
                    </div>
                    <div className="text-[11px]" style={{ color: "var(--text3)" }}>
                      {m.role}
                    </div>
                  </div>
                </div>
              </td>

              {/* Commits */}
              <td
                className="py-3 text-[13px]"
                style={{ color: "var(--text)", borderBottom: "1px solid var(--border)" }}
              >
                {m.commits}
              </td>

              {/* Impact bar */}
              <td className="py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                <div
                  className="rounded-full overflow-hidden"
                  style={{ height: 5, width: 80, background: "var(--surface2)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${m.impact}%`,
                      background: "linear-gradient(90deg,#a78bfa,#7c3aed)",
                    }}
                  />
                </div>
              </td>

              {/* Score */}
              <td className="py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                <span
                  className="font-display font-semibold text-[13px]"
                  style={{ color: "var(--purple-600)" }}
                >
                  {m.score}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
