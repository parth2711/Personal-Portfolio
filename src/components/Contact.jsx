import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { personalInfo } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './Contact.module.css'

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [ref, inView] = useInView()

  const set = k => e => setFields(f => ({ ...f, [k]: e.target.value }))

  const send = async () => {
    if (!fields.name || !fields.email || !fields.message) return
    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: fields.name, from_email: fields.email, message: fields.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setFields({ name: '', email: '', message: '' })
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.secNum}>05</span>
        <h2 className={styles.secTitle}>Get In Touch</h2>
        <div className={styles.secRule} />
      </div>

      <div ref={ref} className={`${styles.grid} reveal ${inView ? 'in' : ''}`}>

        <div className={styles.left}>
          <h3 className={styles.headline}>
            Got something<br />
            to build?
          </h3>
          <p className={styles.sub}>
            First-year student, real projects, available for internships
            and collaborations. I respond within a day.
          </p>

          <div className={styles.contactLinks}>
            <a href={`mailto:${personalInfo.email}`} className={styles.contactLink}>
              <span className={styles.linkLabel}>Email</span>
              <span className={styles.linkVal}>{personalInfo.email}</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <span className={styles.linkLabel}>LinkedIn</span>
              <span className={styles.linkVal}>/in/parth-jangir</span>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <span className={styles.linkLabel}>GitHub</span>
              <span className={styles.linkVal}>parth2711</span>
            </a>
          </div>
        </div>

        <div className={styles.right}>
          {status === 'sent' ? (
            <div className={styles.sent}>
              <p className={styles.sentHead}>Message received.</p>
              <p className={styles.sentSub}>I'll reply within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Your Name</label>
                  <input className={styles.input} placeholder="Arjun Sharma" value={fields.name} onChange={set('name')} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email Address</label>
                  <input className={styles.input} type="email" placeholder="arjun@example.com" value={fields.email} onChange={set('email')} />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Tell me about it</label>
                <textarea className={styles.textarea} placeholder="What are you working on? What's the context?" value={fields.message} onChange={set('message')} />
              </div>
              {status === 'error' && (
                <p className={styles.err}>Something went wrong. Email me directly at {personalInfo.email}</p>
              )}
              <button
                onClick={send}
                disabled={status === 'sending'}
                className={`${styles.btn} ${status === 'sending' ? styles.btnSending : ''}`}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>
            </>
          )}
        </div>

      </div>
    </section>
  )
}
