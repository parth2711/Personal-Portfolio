import { personalInfo } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-number mono">01</span>
          <h2 className="section-title">About</h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className={`${styles.grid} fade-up ${inView ? 'visible' : ''}`}>

          {/* ── Left: who I actually am ── */}
          <div className={styles.left}>
            <p className={styles.lead}>
              I'm Parth, sophomore at VIT Bhopal.
              started with python,
              and it sort of spiralled from there into ML, full-stack, and competitive programming.
            </p>

            <p className={styles.para}>
              I don't have a strong separation between "learning" and "building."
              Most of what I know came from making something, breaking it, and figuring out why.
              That's how DevAct started, I wanted to track my own progress across platforms
              and got tired of opening three different tabs every time.
            </p>

            <p className={styles.para}>
              I'm comfortable across the stack: C++ for algorithms, Python for data and backends,
              React when something needs to be usable. I try not to make things more complicated
              than they need to be.
            </p>

            <p className={styles.para}>
              Off the screen: I play football on weekends, pick up table tennis when someone's
              free, and occasionally do a Codeforces round late on a Friday.
            </p>

            <div className={styles.links}>
              {[
                { label: 'GitHub',     href: personalInfo.github },
                { label: 'LinkedIn',   href: personalInfo.linkedin },
                { label: 'LeetCode',   href: personalInfo.leetcode },
                { label: 'Codeforces', href: personalInfo.codeforces },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={styles.link}>
                  {s.label}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: education + specifics ── */}
          <div className={styles.right}>

            {/* Education block */}
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Education</h3>

              <div className={styles.edu}>
                <div className={styles.eduActive} />
                <div>
                  <p className={styles.eduDegree}>B.Tech — Computer Science and Engineering (AI & ML)</p>
                  <p className={styles.eduPlace}>VIT Bhopal University</p>
                  <p className={styles.eduPeriod}>2024 – 2028</p>
                </div>
              </div>

              <div className={styles.edu} style={{ marginTop: '1.25rem' }}>
                <div className={styles.eduDot} />
                <div>
                  <p className={styles.eduDegree}>Senior Secondary — Science (Class XII)</p>
                  <p className={styles.eduPlace}>Delhi Public School, Bhilai</p>
                  <p className={styles.eduPeriod}>2010 – 2024</p>
                </div>
              </div>
            </div>

            {/* What I focus on */}
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Focus areas</h3>
              <div className={styles.focusList}>
                {[
                  { area: 'Data Structures and Algorithms',   note: 'C++, Java · competitive programming' },
                  { area: 'Full-stack dev',      note: 'React · FastAPI · PostgreSQL' },
                  { area: 'Machine learning',    note: 'TensorFlow · OpenCV · Scikit-learn' },
                  { area: 'Shipping products',   note: 'idea → code → deployed' },
                ].map(f => (
                  <div key={f.area} className={styles.focusRow}>
                    <span className={styles.focusArea}>{f.area}</span>
                    <span className={styles.focusNote}>{f.note}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
