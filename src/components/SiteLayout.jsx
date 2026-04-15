import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Start Here", end: true },
  { to: "/guides", label: "Guides" },
  { to: "/notebooks", label: "Notebooks" },
  { to: "/tools", label: "Practice Tools" },
  { to: "/legacy", label: "Legacy Hub" },
];

export default function SiteLayout({ children }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <NavLink to="/" end className="brand">
            <span className="brand-mark">Data Analyst Roadmap</span>
            <span className="brand-sub">Simple steps from beginner to job-ready</span>
          </NavLink>

          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="container main-content">{children}</main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Start with the first track, practice on the datasets, then move into projects and interview prep.</p>
        </div>
      </footer>
    </div>
  );
}
