'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      await emailjs.send(
        'service_gca4f7b',
        'template_99x0mlc',
        { name: form.name, body: form.message, number: form.phone, address: form.email },
        '7rIXTtOS2NTUD1rAc'
      )
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-surface border border-border px-4 py-3.5 font-sans text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent/60 transition-colors duration-200'

  return (
    <section id="contact" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: intro */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[10px] text-accent tracking-[0.4em] uppercase mb-4"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white mb-8 leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Let&apos;s
            <br />
            Talk.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-muted leading-relaxed"
          >
            Have a project in mind? I&apos;d love to hear about it.
            Send a message and I&apos;ll get back to you as soon as possible.
          </motion.p>
        </div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <textarea
            name="message"
            placeholder="Message *"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            className={`${inputClass} resize-none`}
          />
          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className="w-full py-4 font-sans text-xs tracking-[0.25em] uppercase bg-accent text-bg hover:bg-accent-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending'
              ? 'Sending...'
              : status === 'sent'
              ? 'Message Sent ✓'
              : 'Send Message'}
          </button>
          {status === 'error' && (
            <p className="font-sans text-xs text-red-400 text-center tracking-wide">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
