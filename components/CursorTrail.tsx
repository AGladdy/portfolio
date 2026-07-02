'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TrailItem {
  id: number
  x: number
  y: number
  src: string
  rotate: number
}

const SPAWN_DISTANCE = 68
const LIFESPAN_MS = 450
const MAX_ITEMS = 6

export default function CursorTrail({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [items, setItems] = useState<TrailItem[]>([])
  const lastPos = useRef<{ x: number; y: number } | null>(null)
  const counter = useRef(0)
  const imgIndex = useRef(0)
  const timers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map())

  useEffect(() => {
    if (images.length === 0) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return

      const last = lastPos.current
      if (last && Math.hypot(x - last.x, y - last.y) < SPAWN_DISTANCE) return
      lastPos.current = { x, y }

      const id = counter.current++
      const src = images[imgIndex.current % images.length]
      imgIndex.current++

      setItems((prev) => [
        ...prev.slice(-(MAX_ITEMS - 1)),
        { id, x, y, src, rotate: Math.random() * 16 - 8 },
      ])

      const timer = setTimeout(() => {
        setItems((prev) => prev.filter((it) => it.id !== id))
        timers.current.delete(id)
      }, LIFESPAN_MS)
      timers.current.set(id, timer)
    }

    window.addEventListener('mousemove', handleMove)
    const timersMap = timers.current
    return () => {
      window.removeEventListener('mousemove', handleMove)
      timersMap.forEach(clearTimeout)
      timersMap.clear()
    }
  }, [images])

  return (
    <div ref={containerRef} className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.6, filter: 'blur(6px)' }}
            animate={{ opacity: 1, scale: 1, rotate: item.rotate, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.85, filter: 'blur(8px)' }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-16 h-16 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-accent/30 shadow-lg shadow-black/50"
            style={{ left: item.x, top: item.y }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
