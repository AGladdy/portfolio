'use client'

import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import CountUp from './CountUp'
import CursorTrail from './CursorTrail'
import { projects } from '@/lib/projects'

const stats = [
  { value: '4+', label: 'Years' },
  { value: '30+', label: 'Clients' },
  { value: '70+', label: 'Projects' },
]

const trailImages = projects.slice(0, 7).map((p) => p.cover)

const tagline = [
  'Graphic Designer & Digital Marketer',
  'Design that makes people stop scrolling',
  'Based in New York, NY',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />

      <CursorTrail images={trailImages} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 w-full py-24">
        <div className="text-center">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-border px-3 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="font-sans text-[10px] text-white/60 tracking-[0.2em] uppercase">
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold leading-none text-white text-center"
                style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
              >
                Annalise
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold leading-none text-white text-center"
                style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
              >
                Faith
              </motion.h1>
            </div>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68 }}
            className="mb-12"
          >
            {tagline.map((line) => (
              <p
                key={line}
                className="font-sans text-muted text-[11px] md:text-xs tracking-[0.3em] uppercase leading-relaxed"
              >
                {line}
              </p>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.82 }}
            className="flex justify-center gap-10 mb-12"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-white leading-none mb-1">
                  <CountUp value={s.value} />
                </p>
                <p className="font-sans text-[10px] text-muted tracking-[0.25em] uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTAs — magnetic */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.96 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 bg-accent text-bg hover:bg-accent-light transition-colors duration-200 block"
            >
              View Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 border border-border text-white hover:border-accent hover:text-accent-light transition-all duration-200 block"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] text-muted tracking-[0.35em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-muted/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
