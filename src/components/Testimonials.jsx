import { useState, useEffect, useRef } from 'react'
import { FORMSPREE_ID } from '../config'

function Stars({ rating = 5 }) {
  return (
    <div className="testi-stars" aria-label={`${rating} sur 5 étoiles`}>
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </div>
  )
}

function StarPicker({ value, onChange }) {
  const [hover, setHover] = useState(0)
  return (
    <div className="star-picker" role="radiogroup" aria-label="Votre note">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className={`star-btn${(hover || value) >= n ? ' active' : ''}`}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(n)}
          aria-label={`${n} étoile${n > 1 ? 's' : ''}`}
          aria-pressed={value === n}
        >
          ★
        </button>
      ))}
    </div>
  )
}

async function submitReview(data) {
  if (!FORMSPREE_ID || FORMSPREE_ID === 'YOUR_FORM_ID') {
    throw new Error('Formspree non configuré')
  }
  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      _subject: `Nouvel avis client (${data.rating}★) — ${data.author}`,
      source: 'avis-client',
    }),
  })
  if (!res.ok) throw new Error('Formspree error')
}

function ReviewForm({ onDone }) {
  const [rating, setRating] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (rating === 0) {
      setError('rating')
      return
    }
    setLoading(true)
    setError(false)

    const fd = new FormData(e.target)
    const data = {
      author: fd.get('author'),
      company: fd.get('company'),
      quote: fd.get('quote'),
      rating,
    }

    try {
      await submitReview(data)
      setSubmitted(true)
    } catch {
      setError('submit')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="review-form-card">
        <div className="form-success" style={{ padding: '12px 4px' }}>
          <div className="form-success-icon">✔</div>
          <h3>Merci pour votre avis !</h3>
          <p>
            Il sera publié sur cette page après vérification — nous modérons chaque témoignage
            avant mise en ligne.
          </p>
          <button className="btn-reset" onClick={onDone} type="button">Fermer</button>
        </div>
      </div>
    )
  }

  return (
    <div className="review-form-card">
      <h4>Laisser un avis</h4>
      <p className="form-note-top">
        Votre retour compte — il sera vérifié puis publié dans cette section.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Votre note *</label>
          <StarPicker value={rating} onChange={(n) => { setRating(n); setError(false) }} />
          {error === 'rating' && (
            <span style={{ color: '#f87171', fontSize: '.78rem' }}>Sélectionnez une note de 1 à 5 étoiles.</span>
          )}
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Prénom &amp; Nom *</label>
            <input name="author" type="text" placeholder="Jean Dupont" required />
          </div>
          <div className="form-group">
            <label>Entreprise</label>
            <input name="company" type="text" placeholder="Votre société" />
          </div>
        </div>
        <div className="form-group">
          <label>Votre avis *</label>
          <textarea name="quote" placeholder="Décrivez votre expérience..." required />
        </div>

        <div className="review-form-actions">
          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Envoi en cours...' : 'Envoyer mon avis →'}
          </button>
          <button type="button" className="btn-cancel" onClick={onDone}>Annuler</button>
        </div>

        {error === 'submit' && (
          <p style={{ color: '#f87171', fontSize: '.8rem', textAlign: 'center', marginTop: 8 }}>
            Une erreur est survenue. Réessayez ou contactez-nous directement par email.
          </p>
        )}
      </form>
    </div>
  )
}

export default function Testimonials() {
  const [items, setItems] = useState([])
  const [showForm, setShowForm] = useState(false)
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
              <Stars rating={t.rating || 5} />
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

        <div className="testi-cta fade-up">
          {showForm ? (
            <ReviewForm onDone={() => setShowForm(false)} />
          ) : (
            <button className="review-toggle-btn" onClick={() => setShowForm(true)}>
              ★ Laisser un avis
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
