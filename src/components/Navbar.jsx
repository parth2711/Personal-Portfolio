import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolio'
import styles from './Navbar.module.css'

const NAV = ['About','Skills','Projects','Certifications','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 50)
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) setActive(s.id)
      })
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = id => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        PJ
      </div>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {NAV.map(l => (
          <li key={l}>
            <button
              className={`${styles.link} ${active === l.toLowerCase() ? styles.active : ''}`}
              onClick={() => go(l)}
            >{l}</button>
          </li>
        ))}
      </ul>

      <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.gh}>
        GitHub
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
        </svg>
      </a>

      <button className={`${styles.burger} ${open ? styles.burgerOpen : ''}`} onClick={() => setOpen(o => !o)}>
        <span/><span/><span/>
      </button>
    </nav>
  )
}
