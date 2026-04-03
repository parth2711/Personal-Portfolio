import { personalInfo } from '../data/portfolio'
import styles from './Hero.module.css'


const now = [
  { key: 'Building',   val: 'DevAct',                 sub: 'developer activity aggregator' },
  { key: 'Studying',   val: 'B.Tech CSE — AI & ML',   sub: 'VIT Bhopal · 2024–2028' },
  { key: 'Competing',  val: 'Codeforces · LeetCode',  sub: 'Div. 3/4 · 200+ problems' },
  { key: 'Open to',    val: 'Internships',             sub: 'jangirparth@gmail.com' },
]

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>

      {/* ── Left ── */}
      <div className={styles.left}>
        <p className={styles.location}>Bhilai, India</p>

        <h1 className={styles.name}>
          <span className={styles.nameFirst}>Parth</span>
          <span className={styles.nameLast}>Jangir</span>
        </h1>

        <p className={styles.role}>
          Software Engineer &amp; ML Builder
        </p>

        <p className={styles.desc}>
          I write C++ for algorithms, Python for machine learning,
          and React for the products that tie it all together.
          Currently a CS student at VIT Bhopal — building in public.
        </p>

        <div className={styles.actions}>
          <a
            href="#projects"
            className="btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            See my work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href={personalInfo.resumeUrl} download className="btn-ghost">Resume</a>
        </div>
      </div>

      {/* ── Right: status panel ── */}
      <div className={styles.right}>
        <div className={styles.statusPanel}>
          <p className={styles.statusTitle}>Now</p>
          <div className={styles.statusList}>
            {now.map(item => (
              <div key={item.key} className={styles.statusRow}>
                <span className={styles.statusKey}>{item.key}</span>
                <div className={styles.statusVal}>
                  <span className={styles.statusMain}>{item.val}</span>
                  <span className={styles.statusSub}>{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.statusFooter}>
            <span className={styles.dot} />
            <span>Open to work</span>
          </div>
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span className="mono">scroll</span>
        </div>
      </div>
    </section>
  )
}
