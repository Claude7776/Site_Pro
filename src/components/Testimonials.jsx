import { testimonials } from '../data/testimonials'

const stars = '★★★★★'

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-head fade-up">
          <div className="tag">Témoignages</div>
          <h2 className="section-title">
            Ce que disent nos <span className="gradient-text">clients.</span>
          </h2>
          <p className="section-sub">
            Des avis anonymisés à la demande de nos clients — la confidentialité fait partie du service.
          </p>
        </div>
        <div className="testi-grid">
          {testimonials.filter((t) => !t.pending).map((t, i) => (
            <div className="testi-card fade-up" key={i}>
              <div className="testi-stars">{stars}</div>
              <p className="testi-text">"{t.quote}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.avatar}</div>
                <div className="testi-info">
                  <strong>{t.author}</strong>
                  <span>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
