'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [mounted, setMounted] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const x = useSpring(mouseX, { stiffness: 300, damping: 24, mass: 0.4 })
  const y = useSpring(mouseY, { stiffness: 300, damping: 24, mass: 0.4 })

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
    <motion.div
      style={{ x, y }}
      animate={{ scale: hovering ? 1.8 : 1 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
    >
      <div className="w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
    </motion.div>
  )
}
