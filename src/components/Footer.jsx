import { personalInfo } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <span>© {new Date().getFullYear()} Parth Jangir</span>
        <span className={styles.orn}>❧</span>
        <span>Built with React & Vite · Bhilai, India</span>
      </div>
      <div className={styles.links}>
        {[
          { l: 'GitHub',     h: personalInfo.github },
          { l: 'LinkedIn',   h: personalInfo.linkedin },
          { l: 'LeetCode',   h: personalInfo.leetcode },
          { l: 'Codeforces', h: personalInfo.codeforces },
          { l: 'Email',      h: `mailto:${personalInfo.email}` },
        ].map(({ l, h }) => (
          <a key={l} href={h} target="_blank" rel="noreferrer" className={styles.link}>{l}</a>
        ))}
      </div>
    </footer>
  )
}
