import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Loader({ onDone }) {
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 900)
    const t2 = setTimeout(() => onDone(), 1250)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div className={`loader-overlay${fade ? ' fade-out' : ''}`}>
      <div className="loader-inner">
        <div className="loader-logo">
          <Logo size={72} />
        </div>
        <div className="loader-name">SKY-BLUE CORPORATION</div>
        <div className="loader-tagline">Vivre dans un Univers Numérique</div>
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  )
}
