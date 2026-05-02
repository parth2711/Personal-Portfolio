import { useEffect, useRef } from 'react'
import { personalInfo } from '../data/portfolio'
import styles from './Hero.module.css'

const SplitName = ({ text, className }) => (
  <span className={className}>
    {text.split('').map((ch, i) => (
      <span key={i} className={styles.letter} style={{ '--i': i }}>{ch}</span>
    ))}
  </span>
)

export default function Hero() {
  const dateRef = useRef(null)
  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.textContent = new Date().toLocaleDateString('en-IN', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      })
    }
  }, [])

  return (
    <section id="hero" className={styles.hero}>

      {/* Masthead */}
      <div className={styles.masthead}>
        <div className={styles.mastheadRule}>
          <div className={styles.ruleLine} />
          <span className={styles.ornament}>◆</span>
          <div className={styles.ruleLine} />
        </div>

        <h1 className={styles.name}>
          <SplitName text="Parth" className={styles.nameFirst} />
          {' '}
          <SplitName text="Jangir" className={styles.nameLast} />
        </h1>

        <p className={styles.sub}>
          Software Engineer &nbsp;·&nbsp; Full Stack Developer &nbsp;·&nbsp; ML Builder
        </p>

        <div className={styles.mastheadRule}>
          <div className={styles.ruleLine} />
          <span className={styles.ornament}>◆</span>
          <div className={styles.ruleLine} />
        </div>
      </div>

      {/* Three-column editorial grid */}
      <div className={styles.grid}>

        {/* Col 1: Who */}
        <div className={styles.col}>
          <span className={styles.colLabel}>Who</span>
          <p className={styles.colBody}>
            Third year B. Tech. student at VIT Bhopal. Pursuing degree in Computer Science.
          </p>
          <p className={styles.colBody} style={{ marginTop: '1rem' }}>
            Eye catching and minimal UIs, efficient backend systems, end to end ML apps, other interests are football, table tennis, competitive programming.
          </p>
        </div>

        {/* Col 2: headline + actions */}
        <div className={`${styles.col} ${styles.colCenter}`}>
          <p className={styles.headline}>
            "I build things end&#8209;to&#8209;end and figure out the details on the way."
          </p>
          <div className={styles.actions}>
            <a
              href="#projects"
              className={styles.btnPrimary}
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              See Projects
            </a>
            <a href={personalInfo.resumeUrl} download className={styles.btnGhost}>
              Download Resume
            </a>
          </div>
        </div>

        {/* Col 3: Now */}
        <div className={styles.col}>
          <span className={styles.colLabel}>Now</span>
          <div className={styles.nowList}>
            <div className={styles.nowRow}>
              <span className={styles.nowKey}>Building</span>
              <span className={styles.nowVal}>DevAct</span>
            </div>
            <div className={styles.nowRow}>
              <span className={styles.nowKey}>Studying</span>
              <span className={styles.nowVal}>VIT Bhopal · 2024–28</span>
            </div>
            <div className={styles.nowRow}>
              <span className={styles.nowKey}>Grinding</span>
              <span className={styles.nowVal}>LeetCode · Codeforces</span>
            </div>
            <div className={styles.nowRow}>
              <span className={styles.nowKey}>Open to</span>
              <span className={styles.nowVal}>Internships</span>
            </div>
          </div>
          <p ref={dateRef} className={styles.dateStamp} />
        </div>

      </div>
    </section>
  )
}
