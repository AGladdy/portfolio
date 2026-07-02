'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiX } from 'react-icons/fi'
import type { Project } from '@/lib/projects'
import ProjectSections from './ProjectSections'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [project])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/85 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-surface overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-10 flex items-start justify-between p-6 bg-surface border-b border-border">
              <div>
                <p className="font-sans text-[10px] text-accent tracking-[0.3em] uppercase mb-1">
                  {project.category}
                </p>
                <h2 className="font-display text-xl md:text-2xl font-bold text-white leading-tight mb-2">
                  {project.title}
                </h2>
                <p className="font-sans text-sm text-muted leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-muted hover:text-white transition-colors duration-200 p-1 -mr-1 mt-1 flex-shrink-0"
              >
                <FiX size={22} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {project.sections ? (
                <ProjectSections sections={project.sections} />
              ) : project.isSocialMedia && project.videos ? (
                /* Short form video grid */
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.videos.map((src, i) => (
                    // eslint-disable-next-line jsx-a11y/media-has-caption
                    <div key={i} className="aspect-[9/16] bg-surface-2 overflow-hidden">
                      <video
                        src={src}
                        controls
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {/* Cover image */}
                  <div className="w-full bg-surface-2 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="w-full max-h-[60vh] object-contain"
                    />
                  </div>

                  {/* Video player */}
                  {project.hasVideo && project.video && (
                    <div>
                      <p className="font-sans text-[10px] text-muted tracking-[0.3em] uppercase mb-3">
                        Preview
                      </p>
                      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                      <video
                        src={project.video}
                        controls
                        playsInline
                        className="w-full aspect-video bg-surface-2"
                      />
                    </div>
                  )}

                  {/* External link */}
                  {project.hasWebsite && project.website && (
                    <div>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase px-7 py-3.5 bg-accent text-bg hover:bg-accent-light transition-colors duration-200"
                      >
                        <FiExternalLink size={14} />
                        View Project
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
