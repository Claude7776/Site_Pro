import { useEffect, useRef } from 'react'

const TECHS = [
  'React', 'Node.js', 'Docker', 'Linux', 'Python', 'JavaScript',
  'Nginx', 'PostgreSQL', 'MongoDB', 'Redis', 'Stripe', 'Shopify',
  'pfSense', 'Splunk', 'Sysmon', 'GitHub', 'Vercel', 'Dokploy',
  'UptimeRobot', 'n8n', 'Grafana', 'Bash', 'C', 'PHP', 'Java',
  'HTML', 'CSS', 'VPS', 'REST API', 'Git', 'Active Directory',
  'Asterisk', 'Vicibox', 'SIP', 'Prometheus', 'Ubuntu', 'VMware',
  'GA4', 'GTM', 'SEO', 'Webhooks', 'Firewall', 'VLAN', 'DNS',
  'VPN', 'IAM', 'LDAP', 'RBAC', 'SSO', 'ELK', 'Suricata',
  'Wireshark', 'Certbot', 'Zabbix', 'SMTP', 'SOC', 'DevOps',
  'CI/CD', 'GitHub Actions', 'Hostinger', 'Socket.IO', 'Flask',
  'Samba', 'ClamAV', 'Pi-hole', 'Cockpit', 'YouSign', 'Mailjet',
]

export default function MatrixBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const FONT_SIZE = 11
    const LINE_H   = 20
    const COL_W    = 100
    const FPS      = 28
    const INTERVAL = 1000 / FPS

    let animId, cols, drops, wordIdx, speeds
    let lastTime = 0

    function init() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      cols    = Math.ceil(canvas.width / COL_W)
      drops   = Array.from({ length: cols }, () => -Math.random() * canvas.height)
      wordIdx = Array.from({ length: cols }, () => Math.floor(Math.random() * TECHS.length))
      speeds  = Array.from({ length: cols }, () => 0.6 + Math.random() * 1.4)
      // Clear canvas on resize
      ctx.fillStyle = 'rgba(2,8,16,1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    function draw(ts) {
      animId = requestAnimationFrame(draw)
      if (ts - lastTime < INTERVAL) return
      lastTime = ts

      // Fade trail
      ctx.fillStyle = 'rgba(2,8,16,0.065)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${FONT_SIZE}px "Space Mono","Courier New",monospace`

      for (let i = 0; i < cols; i++) {
        const x = i * COL_W + 6
        const y = drops[i]

        // Head word — bright white-blue
        if (y > 0 && y < canvas.height + LINE_H) {
          ctx.fillStyle = '#e0f2fe'
          ctx.fillText(TECHS[wordIdx[i] % TECHS.length], x, y)
        }

        // Trail — 5 fading words above
        const trail = [
          'rgba(56,189,248,0.75)',
          'rgba(56,189,248,0.50)',
          'rgba(56,189,248,0.30)',
          'rgba(56,189,248,0.15)',
          'rgba(56,189,248,0.06)',
        ]
        for (let t = 1; t <= trail.length; t++) {
          const ty = y - t * LINE_H
          if (ty > 0 && ty < canvas.height) {
            ctx.fillStyle = trail[t - 1]
            ctx.fillText(TECHS[(wordIdx[i] + t) % TECHS.length], x, ty)
          }
        }

        drops[i] += speeds[i]

        // Reset column when fully off screen
        if (drops[i] > canvas.height + LINE_H * 6 && Math.random() > 0.82) {
          drops[i]   = -Math.random() * canvas.height * 0.4
          wordIdx[i] = Math.floor(Math.random() * TECHS.length)
          speeds[i]  = 0.6 + Math.random() * 1.4
        }
      }
    }

    init()
    animId = requestAnimationFrame(draw)
    window.addEventListener('resize', init)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', init)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.18,
      }}
    />
  )
}
