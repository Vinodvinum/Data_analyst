import { Link, useLocation } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

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
              Home
            </Link>
            <Link className={pathname === "/guides" ? "active" : ""} to="/guides">
              All Guides
            </Link>
            <Link to="/guides/excel">Excel</Link>
            <Link to="/guides/sql">SQL</Link>
            <Link to="/guides/python">Python</Link>
            <Link to="/guides/powerbi">Power BI</Link>
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
