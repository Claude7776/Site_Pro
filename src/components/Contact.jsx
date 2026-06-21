import { useState } from 'react'
import { FORMSPREE_ID, CALLMEBOT_APIKEY, WHATSAPP_PHONE } from '../config'

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

async function sendEmail(data) {
  if (!FORMSPREE_ID || FORMSPREE_ID === 'YOUR_FORM_ID') return
  await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

function sendWhatsApp(data) {
  if (!CALLMEBOT_APIKEY || CALLMEBOT_APIKEY === 'YOUR_API_KEY') return
  const text = encodeURIComponent(
    `📋 *Nouveau message — Sky Blue Corp*\n` +
    `👤 ${data.name}${data.company ? ` (${data.company})` : ''}\n` +
    `✉️ ${data.email}\n` +
    `📁 ${data.project || 'Non précisé'}\n` +
    `💬 ${data.message}`
  )
  // Requête image pour contourner CORS (GET API CallMeBot)
  const img = new Image()
  img.src = `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_PHONE}&text=${text}&apikey=${CALLMEBOT_APIKEY}`
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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
      sendWhatsApp(data)
      setSubmitted(true)
      e.target.reset()
      setTimeout(() => setSubmitted(false), 4000)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
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
                className={`btn-submit${submitted ? ' success' : ''}`}
                disabled={loading || submitted}
              >
                {submitted
                  ? '✔ Message envoyé !'
                  : loading
                  ? 'Envoi en cours...'
                  : 'Envoyer ma demande →'}
              </button>

              {error && (
                <p style={{ color: '#f87171', fontSize: '.8rem', textAlign: 'center', marginTop: 8 }}>
                  Une erreur est survenue. Réessayez ou contactez-nous directement par email.
                </p>
              )}

              <p className="form-note">
                📧 Envoi par email + 📱 notification WhatsApp · Réponse sous 24h
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
