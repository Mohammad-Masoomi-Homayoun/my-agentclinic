import Link from "next/link";

export default function SiteMain({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-content">
      <aside className="site-sidebar">
        <p className="site-sidebar__label">Navigation</p>
        <nav className="site-sidebar__nav">
          <Link href="/agents" className="site-sidebar__link">
            All Agents
          </Link>
        </nav>
      </aside>
      <main className="site-main">{children}</main>
    </div>
  );
}
