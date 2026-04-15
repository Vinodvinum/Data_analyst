import { notebookFiles, outputFiles } from "../data/legacyCatalog";

function toLabel(file) {
  return file.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function NotebooksPage() {
  return (
    <section className="section">
      <div className="section-head">
        <p className="kicker">Notebook Assets</p>
        <h1>Notebooks And Outputs</h1>
        <p>Open notebooks, launch the viewer, and inspect generated output files.</p>
      </div>

      <div className="guide-layout">
        <article className="glass-panel content-panel">
          <h3>Notebook Files</h3>
          <ul className="asset-list">
            {notebookFiles.map((file) => (
              <li key={file}>
                <span>{toLabel(file)}</span>
                <a href={`/notebooks/${file}`} target="_blank" rel="noreferrer">
                  Open
                </a>
              </li>
            ))}
          </ul>
          <a className="inline-link" href="/notebook-viewer.html" target="_blank" rel="noreferrer">
            Open Notebook Viewer
          </a>
        </article>

        <aside className="glass-panel code-panel">
          <h3>Output Files</h3>
          <ul className="asset-list">
            {outputFiles.map((file) => (
              <li key={file}>
                <span>{toLabel(file)}</span>
                <a href={`/outputs/${file}`} target="_blank" rel="noreferrer">
                  Open
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
