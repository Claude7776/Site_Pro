const LOGOS = {
  // Custom SVG logos
  'React': ({ s }) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width={s} height={s} style={{ background: '#20232A', borderRadius: 8, padding: 3 }}>
      <circle r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  'Vercel': ({ s }) => (
    <svg viewBox="0 0 24 24" width={s} height={s} style={{ background: '#000', borderRadius: 8, padding: 3 }}>
      <path d="M24 22.525H0L12 1.475z" fill="white" />
    </svg>
  ),
  'GitHub': ({ s }) => (
    <svg viewBox="0 0 24 24" width={s} height={s} style={{ background: '#181717', borderRadius: 8, padding: 3 }}>
      <path fill="white" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  'Docker': ({ s }) => (
    <svg viewBox="0 0 40 40" width={s} height={s}>
      <rect width="40" height="40" rx="8" fill="#2496ED" />
      <rect x="5" y="17" width="6" height="5" rx="1" fill="white" />
      <rect x="13" y="17" width="6" height="5" rx="1" fill="white" />
      <rect x="21" y="17" width="6" height="5" rx="1" fill="white" />
      <rect x="13" y="11" width="6" height="5" rx="1" fill="white" />
      <rect x="21" y="11" width="6" height="5" rx="1" fill="white" />
      <rect x="29" y="17" width="6" height="5" rx="1" fill="white" />
      <path d="M3 26 Q6 32 20 32 Q34 32 37 26 Q37 24 35 23 Q33 26 20 26 Q7 26 5 23 Q3 24 3 26Z" fill="white" />
      <path d="M35 22 Q38 20 38 18 Q36 18 34 20Z" fill="white" />
    </svg>
  ),
  'Node.js': ({ s }) => (
    <svg viewBox="0 0 40 40" width={s} height={s}>
      <path d="M20 3 L35 12 L35 28 L20 37 L5 28 L5 12Z" fill="#339933" />
      <text x="20" y="25" textAnchor="middle" fontSize="8" fontWeight="800" fill="white" fontFamily="sans-serif">NODE</text>
    </svg>
  ),
  'JavaScript': ({ s }) => (
    <svg viewBox="0 0 40 40" width={s} height={s}>
      <rect width="40" height="40" rx="6" fill="#F7DF1E" />
      <text x="22" y="29" textAnchor="middle" fontSize="17" fontWeight="800" fill="#323330" fontFamily="sans-serif">JS</text>
    </svg>
  ),
  'HTML5': ({ s }) => (
    <svg viewBox="0 0 40 40" width={s} height={s}>
      <rect width="40" height="40" rx="6" fill="#E34F26" />
      <text x="20" y="29" textAnchor="middle" fontSize="20" fontWeight="800" fill="white" fontFamily="sans-serif">5</text>
    </svg>
  ),
  'CSS3': ({ s }) => (
    <svg viewBox="0 0 40 40" width={s} height={s}>
      <rect width="40" height="40" rx="6" fill="#1572B6" />
      <text x="20" y="29" textAnchor="middle" fontSize="20" fontWeight="800" fill="white" fontFamily="sans-serif">3</text>
    </svg>
  ),
  'Python': ({ s }) => (
    <svg viewBox="0 0 40 40" width={s} height={s}>
      <rect width="40" height="40" rx="8" fill="#3776AB" />
      <text x="20" y="26" textAnchor="middle" fontSize="14" fontWeight="800" fill="#FFD43B" fontFamily="sans-serif">Py</text>
    </svg>
  ),
  'Ubuntu': ({ s }) => (
    <svg viewBox="0 0 40 40" width={s} height={s}>
      <circle cx="20" cy="20" r="20" fill="#E95420" />
      <circle cx="20" cy="7" r="4" fill="white" />
      <circle cx="8" cy="27" r="4" fill="white" />
      <circle cx="32" cy="27" r="4" fill="white" />
      <line x1="20" y1="11" x2="10" y2="25" stroke="white" strokeWidth="1.5" />
      <line x1="20" y1="11" x2="30" y2="25" stroke="white" strokeWidth="1.5" />
      <line x1="10" y1="25" x2="30" y2="25" stroke="white" strokeWidth="1.5" />
    </svg>
  ),
  'MongoDB': ({ s }) => (
    <svg viewBox="0 0 40 40" width={s} height={s}>
      <rect width="40" height="40" rx="8" fill="#47A248" />
      <path d="M20 4 C20 4 13 16 13 23 C13 29 16 35 20 36 C24 35 27 29 27 23 C27 16 20 4 20 4Z" fill="white" />
    </svg>
  ),
  'Git': ({ s }) => (
    <svg viewBox="0 0 40 40" width={s} height={s}>
      <rect width="40" height="40" rx="8" fill="#F05032" />
      <circle cx="14" cy="26" r="3" fill="white" />
      <circle cx="26" cy="14" r="3" fill="white" />
      <circle cx="26" cy="26" r="3" fill="white" />
      <path d="M14 26 L14 14 L26 14" fill="none" stroke="white" strokeWidth="2" />
      <path d="M14 14 L14 8" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="14" cy="8" r="3" fill="white" />
    </svg>
  ),
  'n8n': ({ s }) => (
    <svg viewBox="0 0 40 40" width={s} height={s}>
      <rect width="40" height="40" rx="8" fill="#EA4B71" />
      <circle cx="10" cy="20" r="4" fill="white" />
      <circle cx="30" cy="20" r="4" fill="white" />
      <circle cx="20" cy="10" r="4" fill="white" />
      <circle cx="20" cy="30" r="4" fill="white" />
      <line x1="14" y1="20" x2="26" y2="20" stroke="white" strokeWidth="2" />
      <line x1="20" y1="14" x2="20" y2="26" stroke="white" strokeWidth="2" />
    </svg>
  ),
  'GitHub Actions': ({ s }) => (
    <svg viewBox="0 0 40 40" width={s} height={s}>
      <rect width="40" height="40" rx="8" fill="#2088FF" />
      <path d="M10 20 L16 14 L22 20 L16 26Z" fill="white" />
      <path d="M20 20 L26 14 L32 20 L26 26Z" fill="white" />
    </svg>
  ),
  'Grafana': ({ s }) => (
    <svg viewBox="0 0 40 40" width={s} height={s}>
      <rect width="40" height="40" rx="8" fill="#F46800" />
      <circle cx="20" cy="20" r="10" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="20" cy="20" r="4" fill="white" />
      <line x1="20" y1="10" x2="20" y2="8" stroke="white" strokeWidth="2" />
      <line x1="30" y1="20" x2="32" y2="20" stroke="white" strokeWidth="2" />
      <line x1="20" y1="30" x2="20" y2="32" stroke="white" strokeWidth="2" />
      <line x1="10" y1="20" x2="8" y2="20" stroke="white" strokeWidth="2" />
    </svg>
  ),
}

// Colored badge fallback — brand colors for all techs
const BADGES = {
  'Cockpit':           { bg: '#0066CC', fg: '#fff', abbr: 'CP' },
  'Nginx':             { bg: '#009639', fg: '#fff', abbr: 'Nx' },
  'Samba':             { bg: '#E24025', fg: '#fff', abbr: 'SM' },
  'FTP':               { bg: '#5CB85C', fg: '#fff', abbr: 'FTP' },
  'ClamAV':            { bg: '#C0392B', fg: '#fff', abbr: 'AV' },
  'Pi-hole':           { bg: '#96060C', fg: '#fff', abbr: 'π' },
  'pfSense':           { bg: '#002B49', fg: '#38bdf8', abbr: 'pf' },
  'DNS':               { bg: '#1565C0', fg: '#fff', abbr: 'DNS' },
  'DHCP':              { bg: '#1A73E8', fg: '#fff', abbr: 'DH' },
  'Firewall':          { bg: '#E74C3C', fg: '#fff', abbr: '🔥' },
  'Reverse Proxy':     { bg: '#2ECC71', fg: '#fff', abbr: 'RP' },
  'IP Scanner':        { bg: '#2C3E50', fg: '#38bdf8', abbr: 'IP' },
  'Glances':           { bg: '#00A86B', fg: '#fff', abbr: 'GL' },
  'Atop':              { bg: '#16A085', fg: '#fff', abbr: 'AT' },
  'Prometheus':        { bg: '#E6522C', fg: '#fff', abbr: 'PR' },
  'ELK Stack':         { bg: '#005571', fg: '#FFC107', abbr: 'ELK' },
  'SOC':               { bg: '#1A1A2E', fg: '#38bdf8', abbr: 'SOC' },
  'TryHackMe':         { bg: '#C11111', fg: '#fff', abbr: 'THM' },
  'Hack The Box':      { bg: '#1A2035', fg: '#9FEF00', abbr: 'HTB' },
  'Wireshark':         { bg: '#1679A7', fg: '#fff', abbr: 'WS' },
  'Suricata':          { bg: '#F26822', fg: '#fff', abbr: 'SU' },
  'VPS':               { bg: '#4353FF', fg: '#fff', abbr: 'VPS' },
  'Hostinger':         { bg: '#673DE6', fg: '#fff', abbr: 'Ho' },
  'Flask':             { bg: '#000', fg: '#fff', abbr: 'Fl' },
  'MySQL':             { bg: '#4479A1', fg: '#fff', abbr: 'My' },
  'PostgreSQL':        { bg: '#336791', fg: '#fff', abbr: 'Pg' },
  'Redis':             { bg: '#DC382D', fg: '#fff', abbr: 'Re' },
  'Stripe':            { bg: '#635BFF', fg: '#fff', abbr: 'S' },
  'REST API':          { bg: '#009688', fg: '#fff', abbr: 'API' },
  'Webhooks':          { bg: '#7B68EE', fg: '#fff', abbr: 'WH' },
  'Vicibox':           { bg: '#E8821E', fg: '#fff', abbr: 'VC' },
  'Asterisk':          { bg: '#5B238F', fg: '#fff', abbr: '✳' },
  'SIP':               { bg: '#1B5E20', fg: '#fff', abbr: 'SIP' },
  'Predictive Dialing':{ bg: '#37474F', fg: '#fff', abbr: 'PD' },
  'Call Recording':    { bg: '#B71C1C', fg: '#fff', abbr: 'REC' },
  'IVR':               { bg: '#4A148C', fg: '#fff', abbr: 'IVR' },
  'Active Directory':  { bg: '#0078D4', fg: '#fff', abbr: 'AD' },
  'LDAP':              { bg: '#0D47A1', fg: '#fff', abbr: 'LD' },
  'IAM':               { bg: '#1565C0', fg: '#fff', abbr: 'IAM' },
  'RBAC':              { bg: '#283593', fg: '#fff', abbr: 'RB' },
  'SSO':               { bg: '#1A237E', fg: '#fff', abbr: 'SSO' },
  'VirtualBox':        { bg: '#183A61', fg: '#fff', abbr: 'VB' },
  'VMware':            { bg: '#607078', fg: '#fff', abbr: 'VM' },
  'Radmin':            { bg: '#007DBA', fg: '#fff', abbr: 'Rm' },
  'Process Explorer':  { bg: '#2E86C1', fg: '#fff', abbr: 'PE' },
  'SFC /scannow':      { bg: '#1565C0', fg: '#fff', abbr: 'SFC' },
  'Notepad++':         { bg: '#3FB900', fg: '#fff', abbr: 'N++' },
  'Workflows':         { bg: '#7C3AED', fg: '#fff', abbr: 'WF' },
  'APIs':              { bg: '#059669', fg: '#fff', abbr: 'API' },
  'Automation':        { bg: '#D97706', fg: '#fff', abbr: 'AU' },
  'Scripts':           { bg: '#374151', fg: '#38bdf8', abbr: '>_' },
  'Bash':              { bg: '#1C1C1C', fg: '#4AF626', abbr: 'sh' },
  'C':                 { bg: '#283593', fg: '#fff',    abbr: 'C'  },
  'C++':               { bg: '#00599C', fg: '#fff',    abbr: 'C++'},
  'Java':              { bg: '#E76F00', fg: '#fff',    abbr: 'Jv' },
  'PHP':               { bg: '#777BB4', fg: '#fff',    abbr: 'PHP'},
  'HTML':              { bg: '#E34F26', fg: '#fff',    abbr: 'H5' },
  'CSS':               { bg: '#1572B6', fg: '#fff',    abbr: 'CSS'},
}

function Badge({ name, size }) {
  const b = BADGES[name] || { bg: '#1e293b', fg: '#94a3b8', abbr: name.slice(0, 2).toUpperCase() }
  return (
    <div style={{
      width: size, height: size, background: b.bg,
      borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: b.fg, fontSize: size <= 32 ? 9 : 11, fontWeight: 800,
      fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-.01em',
      flexShrink: 0,
    }}>
      {b.abbr}
    </div>
  )
}

export default function TechLogo({ name, size = 36 }) {
  const Logo = LOGOS[name]
  if (Logo) return <Logo s={size} />
  return <Badge name={name} size={size} />
}

// SVG paths for social icons in footer
export const SOCIAL_SVG = {
  linkedin: {
    bg: '#0A66C2',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  github: {
    bg: '#181717',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  twitter: {
    bg: '#000',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
}
