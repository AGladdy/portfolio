'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [mounted, setMounted] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const ringX = useSpring(mouseX, { stiffness: 180, damping: 18, mass: 0.4 })
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 18, mass: 0.4 })

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    setMounted(true)

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) setHovering(true)
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <>
      {/* Dot — instant */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        animate={{ scale: hovering ? 0 : 1, opacity: hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        <div className="w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </motion.div>

      {/* Ring — spring lag */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.7 : 1 }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
      >
        <div className="w-9 h-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/50" />
      </motion.div>
    </>
  )
}
