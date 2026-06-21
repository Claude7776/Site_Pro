import { useState } from 'react'
import { faqs } from '../data/faq'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-answer-wrap" style={{ maxHeight: open ? '300px' : 0 }}>
        <p className="faq-answer">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq">
      <div className="container">
        <div className="section-head fade-up" style={{ textAlign: 'center' }}>
          <div className="tag">FAQ</div>
          <h2 className="section-title">
            Questions <span className="gradient-text">fréquentes.</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto 48px' }}>
            Tout ce que vous voulez savoir avant de nous contacter.
          </p>
        </div>
        <div className="faq-list fade-up">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
        <div className="faq-cta fade-up">
          Autre question ?{' '}
          <a href="#contact" className="faq-cta-link">Écrivez-nous →</a>
        </div>
      </div>
    </section>
  )
}
