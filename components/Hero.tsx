'use client'

import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import CountUp from './CountUp'

const stats = [
  { value: '4+', label: 'Years' },
  { value: '30+', label: 'Clients' },
  { value: '70+', label: 'Projects' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-24">
        {/* Left: Text */}
        <div>
          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-xs text-muted tracking-[0.35em] uppercase mb-6"
          >
            New York, NY
          </motion.p>

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
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold leading-none text-white"
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
              className="font-display font-bold leading-none text-accent"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
            >
              Faith.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68 }}
            className="font-sans text-muted text-base md:text-lg leading-relaxed mb-12 max-w-md"
          >
            Graphic Designer & Digital Marketer
            <br />
            Design that makes people stop scrolling.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.82 }}
            className="flex gap-10 mb-12"
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
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              href="#projects"
              className="font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 bg-accent text-bg hover:bg-accent-light transition-colors duration-200 block"
            >
              View Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 border border-border text-white hover:border-accent hover:text-accent transition-all duration-200 block"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex justify-end"
        >
          <div className="relative w-full max-w-xs lg:max-w-sm">
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-accent/20" />
            <div className="absolute -top-5 -left-5 w-full h-full border border-accent/10" />
            <div className="relative aspect-[3/4] overflow-hidden border border-border">
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                src="/assets/profilevid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
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
