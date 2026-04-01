import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { personalInfo } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './Contact.module.css'

export default function Contact() {
  const formRef = useRef(null)
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [ref, inView] = useInView()

  const set = k => e => setFields(f => ({ ...f, [k]: e.target.value }))

  const handleSend = async () => {
    if (!fields.name || !fields.email || !fields.message) return
    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  fields.name,
          from_email: fields.email,
          message:    fields.message,
          to_email:   personalInfo.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setFields({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-number mono">05</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className={`${styles.layout} fade-up ${inView ? 'visible' : ''}`}>

          {/* ── Left ── */}
          <div className={styles.left}>
            <h3 className={styles.heading}>
              Let's work<br />on something.
            </h3>

            <p className={styles.sub}>
              I'm a first-year student with time, energy, and real projects under my belt.
              If you're building something interesting or have an internship in mind, I'd
              like to hear about it.
            </p>

            <div className={styles.contactLine}>
              <span className={styles.contactLabel}>Email</span>
              <a href={`mailto:${personalInfo.email}`} className={styles.contactVal}>
                {personalInfo.email}
              </a>
            </div>
            <div className={styles.contactLine}>
              <span className={styles.contactLabel}>Location</span>
              <span className={styles.contactVal}>{personalInfo.location}</span>
            </div>
            <div className={styles.contactLine}>
              <span className={styles.contactLabel}>LinkedIn</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.contactVal}>
                /in/parth-jangir
              </a>
            </div>

            <div className={styles.available}>
              <span className={styles.availDot} />
              Available — responding within 24h
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className={styles.formWrap}>
            {status === 'sent' ? (
              <div className={styles.sent}>
                <div className={styles.sentCheck}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className={styles.sentHeading}>Sent.</p>
                <p className={styles.sentSub}>I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Name</label>
                    <input
                      className={styles.input}
                      placeholder="Your name"
                      value={fields.name}
                      onChange={set('name')}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Email</label>
                    <input
                      className={styles.input}
                      type="email"
                      placeholder="your@email.com"
                      value={fields.email}
                      onChange={set('email')}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    className={styles.textarea}
                    placeholder="What's on your mind?"
                    value={fields.message}
                    onChange={set('message')}
                  />
                </div>

                {status === 'error' && (
                  <p className={styles.errorMsg}>
                    Something went wrong — email me directly at {personalInfo.email}
                  </p>
                )}

                <button
                  className={`${styles.btn} ${status === 'sending' ? styles.btnSending : ''}`}
                  onClick={handleSend}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send'}
                  {status !== 'sending' && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  )}
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
