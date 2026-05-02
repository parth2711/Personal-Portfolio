import { personalInfo } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">

        <div ref={ref} className={`${styles.layout} reveal ${inView ? 'in' : ''}`}>

          {/* Left: the number + heading */}
          <div className={styles.left}>
            <span className={styles.num}>01</span>
            <h2 className={styles.heading}>About</h2>
          </div>

          {/* Right: actual content — two columns */}
          <div className={styles.right}>
            <div className={styles.bio}>
              <p>
                I'm Parth — first-year CS at VIT Bhopal. Got into programming
                in class XI with C++, and the thing that kept me going was
                that every problem had a clean solution if you found the right angle.
                That's still what I like about it.
              </p>
              <p>
                I don't have a clean separation between "backend" and "frontend" or
                "ML" and "product." I pick up whatever the thing needs. Right now
                that means React for UIs, FastAPI for backends, TensorFlow when
                there's a model involved, and C++ for anything that needs to be fast.
              </p>
              <p>
                DevAct came from a simple annoyance: I had to check GitHub,
                LeetCode, and Codeforces separately to understand what I'd
                actually done that week. So I built one dashboard that shows all of it.
                That's usually how my projects start.
              </p>
              <p>
                Off the screen: I play football on weekends. Sometimes table tennis.
                Occasionally a Codeforces round at midnight when I should be sleeping.
              </p>

              <div className={styles.links}>
                {[
                  { label: 'GitHub',     href: personalInfo.github },
                  { label: 'LinkedIn',   href: personalInfo.linkedin },
                  { label: 'LeetCode',   href: personalInfo.leetcode },
                  { label: 'Codeforces', href: personalInfo.codeforces },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={styles.link}>
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Education</p>
                <p className={styles.sideMain}>B.Tech CSE — AI & ML</p>
                <p className={styles.sideSub}>VIT Bhopal · 2024–2028</p>
              </div>
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Before that</p>
                <p className={styles.sideMain}>Delhi Public School, Bhilai</p>
                <p className={styles.sideSub}>Class XII · 2010–2024</p>
              </div>
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Competing on</p>
                <p className={styles.sideMain}>LeetCode · Codeforces</p>
                <p className={styles.sideSub}>200+ problems</p>
              </div>
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Currently building</p>
                <p className={styles.sideMain}>DevAct</p>
                <p className={styles.sideSub}>developer activity aggregator</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
