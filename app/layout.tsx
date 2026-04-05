import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevMetrics — AI Developer Dashboard",
  description: "Real-time developer productivity dashboard with AI-powered insights. Built by Tsinat Shemels.",
  openGraph: {
    title: "DevMetrics",
    description: "AI-powered developer productivity dashboard",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
