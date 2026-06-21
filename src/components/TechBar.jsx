const techs = [
  { icon: '🐧', label: 'Linux' },
  { icon: '🐳', label: 'Docker' },
  { icon: '⚛️', label: 'React' },
  { icon: '🟢', label: 'Node.js' },
  { icon: '💳', label: 'Stripe API' },
  { icon: '🔐', label: 'pfSense' },
  { icon: '🗄️', label: 'PostgreSQL' },
  { icon: '📧', label: 'SMTP / Mailjet' },
  { icon: '✍️', label: 'YouSign' },
  { icon: '☁️', label: 'VPS / Hostinger' },
  { icon: '🔒', label: 'SSL / Nginx' },
  { icon: '📊', label: 'MongoDB' },
  { icon: '🛍️', label: 'Shopify' },
  { icon: '📈', label: 'Google Analytics' },
  { icon: '🔍', label: 'Search Console' },
]

export default function TechBar() {
  const items = [...techs, ...techs]

  return (
    <section id="clients">
      <div className="container">
        <p className="clients-label">Nous maîtrisons l'écosystème complet</p>
        <div className="tech-scroll-wrap">
          <div className="tech-row">
            {items.map((t, i) => (
              <span className="tech-item" key={i}>
                <span className="tech-icon">{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
