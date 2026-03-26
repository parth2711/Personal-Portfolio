import { personalInfo, education } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

const infoCards = [
  { icon: '🎓', title: 'Education',        body: 'B.Tech CSE (AI & ML)',  sub: 'VIT Bhopal · 2024–Present', color: 'var(--accent)'  },
  { icon: '📍', title: 'Location',         body: 'Bhilai, Chhattisgarh', sub: 'India 🇮🇳',              color: 'var(--accent2)' },
  { icon: '⚡', title: 'Currently Building',body: 'CivicVision',          sub: 'AI Civic Intelligence',    color: 'var(--accent3)' },
  { icon: '🎯', title: 'Interests',        body: 'Football · Table Tennis',sub: 'DSA · AI Research',       color: 'var(--accent4)' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-number mono">01</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className={`${styles.grid} fade-up ${inView ? 'visible' : ''}`}>
          <div className={styles.left}>
            <p className={styles.lead}>
              I'm a <strong>Computer Science student at VIT Bhopal</strong> specialising in AI & ML — but I don't stop at models.
            </p>
            {personalInfo.bio.slice(1).map((p, i) => (
              <p key={i} className={styles.para}>
                {p.includes('CivicVision')
                  ? p.split('CivicVision').map((part, j) => j === 0
                    ? <span key={j}>{part}<span className={styles.highlight}>CivicVision</span></span>
                    : <span key={j}>{part}</span>)
                  : p}
              </p>
            ))}

            <div className={styles.socials}>
              {[
                { label:'LinkedIn', href: personalInfo.linkedin },
                { label:'LeetCode', href: personalInfo.leetcode },
                { label:'Codeforces', href: personalInfo.codeforces },
                { label:'GitHub',   href: personalInfo.github },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={styles.socialBtn}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.cards}>
            {infoCards.map((c, i) => (
              <div key={i} className={styles.card} style={{ '--card-accent': c.color }}>
                <span className={styles.cardIcon}>{c.icon}</span>
                <div>
                  <h4 className={styles.cardTitle}>{c.title}</h4>
                  <p className={styles.cardBody}>{c.body}</p>
                  <p className={`mono ${styles.cardSub}`}>{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
