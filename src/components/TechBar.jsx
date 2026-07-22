function Icon({ children }) {
  return (
    <svg
      className="tech-icon-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const techs = [
  {
    label: 'Linux',
    icon: (
      <Icon>
        <path d="M12 3c-2.8 0-4.5 2.3-4.5 5.2 0 1.6.4 2.4-.9 4C5 14 4.5 16 5.5 18c.6 1 1.8 1 2 2.2.2 1 1.7 1.6 4.5 1.6s4.3-.6 4.5-1.6c.2-1.2 1.4-1.2 2-2.2 1-2 .5-4-1.1-5.8-1.3-1.6-.9-2.4-.9-4C16.5 5.3 14.8 3 12 3Z" />
        <circle cx="10" cy="10.5" r=".6" fill="currentColor" stroke="none" />
        <circle cx="14" cy="10.5" r=".6" fill="currentColor" stroke="none" />
        <path d="M9.5 19.5 8 22M14.5 19.5 16 22" />
      </Icon>
    ),
  },
  {
    label: 'Docker',
    icon: (
      <Icon>
        <rect x="4" y="12" width="4" height="4" rx="1" />
        <rect x="9" y="12" width="4" height="4" rx="1" />
        <rect x="9" y="7" width="4" height="4" rx="1" />
        <rect x="14" y="12" width="4" height="4" rx="1" />
        <path d="M3 16c1 3 4 5 9 5s8.5-2.5 9.5-6c-1.2.4-2 .2-2.5-.5-.8.9-1.8 1-3 .3" />
      </Icon>
    ),
  },
  {
    label: 'React',
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
      </Icon>
    ),
  },
  {
    label: 'Node.js',
    icon: (
      <Icon>
        <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7Z" />
        <path d="M12 2.5v9M12 11.5 20.5 7M12 11.5 3.5 7M12 11.5v10" />
      </Icon>
    ),
  },
  {
    label: 'Stripe API',
    icon: (
      <Icon>
        <rect x="3" y="6" width="18" height="12" rx="2.5" />
        <path d="M3 10.5h18" />
        <path d="M7 15h4" />
      </Icon>
    ),
  },
  {
    label: 'pfSense',
    icon: (
      <Icon>
        <path d="M12 3 19 5.5v5c0 5-3 8.3-7 10.5-4-2.2-7-5.5-7-10.5v-5Z" />
        <path d="M12 3v16.9" />
        <circle cx="12" cy="11" r="2.2" />
      </Icon>
    ),
  },
  {
    label: 'PostgreSQL',
    icon: (
      <Icon>
        <ellipse cx="12" cy="6.5" rx="7" ry="2.8" />
        <path d="M5 6.5v11c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-11" />
        <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
      </Icon>
    ),
  },
  {
    label: 'SMTP / Mailjet',
    icon: (
      <Icon>
        <path d="M12 3 21 9.5 12 16 3 9.5Z" />
        <circle cx="12" cy="9.5" r="1.3" fill="currentColor" stroke="none" />
        <path d="M4 12 4 19h16v-7" />
      </Icon>
    ),
  },
  {
    label: 'YouSign',
    icon: (
      <Icon>
        <path d="M4 17c2-4 3.5-9 5-9s1 6 2.5 6 2-8 3.5-8 1.5 7 3 7 1.5-2 3-2" />
        <circle cx="19" cy="11" r="1" fill="currentColor" stroke="none" />
      </Icon>
    ),
  },
  {
    label: 'VPS / Hostinger',
    icon: (
      <Icon>
        <path d="M7 16a4 4 0 0 1-.5-8 5 5 0 0 1 9.6-1.6A4.5 4.5 0 0 1 17 16Z" />
        <path d="M9 19h.01M12 19h.01M15 19h.01" />
      </Icon>
    ),
  },
  {
    label: 'SSL / Nginx',
    icon: (
      <Icon>
        <path d="M6 11V8a6 6 0 0 1 12 0v3" />
        <rect x="4.5" y="11" width="15" height="9" rx="2" />
        <path d="M12 15v2" />
      </Icon>
    ),
  },
  {
    label: 'MongoDB',
    icon: (
      <Icon>
        <path d="M12 21c-4-2.5-5.5-6-5.5-9.5C6.5 7 9 3.5 12 2c3 1.5 5.5 5 5.5 9.5 0 3.5-1.5 7-5.5 9.5Z" />
        <path d="M12 2v19" />
      </Icon>
    ),
  },
  {
    label: 'Shopify',
    icon: (
      <Icon>
        <path d="M6 8h12l1 12H5Z" />
        <path d="M9 8a3 3 0 0 1 6 0" />
        <path d="M9 12h.01M15 12h.01" />
      </Icon>
    ),
  },
  {
    label: 'Google Analytics',
    icon: (
      <Icon>
        <path d="M4 21V13M4 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M12 21V9M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M20 21V5M20 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </Icon>
    ),
  },
  {
    label: 'Search Console',
    icon: (
      <Icon>
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="M19.5 19.5 15 15" />
        <path d="M10.5 7.5v6M7.5 10.5h6" />
      </Icon>
    ),
  },
  {
    label: 'Amazon',
    icon: (
      <Icon>
        <path d="M4 15c4 3 12 3 16 0" />
        <path d="M17 13.5c1.5 0 2.5.5 3 1.5-.5 1.5-1.7 2-3 2" />
        <path d="M9 12V7.5a2.5 2.5 0 0 1 5 0V12" />
        <path d="M9 10.5c-2 .3-3 1.1-3 2.5s1 2 2.5 2c1.2 0 2-.5 2.5-1.5" />
      </Icon>
    ),
  },
  {
    label: 'Vite',
    icon: (
      <Icon>
        <path d="M13 2 4 14h6l-1 8 9-12h-6Z" />
      </Icon>
    ),
  },
  {
    label: 'PDFKit',
    icon: (
      <Icon>
        <path d="M7 2.5h7l4 4V21H7Z" />
        <path d="M14 2.5V6.5h4" />
        <path d="M9.5 13v5M12 13c1.4 0 2 .6 2 1.6s-.6 1.9-2 1.9h-1v1.5" />
      </Icon>
    ),
  },
  {
    label: 'Webhooks',
    icon: (
      <Icon>
        <circle cx="6" cy="7" r="2.3" />
        <circle cx="6" cy="17" r="2.3" />
        <circle cx="18" cy="12" r="2.3" />
        <path d="M8 8.2 16 11M8 15.8 16 13" />
      </Icon>
    ),
  },
  {
    label: 'Jest',
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
      </Icon>
    ),
  },
  {
    label: 'GTM',
    icon: (
      <Icon>
        <path d="M3 12 11 4l9 1 1 9-8 8Z" />
        <circle cx="14.5" cy="9.5" r="1.6" fill="currentColor" stroke="none" />
      </Icon>
    ),
  },
  {
    label: 'Zabbix',
    icon: (
      <Icon>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M6 12h3l1.5-4 3 8 1.5-4H18" />
      </Icon>
    ),
  },
  {
    label: 'Suricata IDS/IPS',
    icon: (
      <Icon>
        <path d="M2.5 12c2.8-4 5.6-6 9.5-6s6.7 2 9.5 6c-2.8 4-5.6 6-9.5 6s-6.7-2-9.5-6Z" />
        <circle cx="12" cy="12" r="2.6" />
        <path d="M12 12 16 9" />
      </Icon>
    ),
  },
  {
    label: 'VLAN / VPN',
    icon: (
      <Icon>
        <rect x="3.5" y="3.5" width="5" height="5" rx="1.2" />
        <rect x="15.5" y="3.5" width="5" height="5" rx="1.2" />
        <rect x="9.5" y="15.5" width="5" height="5" rx="1.2" />
        <path d="M8.5 6h7M6 8.5v6.7L9.8 18M18 8.5v6.7L14.2 18" />
      </Icon>
    ),
  },
  {
    label: 'nmap',
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
        <path d="M12 12 18 6" />
      </Icon>
    ),
  },
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
