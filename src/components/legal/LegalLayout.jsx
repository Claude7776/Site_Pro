import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

export default function LegalLayout({ title, children }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container">
          <Link to="/" className="legal-back">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Retour au site
          </Link>
          <Link to="/" className="legal-logo">
            <Logo size={32} />
            <span>Sky Blue Corporation</span>
          </Link>
        </div>
      </header>

      <main className="legal-main">
        <div className="container legal-container">
          <h1 className="legal-title">{title}</h1>
          <div className="legal-body">
            {children}
          </div>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="container">
          <span>© 2026 Sky Blue Corporation</span>
          <div className="legal-footer-links">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/politique-confidentialite">Confidentialité</Link>
            <Link to="/cgv">CGV</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
