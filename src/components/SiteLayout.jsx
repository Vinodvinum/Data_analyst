import { Link, useLocation } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const canonicalGuideLinks = {
  excel: "/guides/excel-data-analysis-guide.html",
  sql: "/guides/sql-data-analysis-guide.html",
  python: "/guides/python-data-analysis-guide.html",
  powerbi: "/guides/powerbi-data-analysis-guide.html",
};

export default function SiteLayout({ children, themeContext }) {
  const { pathname } = useLocation();

  return (
    <div className="app-shell">
      <div className="bg-orb bg-orb-a" />
      <div className="bg-orb bg-orb-b" />
      <div className="bg-orb bg-orb-c" />

      <header className="topbar glass-panel">
        <div className="container topbar-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">DataHub</span>
            <span className="brand-sub">React Edition</span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            <Link className={pathname === "/" ? "active" : ""} to="/">
              Full Hub
            </Link>
            <Link className={pathname === "/react-home" ? "active" : ""} to="/react-home">
              React Home
            </Link>
            <Link className={pathname === "/guides" ? "active" : ""} to="/guides">
              All Guides
            </Link>
            <a href={canonicalGuideLinks.excel}>Excel</a>
            <a href={canonicalGuideLinks.sql}>SQL</a>
            <a href={canonicalGuideLinks.python}>Python</a>
            <a href={canonicalGuideLinks.powerbi}>Power BI</a>
            <Link className={pathname === "/notebooks" ? "active" : ""} to="/notebooks">
              Notebooks
            </Link>
            <Link className={pathname === "/tools" ? "active" : ""} to="/tools">
              Tools
            </Link>
          </nav>
        </div>
      </header>

      <main className="container main-content">{children}</main>

      <footer className="container footer">
        <p>Built as a proper Vite + React application with reusable components and routing.</p>
      </footer>

      <ThemeSwitcher themeContext={themeContext} />
    </div>
  );
}
