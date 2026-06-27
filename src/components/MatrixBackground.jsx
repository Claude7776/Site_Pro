import { useEffect, useRef } from 'react'

const TECHS = [
  { label: 'React',          color: '#61DAFB', fg: '#000' },
  { label: 'Docker',         color: '#2496ED', fg: '#fff' },
  { label: 'Node.js',        color: '#339933', fg: '#fff' },
  { label: 'Python',         color: '#3776AB', fg: '#fff' },
  { label: 'Linux',          color: '#FCC624', fg: '#000' },
  { label: 'Nginx',          color: '#009639', fg: '#fff' },
  { label: 'MongoDB',        color: '#47A248', fg: '#fff' },
  { label: 'PostgreSQL',     color: '#336791', fg: '#fff' },
  { label: 'Redis',          color: '#DC382D', fg: '#fff' },
  { label: 'GitHub',         color: '#e8e8e8', fg: '#000' },
  { label: 'Vercel',         color: '#e8e8e8', fg: '#000' },
  { label: 'Dokploy',        color: '#6366f1', fg: '#fff' },
  { label: 'UptimeRobot',    color: '#3d9be9', fg: '#fff' },
  { label: 'Grafana',        color: '#F46800', fg: '#fff' },
  { label: 'n8n',            color: '#EA4B71', fg: '#fff' },
  { label: 'Shopify',        color: '#96BF48', fg: '#fff' },
  { label: 'Stripe',         color: '#008CDD', fg: '#fff' },
  { label: 'Splunk',         color: '#65A637', fg: '#fff' },
  { label: 'pfSense',        color: '#3A5998', fg: '#fff' },
  { label: 'Suricata',       color: '#E63946', fg: '#fff' },
  { label: 'Wireshark',      color: '#1679A7', fg: '#fff' },
  { label: 'Asterisk',       color: '#F96A00', fg: '#fff' },
  { label: 'GA4',            color: '#E37400', fg: '#fff' },
  { label: 'JavaScript',     color: '#F7DF1E', fg: '#000' },
  { label: 'Bash',           color: '#4EAA25', fg: '#fff' },
  { label: 'Git',            color: '#F05032', fg: '#fff' },
  { label: 'Ubuntu',         color: '#E95420', fg: '#fff' },
  { label: 'VMware',         color: '#607078', fg: '#fff' },
  { label: 'ELK Stack',      color: '#005571', fg: '#fff' },
  { label: 'SOC',            color: '#FF6B35', fg: '#fff' },
  { label: 'PHP',            color: '#777BB4', fg: '#fff' },
  { label: 'HTML5',          color: '#E34F26', fg: '#fff' },
  { label: 'CSS3',           color: '#1572B6', fg: '#fff' },
  { label: 'REST API',       color: '#25a244', fg: '#fff' },
  { label: 'Active Dir.',    color: '#0078D4', fg: '#fff' },
  { label: 'Vicibox',        color: '#444', fg: '#fff' },
  { label: 'Prometheus',     color: '#E6522C', fg: '#fff' },
  { label: "Let's Encrypt",  color: '#003A70', fg: '#fff' },
  { label: 'GH Actions',     color: '#2088FF', fg: '#fff' },
  { label: 'Sysmon',         color: '#0078D4', fg: '#fff' },
  { label: 'IAM',            color: '#FF9900', fg: '#000' },
  { label: 'YouSign',        color: '#1AC268', fg: '#fff' },
  { label: 'Mailjet',        color: '#8A2BE2', fg: '#fff' },
  { label: 'C',              color: '#A8B9CC', fg: '#000' },
  { label: 'Java',           color: '#007396', fg: '#fff' },
]

const BADGE_W  = 76
const BADGE_H  = 17
const BADGE_R  = 5
const COL_W    = 90
const FPS      = 22
const INTERVAL = 1000 / FPS

function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

function drawBadge(ctx, tech, cx, y) {
  const x = cx - BADGE_W / 2
  ctx.fillStyle = tech.color
  rrect(ctx, x, y - BADGE_H, BADGE_W, BADGE_H, BADGE_R)
  ctx.fill()
  ctx.fillStyle = tech.fg
  ctx.font = 'bold 8.5px "Inter","Segoe UI",sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(tech.label, cx, y - BADGE_H / 2)
}

export default function MatrixBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animId, lastTime = 0
    let cols, drops, techIdx, speeds

    function init() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      cols    = Math.ceil(canvas.width / COL_W)
      drops   = Array.from({ length: cols }, () => -Math.random() * canvas.height)
      techIdx = Array.from({ length: cols }, () => Math.floor(Math.random() * TECHS.length))
      speeds  = Array.from({ length: cols }, () => 0.6 + Math.random() * 1.1)
      ctx.fillStyle = '#02080f'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    function draw(ts) {
      animId = requestAnimationFrame(draw)
      if (ts - lastTime < INTERVAL) return
      lastTime = ts

      // Gradual dark overlay creates the fading trail
      ctx.fillStyle = 'rgba(2,8,15,0.14)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < cols; i++) {
        const cx = i * COL_W + COL_W / 2
        const y  = drops[i]

        if (y > 0 && y <= canvas.height + BADGE_H) {
          drawBadge(ctx, TECHS[techIdx[i]], cx, y)
        }

        drops[i] += speeds[i]

        // Rotate to next badge every 24px
        if (y % 24 < speeds[i]) {
          techIdx[i] = (techIdx[i] + 1) % TECHS.length
        }

        // Reset with random delay
        if (drops[i] > canvas.height + BADGE_H * 6 && Math.random() > 0.9) {
          drops[i]   = -Math.random() * canvas.height * 0.4
          techIdx[i] = Math.floor(Math.random() * TECHS.length)
          speeds[i]  = 0.6 + Math.random() * 1.1
        }
      }
    }

    init()
    animId = requestAnimationFrame(draw)

    let resizeTimer
    let lastWidth = window.innerWidth
    function onResize() {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        if (window.innerWidth !== lastWidth) {
          lastWidth = window.innerWidth
          init()
        }
      }, 250)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
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
        opacity: 0.2,
      }}
    />
  )
}
