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
              I'm Parth — a first-year CS student at VIT Bhopal, specialising in AI & ML.
              I started coding seriously in class XII, went deep on C++, and haven't stopped
              building since.
            </p>

            <p className={styles.para}>
              My work sits at the intersection of algorithms and product. I care about the DSA
              that makes software fast, the architecture that makes it scale, and the UX that
              makes it worth using. I don't treat these as separate disciplines.
            </p>

            <p className={styles.para}>
              Right now I'm building <strong>DevAct</strong> — a dashboard that pulls a
              developer's activity from GitHub, LeetCode, and Codeforces into one place.
              The idea came from being tired of switching between three tabs to understand
              my own progress.
            </p>

            <p className={styles.para}>
              Outside a screen: football on weekends, table tennis when there's time,
              and the occasional Codeforces contest on a Friday night.
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
                  <p className={styles.eduDegree}>B.Tech — Computer Science (AI & ML)</p>
                  <p className={styles.eduPlace}>VIT Bhopal University</p>
                  <p className={styles.eduPeriod}>Aug 2024 – 2028</p>
                </div>
              </div>

              <div className={styles.edu} style={{ marginTop: '1.25rem' }}>
                <div className={styles.eduDot} />
                <div>
                  <p className={styles.eduDegree}>Senior Secondary · Science</p>
                  <p className={styles.eduPlace}>Delhi Public School, Bhilai</p>
                  <p className={styles.eduPeriod}>Until 2024</p>
                </div>
              </div>
            </div>

            {/* What I focus on */}
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Focus areas</h3>
              <div className={styles.focusList}>
                {[
                  { area: 'Algorithms & DSA', note: 'C++ · competitive programming' },
                  { area: 'Full-stack dev',    note: 'React · FastAPI · PostgreSQL' },
                  { area: 'Machine learning',  note: 'TensorFlow · OpenCV · Scikit-learn' },
                  { area: 'Systems thinking',  note: 'architecture · performance · scale' },
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
