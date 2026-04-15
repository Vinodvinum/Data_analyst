import { Link } from "react-router-dom";

const guideCards = [
  {
    slug: "excel",
    icon: "Spreadsheet",
    title: "Excel Mastery",
    description: "Formulas, pivot tables, cleaning workflows, and fast analyst shortcuts.",
  },
  {
    slug: "sql",
    icon: "Database",
    title: "SQL Mastery",
    description: "Joins, aggregation, window functions, and interview-style query drills.",
  },
  {
    slug: "python",
    icon: "Python",
    title: "Python Mastery",
    description: "Pandas, NumPy, and practical scripts for day-to-day analytics.",
  },
  {
    slug: "powerbi",
    icon: "Dashboard",
    title: "Power BI Mastery",
    description: "DAX, model design, and storytelling dashboards for business impact.",
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
          <Link className="btn" to="/guides/excel">
            Jump Into Excel Path
          </Link>
        </div>
      </section>

      <section id="guides-grid" className="section">
        <div className="section-head">
          <h2>Guides</h2>
          <p>Four focused paths with concise references and practical examples.</p>
        </div>

        <div className="guide-grid">
          {guideCards.map((card) => (
            <article key={card.slug} className="guide-card glass-panel">
              <p className="guide-icon">{card.icon}</p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link className="inline-link" to={`/guides/${card.slug}`}>
                Open Guide
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
