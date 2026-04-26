'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  value: string
  duration?: number
}

export default function CountUp({ value, duration = 1.8 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const num = parseInt(value)
  const suffix = value.replace(String(num), '')
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let frame = 0
    const totalFrames = Math.round(duration * 60)
    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * num))
      if (frame >= totalFrames) {
        setCount(num)
        clearInterval(timer)
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, num, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}
