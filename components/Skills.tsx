'use client'

import { motion } from 'framer-motion'

const software = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe InDesign',
  'Adobe XD',
  'Adobe After Effects',
  'Adobe Premiere',
  'Figma',
  'Canva',
  'CapCut',
  'WordPress',
]

const services = [
  'UI/UX Design',
  'Brand Identity',
  'Print Design',
  'Logo Design',
  'Social Media Graphics',
  'Illustration',
  'Advertisement & Marketing',
  'Event Graphics',
  'Photo Editing & Manipulation',
  'Typography',
  'UGC Creation',
  'Character Design',
  'Apparel Design',
]

function SkillList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 font-sans text-sm text-white/75">
          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans text-[10px] text-accent tracking-[0.4em] uppercase mb-4"
        >
          Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-white mb-20"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Software */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-6 pb-5 border-b border-border">
              Tools
            </h3>
            <SkillList items={software} />
          </motion.div>

          {/* Design services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-6 pb-5 border-b border-border">
              Design Services
            </h3>
            <SkillList items={services} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
