import { useInView } from '../hooks/useInView'
import styles from './Certifications.module.css'

const certs = [
  {
    title: 'Python for Data Science & Machine Learning Bootcamp',
    issuer: 'Udemy', year: '2024',
    topics: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'The Nuts and Bolts of Machine Learning',
    issuer: 'Google', year: '2024',
    topics: ['ML theory', 'Model evaluation', 'Feature engineering'],
  },
  {
    title: 'Beginning C++ Programming — From Beginner to Beyond',
    issuer: 'Udemy', year: '2023',
    topics: ['C++17', 'OOP', 'STL', 'Memory management'],
  },
]

export default function Certifications() {
  const [ref, inView] = useInView()

  return (
    <section id="certifications" className={`section ${styles.section}`}>
      <div className="container">

        <div className={styles.header}>
          <span className={styles.num}>04</span>
          <h2 className={styles.heading}>Certifications</h2>
        </div>

        <div ref={ref} className={`${styles.list} reveal ${inView ? 'in' : ''}`}>
          {certs.map((c, i) => (
            <div key={i} className={styles.row}>
              <div className={styles.meta}>
                <span className={styles.issuer}>{c.issuer}</span>
                <span className={styles.year}>{c.year}</span>
              </div>
              <h3 className={styles.title}>{c.title}</h3>
              <div className={styles.topics}>
                {c.topics.map(t => <span key={t} className={styles.topic}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
