import { articles } from '../data/articles'

function fmtDate(iso) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="blog-head fade-up">
          <div>
            <div className="tag">Blog</div>
            <h2 className="section-title">
              Articles & <span className="gradient-text">partages techniques.</span>
            </h2>
          </div>
          <span className="blog-freq">1 article / mois</span>
        </div>
        <div className="blog-grid">
          {articles.map((a) => (
            <article className="blog-card fade-up" key={a.id}>
              <div className="blog-meta">
                <span className="blog-category">{a.category}</span>
                <span className="blog-date">{fmtDate(a.date)}</span>
              </div>
              <h3 className="blog-title">{a.title}</h3>
              <p className="blog-excerpt">{a.excerpt}</p>
              <div className="blog-tags">
                {a.tags.map((t) => (
                  <span className="blog-tag" key={t}>{t}</span>
                ))}
              </div>
              {a.link ? (
                <a href={a.link} className="blog-link" target="_blank" rel="noopener noreferrer">
                  Lire l'article →
                </a>
              ) : (
                <span className="blog-link-soon">Bientôt disponible →</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
