export default function ToolsPage() {
  const toolCards = [
    {
      title: "Notebook Viewer",
      description:
        "Loads notebooks and rendered notebook output from your public asset library.",
      href: "/notebook-viewer.html",
    },
    {
      title: "Web Practice Lab",
      description:
        "Open the interactive web practice environment from inside the React app context.",
      href: "/web-practice-lab.html",
    },
    {
      title: "CSV Viewer",
      description: "Inspect csv outputs quickly in-browser.",
      href: "/csv-viewer.html",
    },
  ];

  return (
    <section className="section">
      <div className="section-head">
        <p className="kicker">Tools</p>
        <h1>Viewers And Labs</h1>
        <p>Everything you listed is now reachable from dedicated routes and cards.</p>
      </div>

      <div className="guide-grid">
        {toolCards.map((tool) => (
          <article key={tool.title} className="guide-card glass-panel">
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
            <a className="inline-link" href={tool.href} target="_blank" rel="noreferrer">
              Open Tool
            </a>
          </article>
        ))}
      </div>

      <section className="single-panel glass-panel section">
        <h3>Embedded Web Practice Lab</h3>
        <p className="muted">
          Inline preview is available below. Use open tool for full-screen experience.
        </p>
        <iframe
          title="Web Practice Lab"
          src="/web-practice-lab.html"
          className="tool-frame"
        />
      </section>
    </section>
  );
}
