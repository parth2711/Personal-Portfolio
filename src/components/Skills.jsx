import { useInView } from '../hooks/useInView'
import styles from './Skills.module.css'

const techStack = [
  {
    group: 'Languages',
    items: [
      { name: 'C++',        note: 'Primary · DSA + Systems',  hot: true },
      { name: 'Python',     note: 'ML · Scripting · Backend', hot: true },
      { name: 'JavaScript', note: 'Frontend + Node',          hot: true },
      { name: 'C',          note: 'Systems fundamentals',     hot: false },
      { name: 'HTML/CSS',   note: 'Markup & styling',         hot: false },
    ],
  },
  {
    group: 'Frontend & Backend',
    items: [
      { name: 'React',      note: 'Component-driven UIs',     hot: true },
      { name: 'FastAPI',    note: 'REST APIs + async Python',  hot: true },
      { name: 'PostgreSQL', note: 'Relational data',          hot: true },
      { name: 'Flask',      note: 'Lightweight Python APIs',  hot: false },
      { name: 'Streamlit',  note: 'ML app deployment',        hot: false },
      { name: 'MySQL',      note: 'Relational DB',            hot: false },
    ],
  },
  {
    group: 'ML & Data',
    items: [
      { name: 'TensorFlow', note: 'Deep learning · CNNs',     hot: true },
      { name: 'Scikit-learn',note: 'Classical ML pipelines',  hot: true },
      { name: 'OpenCV',     note: 'Computer vision',          hot: true },
      { name: 'NumPy',      note: 'Numerical computation',    hot: false },
      { name: 'Pandas',     note: 'Data wrangling',           hot: false },
      { name: 'Matplotlib', note: 'Visualisation',            hot: false },
    ],
  },
  {
    group: 'CS Core & Tools',
    items: [
      { name: 'DSA',        note: 'C++ · 200+ problems solved', hot: true },
      { name: 'Git/GitHub', note: 'Version control · collab',  hot: true },
      { name: 'OOP',        note: 'Design principles',         hot: false },
      { name: 'DBMS',       note: 'Schema design · queries',   hot: false },
      { name: 'VS Code',    note: 'Primary IDE',               hot: false },
    ],
  },
]

const platforms = [
  { name: 'LeetCode',   stat: '200+ problems', link: 'https://leetcode.com/u/parthayyy/' },
  { name: 'Codeforces', stat: 'Active · Div. 3/4', link: 'https://codeforces.com/profile/parth2711' },
  { name: 'GitHub',     stat: '9 repos · active', link: 'https://github.com/parth2711' },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-number mono">02</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''}`}>

          {/* Tech grid */}
          <div className={styles.techGrid}>
            {techStack.map((group, gi) => (
              <div key={gi} className={styles.group}>
                <p className={styles.groupLabel}>{group.group}</p>
                <div className={styles.itemList}>
                  {group.items.map((item, ii) => (
                    <div key={ii} className={`${styles.item} ${item.hot ? styles.itemHot : ''}`}>
                      <div className={styles.itemLeft}>
                        {item.hot && <span className={styles.hotBar} />}
                        <span className={styles.itemName}>{item.name}</span>
                      </div>
                      <span className={styles.itemNote}>{item.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently learning */}
          <div className={styles.learning}>
            <span className={styles.learningLabel}>
              <span className={styles.learningDot} />
              Currently picking up
            </span>
            <div className={styles.learningItems}>
              {['Next.js', 'Docker', 'System Design'].map(t => (
                <span key={t} className={styles.learningTag}>{t}</span>
              ))}
            </div>
          </div>

          {/* Platforms row */}
          <div className={styles.platformRow}>
            <p className={styles.platformLabel}>Active on</p>
            <div className={styles.platforms}>
              {platforms.map(p => (
                <a key={p.name} href={p.link} target="_blank" rel="noreferrer" className={styles.platform}>
                  <span className={styles.platformName}>{p.name}</span>
                  <span className={styles.platformStat}>{p.stat}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
