import { stackCategories } from '../data/stack'
import TechLogo from './TechLogo'

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <div className="fade-up" style={{ textAlign: 'center' }}>
          <div className="tag">Stack technique</div>
          <h2 className="section-title">
            Mes <span className="gradient-text">technologies</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto 48px' }}>
            Un écosystème complet maîtrisé de bout en bout — du système d'exploitation à l'application.
          </p>
        </div>

        <div className="tech-bento fade-up">
          {stackCategories.map((cat) => (
            <div className="tech-bento-card" key={cat.id}>
              <h4 className="tech-bento-title">{cat.title}</h4>
              <div className="tech-logo-grid">
                {cat.techs.map((name) => (
                  <div className="tech-logo-item" key={name}>
                    <TechLogo name={name} size={36} />
                    <span className="tech-logo-label">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
