import { personalInfo } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.secNum}>01</span>
        <h2 className={styles.secTitle}>About</h2>
        <div className={styles.secRule} />
      </div>

      <div ref={ref} className={`${styles.grid} reveal ${inView ? 'in' : ''}`}>

        {/* Bio */}
        <div className={styles.bioCol}>
          <p className={styles.pullquote}>
            "Got serious about programming in 11th standard. Started with Python and tried to learn basic game development on unity, lost interest in game development, and moved on to machine learning and full stack development.
            I've been hooked since."
          </p>
          <p className={styles.bodyText}>
            I'm a first-year Computer Science student at VIT Bhopal.
            My work sits at the practical end of things. I care less about what something
            is called and more on about whether it actually works and can someone use it to increase productivity.
          </p>
          <p className={styles.bodyText}>
            DevAct came from a simple problem: I had to open three tabs every time I wanted
            to check my own progress. So I built a dashboard that shows GitHub, LeetCode,
            and Codeforces in one place. This is how most of my projects start like.
          </p>
          <p className={styles.bodyText}>
            Outside: football on weekends, table tennis when I can find a partner,
            and Codeforces contests that start at midnight.
          </p>

          <div className={styles.byline}>
            <div className={styles.bylineInitial}>PJ</div>
            <div>
              <div className={styles.bylineName}>Parth Jangir</div>
              <div className={styles.bylineInfo}>
                CS Student · Developer<br />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className={styles.sideCol}>
          <span className={styles.colLabel}>Education</span>
          <div className={styles.expItem}>
            <span className={styles.expYear}>2024–28</span>
            <div className={styles.expRole}>B.Tech CSE — AI & ML</div>
            <div className={styles.expCo}>VIT Bhopal University</div>
          </div>
          <div className={styles.expItem} style={{ borderBottom: 'none' }}>
            <span className={styles.expYear}>2010–24</span>
            <div className={styles.expRole}>Senior Secondary (XII)</div>
            <div className={styles.expCo}>Delhi Public School, Bhilai</div>
          </div>
        </div>

        {/* Links + focus */}
        <div className={styles.sideCol}>
          <span className={styles.colLabel}>Profiles</span>
          {[
            { l: 'GitHub',     h: personalInfo.github,    d: 'parth2711' },
            { l: 'LinkedIn',   h: personalInfo.linkedin,  d: '/in/parth-jangir' },
            { l: 'LeetCode',   h: personalInfo.leetcode,  d: 'parthayyy' },
            { l: 'Codeforces', h: personalInfo.codeforces,d: 'parth2711' },
          ].map(({ l, h, d }) => (
            <a key={l} href={h} target="_blank" rel="noreferrer" className={styles.profileRow}>
              <span className={styles.profileLabel}>{l}</span>
              <span className={styles.profileHandle}>{d} ↗</span>
            </a>
          ))}

          <span className={styles.colLabel} style={{ marginTop: '2rem' }}>Focus</span>
          <p className={styles.focusText}>
            Algorithms & DSA &mdash; Java C++ competitive programming
          </p>
          <p className={styles.focusText}>
            Full-stack &mdash; React · FastAPI · PostgreSQL
          </p>
          <p className={styles.focusText}>
            Machine learning &mdash; TensorFlow · OpenCV
          </p>
        </div>

      </div>
    </section>
  )
}
