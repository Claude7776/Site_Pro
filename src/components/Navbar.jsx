import { useState, useEffect } from 'react'
import Logo from './Logo'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
      <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const isDark = saved ? saved === 'dark' : true
    setDark(isDark)
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    const next = !dark
    setDark(next)
    const t = next ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', t)
    localStorage.setItem('theme', t)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`main-nav${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="container inner">
          <a href="#hero" className="logo">
            <div className="logo-icon">
              <Logo size={38} />
            </div>
            <div className="logo-text">
              <span className="logo-name">SKY-BLUE</span>
              <span className="logo-corp">CORPORATION</span>
            </div>
          </a>

          <span className="avail-badge">
            <span className="avail-dot" />
            Disponible
          </span>

          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#projects">Réalisations</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#suivi" style={{ color: 'var(--sky)' }}>Suivi projet</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="nav-right">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Changer le thème" title={dark ? 'Mode clair' : 'Mode sombre'}>
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href="#contact" className="btn-primary nav-cta">Démarrer un projet →</a>
          </div>

          <button
            className="hamburger"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Menu mobile">
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#about" onClick={closeMenu}>À propos</a>
        <a href="#expertise" onClick={closeMenu}>Expertise</a>
        <a href="#projects" onClick={closeMenu}>Réalisations</a>
        <a href="#blog" onClick={closeMenu}>Blog</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="#suivi" onClick={closeMenu} style={{ color: 'var(--sky)' }}>Suivi projet</a>
        <a href="#contact" onClick={closeMenu} style={{ color: 'var(--sky)', fontWeight: 700 }}>
          Démarrer un projet →
        </a>
      </nav>
    </>
  )
}
