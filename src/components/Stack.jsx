import { stackCategories } from '../data/stack'

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <div className="fade-up">
          <div className="tag">Stack technique</div>
          <h2 className="section-title">
            Des outils de <span className="gradient-text">niveau production</span>
          </h2>
          <p className="section-sub">
            Notre écosystème technologique couvre chaque couche de votre système d'information.
          </p>
        </div>
        <div className="stack-grid fade-up">
          {stackCategories.map((cat) => (
            <div className="stack-category" key={cat.id}>
              <h4>{cat.title}</h4>
              <div className="skill-tags">
                {cat.tags.map((t) => (
                  <span className="skill-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
