import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-header__logo">
        AgentClinic
      </Link>
      <nav className="site-header__nav">
        <Link href="/agents">Agents</Link>
      </nav>
    </header>
  );
}
