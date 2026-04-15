export default function LegacyHubPage() {
  return (
    <section className="section">
      <div className="section-head">
        <p className="kicker">Parity Hub</p>
        <h1>Complete Hub Content (74b286c Style)</h1>
        <p>
          This view preserves the full long-form hub content and links from your
          original index structure while still running under the React app.
        </p>
      </div>

      <article className="glass-panel content-panel">
        <div className="hero-actions">
          <a className="btn primary" href="/hub-74b286c.html" target="_blank" rel="noreferrer">
            Open Full Hub In New Tab
          </a>
          <a className="btn" href="/guides" >
            Open React Guides Hub
          </a>
          <a className="btn" href="/notebooks" >
            Open React Notebook Hub
          </a>
        </div>
        <p className="muted" style={{ marginTop: "0.8rem" }}>
          Embedded below: exact full-content hub page with all sections such as
          guides, learning path, master cheat sheets, notebooks, outputs, datasets,
          practice lab, and health check.
        </p>
      </article>

      <section className="section single-panel glass-panel">
        <iframe
          title="74b286c Hub Content"
          src="/hub-74b286c.html"
          className="tool-frame"
          style={{ minHeight: "1300px" }}
        />
      </section>
    </section>
  );
}
