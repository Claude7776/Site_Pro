import { useState } from 'react'

const PHASE_ICONS = ['🔍', '🎨', '⚡', '🧪', '🚀', '✅']

function Progress({ phases }) {
  const done  = phases.filter(p => p.status === 'done').length
  const total = phases.length
  const pct   = Math.round((done / total) * 100)
  return (
    <div className="tracker-progress">
      <div className="tracker-progress-bar">
        <div className="tracker-progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="tracker-progress-label">{pct}% complété — {done}/{total} phases</span>
    </div>
  )
}

function Timeline({ phases }) {
  return (
    <div className="tracker-timeline">
      {phases.map((phase, i) => (
        <div key={phase.id} className={`tracker-step tracker-step--${phase.status}`}>
          <div className="tracker-step-left">
            <div className="tracker-step-icon">
              {phase.status === 'done' ? '✓' : phase.status === 'active' ? PHASE_ICONS[i] : '○'}
            </div>
            {i < phases.length - 1 && (
              <div className={`tracker-step-line ${phase.status === 'done' ? 'tracker-step-line--done' : ''}`} />
            )}
          </div>
          <div className="tracker-step-body">
            <div className="tracker-step-header">
              <span className="tracker-step-label">{phase.label}</span>
              {phase.date && (
                <span className="tracker-step-date">
                  {new Date(phase.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                </span>
              )}
            </div>
            <p className="tracker-step-desc">{phase.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function Updates({ updates }) {
  if (!updates?.length) return null
  return (
    <div className="tracker-updates">
      <h4 className="tracker-updates-title">Journal de bord</h4>
      {updates.map((u, i) => (
        <div key={i} className="tracker-update">
          <span className="tracker-update-date">
            {new Date(u.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
          </span>
          <p className="tracker-update-msg">{u.message}</p>
        </div>
      ))}
    </div>
  )
}

export default function ProjectTracker() {
  const [code, setCode]     = useState('')
  const [result, setResult] = useState(null)
  const [error, setError]   = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSearch(searchCode) {
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res  = await fetch('/tracking.json')
      const data = await res.json()
      const found = data.find(p => p.code.toLowerCase() === searchCode.trim().toLowerCase())
      if (found) {
        setResult(found)
      } else {
        setError('Code projet introuvable. Vérifiez le code reçu par email.')
      }
    } catch {
      setError('Impossible de charger les données. Réessayez.')
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (code.trim()) handleSearch(code)
  }

  return (
    <section id="suivi" className="section tracker-section fade-up">
      <div className="container">
        <span className="tag">ESPACE CLIENT</span>
        <h2 className="section-title">Suivi de votre projet</h2>
        <p className="section-sub">
          Entrez le code reçu par email pour suivre l'avancement de votre projet en temps réel.
        </p>

        <div className="tracker-search">
          <form className="tracker-form" onSubmit={handleSubmit}>
            <input
              className="tracker-input"
              type="text"
              placeholder="Ex: SBC-2026-001"
              value={code}
              onChange={e => setCode(e.target.value)}
              autoCapitalize="characters"
              spellCheck={false}
            />
            <button className="btn btn-primary" type="submit" disabled={loading || !code.trim()}>
              {loading ? 'Recherche…' : 'Voir le suivi'}
            </button>
          </form>
          <button
            className="tracker-demo-link"
            type="button"
            onClick={() => { setCode('SBC-DEMO'); handleSearch('SBC-DEMO') }}
          >
            Voir un exemple →
          </button>
          {error && <p className="tracker-error">{error}</p>}
        </div>

        {result && (
          <div className="tracker-card fade-up visible">
            <div className="tracker-card-header">
              <div>
                <p className="tracker-card-code">{result.code}</p>
                <h3 className="tracker-card-title">{result.project}</h3>
                <p className="tracker-card-client">Client : {result.client}</p>
              </div>
              <div className="tracker-card-dates">
                <span>Démarré le {new Date(result.startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                {result.estimatedEnd && (
                  <span>Livraison prévue : {new Date(result.estimatedEnd).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                )}
              </div>
            </div>

            <Progress phases={result.phases} />
            <Timeline phases={result.phases} />
            <Updates updates={result.updates} />
          </div>
        )}
      </div>
    </section>
  )
}
