'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'

type Category = 'All' | string

const categories: Category[] = [
  'All',
  'Naväge',
  'Campaign',
  'Branding',
  'UI/UX Design',
  'Event Design',
  'Print Design',
  'Social Media',
  'Digital Marketing',
]

type View = 'grid' | 'reel'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [view, setView] = useState<View>('grid')
  const reelRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-28">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[10px] text-accent tracking-[0.4em] uppercase mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
          >
            Selected Work
          </motion.h2>
        </div>

        {/* View toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-1 border border-border p-1 self-start md:self-auto"
        >
          {(['grid', 'reel'] as View[]).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-200 ${
                view === v ? 'bg-accent text-bg' : 'text-muted hover:text-white'
              }`}
            >
              {v}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Category filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-200 ${
              activeCategory === cat
                ? 'border-accent text-accent'
                : 'border-border text-muted hover:border-white/30 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid view */}
      {view === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((project, i) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              onClick={() => router.push(`/projects/${project.id}`)}
              className="group relative aspect-square overflow-hidden bg-surface text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              {/* Number label */}
              <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-display text-xs text-white/40 tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <img
                src={project.cover}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-0 bg-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-sans text-[10px] text-accent tracking-[0.3em] uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {project.category}
                </p>
                <h3 className="font-display text-base md:text-lg font-bold text-white leading-snug">
                  {project.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 border border-accent/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-accent text-sm leading-none">↗</span>
              </div>
            </motion.button>
          ))}
        </div>
      )}

      {/* Reel view */}
      {view === 'reel' && (
        <div ref={reelRef} className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={reelRef}
            dragElastic={0.1}
            className="flex gap-4 cursor-grab active:cursor-grabbing pb-4"
            style={{ width: 'max-content' }}
          >
            {filtered.map((project, i) => (
              <motion.button
                key={project.id}
                onClick={() => router.push(`/projects/${project.id}`)}
                className="group relative flex-shrink-0 w-72 aspect-square overflow-hidden bg-surface text-left focus:outline-none"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Number */}
                <span className="absolute top-4 left-4 z-10 font-display text-xs text-white/30 tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <img
                  src={project.cover}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-sans text-[9px] text-accent tracking-[0.3em] uppercase mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-display text-sm font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </motion.div>
          <p className="font-sans text-[10px] text-muted tracking-[0.2em] uppercase mt-3">
            ← Drag to explore →
          </p>
        </div>
      )}
    </section>
  )
}
