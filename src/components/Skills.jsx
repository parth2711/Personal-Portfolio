import { useInView } from '../hooks/useInView'
import styles from './Skills.module.css'

const groups = [
  {
    name: 'Languages',
    items: [
      { name: 'C++',         note: 'Primary — algorithms, competitive programming, systems' },
      { name: 'Python',      note: 'ML pipelines, backend APIs, data processing' },
      { name: 'JavaScript',  note: 'Frontend and Node.js' },
      { name: 'C',           note: 'Systems fundamentals' },
      { name: 'HTML / CSS',  note: 'Markup and styling' },
    ],
  },
  {
    name: 'Frontend & Backend',
    items: [
      { name: 'React',       note: 'Component-driven UIs, state management' },
      { name: 'FastAPI',     note: 'REST APIs, async Python, Pydantic' },
      { name: 'PostgreSQL',  note: 'Schema design, queries, relations' },
      { name: 'Flask',       note: 'Lightweight Python APIs' },
      { name: 'Streamlit',   note: 'Rapid ML app deployment' },
    ],
  },
  {
    name: 'ML & Data',
    items: [
      { name: 'TensorFlow',   note: 'Deep learning, CNNs, model training' },
      { name: 'Scikit-learn', note: 'Classical ML, pipelines, evaluation' },
      { name: 'OpenCV',       note: 'Computer vision, image processing' },
      { name: 'NumPy / Pandas', note: 'Numerical computation, data wrangling' },
    ],
  },
  {
    name: 'CS Core & Tools',
    items: [
      { name: 'DSA',          note: '200+ problems solved, C++ — LeetCode & Codeforces' },
      { name: 'Git / GitHub', note: 'Version control, collaboration' },
      { name: 'OOP',          note: 'Design principles and patterns' },
      { name: 'DBMS',         note: 'Relational database design, normalisation' },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.secNum}>02</span>
        <h2 className={styles.secTitle}>Skills</h2>
        <div className={styles.secRule} />
        <span className={styles.secNote}>C++ · Python · React · FastAPI · TensorFlow · OpenCV</span>
      </div>

      <div ref={ref} className={`${styles.grid} reveal ${inView ? 'in' : ''}`}>
        {groups.map((g, gi) => (
          <div key={gi} className={styles.group}>
            <span className={styles.groupName}>{g.name}</span>
            <div className={styles.items}>
              {g.items.map((item, ii) => (
                <div key={ii} className={styles.item}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemNote}>{item.note}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <span className={styles.footerText}>Currently picking up &rarr;</span>
        <span className={styles.footerItem}>Next.js</span>
        <span className={styles.footerDot}>·</span>
        <span className={styles.footerItem}>Docker</span>
        <span className={styles.footerDot}>·</span>
        <span className={styles.footerItem}>System Design</span>
      </div>
    </section>
  )
}
