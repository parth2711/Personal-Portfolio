import { certifications } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './Certifications.module.css'

export default function Certifications() {
  const [ref, inView] = useInView()

  return (
    <section id="certifications" className={`section ${styles.certs}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-number mono">04</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className={`${styles.grid} fade-up ${inView ? 'visible' : ''}`}>
          {certifications.map((c, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrap}>{c.icon}</div>
              <p className={styles.issuer}>{c.issuer}</p>
              <h3 className={styles.title}>{c.title}</h3>
              <div className={styles.badge}>
                <span className={styles.dot} />
                {c.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
