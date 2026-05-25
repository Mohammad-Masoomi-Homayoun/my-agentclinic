import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            AgentClinic
          </Link>
          <nav className="flex gap-4 text-sm text-gray-600">
            <Link href="/agents" className="hover:text-gray-900 transition-colors">
              Agents
            </Link>
          </nav>
        </header>
        <div className="flex">
          <aside className="w-48 shrink-0 min-h-[calc(100vh-49px)] bg-white border-r border-gray-200 p-4">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              Navigation
            </p>
            <nav className="flex flex-col gap-1">
              <Link
                href="/agents"
                className="text-sm px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              >
                All Agents
              </Link>
            </nav>
          </aside>
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
