export default function Logo({ size = 38 }) {
  const id = `logo-${size}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sky Blue Corporation"
    >
      <defs>
        {/* Background gradient — sky blue (top-left) → deep indigo (bottom-right) */}
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#0ea5e9" />
          <stop offset="55%"  stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>

        {/* Radial atmosphere glow at top center */}
        <radialGradient id={`${id}-atm`} cx="50%" cy="30%" r="55%">
          <stop offset="0%"   stopColor="#7dd3fc" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#38bdf8"  stopOpacity="0" />
        </radialGradient>

        {/* Central star glow */}
        <filter id={`${id}-glow`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Subtle outer glow on whole logo */}
        <filter id={`${id}-outer`} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Background ─────────────────────────────── */}
      <rect width="100" height="100" rx="22" fill={`url(#${id}-bg)`} />
      {/* Atmosphere overlay */}
      <rect width="100" height="100" rx="22" fill={`url(#${id}-atm)`} />
      {/* Inner bevel border */}
      <rect x="1.5" y="1.5" width="97" height="97" rx="21"
            stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" fill="none" />

      {/* ── Subtle grid lines (background texture) ─── */}
      <line x1="50" y1="8"  x2="50" y2="92" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <line x1="8"  y1="50" x2="92" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

      {/* ── Orbit ring around main star ────────────── */}
      <ellipse cx="50" cy="30" rx="15" ry="5"
               stroke="rgba(255,255,255,0.18)" strokeWidth="1"
               fill="none"
               transform="rotate(-18 50 30)" />

      {/* ── Network connection lines ────────────────── */}
      {/* Center → left */}
      <line x1="50" y1="30" x2="24" y2="62"
            stroke="rgba(255,255,255,0.38)" strokeWidth="1.8" strokeLinecap="round" />
      {/* Center → right */}
      <line x1="50" y1="30" x2="76" y2="62"
            stroke="rgba(255,255,255,0.38)" strokeWidth="1.8" strokeLinecap="round" />
      {/* Center → bottom-left */}
      <line x1="50" y1="30" x2="35" y2="76"
            stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Center → bottom-right */}
      <line x1="50" y1="30" x2="65" y2="76"
            stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Left → right crossbar */}
      <line x1="24" y1="62" x2="76" y2="62"
            stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Left → bottom-left */}
      <line x1="24" y1="62" x2="35" y2="76"
            stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeLinecap="round" />
      {/* Right → bottom-right */}
      <line x1="76" y1="62" x2="65" y2="76"
            stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeLinecap="round" />

      {/* ── Network nodes ───────────────────────────── */}

      {/* Secondary nodes */}
      <circle cx="24" cy="62" r="5" fill="rgba(255,255,255,0.82)" />
      <circle cx="76" cy="62" r="5" fill="rgba(255,255,255,0.82)" />

      {/* Tertiary nodes */}
      <circle cx="35" cy="76" r="3.5" fill="rgba(255,255,255,0.55)" />
      <circle cx="65" cy="76" r="3.5" fill="rgba(255,255,255,0.55)" />

      {/* ── Main star node (the "sky star") ─────────── */}
      {/* Large glow halo */}
      <circle cx="50" cy="30" r="11" fill="rgba(255,255,255,0.18)" filter={`url(#${id}-glow)`} />
      {/* Core */}
      <circle cx="50" cy="30" r="6.5" fill="white" filter={`url(#${id}-glow)`} />
      <circle cx="50" cy="30" r="3.5" fill="white" />
      {/* Specular highlight */}
      <circle cx="48" cy="28" r="1.5" fill="rgba(255,255,255,0.9)" />
    </svg>
  )
}
