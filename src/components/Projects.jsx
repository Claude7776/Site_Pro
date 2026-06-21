import { projects } from '../data/projects'

function Screenshot({ src, redact = [] }) {
  return (
    <div className="project-screenshot">
      <img src={src} alt="Aperçu du projet" />
      {redact.map((r, i) => (
        <div
          key={i}
          className="project-redact"
          style={{ top: r.top, left: r.left, width: r.width, height: r.height }}
        />
      ))}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="fade-up">
          <div className="tag">Réalisations</div>
          <h2 className="section-title">
            Projets conçus,<br />
            <span className="gradient-text">déployés, opérationnels.</span>
          </h2>
          <p className="section-sub">
            Des solutions réelles, en production, qui résolvent de vrais problèmes métiers.
          </p>
        </div>
        <div className="projects-grid fade-up">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`project-card${p.featured ? ' featured-project' : ''}`}
            >
              {p.screenshot ? (
                <Screenshot src={p.screenshot} redact={p.redact} />
              ) : (
                <div className="project-header">
                  <div className="project-icon-wrap">{p.icon}</div>
                  <div style={p.featured ? { marginTop: 'auto' } : undefined}>
                    <span className={`project-status ${p.status === 'live' ? 'status-live' : 'status-done'}`}>
                      {p.status === 'live' ? 'En production' : 'Livré'}
                    </span>
                  </div>
                </div>
              )}
              <div className="project-body">
                <div className="project-body-top">
                  <div className="project-icon-wrap" style={{ width: 36, height: 36, fontSize: '1rem' }}>{p.icon}</div>
                  <span className={`project-status ${p.status === 'live' ? 'status-live' : 'status-done'}`}>
                    {p.status === 'live' ? 'En production' : 'Livré'}
                  </span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-stack">
                  {p.stack.map((t) => (
                    <span className="pstack" key={t}>{t}</span>
                  ))}
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    className="project-github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir ${p.title} sur GitHub`}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Voir sur GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
