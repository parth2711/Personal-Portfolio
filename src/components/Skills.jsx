import { useState } from 'react'
import { skills, dsaProficiency } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './Skills.module.css'

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const [ref, inView] = useInView()

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-number mono">02</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>

        {/* Category tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === -1 ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(-1)}
          >
            <span className={styles.tabIcon}>⚡</span> All
          </button>
          {skills.map((s, i) => (
            <button
              key={i}
              className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <span className={styles.tabIcon}>{s.icon}</span> {s.category}
            </button>
          ))}
        </div>

        <div ref={ref} className={`${styles.grid} fade-up ${inView ? 'visible' : ''}`}>
          {/* Skill category cards */}
          <div className={styles.categoryGrid}>
            {(activeTab === -1 ? skills : [skills[activeTab]]).map((cat, ci) => (
              <div key={ci} className={styles.categoryCard}>
                <div className={styles.catHeader}>
                  <span className={styles.catIcon}>{cat.icon}</span>
                  <span className={styles.catName}>{cat.category}</span>
                </div>
                <div className={styles.chips}>
                  {cat.items.map((item, ii) => (
                    <span
                      key={ii}
                      className={`${styles.chip} ${item.hot ? styles.chipHot : ''}`}
                    >
                      {item.hot && <span className={styles.hotDot} />}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* DSA Panel */}
          <div className={styles.dsaPanel}>
            <h3 className={styles.dsaTitle}>DSA Proficiency</h3>
            <p className={styles.dsaSub}>// measured in competitive problem-solving</p>

            {dsaProficiency.map((d, i) => (
              <div key={i} className={styles.bar}>
                <div className={styles.barTop}>
                  <span className={styles.barLabel}>{d.label}</span>
                  <span className={styles.barPct}>{d.pct}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ width: inView ? `${d.pct}%` : '0%', transitionDelay: `${i * 0.12}s` }}
                  />
                </div>
              </div>
            ))}

            <div className={styles.statsRow}>
              {[['200+','Problems'],['3','Platforms'],['Top 30%','LeetCode']].map(([v,k]) => (
                <div key={k} className={styles.statBox}>
                  <div className={styles.statVal}>{v}</div>
                  <div className={styles.statKey}>{k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
