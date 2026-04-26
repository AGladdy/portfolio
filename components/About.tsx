'use client'

import { motion } from 'framer-motion'
import CountUp from './CountUp'

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '30+', label: 'Clients Served' },
  { value: '70+', label: 'Projects Completed' },
]

export default function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square max-w-md w-full"
        >
          {/* Decorative offset frames */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 pointer-events-none" />
          <div className="absolute -top-4 -left-4 w-full h-full border border-accent/10 pointer-events-none" />
          <div className="overflow-hidden w-full h-full border border-border">
            <img
              src="/assets/AFprofile.png"
              alt="Annalise Faith"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[10px] text-accent tracking-[0.4em] uppercase mb-5"
          >
            About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
          >
            Creative at heart,
            <br />
            strategic by nature.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-muted leading-relaxed mb-12"
          >
            I&apos;m a New York-based graphic designer and digital marketer who thrives where
            strategy meets aesthetics. Over 4+ years I&apos;ve built brand identities, led campaigns,
            and designed digital experiences for global nonprofits, emerging labels, and everything
            in between — including work featured through (RED)&apos;s partnership with Fiat. I care
            about work that&apos;s not just beautiful, but intentional.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 pt-10 border-t border-border"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-bold text-accent leading-none mb-2">
                  <CountUp value={s.value} />
                </p>
                <p className="font-sans text-[10px] text-muted tracking-[0.2em] uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
