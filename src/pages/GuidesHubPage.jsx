import { guideFiles } from "../data/legacyCatalog";

function toLabel(file) {
  return file
    .replace(/\.html$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function GuidesHubPage() {
  return (
    <section className="section">
      <div className="section-head">
        <p className="kicker">Legacy Library</p>
        <h1>All Guides</h1>
        <p>These are your original guide files, now integrated and accessible from React.</p>
      </div>

      <div className="guide-grid">
        {guideFiles.map((file) => (
          <article key={file} className="guide-card glass-panel">
            <h3>{toLabel(file)}</h3>
            <p className="muted">{file}</p>
            <a className="inline-link" href={`/guides/${file}`} target="_blank" rel="noreferrer">
              Open Guide File
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
