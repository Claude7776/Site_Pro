import { services } from '../data/services'
import { DataIcon } from './icons'

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="fade-up">
          <div className="tag">Nos services</div>
          <h2 className="section-title">
            Infrastructure & sécurité,<br />
            <span className="gradient-text">au cœur de chaque projet.</span>
          </h2>
          <p className="section-sub">
            Chaque couche de votre infrastructure digitale — réseau, serveur, application — est
            durcie et supervisée dès la conception, avec la rigueur d'un cabinet de conseil international.
          </p>
        </div>
        <div className="services-grid fade-up">
          {services.map((s) => (
            <div key={s.id} className={`service-card${s.featured ? ' featured' : ''}`}>
              {s.featured && <div className="feature-badge">Core</div>}
              <div className="service-icon"><DataIcon name={s.icon} /></div>
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
