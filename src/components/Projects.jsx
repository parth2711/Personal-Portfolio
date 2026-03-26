import { projects } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './Projects.module.css'

const GhIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)
const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

export default function Projects() {
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)
  const [ref, inView] = useInView()

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-number mono">03</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''}`}>
          {featured && (
            <div className={styles.featured}>
              <div className={styles.featuredGlow} />
              <div className={styles.featuredBadge}>
                <span className={styles.pulse} /> Active Build
              </div>
              <div className={styles.featuredLayout}>
                <div>
                  <h3 className={styles.featuredTitle}>{featured.title}</h3>
                  <p className={styles.featuredTag}>{featured.tag} · {featured.date}</p>
                  <p className={styles.featuredDesc}>{featured.description}</p>
                  <div className={styles.highlights}>
                    {featured.highlights.map((h, i) => (
                      <span key={i} className={styles.hl}>
                        <CheckIcon /> {h}
                      </span>
                    ))}
                  </div>
                  <div className={styles.stack}>
                    {featured.stack.map(s => (
                      <span key={s} className={styles.stackPill}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.featuredLinks}>
                  <a href={featured.github} target="_blank" rel="noreferrer" className={styles.iconBtn}>
                    <GhIcon /> GitHub
                  </a>
                  {featured.live && (
                    <a href={featured.live} target="_blank" rel="noreferrer" className={styles.iconBtn}>
                      <ExternalIcon /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className={styles.grid}>
            {rest.map(p => (
              <div key={p.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <h4 className={styles.cardTitle}>{p.title}</h4>
                    <p className={styles.cardDate}>{p.date}</p>
                  </div>
                </div>
                <p className={styles.cardTag}>{p.tag}</p>
                <p className={styles.cardDesc}>{p.description}</p>
                <div className={styles.cardStack}>
                  {p.stack.map(s => <span key={s} className={styles.mini}>{s}</span>)}
                </div>
                <div className={styles.cardLinks}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                      <GhIcon /> Code
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                      <ExternalIcon /> Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
