import { personalInfo } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>Parth Jangir</p>

        <div className={styles.links}>
          {[
            { label: 'GitHub',     href: personalInfo.github },
            { label: 'LinkedIn',   href: personalInfo.linkedin },
            { label: 'LeetCode',   href: personalInfo.leetcode },
            { label: 'Codeforces', href: personalInfo.codeforces },
            { label: 'Email',      href: `mailto:${personalInfo.email}` },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={styles.link}>
              {l.label}
            </a>
          ))}
        </div>

        <p className={styles.copy}>
          {new Date().getFullYear()} · Built with React & Vite
        </p>
      </div>
    </footer>
  )
}
