import { Link } from "react-router-dom";
import { coreTracks, featuredResources, quickStartSteps } from "../data/siteContent";

export default function HomePage() {
  return (
    <>
      <section className="intro-section">
        <div className="eyebrow">Start Here</div>
        <h1>Go from beginner to confident data analyst without guessing what to learn next.</h1>
        <p className="lead">
          This hub is organized as a clear path. Start with one foundation track,
          practice on the included files, then move into projects, dashboards, and interview prep.
        </p>

        <div className="action-row">
          <Link className="button button-primary" to="/guides/excel">
            Begin with Excel
          </Link>
          <Link className="button" to="/guides/sql">
            Start with SQL
          </Link>
          <Link className="button" to="/guides">
            View all guides
          </Link>
        </div>

        <div className="stat-row" aria-label="Roadmap summary">
          <div className="stat-pill">
            <strong>4</strong>
            <span>core tracks</span>
          </div>
          <div className="stat-pill">
            <strong>2</strong>
            <span>guided notebooks</span>
          </div>
          <div className="stat-pill">
            <strong>16+</strong>
            <span>practice files</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="eyebrow">Roadmap</div>
          <h2>Follow the learning order</h2>
          <p>Each stage builds on the previous one, so a complete beginner can move forward without overload.</p>
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
                <ul className="bullet-list">
                  {track.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <div className="action-row compact">
                  <Link className="button button-primary" to={`/guides/${track.slug}`}>
                    Open track
                  </Link>
                  <a className="text-link" href={`/guides/${track.guideFile}`} target="_blank" rel="noreferrer">
                    Open guide file
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-split">
        <div>
          <div className="section-head">
            <div className="eyebrow">Simple Rules</div>
            <h2>Keep the path easy</h2>
          </div>
          <div className="checklist">
            {quickStartSteps.map((step) => (
              <article key={step.title} className="list-card">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="section-head">
            <div className="eyebrow">Next Stops</div>
            <h2>Practice when you are ready</h2>
          </div>
          <div className="mini-grid">
            {featuredResources.map((item) => (
              <article key={item.title} className="list-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link className="text-link" to={item.href}>
                  Open
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
