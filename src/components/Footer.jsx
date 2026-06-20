import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <div style={{ filter: 'drop-shadow(0 0 10px rgba(91,175,214,.4))', flexShrink: 0 }}>
                <Logo size={52} />
              </div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '.98rem', fontWeight: 800, letterSpacing: '.14em', color: 'var(--text)', lineHeight: 1.2 }}>
                  SKY-BLUE
                </div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '.75rem', fontWeight: 700, letterSpacing: '.2em', color: '#5BAFD6', lineHeight: 1.3 }}>
                  CORPORATION
                </div>
                <div style={{ fontSize: '.68rem', color: 'var(--text-dim)', letterSpacing: '.04em', marginTop: 2, fontStyle: 'italic' }}>
                  Vivre dans un Univers Numérique
                </div>
              </div>
            </div>
            <p>Architectes de solutions IT pour entreprises ambitieuses. Du code au serveur, de l'API au firewall.</p>
            <p style={{ fontSize: '.8rem', color: 'var(--text-dim)', marginTop: -8, marginBottom: 16 }}>
              CEO : <span style={{ color: 'var(--sky-light)', fontWeight: 600 }}>Claude Medine Gambigha</span>
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">in</a>
              <a href="#" className="social-link" aria-label="GitHub">gh</a>
              <a href="#" className="social-link" aria-label="Twitter">𝕏</a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Développement SaaS</a></li>
              <li><a href="#services">Cybersécurité</a></li>
              <li><a href="#services">Infrastructure Cloud</a></li>
              <li><a href="#services">Automatisation</a></li>
              <li><a href="#services">Intégration API</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Entreprise</h5>
            <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#projects">Réalisations</a></li>
              <li><a href="#stack">Stack technique</a></li>
              <li><a href="#process">Notre méthode</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:contact@skyblue-corp.io">contact@skyblue-corp.io</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Réserver un appel</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Sky Blue Corporation — CEO : Claude Medine Gambigha. Tous droits réservés.</span>
          <span>Conçu &amp; développé par <a href="#hero" style={{ color: '#5BAFD6' }}>Sky Blue Corp</a></span>
        </div>
      </div>
    </footer>
  )
}
