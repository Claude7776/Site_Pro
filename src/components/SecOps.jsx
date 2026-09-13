import { useEffect, useRef, useState } from 'react'
import { ShieldIcon, LockIcon, RadarIcon, CheckCircleIcon } from './icons'

// Lignes rejouées en boucle dans le terminal de supervision — illustration du
// type de contrôles appliqués en continu sur les infrastructures gérées.
const FEED_LINES = [
  { type: 'ok',   text: 'Firewall pfSense — règles synchronisées' },
  { type: 'ok',   text: 'IDS/IPS Suricata — moteur actif, signatures à jour' },
  { type: 'scan', text: 'Scan de vulnérabilités hebdomadaire — 0 critique' },
  { type: 'ok',   text: 'Certificats TLS — validité vérifiée, renouvellement auto' },
  { type: 'ok',   text: 'Sauvegardes chiffrées — intégrité contrôlée (offsite)' },
  { type: 'info', text: 'Revue des accès — RBAC, principe du moindre privilège' },
  { type: 'ok',   text: 'Journaux centralisés — rétention 90 jours (SIEM)' },
  { type: 'warn', text: '2 tentatives de connexion suspectes — bloquées & tracées' },
  { type: 'ok',   text: 'Fail2Ban — 14 IP en quarantaine, aucune intrusion' },
  { type: 'ok',   text: 'Segmentation VLAN — flux inter-services contrôlés' },
]

const LINE_STYLE = {
  ok:   { cls: 't-ok',   prefix: '✔' },
  warn: { cls: 't-warn', prefix: '⚠' },
  scan: { cls: 't-cmd',  prefix: '»' },
  info: { cls: 't-out',  prefix: '·' },
}

const stats = [
  { icon: ShieldIcon, target: 99.9, decimals: 1, suffix: '%', label: 'Disponibilité surveillée' },
  { icon: RadarIcon, target: 5, prefix: '< ', suffix: ' min', label: 'Temps moyen de détection' },
  { icon: LockIcon, target: 40, suffix: '+', label: "Alertes triées / mois" },
  { icon: CheckCircleIcon, target: 0, label: 'Incident non résolu', staticText: 'A+' },
]

function StatCounter({ icon: Icon, target, suffix = '', prefix = '', decimals = 0, staticText, label }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (staticText) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()
        const start = Date.now()
        const duration = 1400
        const tick = () => {
          const p = Math.min((Date.now() - start) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setVal(Number((ease * target).toFixed(decimals)))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, decimals, staticText])

  return (
    <div className="secops-stat" ref={ref}>
      <span className="secops-stat-icon"><Icon /></span>
      <span className="secops-stat-num">{staticText || `${prefix}${val}${suffix}`}</span>
      <span className="secops-stat-label">{label}</span>
    </div>
  )
}

export default function SecOps() {
  const [visible, setVisible] = useState(() => FEED_LINES.slice(0, 5))
  const cursor = useRef(5 % FEED_LINES.length)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible((prev) => {
        const next = [...prev.slice(1), FEED_LINES[cursor.current]]
        cursor.current = (cursor.current + 1) % FEED_LINES.length
        return next
      })
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="secops">
      <div className="container">
        <div className="fade-up">
          <div className="tag">Opérations & Sécurité</div>
          <h2 className="section-title">
            Vos systèmes, surveillés<br />
            <span className="gradient-text">comme un SOC.</span>
          </h2>
          <p className="section-sub">
            Monitoring continu, durcissement des accès et réponse aux incidents : la sécurité
            n'est pas ajoutée après coup, elle est intégrée dès la conception de chaque infrastructure.
          </p>
        </div>

        <div className="secops-grid fade-up">
          <div className="secops-panel hero-card scanline">
            <div className="card-header">
              <div className="card-dot" style={{ background: '#ef4444' }} />
              <div className="card-dot" style={{ background: '#f59e0b' }} />
              <div className="card-dot" style={{ background: '#22c55e' }} />
              <span className="secops-live">
                <span className="secops-live-dot" />
                LIVE
              </span>
              <span style={{ fontSize: '.75rem', color: 'var(--text-dim)', marginLeft: 8 }}>
                soc-monitor ~ status
              </span>
            </div>
            {visible.map((line, i) => {
              const s = LINE_STYLE[line.type]
              return (
                <div className="secops-line" key={`${line.text}-${i}`}>
                  <span className={s.cls}>{s.prefix} {line.text}</span>
                </div>
              )
            })}
          </div>

          <div className="secops-stats-grid">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="secops-practices fade-up">
          <span className="secops-practices-label">Pratiques alignées sur</span>
          <div className="secops-practices-list">
            <span className="etag">RGPD</span>
            <span className="etag">Guide d'hygiène ANSSI</span>
            <span className="etag">CIS Controls</span>
            <span className="etag">Zero Trust / moindre privilège</span>
          </div>
        </div>
      </div>
    </section>
  )
}
