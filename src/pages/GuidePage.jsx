import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { coreTracks, getGuideBySlug, getTrackBySlug, guideLibrary, toTitle } from "../data/siteContent";

export default function GuidePage() {
  const { slug = "" } = useParams();
  const track = getTrackBySlug(slug);
  const guide = getGuideBySlug(slug);

  const title = track?.title ?? guide?.title ?? toTitle(slug);
  const summary =
    track?.summary ??
    guide?.summary ??
    "Open the guide, work through the examples, and practice on the related files.";
  const guideFile = track?.guideFile ?? guide?.guideFile ?? slug;
  const previewUrl = `/guides/${guideFile}`;
  const related = useMemo(() => {
    if (track?.extras?.length) {
      return guideLibrary.filter((item) => track.extras.includes(item.guideFile));
    }

    return guideLibrary.filter((item) => item.slug !== slug).slice(0, 3);
  }, [slug, track]);

  return (
    <section className="section-stack">
      <div className="section-head">
        <div className="eyebrow">{track?.stage ?? "Guide"}</div>
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>

      <div className="action-row">
        <a className="button button-primary" href={previewUrl} target="_blank" rel="noreferrer">
          Open guide file
        </a>
        <Link className="button" to="/guides">
          Back to guides
        </Link>
        <Link className="button" to="/tools">
          Practice tools
        </Link>
      </div>

      <section className="section section-split">
        <article className="detail-card">
          <h2>What you will do</h2>
          <ul className="bullet-list">
            {(track?.skills ?? [
              "Read the guide in order instead of skipping between sections",
              "Practice each concept on the matching files",
              "Keep notes on the commands, formulas, or steps you want to remember",
            ]).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="detail-card">
          <h2>Practice files</h2>
          {track?.datasets?.length ? (
            <ul className="link-list">
              {track.datasets.map((file) => (
                <li key={file}>
                  <a href={`/datasets/${file}`} target="_blank" rel="noreferrer">
                    {file}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted">Use the guide together with the practice tools and the full guide library.</p>
          )}

          {track?.notebook ? (
            <p className="support-link">
              Notebook:{" "}
              <a href={`/notebooks/${track.notebook}`} target="_blank" rel="noreferrer">
                {track.notebook}
              </a>
            </p>
          ) : null}

          {track?.output ? (
            <p className="support-link">
              Output:{" "}
              <a href={`/outputs/${track.output}`} target="_blank" rel="noreferrer">
                {track.output}
              </a>
            </p>
          ) : null}
        </article>
      </section>

      <section className="section section-split">
        <article className="preview-panel">
          <div className="section-head">
            <h2>Guide preview</h2>
            <p>Keep this open while following the steps, or move the guide into a full tab.</p>
          </div>
          <iframe title={title} src={previewUrl} className="tool-frame tool-frame-tall" />
        </article>

        <aside className="detail-card">
          <h2>Keep going after this</h2>
          <div className="stack-list">
            {related.map((item) => (
              <Link key={item.slug} className="related-link" to={`/guides/${item.slug}`}>
                <strong>{item.title}</strong>
                <span>{item.summary}</span>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </section>
  );
}
