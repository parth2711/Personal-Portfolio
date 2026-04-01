import { useEffect, useRef } from 'react'
import { personalInfo } from '../data/portfolio'
import styles from './Hero.module.css'

// Subtle ambient canvas — not matrix rain, just slow drifting particles
function AmbientCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let raf

    const init = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      particles = Array.from({ length: 55 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        dx: (Math.random() - 0.5) * 0.18,
        dy: (Math.random() - 0.5) * 0.18,
        o: Math.random() * 0.35 + 0.05,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(163,230,53,${p.o})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      raf = requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener('resize', init)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', init) }
  }, [])
  return <canvas ref={ref} className={styles.ambient} />
}

const now = [
  { key: 'Building',   val: 'DevAct',                   sub: 'developer activity platform' },
  { key: 'Studying',   val: 'B.Tech CSE, AI & ML',       sub: 'VIT Bhopal · 2024–2028' },
  { key: 'Competing',  val: 'Codeforces · LeetCode',     sub: 'Div. 3/4 · 200+ problems' },
  { key: 'Available',  val: 'Internships · Collabs',      sub: 'jangirparth@gmail.com' },
]

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <AmbientCanvas />

      {/* ── Left ── */}
      <div className={styles.left}>
        <p className={styles.location}>Bhilai, India · 2024</p>

        <h1 className={styles.name}>
          <span className={styles.nameFirst}>Parth</span>
          <span className={styles.nameLast}>Jangir</span>
        </h1>

        <p className={styles.role}>
          Software Engineer &amp; ML Builder
        </p>

        <p className={styles.desc}>
          I write C++ for algorithms, Python for machine learning,
          and React for the products that tie it all together.
          Currently a CS student at VIT Bhopal — building in public.
        </p>

        <div className={styles.actions}>
          <a
            href="#projects"
            className="btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            See my work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href={personalInfo.resumeUrl} download className="btn-ghost">Resume</a>
        </div>
      </div>

      {/* ── Right: status panel ── */}
      <div className={styles.right}>
        <div className={styles.statusPanel}>
          <p className={styles.statusTitle}>Now</p>
          <div className={styles.statusList}>
            {now.map(item => (
              <div key={item.key} className={styles.statusRow}>
                <span className={styles.statusKey}>{item.key}</span>
                <div className={styles.statusVal}>
                  <span className={styles.statusMain}>{item.val}</span>
                  <span className={styles.statusSub}>{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.statusFooter}>
            <span className={styles.dot} />
            <span>Open to work</span>
          </div>
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span className="mono">scroll</span>
        </div>
      </div>
    </section>
  )
}
