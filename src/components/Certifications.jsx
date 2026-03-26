import { certifications } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './Certifications.module.css'

const PythonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 2C8 2 6 4 6 7v2h6v1H5C3 10 2 11.5 2 14s1 4 3 4h1v-2.5c0-2 1.5-3.5 3.5-3.5h5c1.5 0 2.5-1 2.5-2.5V7C17 4 15 2 12 2zm-1 3.5a1 1 0 110 2 1 1 0 010-2z"/>
    <path d="M19 10h-1v2.5c0 2-1.5 3.5-3.5 3.5H9c-1.5 0-2.5 1-2.5 2.5V17C6.5 20 8.5 22 12 22s6-2 6-5v-2h-6v-1h6c1.5 0 3-1.5 3-4s-1-4-2-4zm-7 8.5a1 1 0 110 2 1 1 0 010-2z"/>
  </svg>
)
const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M21.8 10.1H12v3.8h5.6c-.5 2.5-2.7 4.1-5.6 4.1-3.3 0-6-2.7-6-6s2.7-6 6-6c1.5 0 2.8.5 3.8 1.4l2.8-2.8C16.9 3 14.6 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.5 0 9.7-3.8 9.7-9.8 0-.7-.1-1.4-.2-1.1h.3z"/>
  </svg>
)
const CppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
)

const iconMap = { python: PythonIcon, google: GoogleIcon, cpp: CppIcon }

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
          {certifications.map((c, i) => {
            const Icon = iconMap[c.icon] || CppIcon
            return (
              <div key={i} className={styles.card}>
                <div className={styles.iconWrap}><Icon /></div>
                <p className={styles.issuer}>{c.issuer}</p>
                <h3 className={styles.title}>{c.title}</h3>
                <div className={styles.badge}>
                  <span className={styles.dot} />
                  {c.status}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
