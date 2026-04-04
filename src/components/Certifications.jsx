import { useInView } from '../hooks/useInView'
import styles from './Certifications.module.css'

const certs = [
  {
    title: 'Python for Data Science & Machine Learning Bootcamp',
    issuer: 'Udemy',
    year: '2024',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'],
  },
  {
    title: 'The Nuts and Bolts of Machine Learning',
    issuer: 'Google',
    year: '2024',
    skills: ['ML theory', 'Model evaluation', 'Feature engineering'],
  },
  {
    title: 'Beginning C++ Programming — From Beginner to Beyond',
    issuer: 'Udemy',
    year: '2023',
    skills: ['C++17', 'OOP', 'STL', 'Memory management'],
  },
]

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

        <div ref={ref} className={`${styles.list} fade-up ${inView ? 'visible' : ''}`}>
          {certs.map((c, i) => (
            <div key={i} className={styles.row}>
              <div className={styles.left}>
                <span className={styles.issuer}>{c.issuer}</span>
                <span className={styles.year}>{c.year}</span>
              </div>
              <div className={styles.center}>
                <h3 className={styles.title}>{c.title}</h3>
                <div className={styles.skills}>
                  {c.skills.map(s => (
                    <span key={s} className={styles.skill}>{s}</span>
                  ))}
                </div>
              </div>
              <div className={styles.right}>
                <span className={styles.badge}>Completed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
