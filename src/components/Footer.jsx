import { personalInfo } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.bracket}>&lt;</span>
          <span className={styles.logoText}>PJ</span>
          <span className={styles.bracket}>/&gt;</span>
        </div>

        <p className={styles.copy}>
          © {year} Parth Jangir · Built with <span>React</span> + <span>Vite</span>
        </p>

        <div className={styles.links}>
          {[
            { label: 'GitHub',    href: personalInfo.github },
            { label: 'LinkedIn',  href: personalInfo.linkedin },
            { label: 'LeetCode',  href: personalInfo.leetcode },
            { label: 'Email',     href: `mailto:${personalInfo.email}` },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={styles.link}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
