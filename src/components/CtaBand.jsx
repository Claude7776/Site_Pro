export default function CtaBand() {
  return (
    <section id="cta-band">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="tag" style={{ margin: '0 auto 20px', display: 'table' }}>
          Prêt à construire ?
        </div>
        <h2>
          Votre projet mérite une<br />
          <span className="gradient-text">infrastructure à sa hauteur.</span>
        </h2>
        <p>
          Que vous ayez besoin d'un CRM sur-mesure, d'une infrastructure sécurisée ou d'un audit
          complet — nous avons la solution.
        </p>
        <div className="cta-actions">
          <a href="#contact" className="btn-primary">Démarrer maintenant →</a>
          <a href="mailto:contact@skyblue-corp.io" className="btn-outline">✉️ Nous contacter</a>
        </div>
      </div>
    </section>
  )
}
