'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/85 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-logo text-xl text-white tracking-[0.2em] hover:text-accent-light transition-colors duration-300"
        >
          AF
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-200 ${
                activeSection === link.id ? 'text-white' : 'text-muted hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ))}
          <a
            href="/assets/AnnaliseWheeler_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-[0.2em] uppercase px-5 py-2 border border-accent/60 text-accent hover:bg-accent hover:text-bg transition-all duration-200"
          >
            CV
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
        >
          <span className={`block w-5 h-px bg-white origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-px bg-white origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-lg border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-4 font-sans text-xs tracking-[0.2em] uppercase border-b border-border last:border-none transition-colors duration-200 ${
                    activeSection === link.id ? 'text-accent' : 'text-muted hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/assets/AnnaliseWheeler_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 font-sans text-xs text-accent tracking-[0.2em] uppercase"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
