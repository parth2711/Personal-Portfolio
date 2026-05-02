import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

export default function Projects() {
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)
  const [ref, inView] = useInView()

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.secNum}>03</span>
        <h2 className={styles.secTitle}>Projects</h2>
        <div className={styles.secRule} />
      </div>

      <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>

        {/* Featured — newspaper lead story */}
        {featured && (
          <div className={styles.lead}>
            <div className={styles.leadLeft}>
              <span className={styles.leadTag}>{featured.tag}</span>
              <h3 className={styles.leadTitle}>{featured.title}</h3>
              <p className={styles.leadDesc}>{featured.description}</p>
              <div className={styles.leadStack}>
                {featured.stack.map(s => <span key={s} className={styles.stackTag}>{s}</span>)}
              </div>
            </div>
            <div className={styles.leadRight}>
              <span className={styles.leadStatus}>
                <span className={styles.statusDot} /> Active
              </span>
              <span className={styles.leadDate}>{featured.date}</span>
              {featured.github && (
                <a href={featured.github} target="_blank" rel="noreferrer" className={styles.leadLink}>
                  View on GitHub ↗
                </a>
              )}
            </div>
          </div>
        )}

        {/* Rest — editorial card grid */}
        <div className={styles.cardGrid}>
          {rest.map((p, i) => (
            <div key={p.id} className={styles.card}>
              <span className={styles.cardNum}>Project No. {String(i + 2).padStart(3, '0')}</span>
              <h4 className={styles.cardTitle}>{p.title}</h4>
              <p className={styles.cardDesc}>{p.description}</p>
              <div className={styles.cardFooter}>
                <div className={styles.cardStack}>
                  {p.stack.slice(0, 3).map(s => <span key={s} className={styles.stackTag}>{s}</span>)}
                </div>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className={styles.cardLink}>↗</a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
