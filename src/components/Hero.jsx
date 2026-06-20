import { useEffect, useRef } from 'react'

export default function Hero() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const lastLine = document.querySelector('.terminal-line:last-child .t-ok')
    if (lastLine && !lastLine.querySelector('.term-cursor')) {
      const cursor = document.createElement('span')
      cursor.className = 'term-cursor'
      cursor.style.cssText =
        'display:inline-block;width:8px;height:14px;background:var(--sky);margin-left:4px;animation:blink 1s step-end infinite;vertical-align:middle;'
      lastLine.appendChild(cursor)
      cursorRef.current = cursor
    }
    return () => {
      if (cursorRef.current) cursorRef.current.remove()
    }
  }, [])

  return (
    <section id="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Vivre dans un Univers Numérique · 2026
            </div>
            <h1 className="hero-title">
              Architectes de<br />
              <span className="gradient-text">solutions IT</span><br />
              qui transforment.
            </h1>
            <p className="hero-sub">
              Sky Blue Corporation conçoit, construit et sécurise les systèmes d'information des entreprises
              modernes. Du CRM sur-mesure à l'infrastructure serveur, nous livrons des solutions robustes,
              scalables et prêtes à l'échelle.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Démarrer un projet →</a>
              <a href="#projects" className="btn-outline">Voir nos réalisations</a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">15+</span>
                <span className="stat-label">Projets livrés</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-label">Satisfaction client</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">8+</span>
                <span className="stat-label">Domaines d'expertise</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dot" style={{ background: '#ef4444' }} />
                <div className="card-dot" style={{ background: '#f59e0b' }} />
                <div className="card-dot" style={{ background: '#22c55e' }} />
                <span style={{ fontSize: '.75rem', color: 'var(--text-dim)', marginLeft: 8 }}>
                  sky-blue-corp ~ infra-deploy
                </span>
              </div>
              <div className="terminal-line">
                <span className="t-prompt">$</span>
                <span className="t-cmd">docker-compose up --build -d</span>
              </div>
              <div className="terminal-line">
                <span className="t-out">✔ Network created</span>
                <span className="t-ok">DONE</span>
              </div>
              <div className="terminal-line">
                <span className="t-out">✔ nginx-proxy started</span>
                <span className="t-ok">DONE</span>
              </div>
              <div className="terminal-line">
                <span className="t-out">✔ crm-backend :3001</span>
                <span className="t-ok">DONE</span>
              </div>
              <div className="terminal-line">
                <span className="t-out">✔ SSL/TLS configured</span>
                <span className="t-ok">DONE</span>
              </div>
              <div className="terminal-line">
                <span className="t-prompt">$</span>
                <span className="t-cmd">./audit-security.sh --full</span>
              </div>
              <div className="terminal-line">
                <span className="t-out">⚡ Firewall rules applied</span>
                <span className="t-warn">3 alerts resolved</span>
              </div>
              <div className="terminal-line" style={{ border: 'none' }}>
                <span className="t-ok">✔ System secured · Score: A+</span>
              </div>
            </div>
            <div className="floating-badge fb-top">
              <span>🛡️</span>
              <span style={{ color: 'var(--sky)' }}>Système sécurisé</span>
            </div>
            <div className="floating-badge fb-bottom">
              <span>⚡</span>
              <span style={{ color: '#a3e635' }}>Déployé en production</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
