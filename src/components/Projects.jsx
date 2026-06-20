import { projects } from '../data/projects'

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
              <div className="project-header">
                <div className="project-icon-wrap">{p.icon}</div>
                <div style={p.featured ? { marginTop: 'auto' } : undefined}>
                  <span className={`project-status ${p.status === 'live' ? 'status-live' : 'status-done'}`}>
                    {p.status === 'live' ? 'En production' : 'Livré'}
                  </span>
                </div>
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-stack">
                  {p.stack.map((t) => (
                    <span className="pstack" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
