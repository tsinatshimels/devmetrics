import { AIInsightBanner }  from "@/components/dashboard/AIInsightBanner";
import { StatsGrid }        from "@/components/dashboard/StatsGrid";
import { ActivityChart }    from "@/components/dashboard/ActivityChart";
import { LiveActivityFeed } from "@/components/dashboard/LiveActivityFeed";
import { TeamLeaderboard }  from "@/components/dashboard/TeamLeaderboard";
import { PRTracker }        from "@/components/dashboard/PRTracker";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <AIInsightBanner />
      <StatsGrid />

      {/* Mid row */}
      <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 340px" }}>
        <ActivityChart />
        <LiveActivityFeed />
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-2 gap-4">
        <TeamLeaderboard />
        <PRTracker />
      </div>
    </div>
  );
}
