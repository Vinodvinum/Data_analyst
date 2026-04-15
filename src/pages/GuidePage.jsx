import { useParams } from "react-router-dom";

const guideAliases = {
  excel: "excel-data-analysis-guide.html",
  sql: "sql-data-analysis-guide.html",
  python: "python-data-analysis-guide.html",
  powerbi: "powerbi-data-analysis-guide.html",
  interview: "data-analyst-interview-preparation-guide.html",
  cheat: "data-analyst-master-cheat-sheet.html",
  cheat2: "data-analyst-master-cheat-sheet-2.html",
  problems: "data-analyst-practice-problems-30.html",
  projects: "data-analysis-projects.html",
  revision: "data-analysis-quick-revision.html",
  sqlcheat: "sql-interview-cheat-sheet.html",
};

export default function GuidePage() {
  const { slug = "" } = useParams();

  const targetFile = guideAliases[slug] ?? slug;
  const targetUrl = `/guides/${targetFile}`;

  return (
    <section className="section">
      <div className="section-head">
        <p className="kicker">Guide</p>
        <h1>{targetFile.replace(/\.html$/i, "").replace(/[-_]+/g, " ")}</h1>
        <p>Opening the canonical guide content from the final guides folder.</p>
      </div>

      <section className="section single-panel glass-panel">
        <iframe title={targetFile} src={targetUrl} className="tool-frame" />
      </section>
    </section>
  );
}
