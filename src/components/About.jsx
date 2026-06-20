import { useEffect, useRef } from 'react'

const skills = [
  { label: 'Développement SaaS', pct: 95 },
  { label: 'Infrastructure Linux', pct: 90 },
  { label: 'Cybersécurité', pct: 85 },
  { label: 'DevOps & Cloud', pct: 88 },
  { label: 'Automatisation API', pct: 92 },
]

const values = [
  {
    icon: '🎯',
    title: 'Orienté résultats',
    desc: 'Chaque projet est cadré par des objectifs mesurables et livrés dans les délais convenus.',
  },
  {
    icon: '🔧',
    title: 'Full-stack, vraiment',
    desc: "Du frontend React au serveur Linux en passant par les APIs — pas de sous-traitance, pas de zone d'ombre.",
  },
  {
    icon: '🔒',
    title: 'Security by design',
    desc: "La sécurité n'est pas une option. Chaque solution est pensée avec le niveau d'exigence d'une infrastructure critique.",
  },
]

export default function About() {
  const fillRefs = useRef([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fillRefs.current.forEach((el, i) => {
            if (el) el.style.width = skills[i].pct + '%'
          })
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-visual fade-up">
            <div className="about-card">
              <div className="profile-row">
                <div className="profile-avatar">CG</div>
                <div className="profile-info">
                  <h4>Claude Medine Gambigha</h4>
                  <span>CEO &amp; Architecte Solutions IT</span>
                </div>
              </div>
              <div className="skill-bar-group">
                {skills.map((s, i) => (
                  <div className="skill-bar-item" key={s.label}>
                    <div className="skill-bar-label">
                      <span>{s.label}</span>
                      <span>{s.pct}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        ref={(el) => (fillRefs.current[i] = el)}
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-floating">
              <strong>15+ Projets</strong>
              livrés en production
            </div>
          </div>

          <div className="about-text fade-up">
            <div className="tag">À propos</div>
            <h2 className="section-title">
              Ingénierie IT hybride,<br />
              <span className="gradient-text">livrée sans compromis.</span>
            </h2>
            <p>
              Sky Blue Corporation est une société de conseil et d'ingénierie IT spécialisée dans la
              conception de solutions numériques à forte valeur ajoutée. Nous intervenons là où la
              technologie crée un avantage concret : des systèmes qui fonctionnent, des processus qui
              s'automatisent, des données qui restent sécurisées.
            </p>
            <p>
              Notre approche est résolument hybride : nous combinons expertise logicielle, maîtrise des
              infrastructures et vision métier pour livrer des solutions complètes — de la base de données
              au dashboard, du firewall au tunnel VPN.
            </p>
            <div className="value-list">
              {values.map((v) => (
                <div className="value-item" key={v.title}>
                  <span className="value-icon">{v.icon}</span>
                  <div>
                    <strong>{v.title}</strong>
                    <span>{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
