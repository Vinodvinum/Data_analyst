export default function LegacyHubPage() {
  return (
    <section className="section-stack">
      <div className="section-head">
        <div className="eyebrow">Legacy Access</div>
        <h1>The older hub is still here when you need it.</h1>
        <p>Use this page for backward compatibility, but the new roadmap is the easier place to start.</p>
      </div>

      <div className="action-row">
        <a className="button button-primary" href="/hub-74b286c.html" target="_blank" rel="noreferrer">
          Open legacy hub
        </a>
        <a className="button" href="/">
          Back to the new roadmap
        </a>
      </div>

      <section className="preview-panel">
        <iframe
          title="Legacy hub preview"
          src="/hub-74b286c.html"
          className="tool-frame tool-frame-tall"
        />
      </section>
    </section>
  );
}
