import { useInView } from '../hooks/useInView'
import styles from './Skills.module.css'

const groups = [
  {
    name: 'Languages',
    items: [
      { name: 'C++',        note: 'primary · algorithms & systems' },
      { name: 'Python',     note: 'ML · backend · scripting' },
      { name: 'JavaScript', note: 'frontend & Node' },
      { name: 'C',          note: 'systems fundamentals' },
    ],
  },
  {
    name: 'Frontend & Backend',
    items: [
      { name: 'React',      note: 'component-driven UIs' },
      { name: 'FastAPI',    note: 'REST · async Python' },
      { name: 'PostgreSQL', note: 'relational DB' },
      { name: 'Flask',      note: 'lightweight APIs' },
      { name: 'Streamlit',  note: 'ML app deployment' },
    ],
  },
  {
    name: 'ML & Data',
    items: [
      { name: 'TensorFlow',  note: 'deep learning · CNNs' },
      { name: 'Scikit-learn',note: 'classical ML pipelines' },
      { name: 'OpenCV',      note: 'computer vision' },
      { name: 'NumPy',       note: 'numerical computation' },
      { name: 'Pandas',      note: 'data wrangling' },
    ],
  },
  {
    name: 'Tools & CS',
    items: [
      { name: 'DSA',       note: '200+ problems · C++' },
      { name: 'Git',       note: 'version control' },
      { name: 'OOP',       note: 'design principles' },
      { name: 'DBMS',      note: 'schema design & queries' },
    ],
  },
]

const learning = ['Next.js', 'Docker', 'System Design']

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">

        <div className={styles.header}>
          <span className={styles.num}>02</span>
          <h2 className={styles.heading}>Skills</h2>
        </div>

        <div ref={ref} className={`${styles.body} reveal ${inView ? 'in' : ''}`}>
          {groups.map((g, gi) => (
            <div key={gi} className={styles.group}>
              <p className={styles.groupName}>{g.name}</p>
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
          <span className={styles.footerLabel}>Picking up →</span>
          {learning.map(t => (
            <span key={t} className={styles.footerTag}>{t}</span>
          ))}
        </div>

      </div>
    </section>
  )
}
