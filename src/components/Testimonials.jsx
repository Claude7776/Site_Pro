import { useState, useEffect, useRef } from 'react'

const stars = '★★★★★'

export default function Testimonials() {
  const [items, setItems] = useState([])
  const gridRef = useRef(null)

  useEffect(() => {
    fetch('/testimonials.json')
      .then((r) => r.json())
      .then((data) => setItems(data.filter((t) => !t.pending)))
      .catch(() => {})
  }, [])

  // Observer local pour les cartes chargées dynamiquement
  useEffect(() => {
    if (!items.length || !gridRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    gridRef.current.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-head fade-up">
          <div className="tag">Témoignages</div>
          <h2 className="section-title">
            Ce que disent nos <span className="gradient-text">clients.</span>
          </h2>
          <p className="section-sub">
            Des avis anonymisés à la demande de nos clients — la confidentialité fait partie du service.
          </p>
        </div>

        <div className="testi-grid" ref={gridRef}>
          {items.map((t, i) => (
            <div className="testi-card fade-up" key={i}>
              <div className="testi-stars">{stars}</div>
              <p className="testi-text">"{t.quote}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.avatar}</div>
                <div className="testi-info">
                  <strong>{t.author}</strong>
                  <span>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
