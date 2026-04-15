import { useMemo, useState } from "react";
import { datasetGroups, toolCatalog } from "../data/siteContent";

export default function ToolsPage() {
  const [selectedTool, setSelectedTool] = useState(toolCatalog[0].title);

  const activeTool = useMemo(
    () => toolCatalog.find((tool) => tool.title === selectedTool) ?? toolCatalog[0],
    [selectedTool]
  );

  return (
    <section className="section-stack">
      <div className="section-head">
        <div className="eyebrow">Practice Tools</div>
        <h1>Open the viewers and lab you need without searching around the project.</h1>
        <p>These tools help beginners inspect files quickly and keep practicing while they learn.</p>
      </div>

      <section className="section">
        <div className="card-grid">
          {toolCatalog.map((tool) => (
            <article key={tool.title} className="card">
              <img className="card-image" src={tool.image} alt={tool.title} />
              <div className="card-body">
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <div className="action-row compact">
                  <a className="button button-primary" href={tool.href} target="_blank" rel="noreferrer">
                    Open tool
                  </a>
                  <button
                    type="button"
                    className="button"
                    onClick={() => setSelectedTool(tool.title)}
                  >
                    Preview here
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-split">
        <article className="preview-panel">
          <div className="section-head">
            <h2>{activeTool.title}</h2>
            <p>{activeTool.description}</p>
          </div>
          <iframe title={activeTool.title} src={activeTool.previewSrc} className="tool-frame" />
        </article>

        <article className="detail-card">
          <h2>Practice files by topic</h2>
          <div className="stack-list">
            {datasetGroups.map((group) => (
              <section key={group.title} className="nested-list-block">
                <h3>{group.title}</h3>
                <ul className="link-list">
                  {group.files.map((file) => (
                    <li key={file}>
                      <a href={`/datasets/${file}`} target="_blank" rel="noreferrer">
                        {file}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </section>
    </section>
  );
}
