import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

const GhIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

export default function Projects() {
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)
  const [ref, inView] = useInView()

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">

        <div className={styles.header}>
          <span className={styles.num}>03</span>
          <h2 className={styles.heading}>Projects</h2>
        </div>

        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>

          {/* Featured — full width, different treatment */}
          {featured && (
            <div className={styles.featured}>
              <div className={styles.featuredLeft}>
                <div className={styles.featuredMeta}>
                  <span className={styles.featuredTag}>{featured.tag}</span>
                  <span className={styles.featuredDate}>{featured.date}</span>
                </div>
                <h3 className={styles.featuredTitle}>{featured.title}</h3>
                <p className={styles.featuredDesc}>{featured.description}</p>
                <div className={styles.featuredStack}>
                  {featured.stack.map(s => <span key={s} className={styles.pill}>{s}</span>)}
                </div>
              </div>
              <div className={styles.featuredRight}>
                <span className={styles.liveIndicator}>
                  <span className={styles.liveDot} /> Active
                </span>
                {featured.github && (
                  <a href={featured.github} target="_blank" rel="noreferrer" className={styles.codeLink}>
                    <GhIcon /> View code
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Rest — table rows */}
          <div className={styles.list}>
            {rest.map((p, i) => (
              <div key={p.id} className={styles.row}>
                <span className={styles.rowIndex}>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.rowMain}>
                  <h4 className={styles.rowTitle}>{p.title}</h4>
                  <p className={styles.rowDesc}>{p.description}</p>
                </div>
                <div className={styles.rowStack}>
                  {p.stack.slice(0, 3).map(s => <span key={s} className={styles.pill}>{s}</span>)}
                </div>
                <span className={styles.rowDate}>{p.date}</span>
                <div className={styles.rowLinks}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className={styles.rowLink}>
                      <GhIcon />
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
