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
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>

        {/* Top row: location tag */}
        <p className={styles.meta}>
          <span className={styles.metaDot} />
          Bhilai, India
        </p>

        {/* Name — big, serif, two lines */}
        <h1 className={styles.name}>
          <SplitName text="Parth" className={styles.nameFirst} />
          <SplitName text="Jangir" className={styles.nameLast} />
        </h1>

        {/* One honest line */}
        <p className={styles.tagline}>
          CS student. I write C++, build with React &amp; Python,
          and ship things I actually use.
        </p>

        <div className={styles.actions}>
          <a
            href="#projects"
            className="btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            See my work
          </a>
          <a href={personalInfo.resumeUrl} download className="btn-ghost">Resume</a>
        </div>

        {/* Bottom: current status — sparse, honest */}
        <div className={styles.status}>
          <div className={styles.statusItem}>
            <span className={styles.statusKey}>Building</span>
            <span className={styles.statusVal}>DevAct — developer activity aggregator</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusKey}>Studying</span>
            <span className={styles.statusVal}>B.Tech CSE (AI & ML), VIT Bhopal · 2024–2028</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusKey}>Open to</span>
            <span className={styles.statusVal}>Internships</span>
          </div>
        </div>

      </div>
    </section>
  )
}
