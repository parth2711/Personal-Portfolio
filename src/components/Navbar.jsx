import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolio'
import styles from './Navbar.module.css'

const NAV = ['About','Skills','Projects','Certifications','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = id => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      {/* Top strip */}
      <div className={styles.strip}>
        <span className={styles.stripLeft}>parthjangir.in</span>
        <span className={styles.stripMid}>CS · ML · Full Stack</span>
        <span className={styles.stripRight}>Bhilai, India</span>
      </div>

      {/* Main nav row */}
      <div className={styles.main}>
        <div
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Parth Jangir
        </div>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {NAV.map(l => (
            <li key={l}>
              <button className={styles.link} onClick={() => go(l)}>{l}</button>
            </li>
          ))}
        </ul>

        <a href={personalInfo.resumeUrl} download className={styles.resume}>
          Resume ↓
        </a>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
        >
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  )
}
