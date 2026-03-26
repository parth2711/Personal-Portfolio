import { useState } from 'react'
import { personalInfo } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [ref, inView] = useInView()

  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Open mail client as fallback
    const body = encodeURIComponent(`Name: ${form.name}\n\n${form.message}`)
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact')
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`)
    setTimeout(() => setStatus('sent'), 800)
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-number mono">05</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>

        <div ref={ref} className={`${styles.grid} fade-up ${inView ? 'visible' : ''}`}>
          {/* Left */}
          <div>
            <h3 className={styles.heading}>
              Let's build something <span>great</span> together
            </h3>
            <p className={styles.sub}>
              Open to internships, collaborations, and interesting problems. Drop me a message — I respond fast.
            </p>

            {[
              { icon: '✉️', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: '📍', label: 'Location', value: personalInfo.location, href: null },
              { icon: '💼', label: 'LinkedIn', value: 'parth-jangir', href: personalInfo.linkedin },
            ].map(item => (
              <div key={item.label} className={styles.infoItem}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div>
                  <div className={styles.infoLabel}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noreferrer" className={styles.infoValue}>{item.value}</a>
                    : <div className={styles.infoValue}>{item.value}</div>}
                </div>
              </div>
            ))}

            <div className={styles.availability}>
              <span className={styles.pulse} />
              Available for opportunities
            </div>
          </div>

          {/* Right */}
          <div className={styles.form}>
            <p className={styles.formTitle}>// send_message.exe</p>

            {status === 'sent' ? (
              <div className={styles.success}>
                ✅ Message opened in your mail client!<br/>
                <span style={{ color: 'var(--text3)', fontSize: '0.75rem' }}>Alternatively email me at {personalInfo.email}</span>
              </div>
            ) : (
              <>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>name *</label>
                    <input className={styles.input} placeholder="Arjun Sharma" value={form.name} onChange={update('name')} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>email *</label>
                    <input className={styles.input} type="email" placeholder="arjun@example.com" value={form.email} onChange={update('email')} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>subject</label>
                  <input className={styles.input} placeholder="Let's collaborate on..." value={form.subject} onChange={update('subject')} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>message *</label>
                  <textarea className={styles.textarea} placeholder="Tell me about your project or opportunity..." value={form.message} onChange={update('message')} />
                </div>
                <button
                  className={`${styles.submit} ${status === 'sending' ? styles.submitSending : ''}`}
                  onClick={handleSubmit}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
