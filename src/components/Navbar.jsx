import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#projects">Réalisations</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <a href="#contact" className="btn-primary nav-cta">Démarrer un projet →</a>

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
        <a href="#stack" onClick={closeMenu}>Stack technique</a>
        <a href="#contact" onClick={closeMenu} style={{ color: 'var(--sky)', fontWeight: 700 }}>
          Démarrer un projet →
        </a>
      </nav>
    </>
  )
}
