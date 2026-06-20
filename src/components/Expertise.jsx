import { expertiseDomains, visionItems } from '../data/expertise'

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="container">
        <div className="fade-up" style={{ textAlign: 'center' }}>
          <div className="tag">Consultant IT — 2+ ans d'expérience</div>
          <h2 className="section-title">
            Mes domaines<br />
            <span className="gradient-text">d'expertise</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto 56px' }}>
            De l'administration système à l'architecture logicielle, en passant par la cybersécurité
            et l'automatisation — une maîtrise complète de la chaîne IT.
          </p>
        </div>

        <div className="expertise-grid fade-up">
          {expertiseDomains.map((domain) => (
            <div className="expertise-card" key={domain.id}>
              <div className="expertise-card-header">
                <span className="expertise-icon">{domain.icon}</span>
                <h3>{domain.title}</h3>
              </div>
              <ul className="expertise-items">
                {domain.items.map((item, i) => (
                  <li key={i} className="expertise-item">
                    <span className="expertise-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="expertise-tags">
                {domain.tags.map((t) => (
                  <span className="etag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="vision-band fade-up">
          <p className="vision-label">Je construis des systèmes</p>
          <div className="vision-items">
            {visionItems.map((v) => (
              <div className="vision-item" key={v.label}>
                <span className="vision-icon">{v.icon}</span>
                <span>{v.label}</span>
              </div>
            ))}
          </div>
          <p className="vision-desc">
            Mon objectif : des infrastructures et applications capables d'accompagner la croissance
            des entreprises tout en garantissant performance et sécurité.
          </p>
        </div>
      </div>
    </section>
  )
}
