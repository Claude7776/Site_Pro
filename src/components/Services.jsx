import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="fade-up">
          <div className="tag">Nos services</div>
          <h2 className="section-title">
            Une expertise IT<br />
            <span className="gradient-text">à 360°</span>
          </h2>
          <p className="section-sub">
            De la conception au déploiement, nous couvrons chaque couche de votre infrastructure
            digitale avec la précision d'un cabinet de conseil international.
          </p>
        </div>
        <div className="services-grid fade-up">
          {services.map((s) => (
            <div key={s.id} className={`service-card${s.featured ? ' featured' : ''}`}>
              {s.featured && <div className="feature-badge">Core</div>}
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span className="stag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
