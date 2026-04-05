import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar }  from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen" style={{ background: "var(--bg)" }}>
      <Sidebar />
      <div className="flex flex-col flex-1" style={{ marginLeft: 240 }}>
        <Topbar />
        <main className="flex-1 p-7">{children}</main>
      </div>
    </div>
  );
}
