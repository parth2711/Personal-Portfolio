import { useEffect, useRef, useState } from 'react'
import { personalInfo, roles } from '../data/portfolio'
import styles from './Hero.module.css'

function MatrixCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let drops = []
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/{}[]=+-*&|!#@$'

    const init = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      const cols = Math.floor(canvas.width / 14)
      drops = Array(cols).fill(1)
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(5,8,16,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#a3e635'
      ctx.font = '13px JetBrains Mono, monospace'
      drops.forEach((y, i) => {
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 14, y * 14)
        if (y * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })
    }

    init()
    const timer = setInterval(draw, 55)
    const onResize = () => init()
    window.addEventListener('resize', onResize)
    return () => { clearInterval(timer); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas ref={ref} className={styles.matrix} />
}

function Typewriter() {
  const [text, setText]    = useState('')
  const [ri, setRi]        = useState(0)
  const [deleting, setDel] = useState(false)

  useEffect(() => {
    const current = roles[ri]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDel(true), 1800)
    } else if (deleting && text === '') {
      setDel(false)
      setRi(r => (r + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
      }, deleting ? 45 : 80)
    }
    return () => clearTimeout(timeout)
  }, [text, ri, deleting])

  return (
    <div className={styles.roles}>
      <span className={styles.rolePrefix}>{'> '}</span>
      <span className={styles.roleText}>{text}</span>
      <span className={`${styles.cursor} blink`}>_</span>
    </div>
  )
}

function Counter({ target }) {
  const [val, setVal]    = useState(0)
  const ref              = useRef(null)
  const started          = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const dur = 1200
        const step = target / (dur / 16)
        let v = 0
        const tick = () => {
          v = Math.min(v + step, target)
          setVal(Math.floor(v))
          if (v < target) requestAnimationFrame(tick)
        }
        tick()
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{val}</span>
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <MatrixCanvas />

      <div className={styles.content}>
        <div className={styles.tag}>
          <span className="blink">▋</span>
          <span className="mono"> init portfolio.exe</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.hello}>Hello, I'm</span>
          <span className={styles.name}>
            <span className={styles.nameParth}>Parth</span>
            <span className={styles.nameJangir}> Jangir</span>
          </span>
        </h1>

        <Typewriter />

        <p className={styles.desc}>
          Building systems where <em>intelligence meets infrastructure</em> —
          from ML pipelines to full-stack platforms, pixel-perfect UIs to optimised algorithms.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className="btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' }) }}>
            View Projects
            <ArrowIcon />
          </a>
          <a href={personalInfo.resumeUrl} download className="btn-ghost">
            Download Resume
          </a>
        </div>

        <div className={styles.stats}>
          {[['9','Repos'],['6','Projects'],['3','Certs']].map(([n,l]) => (
            <div key={l} className={styles.stat}>
              <span className={styles.statNum}><Counter target={+n} />+</span>
              <span className={styles.statLabel}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.codeWindow}>
          <div className={styles.windowBar}>
            <span className={`${styles.dot} ${styles.red}`}   />
            <span className={`${styles.dot} ${styles.yellow}`}/>
            <span className={`${styles.dot} ${styles.green}`} />
            <span className={styles.windowTitle}>parth.cpp</span>
          </div>
          <pre className={styles.code}><code>{`\
`}<span className={styles.kw}>class</span>{` `}<span className={styles.cls}>Engineer</span>{` {
  `}<span className={styles.kw}>private</span>{`:
    string name   = `}<span className={styles.str}>"Parth Jangir"</span>{`;
    string focus  = `}<span className={styles.str}>"Full Stack + ML"</span>{`;
    string status = `}<span className={styles.str}>"Building CivicVision"</span>{`;

  `}<span className={styles.kw}>public</span>{`:
    vector<string> stack() {
      `}<span className={styles.kw}>return</span>{` {
        `}<span className={styles.str}>"C++"</span>{`, `}<span className={styles.str}>"Python"</span>{`, `}<span className={styles.str}>"React"</span>{`,
        `}<span className={styles.str}>"FastAPI"</span>{`, `}<span className={styles.str}>"TensorFlow"</span>{`,
        `}<span className={styles.str}>"PostgreSQL"</span>{`, `}<span className={styles.str}>"OpenCV"</span>{`
      };
    }

    `}<span className={styles.fn}>solve</span>{`(Problem& p) {
      `}<span className={styles.kw}>while</span>{` (!p.solved())
        p.approach(DSA + ML);
      `}<span className={styles.kw}>return</span>{` elegantSolution;
    }
};`}</code></pre>
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span className="mono">scroll</span>
        </div>
      </div>
    </section>
  )
}

const ArrowIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)
