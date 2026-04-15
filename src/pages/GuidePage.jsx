import { Link, useParams } from "react-router-dom";

const guideContent = {
  excel: {
    title: "Excel Mastery",
    subtitle: "Formulas, pivots, and analyst workflows",
    sections: [
      {
        title: "Essential Formulas",
        bullets: [
          "SUMIFS for multi-condition totals",
          "XLOOKUP for robust lookups",
          "IFERROR to keep outputs presentation-ready",
        ],
      },
      {
        title: "Pivot Patterns",
        bullets: [
          "Use clean headers and table ranges before creating pivots",
          "Build one metric per Values field for clarity",
          "Use slicers for executive-friendly filtering",
        ],
      },
    ],
    snippets: [
      "=SUMIFS(Sales[Amount], Sales[Region], \"West\", Sales[Month], \"Jan\")",
      "=XLOOKUP(A2, Customers[ID], Customers[Tier], \"Not Found\")",
    ],
  },
  sql: {
    title: "SQL Mastery",
    subtitle: "From joins to windows",
    sections: [
      {
        title: "Core Query Rules",
        bullets: [
          "Filter early in WHERE before aggregation",
          "Aggregate with GROUP BY and HAVING for group filters",
          "Use CTEs to make complex logic readable",
        ],
      },
      {
        title: "Window Use Cases",
        bullets: [
          "RANK to identify top performers by partition",
          "LAG to compare period-over-period change",
          "SUM OVER for running totals without collapsing rows",
        ],
      },
    ],
    snippets: [
      "SELECT region, SUM(amount) AS revenue FROM sales GROUP BY region;",
      "SELECT customer_id, amount, RANK() OVER (PARTITION BY region ORDER BY amount DESC) AS rk FROM sales;",
    ],
  },
  python: {
    title: "Python Mastery",
    subtitle: "Pandas-first practical analytics",
    sections: [
      {
        title: "Data Preparation",
        bullets: [
          "Read with explicit dtypes when possible",
          "Handle missing values using domain-aware rules",
          "Use method chaining for transparent transformations",
        ],
      },
      {
        title: "Analysis Workflow",
        bullets: [
          "Start with quick profiling on shape and nulls",
          "Use groupby for metric tables",
          "Output final tables to CSV/Excel for stakeholders",
        ],
      },
    ],
    snippets: [
      "df = pd.read_csv('sales.csv')",
      "summary = df.groupby('region', as_index=False)['amount'].sum()",
    ],
  },
  powerbi: {
    title: "Power BI Mastery",
    subtitle: "DAX, model quality, storytelling",
    sections: [
      {
        title: "Modeling",
        bullets: [
          "Build a star schema with one fact and clear dimensions",
          "Set relationships explicitly and avoid ambiguity",
          "Hide technical columns from report view",
        ],
      },
      {
        title: "DAX Essentials",
        bullets: [
          "Start with base measures before composite measures",
          "Use CALCULATE to control filter context intentionally",
          "Use DIVIDE for safe ratio metrics",
        ],
      },
    ],
    snippets: [
      "Sales Amount = SUM(Sales[Amount])",
      "Sales YTD = TOTALYTD([Sales Amount], 'Date'[Date])",
    ],
  },
};

export default function GuidePage() {
  const { slug = "" } = useParams();
  const guide = guideContent[slug];

  if (!guide) {
    return (
      <section className="glass-panel section single-panel">
        <h2>Guide Not Found</h2>
        <p>The requested guide path does not exist.</p>
        <Link className="inline-link" to="/">
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-head">
        <p className="kicker">Guide</p>
        <h1>{guide.title}</h1>
        <p>{guide.subtitle}</p>
      </div>

      <div className="guide-layout">
        <article className="glass-panel content-panel">
          {guide.sections.map((section) => (
            <div key={section.title} className="content-block">
              <h3>{section.title}</h3>
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>

        <aside className="glass-panel code-panel">
          <h3>Quick Snippets</h3>
          {guide.snippets.map((code) => (
            <pre key={code}>
              <code>{code}</code>
            </pre>
          ))}
          <Link className="inline-link" to="/">
            Back to Home
          </Link>
        </aside>
      </div>
    </section>
  );
}
