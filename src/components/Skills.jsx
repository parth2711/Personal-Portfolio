import { useState } from 'react'
import { skills, dsaProficiency } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './Skills.module.css'

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)
const LayersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
)
const CpuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
)
const ToolIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
)
const AllIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
)

const iconMap = { code: CodeIcon, layers: LayersIcon, cpu: CpuIcon, tool: ToolIcon }

export default function Skills() {
  const [activeTab, setActiveTab] = useState(-1)
  const [ref, inView] = useInView()

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-number mono">02</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === -1 ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(-1)}
          >
            <span className={styles.tabIcon}><AllIcon /></span> All
          </button>
          {skills.map((s, i) => {
            const Icon = iconMap[s.icon] || CodeIcon
            return (
              <button
                key={i}
                className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(i)}
              >
                <span className={styles.tabIcon}><Icon /></span> {s.category}
              </button>
            )
          })}
        </div>

        <div ref={ref} className={`${styles.grid} fade-up ${inView ? 'visible' : ''}`}>
          <div className={styles.categoryGrid}>
            {(activeTab === -1 ? skills : [skills[activeTab]]).map((cat, ci) => {
              const Icon = iconMap[cat.icon] || CodeIcon
              return (
                <div key={ci} className={styles.categoryCard}>
                  <div className={styles.catHeader}>
                    <span className={styles.catIcon}><Icon /></span>
                    <span className={styles.catName}>{cat.category}</span>
                  </div>
                  <div className={styles.chips}>
                    {cat.items.map((item, ii) => (
                      <span key={ii} className={`${styles.chip} ${item.hot ? styles.chipHot : ''}`}>
                        {item.hot && <span className={styles.hotDot} />}
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

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
