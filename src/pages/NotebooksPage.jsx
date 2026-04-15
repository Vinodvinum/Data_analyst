import { useEffect, useMemo, useState } from "react";
import { notebookDetails, outputDetails, toTitle } from "../data/siteContent";

export default function NotebooksPage() {
  const [selectedNotebook, setSelectedNotebook] = useState(notebookDetails[0].file);
  const [selectedOutput, setSelectedOutput] = useState(outputDetails[0].file);
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
        const codeCount = cells.filter((cell) => cell.cell_type === "code").length;
        const markdownCount = cells.filter((cell) => cell.cell_type === "markdown").length;
        const firstMarkdown = cells.find((cell) => cell.cell_type === "markdown");
        const markdownPreview = Array.isArray(firstMarkdown?.source)
          ? firstMarkdown.source.join(" ").replace(/\s+/g, " ").slice(0, 220)
          : "No markdown summary was found in this notebook.";

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
            markdownPreview: "The notebook summary could not be loaded in the browser preview.",
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
    <section className="section-stack">
      <div className="section-head">
        <div className="eyebrow">Notebook Practice</div>
        <h1>Study the guided notebooks, then compare them with the generated outputs.</h1>
        <p>These pages are useful when you want to see the workflow, not just the final answer.</p>
      </div>

      <section className="section section-split">
        <article className="detail-card">
          <h2>Notebook files</h2>
          <div className="file-list">
            {notebookDetails.map((item) => (
              <button
                key={item.file}
                type="button"
                className={selectedNotebook === item.file ? "file-button active" : "file-button"}
                onClick={() => setSelectedNotebook(item.file)}
              >
                <span>{item.title}</span>
                <small>{item.description}</small>
              </button>
            ))}
          </div>

          <div className="action-row compact">
            <a className="button button-primary" href={notebookUrl} target="_blank" rel="noreferrer">
              Open raw notebook
            </a>
            <a className="button" href="/notebook-viewer.html" target="_blank" rel="noreferrer">
              Open notebook viewer
            </a>
          </div>
        </article>

        <article className="detail-card">
          <h2>Notebook summary</h2>
          <p className="muted">{toTitle(selectedNotebook)}</p>
          {summary ? (
            <>
              <div className="stat-grid">
                <div className="stat-box">
                  <strong>{summary.totalCells}</strong>
                  <span>Total cells</span>
                </div>
                <div className="stat-box">
                  <strong>{summary.codeCount}</strong>
                  <span>Code cells</span>
                </div>
                <div className="stat-box">
                  <strong>{summary.markdownCount}</strong>
                  <span>Markdown cells</span>
                </div>
              </div>
              <p>{summary.markdownPreview}</p>
            </>
          ) : (
            <p className="muted">Loading notebook summary...</p>
          )}
        </article>
      </section>

      <section className="section section-split">
        <article className="detail-card">
          <h2>Output files</h2>
          <div className="file-list">
            {outputDetails.map((item) => (
              <button
                key={item.file}
                type="button"
                className={selectedOutput === item.file ? "file-button active" : "file-button"}
                onClick={() => setSelectedOutput(item.file)}
              >
                <span>{item.title}</span>
                <small>{item.file}</small>
              </button>
            ))}
          </div>

          <div className="action-row compact">
            <a className="button button-primary" href={outputUrl} target="_blank" rel="noreferrer">
              Open output
            </a>
          </div>
        </article>

        <article className="preview-panel">
          <div className="section-head">
            <h2>Output preview</h2>
            <p>Use the preview to compare the notebook work with the rendered result.</p>
          </div>
          <iframe title="Output preview" src={outputUrl} className="tool-frame" />
        </article>
      </section>
    </section>
  );
}
