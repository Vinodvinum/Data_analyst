import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { coreTracks, guideLibrary, supportGuides } from "../data/siteContent";

export default function GuidesHubPage() {
  const [selectedGuide, setSelectedGuide] = useState(coreTracks[0].guideFile);
  const previewUrl = useMemo(() => `/guides/${selectedGuide}`, [selectedGuide]);

  return (
    <section className="section-stack">
      <div className="section-head">
        <div className="eyebrow">Guide Library</div>
        <h1>Choose the next guide without hunting through folders.</h1>
        <p>Start with the four main tracks, then use the supporting guides when you need revision, projects, or interview prep.</p>
      </div>

      <section className="section">
        <div className="section-head">
          <h2>Main learning tracks</h2>
        </div>

        <div className="card-grid card-grid-large">
          {coreTracks.map((track) => (
            <article key={track.slug} className="card track-card">
              <img className="card-image" src={track.image} alt={track.title} />
              <div className="card-body">
                <div className="card-meta">
                  <span>{track.stage}</span>
                  <span>{track.level}</span>
                  <span>{track.duration}</span>
                </div>
                <h3>{track.title}</h3>
                <p>{track.summary}</p>
                <div className="action-row compact">
                  <Link className="button button-primary" to={`/guides/${track.slug}`}>
                    Open path
                  </Link>
                  <button
                    type="button"
                    className="button"
                    onClick={() => setSelectedGuide(track.guideFile)}
                  >
                    Preview here
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Support guides</h2>
        </div>

        <div className="card-grid">
          {supportGuides.map((guide) => (
            <article key={guide.slug} className="card">
              <img className="card-image" src={guide.image} alt={guide.title} />
              <div className="card-body">
                <h3>{guide.title}</h3>
                <p>{guide.summary}</p>
                <div className="action-row compact">
                  <Link className="button button-primary" to={`/guides/${guide.slug}`}>
                    Open guide
                  </Link>
                  <button
                    type="button"
                    className="button"
                    onClick={() => setSelectedGuide(guide.guideFile)}
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
        <div>
          <div className="section-head">
            <h2>Everything in the library</h2>
            <p>Every original guide file is still available.</p>
          </div>
          <div className="file-list">
            {guideLibrary.map((guide) => (
              <button
                key={guide.guideFile}
                type="button"
                className={selectedGuide === guide.guideFile ? "file-button active" : "file-button"}
                onClick={() => setSelectedGuide(guide.guideFile)}
              >
                <span>{guide.title}</span>
                <small>{guide.guideFile}</small>
              </button>
            ))}
          </div>
        </div>

        <article className="preview-panel">
          <div className="section-head">
            <h2>Preview</h2>
            <p>Use the preview for quick scanning, or open the full guide on its own page.</p>
          </div>
          <iframe title="Guide preview" src={previewUrl} className="tool-frame" />
        </article>
      </section>
    </section>
  );
}
