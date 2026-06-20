import { useState } from 'react'

const contactLinks = [
  {
    href: 'mailto:contact@skyblue-corp.io',
    icon: '✉️',
    label: 'Email professionnel',
    value: 'contact@skyblue-corp.io',
  },
  {
    href: 'https://linkedin.com/company/skyblue-corp',
    icon: '💼',
    label: 'LinkedIn',
    value: 'Sky Blue Corporation',
  },
  {
    href: '#',
    icon: '📞',
    label: 'Appel de découverte',
    value: 'Réserver un créneau 30 min gratuit',
  },
]

const projectTypes = [
  'Développement SaaS / CRM',
  'Infrastructure & DevOps',
  'Cybersécurité & Audit',
  'Automatisation de processus',
  'Intégration API',
  'Administration Systèmes & Réseaux',
  'Autre / À définir',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setTimeout(() => {
        setSubmitted(false)
        e.target.reset()
      }, 3500)
    }, 800)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info fade-up">
            <div className="tag">Contact</div>
            <h2 className="section-title">
              Parlons de votre <span className="gradient-text">projet.</span>
            </h2>
            <p>
              Décrivez-nous votre besoin — nous revenons vers vous sous 24h avec une analyse
              préliminaire et une estimation. Pas de pitch commercial, uniquement de la valeur.
            </p>
            <div className="contact-links">
              {contactLinks.map((l) => (
                <a href={l.href} className="contact-link" key={l.label}>
                  <div className="cl-icon">{l.icon}</div>
                  <div className="cl-text">
                    <strong>{l.label}</strong>
                    <span>{l.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-card fade-up">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Prénom &amp; Nom *</label>
                  <input type="text" placeholder="Jean Dupont" required />
                </div>
                <div className="form-group">
                  <label>Entreprise</label>
                  <input type="text" placeholder="Votre société" />
                </div>
              </div>
              <div className="form-group">
                <label>Email professionnel *</label>
                <input type="email" placeholder="vous@entreprise.com" required />
              </div>
              <div className="form-group">
                <label>Type de projet</label>
                <select>
                  <option value="">— Sélectionnez un service —</option>
                  {projectTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Décrivez votre besoin *</label>
                <textarea
                  placeholder="Décrivez votre projet, vos enjeux, vos contraintes..."
                  required
                />
              </div>
              <button
                type="submit"
                className={`btn-submit${submitted ? ' success' : ''}`}
                disabled={loading || submitted}
              >
                {submitted ? '✔ Message envoyé !' : loading ? 'Envoi en cours...' : 'Envoyer ma demande →'}
              </button>
              <p className="form-note">🔒 Vos données sont confidentielles et ne sont jamais partagées.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
