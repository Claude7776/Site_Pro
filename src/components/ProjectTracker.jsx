import { useState } from 'react'

const PHASE_ICONS = ['🔍', '🎨', '⚡', '🧪', '🚀', '✅']

// Mini animation per phase (shown when active, static when done)
const PHASE_VISUALS = [
  {
    color: '#38bdf8',
    lines: [
      '> Analyse des besoins en cours…',
      '> Contraintes identifiées',
      '> Cahier des charges ✓',
    ],
  },
  {
    color: '#a78bfa',
    lines: [
      '> Wireframes en cours…',
      '> Architecture validée',
      '> Maquettes approuvées ✓',
    ],
  },
  {
    color: '#34d399',
    lines: [
      'const api = new Router()',
      'await db.connect({ ssl: true })',
      'app.listen(8080) // running ✓',
    ],
  },
  {
    color: '#fbbf24',
    lines: [
      '✓ Tests unitaires   47 / 47',
      '✓ Tests intégration    OK',
      '✓ Validation client    OK',
    ],
  },
  {
    color: '#f97316',
    lines: [
      '$ docker-compose up -d',
      '✓ nginx · app · db  started',
      '✓ SSL · DNS · Live  ↗',
    ],
  },
  {
    color: '#22c55e',
    lines: [
      '✓ Documentation remise',
      '✓ Formation effectuée',
      '✓ Support 30j activé',
    ],
  },
]

function DevCoder() {
  return (
    <svg className="dev-coder" viewBox="0 0 88 62" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* desk */}
      <rect x="6" y="50" width="76" height="3" fill="#1e293b" rx="1.5"/>
      {/* laptop base */}
      <rect x="14" y="41" width="42" height="10" fill="#1e293b" rx="2"/>
      {/* screen outer */}
      <rect x="14" y="17" width="42" height="26" fill="#1e293b" rx="2"/>
      {/* screen inner */}
      <rect x="17" y="20" width="36" height="21" fill="#020810" rx="1"/>
      {/* code lines */}
      <rect x="19" y="23"  width="11" height="1.5" fill="#34d399" rx="0.7" opacity="0.9"/>
      <rect x="19" y="27"  width="20" height="1.5" fill="#38bdf8" rx="0.7" opacity="0.9"/>
      <rect x="19" y="31"  width="9"  height="1.5" fill="#a78bfa" rx="0.7" opacity="0.9"/>
      {/* screen cursor */}
      <rect className="dev-screen-cursor" x="19" y="35" width="4" height="1.5" fill="#34d399" rx="0.5"/>
      {/* keyboard */}
      <rect x="15" y="43" width="40" height="5" fill="#0f172a" rx="1"/>
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={17 + i * 4.5} y="44.5" width="3" height="2" fill="#1e293b" rx="0.4"/>
      ))}
      {/* body */}
      <rect x="63" y="36" width="13" height="14" fill="#3b82f6" rx="3"/>
      {/* head */}
      <circle cx="69.5" cy="28" r="7" fill="#fbbf24"/>
      {/* hair */}
      <ellipse cx="69.5" cy="22.5" rx="7" ry="3.5" fill="#1e293b"/>
      {/* eyes */}
      <circle cx="67" cy="28.5" r="1" fill="#1e293b"/>
      <circle cx="72" cy="28.5" r="1" fill="#1e293b"/>
      {/* left arm — types */}
      <g className="dev-arm-left">
        <line x1="63" y1="39" x2="50" y2="45" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round"/>
      </g>
      {/* right arm — types offset */}
      <g className="dev-arm-right">
        <line x1="76" y1="39" x2="60" y2="45" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round"/>
      </g>
    </svg>
  )
}

function PhaseVisual({ index, status }) {
  const v = PHASE_VISUALS[index]
  if (!v || status === 'pending') return null
  const isDev = index === 2

  return (
    <div className={`phase-visual phase-visual--${status}${isDev ? ' phase-visual--dev' : ''}`} style={{ '--phase-color': v.color }}>
      <div className="phase-visual-bar">
        <span className="phase-visual-dot" />
        <span className="phase-visual-dot" />
        <span className="phase-visual-dot" />
      </div>
      <div className="phase-visual-content">
        <div className="phase-visual-body">
          {v.lines.map((line, i) => (
            <div
              key={i}
              className="phase-visual-line"
              style={status === 'active' ? { animationDelay: `${i * 0.22}s` } : {}}
            >
              {line}
            </div>
          ))}
          {status === 'active' && <span className="phase-visual-cursor" />}
        </div>
        {isDev && status === 'active' && <DevCoder />}
      </div>
    </div>
  )
}

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
            <PhaseVisual index={i} status={phase.status} />
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
  const [code, setCode]       = useState('')
  const [result, setResult]   = useState(null)
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)

  const SBC_FORMAT = /^SBC-\d{4}-\d{3}$/i

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
      } else if (SBC_FORMAT.test(searchCode.trim())) {
        setError('pending')
      } else {
        setError('invalid')
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
          Entrez le code obtenu lors de votre demande de contact pour suivre l'avancement de votre projet en temps réel.
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
          {error === 'pending' && (
            <div className="tracker-pending">
              <span className="tracker-pending-icon">🕐</span>
              <div>
                <strong>Demande reçue — suivi en cours d'activation</strong>
                <p>Votre code est valide. Le tableau de bord sera activé sous 24h, dès la confirmation de votre projet.</p>
              </div>
            </div>
          )}
          {error === 'invalid' && (
            <p className="tracker-error">Code non reconnu. Vérifiez le code affiché lors de votre demande de contact.</p>
          )}
          {error !== 'pending' && error !== 'invalid' && error && (
            <p className="tracker-error">{error}</p>
          )}
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
