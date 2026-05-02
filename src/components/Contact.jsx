import { useState, useRef } from 'react'
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
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">

        <div ref={ref} className={`${styles.layout} reveal ${inView ? 'in' : ''}`}>

          <div className={styles.left}>
            <span className={styles.num}>05</span>
            <h2 className={styles.heading}>
              Want to work<br />
              <span className={styles.italic}>together?</span>
            </h2>
            <p className={styles.sub}>
              I'm a first-year student with real projects, time, and genuine
              interest in building things. Open to internships and collaborations.
            </p>
            <div className={styles.contact}>
              <a href={`mailto:${personalInfo.email}`} className={styles.email}>
                {personalInfo.email}
              </a>
              <p className={styles.location}>{personalInfo.location}</p>
            </div>
          </div>

          <div className={styles.form}>
            {status === 'sent' ? (
              <div className={styles.sent}>
                <p className={styles.sentHead}>Sent.</p>
                <p className={styles.sentSub}>I'll reply within a day.</p>
              </div>
            ) : (
              <>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Name</label>
                    <input className={styles.input} placeholder="Your name" value={fields.name} onChange={set('name')} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Email</label>
                    <input className={styles.input} type="email" placeholder="your@email.com" value={fields.email} onChange={set('email')} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Message</label>
                  <textarea className={styles.textarea} placeholder="What's on your mind?" value={fields.message} onChange={set('message')} />
                </div>
                {status === 'error' && (
                  <p className={styles.err}>Something went wrong — email me directly.</p>
                )}
                <button
                  onClick={send}
                  disabled={status === 'sending'}
                  className={`${styles.btn} ${status === 'sending' ? styles.btnSending : ''}`}
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
