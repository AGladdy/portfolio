'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Intro() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9000] bg-bg flex flex-col items-center justify-center gap-6"
        >
          {/* Logo */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-logo text-6xl md:text-8xl text-white tracking-[0.3em]"
            >
              AF
            </motion.p>
          </div>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-12 h-px bg-accent origin-left"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.35 }}
            className="font-sans text-[10px] text-muted tracking-[0.4em] uppercase"
          >
            Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
