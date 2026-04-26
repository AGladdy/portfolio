'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(false)
    setLoading(true)

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/')
      router.refresh()
    } else {
      setError(true)
      setLoading(false)
      setPassword('')
    }
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm flex flex-col items-center"
      >
        {/* Logo */}
        <div className="overflow-hidden mb-10">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-logo text-6xl text-white tracking-[0.3em]"
          >
            AF
          </motion.p>
        </div>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-8 h-px bg-accent origin-left mb-10"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="font-sans text-[10px] text-muted tracking-[0.4em] uppercase mb-10"
        >
          Enter Password
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="w-full space-y-4"
        >
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false) }}
            placeholder="••••••••"
            autoFocus
            className={`w-full bg-surface border px-4 py-3.5 font-sans text-sm text-white placeholder:text-muted/40 text-center tracking-[0.3em] focus:outline-none transition-colors duration-200 ${
              error ? 'border-red-500/60' : 'border-border focus:border-accent/60'
            }`}
          />

          {error && (
            <p className="font-sans text-[10px] text-red-400 tracking-[0.25em] uppercase text-center">
              Incorrect password
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-4 font-sans text-xs tracking-[0.3em] uppercase bg-accent text-bg hover:bg-accent-light transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Verifying...' : 'Enter'}
          </button>
        </motion.form>
      </motion.div>
    </div>
  )
}
