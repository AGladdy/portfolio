'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  strength?: number
  as?: 'a' | 'button'
}

export default function MagneticButton({
  children,
  className,
  href,
  target,
  rel,
  onClick,
  strength = 0.35,
  as: Tag = href ? 'a' : 'button',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 22, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 22, mass: 0.5 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block"
    >
      <Tag
        href={href as string}
        target={target}
        rel={rel}
        className={className}
        onClick={onClick}
      >
        {children}
      </Tag>
    </motion.div>
  )
}
