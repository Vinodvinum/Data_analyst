import { notebookFiles, outputFiles } from "../data/legacyCatalog";
import { useEffect, useMemo, useState } from "react";

function toLabel(file) {
  return file.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function NotebooksPage() {
  const [selectedNotebook, setSelectedNotebook] = useState(notebookFiles[0]);
  const [selectedOutput, setSelectedOutput] = useState(outputFiles[0]);
  const [summary, setSummary] = useState(null);

  const notebookUrl = useMemo(() => `/notebooks/${selectedNotebook}`, [selectedNotebook]);
  const outputUrl = useMemo(() => `/outputs/${selectedOutput}`, [selectedOutput]);

  useEffect(() => {
    let cancelled = false;

    async function loadSummary() {
      try {
        const res = await fetch(notebookUrl);
        const json = await res.json();
        if (cancelled) return;

        const cells = Array.isArray(json.cells) ? json.cells : [];
        const codeCount = cells.filter((c) => c.cell_type === "code").length;
        const markdownCount = cells.filter((c) => c.cell_type === "markdown").length;
        const firstMarkdown = cells.find((c) => c.cell_type === "markdown");
        const markdownPreview = Array.isArray(firstMarkdown?.source)
          ? firstMarkdown.source.join(" ").slice(0, 200)
          : "No markdown preview available.";

        setSummary({
          totalCells: cells.length,
          codeCount,
          markdownCount,
          markdownPreview,
        });
      } catch {
        if (!cancelled) {
          setSummary({
            totalCells: 0,
            codeCount: 0,
            markdownCount: 0,
            markdownPreview: "Unable to parse this notebook in-browser.",
          });
        }
      }
    }

    loadSummary();
    return () => {
      cancelled = true;
    };
  }, [notebookUrl]);

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
                <button type="button" className="btn" onClick={() => setSelectedNotebook(file)}>
                  Select
                </button>
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
                <button type="button" className="btn" onClick={() => setSelectedOutput(file)}>
                  Preview
                </button>
                <a href={`/outputs/${file}`} target="_blank" rel="noreferrer">
                  Open
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="section guide-layout">
        <article className="glass-panel content-panel">
          <h3>Notebook Summary</h3>
          <p className="muted">Selected: {selectedNotebook}</p>
          {summary && (
            <ul className="asset-list">
              <li><span>Total Cells</span><strong>{summary.totalCells}</strong></li>
              <li><span>Code Cells</span><strong>{summary.codeCount}</strong></li>
              <li><span>Markdown Cells</span><strong>{summary.markdownCount}</strong></li>
            </ul>
          )}
          <p className="muted" style={{ marginTop: "0.8rem" }}>{summary?.markdownPreview}</p>
        </article>

        <aside className="glass-panel code-panel">
          <h3>Output Preview</h3>
          <p className="muted">Selected: {selectedOutput}</p>
          <iframe title="Output Preview" src={outputUrl} className="tool-frame" />
        </aside>
      </section>
    </section>
  );
}
