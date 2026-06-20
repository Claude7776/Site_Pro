const steps = [
  {
    num: '01',
    title: 'Cadrage & Analyse',
    desc: "Audit des besoins, définition du périmètre, architecture technique et estimation précise.",
  },
  {
    num: '02',
    title: 'Conception',
    desc: "Wireframes, modélisation des données, choix technologiques et plan de déploiement.",
  },
  {
    num: '03',
    title: 'Développement',
    desc: "Sprints itératifs, démos régulières, code reviewé et testé. Vous suivez en temps réel.",
  },
  {
    num: '04',
    title: 'Déploiement & Suivi',
    desc: "Mise en production sécurisée, formation, documentation et support post-livraison.",
  },
]

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="fade-up" style={{ textAlign: 'center' }}>
          <div className="tag">Notre méthode</div>
          <h2 className="section-title">
            De l'idée à la <span className="gradient-text">production</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto 56px' }}>
            Un processus rodé pour des livraisons sans surprise.
          </p>
        </div>
        <div className="process-steps fade-up">
          {steps.map((s) => (
            <div className="process-step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
