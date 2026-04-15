import { Link } from "react-router-dom";

const guideCards = [
  {
    href: "/guides/excel-data-analysis-guide.html",
    icon: "Spreadsheet",
    title: "Excel Data Analysis",
    description: "Spreadsheet fundamentals, formulas, pivot workflows, and practical dataset walkthroughs.",
  },
  {
    href: "/guides/sql-data-analysis-guide.html",
    icon: "Database",
    title: "SQL Data Analysis",
    description: "Query fundamentals to advanced window functions, CTEs, and analytical patterns.",
  },
  {
    href: "/guides/python-data-analysis-guide.html",
    icon: "Python",
    title: "Python Data Analysis",
    description: "Pandas, NumPy, cleaning, grouping, visualization, and practical projects.",
  },
  {
    href: "/guides/powerbi-data-analysis-guide.html",
    icon: "Dashboard",
    title: "Power BI",
    description: "Power Query, data modeling, DAX, dashboard design, performance, and business projects.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero glass-panel">
        <p className="kicker">Production Ready</p>
        <h1>Data Analyst Hub</h1>
        <p className="hero-copy">
          This is now a real React application: reusable components, router-based pages,
          theme engine, and clean Vite tooling. No partial setup.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#guides-grid">
            Explore Guides
          </a>
          <a className="btn" href="/guides/excel-data-analysis-guide.html">
            Jump Into Excel Path
          </a>
        </div>
      </section>

      <section id="guides-grid" className="section">
        <div className="section-head">
          <h2>Guides</h2>
          <p>Four focused paths with concise references and practical examples.</p>
        </div>

        <div className="guide-grid">
          {guideCards.map((card) => (
            <article key={card.href} className="guide-card glass-panel">
              <p className="guide-icon">{card.icon}</p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a className="inline-link" href={card.href}>
                Open Guide
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Legacy Assets</h2>
          <p>
            Access your complete existing library including guide files, notebooks,
            outputs, notebook viewer, and web practice lab.
          </p>
        </div>

        <div className="guide-grid">
          <article className="guide-card glass-panel">
            <h3>All Guide Files</h3>
            <p>Browse every guide currently under the guides folder.</p>
            <Link className="inline-link" to="/guides">
              Open Guide Hub
            </Link>
          </article>

          <article className="guide-card glass-panel">
            <h3>Notebooks & Outputs</h3>
            <p>Open notebook files, rendered outputs, and launch notebook viewer.</p>
            <Link className="inline-link" to="/notebooks">
              Open Notebook Hub
            </Link>
          </article>

          <article className="guide-card glass-panel">
            <h3>Web Practice Lab</h3>
            <p>Launch the standalone web-practice-lab and additional tools.</p>
            <Link className="inline-link" to="/tools">
              Open Tools Hub
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
