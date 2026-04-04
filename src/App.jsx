import { useEffect, useRef, useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

/*
  Cursor: a precise crosshair with live coordinates.
  Two thin 40px lines intersect at the pointer.
  Tick marks at each end. Coordinates shown in the lower-right quadrant.
  On hover: lines shrink, center fills, color shifts to accent.
  Zero lag — follows cursor exactly. No lerp, no ring, no pill.
*/
function Cursor() {
  const rootRef  = useRef(null)
  const coordRef = useRef(null)
  const pos      = useRef({ x: -300, y: -300 })
  const raf      = useRef(null)
  const isActive = useRef(false)

  const checkActive = useCallback(el => {
    return !!(el && el.closest('a, button, input, textarea'))
  }, [])

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = e => { pos.current = { x: e.clientX, y: e.clientY } }

    const onOver = e => {
      const active = checkActive(e.target)
      if (active !== isActive.current) {
        isActive.current = active
        const r = rootRef.current
        if (r) r.dataset.active = active ? '1' : '0'
      }
    }

    const tick = () => {
      const r = rootRef.current
      if (r) r.style.transform = `translate(${pos.current.x}px,${pos.current.y}px)`
      if (coordRef.current) {
        coordRef.current.textContent = `${pos.current.x} · ${pos.current.y}`
      }
      raf.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    raf.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf.current)
    }
  }, [checkActive])

  return (
    <div
      ref={rootRef}
      data-active="0"
      style={{
        position: 'fixed', top: 0, left: 0,
        pointerEvents: 'none', zIndex: 10000,
        willChange: 'transform',
      }}
    >
      <style>{`
        [data-active="0"] .ch-h,
        [data-active="0"] .ch-v { background: rgba(226,232,240,0.45); }
        [data-active="0"] .ch-dot { background: rgba(226,232,240,0.6); width:4px; height:4px; }
        [data-active="0"] .ch-coord { color: rgba(100,116,139,0.7); }
        [data-active="0"] .ch-tick { background: rgba(226,232,240,0.35); }

        [data-active="1"] .ch-h,
        [data-active="1"] .ch-v { background: #a3e635; }
        [data-active="1"] .ch-dot { background: #a3e635; width:6px; height:6px; border-radius:1px; }
        [data-active="1"] .ch-coord { color: #a3e635; }
        [data-active="1"] .ch-tick { background: #a3e635; }

        [data-active="0"] .ch-h { width: 36px; }
        [data-active="1"] .ch-h { width: 20px; }
        [data-active="0"] .ch-v { height: 36px; }
        [data-active="1"] .ch-v { height: 20px; }

        .ch-h, .ch-v, .ch-dot, .ch-coord, .ch-tick {
          transition: background 0.12s ease, color 0.12s ease, width 0.15s ease, height 0.15s ease, border-radius 0.12s ease;
        }
      `}</style>

      {/* Horizontal arm */}
      <div className="ch-h" style={{
        position: 'absolute', top: -0.5, left: -18,
        height: 1,
      }}>
        {/* Left tick */}
        <div className="ch-tick" style={{
          position: 'absolute', left: 0, top: -3,
          width: 1, height: 6,
        }} />
      </div>
      <div className="ch-h" style={{
        position: 'absolute', top: -0.5, left: 4,
        height: 1,
      }}>
        {/* Right tick */}
        <div className="ch-tick" style={{
          position: 'absolute', right: 0, top: -3,
          width: 1, height: 6,
        }} />
      </div>

      {/* Vertical arm */}
      <div className="ch-v" style={{
        position: 'absolute', left: -0.5, top: -18,
        width: 1,
      }}>
        {/* Top tick */}
        <div className="ch-tick" style={{
          position: 'absolute', top: 0, left: -3,
          width: 6, height: 1,
        }} />
      </div>
      <div className="ch-v" style={{
        position: 'absolute', left: -0.5, top: 4,
        width: 1,
      }}>
        {/* Bottom tick */}
        <div className="ch-tick" style={{
          position: 'absolute', bottom: 0, left: -3,
          width: 6, height: 1,
        }} />
      </div>

      {/* Center dot */}
      <div className="ch-dot" style={{
        position: 'absolute', top: -2, left: -2,
        borderRadius: '50%',
      }} />

      {/* Coordinates */}
      <span
        ref={coordRef}
        className="ch-coord"
        style={{
          position: 'absolute', top: 9, left: 9,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '8.5px', letterSpacing: '0.02em',
          userSelect: 'none', whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
