import { personalInfo } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

const GraduationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
    <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/>
  </svg>
)
const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const infoCards = [
  { Icon: GraduationIcon, title: 'Education',         body: 'B.Tech CSE (AI & ML)',   sub: 'VIT Bhopal · 2024–Present', color: 'var(--accent)'  },
  { Icon: PinIcon,        title: 'Location',          body: 'Bhilai, Chhattisgarh',  sub: 'India',                     color: 'var(--accent2)' },
  { Icon: ZapIcon,        title: 'Currently Building',body: 'DevAct',                sub: 'Developer Activity Platform',color: 'var(--accent3)' },
  { Icon: TargetIcon,     title: 'Interests',         body: 'Football · Table Tennis',sub: 'DSA · AI Research',        color: 'var(--accent4)' },
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
                {p.includes('DevAct')
                  ? p.split('DevAct').map((part, j) => j === 0
                    ? <span key={j}>{part}<span className={styles.highlight}>DevAct</span></span>
                    : <span key={j}>{part}</span>)
                  : p}
              </p>
            ))}

            <div className={styles.socials}>
              {[
                { label:'LinkedIn',   href: personalInfo.linkedin },
                { label:'LeetCode',   href: personalInfo.leetcode },
                { label:'Codeforces', href: personalInfo.codeforces },
                { label:'GitHub',     href: personalInfo.github },
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
                <span className={styles.cardIcon} style={{ color: c.color }}><c.Icon /></span>
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
