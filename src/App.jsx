import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  let rx = 0, ry = 0

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      const { clientX: x, clientY: y } = e
      dot.current.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`
      rx += (x - rx) * 0.13
      ry += (y - ry) * 0.13
      ring.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
    }

    let frame
    const onMove = (e) => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => move(e)) }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={dot}  style={dotStyle}  />
      <div ref={ring} style={ringStyle} />
    </>
  )
}

const dotStyle = {
  position:'fixed', top:0, left:0, width:6, height:6,
  background:'var(--accent)', borderRadius:'50%',
  pointerEvents:'none', zIndex:10000,
  transition:'transform 0.04s',
}
const ringStyle = {
  position:'fixed', top:0, left:0, width:30, height:30,
  border:'1.5px solid var(--accent)', borderRadius:'50%',
  pointerEvents:'none', zIndex:9999,
  transition:'transform 0.12s ease',
  opacity:0.55,
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
