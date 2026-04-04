import { useEffect, useRef, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

/*
  Cursor: 4 corner-bracket "viewfinder" frame + center dot.
  — Frame expands when moving fast, contracts when still.
  — On hover over interactive elements: frame tightens, corners glow accent green.
  — Slight rotation of the frame tracks velocity direction.
  — Dot follows exactly (no lag). Frame follows with gentle ease.
*/
function Cursor() {
  const dotRef    = useRef(null)
  const frameRef  = useRef(null)
  const c         = useRef([null, null, null, null]) // 4 corner elements

  const target  = useRef({ x: -300, y: -300 })
  const current = useRef({ x: -300, y: -300 })
  const vel     = useRef({ x: 0, y: 0 })
  const prev    = useRef({ x: -300, y: -300 })
  const rafId   = useRef(null)
  const active  = useRef(false)

  const setC = i => el => { c.current[i] = el }

  const applyCornerColor = useCallback(color => {
    c.current.forEach(el => {
      if (el) el.style.borderColor = color
    })
  }, [])

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = e => {
      vel.current.x = e.clientX - prev.current.x
      vel.current.y = e.clientY - prev.current.y
      prev.current  = { x: e.clientX, y: e.clientY }
      target.current = { x: e.clientX, y: e.clientY }
    }

    const onOver = e => {
      const wasActive = active.current
      active.current = !!(e.target.closest('a, button, input, textarea'))
      if (active.current !== wasActive) {
        applyCornerColor(active.current ? '#a3e635' : 'rgba(226,232,240,0.5)')
        const dot = dotRef.current
        if (dot) dot.style.background = active.current ? '#a3e635' : 'rgba(226,232,240,0.85)'
      }
    }

    const tick = () => {
      const dot   = dotRef.current
      const frame = frameRef.current
      if (!dot || !frame) { rafId.current = requestAnimationFrame(tick); return }

      // Dot: follows exactly
      const tx = target.current.x
      const ty = target.current.y
      dot.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`

      // Frame: lerps toward cursor
      current.current.x += (tx - current.current.x) * 0.18
      current.current.y += (ty - current.current.y) * 0.18

      const vx    = vel.current.x
      const vy    = vel.current.y
      const speed = Math.sqrt(vx * vx + vy * vy)

      // Size: expands with speed, shrinks on hover
      const baseSize = active.current ? 11 : 18
      const size = Math.min(baseSize + speed * 1.6, 40)

      // Rotation: tracks velocity direction slightly
      const angle = speed > 1 ? Math.atan2(vy, vx) * (180 / Math.PI) * 0.12 : 0

      frame.style.transform = `translate(${current.current.x}px,${current.current.y}px) translate(-50%,-50%) rotate(${angle}deg)`
      frame.style.width  = `${size * 2}px`
      frame.style.height = `${size * 2}px`

      // Decay velocity
      vel.current.x *= 0.7
      vel.current.y *= 0.7

      rafId.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    rafId.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId.current)
    }
  }, [applyCornerColor])

  const cornerBase = {
    position: 'absolute', width: 8, height: 8,
    borderColor: 'rgba(226,232,240,0.5)',
    transition: 'border-color 0.18s ease',
  }

  return (
    <>
      {/* Exact-position dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 4, height: 4, borderRadius: '50%',
          background: 'rgba(226,232,240,0.85)',
          pointerEvents: 'none', zIndex: 10001,
          willChange: 'transform',
          transition: 'background 0.18s ease',
        }}
      />

      {/* Lagging corner frame */}
      <div
        ref={frameRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 36, height: 36,
          pointerEvents: 'none', zIndex: 10000,
          willChange: 'transform, width, height',
          transition: 'width 0.14s ease, height 0.14s ease',
        }}
      >
        {/* Top-left */}
        <div ref={setC(0)} style={{
          ...cornerBase, top: 0, left: 0,
          borderTop: '1.5px solid', borderLeft: '1.5px solid',
        }} />
        {/* Top-right */}
        <div ref={setC(1)} style={{
          ...cornerBase, top: 0, right: 0,
          borderTop: '1.5px solid', borderRight: '1.5px solid',
        }} />
        {/* Bottom-left */}
        <div ref={setC(2)} style={{
          ...cornerBase, bottom: 0, left: 0,
          borderBottom: '1.5px solid', borderLeft: '1.5px solid',
        }} />
        {/* Bottom-right */}
        <div ref={setC(3)} style={{
          ...cornerBase, bottom: 0, right: 0,
          borderBottom: '1.5px solid', borderRight: '1.5px solid',
        }} />
      </div>
    </>
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
