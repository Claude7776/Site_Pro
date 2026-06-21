import { useState } from 'react'
import { FORMSPREE_ID, WHATSAPP_PHONE } from '../config'

const contactLinks = [
  {
    href: 'mailto:codecld@proton.me',
    icon: '✉️',
    label: 'Email personnelle',
    value: 'codecld@proton.me',
  },
  {
    href: 'https://linkedin.com/company/skyblue-corporation',
    icon: '💼',
    label: 'LinkedIn',
    value: 'Sky Blue Corporation',
  },
  {
    href: 'tel:+212690565512',
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

function buildWaUrl(data, phone) {
  const msg =
    `📋 Nouveau message — Sky Blue Corp\n` +
    `👤 ${data.name}${data.company ? ` (${data.company})` : ''}\n` +
    `✉️ ${data.email}\n` +
    `📁 ${data.project || 'Non précisé'}\n` +
    `💬 ${data.message}`
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`
}

async function sendEmail(data) {
  if (!FORMSPREE_ID || FORMSPREE_ID === 'YOUR_FORM_ID') return
  await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [waUrl, setWaUrl] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const fd = new FormData(e.target)
    const data = {
      name:    fd.get('name'),
      company: fd.get('company'),
      email:   fd.get('email'),
      project: fd.get('project'),
      message: fd.get('message'),
    }

    try {
      await sendEmail(data)
      setWaUrl(buildWaUrl(data, WHATSAPP_PHONE))
      setSubmitted(true)
      e.target.reset()
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setSubmitted(false)
    setWaUrl(null)
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
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✔</div>
                <h3>Message envoyé !</h3>
                <p>Votre email a bien été transmis. Réponse sous 24h.</p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Envoyer aussi sur WhatsApp
                </a>
                <button onClick={handleReset} className="btn-reset">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Prénom &amp; Nom *</label>
                    <input name="name" type="text" placeholder="Jean Dupont" required />
                  </div>
                  <div className="form-group">
                    <label>Entreprise</label>
                    <input name="company" type="text" placeholder="Votre société" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email professionnel *</label>
                  <input name="email" type="email" placeholder="vous@entreprise.com" required />
                </div>
                <div className="form-group">
                  <label>Type de projet</label>
                  <select name="project">
                    <option value="">— Sélectionnez un service —</option>
                    {projectTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Décrivez votre besoin *</label>
                  <textarea
                    name="message"
                    placeholder="Décrivez votre projet, vos enjeux, vos contraintes..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-submit"
                  disabled={loading}
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer ma demande →'}
                </button>

                {error && (
                  <p style={{ color: '#f87171', fontSize: '.8rem', textAlign: 'center', marginTop: 8 }}>
                    Une erreur est survenue. Réessayez ou contactez-nous directement par email.
                  </p>
                )}

                <p className="form-note">
                  📧 Email automatique + 📱 WhatsApp en 1 clic · Réponse sous 24h
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
