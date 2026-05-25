import type { Metadata } from "next";
import "./globals.css";
import "./components/layout/layout.css";
import SiteHeader from "./components/layout/SiteHeader";
import SiteMain from "./components/layout/SiteMain";
import SiteFooter from "./components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "AgentClinic",
  description: "Care platform for AI agents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="site-body">
        <SiteHeader />
        <SiteMain>{children}</SiteMain>
        <SiteFooter />
      </body>
    </html>
  );
}
